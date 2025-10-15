import { NextResponse } from 'next/server'
import { AuthService } from '../../../../lib/auth'
import { prisma } from '../../../../lib/prisma'

/**
 * This endpoint is called AFTER the user has created the escrow on the blockchain
 * It stores the escrow details in the database
 */
export async function POST(request) {
  try {
    const token = request.cookies.get('safeswap_token')?.value

    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const { user } = await AuthService.verifyToken(token)
    const {
      tokenAddress,
      tokenSymbol,
      amount,
      recipientEmail,
      description,
      terms,
      creatorWallet,
      transactionHash,
      contractAddress
    } = await request.json()

    // Validate input
    if (!tokenAddress || !tokenSymbol || !amount || !recipientEmail || !description || !transactionHash) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Create escrow record in database (already created on blockchain)
    const escrow = await prisma.escrow.create({
      data: {
        creatorId: user.id,
        creatorWallet: creatorWallet,
        tokenAddress,
        tokenSymbol,
        amount,
        recipientEmail,
        description,
        terms: terms || null,
        status: 'PENDING',
        contractAddress: contractAddress || process.env.NEXT_PUBLIC_ESCROW_CONTRACT_ADDRESS,
        transactionHash: transactionHash
      },
      include: {
        creator: {
          select: { id: true, name: true, email: true }
        }
      }
    })

    return NextResponse.json({
      message: 'Escrow recorded successfully',
      escrow
    })

  } catch (error) {
    console.error('Error recording escrow:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
