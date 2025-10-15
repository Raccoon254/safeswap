// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title Escrow
 * @dev Secure escrow contract for ERC20 tokens and ETH
 * @notice This contract holds tokens until both parties confirm the trade
 */
contract Escrow is ReentrancyGuard, Ownable {
    using SafeERC20 for IERC20;

    // Escrow status
    enum Status {
        PENDING,    // Escrow created, waiting for recipient
        ACTIVE,     // Both parties engaged
        COMPLETED,  // Successfully completed
        CANCELLED,  // Cancelled by creator
        DISPUTED    // Under dispute
    }

    // Escrow data structure
    struct EscrowData {
        address creator;
        address recipient;
        address token;          // Token address (0x0 for ETH)
        uint256 amount;
        Status status;
        bool creatorConfirmed;
        bool recipientConfirmed;
        bool disputed;
        uint256 createdAt;
        uint256 completedAt;
    }

    // State variables
    mapping(uint256 => EscrowData) public escrows;
    uint256 public escrowCount;
    uint256 public feePercentage = 100; // 1% fee (100 basis points)
    uint256 public constant FEE_DENOMINATOR = 10000;

    // Events
    event EscrowCreated(
        uint256 indexed escrowId,
        address indexed creator,
        address indexed recipient,
        address token,
        uint256 amount
    );

    event EscrowConfirmed(
        uint256 indexed escrowId,
        address indexed confirmer,
        bool isCreator
    );

    event EscrowCompleted(
        uint256 indexed escrowId,
        address indexed recipient,
        uint256 amount,
        uint256 fee
    );

    event EscrowCancelled(
        uint256 indexed escrowId,
        address indexed creator
    );

    event EscrowDisputed(
        uint256 indexed escrowId,
        address indexed disputer
    );

    event FeeUpdated(uint256 oldFee, uint256 newFee);

    event FundsWithdrawn(address indexed token, uint256 amount);

    // Modifiers
    modifier onlyParties(uint256 _escrowId) {
        EscrowData storage escrow = escrows[_escrowId];
        require(
            msg.sender == escrow.creator || msg.sender == escrow.recipient,
            "Not authorized"
        );
        _;
    }

    modifier escrowExists(uint256 _escrowId) {
        require(_escrowId < escrowCount, "Escrow does not exist");
        _;
    }

    constructor() Ownable(msg.sender) {}

    /**
     * @dev Create a new escrow
     * @param _recipient The address that will receive the tokens
     * @param _token The token address (0x0000000000000000000000000000000000000000 for ETH)
     * @param _amount The amount of tokens to escrow
     */
    function createEscrow(
        address _recipient,
        address _token,
        uint256 _amount
    ) external payable nonReentrant returns (uint256) {
        require(_recipient != address(0), "Invalid recipient");
        require(_recipient != msg.sender, "Cannot escrow to yourself");
        require(_amount > 0, "Amount must be greater than 0");

        uint256 escrowId = escrowCount;
        escrowCount++;

        // Handle ETH or ERC20
        if (_token == address(0)) {
            // ETH escrow
            require(msg.value == _amount, "Incorrect ETH amount");
        } else {
            // ERC20 escrow
            require(msg.value == 0, "Do not send ETH for token escrow");
            IERC20(_token).safeTransferFrom(msg.sender, address(this), _amount);
        }

        // Create escrow
        escrows[escrowId] = EscrowData({
            creator: msg.sender,
            recipient: _recipient,
            token: _token,
            amount: _amount,
            status: Status.PENDING,
            creatorConfirmed: false,
            recipientConfirmed: false,
            disputed: false,
            createdAt: block.timestamp,
            completedAt: 0
        });

        emit EscrowCreated(escrowId, msg.sender, _recipient, _token, _amount);

        return escrowId;
    }

    /**
     * @dev Confirm the escrow as creator or recipient
     * @param _escrowId The ID of the escrow to confirm
     */
    function confirmEscrow(uint256 _escrowId)
        external
        escrowExists(_escrowId)
        onlyParties(_escrowId)
        nonReentrant
    {
        EscrowData storage escrow = escrows[_escrowId];

        require(
            escrow.status == Status.PENDING || escrow.status == Status.ACTIVE,
            "Escrow not active"
        );
        require(!escrow.disputed, "Escrow is disputed");

        bool isCreator = msg.sender == escrow.creator;

        if (isCreator) {
            require(!escrow.creatorConfirmed, "Already confirmed");
            escrow.creatorConfirmed = true;
        } else {
            require(!escrow.recipientConfirmed, "Already confirmed");
            escrow.recipientConfirmed = true;
        }

        // Update status to ACTIVE if one party confirmed
        if (escrow.status == Status.PENDING) {
            escrow.status = Status.ACTIVE;
        }

        emit EscrowConfirmed(_escrowId, msg.sender, isCreator);

        // If both confirmed, complete the escrow
        if (escrow.creatorConfirmed && escrow.recipientConfirmed) {
            _completeEscrow(_escrowId);
        }
    }

    /**
     * @dev Internal function to complete escrow and transfer funds
     * @param _escrowId The ID of the escrow to complete
     */
    function _completeEscrow(uint256 _escrowId) private {
        EscrowData storage escrow = escrows[_escrowId];

        escrow.status = Status.COMPLETED;
        escrow.completedAt = block.timestamp;

        // Calculate fee
        uint256 fee = (escrow.amount * feePercentage) / FEE_DENOMINATOR;
        uint256 amountAfterFee = escrow.amount - fee;

        // Transfer funds
        if (escrow.token == address(0)) {
            // Transfer ETH
            (bool success, ) = payable(escrow.recipient).call{value: amountAfterFee}("");
            require(success, "ETH transfer failed");
        } else {
            // Transfer ERC20
            IERC20(escrow.token).safeTransfer(escrow.recipient, amountAfterFee);
        }

        emit EscrowCompleted(_escrowId, escrow.recipient, amountAfterFee, fee);
    }

    /**
     * @dev Cancel the escrow (only creator, only if recipient hasn't confirmed)
     * @param _escrowId The ID of the escrow to cancel
     */
    function cancelEscrow(uint256 _escrowId)
        external
        escrowExists(_escrowId)
        nonReentrant
    {
        EscrowData storage escrow = escrows[_escrowId];

        require(msg.sender == escrow.creator, "Only creator can cancel");
        require(
            escrow.status == Status.PENDING || escrow.status == Status.ACTIVE,
            "Cannot cancel completed escrow"
        );
        require(!escrow.recipientConfirmed, "Recipient already confirmed");
        require(!escrow.disputed, "Cannot cancel disputed escrow");

        escrow.status = Status.CANCELLED;

        // Refund to creator
        if (escrow.token == address(0)) {
            (bool success, ) = payable(escrow.creator).call{value: escrow.amount}("");
            require(success, "ETH refund failed");
        } else {
            IERC20(escrow.token).safeTransfer(escrow.creator, escrow.amount);
        }

        emit EscrowCancelled(_escrowId, escrow.creator);
    }

    /**
     * @dev Raise a dispute for an escrow
     * @param _escrowId The ID of the escrow to dispute
     */
    function disputeEscrow(uint256 _escrowId)
        external
        escrowExists(_escrowId)
        onlyParties(_escrowId)
    {
        EscrowData storage escrow = escrows[_escrowId];

        require(
            escrow.status == Status.PENDING || escrow.status == Status.ACTIVE,
            "Cannot dispute completed escrow"
        );
        require(!escrow.disputed, "Already disputed");

        escrow.status = Status.DISPUTED;
        escrow.disputed = true;

        emit EscrowDisputed(_escrowId, msg.sender);
    }

    /**
     * @dev Resolve a dispute (only owner)
     * @param _escrowId The ID of the escrow to resolve
     * @param _refundToCreator If true, refund to creator; if false, send to recipient
     */
    function resolveDispute(uint256 _escrowId, bool _refundToCreator)
        external
        onlyOwner
        escrowExists(_escrowId)
        nonReentrant
    {
        EscrowData storage escrow = escrows[_escrowId];

        require(escrow.disputed, "Escrow not disputed");
        require(escrow.status == Status.DISPUTED, "Invalid status");

        address recipient = _refundToCreator ? escrow.creator : escrow.recipient;

        escrow.status = Status.COMPLETED;
        escrow.completedAt = block.timestamp;

        // Transfer full amount (no fee for disputes)
        if (escrow.token == address(0)) {
            (bool success, ) = payable(recipient).call{value: escrow.amount}("");
            require(success, "ETH transfer failed");
        } else {
            IERC20(escrow.token).safeTransfer(recipient, escrow.amount);
        }

        emit EscrowCompleted(_escrowId, recipient, escrow.amount, 0);
    }

    /**
     * @dev Update the fee percentage (only owner)
     * @param _newFeePercentage New fee in basis points (100 = 1%)
     */
    function updateFee(uint256 _newFeePercentage) external onlyOwner {
        require(_newFeePercentage <= 1000, "Fee too high"); // Max 10%
        uint256 oldFee = feePercentage;
        feePercentage = _newFeePercentage;
        emit FeeUpdated(oldFee, _newFeePercentage);
    }

    /**
     * @dev Withdraw accumulated fees (only owner)
     * @param _token Token address (0x0 for ETH)
     */
    function withdrawFees(address _token) external onlyOwner nonReentrant {
        uint256 balance;

        if (_token == address(0)) {
            balance = address(this).balance;
            require(balance > 0, "No ETH to withdraw");
            (bool success, ) = payable(owner()).call{value: balance}("");
            require(success, "ETH withdrawal failed");
        } else {
            balance = IERC20(_token).balanceOf(address(this));
            require(balance > 0, "No tokens to withdraw");
            IERC20(_token).safeTransfer(owner(), balance);
        }

        emit FundsWithdrawn(_token, balance);
    }

    /**
     * @dev Get escrow details
     * @param _escrowId The ID of the escrow
     */
    function getEscrow(uint256 _escrowId)
        external
        view
        escrowExists(_escrowId)
        returns (EscrowData memory)
    {
        return escrows[_escrowId];
    }

    /**
     * @dev Get multiple escrows by IDs
     * @param _escrowIds Array of escrow IDs
     */
    function getEscrows(uint256[] calldata _escrowIds)
        external
        view
        returns (EscrowData[] memory)
    {
        EscrowData[] memory result = new EscrowData[](_escrowIds.length);
        for (uint256 i = 0; i < _escrowIds.length; i++) {
            if (_escrowIds[i] < escrowCount) {
                result[i] = escrows[_escrowIds[i]];
            }
        }
        return result;
    }

    /**
     * @dev Emergency function to rescue stuck tokens (only owner)
     * @param _token Token address
     * @param _amount Amount to rescue
     */
    function emergencyWithdraw(address _token, uint256 _amount)
        external
        onlyOwner
        nonReentrant
    {
        if (_token == address(0)) {
            (bool success, ) = payable(owner()).call{value: _amount}("");
            require(success, "ETH withdrawal failed");
        } else {
            IERC20(_token).safeTransfer(owner(), _amount);
        }
    }

    // Fallback function to receive ETH
    receive() external payable {}
}
