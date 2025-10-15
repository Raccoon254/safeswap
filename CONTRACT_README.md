# Escrow Smart Contract

A production-ready, secure escrow smart contract for ERC20 tokens and ETH with dual confirmation system.

## 🎯 Features

- ✅ **Secure Token Holding** - Tokens locked in contract until completion
- ✅ **Dual Confirmation** - Both parties must confirm before release
- ✅ **ETH & ERC20 Support** - Works with any ERC20 token or native ETH
- ✅ **Platform Fee** - Configurable fee (default 1%)
- ✅ **Dispute Resolution** - Owner can mediate disputes
- ✅ **Cancellation** - Creator can cancel before recipient confirms
- ✅ **ReentrancyGuard** - Protected against reentrancy attacks
- ✅ **OpenZeppelin Standards** - Built with battle-tested libraries
- ✅ **Event Logging** - Full transparency with event emissions
- ✅ **Emergency Functions** - Owner can rescue stuck funds

## 📋 Contract Overview

**Location:** `contracts/Escrow.sol`

**Solidity Version:** ^0.8.20

**Dependencies:**
- OpenZeppelin Contracts 5.0.0
  - `IERC20` - Token interface
  - `SafeERC20` - Safe token transfers
  - `ReentrancyGuard` - Reentrancy protection
  - `Ownable` - Access control

## 🔄 Escrow Flow

```
1. CREATE
   Creator → createEscrow(recipient, token, amount)
   ├─ Transfers tokens to contract
   ├─ Status: PENDING
   └─ Emits: EscrowCreated

2. CONFIRM (Creator)
   Creator → confirmEscrow(escrowId)
   ├─ Marks creator as confirmed
   ├─ Status: PENDING → ACTIVE
   └─ Emits: EscrowConfirmed

3. CONFIRM (Recipient)
   Recipient → confirmEscrow(escrowId)
   ├─ Marks recipient as confirmed
   ├─ Status: ACTIVE → COMPLETED
   ├─ Transfers tokens to recipient (minus fee)
   └─ Emits: EscrowConfirmed, EscrowCompleted

ALTERNATIVE: CANCEL
   Creator → cancelEscrow(escrowId)
   ├─ Only if recipient hasn't confirmed
   ├─ Refunds tokens to creator
   ├─ Status: CANCELLED
   └─ Emits: EscrowCancelled

ALTERNATIVE: DISPUTE
   Either Party → disputeEscrow(escrowId)
   ├─ Status: DISPUTED
   ├─ Requires owner resolution
   └─ Emits: EscrowDisputed
```

## 🔧 Contract Functions

### User Functions

#### createEscrow
```solidity
function createEscrow(
    address _recipient,
    address _token,
    uint256 _amount
) external payable returns (uint256)
```
Creates a new escrow and locks tokens in the contract.

**Parameters:**
- `_recipient` - Address that will receive tokens
- `_token` - Token address (0x0 for ETH)
- `_amount` - Amount of tokens to escrow

**Returns:** Escrow ID

**Example:**
```javascript
// ERC20 Token
await token.approve(escrowAddress, amount)
await escrow.createEscrow(recipientAddress, tokenAddress, amount)

// ETH
await escrow.createEscrow(recipientAddress, ZERO_ADDRESS, amount, { value: amount })
```

#### confirmEscrow
```solidity
function confirmEscrow(uint256 _escrowId) external
```
Confirm the escrow as creator or recipient. When both confirm, funds are released.

#### cancelEscrow
```solidity
function cancelEscrow(uint256 _escrowId) external
```
Cancel the escrow (creator only, before recipient confirms).

#### disputeEscrow
```solidity
function disputeEscrow(uint256 _escrowId) external
```
Raise a dispute (either party). Requires owner resolution.

### View Functions

#### getEscrow
```solidity
function getEscrow(uint256 _escrowId) external view returns (EscrowData memory)
```
Get details of a specific escrow.

#### getEscrows
```solidity
function getEscrows(uint256[] calldata _escrowIds) external view returns (EscrowData[] memory)
```
Get multiple escrows in a single call.

### Owner Functions

#### updateFee
```solidity
function updateFee(uint256 _newFeePercentage) external onlyOwner
```
Update the platform fee (max 10%).

**Parameters:**
- `_newFeePercentage` - Fee in basis points (100 = 1%)

#### withdrawFees
```solidity
function withdrawFees(address _token) external onlyOwner
```
Withdraw accumulated fees to owner.

#### resolveDispute
```solidity
function resolveDispute(uint256 _escrowId, bool _refundToCreator) external onlyOwner
```
Resolve a disputed escrow.

**Parameters:**
- `_escrowId` - Escrow to resolve
- `_refundToCreator` - If true, refund to creator; if false, send to recipient

#### emergencyWithdraw
```solidity
function emergencyWithdraw(address _token, uint256 _amount) external onlyOwner
```
Emergency function to rescue stuck tokens.

## 📊 Data Structures

### EscrowData
```solidity
struct EscrowData {
    address creator;           // Who created the escrow
    address recipient;         // Who receives the tokens
    address token;            // Token address (0x0 for ETH)
    uint256 amount;           // Amount locked
    Status status;            // Current status
    bool creatorConfirmed;    // Has creator confirmed?
    bool recipientConfirmed;  // Has recipient confirmed?
    bool disputed;            // Is it disputed?
    uint256 createdAt;        // Creation timestamp
    uint256 completedAt;      // Completion timestamp
}
```

