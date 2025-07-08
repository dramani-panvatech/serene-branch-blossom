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
    { title: 'Dashboard 2', url: '/dashboard/analytics', icon: LayoutDashboard },
    { title: 'Profile', url: '/dashboard/profile', icon: User },
  ];

  const uiComponentItems = [
    { title: 'Buttons', url: '/dashboard/buttons', icon: Package },
    { title: 'Alerts', url: '/dashboard/alerts', icon: HelpCircle },
    { title: 'Card', url: '/dashboard/card', icon: CreditCard },
    { title: 'Forms', url: '/dashboard/forms', icon: Settings },
    { title: 'Typography', url: '/dashboard/typography', icon: Settings },
  ];

  const appItems = [
    { 
      title: 'Ecommerce', 
      icon: Package, 
      expandable: true,
      children: [
        { title: 'Products', url: '/dashboard/products' },
        { title: 'Orders', url: '/dashboard/orders' },
      ]
    },
    { 
      title: 'User Profile', 
      icon: User, 
      expandable: true,
      children: [
        { title: 'Profile', url: '/dashboard/profile' },
        { title: 'Settings', url: '/dashboard/settings' },
      ]
    },
    { 
      title: 'Blog', 
      icon: Settings, 
      expandable: true,
      children: [
        { title: 'Posts', url: '/dashboard/posts' },
        { title: 'Categories', url: '/dashboard/categories' },
      ]
    },
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

  const renderExpandableItem = (item: any) => {
    const isExpanded = expandedSections.includes(item.title.toLowerCase());
    return (
      <div key={item.title} className="space-y-1">
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <button
              onClick={() => toggleSection(item.title.toLowerCase())}
              className="group flex items-center justify-between w-full rounded-lg transition-all duration-200 p-3 text-gray-600 hover:text-gray-900 hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span className="font-medium">{item.title}</span>
              </div>
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
          </SidebarMenuButton>
        </SidebarMenuItem>
        {isExpanded && item.children && (
          <div className="space-y-1">
            {item.children.map((child: any) => renderMenuItem(child, true))}
          </div>
        )}
      </div>
    );
  };

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
        {/* HOME Section */}
        <SidebarGroup>
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4 px-3">
            HOME
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {homeItems.map(item => renderMenuItem(item))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Separator */}
        <div className="my-6 mx-3 h-px bg-gray-200"></div>

        {/* UI COMPONENTS Section */}
        <SidebarGroup>
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4 px-3">
            UI COMPONENTS
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {uiComponentItems.map(item => renderMenuItem(item))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Separator */}
        <div className="my-6 mx-3 h-px bg-gray-200"></div>

        {/* APPS Section */}
        <SidebarGroup>
          <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4 px-3">
            APPS
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {appItems.map(item => renderExpandableItem(item))}
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
