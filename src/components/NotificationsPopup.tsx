'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Bell, CheckCircle, Clock, AlertCircle, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface NotificationsPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

// Extended mock data with task IDs
const notifications = [
  {
    id: 1,
    title: 'New Translation Review',
    message: 'Marketing Website Homepage needs your review',
    type: 'review',
    time: '2 minutes ago',
    read: false,
    taskId: 'task-123',
  },
  {
    id: 2,
    title: 'Task Completed',
    message: 'Product Documentation translation is complete',
    type: 'success',
    time: '1 hour ago',
    read: false,
    taskId: 'task-456',
  },
  {
    id: 3,
    title: 'Deadline Approaching',
    message: 'Mobile App Localization due in 2 days',
    type: 'warning',
    time: '3 hours ago',
    read: true,
    taskId: 'task-789',
  },
  {
    id: 4,
    title: 'New Comment',
    message: 'John left a comment on Website Translation',
    type: 'review',
    time: '4 hours ago',
    read: true,
    taskId: 'task-101',
  },
  {
    id: 5,
    title: 'Project Update',
    message: 'E-commerce Translation project status changed',
    type: 'success',
    time: '5 hours ago',
    read: false,
    taskId: 'task-102',
  },
  {
    id: 6,
    title: 'Review Required',
    message: 'Blog Post Translation needs final review',
    type: 'review',
    time: '6 hours ago',
    read: false,
    taskId: 'task-103',
  }
];

export function NotificationsPopup({ isOpen, onClose }: NotificationsPopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 min-h-screen w-full z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Popup */}
      <div className="relative w-[600px]">
        <div className="p-[1px] rounded-xl bg-gradient-to-r from-blue-500 to-violet-500">
          <Card className="bg-[#151922] rounded-xl shadow-xl overflow-hidden">
            <div className="flex justify-between items-center p-6 border-b border-[#2a2f3d]">
              <div>
                <h2 className="text-xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">Notifications</h2>
                <p className="text-sm text-gray-400 mt-1">Stay updated with your projects</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-gray-400 hover:text-white"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <CardContent className="p-0">
              <div className="divide-y divide-[#2a2f3d] max-h-[400px] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-[#151922] [&::-webkit-scrollbar-thumb]:bg-gradient-to-b [&::-webkit-scrollbar-thumb]:from-blue-500 [&::-webkit-scrollbar-thumb]:to-violet-500 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-[#151922] hover:[&::-webkit-scrollbar-thumb]:from-blue-600 hover:[&::-webkit-scrollbar-thumb]:to-violet-600">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`flex items-start p-6 ${
                      notification.read ? 'bg-[#151922]' : 'bg-[#1a1f2d]'
                    }`}
                  >
                    <div className="flex-shrink-0 mt-1">
                      {notification.type === 'review' && (
                        <Bell className="h-5 w-5 text-blue-400" />
                      )}
                      {notification.type === 'success' && (
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      )}
                      {notification.type === 'warning' && (
                        <AlertCircle className="h-5 w-5 text-yellow-400" />
                      )}
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className={`text-sm font-medium ${
                            notification.read ? 'text-gray-300' : 'text-gray-100'
                          }`}>
                            {notification.title}
                          </p>
                          <p className="mt-1 text-sm text-gray-400">{notification.message}</p>
                          <p className="mt-2 text-xs text-gray-500">{notification.time}</p>
                        </div>
                        <Link
                          href={`/workspace/${notification.taskId}`}
                          className="ml-4 inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-[#2a2f3d] to-[#1a1f2d] hover:from-[#3a3f4d] hover:to-[#2a2f3d] text-gray-300 hover:text-white text-xs font-medium rounded-lg transition-all border border-[#3a3f4d] whitespace-nowrap"
                          onClick={(e) => {
                            e.stopPropagation();
                            onClose();
                          }}
                        >
                          View task
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="p-6 border-t border-[#2a2f3d]">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full text-gray-300 hover:text-white border-gray-700 hover:border-gray-600"
                >
                  Mark all as read
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
} 