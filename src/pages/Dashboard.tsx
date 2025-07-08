
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import AdminSidebar from '../components/dashboard/AdminSidebar';
import DashboardContent from '../components/dashboard/DashboardContent';

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AdminSidebar />
        <main className="flex-1">
          <DashboardContent />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
