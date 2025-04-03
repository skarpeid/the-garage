'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { FileText, Clock, CheckCircle, Plus, Bell, Settings } from 'lucide-react';
import Link from 'next/link';
import { NotificationsPopup } from '@/components/NotificationsPopup';
import { useState } from 'react';
import { PageWrapper } from '@/components/PageWrapper';

const actionTasks = [
  {
    id: 1,
    name: 'Translaton test project - Italian Translation',
    createdBy: {
      name: 'Nicolaj Leonhard Christensen',
      avatar: '/avatars/nicolaj.jpg'
    },
    deadline: 'Sat 29 March, 2025',
    status: 'NEEDS REVIEW'
  },
  {
    id: 2,
    name: 'Translaton test project - German Translation',
    createdBy: {
      name: 'Nicolaj Leonhard Christensen',
      avatar: '/avatars/nicolaj.jpg'
    },
    deadline: 'Sat 29 March, 2025',
    status: 'NEEDS REVIEW'
  }
];

const projects = [
  {
    id: 1,
    name: 'Marketing Website Translation',
    status: 'In Progress',
    progress: 65,
    dueDate: '2024-04-15',
    tasks: 12,
    completedTasks: 8,
  },
  {
    id: 2,
    name: 'Product Documentation',
    status: 'Review',
    progress: 90,
    dueDate: '2024-04-20',
    tasks: 24,
    completedTasks: 22,
  },
  {
    id: 3,
    name: 'Mobile App Localization',
    status: 'Planning',
    progress: 15,
    dueDate: '2024-05-01',
    tasks: 18,
    completedTasks: 3,
  },
];

export default function WorkspacePage() {
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <PageWrapper>
      <div className="flex justify-between items-center mb-12">
        <div className="space-y-2">
          <p className="text-sm font-medium tracking-wider text-[#6C8EEF] uppercase">
            My workspace
          </p>
          <div className="space-y-1">
            <h1 className="text-4xl font-normal text-gray-400">Welcome back,</h1>
            <h1 className="text-5xl font-semibold text-gray-100">Marius Skarpeid</h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link 
            href="/new-project" 
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#6C8EEF] hover:bg-[#5B7AD9] text-sm font-medium text-white transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>New project</span>
          </Link>
          <button className="relative p-2.5 rounded-lg bg-[#1a1f2d] border border-[#2a2f3d] hover:bg-[#1d2235] transition-colors">
            <Bell className="h-4 w-4 text-gray-400" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#6C8EEF] text-[10px] font-medium text-white rounded-full flex items-center justify-center">
              9
            </span>
          </button>
          <button className="p-2.5 rounded-lg bg-[#1a1f2d] border border-[#2a2f3d] hover:bg-[#1d2235] transition-colors">
            <Settings className="h-4 w-4 text-gray-400" />
          </button>
        </div>
      </div>

      <NotificationsPopup 
        isOpen={isNotificationsOpen} 
        onClose={() => setIsNotificationsOpen(false)} 
      />

      {/* Tasks Requiring Actions */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-100">Tasks requiring actions</h2>
        <div className="bg-[#151922] rounded-xl overflow-hidden border border-[#2a2f3d]">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-[#2a2f3d] bg-[#1a1f2d]">
                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Task Name</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Created By</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Deadline</th>
                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2a2f3d]">
              {actionTasks.map((task) => (
                <tr key={task.id} className="hover:bg-[#1a1f2d] transition-colors">
                  <td className="px-6 py-5 text-sm text-gray-100">{task.name}</td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500/20 to-violet-500/20 border border-[#2a2f3d]"></div>
                      <span className="text-sm text-gray-100">{task.createdBy.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-5 text-sm text-gray-400">{task.deadline}</td>
                  <td className="px-6 py-5">
                    <span className="flex items-center gap-2">
                      <span className="h-2 w-2 bg-red-400 rounded-full"></span>
                      <span className="text-sm font-medium text-gray-100">{task.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <Button className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all">
                      Review
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Projects Section */}
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold text-gray-100 mb-2">Your Projects</h2>
          <p className="text-gray-400">Manage your projects and tasks</p>
        </div>

        <div className="grid gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden border border-[#2a2f3d] bg-[#151922] hover:bg-[#1a1f2d] transition-all">
              <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6">
                <div>
                  <CardTitle className="text-xl font-semibold text-gray-100">{project.name}</CardTitle>
                  <p className="text-sm text-gray-400 mt-1">Due {project.dueDate}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium whitespace-nowrap
                  ${project.status === 'In Progress' ? 'bg-gradient-to-r from-blue-500/10 to-violet-500/10 text-blue-400 border border-blue-500/20' : 
                    project.status === 'Review' ? 'bg-gradient-to-r from-yellow-500/10 to-orange-500/10 text-yellow-400 border border-yellow-500/20' :
                    'bg-[#2a2f3d] text-gray-300'}`}>
                  {project.status}
                </span>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                {/* Progress Bar */}
                <div className="mt-6">
                  <div className="flex flex-col sm:flex-row justify-between text-sm mb-2 gap-2">
                    <span className="text-gray-100 font-medium">{project.progress}% Complete</span>
                    <span className="text-gray-400">{project.completedTasks}/{project.tasks} Tasks</span>
                  </div>
                  <div className="w-full bg-[#2a2f3d] rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-violet-500 h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <div className="flex items-center text-sm text-gray-400 group-hover:text-white transition-colors">
                    <Clock className="h-4 w-4 mr-2 flex-shrink-0 text-gray-400 group-hover:text-white transition-colors" />
                    <span>Due in 5 days</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-400 group-hover:text-white transition-colors">
                    <CheckCircle className="h-4 w-4 mr-2 flex-shrink-0 text-gray-400 group-hover:text-white transition-colors" />
                    <span>{project.completedTasks} completed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
} 