import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Settings, PlusCircle, Bell } from 'lucide-react';

interface Task {
  id: string;
  projectName: string;
  createdBy: {
    name: string;
    avatar?: string;
  };
  dueDate: string;
  status: 'need-review' | 'in-progress' | 'draft' | 'done';
  lastUpdated?: string;
  updatedBy?: {
    name: string;
    avatar?: string;
  };
}

interface DashboardProps {
  userName: string;
  actionRequiredTasks: Task[];
  recentTasks: Task[];
  notificationCount?: number;
  onNewProject?: () => void;
}

const StatusBadge: React.FC<{ status: Task['status'] }> = ({ status }) => {
  const styles = {
    'need-review': 'bg-red-100 text-red-600',
    'in-progress': 'bg-yellow-100 text-yellow-600',
    'draft': 'bg-gray-100 text-gray-600',
    'done': 'bg-green-100 text-green-600',
  };

  const labels = {
    'need-review': 'Need review',
    'in-progress': 'In progress',
    'draft': 'Draft',
    'done': 'Done',
  };

  return (
    <span className={`px-2 py-1 rounded-full text-sm ${styles[status]}`}>
      {labels[status]}
    </span>
  );
};

export const Dashboard: React.FC<DashboardProps> = ({
  userName,
  actionRequiredTasks,
  recentTasks,
  notificationCount = 0,
  onNewProject,
}) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-2">Welcome back,</h1>
            <h2 className="text-4xl">{userName}</h2>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={onNewProject}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50"
            >
              <PlusCircle size={20} />
              <span>New project</span>
            </button>
            <div className="relative">
              <button className="p-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50">
                <Bell size={20} />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
              </button>
            </div>
            <button className="p-2 bg-white rounded-lg border border-gray-200 hover:bg-gray-50">
              <Settings size={20} />
            </button>
          </div>
        </div>

        <section className="mb-12">
          <h3 className="text-xl font-bold mb-4">Action required task</h3>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">PROJECT</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">CREATED BY</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">DUE DATE</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">STATUS</th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-500"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {actionRequiredTasks.map((task) => (
                  <tr key={task.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">{task.projectName}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {task.createdBy.avatar && (
                          <Image
                            src={task.createdBy.avatar}
                            alt={task.createdBy.name}
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                        )}
                        <span>{task.createdBy.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">{task.dueDate}</td>
                    <td className="px-6 py-4">
                      <StatusBadge status={task.status} />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="px-4 py-1 bg-gray-100 rounded hover:bg-gray-200">
                        Begin Review
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold mb-4">Recent task</h3>
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">PROJECT</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">DUE DATE</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">LAST UPDATED</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">UPDATED BY</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">STATUS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentTasks.map((task) => (
                  <tr key={task.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">{task.projectName}</td>
                    <td className="px-6 py-4">{task.dueDate}</td>
                    <td className="px-6 py-4">{task.lastUpdated}</td>
                    <td className="px-6 py-4">
                      {task.updatedBy && (
                        <div className="flex items-center gap-2">
                          {task.updatedBy.avatar && (
                            <Image
                              src={task.updatedBy.avatar}
                              alt={task.updatedBy.name}
                              width={24}
                              height={24}
                              className="rounded-full"
                            />
                          )}
                          <span>{task.updatedBy.name}</span>
                        </div>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={task.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}; 