import React from 'react';
import { Phone, ArrowRight, CheckCircle2, GraduationCap, Briefcase, Building2 } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <section className="bg-[#fcfcfc] py-20 px-6 md:px-12 lg:px-20 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
        
        {/* Left Column: Content */}
        <div className="flex-1 space-y-6">
          
          {/* Small Top Line */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#14937a]/10 border border-[#14937a]/20">
            <span className="text-[#14937a] text-[13px] font-bold tracking-wide">
              Welcome to BM Academy – Building Careers in Tech & Digital Skills
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#05243b] leading-[1.15] tracking-tight">
            Empowering Students, <br className="hidden md:block" />
            Building Careers in <br className="hidden md:block" />
            Pondicherry
          </h2>

          {/* SEO Description */}
          <p className="text-slate-600 text-[16px] md:text-[17px] leading-relaxed max-w-xl font-medium">
            At BM Academy, we provide industry-focused training in Kottakuppam, Pondicherry, helping students gain real-world skills in Full Stack Development, Data Analytics, AI Digital Marketing, and Video Editing.
            <br /><br />
            With hands-on projects, expert mentors, and placement support, we prepare you to succeed in today’s competitive job market.
          </p>

          {/* Actions Flex Container */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-4">
            
            {/* Explore Link */}
            <a 
              href="#programs" 
              className="group flex items-center gap-2 text-[#05243b] font-bold text-[17px] pb-1 border-b-2 border-[#e8be66] hover:text-[#14937a] hover:border-[#14937a] transition-colors"
            >
              Explore Our Programs
              <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Contact Box (WITH HOVER BUBBLE EFFECT) */}
            <div className="relative flex items-center gap-4 bg-[#f8fafc] px-6 py-4 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-300 cursor-pointer group overflow-hidden">
              
              {/* Elastic Bubble Background */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#14937a]/10 rounded-full transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[3] z-0 pointer-events-none"></div>

              {/* Icon */}
              <div className="relative z-10 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#14937a] shadow-sm flex-shrink-0 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                <Phone size={20} className="fill-current" />
              </div>

              {/* Text */}
              <div className="relative z-10 flex flex-col transition-transform duration-300 group-hover:translate-x-1">
                <span className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-0.5 group-hover:text-[#14937a] transition-colors duration-300">
                  Talk To Our Experts
                </span>
                <span className="text-[#05243b] font-extrabold text-lg">
                  Call Us: +91 9403892971
                </span>
              </div>
            </div>

          </div>

          {/* Integrated Sleek Stats Row */}
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-6 mt-2 border-t border-slate-200/60">
            <div className="flex items-center gap-2.5">
              <GraduationCap size={18} className="text-[#14937a]" />
              <div>
                <p className="text-[#05243b] font-extrabold text-[15px] leading-none">3,000+</p>
                <p className="text-slate-500 text-[11px] font-bold uppercase">Students Trained</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Briefcase size={18} className="text-[#14937a]" />
              <div>
                <p className="text-[#05243b] font-extrabold text-[15px] leading-none">1,000+</p>
                <p className="text-slate-500 text-[11px] font-bold uppercase">Students Placed</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5">
              <Building2 size={18} className="text-[#14937a]" />
              <div>
                <p className="text-[#05243b] font-extrabold text-[15px] leading-none">100+</p>
                <p className="text-slate-500 text-[11px] font-bold uppercase">Hiring Partners</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: Overlapping Images */}
        <div className="flex-1 w-full max-w-lg lg:max-w-none relative mt-12 lg:mt-0 px-4 md:px-0">
          
          <div className="relative w-full aspect-square md:h-[500px]">
            
            {/* Back Image (Left, lower) */}
            <div className="absolute left-0 bottom-4 w-[60%] aspect-[4/5] rounded-3xl overflow-hidden shadow-xl z-0 transition-transform duration-500 hover:-translate-y-2 border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Students collaborating at BM Academy" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Front Image (Right, higher) */}
            <div className="absolute right-0 top-0 w-[55%] aspect-[3/4] md:h-[95%] rounded-3xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(5,36,59,0.3)] z-10 transition-transform duration-500 hover:-translate-y-2 border-4 border-white bg-[#05243b]">
              <img 
                src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Tech career focus" 
                className="w-full h-full object-cover opacity-90"
              />
            </div>

            {/* Decorative element behind images */}
            <div className="absolute -right-6 -bottom-6 w-32 h-32 opacity-10 pointer-events-none -z-10 text-[#05243b]">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="3" cy="3" r="3" fill="currentColor" />
                </pattern>
                <rect x="0" y="0" width="100" height="100" fill="url(#dots)" />
              </svg>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WelcomeSection;