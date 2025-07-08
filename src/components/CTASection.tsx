
import React from 'react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-purple-600 via-blue-600 to-green-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-white/5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Ready to Transform
          <span className="block">Your Studio?</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join thousands of wellness professionals who have simplified their operations and grown their businesses with FlowTime.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold">
            Start Free Trial
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4 text-lg rounded-full shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold">
            Schedule Demo
          </Button>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-white/80">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>No credit card required</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>30-day free trial</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
