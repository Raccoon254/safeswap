import { createPublicClient, http, parseUnits, formatUnits, encodeFunctionData } from 'viem'
import { mainnet, sepolia } from 'viem/chains'

// ERC20 ABI for token operations
const ERC20_ABI = [
  {
    "constant": true,
    "inputs": [{"name": "_owner", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "balance", "type": "uint256"}],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "decimals",
    "outputs": [{"name": "", "type": "uint8"}],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "symbol",
    "outputs": [{"name": "", "type": "string"}],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {"name": "_to", "type": "address"},
      {"name": "_value", "type": "uint256"}
    ],
    "name": "transfer",
    "outputs": [{"name": "", "type": "bool"}],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {"name": "_from", "type": "address"},
      {"name": "_to", "type": "address"},
      {"name": "_value", "type": "uint256"}
    ],
    "name": "transferFrom",
    "outputs": [{"name": "", "type": "bool"}],
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {"name": "_spender", "type": "address"},
      {"name": "_value", "type": "uint256"}
    ],
    "name": "approve",
    "outputs": [{"name": "", "type": "bool"}],
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {"name": "_owner", "type": "address"},
      {"name": "_spender", "type": "address"}
    ],
    "name": "allowance",
    "outputs": [{"name": "", "type": "uint256"}],
    "type": "function"
  }
]

// Get the appropriate chain based on environment
const getChain = () => {
  return process.env.NODE_ENV === 'production' ? mainnet : sepolia
}

// Create public client for reading blockchain data
export const publicClient = createPublicClient({
  chain: getChain(),
  transport: http(),
  batch: {
    multicall: true,
  },
})

// Web3 Service for blockchain operations
export class Web3Service {

  // Get ETH balance for an address
  static async getETHBalance(address) {
    try {
      // For development, return mock ETH balance
      if (process.env.NODE_ENV === 'development') {
        console.log('Development mode: returning mock ETH balance')
        return '10.0' // Mock ETH balance
      }

      const balance = await publicClient.getBalance({
        address: address,
      })
      return formatUnits(balance, 18) // ETH has 18 decimals
    } catch (error) {
      console.error('Error getting ETH balance:', error)

      // Return mock data for development
      if (process.env.NODE_ENV === 'development') {
        console.log('Returning mock ETH balance due to error')
        return '10.0'
      }

      throw new Error('Failed to get ETH balance')
    }
  }

  // Get ERC20 token balance
  static async getTokenBalance(tokenAddress, walletAddress) {
    try {
      // ETH case (address is 0x0000...)
      if (tokenAddress === '0x0000000000000000000000000000000000000000') {
        return await this.getETHBalance(walletAddress)
      }

      // For development/testing, return mock data for known test addresses
      if (process.env.NODE_ENV === 'development') {
        console.log('Development mode: returning mock balance data')
        return '1000.0' // Mock balance for testing
      }

      // Use readContract directly instead of getContract
      const [balance, decimals] = await Promise.all([
        publicClient.readContract({
          address: tokenAddress,
          abi: ERC20_ABI,
          functionName: 'balanceOf',
          args: [walletAddress]
        }),
        publicClient.readContract({
          address: tokenAddress,
          abi: ERC20_ABI,
          functionName: 'decimals'
        })
      ])

      return formatUnits(balance, decimals)
    } catch (error) {
      console.error('Error getting token balance:', error)
      console.error('Token address:', tokenAddress)
      console.error('Wallet address:', walletAddress)

      // Return mock data for development
      if (process.env.NODE_ENV === 'development') {
        console.log('Returning mock balance due to error')
        return '1000.0'
      }

      throw new Error('Failed to get token balance')
    }
  }

