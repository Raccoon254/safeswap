import nodemailer from 'nodemailer'
import { renderEmail } from './email-renderer'

// Create transporter with fallback for development
const createTransporter = () => {
  // Check if SMTP is configured
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn('SMTP not configured, emails will be logged to console')
    return null
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

const transporter = createTransporter()

export class EmailService {

  static async sendLoginCode(email, code, userName) {
    // If no transporter (SMTP not configured), log to console for development
    if (!transporter) {
      console.log('\n=== EMAIL DEBUG ===')
      console.log(`To: ${email}`)
      console.log(`Subject: Your Thraqs login code: ${code}`)
      console.log(`Login Code: ${code}`)
      console.log('=================\n')
      return true
    }

    try {
        const html = await renderEmail('login-code', {
        code,
        userName: userName || 'User'
      })

      const mailOptions = {
        from: `"Thraqs" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
        to: email,
        subject: `Your Thraqs login code: ${code}`,
        html
      }

      const info = await transporter.sendMail(mailOptions)
      console.log('Login code sent:', info.messageId)
      return true
    } catch (error) {
      console.error('Error sending login code:', error)
      // In development, fallback to console logging
      console.log('\n=== EMAIL FALLBACK ===')
      console.log(`To: ${email}`)
      console.log(`Login Code: ${code}`)
      console.log('====================\n')
      return true
    }
  }

  static async sendWelcomeEmail(email, userName) {
    if (!transporter) {
      console.log(`Welcome email would be sent to: ${email}`)
      return true
    }

    try {
      const html = await renderEmail('welcome', {
        userName: userName || 'User',
        dashboardUrl: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`
      })

      const mailOptions = {
        from: `"Thraqs" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
        to: email,
        subject: 'Welcome to Thraqs - Start Trading Securely! 🎉',
        html
      }

      const info = await transporter.sendMail(mailOptions)
      console.log('Welcome email sent:', info.messageId)
      return true
    } catch (error) {
      console.error('Error sending welcome email:', error)
      // Don't throw error for welcome email, it's not critical
      return false
    }
  }

  static async sendEscrowCreatedEmail(email, escrowDetails) {
    if (!transporter) {
      console.log(`Escrow created email would be sent to: ${email}`)
      return true
    }

    try {
      const html = await renderEmail('escrow-created', {
        amount: escrowDetails.amount,
        tokenSymbol: escrowDetails.tokenSymbol,
        recipientEmail: escrowDetails.recipientEmail,
        description: escrowDetails.description,
        escrowId: escrowDetails.id,
        escrowUrl: `${process.env.NEXT_PUBLIC_APP_URL}/escrow/${escrowDetails.id}`
      })

      const mailOptions = {
        from: `"Thraqs" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
        to: email,
        subject: `Escrow Created: ${escrowDetails.amount} ${escrowDetails.tokenSymbol}`,
        html
      }

      const info = await transporter.sendMail(mailOptions)
      console.log('Escrow created email sent:', info.messageId)
      return true
    } catch (error) {
      console.error('Error sending escrow created email:', error)
      return false
    }
  }

  static async sendEscrowReceivedEmail(recipientEmail, escrowDetails, creatorEmail) {
    if (!transporter) {
      console.log(`Escrow received email would be sent to: ${recipientEmail}`)
      return true
    }

    try {
      const html = await renderEmail('escrow-received', {
        amount: escrowDetails.amount,
        tokenSymbol: escrowDetails.tokenSymbol,
        creatorEmail: creatorEmail,
        description: escrowDetails.description,
        escrowId: escrowDetails.id,
        escrowUrl: `${process.env.NEXT_PUBLIC_APP_URL}/escrow/${escrowDetails.id}`
      })

      const mailOptions = {
        from: `"Thraqs" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
        to: recipientEmail,
        subject: `🎉 You received ${escrowDetails.amount} ${escrowDetails.tokenSymbol} on Thraqs`,
        html
      }

      const info = await transporter.sendMail(mailOptions)
      console.log('Escrow received email sent:', info.messageId)
      return true
    } catch (error) {
      console.error('Error sending escrow received email:', error)
      return false
    }
  }

  static async sendEscrowConfirmationEmail(recipientEmail, escrowDetails, confirmerRole, isCompleted, waitingFor) {
    if (!transporter) {
      console.log(`Escrow confirmation email would be sent to: ${recipientEmail}`)
      return true
    }

    try {
      const html = await renderEmail('escrow-confirmed', {
        amount: escrowDetails.amount,
        tokenSymbol: escrowDetails.tokenSymbol,
        description: escrowDetails.description,
        escrowId: escrowDetails.id,
        escrowUrl: `${process.env.NEXT_PUBLIC_APP_URL}/escrow/${escrowDetails.id}`,
        confirmerRole: confirmerRole,
        isCompleted: isCompleted,
        waitingFor: waitingFor
      })

      const subject = isCompleted
        ? `🎉 Trade Completed: ${escrowDetails.amount} ${escrowDetails.tokenSymbol}`
        : `✅ ${confirmerRole} Confirmed: ${escrowDetails.amount} ${escrowDetails.tokenSymbol}`

      const mailOptions = {
        from: `"Thraqs" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
        to: recipientEmail,
        subject: subject,
        html
      }

      const info = await transporter.sendMail(mailOptions)
      console.log('Escrow confirmation email sent:', info.messageId)
      return true
    } catch (error) {
      console.error('Error sending escrow confirmation email:', error)
      return false
    }
  }
}