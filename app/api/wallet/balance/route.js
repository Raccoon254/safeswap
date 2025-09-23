import { NextResponse } from 'next/server'
import { Web3Service } from '../../../../lib/web3'

export async function POST(request) {
  try {
    const { walletAddress, tokenAddress, amount } = await request.json()

    console.log('Balance check request:', { walletAddress, tokenAddress, amount })

    if (!walletAddress || !tokenAddress) {
      return NextResponse.json({ error: 'Wallet address and token address are required' }, { status: 400 })
    }

    // Validate wallet address format
    if (!Web3Service.isValidAddress(walletAddress)) {
      return NextResponse.json({ error: 'Invalid wallet address format' }, { status: 400 })
    }

    // Get balance information
    console.log('Getting token balance...')
    const balance = await Web3Service.getTokenBalance(tokenAddress, walletAddress)
    console.log('Got balance:', balance)

    console.log('Getting token info...')
    const tokenInfo = await Web3Service.getTokenInfo(tokenAddress)
    console.log('Got token info:', tokenInfo)

    let balanceCheck = null
    if (amount) {
      console.log('Checking sufficient balance...')
      balanceCheck = await Web3Service.checkSufficientBalance(tokenAddress, walletAddress, amount)
      console.log('Balance check result:', balanceCheck)
    }

    const response = {
      balance,
      tokenInfo,
      balanceCheck,
      walletAddress,
      tokenAddress
    }

    console.log('Returning response:', response)

    return NextResponse.json(response)

  } catch (error) {
    console.error('Error checking balance:', error)
    console.error('Error stack:', error.stack)
    return NextResponse.json({
      error: 'Failed to check balance',
      details: error.message
    }, { status: 500 })
  }
}