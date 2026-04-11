import React from 'react';
import CeoImage from '../../../../../assets/kamar1.png';

const CeoSection = () => {
  return (
    <section className="bg-[#00263f] text-white py-24 px-6 md:px-12 lg:px-20 font-sans relative overflow-hidden">
      
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="flex-1 w-full lg:w-1/2">
          
          {/* Top Label Badge */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#14937a]/15 border border-[#14937a]/30 mb-6 relative z-10">
            <span className="text-[#38c8b4] text-[11px] font-extrabold tracking-[0.12em] uppercase">
              Learn with Kamar
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-4">
            Meet Our CEO & Founder
          </h2>

          {/* Name & Role */}
          <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white">Kamarudeen BM</h3>
            <p className="text-[#60a5fa] text-lg font-semibold mt-1">CEO & Founder, BM Academy</p>
          </div>

          {/* Description Paragraph */}
          <div className="space-y-6 mb-10 max-w-xl">
            <p className="text-slate-200 text-lg leading-relaxed font-medium">
              Kamar founded BM Academy with a vision to make quality tech and digital education accessible to students.
            </p>
            <p className="text-slate-300 text-[16px] leading-relaxed">
              With strong industry experience, he focuses on helping learners build job-ready skills through practical training and real-world projects.
            </p>
            <p className="text-slate-300 text-[16px] leading-relaxed">
              His mission is to guide every student towards a successful career in Full Stack Development, Data Analytics, Digital Marketing, and Creative Video Editing through mentorship, hands-on learning, and career support.
            </p>
          </div>

            {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-6">
            <button 
              className="group flex items-center gap-2 px-8 py-4 bg-[#3b82f6] hover:bg-[#2563eb] text-white rounded-xl font-bold text-[16px] transition-all shadow-lg shadow-blue-500/20 active:scale-95"
            >
              Know His Journey
            </button>
          </div>

        </div>

        {/* Right Column: Image */}
        <div className="flex-1 w-full lg:w-1/2 flex justify-center relative">
            {/* Diamond Border Decoration */}
            
            <div className="w-full max-w-[450px] relative z-10 p-2 bg-[#1e3a8a] rounded-xl overflow-hidden">
              <img 
                src={CeoImage} 
                alt="Kamarudeen BM - CEO & Founder" 
                className="w-full h-auto object-cover rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105"
              />
            </div>
        </div>

      </div>
    </section>
  );
};

export default CeoSection;