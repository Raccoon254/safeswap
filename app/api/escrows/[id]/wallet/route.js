import { NextResponse } from 'next/server'
import { AuthService } from '../../../../../lib/auth'
import { prisma } from '../../../../../lib/prisma'

export async function POST(request, { params }) {
  try {
    const token = request.cookies.get('safeswap_token')?.value

    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const { user } = await AuthService.verifyToken(token)
    const { walletAddress } = await request.json()

    if (!walletAddress) {
      return NextResponse.json({ error: 'Wallet address is required' }, { status: 400 })
    }

    // Basic wallet address validation (Ethereum format)
    if (!/^0x[a-fA-F0-9]{40}$/.test(walletAddress)) {
      return NextResponse.json({ error: 'Invalid wallet address format' }, { status: 400 })
    }

    // Get escrow details
    const escrow = await prisma.escrow.findUnique({
      where: { id: params.id }
    })

    if (!escrow) {
      return NextResponse.json({ error: 'Escrow not found' }, { status: 404 })
    }

    // Check if user is authorized to update this escrow
    const isCreator = escrow.creatorId === user.id
    const isRecipient = escrow.recipientId === user.id || escrow.recipientEmail === user.email

    if (!isCreator && !isRecipient) {
      return NextResponse.json({ error: 'Not authorized to update this escrow' }, { status: 403 })
    }

    // Update the appropriate wallet address
    const updateData = {}
    if (isCreator) {
      updateData.creatorWallet = walletAddress
    }
    if (isRecipient) {
      updateData.recipientWallet = walletAddress
      // Auto-link recipient if they're updating via email match
      if (escrow.recipientEmail === user.email && !escrow.recipientId) {
        updateData.recipientId = user.id
      }
    }

    const updatedEscrow = await prisma.escrow.update({
      where: { id: params.id },
      data: updateData,
      include: {
        creator: {
          select: { id: true, name: true, email: true }
        },
        recipient: {
          select: { id: true, name: true, email: true }
        }
      }
    })

    return NextResponse.json({
      message: 'Wallet address updated successfully',
      escrow: updatedEscrow
    })

  } catch (error) {
    console.error('Error updating wallet address:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}