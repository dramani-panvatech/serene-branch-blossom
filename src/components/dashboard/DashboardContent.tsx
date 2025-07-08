
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Clock, DollarSign, TrendingUp, Star, Plus, ArrowRight } from 'lucide-react';

const DashboardContent = () => {
  const stats = [
    {
      title: 'Total Appointments',
      value: '156',
      change: '+12%',
      changeType: 'positive',
      icon: Calendar,
      color: 'bg-blue-500'
    },
    {
      title: 'Active Customers',
      value: '89',
      change: '+8%',
      changeType: 'positive',
      icon: Users,
      color: 'bg-green-500'
    },
    {
      title: 'Avg Session Time',
      value: '45m',
      change: '+3%',
      changeType: 'positive',
      icon: Clock,
      color: 'bg-purple-500'
    },
    {
      title: 'Monthly Revenue',
      value: '$12,540',
      change: '+15%',
      changeType: 'positive',
      icon: DollarSign,
      color: 'bg-yellow-500'
    }
  ];

  const upcomingAppointments = [
    {
      id: 1,
      patient: 'John Smith',
      time: '9:00 AM',
      service: 'Consultation',
      status: 'confirmed'
    },
    {
      id: 2,
      patient: 'Sarah Wilson',
      time: '10:30 AM',
      service: 'Follow-up',
      status: 'pending'
    },
    {
      id: 3,
      patient: 'Mike Johnson',
      time: '2:00 PM',
      service: 'Therapy Session',
      status: 'confirmed'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      action: 'New appointment booked',
      patient: 'Emma Davis',
      time: '2 minutes ago',
      type: 'booking'
    },
    {
      id: 2,
      action: 'Payment received',
      patient: 'Robert Chen',
      time: '15 minutes ago',
      type: 'payment'
    },
    {
      id: 3,
      action: 'Appointment completed',
      patient: 'Lisa Park',
      time: '1 hour ago',
      type: 'completed'
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-gray-600 mt-1">Welcome back, Dr. Sarah Johnson</p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline" className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>Today</span>
            </Button>
            <Button className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600">
              <Plus className="h-4 w-4" />
              <span>New Appointment</span>
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
                    <div className="flex items-center mt-2">
                      <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                      <span className="text-sm text-green-600 font-medium">{stat.change}</span>
                      <span className="text-sm text-gray-500 ml-1">vs last month</span>
                    </div>
                  </div>
                  <div className={`${stat.color} p-3 rounded-xl`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Appointments */}
          <Card className="lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
              <CardTitle className="text-xl font-semibold">Today's Appointments</CardTitle>
              <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                View All
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingAppointments.map((appointment) => (
                  <div key={appointment.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">
                          {appointment.patient.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{appointment.patient}</p>
                        <p className="text-sm text-gray-600">{appointment.service}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{appointment.time}</p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        appointment.status === 'confirmed' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {appointment.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-semibold">Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                      activity.type === 'booking' ? 'bg-blue-100' :
                      activity.type === 'payment' ? 'bg-green-100' : 'bg-purple-100'
                    }`}>
                      {activity.type === 'booking' && <Calendar className="h-4 w-4 text-blue-600" />}
                      {activity.type === 'payment' && <DollarSign className="h-4 w-4 text-green-600" />}
                      {activity.type === 'completed' && <Star className="h-4 w-4 text-purple-600" />}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                      <p className="text-sm text-gray-600">{activity.patient}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Calendar className="h-6 w-6 text-blue-600" />
                <span className="text-sm font-medium">Schedule Appointment</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Users className="h-6 w-6 text-green-600" />
                <span className="text-sm font-medium">Add Customer</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <DollarSign className="h-6 w-6 text-yellow-600" />
                <span className="text-sm font-medium">Process Payment</span>
              </Button>
              <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
                <Clock className="h-6 w-6 text-purple-600" />
                <span className="text-sm font-medium">View Schedule</span>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardContent;
