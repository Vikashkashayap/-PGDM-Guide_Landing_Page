import React from 'react'

const OurRecuriter = () => {
  const recruiters = [
    {
      name: "ESSO",
      logo: "ESSO",
      color: "text-pink-400"
    },
    {
      name: "LML",
      logo: "LML",
      color: "text-black"
    },
    {
      name: "Vodafone",
      logo: "vodafone",
      color: "text-red-600"
    },
    {
      name: "JK Cement",
      logo: "jkcement",
      color: "text-green-600"
    },
    {
      name: "JK Tyre",
      logo: "JKTYRE",
      color: "text-black"
    },
    {
      name: "Anand Rathi",
      logo: "ANANDRATHI",
      color: "text-white bg-green-800"
    },
    {
      name: "Airtel",
      logo: "airtel",
      color: "text-red-600"
    },
    {
      name: "Zomato",
      logo: "zomato",
      color: "text-gray-600"
    }
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Recruiters
        </h2>
        
        {/* Animated scrolling container */}
        <div className="relative overflow-hidden">
          <div 
            className="flex"
            style={{
              animation: 'scroll 30s linear infinite',
              width: 'fit-content'
            }}
          >
            {/* First set of logos */}
            {recruiters.map((recruiter, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 bg-white rounded-lg shadow-md p-6 min-w-[200px] flex items-center justify-center"
              >
                <div className={`text-xl font-bold ${recruiter.color} ${recruiter.name === "Anand Rathi" ? "bg-green-800 px-4 py-2 rounded" : ""}`}>
                  {recruiter.logo}
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {recruiters.map((recruiter, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 bg-white rounded-lg shadow-md p-6 min-w-[200px] flex items-center justify-center"
              >
                <div className={`text-xl font-bold ${recruiter.color} ${recruiter.name === "Anand Rathi" ? "bg-green-800 px-4 py-2 rounded" : ""}`}>
                  {recruiter.logo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CSS Animation */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </div>
  )
}

export default OurRecuriter
