
import React from 'react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  return (
    <section className="py-24 px-4 bg-white" id="pricing">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Flexible
            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your studio size and needs
          </p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 md:p-12 rounded-3xl shadow-xl border border-purple-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Everything Your Studio Needs
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Unlimited classes and bookings</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>All payment integrations included</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Multi-location support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Mobile apps for iOS & Android</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>24/7 customer support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Custom branding options</span>
                </li>
              </ul>
            </div>
            
            <div className="text-center">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-600 mb-2">Starting at</h4>
                <div className="text-4xl font-bold text-gray-800 mb-1">
                  $49<span className="text-lg text-gray-500">/month</span>
                </div>
                <p className="text-gray-500 mb-6">Per location • Billed annually</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Monthly billing:</span>
                    <span className="font-medium">$59/month</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Per-user add-ons:</span>
                    <span className="font-medium">Available</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Credit bundles:</span>
                    <span className="font-medium">Supported</span>
                  </div>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full py-3">
                  Start Free Trial
                </Button>
                <p className="text-xs text-gray-500 mt-2">No credit card required</p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution for enterprise or franchise operations?
          </p>
          <Button variant="outline" className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 rounded-full px-8">
            Contact Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
