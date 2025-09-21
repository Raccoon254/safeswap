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
    const { reason } = await request.json()

    // Get escrow details
    const escrow = await prisma.escrow.findUnique({
      where: { id: params.id },
      include: {
        creator: true,
        recipient: true
      }
    })

    if (!escrow) {
      return NextResponse.json({ error: 'Escrow not found' }, { status: 404 })
    }

    // Check if user is authorized to dispute this escrow
    const isCreator = escrow.creatorId === user.id
    const isRecipient = escrow.recipientId === user.id || escrow.recipientEmail === user.email

    if (!isCreator && !isRecipient) {
      return NextResponse.json({ error: 'Not authorized to dispute this escrow' }, { status: 403 })
    }

    // Auto-link recipient if they're disputing via email match
    if (escrow.recipientEmail === user.email && !escrow.recipientId) {
      await prisma.escrow.update({
        where: { id: params.id },
        data: { recipientId: user.id }
      })
    }

    // Check if escrow can be disputed
    if (escrow.status === 'COMPLETED') {
      return NextResponse.json({ error: 'Cannot dispute completed escrow' }, { status: 400 })
    }

    if (escrow.status === 'DISPUTED') {
      return NextResponse.json({ error: 'Escrow already disputed' }, { status: 400 })
    }

    // Update escrow to disputed status
    const updatedEscrow = await prisma.escrow.update({
      where: { id: params.id },
      data: {
        status: 'DISPUTED',
        disputed: true,
        disputeReason: reason || 'Dispute raised by user'
      },
      include: {
        creator: {
          select: { id: true, name: true, email: true }
        },
        recipient: {
          select: { id: true, name: true, email: true }
        }
      }
    })

    // TODO: Send email notifications about dispute
    // TODO: Notify admin/support team about dispute

    return NextResponse.json({
      message: 'Dispute submitted successfully',
      escrow: updatedEscrow
    })

  } catch (error) {
    console.error('Error disputing escrow:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}