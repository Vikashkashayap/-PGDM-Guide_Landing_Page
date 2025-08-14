import React from 'react';
import glBajajImage from '../assets/image2.png';
import iilmImage from '../assets/image3.jpeg';
import jimsImage from '../assets/image4.png';
import iimiImage from '../assets/image5.png';
import ndimiImage from '../assets/image6.png';
import meriImage from '../assets/image7.png';
import apeejayImage from '../assets/image8.png';
import asiaPacificImage from '../assets/image9.png';
import lbsimImage from '../assets/image10.png';
import fostiiImage from '../assets/image11.png';
import imtImage from '../assets/image12.png';
import nietImage from '../assets/image13.png';

const CollegesSection = () => {
  const colleges = [
    {
      id: 1,
      name: "LBSIM, Delhi",
      location: "Delhi",
      rating: 4.8,
      placement: "95%",
      avgPackage: "8.5 LPA",
      fees: "12.5 Lakhs",
      color: "from-blue-600 to-blue-700",
      logo: "🏛️",
      image: lbsimImage,
      usp: "AICTE Approved, Strong Corporate Connect"
    },
    {
      id: 2,
      name: "Asia‑Pacific Institute of Management",
      location: "New Delhi",
      rating: 4.6,
      placement: "92%",
      avgPackage: "7.8 LPA",
      fees: "11.2 Lakhs",
      color: "from-green-600 to-green-700",
      logo: "🌏",
      image:asiaPacificImage,
      usp: "International Exposure, Industry Partnerships"
    },
    {
      id: 3,
      name: "Apeejay School of Management",
      location: "Dwarka",
      rating: 4.7,
      placement: "94%",
      avgPackage: "8.2 LPA",
      fees: "12.8 Lakhs",
      color: "from-purple-600 to-purple-700",
      logo: "🎓",
      image: apeejayImage,
      usp: "NAAC A+ Grade, Excellent Infrastructure"
    },
    {
      id: 4,
      name: "International Management Institute (IMI)",
      location: "New Delhi",
      rating: 4.9,
      placement: "96%",
      avgPackage: "9.2 LPA",
      fees: "14.5 Lakhs",
      color: "from-red-600 to-red-700",
      logo: "🌍",
      image: iimiImage,
      usp: "International Collaborations, Research Focus"
    },
    {
      id: 5,
      name: "New Delhi Institute of Management (NDIM)",
      location: "Delhi",
      rating: 4.5,
      placement: "90%",
      avgPackage: "7.5 LPA",
      fees: "10.8 Lakhs",
      color: "from-orange-600 to-orange-700",
      logo: "🏢",
      image:ndimiImage,
      usp: "Affordable Quality Education"
    },
    {
      id: 6,
      name: "Management Education & Research Institute (MERI)",
      location: "Janakpuri",
      rating: 4.4,
      placement: "88%",
      avgPackage: "7.2 LPA",
      fees: "10.5 Lakhs",
      color: "from-teal-600 to-teal-700",
      logo: "📚",
      image:meriImage,
      usp: "Research-Oriented Programs"
    },
    {
      id: 7,
      name: "JIMS Rohini",
      location: "Rohini",
      rating: 4.6,
      placement: "91%",
      avgPackage: "7.8 LPA",
      fees: "11.5 Lakhs",
      color: "from-indigo-600 to-indigo-700",
      logo: "🎯",
      image:jimsImage,
      usp: "Industry-Integrated Curriculum"
    },
    {
      id: 8,
      name: "GL Bajaj",
      location: "Greater Noida",
      rating: 4.5,
      placement: "89%",
      avgPackage: "7.6 LPA",
      fees: "11.8 Lakhs",
      color: "from-pink-600 to-pink-700",
      logo: "⚡",
      image: glBajajImage,
      usp: "Innovation & Entrepreneurship Focus"
    },
    {
      id: 9,
      name: "IILM Lodhi Road",
      location: "Lodhi Road",
      rating: 4.7,
      placement: "93%",
      avgPackage: "8.1 LPA",
      fees: "12.2 Lakhs",
      color: "from-yellow-600 to-yellow-700",
      logo: "💡",
      image: iilmImage,
      usp: "Leadership Development Programs"
    },
   
    {
      id: 10,
      name: "FOSTIIMA Business School",
      location: "New Delhi",
      rating: 4.8,
      placement: "95%",
      avgPackage: "8.8 LPA",
      fees: "13.2 Lakhs",
      color: "from-cyan-600 to-cyan-700",
      logo: "🚀",
      image:fostiiImage,
      usp: "Technology-Driven Management Education"
    },


    {
      id: 11,
      name: "IMT Ghaziabad",
      location: "New Delhi",
      rating: 4.8,
      placement: "90%",
      avgPackage: "8.2 LPA",
      fees: "13.2 Lakhs",
      color: "from-cyan-600 to-cyan-700",
      logo: "🚀",
      image:imtImage,
      usp: "AICTE Approved, Strong Corporate Connect"
    },

    {
      id: 12,
      name: "NIET, Greater Noida",
      location: "New Delhi",
      rating: 5,
      placement: "95%",
      avgPackage: "8.9 LPA",
      fees: "13.5 Lakhs",
      color: "from-cyan-600 to-cyan-700",
      logo: "🚀",
      image:nietImage,
      usp: "AICTE Approved, Strong Corporate Connect"
    }
  ];

  return (
    <section id="colleges" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Top PGDM Colleges in Delhi NCR
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare the best PGDM colleges in Delhi NCR based on placements, infrastructure, 
            faculty, and overall reputation. Make an informed decision for your career.
          </p>
        </div>

        {/* Colleges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {colleges.map((college) => (
            <div key={college.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {/* College Header */}
              <div 
                className={`text-white p-6 rounded-t-xl ${
                  college.image 
                    ? 'relative overflow-hidden' 
                    : `bg-gradient-to-r ${college.color}`
                }`}
                style={college.image ? {
                  backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${college.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                } : {}}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-3xl">
                    {college.image ? (
                      <div className="w-12 h-12 bg-white rounded-lg p-1 flex items-center justify-center">
                        <img 
                          src={college.image} 
                          alt={`${college.name} logo`}
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    ) : (
                      college.logo
                    )}
                  </div>
                  <div className="flex items-center space-x-1">
                    <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="font-semibold">{college.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{college.name}</h3>
                <p className="text-blue-100">{college.location}</p>
              </div>

              {/* College Details */}
              <div className="p-6">
                <div className="space-y-4">
                  {/* Key Metrics */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{college.placement}</div>
                      <div className="text-sm text-gray-600">Placement Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{college.avgPackage}</div>
                      <div className="text-sm text-gray-600">Avg Package</div>
                    </div>
                  </div>

                  {/* USP */}
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-700 font-medium">{college.usp}</p>
                  </div>

                  {/* Fee Info */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Total Fees:</span>
                    <span className="font-semibold text-gray-900">{college.fees}</span>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                    Get Detailed Info
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need Help Choosing the Right College?
            </h3>
            <p className="text-gray-600 mb-6">
              Get personalized guidance from our education experts. We'll help you compare colleges 
              based on your preferences and career goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                Download Complete Guide
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300">
                Speak to Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollegesSection;