### Status Enum
```solidity
enum Status {
    PENDING,    // Created, waiting
    ACTIVE,     // Both parties engaged
    COMPLETED,  // Successfully completed
    CANCELLED,  // Cancelled by creator
    DISPUTED    // Under dispute
}
```

## 📡 Events

```solidity
event EscrowCreated(uint256 indexed escrowId, address indexed creator, address indexed recipient, address token, uint256 amount)
event EscrowConfirmed(uint256 indexed escrowId, address indexed confirmer, bool isCreator)
event EscrowCompleted(uint256 indexed escrowId, address indexed recipient, uint256 amount, uint256 fee)
event EscrowCancelled(uint256 indexed escrowId, address indexed creator)
event EscrowDisputed(uint256 indexed escrowId, address indexed disputer)
event FeeUpdated(uint256 oldFee, uint256 newFee)
event FundsWithdrawn(address indexed token, uint256 amount)
```

## 🔒 Security Features

1. **ReentrancyGuard** - All state-changing functions protected
2. **SafeERC20** - Safe token transfers with proper error handling
3. **Access Control** - Owner-only functions for admin operations
4. **Input Validation** - All inputs validated
5. **Status Checks** - State transitions properly enforced
6. **Emergency Functions** - Owner can rescue stuck funds
7. **Fee Limits** - Maximum fee capped at 10%

## 💰 Fee Structure

- **Default Fee:** 1% (100 basis points)
- **Maximum Fee:** 10% (1000 basis points)
- **Fee Deduction:** Only on successful completion
- **Disputed Escrows:** No fee charged
- **Cancelled Escrows:** No fee charged

### Fee Examples

| Amount | Fee (1%) | Recipient Gets |
|--------|----------|----------------|
| 100 USDC | 1 USDC | 99 USDC |
| 1 ETH | 0.01 ETH | 0.99 ETH |
| 1000 DAI | 10 DAI | 990 DAI |

## 🧪 Testing

The contract includes comprehensive tests:

```bash
npm run test:contracts
```

Test coverage includes:
- ✅ Escrow creation (ETH & ERC20)
- ✅ Dual confirmation flow
- ✅ Fee calculation and deduction
- ✅ Cancellation scenarios
- ✅ Dispute flow
- ✅ Edge cases and reverts
- ✅ ReentrancyGuard protection
- ✅ Access control

## 📈 Gas Estimates

| Function | Gas Used | Cost @ 20 gwei |
|----------|----------|----------------|
| Deploy | ~2,500,000 | ~0.05 ETH |
| createEscrow (ERC20) | ~100,000 | ~0.002 ETH |
| createEscrow (ETH) | ~80,000 | ~0.0016 ETH |
| confirmEscrow | ~60,000 | ~0.0012 ETH |
| Complete (auto) | ~70,000 | ~0.0014 ETH |
| cancelEscrow | ~50,000 | ~0.001 ETH |
| disputeEscrow | ~45,000 | ~0.0009 ETH |

## 🚀 Deployment

### Quick Deploy (Testnet)

```bash
# Install dependencies
npm install

# Compile
npm run compile

# Deploy to Sepolia
npm run deploy:sepolia

# Verify on Etherscan
npm run verify:sepolia 0xContractAddress
```

See [QUICKSTART.md](./QUICKSTART.md) for detailed deployment instructions.

## 🌐 Network Support

Configured networks:
- **Ethereum Mainnet** (Chain ID: 1)
- **Sepolia Testnet** (Chain ID: 11155111)
- **Polygon Mainnet** (Chain ID: 137)
- **Polygon Mumbai** (Chain ID: 80001)
- **Base Mainnet** (Chain ID: 8453)
- **Base Sepolia** (Chain ID: 84532)
- **Local Hardhat** (Chain ID: 31337)

## 📚 Documentation

- [QUICKSTART.md](./QUICKSTART.md) - 5-minute deployment guide
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Comprehensive deployment documentation
- [SETUP.md](./SETUP.md) - Full platform setup guide

## ⚠️ Important Notes

### Before Mainnet

1. **Security Audit** - Get professional audit
2. **Extensive Testing** - Test all flows on testnet
3. **Insurance** - Consider smart contract insurance
4. **Legal Review** - Ensure regulatory compliance
5. **Bug Bounty** - Consider a bug bounty program

### Limitations

- Contract cannot be upgraded (deploy new version if needed)
- Disputes require manual owner intervention
- Fee changes don't affect existing escrows
- Owner has significant control (consider DAO governance)

## 🔍 Contract Verification

After deployment, verify your contract:

```bash
# Sepolia
npx hardhat verify --network sepolia 0xContractAddress

# Mainnet
npx hardhat verify --network mainnet 0xContractAddress
```

This publishes your source code and proves it matches the deployed bytecode.

## 📞 Support

For questions or issues:
- Check [DEPLOYMENT.md](./DEPLOYMENT.md)
- Review [SETUP.md](./SETUP.md)
- Open a GitHub issue
- Consult Hardhat docs: [hardhat.org](https://hardhat.org/)

## 📄 License

MIT License - See LICENSE file

---

**Built with:**
- Hardhat 2.19.0
- OpenZeppelin Contracts 5.0.0
- Solidity 0.8.20

**Security:** ReentrancyGuard, SafeERC20, Ownable

**Status:** Production-ready for testnet, requires audit for mainnet
