# Quick Start: Deploy Your Escrow Contract

Get your escrow contract deployed in **5 minutes**!

## Step 1: Install Dependencies

```bash
npm install
```

This installs:
- Hardhat (smart contract development)
- OpenZeppelin contracts (security standards)
- All other project dependencies

## Step 2: Configure Environment

Add these to your `.env` file:

```env
# Get free testnet ETH from: https://sepoliafaucet.com/
PRIVATE_KEY=your_metamask_private_key

# Get free API key from: https://www.alchemy.com/
ALCHEMY_API_KEY=your_alchemy_api_key

# Chain (use testnet first!)
NEXT_PUBLIC_CHAIN_ID=11155111
```

### Getting Your Private Key (MetaMask):
1. Open MetaMask → Click 3 dots → Account Details
2. Click "Export Private Key"
3. Enter password
4. Copy the key

⚠️ **IMPORTANT**: Use a fresh wallet for testing, not your main wallet!

### Getting Alchemy API Key:
1. Sign up at [Alchemy.com](https://www.alchemy.com/)
2. Create new app → Select "Ethereum" + "Sepolia"
3. Copy the API Key

### Getting Test ETH:
1. Visit [Sepolia Faucet](https://sepoliafaucet.com/)
2. Enter your wallet address
3. Wait ~30 seconds for ETH

## Step 3: Compile Contract

```bash
npm run compile
```

Expected output:
```
Compiled 1 Solidity file successfully
```

## Step 4: Deploy to Sepolia Testnet

```bash
npm run deploy:sepolia
```

Expected output:
```
🚀 Starting Escrow contract deployment...
✅ Escrow contract deployed to: 0x...
💾 Deployment info saved
⚙️  Updating .env file...
✅ .env file updated with contract address
```

**That's it!** Your contract is live on Sepolia testnet 🎉

## Step 5: Verify on Etherscan (Optional)

Get Etherscan API key from [etherscan.io/myapikey](https://etherscan.io/myapikey)

Add to `.env`:
```env
ETHERSCAN_API_KEY=your_etherscan_api_key
```

Then run:
```bash
npm run verify:sepolia 0xYourContractAddress
```

Your contract code is now public and verifiable!

## Step 6: Test the Platform

```bash
npm run dev
```

Visit http://localhost:3000 and:
1. Create an account
2. Connect your wallet
3. Create an escrow
4. Test the full flow!

## What Just Happened?

1. ✅ Smart contract deployed to Sepolia testnet
2. ✅ Contract address saved to `.env`
3. ✅ Platform configured to use your contract
4. ✅ Ready to create real escrows!

## Your Contract Features

- **Secure Token Holding** - Tokens locked until both parties confirm
- **ETH & ERC20 Support** - Works with any token
- **Dual Confirmation** - Both parties must agree
- **1% Platform Fee** - Only charged on successful trades
- **Dispute Resolution** - You (owner) can resolve disputes
- **Cancel Protection** - Creator can cancel if recipient hasn't confirmed

## Next Steps

### Test on Testnet (Recommended)
- Create multiple test escrows
- Test with different tokens
- Test cancellations and disputes
- Verify all fees work correctly

### Deploy to Mainnet (When Ready)
```bash
# Only after thorough testing!
npm run deploy:mainnet
```

## Common Commands

```bash
# Development
npm run dev                  # Start Next.js dev server
npm run compile             # Compile smart contracts
npm run node                # Start local Hardhat node

# Deployment
npm run deploy:local        # Deploy to local node
npm run deploy:sepolia      # Deploy to Sepolia testnet
npm run deploy:mainnet      # Deploy to Ethereum mainnet

# Verification
npm run verify:sepolia <address>   # Verify on Sepolia
npm run verify:mainnet <address>   # Verify on mainnet

# Testing
npm run test:contracts      # Run contract tests
```

## Troubleshooting

### "insufficient funds for gas"
→ Get more test ETH from [sepoliafaucet.com](https://sepoliafaucet.com/)

### "invalid api key"
→ Check your `ALCHEMY_API_KEY` in `.env`

### "nonce has already been used"
→ Wait 1 minute and try again

### Contract not updating in frontend
→ Restart your dev server: `npm run dev`

## Project Structure

```
/contracts        → Smart contracts
  Escrow.sol     → Main escrow contract

/scripts         → Deployment scripts
  deploy.js      → Deploy and configure

/deployments     → Deployment records
  *.json         → Contract addresses & info

/lib             → Backend utilities
  escrow-contract.js  → Contract integration

/app             → Next.js frontend
  (main)/        → Main app pages
  api/           → API endpoints
  contracts/     → Contract ABIs
```

## Gas Costs (Sepolia)

| Action | Estimated Gas | Cost |
|--------|---------------|------|
| Deploy | ~2.5M gas | ~0.05 ETH |
| Create Escrow | ~100k gas | ~0.002 ETH |
| Confirm | ~60k gas | ~0.001 ETH |

*Test ETH is free, so experiment freely!*

## Security Checklist

Before mainnet deployment:

- [ ] Tested on Sepolia extensively
- [ ] All escrow flows work correctly
- [ ] Fee mechanism tested
- [ ] Dispute resolution tested
- [ ] Smart contract audited (recommended for production)
- [ ] Frontend security reviewed
- [ ] Rate limiting added to API
- [ ] Error handling tested
- [ ] Gas optimization reviewed

## Need Help?

📖 **Detailed Guides:**
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Complete deployment guide
- [SETUP.md](./SETUP.md) - Full setup instructions

🔗 **Resources:**
- [Hardhat Docs](https://hardhat.org/docs)
- [OpenZeppelin Docs](https://docs.openzeppelin.com/)
- [Ethereum Stack Exchange](https://ethereum.stackexchange.com/)

💬 **Common Issues:**
Check GitHub Issues or create a new one

---

**Happy Building! 🚀**

*Remember: Always test on testnet first, never deploy to mainnet without thorough testing!*
