import { NextResponse } from 'next/server'
import { AuthService } from '../../../../lib/auth'
import { SiweMessage } from 'siwe'

export async function POST(request) {
  try {
    const token = request.cookies.get('safeswap_token')?.value
    const { message, signature } = await request.json()

    if (!token) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    if (!message || !signature) {
      return NextResponse.json({ error: 'Message and signature are required' }, { status: 400 })
    }

    // Verify current session
    const { user } = await AuthService.verifyToken(token)

    // Verify wallet signature
    const siweMessage = new SiweMessage(message)
    const fields = await siweMessage.verify({ signature })

    if (!fields.success) {
      return NextResponse.json({ error: 'Invalid wallet signature' }, { status: 400 })
    }

    // Link wallet to user
    const updatedUser = await AuthService.linkWallet(user.id, fields.data.address)

    return NextResponse.json({
      message: 'Wallet linked successfully',
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        name: updatedUser.name,
        walletAddress: updatedUser.walletAddress,
        isVerified: updatedUser.isVerified
      }
    })

  } catch (error) {
    console.error('Wallet linking error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}