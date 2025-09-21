import { NextResponse } from 'next/server'
import { SiweMessage } from 'siwe'
import jwt from 'jsonwebtoken'

export async function POST(request) {
  try {
    const { message, signature } = await request.json()

    if (!message || !signature) {
      return NextResponse.json({ error: 'Message and signature are required' }, { status: 400 })
    }

    const siweMessage = new SiweMessage(message)
    const fields = await siweMessage.verify({ signature })

    if (!fields.success) {
      return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
    }

    // Create JWT token
    const token = jwt.sign(
      {
        address: fields.data.address,
        chainId: fields.data.chainId
      },
      process.env.JWT_SECRET || 'fallback-secret',
      { expiresIn: '7d' }
    )

    // In production, you might want to store user data in database here

    return NextResponse.json({
      token,
      user: {
        address: fields.data.address,
        chainId: fields.data.chainId
      }
    })
  } catch (error) {
    console.error('Error verifying signature:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}