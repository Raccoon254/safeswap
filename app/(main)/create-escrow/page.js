'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import {ArrowLeft, Wallet, Shield, AlertCircle, User, Mail, FileText, Coins, CheckCircle, Gem} from 'lucide-react'
import Link from 'next/link'

const CreateEscrow = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [formData, setFormData] = useState({
    tokenAddress: '0x0000000000000000000000000000000000000000',
    tokenSymbol: 'ETH',
    amount: '',
    recipientEmail: '',
    description: '',
    terms: '',
    creatorWallet: ''
  })
  const [isCreating, setIsCreating] = useState(false)
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [balanceInfo, setBalanceInfo] = useState(null)
  const [isCheckingBalance, setIsCheckingBalance] = useState(false)
  const router = useRouter()

  useEffect(() => {
    checkAuth()

    // Intersection Observer for animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('[id]')
    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/auth/me', {
        credentials: 'include'
      })

      if (!response.ok) {
        router.push('/login')
        return
      }

      const data = await response.json()
      setUser(data.user)
    } catch (error) {
      console.error('Auth check failed:', error)
      router.push('/login')
    } finally {
      setIsLoading(false)
    }
  }

  const popularTokens = [
    { symbol: 'ETH', address: '0x0000000000000000000000000000000000000000', name: 'Ethereum' },
    { symbol: 'USDC', address: '0xA0b86a33E6441A8A0B3f7bE80AE9e6a5bF15F935', name: 'USD Coin' },
    { symbol: 'USDT', address: '0xdAC17F958D2ee523a2206206994597C13D831ec7', name: 'Tether USD' },
    { symbol: 'DAI', address: '0x6B175474E89094C44Da98b954EedeAC495271d0F', name: 'Dai Stablecoin' }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    const newFormData = {
      ...formData,
      [name]: value
    }
    setFormData(newFormData)

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }

    // Clear success message when user types
    if (success) {
      setSuccess('')
    }

    // Check balance when amount or wallet changes
    if ((name === 'amount' || name === 'creatorWallet') && newFormData.creatorWallet && newFormData.amount && newFormData.tokenAddress) {
      // Debounce balance check
      setTimeout(() => {
        checkBalance(newFormData.tokenAddress, newFormData.creatorWallet, newFormData.amount)
      }, 500)
    }
  }

  const handleTokenSelect = (token) => {
    setFormData(prev => ({
      ...prev,
      tokenSymbol: token.symbol,
      tokenAddress: token.address
    }))

    // Check balance if wallet and amount are provided
    if (formData.creatorWallet && formData.amount) {
      checkBalance(token.address, formData.creatorWallet, formData.amount)
    }
  }

  const checkBalance = async (tokenAddress, walletAddress, amount) => {
    if (!walletAddress || !amount || !tokenAddress) return

    setIsCheckingBalance(true)
    try {
      const response = await fetch('/api/wallet/balance', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          walletAddress,
          tokenAddress,
          amount
        })
      })

      if (response.ok) {
        const data = await response.json()
        setBalanceInfo(data)
      } else {
        console.error('Failed to check balance')
        setBalanceInfo(null)
      }
    } catch (error) {
      console.error('Error checking balance:', error)
      setBalanceInfo(null)
    } finally {
      setIsCheckingBalance(false)
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.amount || parseFloat(formData.amount) <= 0) {
      newErrors.amount = 'Please enter a valid amount'
    }

    if (!formData.recipientEmail || !formData.recipientEmail.includes('@')) {
      newErrors.recipientEmail = 'Please enter a valid email address'
    }

    if (formData.recipientEmail?.toLowerCase() === user?.email?.toLowerCase()) {
      newErrors.recipientEmail = 'Recipient cannot be the same as you'
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Please provide a description'
    }

    if (formData.creatorWallet && !/^0x[a-fA-F0-9]{40}$/.test(formData.creatorWallet)) {
      newErrors.creatorWallet = 'Please enter a valid wallet address'
    }

    // Check balance if wallet is provided
    if (formData.creatorWallet && balanceInfo?.balanceCheck && !balanceInfo.balanceCheck.hasSufficientBalance) {
      newErrors.amount = `Insufficient balance. You have ${balanceInfo.balance} ${formData.tokenSymbol}, but need ${formData.amount}`
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsCreating(true)

    try {
      const response = await fetch('/api/escrows', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to create escrow')
      }

      const data = await response.json()

      // Show success message briefly
      setSuccess('Escrow created successfully! Redirecting...')

      // Clear the form
      setFormData({
        tokenAddress: '0x0000000000000000000000000000000000000000',
        tokenSymbol: 'ETH',
        amount: '',
        recipientEmail: '',
        description: '',
        terms: '',
        creatorWallet: ''
      })

      // Redirect after a short delay to show success message
      setTimeout(() => {
        router.push(`/escrow/${data.escrow.id}`)
      }, 1500)

    } catch (error) {
      console.error('Error creating escrow:', error)
      setErrors({ submit: error.message })
    } finally {
      setIsCreating(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0c0219] flex items-center justify-center">
        <div className="text-center">
          <div className="loading loading-ring loading-lg mx-auto mb-4"></div>
          <p className="text-gray-400">Loading...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0c0219]">
      {/* Hero Section */}
      <section id="create-hero" className="relative pt-24 pb-12 overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className={`flex items-center gap-6 mb-12 transform transition-all duration-1000 ${
            visibleSections.has('create-hero') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-100'
          }`}>
            <Link
              href="/dashboard"
              className="group p-3 rounded-xl border border-[#2B3139]/10 hover:border-[#F0B90B] bg-gray-900/20 hover:bg-[#F0B90B]/10 transition-all duration-300"
            >
              <ArrowLeft className="w-6 h-6 text-gray-400 group-hover:text-[#F0B90B] transition-colors duration-300" />
            </Link>
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl font-bold text-white">
                Create New <span className="text-[#F0B90B]">Escrow</span>
              </h1>
              <p className="text-[#B7BDC6] text-lg">Set up a secure token exchange with built-in protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="create-form" className="py-16 bg-[#0c0219]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className={`bg-gray-900/20 border border-[#2B3139]/10 rounded-xl p-8 space-y-8 transform transition-all duration-1000 ${
            visibleSections.has('create-form') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-100'
          }`}>
            {/* Token Selection */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Gem className="w-6 h-6 text-[#F0B90B]" />
                <h3 className="text-xl font-bold text-white">Select Token</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {popularTokens.map((token) => (
                  <button
                    key={token.symbol}
                    type="button"
                    onClick={() => handleTokenSelect(token)}
                    className={`group p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${
                      formData.tokenSymbol === token.symbol
                        ? 'border-[#F0B90B] bg-[#F0B90B]/10 ring-2 ring-[#F0B90B]/20'
                        : 'border-[#2B3139]/10 hover:border-[#F0B90B]/50 bg-[#0c0219]'
                    }`}
                  >
                    <div className="font-bold text-white text-lg">{token.symbol}</div>
                    <div className="text-xs text-[#B7BDC6] mt-1">{token.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Amount */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Coins className="w-6 h-6 text-[#F0B90B]" />
                <h3 className="text-xl font-bold text-white">Amount</h3>
              </div>
              <div className="relative">
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  step="any"
                  placeholder="0.0"
                  className={`w-full px-6 py-4 bg-[#0c0219] border rounded-xl text-white text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F0B90B] focus:border-transparent transition-all duration-300 ${
                    errors.amount ? 'border-red-500' : 'border-[#2B3139]/10'
                  }`}
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#F0B90B] font-bold">
                  {formData.tokenSymbol}
                </div>
              </div>
              {errors.amount && (
                <p className="text-sm text-red-400 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {errors.amount}
                </p>
              )}
            </div>

            {/* Recipient Email */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-[#F0B90B]" />
                <h3 className="text-xl font-bold text-white">Recipient Email</h3>
              </div>
              <input
                type="email"
                id="recipientEmail"
                name="recipientEmail"
                value={formData.recipientEmail}
                onChange={handleInputChange}
                placeholder="recipient@example.com"
                className={`w-full px-6 py-4 bg-[#0c0219] border rounded-xl text-white text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F0B90B] focus:border-transparent transition-all duration-300 ${
                  errors.recipientEmail ? 'border-red-500' : 'border-[#2B3139]/10'
                }`}
              />
              {errors.recipientEmail && (
                <p className="text-sm text-red-400 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {errors.recipientEmail}
                </p>
              )}
            </div>

            {/* Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-[#F0B90B]" />
                <h3 className="text-xl font-bold text-white">Trade Description</h3>
              </div>
              <input
                type="text"
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Brief description of what you're trading"
                className={`w-full px-6 py-4 bg-[#0c0219] border rounded-xl text-white text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F0B90B] focus:border-transparent transition-all duration-300 ${
                  errors.description ? 'border-red-500' : 'border-[#2B3139]/10'
                }`}
              />
              {errors.description && (
                <p className="text-sm text-red-400 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {errors.description}
                </p>
              )}
            </div>

            {/* Creator Wallet */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Wallet className="w-6 h-6 text-[#F0B90B]" />
                <h3 className="text-xl font-bold text-white">Your Wallet Address</h3>
                <span className="text-sm text-[#B7BDC6] bg-[#F0B90B]/10 px-2 py-1 rounded">Optional</span>
              </div>
              <input
                type="text"
                id="creatorWallet"
                name="creatorWallet"
                value={formData.creatorWallet}
                onChange={handleInputChange}
                placeholder="0x... (You can add this later)"
                className={`w-full px-6 py-4 bg-[#0c0219] border rounded-xl text-white text-lg placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F0B90B] focus:border-transparent transition-all duration-300 font-mono ${
                  errors.creatorWallet ? 'border-red-500' : 'border-[#2B3139]/10'
                }`}
              />
              {errors.creatorWallet && (
                <p className="text-sm text-red-400 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  {errors.creatorWallet}
                </p>
              )}
              <p className="text-xs text-[#B7BDC6]">
                Your wallet address for receiving payments. You can add this now or later on the escrow page.
              </p>

              {/* Balance Display */}
              {formData.creatorWallet && formData.amount && formData.tokenAddress && (
                <div className="mt-4 p-4 bg-[#0c0219] border border-[#2B3139]/10 rounded-lg">
                  {isCheckingBalance ? (
                    <div className="flex items-center gap-2 text-[#B7BDC6] text-sm">
                      <div className="w-4 h-4 border-2 border-[#F0B90B]/30 border-t-[#F0B90B] rounded-full animate-spin"></div>
                      Checking balance...
                    </div>
                  ) : balanceInfo ? (
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-[#B7BDC6]">Current Balance:</span>
                        <span className="text-white font-mono">
                          {balanceInfo.balance} {formData.tokenSymbol}
                        </span>
                      </div>
                      {balanceInfo.balanceCheck && (
                        <div className={`p-3 rounded-lg border ${
                          balanceInfo.balanceCheck.hasSufficientBalance
                            ? 'bg-green-500/10 border-green-500/20'
                            : 'bg-red-500/10 border-red-500/20'
                        }`}>
                          <div className="flex items-center gap-2">
                            {balanceInfo.balanceCheck.hasSufficientBalance ? (
                              <CheckCircle className="w-4 h-4 text-green-400" />
                            ) : (
                              <AlertCircle className="w-4 h-4 text-red-400" />
                            )}
                            <span className={`text-sm font-medium ${
                              balanceInfo.balanceCheck.hasSufficientBalance ? 'text-green-400' : 'text-red-400'
                            }`}>
                              {balanceInfo.balanceCheck.hasSufficientBalance
                                ? 'Sufficient balance ✓'
                                : `Insufficient balance - Need ${balanceInfo.balanceCheck.shortfall} more ${formData.tokenSymbol}`
                              }
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : null}
                </div>
              )}
            </div>

            {/* Terms */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#F0B90B]" />
                <h3 className="text-xl font-bold text-white">Terms & Conditions</h3>
                <span className="text-sm text-[#B7BDC6] bg-[#F0B90B]/10 px-2 py-1 rounded">Optional</span>
              </div>
              <textarea
                id="terms"
                name="terms"
                value={formData.terms}
                onChange={handleInputChange}
                rows={4}
                placeholder="Detailed terms and conditions for this trade..."
                className="w-full px-6 py-4 bg-[#0c0219] border border-[#2B3139]/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F0B90B] focus:border-transparent transition-all duration-300 resize-none"
              />
            </div>

            {/* Info Box */}
            <div className="bg-[#F0B90B]/10 border border-[#F0B90B]/20 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-[#F0B90B] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-[#F0B90B] font-bold text-lg mb-2">Escrow Security</p>
                  <p className="text-[#B7BDC6] text-sm leading-relaxed">
                    Your tokens will be securely held in a smart contract until both parties confirm the trade completion.
                    A 1% fee will be deducted upon successful completion. The recipient will be notified via email and can
                    access the escrow once they create an account.
                  </p>
                </div>
              </div>
            </div>

            {/* Success Message */}
            {success && (
              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                <p className="text-green-400 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  {success}
                </p>
              </div>
            )}

            {/* Submit Errors */}
            {errors.submit && (
              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                <p className="text-red-400 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5" />
                  {errors.submit}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isCreating}
              className="group w-full border ring ring-offset-2 ring-offset-[#1A1D29] border-[#F0B90B] hover:border-[#FCD535] ring-[#F0B90B]/30 hover:ring-[#FCD535]/40 bg-[#F0B90B] hover:bg-[#FCD535] disabled:opacity-50 disabled:cursor-not-allowed text-[#0c0219] py-4 rounded-xl font-bold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl transform active:scale-95 flex items-center justify-center gap-3"
            >
              {isCreating ? (
                <>
                  <div className="w-6 h-6 border-2 border-[#0c0219]/30 border-t-[#0c0219] rounded-full animate-spin"></div>
                  Creating Escrow...
                </>
              ) : (
                <>
                  <Shield className="w-6 h-6" />
                  Create Secure Escrow
                </>
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default CreateEscrow