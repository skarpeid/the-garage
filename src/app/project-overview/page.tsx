'use client';

import { useState, useMemo, ChangeEvent } from 'react';
import Link from 'next/link';
import { Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { formatDate, formatDateTime } from '@/utils/dateFormat';
import { PageWrapper } from '@/components/PageWrapper';

// Mock data - replace with actual data from your backend
const mockProjects = [
  { id: 1, name: 'Test case story Jacob', deadline: '2025-04-02', lastUpdated: null, status: 'NOT_STARTED' },
  { id: 2, name: 'test', deadline: '2025-04-10', lastUpdated: null, status: 'NOT_STARTED' },
  { id: 3, name: 'Test translation', deadline: '2025-03-31', lastUpdated: '2025-04-01 11:52:00', status: 'NOT_STARTED' },
  { id: 4, name: 'Test', deadline: '2025-04-01', lastUpdated: null, status: 'NOT_STARTED' },
  { id: 5, name: 'Test_Svet 2', deadline: '2025-03-31', lastUpdated: null, status: 'NOT_STARTED' },
  { id: 6, name: 'Marketing Campaign Q2', deadline: '2025-05-15', lastUpdated: '2025-04-02 09:30:00', status: 'IN_PROGRESS' },
  { id: 7, name: 'Sales Dashboard', deadline: '2025-04-20', lastUpdated: '2025-04-01 15:45:00', status: 'IN_PROGRESS' },
  { id: 8, name: 'Content Calendar', deadline: '2025-04-05', lastUpdated: '2025-04-02 10:20:00', status: 'COMPLETED' },
  { id: 9, name: 'SEO Optimization', deadline: '2025-04-25', lastUpdated: null, status: 'NOT_STARTED' },
  { id: 10, name: 'Social Media Strategy', deadline: '2025-04-30', lastUpdated: '2025-04-01 14:15:00', status: 'IN_PROGRESS' },
  { id: 11, name: 'Email Newsletter', deadline: '2025-04-15', lastUpdated: null, status: 'NOT_STARTED' },
  { id: 12, name: 'Product Launch', deadline: '2025-05-01', lastUpdated: '2025-04-02 16:30:00', status: 'IN_PROGRESS' },
  { id: 13, name: 'Customer Feedback Analysis', deadline: '2025-04-18', lastUpdated: null, status: 'NOT_STARTED' },
  { id: 14, name: 'Website Redesign', deadline: '2025-05-10', lastUpdated: '2025-04-01 13:45:00', status: 'IN_PROGRESS' },
  { id: 15, name: 'Mobile App Testing', deadline: '2025-04-28', lastUpdated: '2025-04-02 11:20:00', status: 'COMPLETED' },
];

const ITEMS_PER_PAGE = 10;

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'COMPLETED':
      return 'bg-green-400/10 text-green-400';
    case 'IN_PROGRESS':
      return 'bg-yellow-400/10 text-yellow-400';
    case 'NOT_STARTED':
      return 'bg-red-400/10 text-red-400';
    case 'DRAFT':
      return 'bg-gray-400/10 text-gray-400';
    default:
      return 'bg-gray-400/10 text-gray-400';
  }
};

const getStatusText = (status: string) => {
  return status.replace('_', ' ').toLowerCase().replace(/\b\w/g, l => l.toUpperCase());
};

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFolder, setSelectedFolder] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter projects based on search query and filters
  const filteredProjects = useMemo(() => {
    return mockProjects.filter(project => {
      const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStatus = !selectedStatus || project.status === selectedStatus;
      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, selectedStatus]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / ITEMS_PER_PAGE);
  const paginatedProjects = filteredProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleFolderChange = (value: string) => {
    setSelectedFolder(value);
    setCurrentPage(1);
  };

  const handleStatusChange = (value: string) => {
    setSelectedStatus(value);
    setCurrentPage(1);
  };

  return (
    <PageWrapper>
      <div className="space-y-8">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-lg text-blue-400">Project Overview</h2>
            <h1 className="text-5xl font-semibold text-gray-100">Manage all your<br />projects</h1>
            <p className="mt-4 text-gray-400 max-w-2xl">
              Easily track progress, access saved projects, and view assigned tasks.
            </p>
            <Link href="/learn-more" className="text-sm text-gray-400 hover:text-white transition-colors">
              Learn how to use
            </Link>
          </div>
          
          <Link 
            href="/projects/new"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white text-sm font-medium rounded-lg transition-all"
          >
            <Plus className="h-4 w-4" />
            New project
          </Link>
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-[#151922] rounded-lg border border-[#2a2f3d]">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">SEARCH PROJECT</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                className="pl-10 bg-[#1a1f2d] border-[#2a2f3d] text-gray-100 placeholder-gray-500"
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">FILTER ON FOLDER</label>
            <Select value={selectedFolder} onValueChange={handleFolderChange}>
              <SelectTrigger className="w-full bg-[#1a1f2d] border-[#2a2f3d] text-gray-100">
                <SelectValue placeholder="All folders" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">FILTER ON STATUS</label>
            <Select value={selectedStatus} onValueChange={handleStatusChange}>
              <SelectTrigger className="w-full bg-[#1a1f2d] border-[#2a2f3d] text-gray-100">
                <SelectValue placeholder="All statuses" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="archived">Archived</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Projects Table */}
        <div className="bg-[#151922] rounded-lg border border-[#2a2f3d] overflow-hidden">
          <table className="w-full">
            <colgroup>
              <col className="w-[35%]" />
              <col className="w-[15%]" />
              <col className="w-[20%]" />
              <col className="w-[15%]" />
              <col className="w-[15%]" />
            </colgroup>
            <thead>
              <tr className="border-b border-[#2a2f3d] bg-[#1a1f2d]">
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase">Project Name</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase">Deadline</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase">Last Updated</th>
                <th className="text-left px-6 py-4 text-xs font-semibold text-gray-400 uppercase">Status</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2a2f3d]">
              {paginatedProjects.map((project) => (
                <tr key={project.id} className="hover:bg-[#1a1f2d] transition-colors">
                  <td className="px-6 py-4 text-gray-100 truncate">{project.name}</td>
                  <td className="px-6 py-4 text-gray-400 truncate">{formatDate(project.deadline)}</td>
                  <td className="px-6 py-4 text-gray-400 truncate">
                    {project.lastUpdated ? formatDateTime(project.lastUpdated) : '-'}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`
                      px-2.5 py-0.5 rounded-full text-xs font-medium inline-block
                      ${getStatusStyles(project.status)}
                    `}>
                      {getStatusText(project.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href={`/project-overview/${project.id}`}
                      className="inline-flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white text-sm font-medium rounded-md transition-colors"
                    >
                      View project
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-between items-center px-6 py-4 border-t border-[#2a2f3d]">
              <Button
                onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
                disabled={currentPage === 1}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2a2f3d] to-[#1a1f2d] hover:from-[#3a3f4d] hover:to-[#2a2f3d] text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-[#3a3f4d]"
              >
                <span className="bg-white/10 rounded-full w-5 h-5 flex items-center justify-center">←</span>
                Previous
              </Button>
              <span className="text-gray-400">
                Page {currentPage} of {totalPages}
              </span>
              <Button
                onClick={() => setCurrentPage(page => Math.min(totalPages, page + 1))}
                disabled={currentPage === totalPages}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#2a2f3d] to-[#1a1f2d] hover:from-[#3a3f4d] hover:to-[#2a2f3d] text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-[#3a3f4d]"
              >
                Next
                <span className="bg-white/10 rounded-full w-5 h-5 flex items-center justify-center">→</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
} 