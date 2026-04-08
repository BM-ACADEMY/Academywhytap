import React from 'react';
import { Link2, AtSign } from 'lucide-react';
import CeoImage from '../../../../assets/kamar1.png';

const CeoSection = () => {
  return (
    <section className="bg-[#00263f] text-white py-24 px-6 md:px-12 lg:px-20 font-sans relative overflow-hidden">
      
      {/* Background Dots Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">
        
        {/* Left Column: Text Content */}
        <div className="flex-1 w-full lg:w-1/2">
          
          {/* Top Label */}
          <span className="block text-slate-300 text-[12px] font-bold tracking-[0.2em] uppercase mb-6">
            Visionary Leadership
          </span>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-extrabold leading-[1.1] tracking-tight mb-8">
            Meet Kamarudeen BM<br />
            <span className="text-[#60a5fa]">CEO & Founder</span>
          </h2>

          {/* Blockquote */}
          <blockquote className="mb-10">
            <p className="text-[#93c5fd] text-xl md:text-[22px] italic leading-relaxed font-light">
              "Our mission is to democratize high-end tech education. 
              We don't just teach courses; we build professionals who are 
              ready to lead the future of the IT industry from the heart of 
              Pondicherry."
            </p>
          </blockquote>

          {/* Description Paragraph */}
          <p className="text-slate-300 text-[15px] leading-relaxed mb-12 max-w-xl font-medium">
            With over a decade of experience in digital transformation and education, 
            Kamarudeen has pioneered a unique mentorship model that focuses on 
            character building and technical excellence simultaneously.
          </p>

          {/* Action Buttons (Link & Email) */}
          <div className="flex items-center gap-4">
            <button 
              className="w-12 h-12 bg-transparent border border-[#3b82f6] hover:bg-[#3b82f6]/20 rounded-xl flex items-center justify-center text-white transition-colors"
              aria-label="Copy Link"
            >
              <Link2 size={20} strokeWidth={2} />
            </button>
            <button 
              className="w-12 h-12 bg-transparent border border-[#3b82f6] hover:bg-[#3b82f6]/20 rounded-xl flex items-center justify-center text-white transition-colors"
              aria-label="Send Email"
            >
              <AtSign size={20} strokeWidth={2} />
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