import React from 'react'

const Specialisation = () => {
  const specialisations = [
    {
      id: 1,
      title: "Marketing & Innovation Management",
      icon: "📢",
      description: "Master brand strategies and innovative marketing techniques to drive business growth.",
      bgColor: "bg-red-50",
      hoverBgColor: "hover:bg-red-100"
    },
    {
      id: 2,
      title: "Financial Management",
      icon: "📈",
      description: "Develop expertise in financial analysis, investment strategies, and corporate finance.",
      bgColor: "bg-blue-50",
      hoverBgColor: "hover:bg-blue-100"
    },
    {
      id: 3,
      title: "Human Resource Management",
      icon: "👥",
      description: "Learn talent management, organizational development, and strategic HR practices.",
      bgColor: "bg-green-50",
      hoverBgColor: "hover:bg-green-100"
    },
    {
      id: 4,
      title: "Operations & Supply Chain Management",
      icon: "🚚",
      description: "Optimize business processes and manage complex supply chain networks efficiently.",
      bgColor: "bg-yellow-50",
      hoverBgColor: "hover:bg-yellow-100"
    },
    {
      id: 5,
      title: "Business Analytics & Research",
      icon: "📊",
      description: "Transform data into actionable insights for data-driven business decisions.",
      bgColor: "bg-purple-50",
      hoverBgColor: "hover:bg-purple-100"
    },
    {
      id: 6,
      title: "International Business Management",
      icon: "🌍",
      description: "Navigate global markets and develop strategies for international business expansion.",
      bgColor: "bg-indigo-50",
      hoverBgColor: "hover:bg-indigo-100"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-red-600 bg-red-100 rounded-full mb-4">
            Specializations
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 sm:text-5xl">
            Programmes with Dual Specializations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailor your MBA experience with our comprehensive range of specializations designed for future leaders.
          </p>
        </div>
        
        {/* Specialization Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {specialisations.map((specialisation) => (
            <div 
              key={specialisation.id}
              className={`group relative ${specialisation.bgColor} ${specialisation.hoverBgColor} rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-200`}
            >
              {/* Card Content */}
              <div className="p-8">
                {/* Icon with background */}
                <div className="w-16 h-16 flex items-center justify-center mb-6 rounded-xl bg-white shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  <span className="text-3xl">{specialisation.icon}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {specialisation.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {specialisation.description}
                </p>
                
                {/* Learn More Button */}
                <button className="flex items-center text-red-600 font-medium group-hover:text-red-700 transition-colors duration-300">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
              
              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-semibold rounded-lg hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden">
            <span className="relative z-10">Explore All Programmes</span>
            <span className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></span>
          </button>
          
          <p className="mt-6 text-gray-600">
            Have questions? <a href="#" className="text-red-600 hover:text-red-800 font-medium transition-colors duration-300">Contact our advisors</a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Specialisation