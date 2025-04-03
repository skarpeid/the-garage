'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { Input } from '@/components/ui/Input';
import { Search, Filter, Download, Upload, Plus, Package, Star, TrendingUp, BarChart2 } from 'lucide-react';
import Link from 'next/link';
import { PageWrapper } from '@/components/PageWrapper';

export default function ProductInsightsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <PageWrapper>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Product Insights
            </h1>
            <p className="text-gray-400 text-lg">
              Analyze product performance, user satisfaction, and feature adoption.
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
              placeholder="Search product insights..."
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
                  <Package className="h-5 w-5 text-blue-400" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-300">Product Usage</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-200">89.7%</p>
              <p className="text-sm text-gray-500">Active feature adoption</p>
              <div className="mt-2 flex items-center text-green-400 text-sm">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>12.3% increase this month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#151922] border-[#2a2f3d]">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-md bg-violet-500/10">
                  <Star className="h-5 w-5 text-violet-400" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-300">User Satisfaction</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-200">4.8/5.0</p>
              <p className="text-sm text-gray-500">Average rating</p>
              <div className="mt-2 flex items-center text-green-400 text-sm">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>0.2 points increase</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#151922] border-[#2a2f3d]">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-md bg-green-500/10">
                  <BarChart2 className="h-5 w-5 text-green-400" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-300">Feature Performance</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-200">92.4%</p>
              <p className="text-sm text-gray-500">Success rate</p>
              <div className="mt-2 flex items-center text-green-400 text-sm">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>3.1% improvement</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="features" className="w-full">
          <TabsList className="mb-6 bg-transparent border-b border-gray-800">
            <TabsTrigger 
              value="features" 
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none px-6 py-3"
            >
              Feature Analysis
            </TabsTrigger>
            <TabsTrigger 
              value="performance"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none px-6 py-3"
            >
              Performance Metrics
            </TabsTrigger>
            <TabsTrigger 
              value="feedback"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none px-6 py-3"
            >
              User Feedback
            </TabsTrigger>
          </TabsList>

          <TabsContent value="features">
            <Card className="bg-[#151922] border-[#2a2f3d]">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-gray-300">Feature Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-blue-500/10">
                        <Package className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Core Features</p>
                        <p className="text-xs text-gray-500">Usage and adoption metrics for main features</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-violet-500/10">
                        <Package className="h-5 w-5 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">New Features</p>
                        <p className="text-xs text-gray-500">Adoption rate of recently launched features</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-green-500/10">
                        <Package className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Feature Dependencies</p>
                        <p className="text-xs text-gray-500">Analysis of feature interaction patterns</p>
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

          <TabsContent value="performance">
            <Card className="bg-[#151922] border-[#2a2f3d]">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-gray-300">Performance Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-blue-500/10">
                        <BarChart2 className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Response Times</p>
                        <p className="text-xs text-gray-500">API and feature response time analysis</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-violet-500/10">
                        <BarChart2 className="h-5 w-5 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Error Rates</p>
                        <p className="text-xs text-gray-500">System and feature error tracking</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-green-500/10">
                        <BarChart2 className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Resource Usage</p>
                        <p className="text-xs text-gray-500">CPU, memory, and storage utilization</p>
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
                <CardTitle className="text-xl font-medium text-gray-300">User Feedback</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-blue-500/10">
                        <Star className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Feature Ratings</p>
                        <p className="text-xs text-gray-500">User ratings and reviews for each feature</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-violet-500/10">
                        <Star className="h-5 w-5 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Bug Reports</p>
                        <p className="text-xs text-gray-500">User-reported issues and their status</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-green-500/10">
                        <Star className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Feature Requests</p>
                        <p className="text-xs text-gray-500">User suggestions for new features</p>
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
            <CardTitle className="text-xl font-medium text-gray-300">Upload Product Data</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-[#2a2f3d] rounded-lg p-8 text-center">
              <div className="flex flex-col items-center justify-center">
                <div className="p-3 rounded-full bg-blue-500/10 mb-4">
                  <Upload className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-200 mb-2">Upload product analytics or feedback</h3>
                <p className="text-sm text-gray-500 mb-4 max-w-md">
                  Add new product metrics, feature analysis, or user feedback to your knowledge base.
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