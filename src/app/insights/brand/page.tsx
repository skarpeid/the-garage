'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { Input } from '@/components/ui/Input';
import { Search, Filter, Download, Upload, Plus, Heart, MessageSquare, Share2, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { PageWrapper } from '@/components/PageWrapper';

export default function BrandInsightsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <PageWrapper>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Brand Insights
            </h1>
            <p className="text-gray-400 text-lg">
              Track brand perception, sentiment, and social media engagement.
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
              placeholder="Search brand insights..."
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
                  <Heart className="h-5 w-5 text-blue-400" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-300">Brand Sentiment</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-200">78.5%</p>
              <p className="text-sm text-gray-500">Positive sentiment</p>
              <div className="mt-2 flex items-center text-green-400 text-sm">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>5.2% increase this month</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#151922] border-[#2a2f3d]">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-md bg-violet-500/10">
                  <MessageSquare className="h-5 w-5 text-violet-400" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-300">Social Engagement</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-200">245K</p>
              <p className="text-sm text-gray-500">Monthly interactions</p>
              <div className="mt-2 flex items-center text-green-400 text-sm">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>18.7% growth</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#151922] border-[#2a2f3d]">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-md bg-green-500/10">
                  <Share2 className="h-5 w-5 text-green-400" />
                </div>
                <CardTitle className="text-lg font-medium text-gray-300">Brand Reach</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-gray-200">1.2M</p>
              <p className="text-sm text-gray-500">Total audience</p>
              <div className="mt-2 flex items-center text-green-400 text-sm">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>8.3% increase</span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="sentiment" className="w-full">
          <TabsList className="mb-6 bg-transparent border-b border-gray-800">
            <TabsTrigger 
              value="sentiment" 
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none px-6 py-3"
            >
              Sentiment Analysis
            </TabsTrigger>
            <TabsTrigger 
              value="social"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none px-6 py-3"
            >
              Social Media
            </TabsTrigger>
            <TabsTrigger 
              value="reach"
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-blue-500 rounded-none px-6 py-3"
            >
              Brand Reach
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sentiment">
            <Card className="bg-[#151922] border-[#2a2f3d]">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-gray-300">Sentiment Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-blue-500/10">
                        <Heart className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Customer Reviews</p>
                        <p className="text-xs text-gray-500">Analysis of customer feedback and reviews</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-violet-500/10">
                        <Heart className="h-5 w-5 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Market Perception</p>
                        <p className="text-xs text-gray-500">How the market views your brand</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-green-500/10">
                        <Heart className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Competitor Comparison</p>
                        <p className="text-xs text-gray-500">Brand sentiment vs competitors</p>
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

          <TabsContent value="social">
            <Card className="bg-[#151922] border-[#2a2f3d]">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-gray-300">Social Media Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-blue-500/10">
                        <MessageSquare className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Platform Performance</p>
                        <p className="text-xs text-gray-500">Engagement metrics across social platforms</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-violet-500/10">
                        <MessageSquare className="h-5 w-5 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Content Analysis</p>
                        <p className="text-xs text-gray-500">Performance of different content types</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-green-500/10">
                        <MessageSquare className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Audience Insights</p>
                        <p className="text-xs text-gray-500">Demographics and engagement patterns</p>
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

          <TabsContent value="reach">
            <Card className="bg-[#151922] border-[#2a2f3d]">
              <CardHeader>
                <CardTitle className="text-xl font-medium text-gray-300">Brand Reach Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-blue-500/10">
                        <Share2 className="h-5 w-5 text-blue-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Market Coverage</p>
                        <p className="text-xs text-gray-500">Geographic and demographic reach</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-violet-500/10">
                        <Share2 className="h-5 w-5 text-violet-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Channel Distribution</p>
                        <p className="text-xs text-gray-500">Reach across different channels</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-lg bg-[#1a1f2d] hover:bg-[#1d2235] transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-md bg-green-500/10">
                        <Share2 className="h-5 w-5 text-green-400" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-200">Growth Trends</p>
                        <p className="text-xs text-gray-500">Brand reach growth over time</p>
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
            <CardTitle className="text-xl font-medium text-gray-300">Upload Brand Data</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-[#2a2f3d] rounded-lg p-8 text-center">
              <div className="flex flex-col items-center justify-center">
                <div className="p-3 rounded-full bg-blue-500/10 mb-4">
                  <Upload className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-200 mb-2">Upload brand analytics or social media data</h3>
                <p className="text-sm text-gray-500 mb-4 max-w-md">
                  Add new brand metrics, sentiment analysis, or social media data to your knowledge base.
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