// Escrow Contract ABI - Matches deployed contract
export const ESCROW_ABI = [
  {
    "inputs": [
      {"name": "_recipient", "type": "address"},
      {"name": "_token", "type": "address"},
      {"name": "_amount", "type": "uint256"}
    ],
    "name": "createEscrow",
    "outputs": [{"name": "", "type": "uint256"}],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [{"name": "_escrowId", "type": "uint256"}],
    "name": "confirmEscrow",
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
    "inputs": [{"name": "", "type": "uint256"}],
    "name": "escrows",
    "outputs": [
      {"name": "creator", "type": "address"},
      {"name": "recipient", "type": "address"},
      {"name": "token", "type": "address"},
      {"name": "amount", "type": "uint256"},
      {"name": "status", "type": "uint8"},
      {"name": "creatorConfirmed", "type": "bool"},
      {"name": "recipientConfirmed", "type": "bool"},
      {"name": "disputed", "type": "bool"},
      {"name": "createdAt", "type": "uint256"},
      {"name": "completedAt", "type": "uint256"}
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
    "inputs": [],
    "name": "feePercentage",
    "outputs": [{"name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{"name": "_escrowId", "type": "uint256"}],
    "name": "getEscrow",
    "outputs": [{
      "name": "",
      "type": "tuple",
      "components": [
        {"name": "creator", "type": "address"},
        {"name": "recipient", "type": "address"},
        {"name": "token", "type": "address"},
        {"name": "amount", "type": "uint256"},
        {"name": "status", "type": "uint8"},
        {"name": "creatorConfirmed", "type": "bool"},
        {"name": "recipientConfirmed", "type": "bool"},
        {"name": "disputed", "type": "bool"},
        {"name": "createdAt", "type": "uint256"},
        {"name": "completedAt", "type": "uint256"}
      ]
    }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "name": "escrowId", "type": "uint256"},
      {"indexed": true, "name": "creator", "type": "address"},
      {"indexed": true, "name": "recipient", "type": "address"},
      {"indexed": false, "name": "token", "type": "address"},
      {"indexed": false, "name": "amount", "type": "uint256"}
    ],
    "name": "EscrowCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "name": "escrowId", "type": "uint256"},
      {"indexed": true, "name": "confirmer", "type": "address"},
      {"indexed": false, "name": "isCreator", "type": "bool"}
    ],
    "name": "EscrowConfirmed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "name": "escrowId", "type": "uint256"},
      {"indexed": true, "name": "recipient", "type": "address"},
      {"indexed": false, "name": "amount", "type": "uint256"},
      {"indexed": false, "name": "fee", "type": "uint256"}
    ],
    "name": "EscrowCompleted",
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

// Contract addresses - Sepolia Testnet
export const CONTRACT_ADDRESSES = {
  ESCROW: process.env.NEXT_PUBLIC_ESCROW_CONTRACT || "0x0000000000000000000000000000000000000000",
  TOKENS: {
    // Sepolia testnet token addresses
    USDC: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238", // USDC on Sepolia
    LINK: "0x779877A7B0D9E8603169DdbD7836e478b4624789", // LINK on Sepolia
    DAI: "0x68194a729C2450ad26072b3D33ADaCbcef39D574"   // DAI on Sepolia
  }
}