import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Shield, 
  Zap, 
  Users, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  ArrowRight,
  Stethoscope,
  Activity,
  Clock,
  Target
} from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced AI Analysis',
      description: 'State-of-the-art machine learning models trained on thousands of clinical cases for unprecedented accuracy.'
    },
    {
      icon: Clock,
      title: 'Real-time Results',
      description: 'Get comprehensive liver health assessments in minutes, not days, enabling faster clinical decisions.'
    },
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Enterprise-grade security and privacy protection for all patient data and medical information.'
    },
    {
      icon: Target,
      title: 'Early Detection',
      description: 'Identify cirrhosis risk factors years before traditional methods, enabling proactive treatment.'
    }
  ];

  const stats = [
    { value: '98.7%', label: 'Prediction Accuracy' },
    { value: '50,000+', label: 'Patients Analyzed' },
    { value: '200+', label: 'Healthcare Partners' },
    { value: '85%', label: 'Early Detection Rate' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50 pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div className="mb-12 lg:mb-0">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-teal-100 p-2 rounded-lg">
                  <Brain className="h-6 w-6 text-teal-600" />
                </div>
                <span className="text-sm font-medium text-teal-700 bg-teal-100 px-3 py-1 rounded-full">
                  AI-Powered Healthcare
                </span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Revolutionizing
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600"> Liver Care</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Advanced machine learning technology that predicts liver cirrhosis with unprecedented accuracy, 
                enabling early intervention and improved patient outcomes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  to="/assessment"
                  className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors font-semibold flex items-center justify-center group"
                >
                  Start Assessment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/about"
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-teal-600 hover:text-teal-600 transition-colors font-semibold flex items-center justify-center"
                >
                  Learn More
                </Link>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Shield className="h-4 w-4" />
                  <span>HIPAA Compliant</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Award className="h-4 w-4" />
                  <span>FDA Approved</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="h-4 w-4" />
                  <span>Clinically Validated</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Live Analysis</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-green-600">Processing</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Risk Assessment</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div className="w-16 h-2 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">67%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Confidence Level</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div className="w-22 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">94%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Data Quality</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-gray-200 rounded-full">
                        <div className="w-20 h-2 bg-gradient-to-r from-teal-500 to-green-500 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-gray-900">85%</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Activity className="h-5 w-5 text-teal-600" />
                    <span className="font-medium text-gray-900">Analysis Complete</span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Patient shows moderate risk factors. Recommend follow-up assessment in 6 months.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Advanced Technology for Better Care
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI with clinical expertise to deliver 
              the most accurate liver health assessments available today.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                <div className="bg-gradient-to-r from-teal-500 to-blue-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Liver Care?
            </h2>
            <p className="text-xl text-teal-100 mb-8">
              Join hundreds of healthcare providers using LiverAI to improve patient outcomes 
              and detect liver cirrhosis earlier than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/assessment"
                className="bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold flex items-center justify-center group"
              >
                Start Patient Assessment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                to="/dashboard"
                className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-teal-600 transition-colors font-semibold flex items-center justify-center"
              >
                <Stethoscope className="mr-2 h-5 w-5" />
                Provider Dashboard
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;