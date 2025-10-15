import { NextResponse } from 'next/server'
import { AuthService } from '../../../lib/auth'
import { prisma } from '../../../lib/prisma'
import { EmailService } from '../../../lib/email'

export async function GET(request) {
  try {
    const token = request.cookies.get('safeswap_token')?.value

    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const { user } = await AuthService.verifyToken(token)

    // Get user's escrows (created, received, and sent to their email)
    const escrows = await prisma.escrow.findMany({
      where: {
        OR: [
          { creatorId: user.id },
          { recipientId: user.id },
          { recipientEmail: user.email }
        ]
      },
      include: {
        creator: {
          select: { id: true, name: true, email: true }
        },
        recipient: {
          select: { id: true, name: true, email: true }
        },
        _count: {
          select: { messages: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    })

    // Calculate stats
    const stats = {
      total: escrows.length,
      active: escrows.filter(e => ['PENDING', 'ACTIVE'].includes(e.status)).length,
      completed: escrows.filter(e => e.status === 'COMPLETED').length,
      disputed: escrows.filter(e => e.status === 'DISPUTED').length,
      totalValue: escrows
        .filter(e => e.status === 'COMPLETED')
        .reduce((sum, e) => sum + parseFloat(e.amount), 0)
    }

    return NextResponse.json({
      escrows,
      stats
    })

  } catch (error) {
    console.error('Error fetching escrows:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

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
      recipientWallet,
      description,
      terms,
      creatorWallet,
      transactionHash,
      contractEscrowId,
      contractAddress
    } = await request.json()

    // Validate input
    if (!tokenAddress || !tokenSymbol || !amount || !recipientEmail || !description) {
      return NextResponse.json({ error: 'All required fields must be provided' }, { status: 400 })
    }

    // Validate wallet addresses
    if (creatorWallet && !/^0x[a-fA-F0-9]{40}$/.test(creatorWallet)) {
      return NextResponse.json({ error: 'Invalid creator wallet address format' }, { status: 400 })
    }

    if (recipientWallet && !/^0x[a-fA-F0-9]{40}$/.test(recipientWallet)) {
      return NextResponse.json({ error: 'Invalid recipient wallet address format' }, { status: 400 })
    }

    // Create escrow
    const escrow = await prisma.escrow.create({
      data: {
        creatorId: user.id,
        creatorWallet: creatorWallet || null,
        recipientWallet: recipientWallet || null,
        tokenAddress,
        tokenSymbol,
        amount,
        recipientEmail,
        description,
        terms: terms || null,
        status: 'PENDING',
        transactionHash: transactionHash || null,
        contractEscrowId: contractEscrowId || null,
        contractAddress: contractAddress || null
      },
      include: {
        creator: {
          select: { id: true, name: true, email: true }
        }
      }
    })

    // Send email notifications
    try {
      // Send confirmation email to creator
      await EmailService.sendEscrowCreatedEmail(user.email, escrow)

      // Send notification email to recipient
      await EmailService.sendEscrowReceivedEmail(recipientEmail, escrow, user.email)
    } catch (emailError) {
      console.error('Error sending email notifications:', emailError)
      // Don't fail the escrow creation if emails fail
    }

    return NextResponse.json({
      message: 'Escrow created successfully',
      escrow
    })

  } catch (error) {
    console.error('Error creating escrow:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}