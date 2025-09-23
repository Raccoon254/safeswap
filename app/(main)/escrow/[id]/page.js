'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { ArrowLeft, Shield, Clock, CheckCircle, AlertTriangle, User, Mail, FileText, Coins, MessageSquare, Copy, ExternalLink, Wallet } from 'lucide-react'
import Link from 'next/link'

const EscrowView = () => {
  const [user, setUser] = useState(null)
  const [escrow, setEscrow] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [visibleSections, setVisibleSections] = useState(new Set())
  const [actionLoading, setActionLoading] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const [walletAddress, setWalletAddress] = useState('')
  const [isUpdatingWallet, setIsUpdatingWallet] = useState(false)
  const router = useRouter()
  const params = useParams()

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

    // Set up polling for real-time updates
    const pollInterval = setInterval(() => {
      if (escrow && escrow.status !== 'COMPLETED') {
        fetchEscrow()
      }
    }, 10000) // Poll every 10 seconds

    return () => {
      observer.disconnect()
      clearInterval(pollInterval)
    }
  }, [escrow?.status])

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

      // Fetch escrow details
      await fetchEscrow()
    } catch (error) {
      console.error('Auth check failed:', error)
      router.push('/login')
    } finally {
      setIsLoading(false)
    }
  }

  const fetchEscrow = async () => {
    try {
      const response = await fetch(`/api/escrows/${params.id}`, {
        credentials: 'include'
      })

      if (!response.ok) {
        const data = await response.json()
        setError(data.error || 'Failed to fetch escrow')
        return
      }

      const data = await response.json()
      setEscrow(data.escrow)
      setMessages(data.messages || [])
    } catch (error) {
      console.error('Failed to fetch escrow:', error)
      setError('Failed to load escrow details')
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'PENDING':
        return <Clock className="w-6 h-6 text-yellow-500" />
      case 'ACTIVE':
        return <Shield className="w-6 h-6 text-blue-500" />
      case 'COMPLETED':
        return <CheckCircle className="w-6 h-6 text-green-500" />
      case 'DISPUTED':
        return <AlertTriangle className="w-6 h-6 text-red-500" />
      default:
        return <Clock className="w-6 h-6 text-gray-500" />
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'PENDING':
        return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
      case 'ACTIVE':
        return 'bg-blue-500/10 text-blue-400 border-blue-500/20'
      case 'COMPLETED':
        return 'bg-green-500/10 text-green-400 border-green-500/20'
      case 'DISPUTED':
        return 'bg-red-500/10 text-red-400 border-red-500/20'
      default:
        return 'bg-gray-500/10 text-gray-400 border-gray-500/20'
    }
  }

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
    // You could add a toast notification here
  }

  const handleConfirm = async () => {
    setActionLoading('confirm')
    setError('')
    setSuccess('')

    try {
      const response = await fetch(`/api/escrows/${params.id}/confirm`, {
        method: 'POST',
        credentials: 'include'
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to confirm escrow')
      }

      const data = await response.json()

      // Show success message
      if (data.escrow.status === 'COMPLETED') {
        setSuccess('🎉 Trade completed successfully! Both parties have confirmed.')
      } else {
        setSuccess('✅ Your confirmation has been recorded. Waiting for the other party.')
      }

      // Refresh data
      await fetchEscrow()

      // Clear success message after 5 seconds
      setTimeout(() => setSuccess(''), 5000)
    } catch (error) {
      console.error('Error confirming escrow:', error)
      setError(error.message)
    } finally {
      setActionLoading('')
    }
  }

  const handleDispute = async () => {
    setActionLoading('dispute')
    try {
      const response = await fetch(`/api/escrows/${params.id}/dispute`, {
        method: 'POST',
        credentials: 'include'
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to dispute escrow')
      }

      await fetchEscrow() // Refresh data
    } catch (error) {
      console.error('Error disputing escrow:', error)
      setError(error.message)
    } finally {
      setActionLoading('')
    }
  }

  const sendMessage = async (e) => {
    e.preventDefault()
    if (!message.trim()) return

    try {
      const response = await fetch(`/api/escrows/${params.id}/messages`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ content: message })
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to send message')
      }

      setMessage('')
      await fetchEscrow() // Refresh to get new messages
    } catch (error) {
      console.error('Error sending message:', error)
      setError(error.message)
    }
  }

  const updateWalletAddress = async (e) => {
    e.preventDefault()
    if (!walletAddress.trim()) return

    setIsUpdatingWallet(true)
    setError('')
    setSuccess('')

    try {
      const response = await fetch(`/api/escrows/${params.id}/wallet`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ walletAddress })
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Failed to update wallet address')
      }

      const data = await response.json()
      setSuccess('✅ Wallet address updated successfully!')
      setWalletAddress('')

      // Refresh escrow data
      await fetchEscrow()

      // Clear success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000)
    } catch (error) {
      console.error('Error updating wallet address:', error)
      setError(error.message)
    } finally {
      setIsUpdatingWallet(false)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0c0219] flex items-center justify-center">
        <div className="text-center">
          <div className="loading loading-ring loading-lg mx-auto mb-4"></div>
          <p className="text-gray-400">Loading escrow details...</p>
        </div>
      </div>
    )
  }

  if (error && !escrow) {
    return (
      <div className="min-h-screen bg-[#0c0219] flex items-center justify-center">
        <div className="text-center">
          <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Error</h1>
          <p className="text-gray-400 mb-6">{error}</p>
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 bg-[#F0B90B] hover:bg-[#FCD535] text-[#0c0219] px-6 py-3 rounded-full font-bold transition-colors duration-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  const isCreator = escrow?.creatorId === user?.id
  const isRecipient = escrow?.recipientId === user?.id
  const counterparty = isCreator ? escrow?.recipient : escrow?.creator
  const userRole = isCreator ? 'Creator' : 'Recipient'

  return (
    <div className="min-h-screen bg-[#0c0219]">
      {/* Hero Section */}
      <section id="escrow-hero" className="relative pt-24 pb-12 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className={`flex items-center gap-6 mb-12 transform transition-all duration-1000 ${
            visibleSections.has('escrow-hero') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-100'
          }`}>
            <Link
              href="/dashboard"
              className="group p-3 rounded-xl border border-[#2B3139]/10 hover:border-[#F0B90B] bg-gray-900/20 hover:bg-[#F0B90B]/10 transition-all duration-300"
            >
              <ArrowLeft className="w-6 h-6 text-gray-400 group-hover:text-[#F0B90B] transition-colors duration-300" />
            </Link>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-4">
                <h1 className="text-3xl md:text-4xl font-bold text-white">
                  Escrow <span className="text-[#F0B90B]">Details</span>
                </h1>
                <div className="flex items-center gap-2">
                  {getStatusIcon(escrow?.status)}
                  <span className={`px-3 py-1 text-sm font-medium rounded-full border ${getStatusColor(escrow?.status)}`}>
                    {escrow?.status}
                  </span>
                </div>
              </div>
              <p className="text-[#B7BDC6] text-lg">
                {escrow?.amount} {escrow?.tokenSymbol} • {userRole}
              </p>
            </div>
            <button
              onClick={() => copyToClipboard(window.location.href)}
              className="group p-3 rounded-xl border border-[#2B3139]/10 hover:border-[#F0B90B] bg-gray-900/20 hover:bg-[#F0B90B]/10 transition-all duration-300"
            >
              <Copy className="w-6 h-6 text-gray-400 group-hover:text-[#F0B90B] transition-colors duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="escrow-content" className="py-16 bg-[#0c0219]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* Main Details */}
            <div className="lg:col-span-2 space-y-8">

              {/* Escrow Info */}
              <div className={`bg-gray-900/20 border border-[#2B3139]/10 rounded-xl p-8 transform transition-all duration-1000 ${
                visibleSections.has('escrow-content') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-100'
              }`}>
                <div className="flex items-center gap-3 mb-6">
                  <Coins className="w-6 h-6 text-[#F0B90B]" />
                  <h3 className="text-xl font-bold text-white">Escrow Information</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-[#F0B90B] font-medium">Amount</label>
                      <p className="text-2xl font-bold text-white break-all" title={`${escrow?.amount} ${escrow?.tokenSymbol}`}>
                        {escrow?.amount} {escrow?.tokenSymbol}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm text-[#F0B90B] font-medium">Token Address</label>
                      <div className="flex items-start gap-2">
                        <p className="text-sm text-[#B7BDC6] font-mono break-all flex-1" title={escrow?.tokenAddress}>
                          {escrow?.tokenAddress}
                        </p>
                        <button
                          onClick={() => copyToClipboard(escrow?.tokenAddress)}
                          className="p-1 hover:bg-[#F0B90B]/10 rounded transition-colors flex-shrink-0 mt-0.5"
                          title="Copy address"
                        >
                          <Copy className="w-4 h-4 text-[#F0B90B]" />
                        </button>
                        <a
                          href={`https://etherscan.io/address/${escrow?.tokenAddress}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 hover:bg-[#F0B90B]/10 rounded transition-colors flex-shrink-0 mt-0.5"
                          title="View on Etherscan"
                        >
                          <ExternalLink className="w-4 h-4 text-[#F0B90B]" />
                        </a>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-[#F0B90B] font-medium">Created</label>
                      <p className="text-[#B7BDC6]">{new Date(escrow?.createdAt).toLocaleDateString()} at {new Date(escrow?.createdAt).toLocaleTimeString()}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-[#F0B90B] font-medium">Escrow ID</label>
                      <div className="flex items-start gap-2">
                        <p className="text-sm text-[#B7BDC6] font-mono break-all flex-1" title={escrow?.id}>
                          {escrow?.id}
                        </p>
                        <button
                          onClick={() => copyToClipboard(escrow?.id)}
                          className="p-1 hover:bg-[#F0B90B]/10 rounded transition-colors flex-shrink-0 mt-0.5"
                          title="Copy escrow ID"
                        >
                          <Copy className="w-4 h-4 text-[#F0B90B]" />
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-[#F0B90B] font-medium">Chain</label>
                      <p className="text-[#B7BDC6]">Ethereum (Chain ID: {escrow?.chainId})</p>
                    </div>
                    {escrow?.completedAt && (
                      <div>
                        <label className="text-sm text-[#F0B90B] font-medium">Completed</label>
                        <p className="text-[#B7BDC6]">{new Date(escrow?.completedAt).toLocaleDateString()}</p>
                      </div>
                    )}
                    {escrow?.transactionHash && (
                      <div>
                        <label className="text-sm text-[#F0B90B] font-medium">Transaction Hash</label>
                        <div className="flex items-start gap-2">
                          <p className="text-sm text-[#B7BDC6] font-mono break-all flex-1" title={escrow.transactionHash}>
                            {escrow.transactionHash}
                          </p>
                          <button
                            onClick={() => copyToClipboard(escrow.transactionHash)}
                            className="p-1 hover:bg-[#F0B90B]/10 rounded transition-colors flex-shrink-0 mt-0.5"
                            title="Copy transaction hash"
                          >
                            <Copy className="w-4 h-4 text-[#F0B90B]" />
                          </button>
                          <a
                            href={`https://etherscan.io/tx/${escrow.transactionHash}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 hover:bg-[#F0B90B]/10 rounded transition-colors flex-shrink-0 mt-0.5"
                            title="View on Etherscan"
                          >
                            <ExternalLink className="w-4 h-4 text-[#F0B90B]" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[#2B3139]/10">
                  <label className="text-sm text-[#F0B90B] font-medium">Description</label>
                  <div className="mt-2 p-4 bg-[#0c0219] border border-[#2B3139]/10 rounded-lg">
                    <p className="text-[#B7BDC6] break-words">{escrow?.description}</p>
                  </div>
                </div>

                {escrow?.terms && (
                  <div className="mt-6 pt-6 border-t border-[#2B3139]/10">
                    <label className="text-sm text-[#F0B90B] font-medium">Terms & Conditions</label>
                    <div className="mt-2 p-4 bg-[#0c0219] border border-[#2B3139]/10 rounded-lg max-h-40 overflow-y-auto">
                      <p className="text-[#B7BDC6] whitespace-pre-wrap break-words">{escrow?.terms}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Progress Tracking */}
              <div className="bg-gray-900/20 border border-[#2B3139]/10 rounded-xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Shield className="w-6 h-6 text-[#F0B90B]" />
                  <h3 className="text-xl font-bold text-white">Trade Progress</h3>
                </div>

                {/* Status Message */}
                <div className="mb-6 rounded-[12px] overflow-hidden ring-1 p-1 ring-offset-1 ring-offset-transparent ring-green-500/10">
                  {escrow?.status === 'COMPLETED' ? (
                    <div className="p-4 bg-green-500/10 rounded-[8px]  border-green-500/20">
                      <p className="text-green-400 font-medium flex items-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Trade completed successfully!
                      </p>
                    </div>
                  ) : escrow?.status === 'DISPUTED' ? (
                    <div className="p-4 rounded-[8px] bg-red-500/10 border-red-500/20">
                      <p className="text-red-400 font-medium flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5" />
                        Trade is under dispute
                      </p>
                    </div>
                  ) : escrow?.sellerConfirmed && escrow?.buyerConfirmed ? (
                    <div className="p-4 rounded-[8px] bg-blue-500/10 border-blue-500/20">
                      <p className="text-blue-400 font-medium flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Both parties confirmed - finalizing trade...
                      </p>
                    </div>
                  ) : escrow?.sellerConfirmed && !escrow?.buyerConfirmed ? (
                    <div className="p-4 rounded-[8px] bg-yellow-500/10 border-yellow-500/20">
                      <p className="text-yellow-400 font-medium flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Waiting for recipient to confirm
                      </p>
                    </div>
                  ) : !escrow?.sellerConfirmed && escrow?.buyerConfirmed ? (
                    <div className="p-4 rounded-[8px] bg-yellow-500/10 border-yellow-500/20">
                      <p className="text-yellow-400 font-medium flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Waiting for creator to confirm
                      </p>
                    </div>
                  ) : (
                    <div className="p-4 rounded-[8px] bg-[#F0B90B]/10 border-[#F0B90B]/20">
                      <p className="text-[#F0B90B] font-medium flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Waiting for both parties to confirm
                      </p>
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-[#B7BDC6]">Creator Confirmed</span>
                      {isCreator && !escrow?.sellerConfirmed && (
                        <span className="text-xs bg-[#F0B90B] text-[#0c0219] px-2 py-1 rounded-full font-medium">
                          Action Required
                        </span>
                      )}
                    </div>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      escrow?.sellerConfirmed ? 'bg-green-500' : 'bg-[#2B3139]'
                    }`}>
                      {escrow?.sellerConfirmed ? (
                        <CheckCircle className="w-4 h-4 text-white" />
                      ) : (
                        <Clock className="w-4 h-4 text-[#B7BDC6]" />
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-[#B7BDC6]">Recipient Confirmed</span>
                      {isRecipient && !escrow?.buyerConfirmed && (
                        <span className="text-xs bg-[#F0B90B] text-[#0c0219] px-2 py-1 rounded-full font-medium">
                          Action Required
                        </span>
                      )}
                    </div>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      escrow?.buyerConfirmed ? 'bg-green-500' : 'bg-[#2B3139]'
                    }`}>
                      {escrow?.buyerConfirmed ? (
                        <CheckCircle className="w-4 h-4 text-white" />
                      ) : (
                        <Clock className="w-4 h-4 text-[#B7BDC6]" />
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              {escrow?.status !== 'COMPLETED' && (
                <div className="bg-gray-900/20 border border-[#2B3139]/10 rounded-xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Shield className="w-6 h-6 text-[#F0B90B]" />
                    <h3 className="text-xl font-bold text-white">Actions</h3>
                  </div>

                  {escrow?.status === 'PENDING' && !isCreator && !escrow?.recipientId && (
                    <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                      <p className="text-blue-400 text-sm">
                        This escrow was sent to your email. Your account is now linked to access it.
                      </p>
                    </div>
                  )}

                  {/* Wallet Address Requirement */}
                  {((isCreator && !escrow?.creatorWallet) || (isRecipient && !escrow?.recipientWallet)) && (
                    <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                      <p className="text-yellow-400 text-sm flex items-center gap-2">
                        <Wallet className="w-4 h-4" />
                        Please add your wallet address below before confirming the trade.
                      </p>
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={handleConfirm}
                      disabled={
                        actionLoading === 'confirm' ||
                        (isCreator && escrow?.sellerConfirmed) ||
                        (isRecipient && escrow?.buyerConfirmed) ||
                        (isCreator && !escrow?.creatorWallet) ||
                        (isRecipient && !escrow?.recipientWallet)
                      }
                      className="flex-1 min-w-[200px] bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {actionLoading === 'confirm' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Confirming...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          {(isCreator && escrow?.sellerConfirmed) || (isRecipient && escrow?.buyerConfirmed)
                            ? 'Already Confirmed'
                            : ((isCreator && !escrow?.creatorWallet) || (isRecipient && !escrow?.recipientWallet))
                            ? 'Add Wallet First'
                            : 'Confirm Trade'
                          }
                        </>
                      )}
                    </button>

                    <button
                      onClick={handleDispute}
                      disabled={actionLoading === 'dispute' || escrow?.disputed}
                      className="flex-1 min-w-[200px] bg-red-500 hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-3 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      {actionLoading === 'dispute' ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Disputing...
                        </>
                      ) : (
                        <>
                          <AlertTriangle className="w-5 h-5" />
                          {escrow?.disputed ? 'Already Disputed' : 'Dispute Trade'}
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">

              {/* Parties */}
              <div className="bg-gray-900/20 border border-[#2B3139]/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <User className="w-6 h-6 text-[#F0B90B]" />
                  <h3 className="text-lg font-bold text-white">Parties</h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-[#0c0219] rounded-lg border border-[#2B3139]/10">
                    <p className="text-sm text-[#F0B90B] font-medium">Creator</p>
                    <p className="text-white font-medium truncate" title={escrow?.creator?.name || 'Unknown'}>
                      {escrow?.creator?.name || 'Unknown'}
                    </p>
                    <p className="text-[#B7BDC6] text-sm truncate" title={escrow?.creator?.email}>
                      {escrow?.creator?.email}
                    </p>
                    {isCreator && <span className="text-xs bg-[#F0B90B] text-[#0c0219] px-2 py-1 rounded-full font-medium mt-2 inline-block">You</span>}
                  </div>

                  <div className="p-4 bg-[#0c0219] rounded-lg border border-[#2B3139]/10">
                    <p className="text-sm text-[#F0B90B] font-medium">Recipient</p>
                    <p className="text-white font-medium truncate" title={escrow?.recipient?.name || 'Pending'}>
                      {escrow?.recipient?.name || 'Pending'}
                    </p>
                    <p className="text-[#B7BDC6] text-sm truncate" title={escrow?.recipientEmail}>
                      {escrow?.recipientEmail}
                    </p>
                    {isRecipient && <span className="text-xs bg-[#F0B90B] text-[#0c0219] px-2 py-1 rounded-full font-medium mt-2 inline-block">You</span>}
                    {!escrow?.recipientId && escrow?.recipientEmail === user?.email && (
                      <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded-full font-medium mt-2 inline-block">
                        Account Linked
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Wallet Address Section */}
              <div className="bg-gray-900/20 border border-[#2B3139]/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <Wallet className="w-6 h-6 text-[#F0B90B]" />
                  <h3 className="text-lg font-bold text-white">Wallet Addresses</h3>
                </div>

                <div className="space-y-4">
                  {/* Creator Wallet */}
                  <div className="p-4 bg-[#0c0219] rounded-lg border border-[#2B3139]/10">
                    <p className="text-sm text-[#F0B90B] font-medium mb-2">Creator Wallet</p>
                    {escrow?.creatorWallet ? (
                      <div className="flex items-start gap-2">
                        <p className="text-[#B7BDC6] text-sm font-mono break-all flex-1" title={escrow.creatorWallet}>
                          {escrow.creatorWallet}
                        </p>
                        <button
                          onClick={() => copyToClipboard(escrow.creatorWallet)}
                          className="p-1 hover:bg-[#F0B90B]/10 rounded transition-colors flex-shrink-0"
                          title="Copy address"
                        >
                          <Copy className="w-4 h-4 text-[#F0B90B]" />
                        </button>
                      </div>
                    ) : (
                      <p className="text-gray-500 text-sm">Not provided</p>
                    )}
                  </div>

                  {/* Recipient Wallet */}
                  <div className="p-4 bg-[#0c0219] rounded-lg border border-[#2B3139]/10">
                    <p className="text-sm text-[#F0B90B] font-medium mb-2">Recipient Wallet</p>
                    {escrow?.recipientWallet ? (
                      <div className="flex items-start gap-2">
                        <p className="text-[#B7BDC6] text-sm font-mono break-all flex-1" title={escrow.recipientWallet}>
                          {escrow.recipientWallet}
                        </p>
                        <button
                          onClick={() => copyToClipboard(escrow.recipientWallet)}
                          className="p-1 hover:bg-[#F0B90B]/10 rounded transition-colors flex-shrink-0"
                          title="Copy address"
                        >
                          <Copy className="w-4 h-4 text-[#F0B90B]" />
                        </button>
                      </div>
                    ) : (
                      <p className="text-gray-500 text-sm">Not provided</p>
                    )}
                  </div>

                  {/* Wallet Address Input */}
                  {((isCreator && !escrow?.creatorWallet) || (isRecipient && !escrow?.recipientWallet)) && (
                    <div className="mt-4 pt-4 border-t border-[#2B3139]/10">
                      <p className="text-sm text-[#F0B90B] font-medium mb-3">
                        Add Your Wallet Address
                      </p>
                      <p className="text-xs text-[#B7BDC6] mb-3">
                        Enter your wallet address to receive tokens when the trade is completed.
                      </p>
                      <form onSubmit={updateWalletAddress} className="space-y-3">
                        <input
                          type="text"
                          value={walletAddress}
                          onChange={(e) => setWalletAddress(e.target.value)}
                          placeholder="0x..."
                          className="w-full px-4 py-3 bg-[#0c0219] border border-[#2B3139]/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F0B90B] focus:border-transparent font-mono text-sm"
                        />
                        <button
                          type="submit"
                          disabled={!walletAddress.trim() || isUpdatingWallet}
                          className="w-full bg-[#F0B90B] hover:bg-[#FCD535] disabled:opacity-50 disabled:cursor-not-allowed text-[#0c0219] py-2 px-4 rounded-lg font-bold transition-colors duration-200 flex items-center justify-center gap-2"
                        >
                          {isUpdatingWallet ? (
                            <>
                              <div className="w-4 h-4 border-2 border-[#0c0219]/30 border-t-[#0c0219] rounded-full animate-spin"></div>
                              Updating...
                            </>
                          ) : (
                            <>
                              <Wallet className="w-4 h-4" />
                              Add Wallet Address
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>

              {/* Messages */}
              <div className="bg-gray-900/20 border border-[#2B3139]/10 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="w-6 h-6 text-[#F0B90B]" />
                  <h3 className="text-lg font-bold text-white">Messages</h3>
                </div>

                <div className="space-y-4 max-h-64 overflow-y-auto mb-4 scrollbar-thin scrollbar-track-[#0c0219] scrollbar-thumb-[#2B3139]">
                  {messages.length === 0 ? (
                    <p className="text-[#B7BDC6] text-sm text-center py-4">No messages yet</p>
                  ) : (
                    messages.map((msg, index) => {
                      const isOwnMessage = msg.senderId === user?.id
                      return (
                        <div key={index} className={`p-3 rounded-lg max-w-[90%] ${
                          isOwnMessage
                            ? 'bg-[#F0B90B]/10 border border-[#F0B90B]/20 ml-auto'
                            : 'bg-[#0c0219] border border-[#2B3139]/10'
                        }`}>
                          <p className="text-white text-sm break-words">{msg.content}</p>
                          <p className="text-[#B7BDC6] text-xs mt-1">
                            {new Date(msg.createdAt).toLocaleString()}
                            {isOwnMessage && <span className="ml-2 text-[#F0B90B]">You</span>}
                          </p>
                        </div>
                      )
                    })
                  )}
                </div>

                <form onSubmit={sendMessage} className="space-y-3">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Send a message..."
                    rows={3}
                    className="w-full px-4 py-3 bg-[#0c0219] border border-[#2B3139]/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F0B90B] focus:border-transparent resize-none"
                  />
                  <button
                    type="submit"
                    disabled={!message.trim()}
                    className="w-full bg-[#F0B90B] hover:bg-[#FCD535] disabled:opacity-50 disabled:cursor-not-allowed text-[#0c0219] py-2 px-4 rounded-lg font-bold transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Message */}
      {success && (
        <div className="fixed bottom-4 right-4 bg-green-500/10 border border-green-500/20 rounded-xl p-4 max-w-md z-50">
          <p className="text-green-400 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            {success}
          </p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="fixed bottom-4 right-4 bg-red-500/10 border border-red-500/20 rounded-xl p-4 max-w-md z-50">
          <p className="text-red-400 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            {error}
          </p>
        </div>
      )}
    </div>
  )
}

export default EscrowView