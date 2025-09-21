import { NextResponse } from 'next/server'
import { generateNonce } from 'siwe'

export async function POST(request) {
  try {
    const { address } = await request.json()

    if (!address) {
      return NextResponse.json({ error: 'Address is required' }, { status: 400 })
    }

    const nonce = generateNonce()

    // In a production app, store the nonce in a database with an expiration time
    // For now, we'll return it directly
    return NextResponse.json({ nonce })
  } catch (error) {
    console.error('Error generating nonce:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}