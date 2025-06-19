import React, { useState } from 'react';
import { 
  Users, 
  TrendingUp, 
  Calendar, 
  AlertTriangle, 
  CheckCircle,
  Clock,
  Filter,
  Search,
  Plus,
  Activity,
  Heart,
  Brain,
  FileText
} from 'lucide-react';

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Patients', value: '1,247', change: '+12%', icon: Users, color: 'text-blue-600 bg-blue-100' },
    { label: 'High Risk Cases', value: '89', change: '+5%', icon: AlertTriangle, color: 'text-red-600 bg-red-100' },
    { label: 'Assessments Today', value: '23', change: '+18%', icon: Activity, color: 'text-green-600 bg-green-100' },
    { label: 'Accuracy Rate', value: '98.7%', change: '+0.3%', icon: Brain, color: 'text-purple-600 bg-purple-100' }
  ];

  const recentPatients = [
    { id: '001', name: 'Sarah Johnson', age: 54, risk: 'High', score: 87, lastAssessment: '2 hours ago', status: 'Pending Review' },
    { id: '002', name: 'Michael Chen', age: 42, risk: 'Moderate', score: 65, lastAssessment: '4 hours ago', status: 'Reviewed' },
    { id: '003', name: 'Emma Williams', age: 38, risk: 'Low', score: 23, lastAssessment: '6 hours ago', status: 'Reviewed' },
    { id: '004', name: 'Robert Davis', age: 61, risk: 'High', score: 92, lastAssessment: '1 day ago', status: 'Follow-up Scheduled' },
    { id: '005', name: 'Lisa Garcia', age: 45, risk: 'Moderate', score: 58, lastAssessment: '1 day ago', status: 'Reviewed' }
  ];

  const upcomingAppointments = [
    { patient: 'Sarah Johnson', time: '10:00 AM', type: 'Follow-up Consultation', risk: 'High' },
    { patient: 'Robert Davis', time: '2:30 PM', type: 'Results Review', risk: 'High' },
    { patient: 'Michael Chen', time: '4:00 PM', type: 'Progress Check', risk: 'Moderate' }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'high': return 'text-red-700 bg-red-100';
      case 'moderate': return 'text-yellow-700 bg-yellow-100';
      case 'low': return 'text-green-700 bg-green-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'pending review': return 'text-orange-700 bg-orange-100';
      case 'reviewed': return 'text-green-700 bg-green-100';
      case 'follow-up scheduled': return 'text-blue-700 bg-blue-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Provider Dashboard</h1>
              <p className="text-gray-600 mt-2">Comprehensive liver health monitoring and patient management</p>
            </div>
            
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </button>
              
              <button className="flex items-center space-x-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                <Plus className="h-4 w-4" />
                <span>New Assessment</span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
                </div>
                <div className={`p-3 rounded-lg ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview', icon: Activity },
                { id: 'patients', label: 'Patient List', icon: Users },
                { id: 'appointments', label: 'Appointments', icon: Calendar },
                { id: 'analytics', label: 'Analytics', icon: TrendingUp }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-teal-500 text-teal-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Recent Assessments */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Assessments</h3>
                    <button className="text-teal-600 hover:text-teal-700 text-sm font-medium">View All</button>
                  </div>
                  
                  <div className="space-y-4">
                    {recentPatients.slice(0, 4).map((patient) => (
                      <div key={patient.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                            <span className="text-sm font-medium text-teal-600">
                              {patient.name.split(' ').map(n => n[0]).join('')}
                            </span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{patient.name}</p>
                            <p className="text-sm text-gray-600">Age {patient.age} • {patient.lastAssessment}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-3">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(patient.risk)}`}>
                            {patient.risk} Risk
                          </span>
                          <span className="text-sm font-medium text-gray-900">{patient.score}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Today's Appointments */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-gray-900">Today's Appointments</h3>
                    <button className="text-teal-600 hover:text-teal-700 text-sm font-medium">View Calendar</button>
                  </div>
                  
                  <div className="space-y-4">
                    {upcomingAppointments.map((appointment, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                            <Clock className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{appointment.patient}</p>
                            <p className="text-sm text-gray-600">{appointment.type}</p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <p className="text-sm font-medium text-gray-900">{appointment.time}</p>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(appointment.risk)}`}>
                            {appointment.risk}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'patients' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Patient Management</h3>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                      <input
                        type="text"
                        placeholder="Search patients..."
                        className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Patient</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Risk Level</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Score</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Last Assessment</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                        <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentPatients.map((patient) => (
                        <tr key={patient.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                                <span className="text-xs font-medium text-teal-600">
                                  {patient.name.split(' ').map(n => n[0]).join('')}
                                </span>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">{patient.name}</p>
                                <p className="text-sm text-gray-600">Age {patient.age}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRiskColor(patient.risk)}`}>
                              {patient.risk}
                            </span>
                          </td>
                          <td className="py-3 px-4 font-medium text-gray-900">{patient.score}%</td>
                          <td className="py-3 px-4 text-sm text-gray-600">{patient.lastAssessment}</td>
                          <td className="py-3 px-4">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(patient.status)}`}>
                              {patient.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <button className="text-teal-600 hover:text-teal-700 text-sm font-medium">
                              View Details
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'appointments' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Appointment Calendar</h3>
                <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                  <div className="text-center">
                    <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600">Calendar integration will be displayed here</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Analytics & Reporting</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <TrendingUp className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-600">Risk Distribution Chart</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
                    <div className="text-center">
                      <Activity className="h-12 w-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-600">Assessment Trends</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;