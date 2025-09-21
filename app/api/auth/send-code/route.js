import { NextResponse } from 'next/server'
import { AuthService } from '../../../../lib/auth'
import { EmailService } from '../../../../lib/email'

export async function POST(request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    console.log('Processing send-code request for:', email)

    // Check if user exists
    const existingUser = await AuthService.findUserByEmail(email)
    const isNewUser = !existingUser

    console.log('User exists:', !!existingUser, 'Is new user:', isNewUser)

    // Create or get user (without name for now)
    const user = await AuthService.createOrGetUser(email)
    console.log('User created/found:', user.id)

    // Create verification code
    const verificationCode = await AuthService.createVerificationCode(
      user.id,
      isNewUser ? 'EMAIL_VERIFICATION' : 'LOGIN'
    )
    console.log('Verification code created:', verificationCode.code)

    // Send email
    await EmailService.sendLoginCode(email, verificationCode.code, user.name || 'User')
    console.log('Email sending completed')

    return NextResponse.json({
      message: 'Verification code sent to your email',
      isNewUser
    })

  } catch (error) {
    console.error('Send code error:', error)
    console.error('Error stack:', error.stack)
    return NextResponse.json({
      error: 'Failed to send verification code',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 })
  }
}