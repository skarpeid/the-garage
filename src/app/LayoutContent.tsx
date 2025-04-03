'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Sidebar } from '@/components/Sidebar/Sidebar';

// Mock user data - replace with actual user data from your auth system
const mockUser = {
  name: 'Marius Skarpeid',
  email: 'marius@example.com',
  avatar: '/avatars/default.png'
};

interface LayoutContentProps {
  children: React.ReactNode;
}

export default function LayoutContent({ children }: LayoutContentProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar 
        user={mockUser} 
        onLogout={() => console.log('Logging out...')} 
        // Pass state and setter if Sidebar needs to control collapse
        // isCollapsed={isSidebarCollapsed}
        // setIsCollapsed={setIsSidebarCollapsed}
      />
      <main className="flex-1 transition-all duration-300 overflow-y-auto">
        {children}
      </main>
    </div>
  );
} 