'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Bell, Moon, Globe, Shield, Mail } from 'lucide-react';
import { PageWrapper } from '@/components/PageWrapper';

export default function SettingsPage() {
  return (
    <PageWrapper>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-semibold text-gray-100">Settings</h1>
          <p className="text-gray-400 mt-1">Manage your account settings and preferences</p>
        </div>

        {/* Appearance */}
        <Card className="bg-[#151922] border-[#2a2f3d]">
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-100 flex items-center">
                  <Moon className="h-5 w-5 mr-2 text-gray-400" />
                  Appearance
                </h2>
                <p className="text-gray-400 mt-1">Customize how The Garage looks on your device</p>
              </div>
              <Button className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white">
                Change theme
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="bg-[#151922] border-[#2a2f3d]">
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-100 flex items-center">
                  <Bell className="h-5 w-5 mr-2 text-gray-400" />
                  Notifications
                </h2>
                <p className="text-gray-400 mt-1">Choose what notifications you receive</p>
              </div>
              <Button className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white">
                Configure
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Language */}
        <Card className="bg-[#151922] border-[#2a2f3d]">
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-100 flex items-center">
                  <Globe className="h-5 w-5 mr-2 text-gray-400" />
                  Language & Region
                </h2>
                <p className="text-gray-400 mt-1">Select your preferred language and regional settings</p>
              </div>
              <Button className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white">
                Change language
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card className="bg-[#151922] border-[#2a2f3d]">
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-100 flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-gray-400" />
                  Security
                </h2>
                <p className="text-gray-400 mt-1">Manage your security preferences and login settings</p>
              </div>
              <Button className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white">
                Security settings
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Email Preferences */}
        <Card className="bg-[#151922] border-[#2a2f3d]">
          <CardContent className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-gray-100 flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-gray-400" />
                  Email Preferences
                </h2>
                <p className="text-gray-400 mt-1">Manage your email notifications and preferences</p>
              </div>
              <Button className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white">
                Configure emails
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageWrapper>
  );
} 