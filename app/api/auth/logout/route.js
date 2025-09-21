import { NextResponse } from 'next/server'
import { AuthService } from '../../../../lib/auth'

export async function POST(request) {
  try {
    const token = request.cookies.get('safeswap_token')?.value

    if (token) {
      await AuthService.logout(token)
    }

    const response = NextResponse.json({ message: 'Logged out successfully' })

    // Clear the cookie
    response.cookies.set('safeswap_token', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0
    })

    return response

  } catch (error) {
    console.error('Logout error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}