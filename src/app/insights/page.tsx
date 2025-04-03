'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { BarChart2, Upload, Database, Share2, FileText, Users, Tag } from 'lucide-react';
import Link from 'next/link';
import { PageWrapper } from '@/components/PageWrapper';

export default function InsightsPage() {
  return (
    <PageWrapper>
      <div className="space-y-8">
        <div>
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            Insights Knowledge Bank
          </h1>
          <p className="text-gray-400 text-lg">
            Upload, manage, and share data and insights for AI training and prompt enhancement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-[#151922] border-[#2a2f3d] hover:border-blue-500/50 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-300">Market & Competitor</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 text-sm mb-4">
                Market analysis, competitor research, and industry trends.
              </p>
              <Link href="/insights/market-competitor">
                <Button variant="outline" className="w-full border-[#2a2f3d] hover:border-blue-500 hover:bg-blue-500/10 text-gray-300">
                  View Insights
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-[#151922] border-[#2a2f3d] hover:border-blue-500/50 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-300">Account</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 text-sm mb-4">
                Customer data, account information, and user behavior insights.
              </p>
              <Link href="/insights/account">
                <Button variant="outline" className="w-full border-[#2a2f3d] hover:border-blue-500 hover:bg-blue-500/10 text-gray-300">
                  View Insights
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-[#151922] border-[#2a2f3d] hover:border-blue-500/50 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-300">Product</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 text-sm mb-4">
                Product features, specifications, and performance metrics.
              </p>
              <Link href="/insights/product">
                <Button variant="outline" className="w-full border-[#2a2f3d] hover:border-blue-500 hover:bg-blue-500/10 text-gray-300">
                  View Insights
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-[#151922] border-[#2a2f3d] hover:border-blue-500/50 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-medium text-gray-300">Brand</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 text-sm mb-4">
                Brand guidelines, messaging, and visual identity assets.
              </p>
              <Link href="/insights/brand">
                <Button variant="outline" className="w-full border-[#2a2f3d] hover:border-blue-500 hover:bg-blue-500/10 text-gray-300">
                  View Insights
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#151922] border-[#2a2f3d]">
            <CardHeader>
              <CardTitle className="text-xl font-medium text-gray-300">Recent Uploads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#1a1f2d]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-blue-500/10">
                      <FileText className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-200">Market Analysis Q2 2023</p>
                      <p className="text-xs text-gray-500">Uploaded 2 days ago</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#1a1f2d]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-violet-500/10">
                      <Users className="h-5 w-5 text-violet-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-200">Customer Personas</p>
                      <p className="text-xs text-gray-500">Uploaded 5 days ago</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-[#1a1f2d]">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-md bg-green-500/10">
                      <Tag className="h-5 w-5 text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-200">Product Features List</p>
                      <p className="text-xs text-gray-500">Uploaded 1 week ago</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-gray-200">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#151922] border-[#2a2f3d]">
            <CardHeader>
              <CardTitle className="text-xl font-medium text-gray-300">AI Training Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-gray-400">Data Points</p>
                    <p className="text-sm font-medium text-gray-200">12,458</p>
                  </div>
                  <div className="h-2 bg-[#1a1f2d] rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-gray-400">Documents</p>
                    <p className="text-sm font-medium text-gray-200">847</p>
                  </div>
                  <div className="h-2 bg-[#1a1f2d] rounded-full overflow-hidden">
                    <div className="h-full w-5/6 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm text-gray-400">Categories</p>
                    <p className="text-sm font-medium text-gray-200">24</p>
                  </div>
                  <div className="h-2 bg-[#1a1f2d] rounded-full overflow-hidden">
                    <div className="h-full w-1/2 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#151922] border-[#2a2f3d]">
          <CardHeader>
            <CardTitle className="text-xl font-medium text-gray-300">Upload New Data</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-[#2a2f3d] rounded-lg p-8 text-center">
              <div className="flex flex-col items-center justify-center">
                <div className="p-3 rounded-full bg-blue-500/10 mb-4">
                  <Upload className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-200 mb-2">Drag and drop your files here</h3>
                <p className="text-sm text-gray-500 mb-4 max-w-md">
                  Upload documents, spreadsheets, or any other data files to add to your knowledge bank.
                  Supported formats: PDF, DOCX, XLSX, CSV, TXT
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