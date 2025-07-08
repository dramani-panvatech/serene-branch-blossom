
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
            `group flex items-center justify-center rounded-xl transition-all duration-200 p-3 ${
              isActive
                ? 'bg-blue-100 text-blue-600'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            } ${isChild ? 'ml-4 p-2' : ''}`
          }
        >
          <item.icon className="h-5 w-5" />
        </NavLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );

  const renderExpandableItem = (item: any) => {
    const isExpanded = expandedSections.includes(item.title.toLowerCase());
    return (
      <div key={item.title}>
        <SidebarMenuItem>
          <SidebarMenuButton asChild>
            <button
              onClick={() => toggleSection(item.title.toLowerCase())}
              className="group flex items-center justify-center rounded-xl transition-all duration-200 p-3 text-gray-500 hover:text-gray-700 hover:bg-gray-50 w-full relative"
            >
              <item.icon className="h-5 w-5" />
              {isExpanded ? (
                <ChevronDown className="h-3 w-3 absolute -bottom-1 -right-1 text-gray-400" />
              ) : (
                <ChevronRight className="h-3 w-3 absolute -bottom-1 -right-1 text-gray-400" />
              )}
            </button>
          </SidebarMenuButton>
        </SidebarMenuItem>
        {isExpanded && item.children && (
          <div className="ml-2 space-y-1">
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
    <Sidebar className="w-20 border-r bg-white shadow-sm">
      <SidebarHeader className="p-4 border-b-0">
        <div className="flex items-center justify-center">
          <div className="h-10 w-10 bg-blue-500 rounded-2xl flex items-center justify-center shadow-md">
            <Clock className="h-5 w-5 text-white" />
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-6">
        {/* HOME Section */}
        <SidebarGroup>
          <div className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3 px-2">
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
          <div className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3 px-2">
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
          <div className="text-xs font-medium text-gray-400 uppercase tracking-wide mb-3 px-2">
            APPS
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {appItems.map(item => renderExpandableItem(item))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t-0">
        <Button
          onClick={handleSignOut}
          variant="ghost"
          className="w-full justify-center p-3 text-gray-500 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200"
        >
          <LogOut className="h-5 w-5" />
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;
