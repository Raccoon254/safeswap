import { createPublicClient, createWalletClient, http, parseUnits, formatUnits } from 'viem'
import { mainnet, sepolia } from 'viem/chains'

// ERC20 Token ABI (for transfers)
const ERC20_ABI = [
  {
    "inputs": [
      {"name": "to", "type": "address"},
      {"name": "amount", "type": "uint256"}
    ],
    "name": "transfer",
    "outputs": [{"name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{"name": "account", "type": "address"}],
    "name": "balanceOf",
    "outputs": [{"name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "decimals",
    "outputs": [{"name": "", "type": "uint8"}],
    "stateMutability": "view",
    "type": "function"
  }
]

// Get the contract address from environment variable
const ESCROW_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_ESCROW_CONTRACT_ADDRESS || process.env.ESCROW_CONTRACT_ADDRESS

// Determine which chain to use based on environment
const chain = process.env.NEXT_PUBLIC_CHAIN_ID === '1' ? mainnet : sepolia

export class EscrowContractService {

  /**
   * Transfer ERC20 tokens from one address to another
   * This requires the private key to sign the transaction
   */
  static async transferERC20Tokens(privateKey, tokenAddress, fromAddress, toAddress, amount, decimals = 18) {
    try {
      // Create public client for reading blockchain data
      const publicClient = createPublicClient({
        chain,
        transport: http(process.env.RPC_URL || `https://eth-${chain.name}.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`)
      })

      // Create wallet client for signing transactions
      const walletClient = createWalletClient({
        chain,
        transport: http(process.env.RPC_URL || `https://eth-${chain.name}.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`)
      })

      // Parse the amount to the correct decimal format
      const amountWei = parseUnits(amount.toString(), decimals)

      console.log(`Initiating ERC20 transfer: ${amount} tokens from ${fromAddress} to ${toAddress}`)

      // For ETH transfers (tokenAddress is 0x0000000000000000000000000000000000000000)
      if (tokenAddress === '0x0000000000000000000000000000000000000000' ||
          tokenAddress.toLowerCase() === '0x0000000000000000000000000000000000000000') {
        // This would require using a wallet with the private key
        // For now, we return instructions for the frontend to handle via wallet
        return {
          error: 'ETH_TRANSFER_REQUIRES_WALLET',
          message: 'ETH transfers must be initiated from the user wallet',
          to: toAddress,
          value: amountWei.toString(),
          data: '0x'
        }
      }

      // For ERC20 tokens - this also requires wallet interaction
      // Backend cannot directly transfer user's tokens without their private key
      return {
        error: 'TOKEN_TRANSFER_REQUIRES_WALLET',
        message: 'Token transfers must be initiated from the user wallet',
        tokenAddress,
        to: toAddress,
        amount: amountWei.toString(),
        method: 'transfer'
      }

    } catch (error) {
      console.error('Error transferring tokens:', error)
      throw error
    }
  }

  /**
   * Get token decimals
   */
  static async getTokenDecimals(tokenAddress) {
    try {
      const publicClient = createPublicClient({
        chain,
        transport: http(process.env.RPC_URL || `https://eth-${chain.name}.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`)
      })

      if (tokenAddress === '0x0000000000000000000000000000000000000000') {
        return 18 // ETH has 18 decimals
      }

      const decimals = await publicClient.readContract({
        address: tokenAddress,
        abi: ERC20_ABI,
        functionName: 'decimals'
      })

      return Number(decimals)
    } catch (error) {
      console.error('Error getting token decimals:', error)
      return 18 // Default to 18
    }
  }

  /**
   * Since we can't transfer tokens from the backend (requires user's private key),
   * we'll create a transaction request that the frontend can execute
   */
  static async createTransferTransactionRequest(tokenAddress, recipientAddress, amount, decimals = 18) {
    try {
      const amountWei = parseUnits(amount.toString(), decimals)

      // For ETH transfers
      if (tokenAddress === '0x0000000000000000000000000000000000000000') {
        return {
          to: recipientAddress,
          value: amountWei,
          data: '0x',
          chainId: chain.id
        }
      }

      // For ERC20 tokens - need to call transfer function
      // This will be handled by the frontend using wagmi
      return {
        tokenAddress,
        to: recipientAddress,
        amount: amount,
        decimals,
        method: 'transfer',
        chainId: chain.id
      }
    } catch (error) {
      console.error('Error creating transfer transaction request:', error)
      throw error
    }
  }

  /**
   * Log token transfer details (for tracking)
   * In a real escrow, tokens would be held in a smart contract
   * For now, we're doing direct peer-to-peer transfers
   */
  static async simulateTokenTransfer(fromAddress, toAddress, tokenAddress, amount, decimals = 18) {
    console.log('⚠️  Token transfer should be executed by the user via their wallet')
    console.log('Transfer details:', {
      from: fromAddress,
      to: toAddress,
      token: tokenAddress,
      amount: amount,
      decimals
    })

    // Return a mock transaction for development
    // In production, this would be replaced by actual wallet-initiated transfer
    return {
      transactionHash: null,
      status: 'pending_user_action',
      blockNumber: null,
      message: 'User must initiate transfer from their wallet',
      transferDetails: {
        from: fromAddress,
        to: toAddress,
        tokenAddress,
        amount,
        decimals
      }
    }
  }

  /**
   * Get transaction status from blockchain
   */
  static async getTransactionStatus(hash) {
    try {
      const publicClient = createPublicClient({
        chain,
        transport: http(process.env.RPC_URL || `https://eth-${chain.name}.alchemyapi.io/v2/${process.env.ALCHEMY_API_KEY}`)
      })

      const receipt = await publicClient.getTransactionReceipt({ hash })
      return {
        status: receipt.status === 'success' ? 'success' : 'failed',
        blockNumber: receipt.blockNumber,
        gasUsed: receipt.gasUsed
      }
    } catch (error) {
      return { status: 'pending' }
    }
  }
}

export { ESCROW_CONTRACT_ADDRESS }