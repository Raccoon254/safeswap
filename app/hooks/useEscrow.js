'use client'

import { useState } from 'react'
import { useAccount, useWriteContract, useReadContract } from 'wagmi'
import { parseEther, formatEther } from 'viem'
import { ESCROW_ABI, ERC20_ABI, CONTRACT_ADDRESSES } from '../contracts/escrowABI'

export function useEscrow() {
  const { address } = useAccount()
  const { writeContract } = useWriteContract()
  const [isLoading, setIsLoading] = useState(false)

  // Read escrow count
  const { data: escrowCount } = useReadContract({
    address: CONTRACT_ADDRESSES.ESCROW,
    abi: ESCROW_ABI,
    functionName: 'escrowCount',
  })

  // Create a new escrow
  const createEscrow = async (tokenAddress, amount, recipientAddress, description) => {
    setIsLoading(true)

    try {
      // For ETH transfers
      if (tokenAddress === '0x0000000000000000000000000000000000000000') {
        const result = await writeContract({
          address: CONTRACT_ADDRESSES.ESCROW,
          abi: ESCROW_ABI,
          functionName: 'createEscrow',
          args: [recipientAddress, tokenAddress, parseEther(amount), description],
          value: parseEther(amount), // Send ETH with the transaction
        })
        return result
      } else {
        // For ERC-20 tokens, need to approve first
        await approveToken(tokenAddress, amount)

        const result = await writeContract({
          address: CONTRACT_ADDRESSES.ESCROW,
          abi: ESCROW_ABI,
          functionName: 'createEscrow',
          args: [recipientAddress, tokenAddress, parseEther(amount), description],
        })
        return result
      }
    } catch (error) {
      console.error('Error creating escrow:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  // Approve ERC-20 token spending
  const approveToken = async (tokenAddress, amount) => {
    return await writeContract({
      address: tokenAddress,
      abi: ERC20_ABI,
      functionName: 'approve',
      args: [CONTRACT_ADDRESSES.ESCROW, parseEther(amount)],
    })
  }

  // Confirm trade
  const confirmTrade = async (escrowId) => {
    setIsLoading(true)

    try {
      const result = await writeContract({
        address: CONTRACT_ADDRESSES.ESCROW,
        abi: ESCROW_ABI,
        functionName: 'confirmTrade',
        args: [escrowId],
      })
      return result
    } catch (error) {
      console.error('Error confirming trade:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  // Cancel escrow
  const cancelEscrow = async (escrowId) => {
    setIsLoading(true)

    try {
      const result = await writeContract({
        address: CONTRACT_ADDRESSES.ESCROW,
        abi: ESCROW_ABI,
        functionName: 'cancelEscrow',
        args: [escrowId],
      })
      return result
    } catch (error) {
      console.error('Error cancelling escrow:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  // Dispute escrow
  const disputeEscrow = async (escrowId) => {
    setIsLoading(true)

    try {
      const result = await writeContract({
        address: CONTRACT_ADDRESSES.ESCROW,
        abi: ESCROW_ABI,
        functionName: 'disputeEscrow',
        args: [escrowId],
      })
      return result
    } catch (error) {
      console.error('Error disputing escrow:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return {
    createEscrow,
    confirmTrade,
    cancelEscrow,
    disputeEscrow,
    approveToken,
    isLoading,
    escrowCount: escrowCount ? Number(escrowCount) : 0
  }
}