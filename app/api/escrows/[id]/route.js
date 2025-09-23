import { NextResponse } from 'next/server'
import { AuthService } from '../../../../lib/auth'
import { prisma } from '../../../../lib/prisma'

export async function GET(request, props) {
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
        creator: {
          select: { id: true, name: true, email: true }
        },
        recipient: {
          select: { id: true, name: true, email: true }
        }
      }
    })

    if (!escrow) {
      return NextResponse.json({ error: 'Escrow not found' }, { status: 404 })
    }

    // Check if user is authorized to view this escrow
    const isAuthorized = escrow.creatorId === user.id ||
                        escrow.recipientId === user.id ||
                        escrow.recipientEmail === user.email

    if (!isAuthorized) {
      return NextResponse.json({ error: 'Not authorized to view this escrow' }, { status: 403 })
    }

    // Auto-link recipient if they access via email match
    if (escrow.recipientEmail === user.email && !escrow.recipientId) {
      await prisma.escrow.update({
        where: { id: params.id },
        data: { recipientId: user.id }
      })

      // Refresh escrow data
      const updatedEscrow = await prisma.escrow.findUnique({
        where: { id: params.id },
        include: {
          creator: {
            select: { id: true, name: true, email: true }
          },
          recipient: {
            select: { id: true, name: true, email: true }
          }
        }
      })

      escrow = updatedEscrow
    }

    // Get messages for this escrow
    const messages = await prisma.message.findMany({
      where: { escrowId: params.id },
      orderBy: { createdAt: 'asc' }
    })

    return NextResponse.json({
      escrow,
      messages
    })

  } catch (error) {
    console.error('Error fetching escrow:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}