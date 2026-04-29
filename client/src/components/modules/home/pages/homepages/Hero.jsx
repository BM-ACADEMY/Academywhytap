import React, { useState, useEffect } from 'react';
import { 
  Star, 
  ChevronRight, 
  Clock, 
  Search, 
  Award, 
  CheckCircle, 
  Users, 
  Zap, 
  Rocket, 
  Laptop 
} from 'lucide-react'; 
import desktopBanner from '../../../../../assets/course/digital-marketing/desktop.png';
import mobileBanner from '../../../../../assets/course/digital-marketing/mobile.png';

const HeroSection = () => {
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
  const [formData, setFormData] = useState({ name: '', phone: '', city: '', course: 'Home Inquiry' });

  const courses = ["Full Stack Development", "Data Analytics", "AI Digital Marketing", "Video Editing"];
  const locations = ["Pondicherry", "Kottakuppam"];

  useEffect(() => {
    const courseTimer = setInterval(() => setCurrentCourseIndex((prev) => (prev + 1) % courses.length), 3000);
    const locationTimer = setInterval(() => setCurrentLocationIndex((prev) => (prev + 1) % locations.length), 4000);
    return () => { clearInterval(courseTimer); clearInterval(locationTimer); };
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/919944940051?text=Hi, I'm interested in training at BM Academy. Name: ${formData.name}, Phone: ${formData.phone}, City: ${formData.city}`, '_blank');
  };

  return (
    <section className="relative font-sans overflow-hidden">
      {/* Premium Hero Section */}
      <div className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #02182b 0%, #05243b 100%)' }}>
        {/* Responsive Background Images */}
        <div className="absolute inset-0">
          <img src={mobileBanner} alt="mobile banner" className="w-full h-full object-cover md:hidden opacity-40" />
          <img src={desktopBanner} alt="desktop banner" className="w-full h-full object-cover hidden md:block opacity-40" />
          <div className="absolute inset-0 bg-[#02182b]/60 md:bg-transparent md:bg-gradient-to-r md:from-[#02182b]/95 md:via-[#02182b]/50 md:to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            {/* Trust Line */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#05243b] bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+20}`} alt="user" />
                  </div>
                ))}
              </div>
              <div className="text-slate-300 text-sm font-medium">
                <span className="text-white font-bold">Trusted by 5000+ Students</span>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-[#e8be66] font-bold">4.9</span>
                  <div className="flex text-[#e8be66]">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={12} fill="currentColor" />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#14937a] animate-pulse" />
              <span className="text-[#14937a] text-[13px] font-bold uppercase tracking-wide">Pondicherry's #1 Training Academy</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              Best IT & Digital <br />
              <span className="text-[#14937a]">Skills Institute</span> in <br />
              <span key={currentLocationIndex} className="text-[#e8be66] animate-in fade-in slide-in-from-bottom-2">
                {locations[currentLocationIndex]}
              </span>
            </h1>

            <div className="text-xl md:text-2xl font-bold text-white mb-10 flex flex-wrap items-center gap-x-3">
              Master <span key={currentCourseIndex} className="text-[#14937a] animate-in fade-in slide-in-from-bottom-1">{courses[currentCourseIndex]}</span> from Industry Experts
            </div>

            <div className="flex flex-wrap gap-5">
              <button 
                onClick={() => document.getElementById('trending-courses')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-[#14937a] text-white font-black rounded-2xl hover:bg-white hover:text-[#05243b] transition-all shadow-xl shadow-[#14937a]/20 flex items-center gap-3 active:scale-95 cursor-pointer"
              >
                Explore Courses
                <ChevronRight size={20} />
              </button>
              <button 
                onClick={() => window.open('https://wa.me/919944940051?text=Hi, I want to book a free demo class.', '_blank')}
                className="px-10 py-5 bg-white/5 text-white font-black rounded-2xl hover:bg-white hover:text-[#05243b] transition-all border border-white/20 backdrop-blur-md active:scale-95 cursor-pointer"
              >
                Book Free Demo
              </button>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-[#14937a]/20 blur-[80px] rounded-full scale-75 animate-pulse" />
            <div className="relative bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-white/20">
              <div className="bg-[#e8be66] py-4 px-8 text-center">
                <div className="flex items-center justify-center gap-2 text-[#05243b] font-black text-sm uppercase tracking-widest">
                  <Clock size={16} />
                  New Batches Starting Weekly
                </div>
              </div>

              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-black text-[#05243b] mb-2 text-center">Get Career Counseling</h3>
                <p className="text-slate-500 text-sm text-center mb-8 font-bold italic">Talk to our experts for a free roadmap</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[11px] font-black text-[#05243b] uppercase tracking-widest mb-2 ml-1">Full Name *</label>
                    <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="e.g. John Doe" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#14937a] focus:bg-white transition-all font-bold text-[#05243b]" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black text-[#05243b] uppercase tracking-widest mb-2 ml-1">Phone Number *</label>
                    <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} placeholder="10 Digit Mobile Number" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#14937a] focus:bg-white transition-all font-bold text-[#05243b]" />
                  </div>
                  <button type="submit" className="w-full py-5 bg-[#14937a] text-white font-black rounded-2xl hover:bg-[#05243b] transition-all duration-300 shadow-xl shadow-[#14937a]/20 uppercase tracking-widest text-sm mt-4 active:scale-95 cursor-pointer">
                    Apply Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Banner */}
      <div className="relative z-20 -mt-16 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
            {[
              { val: '3000+', label: 'Students' },
              { val: '100+', label: 'Hiring Partners' },
              { val: '1000+', label: 'Placements' },
              { val: '5+', label: 'Years Experience' }
            ].map((stat, i) => (
              <div key={i} className={`flex flex-col items-center justify-center text-center px-4 ${i === 0 ? 'border-none' : ''}`}>
                <h3 className="text-3xl md:text-5xl font-black text-[#05243b] mb-2">{stat.val}</h3>
                <p className="text-[10px] md:text-xs font-black text-[#14937a] tracking-[0.2em] uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;