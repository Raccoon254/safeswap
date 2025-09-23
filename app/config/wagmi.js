import { http, createConfig } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'

// Prevent multiple config creation
let _config

export const config = (() => {
  if (!_config) {
    _config = getDefaultConfig({
      appName: 'SafeSwap',
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'your-project-id',
      chains: [mainnet, sepolia],
      transports: {
        [mainnet.id]: http(),
        [sepolia.id]: http(),
      },
      ssr: true, // Enable SSR support
    })
  }
  return _config
})()