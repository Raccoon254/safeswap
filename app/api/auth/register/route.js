import { NextResponse } from 'next/server'
import { AuthService } from '../../../../lib/auth'
import { EmailService } from '../../../../lib/email'

export async function POST(request) {
  try {
    const { email, name } = await request.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    // Create or get user
    const user = await AuthService.createOrGetUser(email, name)

    // Create verification code
    const verificationCode = await AuthService.createVerificationCode(
      user.id,
      user.isVerified ? 'LOGIN' : 'EMAIL_VERIFICATION'
    )

    // Send email
    await EmailService.sendLoginCode(email, verificationCode.code, name || 'User')

    // Send welcome email for new users
    if (!user.isVerified) {
      try {
        await EmailService.sendWelcomeEmail(email, name || 'User')
      } catch (error) {
        console.error('Failed to send welcome email:', error)
        // Don't fail the registration for welcome email
      }
    }

    return NextResponse.json({
      message: 'Verification code sent to your email',
      isNewUser: !user.isVerified
    })

  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}