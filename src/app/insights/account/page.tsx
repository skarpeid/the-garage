'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { Input } from '@/components/ui/Input';
import { Search, Filter, Download, Upload, Plus, Users, UserPlus, Activity, CreditCard } from 'lucide-react';
import Link from 'next/link';
import { PageWrapper } from '@/components/PageWrapper';

export default function AccountInsightsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <PageWrapper>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Account Insights
            </h1>
            <p className="text-gray-400 text-lg">
              Analyze customer data, account information, and user behavior patterns.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="border-[#2a2f3d] hover:border-blue-500 hover:bg-blue-500/10 text-gray-300">
              <Download className="h-4 w-4 mr-2" />
              Export Data
            </Button>
            <Button className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white">
              <Plus className="h-4 w-4 mr-2" />
              Add New Insight
            </Button>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              placeholder="Search account insights..."
              className="pl-10 bg-[#151922] border-[#2a2f3d] text-gray-300 placeholder:text-gray-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" className="border-[#2a2f3d] hover:border-blue-500 hover:bg-blue-500/10 text-gray-300">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-[#151922] border-[#2a2f3d]">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-md bg-blue-500/10">
                  <Users className="h-5 w-5 text-blue-400" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-300">Total Customers</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-200">12,458</p>
              <p className="text-sm text-gray-500">Active accounts</p>
              <div className="mt-2 flex items-center text-green-400 text-sm">
                <UserPlus className="h-4 w-4 mr-1" />
                <span>8.3% growth this month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#151922] border-[#2a2f3d]">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-md bg-violet-500/10">
                  <Activity className="h-5 w-5 text-violet-400" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-300">User Engagement</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-200">76.2%</p>
              <p className="text-sm text-gray-500">Average engagement rate</p>
              <div className="mt-2 flex items-center text-green-400 text-sm">
                <Activity className="h-4 w-4 mr-1" />
                <span>5.1% increase</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#151922] border-[#2a2f3d]">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-md bg-green-500/10">
                  <CreditCard className="h-5 w-5 text-green-400" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-300">Customer LTV</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-200">$1,245</p>
              <p className="text-sm text-gray-500">Average lifetime value</p>
              <div className="mt-2 flex items-center text-green-400 text-sm">
                <Activity className="h-4 w-4 mr-1" />
                <span>12.8% increase</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="customers" className="w-full">
          <TabsList className="mb-6 bg-transparent border-b border-gray-800">
            <TabsTrigger 
              value="customers" 
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none px-6 py-3"
            >
              Customer Segments
            </TabsTrigger>
            <TabsTrigger 
              value="behavior"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none px-6 py-3"
            >
              User Behavior
            </TabsTrigger>
            <TabsTrigger 
              value="feedback"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none px-6 py-3"
            >
              Customer Feedback
            </TabsTrigger>
          </TabsList>

          <TabsContent value="customers">
            <Card className="bg-[#151922] border-[#2a2f3d]">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-gray-300">Customer Segments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-blue-500/10">
                        <Users className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Enterprise Customers</p>
                        <p className="text-xs text-gray-500">Large organizations with 1000+ employees</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-violet-500/10">
                        <Users className="h-5 w-5 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">SMB Segment</p>
                        <p className="text-xs text-gray-500">Small and medium businesses with 10-999 employees</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-green-500/10">
                        <Users className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Individual Users</p>
                        <p className="text-xs text-gray-500">Personal accounts and freelancers</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="behavior">
            <Card className="bg-[#151922] border-[#2a2f3d]">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-gray-300">User Behavior Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-blue-500/10">
                        <Activity className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Feature Usage Patterns</p>
                        <p className="text-xs text-gray-500">Analysis of most and least used features</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-violet-500/10">
                        <Activity className="h-5 w-5 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Session Duration Analysis</p>
                        <p className="text-xs text-gray-500">How long users spend in the application</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-green-500/10">
                        <Activity className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">User Journey Mapping</p>
                        <p className="text-xs text-gray-500">Common paths and drop-off points</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback">
            <Card className="bg-[#151922] border-[#2a2f3d]">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-gray-300">Customer Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-blue-500/10">
                        <Users className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">NPS Survey Results</p>
                        <p className="text-xs text-gray-500">Net Promoter Score analysis and trends</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-violet-500/10">
                        <Users className="h-5 w-5 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Feature Requests</p>
                        <p className="text-xs text-gray-500">Most requested features and improvements</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-green-500/10">
                        <Users className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Support Tickets Analysis</p>
                        <p className="text-xs text-gray-500">Common issues and resolution times</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="bg-[#151922] border-[#2a2f3d]">
          <CardHeader>
            <CardTitle className="text-xl font-medium text-gray-300">Upload Account Data</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-[#2a2f3d] rounded-lg p-8 text-center">
              <div className="flex flex-col items-center justify-center">
                <div className="p-3 rounded-full bg-blue-500/10 mb-4">
                  <Upload className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-200 mb-2">Upload customer data or feedback</h3>
                <p className="text-sm text-gray-500 mb-4 max-w-md">
                  Add new customer segments, behavior analysis, or feedback data to your knowledge base.
                  Supported formats: CSV, XLSX, JSON, PDF
                </p>
                <Button className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white">
                  Browse Files
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  );
} 