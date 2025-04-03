'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Plus,
  Languages,
  FileText,
  Users
} from 'lucide-react';

const stats = [
  {
    title: 'Tasks in Progress',
    value: '12',
    icon: Clock,
    trend: '+2 from last week',
    trendUp: true,
  },
  {
    title: 'Completed Tasks',
    value: '48',
    icon: CheckCircle2,
    trend: '+5 from last week',
    trendUp: true,
  },
  {
    title: 'Pending Reviews',
    value: '6',
    icon: AlertCircle,
    trend: '-2 from last week',
    trendUp: false,
  },
];

const quickActions = [
  {
    title: 'New Translation',
    description: 'Start a new translation project',
    icon: Languages,
    href: '/translation',
  },
  {
    title: 'Create Document',
    description: 'Create a new document',
    icon: FileText,
    href: '/documents',
  },
  {
    title: 'Invite Team',
    description: 'Add members to your workspace',
    icon: Users,
    href: '/team',
  },
];

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Welcome back, UserName</h1>
          <p className="text-gray-500">Here's what's happening in your workspace</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${stat.trendUp ? 'text-green-500' : 'text-red-500'}`}>
                {stat.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {quickActions.map((action) => (
            <Card key={action.title} className="hover:bg-gray-50 transition-colors cursor-pointer">
              <CardContent className="flex items-center p-6">
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center">
                  <action.icon className="h-6 w-6 text-blue-500" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold">{action.title}</h3>
                  <p className="text-sm text-gray-500">{action.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Action Required Tasks */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Action Required</h2>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y divide-gray-200">
              {[1, 2, 3].map((task) => (
                <div key={task} className="flex items-center justify-between p-4">
                  <div>
                    <h3 className="font-medium">Translation Review #{task}</h3>
                    <p className="text-sm text-gray-500">Needs your review</p>
                  </div>
                  <Button variant="outline" size="sm">
                    Review
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
