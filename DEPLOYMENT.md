# Smart Contract Deployment Guide

This guide walks you through deploying the Escrow smart contract to blockchain networks.

## Contract Overview

The **Escrow.sol** contract provides:
- ✅ Secure holding of ERC20 tokens and ETH
- ✅ Dual confirmation system (both parties must confirm)
- ✅ 1% fee on completed escrows
- ✅ Dispute resolution mechanism
- ✅ Cancellation by creator (before recipient confirms)
- ✅ Emergency withdrawal functions
- ✅ ReentrancyGuard and OpenZeppelin security

## Prerequisites

### 1. Install Hardhat Dependencies

```bash
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox @openzeppelin/contracts dotenv
```

### 2. Get Required API Keys

#### Alchemy (for RPC):
1. Sign up at [Alchemy](https://www.alchemy.com/)
2. Create a new app (Sepolia for testnet, Ethereum for mainnet)
3. Copy the API key

#### Etherscan (for contract verification):
1. Sign up at [Etherscan](https://etherscan.io/)
2. Go to API Keys section
3. Create a new API key

### 3. Get Test ETH (for testnets)

**Sepolia Testnet:**
- [Alchemy Sepolia Faucet](https://sepoliafaucet.com/)
- [Infura Sepolia Faucet](https://www.infura.io/faucet/sepolia)
- [QuickNode Faucet](https://faucet.quicknode.com/ethereum/sepolia)

You'll need ~0.1 ETH for deployment and testing.

## Configuration

### Update .env File

Add these variables to your `.env` file:

```env
# Deployer wallet private key (NEVER commit this!)
PRIVATE_KEY=your_wallet_private_key_here

# Alchemy API key
ALCHEMY_API_KEY=your_alchemy_api_key_here

# Or use a custom RPC URL
RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your_api_key

# Etherscan API key (for contract verification)
ETHERSCAN_API_KEY=your_etherscan_api_key_here

# Chain ID
NEXT_PUBLIC_CHAIN_ID=11155111
```

### Get Your Private Key

**⚠️ SECURITY WARNING: Never commit your private key or share it!**

**From MetaMask:**
1. Open MetaMask
2. Click the three dots → Account Details
3. Export Private Key
4. Enter your password
5. Copy the private key

**Create a New Wallet for Deployment:**
```bash
# Using Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Then import this private key into MetaMask and fund it with test ETH.

## Deployment Steps

### Step 1: Compile the Contract

```bash
npx hardhat compile
```

Expected output:
```
Compiled 1 Solidity file successfully
```

### Step 2: Test Locally (Optional but Recommended)

Start a local Hardhat node:
```bash
npx hardhat node
```

In another terminal, deploy to local network:
```bash
npx hardhat run scripts/deploy.js --network localhost
```

### Step 3: Deploy to Sepolia Testnet

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

The script will:
- ✅ Deploy the Escrow contract
- ✅ Display the contract address
- ✅ Save deployment info to `./deployments/`
- ✅ Automatically update your `.env` file with the contract address

Example output:
```
🚀 Starting Escrow contract deployment...

📝 Deploying contracts with account: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb0
💰 Account balance: 0.5 ETH

📦 Deploying Escrow contract...
✅ Escrow contract deployed to: 0x1234567890123456789012345678901234567890
🌐 Network: sepolia
🔗 Chain ID: 11155111

📋 Contract Details:
├─ Contract Address: 0x1234567890123456789012345678901234567890
├─ Deployer: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb0
├─ Fee Percentage: 100 basis points (1%)
└─ Owner: 0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb0

💾 Deployment info saved to: ./deployments/sepolia-11155111.json
⚙️  Updating .env file...
✅ .env file updated with contract address
```

### Step 4: Verify Contract on Etherscan

```bash
npx hardhat verify --network sepolia 0xYourContractAddress
```

This makes your contract code public and verifiable.

### Step 5: Deploy to Mainnet (Production)

**⚠️ Only after thorough testing on testnet!**

```bash
# Make sure you have sufficient ETH for gas
npx hardhat run scripts/deploy.js --network mainnet
```

**Pre-mainnet Checklist:**
- [ ] Contract tested extensively on testnet
- [ ] All escrow flows work correctly
- [ ] Fee mechanism tested
- [ ] Dispute resolution tested
- [ ] Emergency functions tested
- [ ] Security audit completed (highly recommended)
- [ ] Sufficient ETH for deployment (~0.05-0.1 ETH)

## Post-Deployment

### 1. Update Frontend Configuration

The deployment script automatically updates `.env`, but verify:

```env
NEXT_PUBLIC_ESCROW_CONTRACT_ADDRESS=0xYourDeployedContractAddress
NEXT_PUBLIC_CHAIN_ID=11155111  # or 1 for mainnet
```

### 2. Update Contract Integration

The contract address is already configured in:
- `lib/escrow-contract.js` - reads from environment variables
- `app/contracts/escrowABI.js` - update ABI if needed

### 3. Test the Integration

Test these flows:
1. ✅ Create escrow with ERC20 tokens
2. ✅ Create escrow with ETH
3. ✅ Confirm escrow (both parties)
4. ✅ Cancel escrow (before recipient confirms)
5. ✅ Dispute escrow
6. ✅ Check fees are deducted correctly

## Managing the Contract

### View Contract Status

```bash
# Get escrow count
npx hardhat console --network sepolia
> const Escrow = await ethers.getContractFactory("Escrow")
> const escrow = await Escrow.attach("0xYourContractAddress")
> await escrow.escrowCount()

# Get fee percentage
> await escrow.feePercentage()

# Get owner
> await escrow.owner()
```

### Update Fee Percentage

```javascript
// Create a script: scripts/updateFee.js
const hre = require("hardhat");

async function main() {
  const contractAddress = process.env.NEXT_PUBLIC_ESCROW_CONTRACT_ADDRESS;
  const Escrow = await hre.ethers.getContractFactory("Escrow");
  const escrow = await Escrow.attach(contractAddress);

  // Update fee to 0.5% (50 basis points)
  const tx = await escrow.updateFee(50);
  await tx.wait();

  console.log("Fee updated to 0.5%");
}

main();
```

### Withdraw Accumulated Fees

```javascript
// Create a script: scripts/withdrawFees.js
const hre = require("hardhat");

async function main() {
  const contractAddress = process.env.NEXT_PUBLIC_ESCROW_CONTRACT_ADDRESS;
  const Escrow = await hre.ethers.getContractFactory("Escrow");
  const escrow = await Escrow.attach(contractAddress);

  // Withdraw ETH fees
  const tx = await escrow.withdrawFees(ethers.ZeroAddress);
  await tx.wait();

  console.log("Fees withdrawn");
}

main();
```

## Network Configurations

The contract can be deployed to:

| Network | Chain ID | Config Name | Use Case |
|---------|----------|-------------|----------|
| Hardhat Local | 31337 | `localhost` | Development |
| Sepolia | 11155111 | `sepolia` | Testing |
| Ethereum | 1 | `mainnet` | Production |
| Polygon Mumbai | 80001 | `mumbai` | Testing |
| Polygon | 137 | `polygon` | Production (cheaper gas) |
| Base Sepolia | 84532 | `baseSepolia` | Testing |
| Base | 8453 | `base` | Production (L2, cheap) |

### Deploy to Different Networks

```bash
# Polygon Mumbai (testnet)
npx hardhat run scripts/deploy.js --network mumbai

# Polygon Mainnet
npx hardhat run scripts/deploy.js --network polygon

# Base Sepolia (testnet)
npx hardhat run scripts/deploy.js --network baseSepolia

# Base Mainnet
npx hardhat run scripts/deploy.js --network base
```

## Troubleshooting

### "insufficient funds for gas"
- Check your wallet balance
- Get more test ETH from faucets
- Reduce gas price in hardhat.config.js

### "nonce has already been used"
- Wait a few blocks
- Or reset your account in MetaMask: Settings → Advanced → Clear Activity Tab Data

### "Invalid API key"
- Verify your Alchemy/Infura API key
- Check the RPC_URL in .env

### Contract verification failed
- Wait a few minutes after deployment
- Ensure constructor arguments match (none in this case)
- Check your Etherscan API key

## Security Best Practices

1. **Never commit private keys** - use .gitignore for .env
2. **Use a dedicated deployment wallet** - don't reuse your main wallet
3. **Test thoroughly on testnet** before mainnet
4. **Get a security audit** for production (recommended services: Trail of Bits, OpenZeppelin, Consensys Diligence)
5. **Start with low fee percentage** - can be increased later
6. **Monitor contract activity** using Etherscan
7. **Set up monitoring alerts** for large transactions
8. **Keep emergency functions accessible** but secure

## Gas Costs (Estimated)

| Operation | Gas (Sepolia) | Cost @ 20 gwei |
|-----------|---------------|----------------|
| Deploy Contract | ~2,500,000 | ~0.05 ETH |
| Create Escrow (ERC20) | ~100,000 | ~0.002 ETH |
| Create Escrow (ETH) | ~80,000 | ~0.0016 ETH |
| Confirm Escrow | ~60,000 | ~0.0012 ETH |
| Complete Escrow | ~70,000 | ~0.0014 ETH |

## Next Steps

After successful deployment:

1. ✅ Test all escrow functions on testnet
2. ✅ Update frontend to interact with the contract
3. ✅ Create test tokens for testing
4. ✅ Document user flows
5. ✅ Set up contract monitoring
6. ✅ Plan security audit (for mainnet)
7. ✅ Deploy to mainnet when ready

## Support

For issues:
- Check Hardhat docs: [hardhat.org/docs](https://hardhat.org/docs)
- Ethereum Stack Exchange: [ethereum.stackexchange.com](https://ethereum.stackexchange.com/)
- OpenZeppelin Forum: [forum.openzeppelin.com](https://forum.openzeppelin.com/)

## Contract Functions Reference

### User Functions
- `createEscrow(recipient, token, amount)` - Create new escrow
- `confirmEscrow(escrowId)` - Confirm as creator or recipient
- `cancelEscrow(escrowId)` - Cancel escrow (creator only, before recipient confirms)
- `disputeEscrow(escrowId)` - Raise a dispute

### Owner Functions
- `updateFee(newFeePercentage)` - Update fee (max 10%)
- `withdrawFees(token)` - Withdraw accumulated fees
- `resolveDispute(escrowId, refundToCreator)` - Resolve disputes
- `emergencyWithdraw(token, amount)` - Emergency withdrawal

### View Functions
- `getEscrow(escrowId)` - Get escrow details
- `getEscrows(escrowIds[])` - Get multiple escrows
- `escrowCount()` - Total number of escrows
- `feePercentage()` - Current fee percentage
- `owner()` - Contract owner address

---

**Happy Deploying! 🚀**
