import React from 'react';
import { Phone, ArrowRight, GraduationCap, Briefcase, Building2, Users, Home } from 'lucide-react';
import AcademyBanner from '../../../../../assets/Academy-banner.png';

const WelcomeSection = () => {
  return (
    <section className="bg-[#fcfcfc] py-16 px-6 md:px-12 lg:px-20 font-sans relative overflow-hidden">
      
      {/* Background Decorative Glow (Top Left) */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#14937a]/5 to-transparent rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-20 relative z-10">
        
        {/* Left Column: Image Area */}
        <div className="flex-1 w-full max-w-xl relative group">
          
          {/* Main Image - UPDATED TO LOCAL ASSET */}
          <div className="relative rounded-[2rem] overflow-hidden shadow-xl border-4 border-white aspect-[5/4] sm:aspect-[4/3] bg-slate-100">
            <img 
              src={AcademyBanner} 
              alt="BM Academy Banner" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Floating Overlapping Stats Card */}
          <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-white p-5 sm:p-6 rounded-[1.5rem] shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-slate-50 max-w-[240px] sm:max-w-[300px] animate-float overflow-hidden">
            
            {/* Bubble Decoration */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#14937a]/10 rounded-bl-[100%] pointer-events-none translate-x-1/3 -translate-y-1/3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>

            {/* Top Stat */}
            <div className="flex items-center gap-3 mb-4 border-b border-slate-100 pb-4 relative z-10">
              <div className="w-12 h-12 bg-[#05243b] rounded-xl flex items-center justify-center text-white shadow-md">
                <Users size={22} />
              </div>
              <div>
                <p className="text-[#05243b] font-extrabold text-xl leading-none">3,000+</p>
                <p className="text-slate-500 text-[12px] font-bold mt-1 tracking-tight">Students Trained</p>
              </div>
            </div>

            {/* Bottom Row Stats */}
            <div className="grid grid-cols-2 gap-3 relative z-10">
              <div className="space-y-0.5">
                <p className="text-[#14937a] font-extrabold text-base">1,000+</p>
                <p className="text-slate-400 text-[10px] font-bold leading-tight uppercase tracking-wider">Students<br/>Placed</p>
              </div>
              <div className="space-y-0.5 border-l border-slate-100 pl-3">
                <p className="text-[#14937a] font-extrabold text-base">100+</p>
                <p className="text-slate-400 text-[10px] font-bold leading-tight uppercase tracking-wider">Hiring<br/>Partners</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex-1 space-y-6">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#05243b]/5 border border-[#05243b]/10">
            <Home size={14} className="text-[#05243b]" />
            <span className="text-[#05243b] text-[12px] font-bold tracking-wide">
              Welcome to BM Academy – Tech & Digital Skills
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-[#05243b] leading-[1.12] tracking-tight">
            Empowering Students, <br />
            Building Careers in <br />
            Pondicherry
          </h2>

          {/* Description */}
          <p className="text-slate-600 text-base leading-relaxed max-w-lg font-medium">
            At BM Academy, we provide industry-focused training in Kottakuppam, Pondicherry, helping students gain real-world skills in Full Stack Development, Data Analytics, and AI Digital Marketing.
            <br /><br />
            With hands-on projects and placement support, we prepare you to succeed in today’s competitive job market.
          </p>

          {/* Explore Link */}
          <div>
            <a 
              href="#programs" 
              className="group inline-flex items-center gap-2 text-[#05243b] font-bold text-base hover:text-[#14937a] transition-all duration-300"
            >
              Explore Our Vision
              <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform text-[#14937a]" />
            </a>
          </div>

          {/* Bottom Card Grid */}
          <div className="flex flex-wrap gap-4 pt-2">
            
            {/* Contact Card */}
            <div className="flex-1 min-w-[260px] bg-white p-5 rounded-[1.25rem] shadow-sm border border-slate-100 flex items-center gap-4 group hover:shadow-md transition-all duration-300 relative overflow-hidden">
               {/* Bubble Decoration */}
               <div className="absolute top-0 right-0 w-14 h-14 bg-[#14937a]/10 rounded-bl-[100%] pointer-events-none translate-x-1/3 -translate-y-1/3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
               
              <div className="w-11 h-11 bg-[#05243b] rounded-xl flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300 relative z-10">
                <Phone size={20} className="fill-current" />
              </div>
              <div className="relative z-10">
                <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider">Contact Our Experts</p>
                <p className="text-[#05243b] font-extrabold text-lg">+91 9403892971</p>
              </div>
            </div>

            {/* Stat Card 1 */}
            <div className="bg-white px-5 py-5 rounded-[1.25rem] shadow-sm border border-slate-100 flex flex-col justify-center min-w-[125px] relative overflow-hidden group hover:shadow-md transition-all duration-300">
              {/* Bubble Decoration */}
              <div className="absolute top-0 right-0 w-10 h-10 bg-[#14937a]/10 rounded-bl-[100%] pointer-events-none translate-x-1/3 -translate-y-1/3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
              
              <p className="text-[#05243b] font-extrabold text-xl group-hover:text-[#14937a] transition-colors relative z-10">25K+</p>
              <p className="text-slate-500 text-[11px] font-bold uppercase tracking-tight relative z-10">Students</p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white px-5 py-5 rounded-[1.25rem] shadow-sm border border-slate-100 flex flex-col justify-center min-w-[125px] relative overflow-hidden group hover:shadow-md transition-all duration-300">
              {/* Bubble Decoration */}
              <div className="absolute top-0 right-0 w-10 h-10 bg-[#14937a]/10 rounded-bl-[100%] pointer-events-none translate-x-1/3 -translate-y-1/3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
              
              <p className="text-[#05243b] font-extrabold text-xl group-hover:text-[#14937a] transition-colors relative z-10">600+</p>
              <p className="text-slate-500 text-[11px] font-bold uppercase tracking-tight relative z-10">Companies</p>
            </div>

          </div>

        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default WelcomeSection;