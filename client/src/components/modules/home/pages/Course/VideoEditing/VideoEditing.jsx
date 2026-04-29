import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, Clock, TrendingUp, Users, Star, Laptop, ChevronRight, 
  Award, Briefcase, Megaphone, Plus, Minus, HelpCircle, Code2, 
  Server, Database, Globe, Cpu, Smartphone, Layout, Rocket, 
  Video, Film, Scissors, Play, Music, Layers, Wand2, Camera, Quote, Zap,Search ,Target ,Shield 
} from 'lucide-react';
import academyImage from '../../../../../../assets/Acadmey.png';
import graduationSuccess from '../../../../../../assets/graduation_success_clean.png';
import desktopBanner from '../../../../../../assets/course/digital-marketing/desktop.png';
import mobileBanner from '../../../../../../assets/course/digital-marketing/mobile.png';

const skillTools = {
  'Editing Software': [
    { name: 'Adobe Premiere Pro', icon: 'https://www.svgrepo.com/show/303512/adobe-premiere-pro-logo.svg' },
    { name: 'After Effects', icon: 'https://www.svgrepo.com/show/303511/adobe-after-effects-logo.svg' },
    { name: 'DaVinci Resolve', icon: 'https://www.svgrepo.com/show/353634/davinci-resolve.svg' },
    { name: 'Final Cut Pro', icon: 'https://www.svgrepo.com/show/353744/final-cut-pro.svg' },
  ],
  'Design & Audio': [
    { name: 'Photoshop', icon: 'https://www.svgrepo.com/show/303510/adobe-photoshop-logo.svg' },
    { name: 'Adobe Audition', icon: 'https://www.svgrepo.com/show/452145/adobe-audition.svg' },
    { name: 'Illustrator', icon: 'https://www.svgrepo.com/show/303509/adobe-illustrator-logo.svg' },
  ],
  'AI Tools': [
    { name: 'Auto-Captions', icon: 'https://www.svgrepo.com/show/305716/analysis.svg' },
    { name: 'AI Voiceovers', icon: 'https://www.svgrepo.com/show/305717/presentation.svg' },
    { name: 'Generative Fill', icon: 'https://www.svgrepo.com/show/353498/adobe-firefly.svg' },
  ]
};

const curriculum = [
  { 
    module: 'Module 1', 
    title: 'Basic Editing (Weeks 1–8)', 
    topics: ['Introduction to Video Editing & Software Overview', 'Timeline, Cuts, Transitions & Basic Editing Techniques', 'Working with Audio, Text & Simple Effects', 'Practice Sessions with Real Clips & Feedback'] 
  },
  { 
    module: 'Module 2', 
    title: 'Advanced Editing (Weeks 9–14)', 
    topics: ['Advanced Transitions, Effects & Color Correction', 'Motion Graphics Basics & Keyframe Animation', 'Sound Design & Audio Enhancement', 'Editing for Storytelling & Professional Output'] 
  },
  { 
    module: 'Module 3', 
    title: 'AI Video Editing (Weeks 15–20)', 
    topics: ['Introduction to AI Tools for Video Editing', 'Auto Editing, Background Removal & Smart Effects', 'AI-based Color Grading & Audio Enhancement', 'Speed Optimization using AI Tools'] 
  },
  { 
    module: 'Module 4', 
    title: 'Social Media Editing (Weeks 13–16)', 
    topics: ['Editing for Instagram Reels, YouTube & Shorts', 'Creating Viral Content & Trend-Based Editing', 'Thumbnail Design & Content Optimization', 'Platform-Specific Formats & Export Settings'] 
  },
  { 
    module: 'Module 5', 
    title: 'Portfolio & Career Development (Weeks 17–20)', 
    topics: ['Building a Professional Editing Portfolio', 'Working on Real-Time Projects', 'Freelancing & Client Handling Basics', 'Resume, Interview & Career Guidance'] 
  }
];

