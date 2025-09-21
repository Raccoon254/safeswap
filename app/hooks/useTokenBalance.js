'use client'

import { useAccount, useReadContract, useBalance } from 'wagmi'
import { ERC20_ABI } from '../contracts/escrowABI'
import { formatEther } from 'viem'

export function useTokenBalance(tokenAddress) {
  const { address } = useAccount()

  // For ETH balance
  const { data: ethBalance } = useBalance({
    address,
    enabled: tokenAddress === '0x0000000000000000000000000000000000000000'
  })

  // For ERC-20 token balance
  const { data: tokenBalance } = useReadContract({
    address: tokenAddress,
    abi: ERC20_ABI,
    functionName: 'balanceOf',
    args: [address],
    enabled: tokenAddress !== '0x0000000000000000000000000000000000000000' && !!address
  })

  // Get token decimals
  const { data: tokenDecimals } = useReadContract({
    address: tokenAddress,
    abi: ERC20_ABI,
    functionName: 'decimals',
    enabled: tokenAddress !== '0x0000000000000000000000000000000000000000'
  })

  // Get token symbol
  const { data: tokenSymbol } = useReadContract({
    address: tokenAddress,
    abi: ERC20_ABI,
    functionName: 'symbol',
    enabled: tokenAddress !== '0x0000000000000000000000000000000000000000'
  })

  const getFormattedBalance = () => {
    if (tokenAddress === '0x0000000000000000000000000000000000000000') {
      return ethBalance ? formatEther(ethBalance.value) : '0'
    }

    if (tokenBalance && tokenDecimals) {
      const divisor = 10n ** BigInt(tokenDecimals)
      const formatted = Number(tokenBalance) / Number(divisor)
      return formatted.toString()
    }

    return '0'
  }

  const getSymbol = () => {
    if (tokenAddress === '0x0000000000000000000000000000000000000000') {
      return 'ETH'
    }
    return tokenSymbol || 'TOKEN'
  }

  return {
    balance: getFormattedBalance(),
    symbol: getSymbol(),
    decimals: tokenAddress === '0x0000000000000000000000000000000000000000' ? 18 : tokenDecimals,
    isLoading: !ethBalance && !tokenBalance
  }
}