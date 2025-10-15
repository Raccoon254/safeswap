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

// Get the appropriate chain based on CHAIN_ID from env
const getChain = () => {
  const chainId = process.env.NEXT_PUBLIC_CHAIN_ID || '11155111'
  return chainId === '1' ? mainnet : sepolia
}

// Get RPC URL
const getRpcUrl = () => {
  if (process.env.RPC_URL) {
    return process.env.RPC_URL
  }
  if (process.env.ALCHEMY_API_KEY) {
    const chainId = process.env.NEXT_PUBLIC_CHAIN_ID || '11155111'
    const network = chainId === '1' ? 'eth-mainnet' : 'eth-sepolia'
    return `https://${network}.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
  }
  return undefined // Use default public RPC
}

// Create public client for reading blockchain data
export const publicClient = createPublicClient({
  chain: getChain(),
  transport: http(getRpcUrl()),
  batch: {
    multicall: true,
  },
})

// Web3 Service for blockchain operations
export class Web3Service {

  // Get ETH balance for an address
  static async getETHBalance(address) {
    try {
      const balance = await publicClient.getBalance({
        address: address,
      })
      return formatUnits(balance, 18) // ETH has 18 decimals
    } catch (error) {
      console.error('Error getting ETH balance:', error)
      throw new Error('Failed to get ETH balance: ' + error.message)
    }
  }

  // Get ERC20 token balance
  static async getTokenBalance(tokenAddress, walletAddress) {
    try {
      // ETH case (address is 0x0000...)
      if (tokenAddress === '0x0000000000000000000000000000000000000000') {
        return await this.getETHBalance(walletAddress)
      }

      // Use readContract to get balance and decimals from the blockchain
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
      throw new Error('Failed to get token balance: ' + error.message)
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

      // Fetch real token info from blockchain
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
      throw new Error('Failed to get token info: ' + error.message)
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