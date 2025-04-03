'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/Button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="text-gray-600 mb-4">We apologize for the inconvenience.</p>
      <Button
        onClick={reset}
        variant="primary"
        className="mb-4"
      >
        Try again
      </Button>
      <Button
        onClick={() => window.location.href = '/'}
        variant="outline"
      >
        Go to home page
      </Button>
    </div>
  );
} 