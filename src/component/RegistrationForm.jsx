import React, { useState } from 'react'

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        college: ''
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
      };
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Your Free PGDM Guide</h3>
              <p className="text-gray-600">Download comprehensive guide with detailed college comparisons</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-1">
                  Preferred College
                </label>
                <select
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Select a college</option>
                  <option value="lbsim">LBSIM, Delhi</option>
                  <option value="apim">Asia‑Pacific Institute of Management</option>
                  <option value="apeejay">Apeejay School of Management</option>
                  <option value="imi">International Management Institute (IMI)</option>
                  <option value="ndim">New Delhi Institute of Management (NDIM)</option>
                  <option value="meri">Management Education & Research Institute (MERI)</option>
                  <option value="jims">JIMS Rohini</option>
                  <option value="glbajaj">GL Bajaj</option>
                  <option value="iilm">IILM Lodhi Road</option>
                  <option value="fostiima">FOSTIIMA Business School</option>
                  <option value="fore">FORE School of Management</option>
                  <option value="mabs">MABS, Delhi</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-lg font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Download Free Guide
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-500">
                By downloading, you agree to receive updates about PGDM colleges
              </p>
            </div>
          </div>
  )
}

export default RegistrationForm
