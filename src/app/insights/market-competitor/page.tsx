'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { Input } from '@/components/ui/Input';
import { Search, Filter, Download, Upload, Plus, BarChart2, Users, TrendingUp, Target } from 'lucide-react';
import Link from 'next/link';
import { PageWrapper } from '@/components/PageWrapper';

export default function MarketCompetitorInsightsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <PageWrapper>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Market & Competitor Insights
            </h1>
            <p className="text-gray-400 text-lg">
              Analyze market trends, competitor strategies, and industry dynamics.
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
              placeholder="Search market insights..."
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
                  <BarChart2 className="h-5 w-5 text-blue-400" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-300">Market Size</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-200">$2.4B</p>
              <p className="text-sm text-gray-500">Total market value</p>
              <div className="mt-2 flex items-center text-green-400 text-sm">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>12.5% YoY growth</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#151922] border-[#2a2f3d]">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-md bg-violet-500/10">
                  <Users className="h-5 w-5 text-violet-400" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-300">Key Competitors</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-200">8</p>
              <p className="text-sm text-gray-500">Major players</p>
              <div className="mt-2 flex items-center text-green-400 text-sm">
                <Target className="h-4 w-4 mr-1" />
                <span>3 new entrants</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#151922] border-[#2a2f3d]">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-md bg-green-500/10">
                  <Target className="h-5 w-5 text-green-400" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-300">Market Share</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-200">24.8%</p>
              <p className="text-sm text-gray-500">Your position</p>
              <div className="mt-2 flex items-center text-green-400 text-sm">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>2.3% increase</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="market" className="w-full">
          <TabsList className="mb-6 bg-transparent border-b border-gray-800">
            <TabsTrigger 
              value="market" 
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none px-6 py-3"
            >
              Market Analysis
            </TabsTrigger>
            <TabsTrigger 
              value="competitors"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none px-6 py-3"
            >
              Competitor Profiles
            </TabsTrigger>
            <TabsTrigger 
              value="trends"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none px-6 py-3"
            >
              Industry Trends
            </TabsTrigger>
          </TabsList>

          <TabsContent value="market">
            <Card className="bg-[#151922] border-[#2a2f3d]">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-gray-300">Market Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-blue-500/10">
                        <BarChart2 className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Market Size Report</p>
                        <p className="text-xs text-gray-500">Detailed analysis of market segments</p>
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
                        <p className="text-sm font-medium text-gray-200">Growth Projections</p>
                        <p className="text-xs text-gray-500">Future market size and growth rates</p>
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
                        <p className="text-sm font-medium text-gray-200">Market Dynamics</p>
                        <p className="text-xs text-gray-500">Key drivers and challenges</p>
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

          <TabsContent value="competitors">
            <Card className="bg-[#151922] border-[#2a2f3d]">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-gray-300">Competitor Profiles</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-blue-500/10">
                        <Users className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Competitor Analysis</p>
                        <p className="text-xs text-gray-500">Detailed profiles of major competitors</p>
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
                        <p className="text-sm font-medium text-gray-200">Market Positioning</p>
                        <p className="text-xs text-gray-500">Competitor positioning and strategies</p>
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
                        <p className="text-sm font-medium text-gray-200">Competitive Advantages</p>
                        <p className="text-xs text-gray-500">Analysis of competitor strengths</p>
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

          <TabsContent value="trends">
            <Card className="bg-[#151922] border-[#2a2f3d]">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-gray-300">Industry Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-blue-500/10">
                        <Target className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Emerging Trends</p>
                        <p className="text-xs text-gray-500">New technologies and innovations</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-violet-500/10">
                        <Target className="h-5 w-5 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Consumer Behavior</p>
                        <p className="text-xs text-gray-500">Changing customer preferences</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-green-500/10">
                        <Target className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Regulatory Impact</p>
                        <p className="text-xs text-gray-500">Industry regulations and compliance</p>
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
            <CardTitle className="text-xl font-medium text-gray-300">Upload Market Data</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-[#2a2f3d] rounded-lg p-8 text-center">
              <div className="flex flex-col items-center justify-center">
                <div className="p-3 rounded-full bg-blue-500/10 mb-4">
                  <Upload className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-200 mb-2">Upload market research or competitor analysis</h3>
                <p className="text-sm text-gray-500 mb-4 max-w-md">
                  Add new market data, competitor profiles, or industry trends to your knowledge base.
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