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
    const { content } = await request.json()

    if (!content || !content.trim()) {
      return NextResponse.json({ error: 'Message content is required' }, { status: 400 })
    }

    // Get escrow details
    const escrow = await prisma.escrow.findUnique({
      where: { id: params.id }
    })

    if (!escrow) {
      return NextResponse.json({ error: 'Escrow not found' }, { status: 404 })
    }

    // Check if user is authorized to message in this escrow
    const isAuthorized = escrow.creatorId === user.id ||
                        escrow.recipientId === user.id ||
                        escrow.recipientEmail === user.email

    if (!isAuthorized) {
      return NextResponse.json({ error: 'Not authorized to message in this escrow' }, { status: 403 })
    }

    // Create message
    const message = await prisma.message.create({
      data: {
        escrowId: params.id,
        senderId: user.id,
        content: content.trim()
      }
    })

    return NextResponse.json({
      message: 'Message sent successfully',
      messageData: message
    })

  } catch (error) {
    console.error('Error sending message:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

export async function GET(request, { params }) {
  try {
    const token = request.cookies.get('safeswap_token')?.value

    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const { user } = await AuthService.verifyToken(token)

    // Get escrow details
    const escrow = await prisma.escrow.findUnique({
      where: { id: params.id }
    })

    if (!escrow) {
      return NextResponse.json({ error: 'Escrow not found' }, { status: 404 })
    }

    // Check if user is authorized to view messages in this escrow
    const isAuthorized = escrow.creatorId === user.id ||
                        escrow.recipientId === user.id ||
                        escrow.recipientEmail === user.email

    if (!isAuthorized) {
      return NextResponse.json({ error: 'Not authorized to view messages in this escrow' }, { status: 403 })
    }

    // Get messages
    const messages = await prisma.message.findMany({
      where: { escrowId: params.id },
      include: {
        sender: {
          select: { id: true, name: true, email: true }
        }
      },
      orderBy: { createdAt: 'asc' }
    })

    return NextResponse.json({
      messages
    })

  } catch (error) {
    console.error('Error fetching messages:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}