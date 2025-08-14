import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: "📊",
      title: "Comprehensive College Data",
      description: "Detailed information on all 17 top PGDM colleges including admission criteria, fee structure, and placement records.",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      icon: "🎯",
      title: "Personalized Recommendations",
      description: "Get college suggestions based on your academic background, budget, and career aspirations.",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      icon: "📈",
      title: "Placement Analytics",
      description: "Compare placement statistics, average packages, and top recruiters across all colleges.",
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      icon: "🏆",
      title: "Expert Guidance",
      description: "Access to education counselors who have helped 500+ students make the right college choice.",
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      icon: "📱",
      title: "Mobile-Friendly Guide",
      description: "Download our comprehensive guide that works perfectly on all devices for easy reference.",
      color: "from-pink-500 to-pink-600"
    },
    {
      id: 6,
      icon: "⚡",
      title: "Instant Access",
      description: "Get immediate access to all college information and comparison tools after form submission.",
      color: "from-indigo-500 to-indigo-600"
    }
  ];

  const stats = [
    { number: "17", label: "Top Colleges Covered" },
    { number: "500+", label: "Students Guided" },
    { number: "95%", label: "Success Rate" },
    { number: "24/7", label: "Expert Support" }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our PGDM Guide?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide the most comprehensive and up-to-date information to help you make 
            the best decision for your PGDM journey in Delhi NCR.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <div key={feature.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-2xl mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-2">Trusted by Students Across Delhi NCR</h3>
            <p className="text-blue-100">Join thousands of students who have made informed decisions with our guidance</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Students Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                  R
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Rahul Sharma</div>
                  <div className="text-sm text-gray-600">LBSIM Student</div>
                </div>
              </div>
              <p className="text-gray-600">
                "The guide helped me compare all top colleges easily. I chose LBSIM and couldn't be happier with my decision!"
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  P
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Priya Gupta</div>
                  <div className="text-sm text-gray-600">IMI Student</div>
                </div>
              </div>
              <p className="text-gray-600">
                "Detailed placement data and fee comparison made it so much easier to choose the right college for my budget."
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-3">
                  <div className="font-semibold text-gray-900">Amit Kumar</div>
                  <div className="text-sm text-gray-600">Apeejay Student</div>
                </div>
              </div>
              <p className="text-gray-600">
                "The expert guidance helped me understand which college would be best for my career goals. Highly recommended!"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
