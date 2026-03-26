import React from 'react';
import { FileText } from 'lucide-react'; 

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-[#38062b] bg-gradient-to-br from-[#2a0420] via-[#4a0b3a] to-[#25031b] flex flex-col items-center justify-center pt-20 pb-12 px-4 font-sans text-white overflow-hidden">
      
      {/* Abstract Background Lines (Simplified representation) */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <line x1="0" y1="50%" x2="100%" y2="10%" stroke="white" strokeWidth="0.5" />
          <line x1="20%" y1="100%" x2="80%" y2="0" stroke="white" strokeWidth="0.5" />
          <circle cx="20%" cy="20%" r="2" fill="white" />
          <circle cx="80%" cy="40%" r="1.5" fill="#ffcf24" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="z-10 flex flex-col items-center max-w-3xl text-center w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight">
          Future-Proof Your Career in <br />
          <span className="text-[#ffd028]">Data Analytics</span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-gray-100 mb-8 max-w-2xl leading-relaxed">
          Our top-rated <span className="font-bold">classroom/online</span> tech programs take you from zero experience to an <span className="font-bold text-[#ffd028]">AI-ready job</span> in less than a year.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
          <button className="flex items-center justify-center gap-2 bg-white text-[#4a0b3a] px-8 py-3.5 rounded-lg font-bold hover:bg-gray-100 transition duration-300 w-full sm:w-auto">
            <FileText size={18} />
            Explore Tech Programs
          </button>
          <button className="flex items-center justify-center px-8 py-3.5 rounded-lg border border-white font-bold hover:bg-white/10 transition duration-300 w-full sm:w-auto">
            Talk to Career Advisor
          </button>
        </div>

        {/* Trust Indicators */}
        <p className="text-xs md:text-sm text-gray-300 font-medium tracking-wide">
          No prior experience required &bull; Free career guidance &bull; Limited Seats
        </p>
      </div>

      {/* Bottom Media Carousel/Grid */}
      <div className="z-10 mt-16 w-full max-w-7xl overflow-hidden">
        <div className="flex gap-4 overflow-x-auto pb-6 px-4 snap-x hide-scrollbar justify-start md:justify-center">
          {/* Mapping out placeholder cards for the video thumbnails */}
          {[1, 2, 3, 4, 5].map((item) => (
            <div 
              key={item} 
              className="flex-shrink-0 w-[260px] h-[320px] bg-gray-800 rounded-xl overflow-hidden border border-gray-600/50 snap-center relative group cursor-pointer"
            >
              {/* Image Placeholder */}
              <div className="w-full h-full bg-gradient-to-t from-black/80 to-transparent absolute inset-0 z-10"></div>
              <img 
                src={`/api/placeholder/260/320`} 
                alt={`Student Testimonial ${item}`}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              {/* Fake overlay text for the second card (Digital Marketing Student) */}
              {item === 2 && (
                <div className="absolute top-4 left-0 w-full text-center z-20">
                  <h3 className="text-2xl font-black uppercase text-white drop-shadow-md">Digital<br/>Marketing</h3>
                  <p className="text-sm font-signature text-pink-300 transform -rotate-6 mt-1">Student</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;