import { NextResponse } from 'next/server'
import { AuthService } from '../../../../../lib/auth'
import { prisma } from '../../../../../lib/prisma'
import { EmailService } from '../../../../../lib/email'
import { EscrowContractService } from '../../../../../lib/escrow-contract'

export async function POST(request, props) {
  const params = await props.params;
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

    // Check if both parties have wallet addresses for final transfer
    const hasAllWallets = escrow.creatorWallet && escrow.recipientWallet

    if (bothConfirmed && hasAllWallets) {
      updateData.status = 'COMPLETED'
      updateData.completedAt = new Date()
    } else if (bothConfirmed && !hasAllWallets) {
      // Both confirmed but missing wallet addresses
      return NextResponse.json({
        error: 'Both parties must provide wallet addresses before completing the trade'
      }, { status: 400 })
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

    // Handle token transfer if both parties confirmed
    if (bothConfirmed) {
      try {
        // Simulate token transfer (in production, this would interact with smart contract)
        const transferResult = await EscrowContractService.simulateTokenTransfer(
          updatedEscrow.creatorWallet,
          updatedEscrow.recipientWallet,
          updatedEscrow.tokenAddress,
          updatedEscrow.amount
        )

        // Update escrow with transaction hash
        await prisma.escrow.update({
          where: { id: params.id },
          data: {
            transactionHash: transferResult.transactionHash
          }
        })

        console.log('Token transfer simulated:', transferResult)
      } catch (transferError) {
        console.error('Error processing token transfer:', transferError)
        // Don't fail the confirmation if transfer simulation fails
      }
    }

    return NextResponse.json({
      message: bothConfirmed ? 'Escrow completed successfully! Tokens are being transferred.' : 'Confirmation recorded',
      escrow: updatedEscrow
    })

  } catch (error) {
    console.error('Error confirming escrow:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}