import React from 'react';
import { Home, Users, Phone, ArrowRight } from 'lucide-react';

const Welcome = () => {
  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-[#fff0f5]/40 via-white to-white overflow-hidden">
      
      {/* Soft background glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-100/40 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Column - Image & Floating Card */}
        <div className="w-full lg:w-5/12 relative mt-8 lg:mt-0">
          {/* Main Image */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative aspect-[4/3] w-full">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Students collaborating at BM Academy" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Stats Card - NOW WITH HOVER EFFECT */}
          <div className="absolute -bottom-10 -right-4 lg:-right-16 bg-white rounded-[2rem] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-gray-50 w-[280px] sm:w-[320px] z-10 overflow-hidden group cursor-default">
            {/* Elastic Bubble Background */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#f3e6ec] rounded-full transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[2.5]"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-5">
                <div className="bg-[#902157] text-white p-3.5 rounded-2xl shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                  <Users size={24} />
                </div>
                <div className="transition-transform duration-300 group-hover:translate-x-1">
                  <h3 className="text-xl font-extrabold text-gray-900 leading-none mb-1">3,000+</h3>
                  <p className="text-sm font-semibold text-gray-800">Students Trained</p>
                </div>
              </div>
              
              {/* Divider */}
              <div className="h-px w-full bg-gray-100 my-4 transition-colors duration-300 group-hover:bg-[#f3e6ec]"></div>
              
              <div className="flex justify-between items-start pt-2 gap-4">
                <div className="flex-1 transition-transform duration-300 group-hover:translate-x-1">
                  <h4 className="text-lg font-extrabold text-[#902157] mb-1">5+</h4>
                  <p className="text-[11px] font-semibold text-gray-800 leading-tight">Years of<br/>Experience</p>
                </div>
                <div className="flex-1 transition-transform duration-300 group-hover:-translate-x-1">
                  <h4 className="text-lg font-extrabold text-[#902157] mb-1">50+</h4>
                  <p className="text-[11px] font-semibold text-gray-800 leading-tight">Industry<br/>Experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="w-full lg:w-7/12 flex flex-col justify-center pt-10 lg:pt-0">
          
          <div className="inline-flex items-center gap-2 bg-[#f3e6ec] text-[#902157] px-5 py-2.5 rounded-full font-bold text-sm w-fit mb-6">
            <Home size={16} />
            <span>Welcome to BM Academy – Building Careers in Tech & Digital Skills</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#902157] leading-tight mb-6">
            Empowering Students, Building Careers in Pondicherry
          </h2>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 font-medium">
            At BM Academy, we provide industry-focused training in Kottakuppam, Pondicherry, helping students gain real-world skills in Full Stack Development, Data Analytics, AI Digital Marketing, and Video Editing. 
            <br className="hidden md:block" /><br className="hidden md:block" />
            With hands-on projects, expert mentors, and placement support, we prepare you to succeed in today’s competitive job market.
          </p>

          <a href="#" className="inline-flex items-center gap-2 text-[#902157] font-bold text-base hover:gap-3 transition-all duration-300 w-fit mb-10">
            Explore Our Programs <ArrowRight size={18} />
          </a>

          {/* Bottom Stats Row */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            
            {/* Contact Card */}
            <div className="flex-1 bg-white border border-gray-100 rounded-[1.5rem] p-5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] flex items-center gap-4 relative overflow-hidden group cursor-pointer">
              {/* Elastic Bubble Background */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#f3e6ec] rounded-full transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.8]"></div>
              
              <div className="bg-[#902157] text-white p-3.5 rounded-xl shadow-md relative z-10 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <Phone size={20} fill="currentColor" />
              </div>
              <div className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">
                <p className="text-xs font-bold text-gray-800 mb-0.5">Talk to Our Experts</p>
                <p className="text-lg font-extrabold text-[#902157]">+91 94038 92971</p>
              </div>
            </div>

            {/* Stat Box 1 */}
            <div className="bg-white border border-gray-100 rounded-[1.5rem] p-5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] relative overflow-hidden min-w-[140px] group flex flex-col justify-center cursor-default">
               {/* Elastic Bubble Background */}
               <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#f3e6ec] rounded-full transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.5]"></div>
               <h4 className="text-xl font-extrabold text-[#902157] relative z-10 mb-1 transition-transform duration-300 group-hover:translate-x-1">1,000+</h4>
               <p className="text-xs font-bold text-gray-800 relative z-10 transition-transform duration-300 group-hover:translate-x-1">Students Placed</p>
            </div>

            {/* Stat Box 2 */}
            <div className="bg-white border border-gray-100 rounded-[1.5rem] p-5 shadow-[0_5px_20px_rgba(0,0,0,0.03)] relative overflow-hidden min-w-[140px] group flex flex-col justify-center cursor-default">
               {/* Elastic Bubble Background */}
               <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#f3e6ec] rounded-full transition-transform duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-[1.5]"></div>
               <h4 className="text-xl font-extrabold text-[#902157] relative z-10 mb-1 transition-transform duration-300 group-hover:translate-x-1">100+</h4>
               <p className="text-xs font-bold text-gray-800 relative z-10 transition-transform duration-300 group-hover:translate-x-1">Hiring Partners</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Welcome;