const VideoEditing = () => {
  const [activeTab, setActiveTab] = useState('Editing Software');
  const [openModule, setOpenModule] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [videoReviews, setVideoReviews] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    course: 'Video Editing'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/919944940051?text=Hi, I am interested in the AI-Powered Video Editing course. Name: ${formData.name}, Phone: ${formData.phone}, City: ${formData.city}`, '_blank');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setReviews([
      { name: 'Karthik Raja', text: 'BM Academy is the best place to learn video editing. Premiere Pro and After Effects are taught very clearly.', time: '1 month ago', rating: 5 },
      { name: 'Deepa S', text: 'The AI tools section in the video editing course is a game changer for content creators.', time: '2 months ago', rating: 5 }
    ]);
    setVideoReviews([
      { name: 'Student Review 1', id: 'dQw4w9WgXcQ' },
      { name: 'Student Review 2', id: 'dQw4w9WgXcQ' }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#14937a] selection:text-white">
      {/* Hero Section */}
      <div className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-[#05243b]">
        {/* Background Layer with Images */}
        <div className="absolute inset-0 z-0">
          <img src={mobileBanner} alt="mobile banner" className="w-full h-full object-cover md:hidden opacity-30" />
          <img src={desktopBanner} alt="desktop banner" className="w-full h-full object-cover hidden md:block opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05243b] via-[#05243b]/90 to-transparent" />
          
          {/* Animated Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#14937a]/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#14937a]/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            {/* Tagline */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 group hover:border-[#14937a]/50 transition-all duration-500">
              <div className="w-2 h-2 rounded-full bg-[#14937a] animate-ping" />
              <span className="text-[#14937a] text-xs md:text-sm font-black uppercase tracking-[0.2em]">
                AI-Powered Video Editing Course in Pondicherry
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.05] mb-8 tracking-tight">
              Master <span className="text-[#14937a]">Video Editing</span> with <br />
              Advanced Techniques & AI Tools
            </h1>

            <div className="mb-10 space-y-6">
              <h3 className="text-[#14937a] text-xl md:text-2xl font-black">
                Basic to Advanced Video Editing with AI
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed max-w-2xl font-medium">
                This 6-month comprehensive course at BM Academy is designed to help students master video editing using industry-standard tools and AI-powered techniques. You will learn from basics to advanced concepts through hands-on practice, real-time projects, and expert guidance, making you job-ready for careers in video editing, content creation, and freelancing.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {[
                "6 Months Practical Training + Internship",
                "Hands-on Live Projects",
                "Industry Expert Trainers",
                "Placement Assistance",
                "No Cost EMI Available",
                "Offline & Online Classes"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 group">
                  <div className="w-6 h-6 rounded-lg bg-[#14937a]/20 flex items-center justify-center text-[#14937a] group-hover:bg-[#14937a] group-hover:text-white transition-all duration-300">
                    <CheckCircle size={14} />
                  </div>
                  <span className="text-white font-bold text-sm md:text-base opacity-90">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-5">
              <button 
                onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-[#14937a] text-white font-black rounded-2xl hover:bg-white hover:text-[#05243b] transition-all shadow-[0_20px_50px_rgba(20,147,122,0.3)] flex items-center gap-3 active:scale-95 cursor-pointer group"
              >
                Enroll Now
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => window.open('https://wa.me/919944940051?text=Hi, I am interested in the Video Editing Syllabus.', '_blank')}
                className="px-10 py-5 bg-white/5 text-white font-black rounded-2xl hover:bg-white hover:text-[#05243b] transition-all border border-white/20 backdrop-blur-md active:scale-95 cursor-pointer"
              >
                Download Syllabus
              </button>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-5 relative" id="enquiry-form">
            <div className="absolute inset-0 bg-[#14937a]/20 blur-[80px] rounded-full scale-75 animate-pulse" />
            <div className="relative bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-white/20">
              <div className="bg-[#e8be66] py-4 px-8 text-center">
                <div className="flex items-center justify-center gap-2 text-[#05243b] font-black text-sm uppercase tracking-widest">
                  <Clock size={16} />
                  Next Batch Starts Soon
                </div>
              </div>

              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-black text-[#05243b] mb-2 text-center uppercase tracking-tight">Start Your Learning Journey</h3>
                <p className="text-slate-500 text-sm text-center mb-8 font-bold italic">Join Pondicherry's Best Video Editing Academy</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[11px] font-black text-[#05243b] uppercase tracking-widest mb-2 ml-1">Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe" 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#14937a] focus:bg-white transition-all font-bold text-[#05243b] placeholder:text-slate-300" 
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black text-[#05243b] uppercase tracking-widest mb-2 ml-1">Phone Number *</label>
                    <div className="flex gap-2">
                      <div className="px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-[#05243b]">+91</div>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10 Digit Mobile Number" 
                        className="flex-1 px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#14937a] focus:bg-white transition-all font-bold text-[#05243b] placeholder:text-slate-300" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-black text-[#05243b] uppercase tracking-widest mb-2 ml-1">City *</label>
                    <input 
                      type="text" 
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Pondicherry" 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#14937a] focus:bg-white transition-all font-bold text-[#05243b] placeholder:text-slate-300" 
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-5 bg-[#14937a] text-white font-black rounded-2xl hover:bg-[#05243b] transition-all duration-300 shadow-xl shadow-[#14937a]/20 uppercase tracking-widest text-sm mt-4 active:scale-95 cursor-pointer"
                  >
                    Enroll Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Covered Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-[#05243b] mb-6">
              Tools You Will <span className="text-[#14937a]">Learn</span>
            </h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-lg font-medium">
              Learn industry-standard video editing tools used by professionals to create high-quality content, visual effects, and cinematic videos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                name: 'Adobe Premiere Pro', 
                desc: 'Learn professional video editing including cutting, transitions, color correction, audio editing, and timeline workflow to create high-quality videos.',
                icon: <Video size={32} />,
                gradient: 'from-[#31A8FF] to-[#00005b]',
                bgColor: 'bg-[#7f8cff]/10',
                borderColor: 'border-[#7f8cff]/20',
                textColor: 'text-[#05243b]'
              },
              { 
                name: 'Adobe After Effects', 
                desc: 'Create motion graphics, animations, visual effects, and cinematic titles to enhance your video projects.',
                icon: <Zap size={32} />,
                gradient: 'from-[#D291FF] to-[#2E004B]',
                bgColor: 'bg-[#f2e8ff]',
                borderColor: 'border-[#f2e8ff]',
                textColor: 'text-[#00005b]'
              },
              { 
                name: 'DaVinci Resolve', 
                desc: 'Master advanced color grading, color correction, and post-production techniques used in professional filmmaking.',
                icon: <Wand2 size={32} />,
                gradient: 'from-[#14937a] to-[#05243b]',
                bgColor: 'bg-[#02182b]',
                borderColor: 'border-[#02182b]',
                textColor: 'text-white'
              },
              { 
                name: 'Final Cut Pro', 
                desc: 'Explore fast and efficient video editing workflows on Mac, ideal for content creators and filmmakers.',
                icon: <Film size={32} />,
                gradient: 'from-[#FF3B30] to-[#5856D6]',
                bgColor: 'bg-[#d9e2ec]',
                borderColor: 'border-[#d9e2ec]',
                textColor: 'text-[#05243b]'
              },
              { 
                name: 'CapCut / AI Editing Tools', 
                desc: 'Learn AI-powered editing, auto captions, reels editing, and social media content creation techniques.',
                icon: <Scissors size={32} />,
                gradient: 'from-black to-slate-800',
                bgColor: 'bg-[#14937a]/10',
                borderColor: 'border-[#14937a]/20',
                textColor: 'text-[#05243b]'
              }
            ].map((tool, i) => (
              <div key={i} className={`group p-10 rounded-[3rem] border ${tool.borderColor} ${tool.bgColor} transition-all duration-700 hover:shadow-2xl hover:-translate-y-3 flex flex-col items-center text-center relative overflow-hidden`}>
                {/* Decorative Brand Gradient Background */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${tool.gradient} opacity-5 -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:opacity-10 transition-opacity`} />
                
                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${tool.gradient} flex items-center justify-center mb-10 shadow-2xl shadow-slate-400/20 text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {tool.icon}
                </div>
                
                <h3 className={`text-2xl font-black mb-6 ${tool.textColor}`}>{tool.name}</h3>
                <p className={`${tool.textColor === 'text-white' ? 'text-slate-300' : 'text-slate-500'} text-sm font-bold leading-relaxed`}>
                  {tool.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Highlights Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14937a]/10 text-[#14937a] text-xs font-black uppercase tracking-widest mb-6">
              <Star size={14} />
              Key Features
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#05243b] mb-6">Course <span className="text-[#14937a]">Highlights</span></h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-lg font-medium">Discover what makes our AI-Powered Video Editing course the most comprehensive in Pondicherry.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Comprehensive Curriculum',
                desc: 'Learn video editing from basics to advanced, including cutting, transitions, color grading, audio editing, and AI-based editing techniques.',
                icon: <Layout size={24} />
              },
              {
                title: 'Hands-on Live Projects',
                desc: 'Work on real-world video editing projects such as YouTube videos, reels, ads, and cinematic edits.',
                icon: <Film size={24} />
              },
              {
                title: 'Classroom & Online Training',
                desc: 'Choose flexible learning options with both offline classroom sessions and online training.',
                icon: <Laptop size={24} />
              },
              {
                title: 'Industry-Recognized Certification',
                desc: 'Receive a BM Academy certification after successfully completing the course.',
                icon: <Award size={24} />
              },
              {
                title: 'Trained by Industry Experts',
                desc: 'Learn directly from experienced video editors with real-world industry knowledge.',
                icon: <Users size={24} />
              },
              {
                title: 'Interactive Learning Experience',
                desc: 'Participate in engaging sessions, practical exercises, and guided project-based learning.',
                icon: <Plus size={24} />
              }
            ].map((highlight, i) => (
              <div key={i} className="group p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-[#14937a]/30 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-[#14937a] mb-8 group-hover:bg-[#14937a] group-hover:text-white transition-all duration-500">
                  {highlight.icon}
                </div>
                <h3 className="text-2xl font-black text-[#05243b] mb-4">{highlight.title}</h3>
                <p className="text-slate-500 text-sm font-bold leading-relaxed">{highlight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Career Goals Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left side: Illustration */}
            <div className="relative group">
              <img 
                src={graduationSuccess} 
                alt="Career Success" 
                className="relative z-10 w-full h-auto group-hover:scale-105 transition-transform duration-700" 
              />
            </div>

            {/* Right side: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14937a]/10 text-[#14937a] text-xs font-black uppercase tracking-widest mb-6">
                <Target size={14} />
                Your Success Story
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#05243b] mb-6 leading-tight">
                Achieve Your Career Goals with <span className="text-[#14937a]">BM Academy</span>
              </h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">
                Start your career in video editing with BM Academy through hands-on training, real-world projects, and industry-focused skills. This course prepares you for roles like video editor, content creator, and motion graphics artist with practical experience and dedicated career support.
              </p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { role: 'Video Editor', icon: <Video size={18} />, color: 'bg-rose-50 border-rose-100 text-rose-600' },
                  { role: 'Film Editor', icon: <Film size={18} />, color: 'bg-amber-50 border-amber-100 text-amber-600' },
                  { role: 'Motion Graphics Artist', icon: <Zap size={18} />, color: 'bg-purple-50 border-purple-100 text-purple-600' },
                  { role: 'VFX Specialist', icon: <Wand2 size={18} />, color: 'bg-cyan-50 border-cyan-100 text-cyan-600' },
                  { role: 'Content Creator', icon: <Search size={18} />, color: 'bg-emerald-50 border-emerald-100 text-emerald-600' },
                  { role: 'Post-Production', icon: <Scissors size={18} />, color: 'bg-pink-50 border-pink-100 text-pink-600' }
                ].map((job, i) => (
                  <div key={i} className={`flex items-center gap-4 p-5 rounded-2xl border ${job.color} hover:shadow-lg transition-all duration-300 group`}>
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      {job.icon}
                    </div>
                    <span className="font-black text-sm text-[#05243b]">{job.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Transformation Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14937a]/10 text-[#14937a] text-xs font-black uppercase tracking-widest mb-6">
                <Play size={14} fill="currentColor" />
                Student Success
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-[#05243b] mb-4">
                How Our Students <span className="text-[#14937a]">Transformed</span>
              </h2>
              <p className="text-slate-500 text-lg font-medium max-w-xl">
                Real stories from our creators who mastered the art of cinematic editing and built successful careers.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-100 flex items-center gap-4 shadow-xl shadow-slate-200/50">
                <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center text-white">
                  <Star size={20} fill="currentColor" />
                </div>
                <div>
                  <p className="text-[#05243b] font-black text-lg leading-none mb-1">4.9/5</p>
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Google Rating</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {/* Horizontal Video Stories */}
            {[
              { id: 'dQw4w9WgXcQ', title: 'Student Journey - Success Story 1' },
              { id: 'dQw4w9WgXcQ', title: 'Life at BM Academy - Review' }
            ].map((video, i) => (
              <div key={i} className="group relative rounded-[3rem] overflow-hidden bg-[#05243b] aspect-video shadow-2xl hover:-translate-y-2 transition-all duration-700">
                <div className="absolute inset-0 bg-gradient-to-t from-[#05243b]/80 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <iframe 
                  className="w-full h-full relative z-0" 
                  src={`https://www.youtube.com/embed/${video.id}`} 
                  title={video.title}
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
                <div className="absolute bottom-8 left-8 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-white font-black text-lg">{video.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Vertical Success Stories (Reels Style) */}
          <div className="relative">
            <h3 className="text-2xl font-black text-[#05243b] mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-[#14937a] rounded-full" />
              Creator Spotlights
            </h3>
            
            <div className="flex gap-6 overflow-x-auto pb-12 pt-4 px-4 -mx-4 custom-scrollbar no-scrollbar scroll-smooth">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex-shrink-0 w-[280px] group">
                  <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-200 aspect-[9/16] shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05243b] via-transparent to-transparent z-10 opacity-60" />
                    <img 
                      src={`https://images.unsplash.com/photo-${1500000000000 + item}?w=400&q=80`} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                      alt="Student"
                    />
                    <div className="absolute bottom-8 left-8 right-8 z-20">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/30 group-hover:bg-[#14937a] transition-colors">
                        <Play size={20} fill="currentColor" />
                      </div>
                      <p className="text-white font-black text-lg leading-tight mb-1">Student Success {item}</p>
                      <p className="text-slate-300 text-[10px] font-bold uppercase tracking-widest">Video Editor @ Brand {item}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hiring & Placement Network Section */}
      <section className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14937a]/10 text-[#14937a] text-xs font-black uppercase tracking-widest mb-6">
              <Briefcase size={14} />
              Career Partners
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#05243b] mb-6">Our Hiring & <span className="text-[#14937a]">Placement Network</span></h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto font-medium">BM Academy students get career support and opportunities to work with leading media, digital, and production companies.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {[
              { name: 'Jaya TV', color: 'text-rose-600' },
              { name: 'Thanthi TV', color: 'text-amber-600' },
              { name: 'Sun TV', color: 'text-orange-600' },
              { name: 'Zee Tamil', color: 'text-purple-600' },
              { name: 'Netflix Vendor', color: 'text-red-600' },
              { name: 'Sun News', color: 'text-orange-700' }
            ].map((company, i) => (
              <div key={i} className="group h-32 bg-white border border-slate-100 rounded-[2rem] flex flex-col items-center justify-center p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#14937a]/30">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-3 group-hover:bg-[#14937a]/10 transition-colors">
                  <Film size={24} className="text-slate-300 group-hover:text-[#14937a]" />
                </div>
                <span className={`font-black text-xs uppercase tracking-tighter text-center ${company.color}`}>{company.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
             {['Viacom18', 'Sony Pix', 'Star Vijay', 'Social Beat', 'Zee Tamil', 'Amazon Prime'].map((c, i) => (
                <div key={i} className="p-4 border border-slate-100 rounded-xl text-center">
                  <span className="text-[10px] font-black text-[#05243b] uppercase tracking-widest">{c}</span>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Learning Methodology Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14937a]/10 text-[#14937a] text-xs font-black uppercase tracking-widest mb-6">
              <Cpu size={14} />
              Our Excellence
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#05243b] mb-6">Learning <span className="text-[#14937a]">Methodology</span></h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">A systematic 8-step journey designed to transform your creative potential into professional expertise.</p>
          </div>

          <div className="relative">
            {/* Desktop Wave Line */}
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 hidden lg:block px-20">
               <svg width="100%" height="200" viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
                  <path d="M0 100C150 100 150 20 300 20C450 20 450 180 600 180C750 180 750 20 900 20C1050 20 1050 100 1200 100" stroke="#14937a" strokeWidth="4" strokeDasharray="12 12"/>
               </svg>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-32 gap-x-12 relative">
              {[
                { title: 'Expert-Led Training', step: '01', icon: <Users size={28} />, color: 'from-purple-500 to-indigo-600', pos: 'lg:-translate-y-12' },
                { title: 'Concept Simplification', step: '02', icon: <Search size={28} />, color: 'from-blue-500 to-cyan-600', pos: 'lg:translate-y-12' },
                { title: 'Practical Learning', step: '03', icon: <Laptop size={28} />, color: 'from-teal-500 to-emerald-600', pos: 'lg:-translate-y-12' },
                { title: 'Personal Mentorship', step: '04', icon: <Users size={28} />, color: 'from-green-500 to-lime-600', pos: 'lg:translate-y-12' },
                { title: 'Portfolio Building', step: '05', icon: <Layers size={28} />, color: 'from-yellow-400 to-orange-500', pos: 'lg:-translate-y-12' },
                { title: 'AI Tool Mastery', step: '06', icon: <Zap size={28} />, color: 'from-orange-500 to-red-600', pos: 'lg:translate-y-12' },
                { title: 'Capstone Projects', step: '07', icon: <Rocket size={28} />, color: 'from-sky-500 to-blue-600', pos: 'lg:-translate-y-12' },
                { title: 'Industry-Ready Training', step: '08', icon: <Award size={28} />, color: 'from-pink-500 to-rose-600', pos: 'lg:translate-y-12' }
              ].map((method, i) => (
                <div key={i} className={`relative group flex flex-col items-center text-center ${method.pos} transition-all duration-700`}>
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center text-white mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative z-10 group-hover:scale-110 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] transition-all duration-500`}>
                    {method.icon}
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#05243b] text-white text-xs font-black flex items-center justify-center border-4 border-white shadow-xl">
                      {method.step}
                    </div>
                  </div>
                  <div className="max-w-[180px]">
                    <h3 className="text-lg font-black text-[#05243b] leading-tight group-hover:text-[#14937a] transition-colors uppercase tracking-tight">{method.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus & Form Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14937a]/10 text-[#14937a] text-xs font-black uppercase tracking-widest mb-6">
              <Film size={14} />
              Comprehensive Curriculum
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#05243b] mb-6">Video Editing <span className="text-[#14937a]">Course Syllabus</span></h2>
            <p className="text-slate-500 text-lg font-medium">A structured 20-week journey from basics to professional cinematic editing.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left side: Accordion */}
            <div className="lg:col-span-7 space-y-6">
              {curriculum.map((module, i) => (
                <div key={i} className="group border border-slate-100 rounded-[2.5rem] overflow-hidden transition-all duration-500 bg-white hover:shadow-2xl hover:border-[#14937a]/20">
                  <button 
                    onClick={() => setOpenModule(openModule === i ? null : i)}
                    className={`w-full p-8 text-left flex items-center justify-between transition-all duration-500 ${openModule === i ? 'bg-[#05243b] text-white' : 'hover:bg-slate-50'}`}
                  >
                    <div className="flex items-center gap-6">
                      <span className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg transition-all duration-500 ${openModule === i ? 'bg-[#14937a] text-white scale-110' : 'bg-slate-50 text-[#14937a]'}`}>
                        {i + 1}
                      </span>
                      <div>
                        <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${openModule === i ? 'text-[#14937a]' : 'text-slate-400'}`}>{module.module}</p>
                        <span className="font-black text-xl md:text-2xl tracking-tight">{module.title}</span>
                      </div>
                    </div>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${openModule === i ? 'bg-white/10 rotate-180' : 'bg-slate-100 text-[#05243b]'}`}>
                      <ChevronRight size={24} className={openModule === i ? 'rotate-90 text-[#14937a]' : ''} />
                    </div>
                  </button>
                  <div className={`transition-all duration-700 ease-in-out overflow-hidden ${openModule === i ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-10 bg-white">
                      <div className="space-y-4">
                        {module.topics.map((topic, j) => (
                          <div key={j} className="flex items-start gap-4 p-5 rounded-[1.5rem] bg-slate-50/50 border border-slate-100 group/topic hover:border-[#14937a]/30 hover:bg-white transition-all duration-300">
                            <div className="w-6 h-6 rounded-full bg-[#14937a]/10 flex items-center justify-center text-[#14937a] mt-0.5 shrink-0 group-hover/topic:bg-[#14937a] group-hover/topic:text-white transition-colors">
                              <CheckCircle size={14} />
                            </div>
                            <span className="text-slate-600 font-bold text-sm leading-relaxed">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right side: Form */}
            <div className="lg:col-span-5 sticky top-32">
              <div className="bg-[#05243b] rounded-[3.5rem] p-10 md:p-12 shadow-3xl relative overflow-hidden border border-white/5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#14937a]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2 text-center uppercase tracking-tight">Start Your Learning Journey</h3>
                  <p className="text-slate-400 text-sm font-bold text-center mb-10">Fill the form below and our experts will contact you.</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {[
                      { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Enter your name' },
                      { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: 'Enter 10-digit number' },
                      { label: 'Current City', name: 'city', type: 'text', placeholder: 'Enter your city' }
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-4">{field.label}</label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={formData[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#14937a]/50 focus:border-[#14937a] transition-all font-bold"
                          required
                        />
                      </div>
                    ))}
                    <button className="w-full bg-[#14937a] text-white font-black py-5 rounded-2xl hover:bg-white hover:text-[#05243b] transition-all duration-500 shadow-xl shadow-[#14937a]/20 cursor-pointer active:scale-95 text-lg uppercase tracking-widest mt-4">
                      Enroll Now
                    </button>
                  </form>
                  <p className="text-slate-500 text-[10px] font-bold text-center mt-8 uppercase tracking-widest flex items-center justify-center gap-2">
                    <Shield size={12} />
                    100% Privacy Protected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14937a]/10 text-[#14937a] text-xs font-black uppercase tracking-widest mb-6">
              <HelpCircle size={14} />
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#05243b] mb-6">Common <span className="text-[#14937a]">Queries</span></h2>
            <p className="text-slate-500 text-lg font-medium">Find answers to common questions about the Video Editing course at BM Academy.</p>
          </div>

          <div className="space-y-6">
            {[
              { q: 'What is the duration of the course?', a: 'The course duration is approximately 3 to 6 months, depending on the batch and learning pace, with structured modules and practical sessions.' },
              { q: 'Is the course suitable for beginners?', a: 'Yes, this course is beginner-friendly and starts from the basics, making it suitable for students with no prior experience.' },
              { q: 'What is the mode of training?', a: 'We offer classroom and online training, allowing students to learn in a flexible and convenient way.' },
              { q: 'What teaching methods are used in this course?', a: 'BM Academy follows a practical learning approach with live projects, hands-on training, and real-time guidance from trainers.' },
              { q: 'Will I work on real-world projects?', a: 'Yes, students will work on real-time projects to build a strong portfolio and gain practical experience.' },
              { q: 'Will I receive a certificate after completion?', a: 'Yes, you will receive a course completion certificate from BM Academy.' },
              { q: 'Do you provide placement support?', a: 'Yes, we provide career guidance, portfolio support, and interview preparation to help you start your career.' }
            ].map((faq, i) => (
              <div key={i} className="group border border-slate-100 rounded-[2rem] overflow-hidden transition-all duration-500 bg-white hover:border-[#14937a]/30">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-8 text-left flex items-center justify-between group-hover:bg-slate-50/50 transition-all"
                >
                  <span className={`font-black text-lg pr-8 transition-colors ${openFaq === i ? 'text-[#14937a]' : 'text-[#05243b]'}`}>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaq === i ? 'bg-[#14937a] text-white rotate-180' : 'bg-slate-100 text-[#05243b]'}`}>
                    <ChevronRight size={18} className={openFaq === i ? 'rotate-90' : ''} />
                  </div>
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-8 pt-0 text-slate-500 font-bold text-[15px] leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 rounded-[3.5rem] bg-[#05243b] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#14937a]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="relative z-10">
              <h3 className="text-white font-black text-3xl mb-4">Ready to Start Creating?</h3>
              <p className="text-slate-400 mb-10 max-w-xl mx-auto font-medium">Our creative mentors are here to help you build your cinematic career. Enroll today and master the art of storytelling.</p>
              <button 
                onClick={() => window.open('https://wa.me/919944940051?text=Hi, I have some questions about the Video Editing course.', '_blank')}
                className="px-12 py-5 bg-[#14937a] text-white font-black rounded-full hover:bg-white hover:text-[#05243b] transition-all shadow-2xl shadow-[#14937a]/20 cursor-pointer active:scale-95 text-lg"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles for Scrollbar */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #14937a;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #0d6d5a;
        }
      `}} />
    </div>
  );
};

export default VideoEditing;
