
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, CreditCard, Bell, RefreshCw, Settings, BarChart, Palette, Smartphone, Shield } from 'lucide-react';

const featureTabs = [
  {
    id: 'scheduling',
    label: 'Scheduling & Classes',
    icon: Calendar,
    features: [
      {
        icon: Calendar,
        title: 'Recurring Sessions',
        description: 'Set up classes that repeat automatically with smart scheduling'
      },
      {
        icon: RefreshCw,
        title: 'Buffer Times',
        description: 'Automatic buffer periods between sessions for cleanup and setup'
      },
      {
        icon: Users,
        title: 'Waitlist Management',
        description: 'Smart waitlists that automatically fill spots from cancellations'
      },
      {
        icon: Settings,
        title: 'Zoom Integration',
        description: 'Seamless virtual class hosting with automatic meeting links'
      }
    ]
  },
  {
    id: 'clients',
    label: 'Clients & Payments',
    icon: Users,
    features: [
      {
        icon: Users,
        title: 'Intake Forms',
        description: 'Custom forms and waivers for new client onboarding'
      },
      {
        icon: BarChart,
        title: 'Attendance Tracking',
        description: 'Detailed attendance history and client engagement analytics'
      },
      {
        icon: CreditCard,
        title: 'Payment Processing',
        description: 'Integrated Stripe and PayPal for seamless transactions'
      },
      {
        icon: Settings,
        title: 'Credit Packages',
        description: 'Flexible package deals and bundle pricing options'
      }
    ]
  },
  {
    id: 'automation',
    label: 'Notifications & Calendar',
    icon: Bell,
    features: [
      {
        icon: Bell,
        title: 'SMS & Email Reminders',
        description: 'Automated booking confirmations and class reminders'
      },
      {
        icon: RefreshCw,
        title: 'Calendar Sync',
        description: 'Two-way sync with Google Calendar, Outlook, and iCal'
      },
      {
        icon: Settings,
        title: 'Zapier Integration',
        description: 'Connect with 3000+ apps through Zapier and webhooks'
      },
      {
        icon: BarChart,
        title: 'Smart Automation',
        description: 'Custom triggers and workflows for routine tasks'
      }
    ]
  },
  {
    id: 'advanced',
    label: 'Branding & Analytics',
    icon: Palette,
    features: [
      {
        icon: Palette,
        title: 'Custom Branding',
        description: 'White-label booking widgets with your domain and styling'
      },
      {
        icon: BarChart,
        title: 'Analytics & Reports',
        description: 'Detailed insights into class popularity and revenue trends'
      },
      {
        icon: Smartphone,
        title: 'Mobile Apps',
        description: 'Native iOS and Android apps for clients and instructors'
      },
      {
        icon: Shield,
        title: 'Security & Compliance',
        description: 'GDPR compliant with PCI-DSS payment security'
      }
    ]
  }
];

const FeaturesSection = () => {
  const [activeTab, setActiveTab] = useState('scheduling');

  return (
    <section className="py-24 px-4 bg-white" id="features">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-['Poppins']">
            Everything You Need to
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Run Your Studio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-['Lato']">
            Comprehensive tools designed specifically for yoga and pilates professionals
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 bg-purple-50 p-2 rounded-2xl h-auto">
            {featureTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <TabsTrigger
                  key={tab.id}
                  value={tab.id}
                  className="flex items-center space-x-2 py-4 px-6 rounded-xl data-[state=active]:bg-white data-[state=active]:shadow-lg transition-all duration-200 font-['Poppins']"
                >
                  <Icon className="h-5 w-5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {featureTabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {tab.features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card
                      key={index}
                      className="hover:shadow-lg transition-all duration-300 border-purple-100 hover:border-purple-200 bg-gradient-to-br from-white to-purple-50/30"
                    >
                      <CardHeader className="pb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <CardTitle className="text-lg font-semibold text-gray-800 font-['Poppins']">
                            {feature.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-gray-600 leading-relaxed font-['Lato']">
                          {feature.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default FeaturesSection;
