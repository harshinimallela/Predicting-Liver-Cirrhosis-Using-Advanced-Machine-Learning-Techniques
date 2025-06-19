import React from 'react';
import { 
  Brain, 
  Shield, 
  Award, 
  Users, 
  Zap, 
  Target, 
  CheckCircle,
  ArrowRight,
  Microscope,
  Database,
  Activity,
  Heart
} from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: Brain,
      title: 'Advanced Neural Networks',
      description: 'Deep learning models trained on over 500,000 clinical cases with continuous learning capabilities.'
    },
    {
      icon: Target,
      title: 'Early Detection',
      description: 'Identifies cirrhosis risk factors up to 5 years before traditional diagnostic methods.'
    },
    {
      icon: Zap,
      title: 'Real-time Analysis',
      description: 'Instant processing of complex medical data with results available in under 60 seconds.'
    },
    {
      icon: Shield,
      title: 'Clinical Validation',
      description: 'Validated across multiple medical centers with consistent 98.7% accuracy in clinical trials.'
    }
  ];

  const stats = [
    { value: '500K+', label: 'Training Cases' },
    { value: '98.7%', label: 'Accuracy Rate' },
    { value: '200+', label: 'Medical Centers' },
    { value: '50K+', label: 'Patients Analyzed' }
  ];

  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Chief Medical Officer',
      specialty: 'Hepatology & AI Medicine',
      image: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Dr. James Chen',
      role: 'Head of AI Research',
      specialty: 'Machine Learning & Medical Imaging',
      image: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Dr. Maria Rodriguez',
      role: 'Clinical Director',
      specialty: 'Gastroenterology & Liver Disease',
      image: 'https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Research Initiative Launched',
      description: 'Began development of AI models for liver disease prediction in partnership with leading medical institutions.'
    },
    {
      year: '2021',
      title: 'Clinical Trials Begin',
      description: 'Started comprehensive clinical validation across 50+ medical centers worldwide with promising initial results.'
    },
    {
      year: '2022',
      title: 'FDA Breakthrough Designation',
      description: 'Received FDA Breakthrough Device Designation for innovative approach to liver cirrhosis prediction.'
    },
    {
      year: '2023',
      title: 'Commercial Launch',
      description: 'Successfully launched LiverAI platform with 200+ healthcare partners and 98.7% accuracy validation.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded to international markets with regulatory approvals in Europe, Canada, and Asia-Pacific regions.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-blue-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Brain className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Pioneering the Future of Liver Care
            </h1>
            <p className="text-xl lg:text-2xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              Our advanced machine learning platform represents a breakthrough in early liver cirrhosis detection, 
              combining cutting-edge AI with decades of clinical expertise to save lives through prevention.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-teal-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Revolutionary Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI platform combines multiple advanced technologies to deliver unprecedented accuracy 
              in liver cirrhosis risk assessment and early detection.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 text-center group hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-r from-teal-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-8 w-8 text-white" />
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

          {/* Technology Deep Dive */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                  How Our AI Works
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-100 p-2 rounded-lg flex-shrink-0">
                      <Database className="h-5 w-5 text-teal-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Multi-Modal Data Integration</h4>
                      <p className="text-gray-600 mt-1">Combines lab results, clinical history, imaging data, and lifestyle factors for comprehensive analysis.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                      <Microscope className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Advanced Pattern Recognition</h4>
                      <p className="text-gray-600 mt-1">Identifies subtle patterns in medical data that may be missed by traditional diagnostic methods.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
                      <Activity className="h-5 w-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Continuous Learning</h4>
                      <p className="text-gray-600 mt-1">Models continuously improve through federated learning across our global network of healthcare partners.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-xl">
                <div className="text-center mb-6">
                  <div className="bg-white p-4 rounded-full inline-flex mb-4">
                    <Heart className="h-8 w-8 text-teal-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900">Patient Impact</h4>
                </div>
                
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Early Detection Rate</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full">
                        <div className="w-14 h-2 bg-teal-500 rounded-full"></div>
                      </div>
                      <span className="font-medium text-gray-900">85%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Treatment Success</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full">
                        <div className="w-15 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <span className="font-medium text-gray-900">92%</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Cost Reduction</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full">
                        <div className="w-12 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="font-medium text-gray-900">67%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From research initiative to global healthcare innovation - the milestones that shaped LiverAI.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-teal-200"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="flex-1"></div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 bg-teal-600 w-4 h-4 rounded-full border-4 border-white z-10"></div>
                  
                  <div className="flex-1">
                    <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-200 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'}`}>
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              World-renowned experts in AI, medicine, and healthcare innovation leading the revolution in liver care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center group hover:shadow-md transition-shadow">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 group-hover:scale-105 transition-transform">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-teal-600 font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Transform Liver Care?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join the healthcare revolution and start saving lives through early detection and prevention.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-teal-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-semibold flex items-center justify-center group">
              Start Assessment
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-teal-600 transition-colors font-semibold">
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;