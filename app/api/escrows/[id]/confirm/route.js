import { NextResponse } from 'next/server'
import { AuthService } from '../../../../../lib/auth'
import { prisma } from '../../../../../lib/prisma'
import { EmailService } from '../../../../../lib/email'

export async function POST(request, { params }) {
  try {
    const token = request.cookies.get('safeswap_token')?.value

    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const { user } = await AuthService.verifyToken(token)

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

    // Check if user is authorized to confirm this escrow
    const isCreator = escrow.creatorId === user.id
    const isRecipient = escrow.recipientId === user.id || escrow.recipientEmail === user.email

    if (!isCreator && !isRecipient) {
      return NextResponse.json({ error: 'Not authorized to confirm this escrow' }, { status: 403 })
    }

    // Auto-link recipient if they're confirming via email match
    if (escrow.recipientEmail === user.email && !escrow.recipientId) {
      await prisma.escrow.update({
        where: { id: params.id },
        data: { recipientId: user.id }
      })
    }

    // Check if escrow can be confirmed
    if (escrow.status === 'COMPLETED') {
      return NextResponse.json({ error: 'Escrow already completed' }, { status: 400 })
    }

    if (escrow.status === 'DISPUTED') {
      return NextResponse.json({ error: 'Cannot confirm disputed escrow' }, { status: 400 })
    }

    // Update confirmation status
    const updateData = {}
    if (isCreator) {
      updateData.sellerConfirmed = true
    }
    if (isRecipient) {
      updateData.buyerConfirmed = true
    }

    // If both parties have confirmed, complete the escrow
    const bothConfirmed = (updateData.buyerConfirmed || escrow.buyerConfirmed) &&
                         (updateData.sellerConfirmed || escrow.sellerConfirmed)

    if (bothConfirmed) {
      updateData.status = 'COMPLETED'
      updateData.completedAt = new Date()
    } else {
      updateData.status = 'ACTIVE'
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

    // Send email notifications
    try {
      const confirmerRole = isCreator ? 'Creator' : 'Recipient'
      const otherPartyEmail = isCreator ? updatedEscrow.recipientEmail : updatedEscrow.creator.email
      const waitingFor = isCreator ? 'recipient' : 'creator'

      if (bothConfirmed) {
        // Send completion emails to both parties
        await EmailService.sendEscrowConfirmationEmail(
          updatedEscrow.creator.email,
          updatedEscrow,
          confirmerRole,
          true,
          null
        )

        await EmailService.sendEscrowConfirmationEmail(
          updatedEscrow.recipientEmail,
          updatedEscrow,
          confirmerRole,
          true,
          null
        )
      } else {
        // Send notification to the other party
        await EmailService.sendEscrowConfirmationEmail(
          otherPartyEmail,
          updatedEscrow,
          confirmerRole,
          false,
          waitingFor
        )
      }
    } catch (emailError) {
      console.error('Error sending confirmation emails:', emailError)
      // Don't fail the confirmation if emails fail
    }

    // TODO: Trigger smart contract transaction if completed

    return NextResponse.json({
      message: bothConfirmed ? 'Escrow completed successfully' : 'Confirmation recorded',
      escrow: updatedEscrow
    })

  } catch (error) {
    console.error('Error confirming escrow:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}