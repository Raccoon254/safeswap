'use client'

import { useState, useEffect } from 'react'
import { useAccount, useSignMessage } from 'wagmi'
import { SiweMessage } from 'siwe'

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState(null)
  const [isAuthenticating, setIsAuthenticating] = useState(false)

  const { address, isConnected } = useAccount()
  const { signMessageAsync } = useSignMessage()

  useEffect(() => {
    // Check for stored token on mount
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('safeswap_token')
      if (storedToken) {
        setToken(storedToken)
        setIsAuthenticated(true)
      }
    }
  }, [])

  useEffect(() => {
    // Clear auth state when wallet disconnects
    if (!isConnected) {
      logout()
    }
  }, [isConnected])

  const authenticate = async () => {
    if (!address || !isConnected) {
      throw new Error('Wallet not connected')
    }

    setIsAuthenticating(true)

    try {
      // Get nonce from server
      const nonceResponse = await fetch('/api/auth/nonce', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address })
      })

      if (!nonceResponse.ok) {
        throw new Error('Failed to get nonce')
      }

      const { nonce } = await nonceResponse.json()

      // Create SIWE message
      const message = new SiweMessage({
        domain: window.location.host,
        address,
        statement: 'Sign in to Thraqs',
        uri: window.location.origin,
        version: '1',
        chainId: 1, // Ethereum mainnet
        nonce
      })

      const messageString = message.prepareMessage()

      // Sign message
      const signature = await signMessageAsync({
        message: messageString
      })

      // Verify signature with server
      const verifyResponse = await fetch('/api/auth/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: messageString,
          signature
        })
      })

      if (!verifyResponse.ok) {
        throw new Error('Failed to verify signature')
      }

      const { token: authToken } = await verifyResponse.json()

      // Store token
      localStorage.setItem('safeswap_token', authToken)
      setToken(authToken)
      setIsAuthenticated(true)

      return authToken
    } catch (error) {
      console.error('Authentication error:', error)
      throw error
    } finally {
      setIsAuthenticating(false)
    }
  }

  const logout = () => {
    localStorage.removeItem('safeswap_token')
    setToken(null)
    setIsAuthenticated(false)
  }

  return {
    isAuthenticated,
    token,
    isAuthenticating,
    authenticate,
    logout
  }
}