  // Get token info (symbol, decimals)
  static async getTokenInfo(tokenAddress) {
    try {
      // ETH case
      if (tokenAddress === '0x0000000000000000000000000000000000000000') {
        return {
          symbol: 'ETH',
          decimals: 18,
          name: 'Ethereum'
        }
      }

      // For development, return mock token info
      if (process.env.NODE_ENV === 'development') {
        const mockTokens = {
          '0xA0b86a33E6441A8A0B3f7bE80AE9e6a5bF15F935': { symbol: 'USDC', decimals: 6 },
          '0xdAC17F958D2ee523a2206206994597C13D831ec7': { symbol: 'USDT', decimals: 6 },
          '0x6B175474E89094C44Da98b954EedeAC495271d0F': { symbol: 'DAI', decimals: 18 }
        }

        return mockTokens[tokenAddress] || { symbol: 'TKN', decimals: 18 }
      }

      const [symbol, decimals] = await Promise.all([
        publicClient.readContract({
          address: tokenAddress,
          abi: ERC20_ABI,
          functionName: 'symbol'
        }),
        publicClient.readContract({
          address: tokenAddress,
          abi: ERC20_ABI,
          functionName: 'decimals'
        })
      ])

      return { symbol, decimals }
    } catch (error) {
      console.error('Error getting token info:', error)

      // Return mock data for development
      if (process.env.NODE_ENV === 'development') {
        return { symbol: 'TKN', decimals: 18 }
      }

      throw new Error('Failed to get token info')
    }
  }

  // Check if user has sufficient balance
  static async checkSufficientBalance(tokenAddress, walletAddress, amount) {
    try {
      const balance = await this.getTokenBalance(tokenAddress, walletAddress)
      const balanceNum = parseFloat(balance)
      const amountNum = parseFloat(amount)

      return {
        hasSufficientBalance: balanceNum >= amountNum,
        currentBalance: balance,
        requiredAmount: amount,
        shortfall: amountNum > balanceNum ? (amountNum - balanceNum).toString() : '0'
      }
    } catch (error) {
      console.error('Error checking balance:', error)
      throw new Error('Failed to check balance')
    }
  }

  // Prepare transfer transaction data
  static prepareTransferTransaction(tokenAddress, toAddress, amount, decimals = 18) {
    try {
      // ETH transfer
      if (tokenAddress === '0x0000000000000000000000000000000000000000') {
        return {
          to: toAddress,
          value: parseUnits(amount.toString(), 18),
          data: '0x'
        }
      }

      // ERC20 transfer
      const amountWei = parseUnits(amount.toString(), decimals)

      // Encode transfer function call
      const transferData = encodeFunctionData({
        abi: ERC20_ABI,
        functionName: 'transfer',
        args: [toAddress, amountWei]
      })

      return {
        to: tokenAddress,
        value: 0n,
        data: transferData
      }
    } catch (error) {
      console.error('Error preparing transfer transaction:', error)
      throw new Error('Failed to prepare transfer transaction')
    }
  }

  // Validate wallet address format
  static isValidAddress(address) {
    return /^0x[a-fA-F0-9]{40}$/.test(address)
  }

  // Get transaction receipt
  static async getTransactionReceipt(hash) {
    try {
      return await publicClient.getTransactionReceipt({ hash })
    } catch (error) {
      console.error('Error getting transaction receipt:', error)
      throw new Error('Failed to get transaction receipt')
    }
  }

  // Wait for transaction confirmation
  static async waitForTransaction(hash, timeout = 30000) {
    try {
      return await publicClient.waitForTransactionReceipt({
        hash,
        timeout
      })
    } catch (error) {
      console.error('Error waiting for transaction:', error)
      throw new Error('Transaction failed or timed out')
    }
  }
}

// Helper function to format token amounts for display
export const formatTokenAmount = (amount, decimals = 18, maxDecimals = 6) => {
  const num = parseFloat(amount)
  if (num === 0) return '0'
  if (num < 0.000001) return '< 0.000001'

  return num.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: maxDecimals
  })
}

// Helper to check if amount is valid
export const isValidAmount = (amount) => {
  const num = parseFloat(amount)
  return !isNaN(num) && num > 0 && isFinite(num)
}