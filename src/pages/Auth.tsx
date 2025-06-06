import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { Eye, EyeOff, User } from 'lucide-react'

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signupEmail, setSignupEmail] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [signupName, setSignupName] = useState('')
  const [signupShowPassword, setSignupShowPassword] = useState(false)

  // Simple local login handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    localStorage.setItem('isLoggedIn', 'true')
    window.location.href = '/'
  }

  // Simple local signup handler
  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault()
    // You can add logic to store user info
    setIsLogin(true)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E7ECFC] via-white to-[#E7ECFC]">
      <div className="w-full max-w-md p-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="w-full p-8 shadow-xl border-0">
            <div className="relative h-[420px] overflow-hidden">
              <AnimatePresence mode="wait">
                {isLogin ? (
                  <motion.div
                    key="login"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute w-full"
                  >
                    <div className="text-center mb-8">
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-16 h-16 bg-[#E7ECFC] rounded-full mx-auto mb-4 flex items-center justify-center"
                      >
                        <User className="h-8 w-8 text-primary" />
                      </motion.div>
                      <h2 className="text-2xl font-semibold text-primary">Welcome Back</h2>
                      <p className="text-muted-foreground mt-2">Sign in to your account</p>
                    </div>
                    <form onSubmit={handleLogin} className="space-y-6">
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={e => setEmail(e.target.value)}
                          required
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="password">Password</Label>
                        <div className="relative">
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            required
                            placeholder="••••••••"
                          />
                          <button
                            type="button"
                            className="absolute right-2 top-2 text-gray-400"
                            onClick={() => setShowPassword(v => !v)}
                          >
                            {showPassword ? <EyeOff /> : <Eye />}
                          </button>
                        </div>
                      </div>
                      <Button type="submit" className="w-full bg-[#E7ECFC] text-primary hover:bg-[#E7ECFC]/80 h-11 font-medium transition-all duration-200 hover:shadow-md">
                        Sign In
                      </Button>
                    </form>
                    <p className="mt-6 text-center text-sm text-muted-foreground">
                      Don't have an account?{' '}
                      <button
                        type="button"
                        onClick={() => setIsLogin(false)}
                        className="text-primary hover:underline font-medium transition-colors"
                      >
                        Sign up
                      </button>
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="signup"
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -300, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute w-full"
                  >
                    <div className="text-center mb-8">
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="w-16 h-16 bg-[#E7ECFC] rounded-full mx-auto mb-4 flex items-center justify-center"
                      >
                        <User className="h-8 w-8 text-primary" />
                      </motion.div>
                      <h2 className="text-2xl font-semibold text-primary">Create Account</h2>
                      <p className="text-muted-foreground mt-2">Sign up for a new account</p>
                    </div>
                    <form onSubmit={handleSignup} className="space-y-6">
                      <div>
                        <Label htmlFor="signup-name">Full Name</Label>
                        <Input
                          id="signup-name"
                          type="text"
                          value={signupName}
                          onChange={e => setSignupName(e.target.value)}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="signup-email">Email</Label>
                        <Input
                          id="signup-email"
                          type="email"
                          value={signupEmail}
                          onChange={e => setSignupEmail(e.target.value)}
                          required
                          placeholder="you@example.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="signup-password">Password</Label>
                        <div className="relative">
                          <Input
                            id="signup-password"
                            type={signupShowPassword ? "text" : "password"}
                            value={signupPassword}
                            onChange={e => setSignupPassword(e.target.value)}
                            required
                            placeholder="••••••••"
                          />
                          <button
                            type="button"
                            className="absolute right-2 top-2 text-gray-400"
                            onClick={() => setSignupShowPassword(v => !v)}
                          >
                            {signupShowPassword ? <EyeOff /> : <Eye />}
                          </button>
                        </div>
                      </div>
                      <Button type="submit" className="w-full bg-[#E7ECFC] text-primary hover:bg-[#E7ECFC]/80 h-11 font-medium transition-all duration-200 hover:shadow-md">
                        Sign Up
                      </Button>
                    </form>
                    <p className="mt-6 text-center text-sm text-muted-foreground">
                      Already have an account?{' '}
                      <button
                        type="button"
                        onClick={() => setIsLogin(true)}
                        className="text-primary hover:underline font-medium transition-colors"
                      >
                        Sign in
                      </button>
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default Auth
