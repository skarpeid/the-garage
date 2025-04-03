'use client';

import { Card, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { User, Mail, Phone, MapPin, Building, Calendar, Camera } from 'lucide-react';
import { formatDate } from '@/utils/dateFormat';
import { PageWrapper } from '@/components/PageWrapper';

// Mock user data - replace with actual data fetching
const mockUser = {
  name: 'Nicolaj Leonhard Christensen',
  email: 'nicolaj@example.com',
  phone: '+45 12 34 56 78',
  location: 'Copenhagen, Denmark',
  company: 'The Garage',
  joinDate: '2024-01-15',
  avatar: '/avatars/nicolaj.jpg',
};

export default function ProfilePage() {
  return (
    <PageWrapper>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-semibold text-gray-100">Profile</h1>
          <p className="text-gray-400 mt-1">Manage your personal information and preferences</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {/* Profile Picture Card */}
          <Card className="bg-[#151922] border-[#2a2f3d] md:col-span-1">
            <CardContent className="p-6 flex flex-col items-center space-y-4">
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 p-[2px]">
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <div className="w-full h-full bg-[#1a1f2d] flex items-center justify-center text-gray-400">
                      <User className="w-12 h-12" />
                    </div>
                  </div>
                </div>
                <button className="absolute bottom-0 right-0 p-2 bg-[#151922] border border-[#2a2f3d] rounded-full hover:bg-[#1a1f2d] transition-colors">
                  <Camera className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-100">{mockUser.name}</h2>
                <p className="text-gray-400">Administrator</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white">
                Edit Profile
              </Button>
            </CardContent>
          </Card>

          {/* Personal Information Card */}
          <Card className="bg-[#151922] border-[#2a2f3d] md:col-span-2">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-100 mb-6">Personal Information</h2>
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-400">
                      <Mail className="w-4 h-4 mr-2" />
                      <span className="text-sm">Email</span>
                    </div>
                    <p className="text-gray-100">{mockUser.email}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-400">
                      <Phone className="w-4 h-4 mr-2" />
                      <span className="text-sm">Phone</span>
                    </div>
                    <p className="text-gray-100">{mockUser.phone}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">Location</span>
                    </div>
                    <p className="text-gray-100">{mockUser.location}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-400">
                      <Building className="w-4 h-4 mr-2" />
                      <span className="text-sm">Company</span>
                    </div>
                    <p className="text-gray-100">{mockUser.company}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">Joined</span>
                    </div>
                    <p className="text-gray-100">{formatDate(mockUser.joinDate)}</p>
                  </div>
                </div>
                <div className="pt-6 flex justify-end space-x-4">
                  <Button className="bg-[#1a1f2d] text-gray-400 hover:text-gray-100 border border-[#2a2f3d]">
                    Cancel
                  </Button>
                  <Button className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 text-white">
                    Save Changes
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="bg-[#151922] border-[#2a2f3d] md:col-span-3">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold text-gray-100 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-[#1a1f2d] transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-100">Updated project status</p>
                      <p className="text-sm text-gray-400">{formatDate(new Date())}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
} 