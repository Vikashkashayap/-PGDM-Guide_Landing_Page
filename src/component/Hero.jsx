import React, { useState } from 'react';
import { motion } from 'framer-motion';
import bgImage1 from '../assets/image1.png';
import logoImage from '../assets/image.png';
import RegistrationForm from './RegistrationForm';

const Hero = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const benefits = [
    {
      id: 1,
      icon: '✅',
      title: 'Detailed College Reviews',
      color: 'text-green-600',
      bg: 'bg-green-100'
    },
    {
      id: 2,
      icon: '📊',
      title: 'Placement Statistics',
      color: 'text-blue-600',
      bg: 'bg-blue-100'
    },
    {
      id: 3,
      icon: '💰',
      title: 'Fee Structure Comparison',
      color: 'text-purple-600',
      bg: 'bg-purple-100'
    },
    {
      id: 4,
      icon: '🎓',
      title: 'Admission Guidance',
      color: 'text-orange-600',
      bg: 'bg-orange-100'
    }
  ];

  return (
    <section 
      id="home" 
      className="pt-16 min-h-screen flex items-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${bgImage1})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-50 opacity-20"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Animated Logo */}
      <motion.div 
        className="absolute top-20 right-5 z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <img 
          src={logoImage} 
          alt="Logo" 
          className="h-15 w-auto object-contain drop-shadow-lg"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium shadow-md"
                whileHover={{ scale: 1.05 }}
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
                #1 PGDM Guide in Delhi NCR
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover Your Perfect{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  PGDM College
                </span>{' '}
                in Delhi NCR
              </h1>
              
              <p className="text-xl text-gray-700 font-medium leading-relaxed">
                Get detailed insights on the top 17 PGDM colleges in Delhi NCR. Compare programs, 
                placements, fees, and admission criteria to make the right choice for your career.
              </p>
            </motion.div>

            {/* Benefits with animations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit.id}
                  className={`flex items-center space-x-3 p-3 rounded-lg ${benefit.bg} bg-opacity-50 backdrop-blur-sm border border-white border-opacity-30`}
                  whileHover={{ y: -5 }}
                  onMouseEnter={() => setHoveredItem(benefit.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <motion.div 
                    className={`text-2xl ${hoveredItem === benefit.id ? 'scale-110' : 'scale-100'} transition-transform`}
                  >
                    {benefit.icon}
                  </motion.div>
                  <span className={`font-medium ${hoveredItem === benefit.id ? benefit.color : 'text-gray-800'}`}>
                    {benefit.title}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex flex-wrap items-center gap-4 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-green-500 font-medium">500+ Students Guided</span>
              </div>
              <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-500 font-medium">17 Colleges Covered</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Lead Form with glow effect */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl opacity-20 blur-lg"></div>
            <div className="relative bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
              <RegistrationForm />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-600 mb-1">Scroll Down</span>
          <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;