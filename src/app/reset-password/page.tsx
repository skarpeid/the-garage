'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Lock, ArrowLeft, Check } from 'lucide-react';

export default function ResetPasswordPage() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // TODO: Implement password reset logic
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] bg-gradient-to-br from-[#0A0A0A] via-[#151922] to-[#0A0A0A]">
      <div className="w-full max-w-md space-y-8 px-4">
        <Link 
          href="/login"
          className="inline-flex items-center text-sm text-gray-400 hover:text-gray-100 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to login
        </Link>

        {/* Logo and Title */}
        <div className="text-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            GARAGE
          </h1>
          <h2 className="mt-6 text-3xl font-semibold text-gray-100">
            Create new password
          </h2>
          <p className="mt-2 text-gray-400">
            Your new password must be different from previously used passwords
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-400 mb-2">
                  NEW PASSWORD
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter new password"
                    required
                    className="pl-10 bg-[#1a1f2d] border-[#2a2f3d] text-gray-100 placeholder-gray-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-400 mb-2">
                  CONFIRM NEW PASSWORD
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm new password"
                    required
                    className="pl-10 bg-[#1a1f2d] border-[#2a2f3d] text-gray-100 placeholder-gray-500"
                  />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              disabled={!password || !confirmPassword || password !== confirmPassword}
              className="w-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Reset password
            </Button>
          </form>
        ) : (
          <div className="mt-8 p-6 bg-[#1a1f2d] rounded-lg border border-[#2a2f3d]">
            <div className="text-center space-y-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                <Check className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100">Password reset successful</h3>
              <p className="text-gray-400">
                Your password has been successfully reset. You can now use your new password to log in.
              </p>
              <Link
                href="/login"
                className="inline-block mt-4 px-6 py-2 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white text-sm font-medium rounded-md transition-colors"
              >
                Return to login
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 