'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Briefcase,
  FileText,
  Wrench,
  GraduationCap,
  Lightbulb,
  Settings,
  LogOut,
  Icon
} from 'lucide-react';

interface UserProfile {
  name: string;
  email: string;
  avatar: string;
}

interface NavigationItem {
  name: string;
  href: string;
  icon: Icon;
  isNewProject?: boolean;
}

interface SidebarProps {
  user: UserProfile;
  onLogout: () => void;
}

const mainNavigation: NavigationItem[] = [
  {
    name: 'New Project',
    href: '/new-project',
    icon: Plus,
    isNewProject: true,
  },
  {
    name: 'Workspace',
    href: '/workspace',
    icon: Briefcase,
  },
  {
    name: 'Project Overview',
    href: '/project-overview',
    icon: FileText,
  },
  {
    name: 'Tools',
    href: '/tools',
    icon: Wrench,
  },
  {
    name: 'Learning Hub',
    href: '/learning-hub',
    icon: GraduationCap,
  },
  {
    name: 'Insights',
    href: '/insights',
    icon: Lightbulb,
  },
];

const bottomNav: NavigationItem[] = [
  {
    name: 'Settings',
    href: '/settings',
    icon: Settings,
  },
];

export function Sidebar({ user, onLogout }: SidebarProps): JSX.Element {
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const pathname = usePathname();

  const IconComponent = React.useMemo(() => isCollapsed ? ChevronRight : ChevronLeft, [isCollapsed]);

  return (
    <aside className={cn(
      'flex flex-col h-screen bg-[#151922] border-r border-[#2a2f3d] transition-all duration-300',
      isCollapsed ? 'w-[80px]' : 'w-[280px]'
    )}>
      {/* Logo Section */}
      <div className="flex-none flex items-center justify-between p-4 border-b border-[#2a2f3d]">
        <div className={cn('flex items-center gap-2', isCollapsed && 'justify-center')}>
          <div className="w-8 h-8 rounded-lg bg-[#1a1f2d] flex items-center justify-center">
            <span className="text-lg font-semibold text-gray-100">G</span>
          </div>
          {!isCollapsed && (
            <span className="text-xl font-semibold text-[#6C8EEF]">
              The Garage
            </span>
          )}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="rounded-full hover:bg-[#1a1f2d] text-gray-400 hover:text-white"
        >
          <IconComponent className="h-5 w-5" />
        </Button>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-6">
        {mainNavigation.map((item, index) => (
          <React.Fragment key={item.name}>
            <Link
              href={item.href}
              className={cn(
                'flex items-center gap-4 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-[#1a1f2d] hover:text-white transition-colors',
                pathname === item.href && 'bg-[#1a1f2d] text-white',
                item.isNewProject && 'bg-[#1a1f2d] border border-[#2a2f3d] hover:border-[#6C8EEF]'
              )}
            >
              {React.createElement(item.icon, { size: 20 })}
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
            {item.isNewProject && !isCollapsed && (
              <div className="h-px bg-[#2a2f3d] my-12" />
            )}
          </React.Fragment>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="flex-none border-t border-[#2a2f3d]">
        <div className="p-4 space-y-2">
          {bottomNav.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                'flex items-center gap-4 px-3 py-2.5 rounded-lg text-gray-400 hover:bg-[#1a1f2d] hover:text-white transition-colors',
                pathname === item.href && 'bg-[#1a1f2d] text-white'
              )}
            >
              {React.createElement(item.icon, { size: 20 })}
              {!isCollapsed && <span>{item.name}</span>}
            </Link>
          ))}
        </div>

        <div className={cn(
          'flex items-center gap-4 mt-4 mx-4 pt-4 border-t border-[#2a2f3d] pb-4',
          isCollapsed && 'justify-center'
        )}>
          <Link 
            href="/profile" 
            className={cn(
              'flex items-center gap-4 p-2 rounded-lg hover:bg-[#1a1f2d] transition-colors w-full',
              isCollapsed && 'justify-center'
            )}
          >
            <div className="relative flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-[#6C8EEF] flex items-center justify-center">
                <span className="text-sm font-medium text-white">
                  {user.name.charAt(0).toUpperCase()}
                </span>
              </div>
            </div>
            {!isCollapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-100 truncate">
                  {user.name}
                </p>
                <p className="text-xs text-gray-400 truncate">
                  {user.email}
                </p>
              </div>
            )}
          </Link>
          {!isCollapsed && (
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full hover:bg-[#1a1f2d] text-gray-400 hover:text-white" 
              onClick={onLogout}
            >
              {React.createElement(LogOut, { size: 20 })}
            </Button>
          )}
        </div>
      </div>
    </aside>
  );
} 