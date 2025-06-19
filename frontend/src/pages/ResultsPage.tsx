import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  TrendingUp, 
  Activity, 
  Heart,
  Download,
  Share,
  Calendar,
  FileText,
  Target,
  Brain
} from 'lucide-react';

const ResultsPage = () => {
  const location = useLocation();
  const assessmentData = location.state?.assessmentData || {};

  // Simulate AI prediction results
  const results = {
    riskLevel: 'Moderate',
    riskScore: 67,
    confidence: 94,
    recommendation: 'Follow-up assessment recommended in 6 months',
    factors: [
      { name: 'Elevated Bilirubin', impact: 'High', value: assessmentData.bilirubin || 'N/A' },
      { name: 'Low Albumin', impact: 'High', value: assessmentData.albumin || 'N/A' },
      { name: 'Platelet Count', impact: 'Medium', value: assessmentData.platelets || 'N/A' },
      { name: 'Age Factor', impact: 'Medium', value: assessmentData.age || 'N/A' },
      { name: 'Clinical Stage', impact: 'High', value: assessmentData.stage || 'N/A' }
    ]
  };

  const getRiskColor = (level: string) => {
    switch (level.toLowerCase()) {
      case 'low': return 'text-green-700 bg-green-100';
      case 'moderate': return 'text-yellow-700 bg-yellow-100';
      case 'high': return 'text-red-700 bg-red-100';
      default: return 'text-gray-700 bg-gray-100';
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level.toLowerCase()) {
      case 'low': return CheckCircle;
      case 'moderate': return Info;
      case 'high': return AlertTriangle;
      default: return Info;
    }
  };

  const RiskIcon = getRiskIcon(results.riskLevel);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-teal-500 to-blue-500 p-3 rounded-full">
              <Brain className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            AI Analysis Complete
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Your liver health assessment has been processed using advanced machine learning algorithms. 
            Review the results below and consult with your healthcare provider.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Results */}
          <div className="lg:col-span-2 space-y-8">
            {/* Risk Assessment Card */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Risk Assessment</h2>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-green-600">Analysis Complete</span>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className={`inline-flex items-center px-4 py-2 rounded-full font-medium mb-3 ${getRiskColor(results.riskLevel)}`}>
                    <RiskIcon className="h-5 w-5 mr-2" />
                    {results.riskLevel} Risk
                  </div>
                  <p className="text-sm text-gray-600">Overall Assessment</p>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{results.riskScore}%</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div 
                      className="bg-gradient-to-r from-yellow-500 to-orange-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${results.riskScore}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600">Risk Score</p>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 mb-1">{results.confidence}%</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                    <div 
                      className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${results.confidence}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600">Confidence Level</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Target className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-medium text-blue-800">Recommendation</p>
                    <p className="text-blue-700 mt-1">{results.recommendation}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Risk Factors */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Risk Factors</h2>
              
              <div className="space-y-4">
                {results.factors.map((factor, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${
                        factor.impact === 'High' ? 'bg-red-500' :
                        factor.impact === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                      }`}></div>
                      <span className="font-medium text-gray-900">{factor.name}</span>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-gray-600">{factor.value}</span>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        factor.impact === 'High' ? 'bg-red-100 text-red-700' :
                        factor.impact === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                      }`}>
                        {factor.impact} Impact
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Trend Analysis */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Risk Trend Analysis</h2>
              
              <div className="h-64 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <TrendingUp className="h-16 w-16 text-teal-600 mx-auto mb-4" />
                  <p className="text-gray-600">Historical trend analysis will be displayed here</p>
                  <p className="text-sm text-gray-500 mt-2">Based on previous assessments and monitoring data</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 px-4 py-3 bg-teal-50 text-teal-700 rounded-lg hover:bg-teal-100 transition-colors">
                  <Download className="h-4 w-4" />
                  <span>Download Report</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 px-4 py-3 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
                  <Share className="h-4 w-4" />
                  <span>Share with Provider</span>
                </button>
                
                <button className="w-full flex items-center space-x-3 px-4 py-3 bg-green-50 text-green-700 rounded-lg hover:bg-green-100 transition-colors">
                  <Calendar className="h-4 w-4" />
                  <span>Schedule Follow-up</span>
                </button>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recommended Next Steps</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-teal-600">1</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Consult Healthcare Provider</p>
                    <p className="text-sm text-gray-600 mt-1">Discuss these results with your physician for professional interpretation.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-teal-600">2</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Additional Testing</p>
                    <p className="text-sm text-gray-600 mt-1">Consider additional liver function tests or imaging studies.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-teal-600">3</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Lifestyle Modifications</p>
                    <p className="text-sm text-gray-600 mt-1">Implement recommended dietary and lifestyle changes.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Clinical Note */}
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-yellow-800">Important Disclaimer</p>
                  <p className="text-yellow-700 mt-1">
                    This AI analysis is for screening purposes only and does not replace professional medical diagnosis or treatment recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4 mt-12">
          <Link 
            to="/assessment"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
          >
            New Assessment
          </Link>
          
          <Link 
            to="/dashboard"
            className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium flex items-center space-x-2"
          >
            <Activity className="h-4 w-4" />
            <span>View Dashboard</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;