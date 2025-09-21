'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Plus, Shield, Clock, CheckCircle, AlertTriangle, Wallet, User, LogOut } from 'lucide-react'
import Link from 'next/link'

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [escrows, setEscrows] = useState([])
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    completed: 0,
    disputed: 0,
    totalValue: 0
  })
  const [visibleSections, setVisibleSections] = useState(new Set())
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

    // Set up polling for dashboard updates
    const pollInterval = setInterval(() => {
      fetchEscrows()
    }, 30000) // Poll every 30 seconds

    return () => {
      observer.disconnect()
      clearInterval(pollInterval)
    }
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

      // Fetch escrows
      await fetchEscrows()
    } catch (error) {
      console.error('Auth check failed:', error)
      router.push('/login')
    } finally {
      setIsLoading(false)
    }
  }

  const fetchEscrows = async () => {
    try {
      const response = await fetch('/api/escrows', {
        credentials: 'include'
      })

      if (response.ok) {
        const data = await response.json()
        setEscrows(data.escrows)
        setStats(data.stats)
      }
    } catch (error) {
      console.error('Failed to fetch escrows:', error)
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      })
      router.push('/login')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const formatValue = (value) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`
    } else if (value >= 1000) {
      return `$${(value / 1000).toFixed(1)}k`
    } else {
      return `$${value.toFixed(0)}`
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'PENDING':
        return <Clock className="w-5 h-5 text-yellow-500" />
      case 'ACTIVE':
        return <Shield className="w-5 h-5 text-blue-500" />
      case 'COMPLETED':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'DISPUTED':
        return <AlertTriangle className="w-5 h-5 text-red-500" />
      default:
        return <Clock className="w-5 h-5 text-gray-500" />
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0c0219] flex items-center justify-center">
        <div className="text-center">
          <div className="loading loading-ring loading-lg mx-auto mb-4"></div>
          <p className="text-gray-400">Setting up your dashboard</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0c0219]">
      {/* Hero Section */}
      <section id="dashboard-hero" className="relative pt-24 pb-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className={`flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12 transform transition-all duration-1000 ${
            visibleSections.has('dashboard-hero') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-100'
          }`}>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#F0B90B] rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6 text-[#0c0219]" />
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold text-white">
                    Welcome back, <span className="text-[#F0B90B]">{user?.name || 'Trader'}</span>
                  </h1>
                  <p className="text-[#B7BDC6] mt-1">Manage your secure escrow transactions</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/create-escrow"
                className="group border ring ring-offset-2 ring-offset-[#0c0219] border-[#F0B90B] hover:border-[#FCD535] ring-[#F0B90B]/30 hover:ring-[#FCD535]/40 bg-[#F0B90B] hover:bg-[#FCD535] text-[#0c0219] px-6 py-3 rounded-full font-bold transition-all duration-500 hover:scale-105 hover:shadow-2xl transform active:scale-95 flex items-center gap-2"
              >
                <Plus className="w-5 h-5" />
                Create Escrow
              </Link>

              <button
                onClick={handleLogout}
                className="group border border-[#2B3139]/10 hover:border-red-500/50 bg-gray-900/20 hover:bg-red-500/10 text-gray-400 hover:text-red-400 px-4 py-3 rounded-full transition-all duration-300 flex items-center gap-2"
              >
                <LogOut className="w-5 h-5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-[#0c0219]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Escrows', value: stats.total.toString(), icon: Shield, color: 'text-[#F0B90B]', delay: '0ms' },
              { label: 'Active', value: stats.active.toString(), icon: Clock, color: 'text-blue-500', delay: '100ms' },
              { label: 'Completed', value: stats.completed.toString(), icon: CheckCircle, color: 'text-green-500', delay: '200ms' },
              { label: 'Total Value', value: formatValue(stats.totalValue), icon: null, color: 'text-[#F0B90B]', delay: '300ms' }
            ].map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div
                  key={stat.label}
                  className={`bg-gray-900/20 border border-[#2B3139]/10 rounded-xl p-6 transform transition-all duration-1000 hover:scale-105 hover:border-[#F0B90B]/30 ${
                    visibleSections.has('stats') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-100'
                  }`}
                  style={{ transitionDelay: stat.delay }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[#B7BDC6] text-sm">{stat.label}</p>
                      <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                    </div>
                    {IconComponent ? (
                      <IconComponent className={`w-8 h-8 ${stat.color}`} />
                    ) : (
                      <div className="w-8 h-8 bg-[#F0B90B] rounded-full flex items-center justify-center">
                        <span className="text-[#0c0219] font-bold text-sm">$</span>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Escrows Section */}
      <section id="escrows" className="py-16 bg-[#0c0219]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mb-8 transform transition-all duration-1000 ${
            visibleSections.has('escrows') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-100'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recent <span className="text-[#F0B90B]">Escrows</span>
            </h2>
            <p className="text-[#B7BDC6] text-lg">Track and manage your secure token exchanges</p>
          </div>

          {/* Notification for received escrows */}
          {escrows.some(e => e.recipientEmail === user?.email && !e.recipientId) && (
            <div className={`mb-6 bg-[#F0B90B]/10 border border-[#F0B90B]/20 rounded-xl p-4 transform transition-all duration-1000 ${
              visibleSections.has('escrows') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-100'
            }`}>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-[#F0B90B]" />
                <div>
                  <p className="text-[#F0B90B] font-bold">Escrows Received!</p>
                  <p className="text-[#B7BDC6] text-sm">
                    You have escrows sent to your email. Your account is now linked to access them.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className={`bg-gray-900/20 border border-[#2B3139]/10 rounded-xl overflow-hidden transform transition-all duration-1000 ${
            visibleSections.has('escrows') ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-100'
          }`} style={{ transitionDelay: '200ms' }}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-[#0c0219] border-b border-[#2B3139]/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-[#F0B90B] uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-[#F0B90B] uppercase tracking-wider">
                      Counterparty
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-[#F0B90B] uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-[#F0B90B] uppercase tracking-wider">
                      Created
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-[#F0B90B] uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2B3139]">
                  {escrows.map((escrow, index) => {
                    const isCreator = escrow.creatorId === user?.id
                    const isLinkedRecipient = escrow.recipientId === user?.id
                    const isEmailRecipient = escrow.recipientEmail === user?.email && !isLinkedRecipient

                    let counterparty, role, status
                    if (isCreator) {
                      counterparty = escrow.recipientEmail
                      role = 'Creator'
                      status = escrow.recipientId ? 'Active' : 'Pending Recipient'
                    } else {
                      counterparty = escrow.creator?.email || 'Unknown'
                      role = isEmailRecipient ? 'Received (Link Account)' : 'Recipient'
                      status = 'Received'
                    }

                    return (
                      <tr
                        key={escrow.id}
                        className="hover:bg-[#0c0219] transition-all duration-300 transform hover:scale-[1.01]"
                        style={{ transitionDelay: `${300 + index * 100}ms` }}
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <span className="text-white font-bold text-lg truncate max-w-[150px]" title={`${escrow.amount} ${escrow.tokenSymbol}`}>
                              {escrow.amount} {escrow.tokenSymbol}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex flex-col">
                            <span className="text-[#B7BDC6] text-sm truncate max-w-[200px]" title={counterparty}>
                              {counterparty}
                            </span>
                            <span className="text-[#F0B90B] text-xs">
                              {role}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center gap-2">
                            {getStatusIcon(escrow.status)}
                            <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(escrow.status)}`}>
                              {escrow.status}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-[#B7BDC6] text-sm">
                          {new Date(escrow.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Link
                            href={`/escrow/${escrow.id}`}
                            className="group text-[#F0B90B] hover:text-[#FCD535] font-bold text-sm transition-all duration-200 flex items-center gap-1"
                          >
                            View Details
                            <span className="transform transition-transform group-hover:translate-x-1">→</span>
                          </Link>
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>

            {/* Empty State */}
            {escrows.length === 0 && (
              <div className="text-center py-12">
                <Shield className="w-16 h-16 text-[#F0B90B] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No Escrows Yet</h3>
                <p className="text-[#B7BDC6] mb-6">Create your first secure token exchange</p>
                <Link
                  href="/create-escrow"
                  className="inline-flex items-center gap-2 bg-[#F0B90B] hover:bg-[#FCD535] text-[#0c0219] px-6 py-3 rounded-full font-bold transition-colors duration-200"
                >
                  <Plus className="w-5 h-5" />
                  Create Escrow
                </Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard