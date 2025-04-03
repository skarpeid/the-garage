'use client';

import { useParams } from 'next/navigation';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { ArrowLeft, Clock, CheckCircle, AlertCircle, Users, Calendar, BarChart, Eye, Download } from 'lucide-react';
import Link from 'next/link';
import { formatDate } from '@/utils/dateFormat';

// Mock project data - replace with actual data fetching
const mockProject = {
  id: 'case-story-trster',
  name: 'Case story trster tasks',
  status: 'IN_PROGRESS',
  progress: 65,
  dueDate: '2024-04-15',
  createdBy: 'Nicolaj Leonhard Christensen',
  team: ['John Doe', 'Jane Smith', 'Alex Johnson'],
  tasks: [
    {
      id: 1,
      title: 'Initial Content Review',
      status: 'COMPLETED',
      assignee: 'John Doe',
      dueDate: '2024-03-20',
    },
    {
      id: 2,
      title: 'Translation Draft',
      status: 'IN_PROGRESS',
      assignee: 'Jane Smith',
      dueDate: '2024-03-25',
    },
    {
      id: 3,
      title: 'Quality Check',
      status: 'NOT_STARTED',
      assignee: 'Alex Johnson',
      dueDate: '2024-04-01',
    },
  ],
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'COMPLETED':
      return <CheckCircle className="h-5 w-5 text-green-400" />;
    case 'IN_PROGRESS':
      return <Clock className="h-5 w-5 text-blue-400" />;
    default:
      return <AlertCircle className="h-5 w-5 text-yellow-400" />;
  }
};

const getStatusText = (status: string) => {
  return status.replace('_', ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
};

export default function ProjectPage() {
  const params = useParams();
  
  if (!params?.projectId) {
    notFound();
  }

  const projectId = params.projectId as string;

  const handleDownload = (taskId: number) => {
    // TODO: Implement actual download logic
    console.log(`Downloading task ${taskId}`);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-6">
        <Link 
          href="/project-overview"
          className="inline-flex items-center text-sm text-gray-400 hover:text-gray-100 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to projects
        </Link>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-semibold text-gray-100">{mockProject.name}</h1>
            <p className="text-gray-400 mt-1">Project ID: {projectId}</p>
          </div>
          <Button className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white">
            Add new task
          </Button>
        </div>
      </div>

      {/* Project Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-[#151922] border-[#2a2f3d]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-gray-400">Progress</p>
                <p className="text-2xl font-semibold text-gray-100">{mockProject.progress}%</p>
              </div>
              <BarChart className="h-5 w-5 text-gray-400" />
            </div>
            <div className="mt-4 h-2 bg-[#1a1f2d] rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"
                style={{ width: `${mockProject.progress}%` }}
              />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#151922] border-[#2a2f3d]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-gray-400">Due Date</p>
                <p className="text-2xl font-semibold text-gray-100">{formatDate(mockProject.dueDate)}</p>
              </div>
              <Calendar className="h-5 w-5 text-gray-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#151922] border-[#2a2f3d]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm text-gray-400">Team Members</p>
                <p className="text-2xl font-semibold text-gray-100">{mockProject.team.length}</p>
              </div>
              <Users className="h-5 w-5 text-gray-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tasks List */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-100">Tasks</h2>
        <Card className="bg-[#151922] border-[#2a2f3d] overflow-hidden">
          <div className="divide-y divide-[#2a2f3d]">
            {mockProject.tasks.map((task) => (
              <div key={task.id} className="flex items-center justify-between p-4 hover:bg-[#1a1f2d] transition-colors">
                <div className="flex items-center space-x-4">
                  {getStatusIcon(task.status)}
                  <div>
                    <p className="text-sm font-medium text-gray-100">{task.title}</p>
                    <p className="text-sm text-gray-400">Assigned to {task.assignee}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-400">Due {new Date(task.dueDate).toLocaleDateString()}</span>
                  <span className={`
                    px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${task.status === 'COMPLETED' ? 'bg-green-400/10 text-green-400' : 
                      task.status === 'IN_PROGRESS' ? 'bg-blue-400/10 text-blue-400' : 
                      'bg-yellow-400/10 text-yellow-400'}
                  `}>
                    {getStatusText(task.status)}
                  </span>
                  <div className="flex items-center gap-2">
                    <Link 
                      href={`/project-overview/${projectId}/tasks/${task.id}`}
                      className="inline-flex items-center px-3 py-1.5 text-sm font-medium bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white rounded-md transition-colors"
                    >
                      <Eye className="h-4 w-4 mr-1.5" />
                      View
                    </Link>
                    <button
                      onClick={() => handleDownload(task.id)}
                      className="p-2 text-gray-400 hover:text-gray-100 transition-colors rounded-full hover:bg-[#2a2f3d]"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
} 