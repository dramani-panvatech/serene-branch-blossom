
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import AdminSidebar from '../components/dashboard/AdminSidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Plus, Upload, Search, Filter, Grid3X3, Table, Eye, Phone, Mail, MapPin, Calendar, User } from 'lucide-react';

const Customers = () => {
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@example.com',
      phone: '+1 (555) 123-4567',
      location: 'New York, NY',
      status: 'active',
      lastVisit: '2024-01-15',
      totalAppointments: 12,
      totalSpent: '$1,800',
      avatar: 'JS'
    },
    {
      id: 2,
      name: 'Sarah Wilson',
      email: 'sarah.wilson@example.com',
      phone: '+1 (555) 987-6543',
      location: 'Los Angeles, CA',
      status: 'active',
      lastVisit: '2024-01-10',
      totalAppointments: 8,
      totalSpent: '$1,200',
      avatar: 'SW'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@example.com',
      phone: '+1 (555) 456-7890',
      location: 'Chicago, IL',
      status: 'inactive',
      lastVisit: '2023-12-20',
      totalAppointments: 5,
      totalSpent: '$750',
      avatar: 'MJ'
    }
  ]);
  
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || customer.status === filterStatus;
    const matchesLocation = filterLocation === 'all' || customer.location.includes(filterLocation);
    
    return matchesSearch && matchesStatus && matchesLocation;
  });

  const GridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCustomers.map((customer) => (
        <Card key={customer.id} className="hover:shadow-lg transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {customer.avatar}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900">{customer.name}</h3>
                <p className="text-gray-600 text-sm">{customer.email}</p>
                <Badge 
                  variant={customer.status === 'active' ? 'default' : 'secondary'}
                  className="mt-1"
                >
                  {customer.status}
                </Badge>
              </div>
            </div>
            
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                {customer.phone}
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                {customer.location}
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Last visit: {customer.lastVisit}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-lg font-bold text-gray-900">{customer.totalAppointments}</p>
                <p className="text-xs text-gray-600">Appointments</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-lg font-bold text-gray-900">{customer.totalSpent}</p>
                <p className="text-xs text-gray-600">Total Spent</p>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button className="flex-1" variant="outline" size="sm">
                <Eye className="h-4 w-4 mr-2" />
                View
              </Button>
              <Button className="flex-1" variant="outline" size="sm">
                <Mail className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  const TableView = () => (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left p-4 font-medium text-gray-900">Customer</th>
                <th className="text-left p-4 font-medium text-gray-900">Contact</th>
                <th className="text-left p-4 font-medium text-gray-900">Location</th>
                <th className="text-left p-4 font-medium text-gray-900">Appointments</th>
                <th className="text-left p-4 font-medium text-gray-900">Total Spent</th>
                <th className="text-left p-4 font-medium text-gray-900">Status</th>
                <th className="text-left p-4 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCustomers.map((customer) => (
                <tr key={customer.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                        {customer.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{customer.name}</p>
                        <p className="text-sm text-gray-600">Last visit: {customer.lastVisit}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <p className="text-gray-900">{customer.email}</p>
                    <p className="text-sm text-gray-600">{customer.phone}</p>
                  </td>
                  <td className="p-4 text-gray-900">{customer.location}</td>
                  <td className="p-4 text-gray-900 font-semibold">{customer.totalAppointments}</td>
                  <td className="p-4 text-gray-900 font-semibold">{customer.totalSpent}</td>
                  <td className="p-4">
                    <Badge variant={customer.status === 'active' ? 'default' : 'secondary'}>
                      {customer.status}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-1" />
                        View
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AdminSidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
                  <p className="text-gray-600">Manage your customer relationships</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline">
                  <Upload className="h-4 w-4 mr-2" />
                  Import
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Customer
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-lg">
                    <DialogHeader>
                      <DialogTitle>Add New Customer</DialogTitle>
                    </DialogHeader>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                          <User className="h-8 w-8 text-gray-400" />
                        </div>
                        <Button variant="outline" size="sm">Upload Photo</Button>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" placeholder="John" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" placeholder="Smith" />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" placeholder="john.smith@example.com" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" placeholder="+1 (555) 123-4567" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="address">Address</Label>
                          <Input id="address" placeholder="123 Main St, City, State 12345" />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="notes">Notes</Label>
                          <textarea 
                            id="notes"
                            rows={3}
                            className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                            placeholder="Additional notes about the customer..."
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-end space-x-3 pt-4">
                        <Button variant="ghost">Cancel</Button>
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
                          Add Customer
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Customers</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">{customers.length}</p>
                    </div>
                    <div className="bg-blue-500 p-3 rounded-xl">
                      <User className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Customers</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">
                        {customers.filter(c => c.status === 'active').length}
                      </p>
                    </div>
                    <div className="bg-green-500 p-3 rounded-xl">
                      <User className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">New This Month</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">12</p>
                    </div>
                    <div className="bg-purple-500 p-3 rounded-xl">
                      <Plus className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                      <p className="text-3xl font-bold text-gray-900 mt-2">$3,750</p>
                    </div>
                    <div className="bg-yellow-500 p-3 rounded-xl">
                      <Calendar className="h-6 w-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filters and Search */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search customers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <Select value={filterStatus} onValueChange={setFilterStatus}>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Status</SelectItem>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>

                    <Select value={filterLocation} onValueChange={setFilterLocation}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Locations</SelectItem>
                        <SelectItem value="New York">New York</SelectItem>
                        <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                        <SelectItem value="Chicago">Chicago</SelectItem>
                      </SelectContent>
                    </Select>

                    <div className="flex items-center space-x-2 border rounded-lg p-1">
                      <Button
                        variant={viewMode === 'grid' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setViewMode('grid')}
                      >
                        <Grid3X3 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant={viewMode === 'table' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setViewMode('table')}
                      >
                        <Table className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Results */}
            <div className="mb-4">
              <p className="text-gray-600">
                Showing {filteredCustomers.length} of {customers.length} customers
              </p>
            </div>

            {/* Content */}
            {filteredCustomers.length === 0 ? (
              <div className="text-center py-32">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                  <User className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No customers found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search or filters</p>
              </div>
            ) : (
              viewMode === 'grid' ? <GridView /> : <TableView />
            )}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Customers;
