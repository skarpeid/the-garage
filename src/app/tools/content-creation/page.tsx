'use client';

import { Card, CardContent } from '@/components/ui/Card';
import Link from 'next/link';
import { FileText, Layout, Megaphone } from 'lucide-react';
import { PageWrapper } from '@/components/PageWrapper';

const contentTools = [
  {
    id: 'case-story',
    title: 'Case Story Tool',
    description: 'Case story creator',
    icon: FileText,
    href: '/tools/content-creation/case-story',
    category: 'Case Story Tool',
    isAvailable: true,
  },
  {
    id: 'landing-page',
    title: 'Landing Page Tool',
    description: 'Create a landing page',
    icon: Layout,
    href: '/tools/content-creation/landing-page',
    category: 'Landing Page Tool',
    isAvailable: false,
  },
  {
    id: 'ad-creation',
    title: 'Ad Creation Tool',
    description: 'Create paid media ads',
    icon: Megaphone,
    href: '/tools/content-creation/ad-creation',
    category: 'Ad Creation Tool',
    isAvailable: false,
  },
];

export default function ContentCreationPage() {
  return (
    <PageWrapper>
      <div className="space-y-8">
        <div>
          <h2 className="text-lg text-blue-400">Select a content tool</h2>
          <h1 className="text-5xl font-semibold text-gray-100 mb-4">What content do you<br />want to create<br />today?</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentTools.map((tool) => (
            <div 
              key={tool.id}
              className="relative group rounded-lg p-[1px] bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 transition-all duration-300 hover:shadow-[0_0_1rem_-0.25rem_#3b82f6] hover:shadow-blue-500/20"
            >
              <div className="absolute -z-10 -inset-[1px] bg-gradient-to-r from-violet-500 to-blue-500 rounded-lg blur-xl group-hover:opacity-30 opacity-0 transition-all duration-300"></div>
              <Card className="relative bg-[#151922] rounded-lg transition-all h-full">
                <CardContent className="p-6">
                  <div className="mb-6">
                    <span className="text-sm font-medium text-blue-400">{tool.category}</span>
                  </div>
                  
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="text-xl font-medium text-gray-100 group-hover:text-white transition-colors">
                        {tool.description}
                      </h3>
                    </div>
                    <div className="bg-gray-800/50 p-3 rounded-lg group-hover:bg-gray-800 transition-colors">
                      <tool.icon className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
                    </div>
                  </div>

                  <div className="mt-6">
                    {tool.isAvailable ? (
                      <Link
                        href={tool.href}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white text-sm font-medium rounded-lg transition-all"
                      >
                        Start
                        <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center">
                          →
                        </span>
                      </Link>
                    ) : (
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-gray-400 text-sm font-medium rounded-lg">
                        Coming soon
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
} 