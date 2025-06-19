import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Activity, 
  Heart, 
  Thermometer, 
  Scale, 
  AlertCircle, 
  CheckCircle,
  ArrowRight,
  Save,
  RefreshCw,
  MapPin,
  Clock,
  Droplets,
  TestTube,
  Stethoscope,
  Users as UsersIcon
} from 'lucide-react';

const AssessmentPage = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Demographics & Location
    age: '',
    gender: '',
    place: '',
    
    // Alcohol History
    alcohol_duration: '',
    alcohol_quantity: '',
    alcohol_type: '',
    
    // Medical History
    diabetes: '',
    blood_pressure: '',
    obesity: '',
    family_history: '',
    
    // Hematology
    hemoglobin: '',
    pcv: '',
    rbc: '',
    mcv: '',
    mch: '',
    mchc: '',
    total_count: '',
    polymorphs: '',
    lymphocytes: '',
    monocytes: '',
    eosinophils: '',
    basophils: '',
    platelet_count: '',
    
    // Liver Function Tests
    direct_bilirubin: '',
    indirect_bilirubin: '',
    total_protein: '',
    albumin: '',
    globulin: '',
    alkaline_phosphatase: '',
    sgot_ast: '',
    
    // Imaging
    usg_abdomen: ''
  });

  const steps = [
    { id: 1, title: 'Demographics', icon: User },
    { id: 2, title: 'Medical History', icon: Heart },
    { id: 3, title: 'Hematology', icon: Droplets },
    { id: 4, title: 'Liver Function', icon: TestTube },
    { id: 5, title: 'Imaging & Review', icon: Activity }
  ];

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form and navigate to results
      navigate('/results', { state: { assessmentData: formData } });
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Patient Demographics & Location</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Age (years)</label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  placeholder="Enter age"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Location (Place of residence)
                </label>
                <input
                  type="text"
                  value={formData.place}
                  onChange={(e) => handleInputChange('place', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  placeholder="Enter city/region"
                />
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-3">
                <Clock className="inline h-4 w-4 mr-1" />
                Alcohol Consumption History
              </h4>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-700 mb-2">Duration (years)</label>
                  <input
                    type="number"
                    value={formData.alcohol_duration}
                    onChange={(e) => handleInputChange('alcohol_duration', e.target.value)}
                    className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Years"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-700 mb-2">Quantity (quarters/day)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.alcohol_quantity}
                    onChange={(e) => handleInputChange('alcohol_quantity', e.target.value)}
                    className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Quarters per day"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-blue-700 mb-2">Type of Alcohol</label>
                  <select
                    value={formData.alcohol_type}
                    onChange={(e) => handleInputChange('alcohol_type', e.target.value)}
                    className="w-full px-3 py-2 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  >
                    <option value="">Select type</option>
                    <option value="beer">Beer</option>
                    <option value="wine">Wine</option>
                    <option value="spirits">Spirits/Hard Liquor</option>
                    <option value="mixed">Mixed</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        );
        
      case 2:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Medical History & Risk Factors</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Diabetes Status</label>
                <select
                  value={formData.diabetes}
                  onChange={(e) => handleInputChange('diabetes', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                >
                  <option value="">Select diabetes status</option>
                  <option value="no">No Diabetes</option>
                  <option value="type1">Type 1 Diabetes</option>
                  <option value="type2">Type 2 Diabetes</option>
                  <option value="prediabetes">Pre-diabetes</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Blood Pressure (mmHg)</label>
                <input
                  type="text"
                  value={formData.blood_pressure}
                  onChange={(e) => handleInputChange('blood_pressure', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                  placeholder="e.g., 120/80"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Obesity Status</label>
                <select
                  value={formData.obesity}
                  onChange={(e) => handleInputChange('obesity', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                >
                  <option value="">Select obesity status</option>
                  <option value="normal">Normal Weight</option>
                  <option value="overweight">Overweight</option>
                  <option value="obese_class1">Obese Class I</option>
                  <option value="obese_class2">Obese Class II</option>
                  <option value="obese_class3">Obese Class III</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <UsersIcon className="inline h-4 w-4 mr-1" />
                  Family History of Cirrhosis
                </label>
                <select
                  value={formData.family_history}
                  onChange={(e) => handleInputChange('family_history', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                >
                  <option value="">Select family history</option>
                  <option value="no">No Family History</option>
                  <option value="parent">Parent with Cirrhosis</option>
                  <option value="sibling">Sibling with Cirrhosis</option>
                  <option value="grandparent">Grandparent with Cirrhosis</option>
                  <option value="multiple">Multiple Family Members</option>
                </select>
              </div>
            </div>
          </div>
        );
        
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              <Droplets className="inline h-6 w-6 mr-2 text-red-500" />
              Hematology Parameters
            </h3>
            
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-red-800 mb-3">Complete Blood Count (CBC)</h4>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-red-700 mb-2">Hemoglobin (g/dL)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.hemoglobin}
                    onChange={(e) => handleInputChange('hemoglobin', e.target.value)}
                    className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="12.0-16.0"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-red-700 mb-2">PCV (%)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.pcv}
                    onChange={(e) => handleInputChange('pcv', e.target.value)}
                    className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="36-46"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-red-700 mb-2">RBC (million cells/μL)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.rbc}
                    onChange={(e) => handleInputChange('rbc', e.target.value)}
                    className="w-full px-3 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="4.0-5.5"
                  />
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-purple-800 mb-3">Red Blood Cell Indices</h4>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">MCV (fL/cell)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.mcv}
                    onChange={(e) => handleInputChange('mcv', e.target.value)}
                    className="w-full px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="80-100"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">MCH (pg/cell)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.mch}
                    onChange={(e) => handleInputChange('mch', e.target.value)}
                    className="w-full px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="27-32"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-purple-700 mb-2">MCHC (g/dL)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.mchc}
                    onChange={(e) => handleInputChange('mchc', e.target.value)}
                    className="w-full px-3 py-2 border border-purple-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    placeholder="32-36"
                  />
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <h4 className="font-medium text-green-800 mb-3">White Blood Cell Differential</h4>
              
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-2">Total Count</label>
                  <input
                    type="number"
                    value={formData.total_count}
                    onChange={(e) => handleInputChange('total_count', e.target.value)}
                    className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="4000-11000"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-2">Platelet Count (lakhs/mm³)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.platelet_count}
                    onChange={(e) => handleInputChange('platelet_count', e.target.value)}
                    className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="1.5-4.5"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-5 gap-3">
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-2">Polymorphs (%)</label>
                  <input
                    type="number"
                    value={formData.polymorphs}
                    onChange={(e) => handleInputChange('polymorphs', e.target.value)}
                    className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="50-70"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-2">Lymphocytes (%)</label>
                  <input
                    type="number"
                    value={formData.lymphocytes}
                    onChange={(e) => handleInputChange('lymphocytes', e.target.value)}
                    className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="20-40"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-2">Monocytes (%)</label>
                  <input
                    type="number"
                    value={formData.monocytes}
                    onChange={(e) => handleInputChange('monocytes', e.target.value)}
                    className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="2-8"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-2">Eosinophils (%)</label>
                  <input
                    type="number"
                    value={formData.eosinophils}
                    onChange={(e) => handleInputChange('eosinophils', e.target.value)}
                    className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="1-4"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-green-700 mb-2">Basophils (%)</label>
                  <input
                    type="number"
                    value={formData.basophils}
                    onChange={(e) => handleInputChange('basophils', e.target.value)}
                    className="w-full px-3 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="0-1"
                  />
                </div>
              </div>
            </div>
          </div>
        );
        
      case 4:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">
              <TestTube className="inline h-6 w-6 mr-2 text-blue-500" />
              Liver Function Tests
            </h3>
            
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-yellow-800 mb-3">Bilirubin Levels</h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-yellow-700 mb-2">Direct Bilirubin (mg/dL)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.direct_bilirubin}
                    onChange={(e) => handleInputChange('direct_bilirubin', e.target.value)}
                    className="w-full px-3 py-2 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                    placeholder="0.0-0.3"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-yellow-700 mb-2">Indirect Bilirubin (mg/dL)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.indirect_bilirubin}
                    onChange={(e) => handleInputChange('indirect_bilirubin', e.target.value)}
                    className="w-full px-3 py-2 border border-yellow-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-colors"
                    placeholder="0.2-0.8"
                  />
                </div>
              </div>
            </div>

            <div className="bg-teal-50 border border-teal-200 p-4 rounded-lg mb-6">
              <h4 className="font-medium text-teal-800 mb-3">Protein Studies</h4>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-teal-700 mb-2">Total Protein (g/dL)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.total_protein}
                    onChange={(e) => handleInputChange('total_protein', e.target.value)}
                    className="w-full px-3 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="6.0-8.3"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-teal-700 mb-2">Albumin (g/dL)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.albumin}
                    onChange={(e) => handleInputChange('albumin', e.target.value)}
                    className="w-full px-3 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="3.5-5.0"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-teal-700 mb-2">Globulin (g/dL)</label>
                  <input
                    type="number"
                    step="0.1"
                    value={formData.globulin}
                    onChange={(e) => handleInputChange('globulin', e.target.value)}
                    className="w-full px-3 py-2 border border-teal-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                    placeholder="2.0-3.5"
                  />
                </div>
              </div>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 p-4 rounded-lg">
              <h4 className="font-medium text-indigo-800 mb-3">Liver Enzymes</h4>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-indigo-700 mb-2">Alkaline Phosphatase (U/L)</label>
                  <input
                    type="number"
                    value={formData.alkaline_phosphatase}
                    onChange={(e) => handleInputChange('alkaline_phosphatase', e.target.value)}
                    className="w-full px-3 py-2 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="44-147"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-indigo-700 mb-2">SGOT/AST (U/L)</label>
                  <input
                    type="number"
                    value={formData.sgot_ast}
                    onChange={(e) => handleInputChange('sgot_ast', e.target.value)}
                    className="w-full px-3 py-2 border border-indigo-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    placeholder="10-40"
                  />
                </div>
              </div>
            </div>
          </div>
        );
        
      case 5:
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Imaging & Assessment Review</h3>
            
            <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg mb-6">
              <h4 className="font-medium text-gray-800 mb-4">
                <Stethoscope className="inline h-5 w-5 mr-2" />
                Ultrasound Abdomen
              </h4>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">USG Abdomen (Liver Status)</label>
                <select
                  value={formData.usg_abdomen}
                  onChange={(e) => handleInputChange('usg_abdomen', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-colors"
                >
                  <option value="">Select liver appearance</option>
                  <option value="normal">Normal Liver</option>
                  <option value="diffuse_changes">Diffuse Liver Changes</option>
                  <option value="fatty_infiltration">Fatty Infiltration</option>
                  <option value="coarse_echotexture">Coarse Echotexture</option>
                  <option value="cirrhotic_changes">Cirrhotic Changes</option>
                </select>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-4">Assessment Summary</h4>
              
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Demographics & History</h5>
                  <div className="space-y-1 text-gray-600">
                    <p>Age: {formData.age || 'Not specified'} years</p>
                    <p>Gender: {formData.gender || 'Not specified'}</p>
                    <p>Location: {formData.place || 'Not specified'}</p>
                    <p>Alcohol Duration: {formData.alcohol_duration || 'Not specified'} years</p>
                    <p>Family History: {formData.family_history || 'Not specified'}</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Key Lab Values</h5>
                  <div className="space-y-1 text-gray-600">
                    <p>Hemoglobin: {formData.hemoglobin || 'Not specified'} g/dL</p>
                    <p>Albumin: {formData.albumin || 'Not specified'} g/dL</p>
                    <p>Direct Bilirubin: {formData.direct_bilirubin || 'Not specified'} mg/dL</p>
                    <p>SGOT/AST: {formData.sgot_ast || 'Not specified'} U/L</p>
                    <p>Platelet Count: {formData.platelet_count || 'Not specified'} lakhs/mm³</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Medical Conditions</h5>
                  <div className="space-y-1 text-gray-600">
                    <p>Diabetes: {formData.diabetes || 'Not specified'}</p>
                    <p>Blood Pressure: {formData.blood_pressure || 'Not specified'}</p>
                    <p>Obesity: {formData.obesity || 'Not specified'}</p>
                  </div>
                </div>
                
                <div>
                  <h5 className="font-medium text-gray-900 mb-3">Imaging</h5>
                  <div className="space-y-1 text-gray-600">
                    <p>USG Abdomen: {formData.usg_abdomen || 'Not specified'}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                <div className="text-sm">
                  <p className="text-blue-800 font-medium">Medical Disclaimer</p>
                  <p className="text-blue-700 mt-1">
                    This AI-powered assessment is designed for screening and educational purposes only. 
                    Results should always be interpreted by qualified healthcare professionals and do not 
                    replace comprehensive medical evaluation or clinical judgment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`relative flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors ${
                  currentStep >= step.id 
                    ? 'bg-teal-600 border-teal-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-400'
                }`}>
                  <step.icon className="h-5 w-5" />
                  {currentStep > step.id && (
                    <CheckCircle className="absolute -top-1 -right-1 h-5 w-5 text-green-500 bg-white rounded-full" />
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 lg:w-24 h-1 mx-2 lg:mx-4 transition-colors ${
                    currentStep > step.id ? 'bg-teal-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
          
          <div className="flex justify-between mt-4">
            {steps.map((step) => (
              <span key={step.id} className={`text-xs lg:text-sm font-medium ${
                currentStep >= step.id ? 'text-teal-600' : 'text-gray-400'
              }`}>
                {step.title}
              </span>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          {renderStepContent()}
          
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-12 pt-8 border-t border-gray-200">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              Previous
            </button>
            
            <div className="flex space-x-4">
              <button className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                <Save className="h-4 w-4" />
                <span>Save Draft</span>
              </button>
              
              <button
                onClick={handleNext}
                className="flex items-center space-x-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium"
              >
                <span>{currentStep === 5 ? 'Generate AI Analysis' : 'Next'}</span>
                {currentStep === 5 ? (
                  <RefreshCw className="h-4 w-4" />
                ) : (
                  <ArrowRight className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentPage;