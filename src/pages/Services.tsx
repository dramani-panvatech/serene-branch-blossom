
import React, { useState } from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import AdminSidebar from '../components/dashboard/AdminSidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Plus, Share, MoreHorizontal, Clock, DollarSign, Users, Settings, Edit, Trash2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('services');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = [
    { id: 'services', name: 'Services', count: 6 },
    { id: 'classes', name: 'Classes', count: 3 },
    { id: 'consultations', name: 'Consultations', count: 4 }
  ];

  const services = [
    {
      id: 1,
      name: 'Initial Consultation',
      duration: '60 mins',
      price: '$150',
      icon: '🩺',
      category: 'services',
      description: 'Comprehensive health assessment and diagnosis',
      status: 'active',
      bookings: 45
    },
    {
      id: 2,
      name: 'Follow-up Visit',
      duration: '30 mins',
      price: '$75',
      icon: '📋',
      category: 'services',
      description: 'Follow-up appointment for ongoing care',
      status: 'active',
      bookings: 32
    },
    {
      id: 3,
      name: 'Therapy Session',
      duration: '45 mins',
      price: '$120',
      icon: '🧠',
      category: 'services',
      description: 'Individual therapy and counseling session',
      status: 'active',
      bookings: 28
    },
    {
      id: 4,
      name: 'Health Screening',
      duration: '90 mins',
      price: '$200',
      icon: '🔬',
      category: 'services',
      description: 'Comprehensive health screening and tests',
      status: 'active',
      bookings: 15
    },
    {
      id: 5,
      name: 'Wellness Workshop',
      duration: '120 mins',
      price: '$50',
      icon: '🧘',
      category: 'classes',
      description: 'Group wellness and mindfulness workshop',
      status: 'active',
      bookings: 67
    },
    {
      id: 6,
      name: 'Nutrition Class',
      duration: '90 mins',
      price: '$40',
      icon: '🥗',
      category: 'classes',
      description: 'Learn about healthy eating and nutrition',
      status: 'active',
      bookings: 42
    }
  ];

  const filteredServices = services.filter(service => 
    service.category === selectedCategory &&
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AdminSidebar />
        <main className="flex-1 p-6 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <Settings className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Services & Classes</h1>
                  <p className="text-gray-600">Manage your services, classes, and offerings</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm">
                  <Share className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600">
                      <Plus className="h-4 w-4 mr-2" />
                      New Service
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>Create New Service</DialogTitle>
                    </DialogHeader>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="serviceName">Service Name</Label>
                          <Input id="serviceName" placeholder="Enter service name" />
                        </div>
                        <div>
                          <Label htmlFor="duration">Duration</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select duration" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="15">15 minutes</SelectItem>
                              <SelectItem value="30">30 minutes</SelectItem>
                              <SelectItem value="45">45 minutes</SelectItem>
                              <SelectItem value="60">60 minutes</SelectItem>
                              <SelectItem value="90">90 minutes</SelectItem>
                              <SelectItem value="120">120 minutes</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="price">Price</Label>
                          <Input id="price" placeholder="$0.00" />
                        </div>
                        <div>
                          <Label htmlFor="category">Category</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="services">Services</SelectItem>
                              <SelectItem value="classes">Classes</SelectItem>
                              <SelectItem value="consultations">Consultations</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="description">Description</Label>
                          <Textarea id="description" placeholder="Describe your service..." rows={8} />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-2 mt-4">
                      <Button variant="outline">Cancel</Button>
                      <Button>Create Service</Button>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                      <Settings className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Total Services</p>
                      <p className="text-2xl font-bold text-gray-900">13</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      <Users className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Bookings</p>
                      <p className="text-2xl font-bold text-gray-900">229</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                      <DollarSign className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Monthly Revenue</p>
                      <p className="text-2xl font-bold text-gray-900">$12.5K</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-yellow-100 rounded-lg flex items-center justify-center mr-3">
                      <Clock className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">Avg Duration</p>
                      <p className="text-2xl font-bold text-gray-900">52m</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex gap-6">
              {/* Categories Sidebar */}
              <div className="w-64">
                <Card className="p-4">
                  <div className="space-y-2">
                    <h3 className="font-semibold text-gray-900 mb-3">Categories</h3>
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "ghost"}
                        className="w-full justify-between"
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        <span>{category.name}</span>
                        <Badge variant="secondary">{category.count}</Badge>
                      </Button>
                    ))}
                  </div>
                </Card>
              </div>
              
              {/* Main Content */}
              <div className="flex-1">
                {/* Controls */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-semibold capitalize">
                    {selectedCategory} ({filteredServices.length})
                  </h2>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input 
                        placeholder="Search services..." 
                        className="pl-10 w-80"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                    <div className="flex border rounded-lg">
                      <Button
                        variant={viewMode === 'grid' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setViewMode('grid')}
                      >
                        Grid
                      </Button>
                      <Button
                        variant={viewMode === 'list' ? 'default' : 'ghost'}
                        size="sm"
                        onClick={() => setViewMode('list')}
                      >
                        List
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Services Grid/List */}
                {viewMode === 'grid' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredServices.map((service) => (
                      <Card key={service.id} className="hover:shadow-lg transition-shadow duration-200">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="text-2xl">{service.icon}</div>
                              <div>
                                <CardTitle className="text-lg">{service.name}</CardTitle>
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                  <Clock className="h-3 w-3" />
                                  <span>{service.duration}</span>
                                  <span>•</span>
                                  <span className="font-semibold text-green-600">{service.price}</span>
                                </div>
                              </div>
                            </div>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline" className="text-xs">
                                <Users className="h-3 w-3 mr-1" />
                                {service.bookings} bookings
                              </Badge>
                              <Badge variant="secondary" className="text-xs">
                                {service.status}
                              </Badge>
                            </div>
                            <div className="flex space-x-1">
                              <Button variant="outline" size="sm">
                                <Edit className="h-3 w-3" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Share className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredServices.map((service) => (
                      <Card key={service.id}>
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                              <div className="text-3xl">{service.icon}</div>
                              <div>
                                <h3 className="text-lg font-semibold">{service.name}</h3>
                                <p className="text-sm text-gray-600">{service.description}</p>
                                <div className="flex items-center space-x-4 mt-2">
                                  <span className="text-sm text-gray-500 flex items-center">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {service.duration}
                                  </span>
                                  <span className="text-sm font-semibold text-green-600">{service.price}</span>
                                  <Badge variant="outline" className="text-xs">
                                    <Users className="h-3 w-3 mr-1" />
                                    {service.bookings} bookings
                                  </Badge>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4 mr-2" />
                                Edit
                              </Button>
                              <Button variant="outline" size="sm">
                                <Share className="h-4 w-4 mr-2" />
                                Share
                              </Button>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Services;
