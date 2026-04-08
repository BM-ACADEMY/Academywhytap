import React, { useRef, useState, useEffect } from 'react';
import { 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Rocket, 
  Phone,
  CheckCircle2, 
  Briefcase, 
  Info
} from 'lucide-react'; 
import desktopBg from '../../../../assets/course/digital-marketing/desktop.png';

const HeroSection = () => {
  const scrollContainerRef = useRef(null);
  const [activeVideo, setActiveVideo] = useState(null);
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  const courses = [
    "Java Full Stack Development",
    "Data Analytics",
    "AI Digital Marketing",
    "Video Editing"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCourseIndex((prev) => (prev + 1) % courses.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -356 : 356;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const academyVideos = [
    {
      id: "Jd1EhinRUiE",
      title: "Want a LinkedIn job search secret?",
      description: "Want a LinkedIn job search secret? Most people don't know this. Follow our steps to optimize your profile and land interviews faster.",
      thumbnail: "https://i.ytimg.com/vi/Jd1EhinRUiE/maxresdefault.jpg"
    },
    {
      id: "fQSYisy70RY",
      title: "Are you confused about what your next plan should be?",
      description: "Are you confused about what your next plan should be? Join our free consultation session and get clarity on your career path.",
      thumbnail: "https://i.ytimg.com/vi/fQSYisy70RY/maxresdefault.jpg"
    },
    {
      id: "dTxpHz4EsP0",
      title: "Land Your Dream IT Job in 60 Days with BM Academy!",
      description: "Automating over 1000 job applications tailored to your target roles, industries, and locations. Land your dream IT job.",
      thumbnail: "https://i.ytimg.com/vi/dTxpHz4EsP0/maxresdefault.jpg"
    },
    {
      id: "TKithZX0jD0",
      title: "100days challenge Day 09 BM Academy",
      description: "100 days challenge Day 09. Follow along our web development journey and learn how to build real-world projects from scratch.",
      thumbnail: "https://i.ytimg.com/vi/TKithZX0jD0/maxresdefault.jpg"
    },
    {
      id: "TdC6bRSL43o",
      title: "BM Academy Official Website Launch Today",
      description: "BM Academy's official website is Launch Today! Dive into a world of limitless learning opportunities with our specialized programs.",
      thumbnail: "https://i.ytimg.com/vi/TdC6bRSL43o/maxresdefault.jpg"
    }
  ];

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setActiveVideo(null);
    }
  };

  return (
    <section className="relative font-sans overflow-hidden">
      
      {/* ========================================
        HERO SECTION (Dark Background - Centered)
        ======================================== */}
      <div className="relative bg-[#02182b] pt-20 pb-36 px-6 md:px-12 lg:px-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${desktopBg})` }}
        />
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center space-y-8">
          
          {/* Top Badge */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#063343] border border-[#0a4b60]">
            <span className="text-[#38c8b4] text-xs font-bold tracking-wider uppercase">
              Welcome to BM Academy - Building Careers in Tech & Digital Skills
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.15]">
            Best IT & Digital <br className="hidden md:block" />
            Skills Training Institute in <br className="hidden md:block" />
            <span className="bg-linear-to-r from-[#FEDA00] to-[#D99000] bg-clip-text text-transparent inline-block">Pondicherry</span>
          </h1>

          {/* Animated Course Highlight */}
          <div className="text-xl md:text-2xl font-bold text-slate-200 min-h-[1.5em]">
            Master <span className="bg-linear-to-r from-[#FEDA00] to-[#D99000] bg-clip-text text-transparent transition-all duration-500 inline-block animate-in fade-in slide-in-from-bottom-2">
              {courses[currentCourseIndex]}
            </span>
          </div>

          {/* SEO Subheading */}
          <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">
            The <span className="font-bold text-white">Best Training Institute in Kottakuppam</span> & Pondicherry. Serving students across Tamil Nadu with top-rated programs including a <span className="font-bold text-white">Java Full Stack Development Course</span>, <span className="font-bold text-white">Data Analytics Course</span>, <span className="font-bold text-white">AI Digital Marketing Course</span>, and <span className="font-bold text-white">Video Editing Course</span>.
          </p>

          {/* Features List */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm md:text-base font-medium text-slate-300 pt-2">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={18} className="text-[#38c8b4]" />
              <span>Learn from experts</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket size={18} className="text-[#38c8b4]" />
              <span>Work on live projects</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase size={18} className="text-[#38c8b4]" />
              <span>100% Placement Assistance</span>
            </div>
          </div>

          {/* Info Notice */}
          <div className="flex items-center justify-center gap-2 text-[#e8be66] font-semibold text-sm md:text-base bg-[#0a4b60]/30 px-6 py-2 rounded-full border border-[#0a4b60]/50">
            <Info size={18} />
            <span>No coding background required | Beginner to Advanced</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-[#14937a] hover:bg-[#117a65] text-white rounded-full font-bold text-[16px] transition-all shadow-lg shadow-[#14937a]/20">
              <Rocket size={18} />
              Explore Courses
            </button>
            <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border-2 border-slate-500 hover:border-slate-300 hover:bg-white/5 text-white rounded-full font-bold text-[16px] transition-all">
              <Phone size={18} />
              Book Free Demo
            </button>
          </div>

        </div>
      </div>

      {/* ========================================
        STATS BANNER (Overlapping Section)
        ======================================== */}
      <div className="bg-white relative z-20">
        <div className="max-w-6xl mx-auto px-4 md:px-8 absolute left-0 right-0 -top-16">
          <div className="bg-linear-to-b from-[#f4f5f7] to-[#e4e7eb] rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.3)] border border-white p-8 md:p-10">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 divide-x divide-slate-300/50">
              
              <div className="flex flex-col items-center justify-center text-center px-2 border-none">
                <h3 className="text-3xl md:text-4xl font-black text-[#a67c00] drop-shadow-sm mb-2">3,000+</h3>
                <p className="text-[11px] md:text-xs font-bold text-slate-600 tracking-widest uppercase">Students Trained</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center px-2">
                <h3 className="text-3xl md:text-4xl font-black text-[#a67c00] drop-shadow-sm mb-2">100+</h3>
                <p className="text-[11px] md:text-xs font-bold text-slate-600 tracking-widest uppercase">Hiring Partners</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center px-2">
                <h3 className="text-3xl md:text-4xl font-black text-[#a67c00] drop-shadow-sm mb-2">1,000+</h3>
                <p className="text-[11px] md:text-xs font-bold text-slate-600 tracking-widest uppercase">Students Placed</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center px-2">
                <h3 className="text-3xl md:text-4xl font-black text-[#a67c00] drop-shadow-sm mb-2">50+</h3>
                <p className="text-[11px] md:text-xs font-bold text-slate-600 tracking-widest uppercase">Industry Experts</p>
              </div>
              <div className="flex flex-col items-center justify-center text-center px-2 col-span-2 md:col-span-1 border-none md:border-solid">
                <h3 className="text-3xl md:text-4xl font-black text-[#a67c00] drop-shadow-sm mb-2">5+</h3>
                <p className="text-[11px] md:text-xs font-bold text-slate-600 tracking-widest uppercase">Years Experience</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ========================================
        VIDEO CAROUSEL SECTION (Light Background)
        ======================================== */}
      <div className="bg-white pt-32 pb-16 px-4 md:px-12">
        <div className="max-w-375 mx-auto relative group">
          
          <h2 className="text-2xl font-bold text-[#02182b] mb-8 px-2 md:px-6">Latest Updates & Student Success</h2>

          {/* Left Scroll Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 md:left-2 top-[60%] -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white text-[#02182b] rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 shadow-xl border border-slate-200 opacity-0 group-hover:opacity-100 cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Scrollable Container */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto pb-8 px-2 md:px-6 snap-x snap-mandatory justify-start [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {academyVideos.map((video) => (
              <div 
                key={video.id} 
                onClick={() => setActiveVideo(video)}
                className="flex-shrink-0 w-[300px] h-[200px] md:w-[340px] md:h-[220px] bg-[#02182b] rounded-[1rem] overflow-hidden shadow-lg snap-center relative block cursor-pointer group hover:ring-2 hover:ring-[#14937a] hover:-translate-y-1 transition-all duration-300"
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02182b] via-[#02182b]/80 to-transparent z-10"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-5 z-20 flex flex-col justify-end">
                  <p className="text-[13px] md:text-sm font-medium text-slate-200 leading-snug line-clamp-3 mb-4 drop-shadow-md">
                    {video.description}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#14937a] rounded-full p-2 flex items-center justify-center shadow-md">
                      <Play fill="white" size={14} className="text-white ml-0.5" />
                    </div>
                    <span className="text-xs font-bold text-white tracking-wide uppercase">
                      Watch Now
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Scroll Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 md:right-2 top-[60%] -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-white/90 hover:bg-white text-[#02182b] rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 shadow-xl border border-slate-200 opacity-0 group-hover:opacity-100 cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* ========================================
        VIDEO MODAL
        ======================================== */}
      {activeVideo && (
        <div 
          onClick={handleOverlayClick}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-[#02182b]/95 p-4 backdrop-blur-md transition-opacity"
        >
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-slate-700 animate-in fade-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-[#e8be66] text-white hover:text-black rounded-full transition-colors"
              aria-label="Close video"
            >
              <X size={24} />
            </button>
            
            {/* Embedded YouTube Player */}
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
              title={activeVideo.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}

    </section>
  );
};

export default HeroSection;