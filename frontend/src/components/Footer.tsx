import React from 'react';
import { Activity, Brain, Shield, Award, Globe, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Activity className="h-8 w-8 text-teal-400" />
                <Brain className="h-4 w-4 text-blue-400 absolute -top-1 -right-1" />
              </div>
              <span className="text-xl font-bold">LiverAI</span>
            </div>
            <p className="text-gray-300 text-sm">
              Revolutionizing liver care with advanced machine learning for early cirrhosis detection and prevention.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-1 text-xs text-gray-400">
                <Shield className="h-4 w-4" />
                <span>HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-gray-400">
                <Award className="h-4 w-4" />
                <span>FDA Approved</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Patient Assessment</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Provider Dashboard</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Clinical Integration</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">API Documentation</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-teal-400 transition-colors">Clinical Studies</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Research Papers</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Best Practices</a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors">Support Center</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>clinical@liverai.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-4 w-4" />
                <span>Available worldwide</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>24/7 Clinical Support</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 LiverAI. All rights reserved. Not for diagnostic use without physician consultation.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-teal-400 transition-colors">HIPAA Notice</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;