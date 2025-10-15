'use client'

import { useState } from 'react'
import { useAccount, useWriteContract, useReadContract, useWaitForTransactionReceipt } from 'wagmi'
import { parseUnits } from 'viem'
import { ESCROW_ABI, ERC20_ABI, CONTRACT_ADDRESSES } from '../contracts/escrowABI'

const ESCROW_CONTRACT = process.env.NEXT_PUBLIC_ESCROW_CONTRACT_ADDRESS

export function useEscrow() {
  const { address } = useAccount()
  const { writeContractAsync, data: hash } = useWriteContract()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  // Read escrow count
  const { data: escrowCount } = useReadContract({
    address: ESCROW_CONTRACT,
    abi: ESCROW_ABI,
    functionName: 'escrowCount',
  })

  // Create a new escrow
  const createEscrow = async (tokenAddress, amount, recipientAddress, decimals = 18) => {
    setIsLoading(true)
    setError(null)

    try {
      const amountWei = parseUnits(amount.toString(), decimals)

      // For ETH transfers
      if (tokenAddress === '0x0000000000000000000000000000000000000000') {
        const hash = await writeContractAsync({
          address: ESCROW_CONTRACT,
          abi: ESCROW_ABI,
          functionName: 'createEscrow',
          args: [recipientAddress, tokenAddress, amountWei],
          value: amountWei, // Send ETH with the transaction
        })
        return { hash }
      } else {
        // For ERC-20 tokens, need to approve first
        await approveToken(tokenAddress, amountWei)

        const hash = await writeContractAsync({
          address: ESCROW_CONTRACT,
          abi: ESCROW_ABI,
          functionName: 'createEscrow',
          args: [recipientAddress, tokenAddress, amountWei],
        })
        return { hash }
      }
    } catch (error) {
      console.error('Error creating escrow:', error)
      setError(error.message)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  // Approve ERC-20 token spending
  const approveToken = async (tokenAddress, amountWei) => {
    const hash = await writeContractAsync({
      address: tokenAddress,
      abi: ERC20_ABI,
      functionName: 'approve',
      args: [ESCROW_CONTRACT, amountWei],
    })
    return hash
  }

  // Confirm escrow - This triggers automatic release when both confirm!
  const confirmEscrow = async (contractEscrowId) => {
    setIsLoading(true)
    setError(null)

    try {
      const hash = await writeContractAsync({
        address: ESCROW_CONTRACT,
        abi: ESCROW_ABI,
        functionName: 'confirmEscrow',
        args: [BigInt(contractEscrowId)],
      })
      return { hash }
    } catch (error) {
      console.error('Error confirming escrow:', error)
      setError(error.message)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  // Cancel escrow
  const cancelEscrow = async (contractEscrowId) => {
    setIsLoading(true)
    setError(null)

    try {
      const hash = await writeContractAsync({
        address: ESCROW_CONTRACT,
        abi: ESCROW_ABI,
        functionName: 'cancelEscrow',
        args: [BigInt(contractEscrowId)],
      })
      return { hash }
    } catch (error) {
      console.error('Error cancelling escrow:', error)
      setError(error.message)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  // Dispute escrow
  const disputeEscrow = async (contractEscrowId) => {
    setIsLoading(true)
    setError(null)

    try {
      const hash = await writeContractAsync({
        address: ESCROW_CONTRACT,
        abi: ESCROW_ABI,
        functionName: 'disputeEscrow',
        args: [BigInt(contractEscrowId)],
      })
      return { hash }
    } catch (error) {
      console.error('Error disputing escrow:', error)
      setError(error.message)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return {
    createEscrow,
    confirmEscrow,
    cancelEscrow,
    disputeEscrow,
    approveToken,
    isLoading,
    error,
    escrowCount: escrowCount ? Number(escrowCount) : 0
  }
}