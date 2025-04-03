import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { useTenantContent } from '@/hooks/useTenantConfig';
import { useComponentOverrides } from '@/hooks/useTenantConfig';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const content = useTenantContent('login');
  const overrides = useComponentOverrides('LoginForm');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Add your authentication logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      // Handle successful login
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto" {...overrides.card}>
      <Card.Header>
        <Card.Title>{content.title || 'Welcome back'}</Card.Title>
        <Card.Description>
          {content.description || 'Please sign in to continue'}
        </Card.Description>
      </Card.Header>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          {...overrides.emailInput}
        />

        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          {...overrides.passwordInput}
        />

        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="text-red-500 text-sm"
            >
              {error}
            </motion.div>
          )}
        </AnimatePresence>

        <Button
          type="submit"
          className="w-full"
          loading={isLoading}
          {...overrides.submitButton}
        >
          Sign In
        </Button>
      </form>

      <Card.Footer className="text-center mt-4">
        <p className="text-sm text-gray-600">
          {content.signupText || "Don't have an account?"}{' '}
          <a
            href="/signup"
            className="text-primary-600 hover:text-primary-500"
            {...overrides.signupLink}
          >
            {content.signupLink || 'Sign up'}
          </a>
        </p>
      </Card.Footer>
    </Card>
  );
} 