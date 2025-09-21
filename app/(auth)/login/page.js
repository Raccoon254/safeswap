'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Mail, Shield, ArrowRight, Loader2, User } from 'lucide-react'
import Link from 'next/link'

const Login = () => {
  const [step, setStep] = useState('email') // 'email', 'nickname', or 'code'
  const [formData, setFormData] = useState({
    email: '',
    nickname: '',
    code: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [isNewUser, setIsNewUser] = useState(false)
  const router = useRouter()

  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/send-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send code')
      }

      setIsNewUser(data.isNewUser)

      if (data.isNewUser) {
        setStep('nickname')
      } else {
        setStep('code')
      }
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleNicknameSubmit = async (e) => {
    e.preventDefault()
    if (!formData.nickname.trim()) {
      setError('Please enter a nickname')
      return
    }
    setStep('code')
  }

  const handleCodeSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: formData.email,
          code: formData.code,
          nickname: isNewUser ? formData.nickname : undefined
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Invalid code')
      }

      // Redirect to dashboard
      router.push('/dashboard')
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  const handleResendCode = async () => {
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/send-code', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: formData.email })
      })

      if (!response.ok) {
        throw new Error('Failed to resend code')
      }

      setError('')
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0c0219] flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#F0B90B] rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-[#0c0219]" />
            </div>
            <span className="text-2xl font-bold text-[#F0B90B]">SafeSwap</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            {step === 'email' ? 'Welcome to SafeSwap' :
             step === 'nickname' ? 'Choose Your Nickname' :
             'Enter Verification Code'}
          </h1>
          <p className="text-gray-400">
            {step === 'email'
              ? 'Sign in or create your secure escrow account'
              : step === 'nickname'
              ? 'This will be your display name on SafeSwap'
              : `We sent a 6-digit code to ${formData.email}`
            }
          </p>
        </div>

        {/* Form */}
        <div className="bg-gray-900/20 border border-[#2B3139]/10 rounded-xl p-6">
          {step === 'email' ? (
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-[#0c0219] border border-[#2B3139]/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F0B90B] focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-500 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#F0B90B] hover:bg-[#FCD535] disabled:opacity-50 disabled:cursor-not-allowed text-[#0c0219] py-3 rounded-lg font-bold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending Code...
                  </>
                ) : (
                  <>
                    Send Login Code
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          ) : step === 'nickname' ? (
            <form onSubmit={handleNicknameSubmit} className="space-y-4">
              <div>
                <label htmlFor="nickname" className="block text-white font-medium mb-2">
                  Nickname
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="nickname"
                    value={formData.nickname}
                    onChange={(e) => setFormData(prev => ({ ...prev, nickname: e.target.value }))}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-[#0c0219] border border-[#2B3139]/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F0B90B] focus:border-transparent"
                    placeholder="Enter your nickname"
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-500 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={!formData.nickname.trim()}
                className="w-full bg-[#F0B90B] hover:bg-[#FCD535] disabled:opacity-50 disabled:cursor-not-allowed text-[#0c0219] py-3 rounded-lg font-bold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Continue
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setStep('email')}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  ← Change email address
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleCodeSubmit} className="space-y-4">
              <div>
                <label htmlFor="code" className="block text-white font-medium mb-2">
                  Verification Code
                </label>
                <input
                  type="text"
                  id="code"
                  value={formData.code}
                  onChange={(e) => setFormData(prev => ({ ...prev, code: e.target.value.replace(/\D/g, '').slice(0, 6) }))}
                  required
                  maxLength={6}
                  className="w-full px-4 py-3 bg-[#0c0219] border border-[#2B3139]/10 rounded-lg text-white text-center text-2xl font-mono tracking-wider placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#F0B90B] focus:border-transparent"
                  placeholder="000000"
                />
              </div>

              {error && (
                <div className="text-red-500 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading || formData.code.length !== 6}
                className="w-full bg-[#F0B90B] hover:bg-[#FCD535] disabled:opacity-50 disabled:cursor-not-allowed text-[#0c0219] py-3 rounded-lg font-bold transition-colors duration-200 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Verifying...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              <div className="text-center">
                <button
                  type="button"
                  onClick={handleResendCode}
                  disabled={isLoading}
                  className="text-gray-400 hover:text-[#F0B90B] text-sm transition-colors duration-200"
                >
                  Didn't receive the code? Resend
                </button>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setStep('email')}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  ← Change email address
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="text-center mt-6">
          <p className="text-gray-400 text-sm">
            New to SafeSwap?{' '}
            <Link href="/" className="text-[#F0B90B] hover:text-[#FCD535] transition-colors duration-200">
              Learn more about secure trading
            </Link>
          </p>
        </div>

        {/* Security Notice */}
        <div className="mt-6 bg-[#F0B90B]/10 border border-[#F0B90B]/20 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#F0B90B] mt-0.5 flex-shrink-0" />
            <div className="text-sm">
              <p className="text-[#F0B90B] font-medium mb-1">Secure Login</p>
              <p className="text-gray-300">
                We use email-based authentication for maximum security. No passwords to remember or lose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login