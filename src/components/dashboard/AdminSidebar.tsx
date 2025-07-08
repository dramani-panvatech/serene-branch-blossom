
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
  Calendar, 
  Users, 
  Settings,
  LayoutDashboard,
  UserCheck,
  Clock,
  Package,
  CreditCard,
  HelpCircle,
  User,
  LogOut,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<string[]>(['home']);

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const homeItems = [
    { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
    { title: 'Calendar', url: '/dashboard/calendar', icon: Calendar },
    { title: 'Customers', url: '/dashboard/customers', icon: Users },
    { title: 'Provider', url: '/dashboard/provider', icon: UserCheck },
    { title: 'Services', url: '/dashboard/services', icon: Package },
    { title: 'Payment', url: '/dashboard/payment', icon: CreditCard },
    { title: 'Settings', url: '/dashboard/settings', icon: Settings },
    { title: 'Help', url: '/dashboard/help', icon: HelpCircle },
    { title: 'Profile', url: '/dashboard/profile', icon: User },
  ];

  const renderMenuItem = (item: any, isChild = false) => (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton asChild>
        <NavLink
          to={item.url}
          className={({ isActive }) =>
            `group flex items-center gap-3 rounded-lg transition-all duration-200 p-3 ${
              isActive
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
            } ${isChild ? 'ml-6 p-2' : ''}`
          }
        >
          <item.icon className="h-5 w-5 flex-shrink-0" />
          <span className="font-medium">{item.title}</span>
        </NavLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );

  const handleSignOut = () => {
    console.log('User signed out');
    navigate('/signin');
  };

  return (
    <Sidebar className="w-64 border-r bg-white shadow-sm">
      <SidebarHeader className="p-6 border-b">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-blue-500 rounded-xl flex items-center justify-center shadow-lg">
            <Clock className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Admin Panel</h2>
            <p className="text-sm text-gray-500">Dashboard</p>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-4 py-6">
        {/* MAIN MENU Section */}
        <SidebarGroup>
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4 px-3">
            MAIN MENU
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {homeItems.map(item => renderMenuItem(item))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t">
        <Button
          onClick={handleSignOut}
          variant="ghost"
          className="w-full justify-start gap-3 p-3 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all duration-200"
        >
          <LogOut className="h-5 w-5" />
          <span className="font-medium">Sign Out</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;
