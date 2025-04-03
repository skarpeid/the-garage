'use client';

import React from 'react';
import { Sidebar } from './Sidebar';

interface SidebarWrapperProps {
  user: {
    name: string;
    email: string;
    role?: string;
    avatar?: string;
  };
}

export const SidebarWrapper: React.FC<SidebarWrapperProps> = ({ user }) => {
  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logging out...');
  };

  return <Sidebar user={user} onLogout={handleLogout} />;
}; 