'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Mail, Lock, Github } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[#0A0A0A]">
          <div className="absolute inset-0 opacity-30">
            {/* Gradient Blobs */}
            <div className="absolute top-0 -left-4 w-[30rem] h-[30rem] bg-[#4F7FFF] rounded-full mix-blend-multiply filter blur-[128px] animate-blob" />
            <div className="absolute top-0 -right-4 w-[30rem] h-[30rem] bg-[#7F3FFF] rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-[30rem] h-[30rem] bg-[#3F8FFF] rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative w-[480px] p-[1px] rounded-2xl bg-gradient-to-r from-[#4F7FFF] via-[#7F3FFF] to-[#4F7FFF] animate-gradient-xy">
        <div className="w-full rounded-2xl bg-[#0A0A0A]/95 backdrop-blur-xl p-8">
          <div className="w-full space-y-6">
            {/* Logo and Title */}
            <div className="text-center space-y-6">
              <h1 className="text-2xl font-semibold text-[#4F7FFF]">
                GARAGE
              </h1>
              <h2 className="text-2xl font-semibold text-white">
                Sign in to Garage
              </h2>
            </div>

            {/* Login Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="w-full pl-10 h-12 bg-[#1a1f2d] border-transparent rounded-lg text-gray-100 placeholder-gray-500 focus:border-[#4F7FFF] focus:ring-1 focus:ring-[#4F7FFF]"
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="w-full pl-10 h-12 bg-[#1a1f2d] border-transparent rounded-lg text-gray-100 placeholder-gray-500 focus:border-[#4F7FFF] focus:ring-1 focus:ring-[#4F7FFF]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end">
                <Link
                  href="/forgot-password"
                  className="text-sm text-[#4F7FFF] hover:text-blue-400 transition-colors"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-[#4F7FFF] to-[#7F3FFF] hover:from-[#4066CC] hover:to-[#6633CC] text-white font-medium rounded-lg"
              >
                Log in
              </Button>
            </form>

            {/* Divider */}
            <div className="text-center">
              <span className="text-sm text-gray-500">Or</span>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button
                type="button"
                className="w-full h-12 flex items-center justify-center gap-3 border border-[#2a2f3d] rounded-lg text-gray-100 hover:bg-[#1a1f2d]/50 transition-colors"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Sign in with Google
              </button>

              <button
                type="button"
                className="w-full h-12 flex items-center justify-center gap-3 border border-[#2a2f3d] rounded-lg text-gray-100 hover:bg-[#1a1f2d]/50 transition-colors"
              >
                <Github className="h-5 w-5" />
                Sign in with GitHub
              </button>
            </div>

            <p className="text-center text-sm text-gray-400">
              Don't have an account?{' '}
              <Link href="/signup" className="text-[#4F7FFF] hover:text-blue-400 transition-colors">
                Sign up
              </Link>
            </p>

            {/* Terms and Privacy */}
            <div className="text-center space-x-2 text-xs text-gray-600">
              <Link href="/terms" className="hover:text-gray-400 transition-colors">
                Terms of Use
              </Link>
              <span>·</span>
              <Link href="/privacy" className="hover:text-gray-400 transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 