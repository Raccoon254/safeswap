// Simplified ERC-20 Token Escrow Contract ABI
export const ESCROW_ABI = [
  {
    "inputs": [
      {"name": "_seller", "type": "address"},
      {"name": "_token", "type": "address"},
      {"name": "_amount", "type": "uint256"},
      {"name": "_description", "type": "string"}
    ],
    "name": "createEscrow",
    "outputs": [{"name": "escrowId", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{"name": "_escrowId", "type": "uint256"}],
    "name": "confirmTrade",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{"name": "_escrowId", "type": "uint256"}],
    "name": "cancelEscrow",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{"name": "_escrowId", "type": "uint256"}],
    "name": "disputeEscrow",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{"name": "_escrowId", "type": "uint256"}],
    "name": "releaseFunds",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{"name": "", "type": "uint256"}],
    "name": "escrows",
    "outputs": [
      {"name": "buyer", "type": "address"},
      {"name": "seller", "type": "address"},
      {"name": "token", "type": "address"},
      {"name": "amount", "type": "uint256"},
      {"name": "buyerConfirmed", "type": "bool"},
      {"name": "sellerConfirmed", "type": "bool"},
      {"name": "disputed", "type": "bool"},
      {"name": "completed", "type": "bool"},
      {"name": "cancelled", "type": "bool"},
      {"name": "description", "type": "string"}
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "escrowCount",
    "outputs": [{"name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "name": "escrowId", "type": "uint256"},
      {"indexed": true, "name": "buyer", "type": "address"},
      {"indexed": true, "name": "seller", "type": "address"},
      {"indexed": false, "name": "amount", "type": "uint256"}
    ],
    "name": "EscrowCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "name": "escrowId", "type": "uint256"},
      {"indexed": false, "name": "completed", "type": "bool"}
    ],
    "name": "TradeConfirmed",
    "type": "event"
  }
]

// ERC-20 Token ABI (simplified)
export const ERC20_ABI = [
  {
    "inputs": [
      {"name": "spender", "type": "address"},
      {"name": "amount", "type": "uint256"}
    ],
    "name": "approve",
    "outputs": [{"name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {"name": "owner", "type": "address"},
      {"name": "spender", "type": "address"}
    ],
    "name": "allowance",
    "outputs": [{"name": "", "type": "uint256"}],
    "stateMutability": "view",
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
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [{"name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
  }
]

// Contract addresses (update with actual deployed addresses)
export const CONTRACT_ADDRESSES = {
  ESCROW: process.env.NEXT_PUBLIC_ESCROW_CONTRACT || "0x0000000000000000000000000000000000000000",
  TOKENS: {
    USDC: "0xA0b86a33E6441A8A0B3f7bE80AE9e6a5bF15F935",
    USDT: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    DAI: "0x6B175474E89094C44Da98b954EedeAC495271d0F"
  }
}