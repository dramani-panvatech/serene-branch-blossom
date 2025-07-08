
import React from 'react';
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
  Search
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
import { Input } from '@/components/ui/input';

const AdminSidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { title: 'Dashboard', url: '/dashboard', icon: LayoutDashboard },
    { title: 'Customers', url: '/dashboard/customers', icon: Users },
    { title: 'Provider', url: '/dashboard/provider', icon: UserCheck },
    { title: 'Calendar', url: '/dashboard/calendar', icon: Calendar },
    { title: 'Services', url: '/dashboard/services', icon: Package },
    { title: 'Payment', url: '/dashboard/payment', icon: CreditCard },
    { title: 'Settings', url: '/dashboard/settings', icon: Settings },
  ];

  const handleSignOut = () => {
    console.log('User signed out');
    navigate('/signin');
  };

  return (
    <Sidebar className="w-72 border-r-0 bg-white/80 backdrop-blur-sm">
      <SidebarHeader className="p-8 border-b-0">
        <div className="flex items-center justify-center mb-8">
          <div className="flex items-center space-x-3">
            <div className="h-9 w-9 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
              <Clock className="h-4 w-4 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-800 font-cabinet">FlowTime</h1>
              <p className="text-xs text-gray-400 font-medium">Admin Panel</p>
            </div>
          </div>
        </div>
        
        
      </SidebarHeader>

      <SidebarContent className="px-6 py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `group flex items-center rounded-2xl text-sm font-medium transition-all duration-300 px-4 py-3 space-x-3 ${
                          isActive
                            ? 'bg-gradient-to-r from-rose-400 to-pink-500 shadow-lg transform scale-[1.02]'
                            : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50/80 hover:transform hover:scale-[1.01]'
                        }`
                      }
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      <span className="font-medium">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="px-6 py-6 border-t-0">
        <div className="space-y-3">
          <div className="flex items-center space-x-3 px-4 py-3 rounded-2xl bg-gray-50/50 border-0">
            <div className="h-9 w-9 bg-gradient-to-br from-violet-400 to-purple-500 rounded-full flex items-center justify-center shadow-md">
              <User className="h-4 w-4 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">Dr. Sarah Johnson</p>
              <p className="text-xs text-gray-400">sarah@flowtime.com</p>
            </div>
          </div>

          <div className="space-y-1">
            <NavLink
              to="/dashboard/help"
              className={({ isActive }) =>
                `flex items-center rounded-2xl text-sm font-medium transition-all duration-200 px-4 py-2.5 space-x-3 ${
                  isActive
                    ? 'bg-gradient-to-r from-rose-400 to-pink-500 text-white'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50/80'
                }`
              }
            >
              <HelpCircle className="h-4 w-4" />
              <span>Help & Support</span>
            </NavLink>
            
            <NavLink
              to="/dashboard/profile"
              className={({ isActive }) =>
                `flex items-center rounded-2xl text-sm font-medium transition-all duration-200 px-4 py-2.5 space-x-3 ${
                  isActive
                    ? 'bg-gradient-to-r from-rose-400 to-pink-500 text-white'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50/80'
                }`
              }
            >
              <User className="h-4 w-4" />
              <span>Your Profile</span>
            </NavLink>

            <Button
              onClick={handleSignOut}
              variant="ghost"
              className="w-full justify-start px-4 py-2.5 h-auto text-sm font-medium text-rose-500 hover:text-rose-600 hover:bg-rose-50/50 rounded-2xl transition-all duration-200"
            >
              <LogOut className="h-4 w-4" />
              <span className="ml-3">Sign Out</span>
            </Button>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;
