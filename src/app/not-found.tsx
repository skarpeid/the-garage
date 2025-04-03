'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="text-gray-600 mb-4">The page you're looking for doesn't exist.</p>
      <Link href="/">
        <Button variant="outline">
          Return Home
        </Button>
      </Link>
    </div>
  );
} 