import jwt from 'jsonwebtoken'
import { prisma } from './prisma'
import crypto from 'crypto'

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret'
const SESSION_EXPIRY = 7 * 24 * 60 * 60 * 1000 // 7 days

export class AuthService {
  // Generate a random 6-digit verification code
  static generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000).toString()
  }

  // Generate a secure session token
  static generateSessionToken() {
    return crypto.randomBytes(32).toString('hex')
  }

  // Find user by email
  static async findUserByEmail(email) {
    return await prisma.user.findUnique({
      where: { email }
    })
  }

  // Create or get user by email
  static async createOrGetUser(email, name = null) {
    let user = await this.findUserByEmail(email)

    if (!user) {
      user = await prisma.user.create({
        data: {
          email,
          name,
          isVerified: false
        }
      })
    }

    return user
  }

  // Create verification code for user
  static async createVerificationCode(userId, type = 'LOGIN') {
    const code = this.generateVerificationCode()
    const expiresAt = new Date(Date.now() + 10 * 60 * 1000) // 10 minutes

    // Invalidate previous codes
    await prisma.verificationCode.updateMany({
      where: {
        userId,
        type,
        used: false
      },
      data: {
        used: true
      }
    })

    // Create new code
    const verificationCode = await prisma.verificationCode.create({
      data: {
        userId,
        code,
        type,
        expiresAt
      }
    })

    return verificationCode
  }

  // Verify code and create session
  static async verifyCodeAndCreateSession(email, code, nickname = null) {
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      throw new Error('User not found')
    }

    const verificationCode = await prisma.verificationCode.findFirst({
      where: {
        userId: user.id,
        code,
        used: false,
        expiresAt: {
          gt: new Date()
        }
      }
    })

    if (!verificationCode) {
      throw new Error('Invalid or expired code')
    }

    // Mark code as used
    await prisma.verificationCode.update({
      where: { id: verificationCode.id },
      data: { used: true }
    })

    // Update user data for new users
    let updatedUser = user
    if (verificationCode.type === 'EMAIL_VERIFICATION') {
      updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: {
          isVerified: true,
          name: nickname || user.name
        }
      })
    }

    // Create session
    const sessionToken = this.generateSessionToken()
    const expiresAt = new Date(Date.now() + SESSION_EXPIRY)

    const session = await prisma.session.create({
      data: {
        userId: updatedUser.id,
        token: sessionToken,
        expiresAt
      }
    })

    // Create JWT token
    const jwtToken = jwt.sign(
      {
        userId: updatedUser.id,
        sessionId: session.id,
        email: updatedUser.email
      },
      JWT_SECRET,
      { expiresIn: '7d' }
    )

    return {
      token: jwtToken,
      user: {
        id: updatedUser.id,
        email: updatedUser.email,
        name: updatedUser.name,
        walletAddress: updatedUser.walletAddress,
        isVerified: updatedUser.isVerified
      }
    }
  }

  // Verify JWT token
  static async verifyToken(token) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET)

      const session = await prisma.session.findFirst({
        where: {
          id: decoded.sessionId,
          expiresAt: { gt: new Date() }
        },
        include: {
          user: true
        }
      })

      if (!session) {
        throw new Error('Invalid session')
      }

      return {
        user: {
          id: session.user.id,
          email: session.user.email,
          name: session.user.name,
          walletAddress: session.user.walletAddress,
          isVerified: session.user.isVerified
        }
      }
    } catch (error) {
      throw new Error('Invalid token')
    }
  }

  // Logout (invalidate session)
  static async logout(token) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET)

      await prisma.session.delete({
        where: { id: decoded.sessionId }
      })

      return true
    } catch (error) {
      return false
    }
  }

  // Link wallet address to user
  static async linkWallet(userId, walletAddress) {
    const user = await prisma.user.update({
      where: { id: userId },
      data: { walletAddress }
    })

    return user
  }

  // Clean expired sessions and codes
  static async cleanupExpired() {
    const now = new Date()

    await Promise.all([
      prisma.session.deleteMany({
        where: { expiresAt: { lt: now } }
      }),
      prisma.verificationCode.deleteMany({
        where: { expiresAt: { lt: now } }
      })
    ])
  }
}