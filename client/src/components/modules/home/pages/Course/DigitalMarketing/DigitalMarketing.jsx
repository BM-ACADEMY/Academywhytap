import React from 'react';
import { 
  Star, 
  Download, 
  MonitorPlay, 
  ChevronRight,
  ShieldCheck,
  Award
} from 'lucide-react';
import desktopBg from '../../../../../../assets/course/digital-marketing/desktop.png';
import mobileBg from '../../../../../../assets/course/digital-marketing/mobile.png';

const DigitalMarketing = () => {
  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source media="(max-width: 768px)" srcSet={mobileBg} />
          <img 
            src={desktopBg} 
            alt="Digital Marketing Background" 
            className="w-full h-full object-cover"
          />
        </picture>
        {/* Overlay to ensure text readability if needed */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Main Content Content */}
      <div className="relative z-10 max-w-8xl mx-auto px-6 md:px-12 lg:px-20 pt-32 pb-20 min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Content */}
        <div className="flex-1 text-white space-y-8 animate-in fade-in slide-in-from-left duration-700">
          
          {/* Trust Line & Rating */}
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <div className="bg-white p-1 rounded-full">
                <svg viewBox="0 0 24 24" className="w-5 h-5">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1 .67-2.28 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
              <span className="text-sm font-medium">Trusted by 1000+ Students</span>
            </div>
            
            <div className="flex items-center gap-1.5">
              <span className="text-yellow-400 font-bold text-lg">4.8</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>

          {/* Placement Badge */}
          <div className="inline-flex items-center gap-2 bg-transparent text-white px-5 py-2.5 border border-white/50 rounded-full font-bold text-sm shadow-lg transition-transform cursor-default">
            <span className="w-2.5 h-2.5 bg-[#ffc107] rounded-full animate-pulse" />
            Placement Support & Career Guidance
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-[1.1] max-w-[800px]">
            <span className="text-white">AI-Powered</span> <br />
            <span className="text-[#ffc107]">Digital Marketing Course</span>
          </h1>

          {/* Subheading */}
          <p className="text-md md:text-lg text-gray-100 max-w-[650px] leading-relaxed">
            Learn SEO, Social Media Marketing, and Google Ads with AI tools through hands-on training and real-time projects to build job-ready skills.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-[#4a001a] font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-all shadow-xl active:scale-95 group">
              <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
              Download Syllabus
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-[#ffc107] text-[#1a1a1a] font-bold rounded-lg flex items-center justify-center gap-2 hover:bg-[#e0a905] transition-all shadow-xl active:scale-95 group">
              <MonitorPlay size={20} className="group-hover:rotate-6 transition-transform" />
              Book Free Demo Class
            </button>
          </div>
        </div>

        {/* Right Side: Lead Form */}
        <div className="w-full lg:max-w-[450px] bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-right duration-700">
          
          {/* Form Header */}
          <div className="bg-[#ffc107] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span role="img" aria-label="fire" className="text-xl">🔥</span>
              <span className="font-bold text-[#1a1a1a] uppercase tracking-wider text-sm">Next Batch Starts Soon</span>
            </div>
            <div className="bg-white/30 px-3 py-1 rounded text-[12px] font-bold text-[#1a1a1a]">Limited Seats</div>
          </div>

          {/* Form Fields */}
          <form className="p-8 space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Full Name *</label>
              <input 
                type="text" 
                placeholder="Enter your full name" 
                className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-[#4a001a] focus:ring-1 focus:ring-[#4a001a] outline-none transition-all bg-gray-50/50"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Phone Number *</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">+91</span>
                <input 
                  type="tel" 
                  placeholder="Enter phone number" 
                  className="w-full pl-14 pr-4 py-3.5 rounded-lg border border-gray-200 focus:border-[#4a001a] focus:ring-1 focus:ring-[#4a001a] outline-none transition-all bg-gray-50/50"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Email Address *</label>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-[#4a001a] focus:ring-1 focus:ring-[#4a001a] outline-none transition-all bg-gray-50/50"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">City *</label>
              <input 
                type="text" 
                placeholder="Enter your city" 
                className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-[#4a001a] focus:ring-1 focus:ring-[#4a001a] outline-none transition-all bg-gray-50/50"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-semibold text-gray-700">Highest Qualification *</label>
              <select className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-[#4a001a] focus:ring-1 focus:ring-[#4a001a] outline-none transition-all bg-gray-50/50 appearance-none">
                <option value="">Select Qualification</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Graduate">Graduate</option>
                <option value="Postgraduate">Postgraduate</option>
                <option value="Working Professional">Working Professional</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 bg-[#8b0e3e] hover:bg-[#6d0b30] text-white font-bold rounded-xl shadow-lg transition-all transform active:scale-[0.98] mt-4 flex items-center justify-center gap-2 group"
            >
              Submit Now
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-[11px] text-center text-gray-400 mt-4 leading-tight">
              By submitting this form, you agree to our <a href="#" className="underline">Terms of Service</a> and <a href="#" className="underline">Privacy Policy</a>.
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default DigitalMarketing;
