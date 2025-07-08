
import React from 'react';
import { Calendar } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Calendar className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold">FlowTime Studio</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              The complete booking and management solution for yoga and pilates studios. 
              Simplify your operations and grow your wellness business.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-2xl">📘</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-2xl">📷</a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors text-2xl">📺</a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-purple-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#integrations" className="text-gray-400 hover:text-white transition-colors">Integrations</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-purple-400">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        {/* Language Selector & Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 FlowTime Studio. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <select className="bg-gray-800 text-white px-3 py-1 rounded border border-gray-600 text-sm">
              <option>🇺🇸 English</option>
              <option>🇪🇸 Español</option>
              <option>🇫🇷 Français</option>
              <option>🇩🇪 Deutsch</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
