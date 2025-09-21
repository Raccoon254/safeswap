import { NextResponse } from 'next/server'
import { AuthService } from '../../../../lib/auth'

export async function POST(request) {
  try {
    const { email, code, nickname } = await request.json()

    if (!email || !code) {
      return NextResponse.json({ error: 'Email and code are required' }, { status: 400 })
    }

    // Verify code and create session
    const { token, user } = await AuthService.verifyCodeAndCreateSession(email, code, nickname)

    // Set HTTP-only cookie for security
    const response = NextResponse.json({
      message: 'Login successful',
      user
    })

    response.cookies.set('safeswap_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 // 7 days
    })

    return response

  } catch (error) {
    console.error('Login error:', error)

    if (error.message === 'User not found') {
      return NextResponse.json({ error: 'User not found. Please register first.' }, { status: 404 })
    }

    if (error.message === 'Invalid or expired code') {
      return NextResponse.json({ error: 'Invalid or expired code. Please request a new one.' }, { status: 400 })
    }

    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}