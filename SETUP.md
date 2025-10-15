# Escrow Platform Setup Guide

This guide explains how to set up and configure the escrow platform for token transfers.

## Overview

This is a crypto escrow platform that enables secure peer-to-peer token transfers with the following features:
- Email-based user authentication
- Wallet connection via RainbowKit/WagmiConnect
- Automatic wallet address detection
- Direct token transfers between parties
- Email notifications for all escrow events

## Environment Setup

### 1. Copy the environment template

```bash
cp .env.example .env
```

### 2. Configure Required Variables

#### Database
```env
DATABASE_URL=postgresql://user:password@host:5432/database?sslmode=require
```
Get a PostgreSQL database from:
- [Neon](https://neon.tech/) (Recommended)
- [Supabase](https://supabase.com/)
- [Railway](https://railway.app/)

#### Authentication
```env
JWT_SECRET=your-super-secret-jwt-key-here
```
Generate a secure random string for JWT signing.

#### WalletConnect
```env
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_project_id_here
```
1. Go to [WalletConnect Cloud](https://cloud.walletconnect.com)
2. Create a new project
3. Copy the Project ID

#### Email Configuration (SMTP)
```env
SMTP_FROM=SafeSwap <noreply@safeswap.app>
EMAIL_FROM=noreply@safeswap.app
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

For Gmail:
1. Enable 2-factor authentication
2. Generate an [App Password](https://myaccount.google.com/apppasswords)
3. Use the app password in `SMTP_PASS`

#### Blockchain Configuration
```env
# Leave empty for now - tokens are transferred directly between wallets
NEXT_PUBLIC_ESCROW_CONTRACT_ADDRESS=

# Use Sepolia testnet for development
NEXT_PUBLIC_CHAIN_ID=11155111

# Optional: For blockchain queries (get from Alchemy)
RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your-api-key
ALCHEMY_API_KEY=your-alchemy-api-key
```

## Database Setup

### Initialize the database

```bash
npx prisma generate
npx prisma migrate deploy
```

### View database in Prisma Studio

```bash
npx prisma studio
```

## How Token Transfers Work

### Current Implementation: Direct Peer-to-Peer Transfers

The platform currently uses **direct wallet-to-wallet transfers** initiated by users:

1. **Creator** creates an escrow with token details
2. **Recipient** receives email notification
3. Both parties connect their wallets (addresses auto-filled)
4. Both parties confirm the trade
5. **Creator manually transfers tokens** to recipient's wallet address
6. Trade marked as complete

### Why Not Smart Contract Escrow?

A true escrow smart contract would:
- Hold funds in the contract until both parties confirm
- Automatically release funds when conditions are met
- Handle disputes through arbitration

**To implement a smart contract escrow, you would need to:**

## Deploying Your Own Escrow Smart Contract (Optional)

If you want true escrow functionality where tokens are held in a smart contract:

### Step 1: Write the Smart Contract

Create a Solidity contract like:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Escrow {
    struct EscrowData {
        address creator;
        address recipient;
        address token;
        uint256 amount;
        bool creatorConfirmed;
        bool recipientConfirmed;
        bool completed;
    }

    mapping(uint256 => EscrowData) public escrows;
    uint256 public escrowCount;

    function createEscrow(
        address _recipient,
        address _token,
        uint256 _amount
    ) external {
        // Transfer tokens from creator to contract
        IERC20(_token).transferFrom(msg.sender, address(this), _amount);

        escrows[escrowCount] = EscrowData({
            creator: msg.sender,
            recipient: _recipient,
            token: _token,
            amount: _amount,
            creatorConfirmed: true,
            recipientConfirmed: false,
            completed: false
        });

        escrowCount++;
    }

    function confirmEscrow(uint256 _escrowId) external {
        EscrowData storage escrow = escrows[_escrowId];
        require(msg.sender == escrow.recipient, "Not recipient");
        escrow.recipientConfirmed = true;

        // Release tokens to recipient
        if (escrow.creatorConfirmed && escrow.recipientConfirmed) {
            IERC20(escrow.token).transfer(escrow.recipient, escrow.amount);
            escrow.completed = true;
        }
    }
}
```

### Step 2: Deploy the Contract

Using Hardhat or Remix:

```bash
# Install Hardhat
npm install --save-dev hardhat

# Initialize Hardhat project
npx hardhat init

# Deploy to testnet
npx hardhat run scripts/deploy.js --network sepolia
```

### Step 3: Update Environment Variables

```env
NEXT_PUBLIC_ESCROW_CONTRACT_ADDRESS=0xYourDeployedContractAddress
```

### Step 4: Update the Code

Modify `lib/escrow-contract.js` to interact with your deployed contract instead of doing direct transfers.

## Running the Application

### Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

### Production Build

```bash
npm run build
npm start
```

## Architecture

### Authentication Flow
1. User enters email
2. System sends 6-digit verification code
3. User verifies code → Session created
4. JWT token stored in HTTP-only cookie

### Wallet Integration
- **RainbowKit** for wallet connection UI
- **Wagmi** for blockchain interactions
- **Viem** for Ethereum utilities
- Wallet addresses automatically captured when connected

### Escrow Flow
1. Creator creates escrow (wallet auto-filled from connected wallet)
2. System sends email to recipient
3. Recipient logs in (email link auto-links account to escrow)
4. Recipient connects wallet (address auto-filled)
5. Both parties confirm trade
6. Creator manually transfers tokens to recipient's address
7. System records transaction (or monitors if using smart contract)

## Important Notes

### Security Considerations

⚠️ **Current Limitations:**
- This is a **trust-based system** - the creator must manually transfer tokens
- No on-chain escrow protection yet
- Disputes are tracked but not enforced on-chain

✅ **To implement true escrow:**
1. Deploy an escrow smart contract
2. Update `NEXT_PUBLIC_ESCROW_CONTRACT_ADDRESS`
3. Modify `lib/escrow-contract.js` to use the contract
4. Creator deposits tokens into contract when creating escrow
5. Contract automatically releases tokens when both confirm

### Testing on Testnet

1. Use Sepolia testnet (`NEXT_PUBLIC_CHAIN_ID=11155111`)
2. Get test ETH from [Sepolia Faucet](https://sepoliafaucet.com/)
3. Use test ERC20 tokens or deploy your own
4. Test the full flow before going to mainnet

### Production Checklist

Before deploying to production:

- [ ] Deploy and verify escrow smart contract
- [ ] Update `NEXT_PUBLIC_ESCROW_CONTRACT_ADDRESS`
- [ ] Switch to mainnet (`NEXT_PUBLIC_CHAIN_ID=1`)
- [ ] Use production RPC endpoints
- [ ] Set up proper email SMTP (not Gmail)
- [ ] Configure domain for email sending
- [ ] Add rate limiting to API endpoints
- [ ] Enable HTTPS
- [ ] Add proper error monitoring (Sentry, etc.)
- [ ] Audit smart contracts
- [ ] Add gas estimation for transactions
- [ ] Implement proper dispute resolution

## Getting Help

- Smart Contract Development: [OpenZeppelin Contracts](https://docs.openzeppelin.com/contracts/)
- Wagmi Documentation: [wagmi.sh](https://wagmi.sh/)
- Viem Documentation: [viem.sh](https://viem.sh/)
- Prisma Documentation: [prisma.io/docs](https://www.prisma.io/docs)

## License

This project is for educational purposes. Please ensure you have proper smart contract audits and legal compliance before using in production.
