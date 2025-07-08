
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import AdminSidebar from '../components/dashboard/AdminSidebar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Grid3X3, Table, Plus, Star, MapPin, Phone, Mail, Eye } from 'lucide-react';

const Provider = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterSpecialty, setFilterSpecialty] = useState('all');

  const providers = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Cardiology',
      rating: 4.8,
      reviews: 156,
      location: 'New York, NY',
      phone: '+1 (555) 123-4567',
      email: 'sarah.johnson@example.com',
      status: 'active',
      patients: 234,
      experience: '12 years',
      avatar: 'SJ'
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Neurology',
      rating: 4.9,
      reviews: 203,
      location: 'Los Angeles, CA',
      phone: '+1 (555) 987-6543',
      email: 'michael.chen@example.com',
      status: 'active',
      patients: 189,
      experience: '8 years',
      avatar: 'MC'
    },
    {
      id: 3,
      name: 'Dr. Emily Davis',
      specialty: 'Pediatrics',
      rating: 4.7,
      reviews: 127,
      location: 'Chicago, IL',
      phone: '+1 (555) 456-7890',
      email: 'emily.davis@example.com',
      status: 'inactive',
      patients: 145,
      experience: '6 years',
      avatar: 'ED'
    }
  ];

  const filteredProviders = providers.filter(provider => {
    const matchesSearch = provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         provider.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || provider.status === filterStatus;
    const matchesSpecialty = filterSpecialty === 'all' || provider.specialty === filterSpecialty;
    
    return matchesSearch && matchesStatus && matchesSpecialty;
  });

  const GridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProviders.map((provider) => (
        <Card key={provider.id} className="hover:shadow-lg transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {provider.avatar}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-900">{provider.name}</h3>
                <p className="text-gray-600">{provider.specialty}</p>
                <div className="flex items-center mt-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">
                    {provider.rating} ({provider.reviews} reviews)
                  </span>
                </div>
              </div>
              <Badge variant={provider.status === 'active' ? 'default' : 'secondary'}>
                {provider.status}
              </Badge>
            </div>
            
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                {provider.location}
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                {provider.phone}
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                {provider.email}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">{provider.patients}</p>
                <p className="text-sm text-gray-600">Patients</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-gray-900">{provider.experience}</p>
                <p className="text-sm text-gray-600">Experience</p>
              </div>
            </div>

            <Button className="w-full" variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              View Details
            </Button>
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
                <th className="text-left p-4 font-medium text-gray-900">Provider</th>
                <th className="text-left p-4 font-medium text-gray-900">Specialty</th>
                <th className="text-left p-4 font-medium text-gray-900">Rating</th>
                <th className="text-left p-4 font-medium text-gray-900">Location</th>
                <th className="text-left p-4 font-medium text-gray-900">Patients</th>
                <th className="text-left p-4 font-medium text-gray-900">Status</th>
                <th className="text-left p-4 font-medium text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProviders.map((provider) => (
                <tr key={provider.id} className="border-b hover:bg-gray-50">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold">
                        {provider.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{provider.name}</p>
                        <p className="text-sm text-gray-600">{provider.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-gray-900">{provider.specialty}</td>
                  <td className="p-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                      <span className="text-gray-900">{provider.rating}</span>
                      <span className="text-sm text-gray-600 ml-1">({provider.reviews})</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-900">{provider.location}</td>
                  <td className="p-4 text-gray-900">{provider.patients}</td>
                  <td className="p-4">
                    <Badge variant={provider.status === 'active' ? 'default' : 'secondary'}>
                      {provider.status}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <Button variant="outline" size="sm">
                      <Eye className="h-4 w-4 mr-1" />
                      View
                    </Button>
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
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Providers</h1>
                <p className="text-gray-600 mt-1">Manage your healthcare providers</p>
              </div>
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600">
                <Plus className="h-4 w-4 mr-2" />
                Add Provider
              </Button>
            </div>

            {/* Filters and Search */}
            <Card className="mb-6">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search providers..."
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

                    <Select value={filterSpecialty} onValueChange={setFilterSpecialty}>
                      <SelectTrigger className="w-40">
                        <SelectValue placeholder="Specialty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Specialties</SelectItem>
                        <SelectItem value="Cardiology">Cardiology</SelectItem>
                        <SelectItem value="Neurology">Neurology</SelectItem>
                        <SelectItem value="Pediatrics">Pediatrics</SelectItem>
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
                Showing {filteredProviders.length} of {providers.length} providers
              </p>
            </div>

            {/* Content */}
            {viewMode === 'grid' ? <GridView /> : <TableView />}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Provider;
