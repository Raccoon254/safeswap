import { NextResponse } from 'next/server'
import { prisma } from '../../../lib/prisma'

export async function GET() {
  try {
    // Test database connection
    await prisma.$connect()

    // Simple query to test
    const userCount = await prisma.user.count()

    return NextResponse.json({
      status: 'Database connected successfully',
      userCount,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Database test error:', error)
    return NextResponse.json({
      error: 'Database connection failed',
      details: error.message
    }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}