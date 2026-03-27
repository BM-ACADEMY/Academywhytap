import React, { useRef, useState, useEffect } from 'react';
import { FileText, Play, ChevronLeft, ChevronRight, X } from 'lucide-react'; 

const HeroSection = () => {
  const scrollContainerRef = useRef(null);
  // State to track the currently selected video for the modal
  const [activeVideo, setActiveVideo] = useState(null);
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

  const courses = [
    "Data Analytics",
    "Digital Marketing",
    "Full Stack Development",
    "Data Science",
    "Video Editing",
    "Python Programming"
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
      title: "Want a LinkedIn job search secret? 👀",
      description: "Want a LinkedIn job search secret? Most people don't know this. Follow our steps to optimize your profile and land interviews faster.",
      thumbnail: "https://i.ytimg.com/vi/Jd1EhinRUiE/maxresdefault.jpg"
    },
    {
      id: "fQSYisy70RY",
      title: "Are you confused about what your next plan should be? 🤔",
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

  // Close modal when clicking the dark background overlay
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setActiveVideo(null);
    }
  };

  return (
    <section className="relative min-h-screen bg-[#38062b] bg-gradient-to-br from-[#2a0420] via-[#4a0b3a] to-[#25031b] flex flex-col items-center justify-center pt-20 pb-12 px-4 font-sans text-white overflow-hidden">
      
      {/* Abstract Background Lines */}
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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight min-h-[1.2em]">
          Future-Proof Your Career in <br />
          <span className="text-[#ffd028] transition-all duration-500 inline-block animate-in fade-in slide-in-from-bottom-2">
            {courses[currentCourseIndex]}
          </span>
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-gray-100 mb-8 max-w-2xl leading-relaxed">
          Our top-rated <span className="font-bold">classroom/online</span> tech programs take you from zero experience to an <span className="font-bold text-[#ffd028]">AI-ready job</span> in less than a year.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8 w-full sm:w-auto">
          <button className="flex items-center justify-center gap-2 bg-white text-[#4a0b3a] px-8 py-3.5 rounded-lg font-bold hover:bg-gray-100 w-full sm:w-auto transition-colors">
            <FileText size={18} />
            Explore Tech Programs
          </button>
          <button className="flex items-center justify-center px-8 py-3.5 rounded-lg border border-white font-bold hover:bg-white/10 w-full sm:w-auto transition-colors">
            Talk to Career Advisor
          </button>
        </div>

        <p className="text-xs md:text-sm text-gray-300 font-medium tracking-wide">
          No prior experience required &bull; Free career guidance &bull; Limited Seats
        </p>
      </div>

      {/* Bottom Media Carousel/Grid with Arrows */}
      <div className="z-10 mt-16 w-full max-w-[1500px] relative px-4 md:px-12 group">
        
        {/* Left Scroll Arrow */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-[#2a2a2a]/90 hover:bg-[#4a4a4a] text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/20 opacity-0 group-hover:opacity-100 cursor-pointer"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scrollable Container */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto pb-6 px-2 snap-x snap-mandatory justify-start md:justify-center [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {academyVideos.map((video) => (
            <div 
              key={video.id} 
              onClick={() => setActiveVideo(video)}
              className="flex-shrink-0 w-[300px] h-[200px] md:w-[340px] md:h-[220px] bg-[#1a0515] rounded-[1rem] overflow-hidden border border-white/10 snap-center relative block cursor-pointer group hover:border-[#ffd028]/40 hover:shadow-[0_0_20px_rgba(255,208,40,0.15)] transition-all duration-300"
            >
              <img 
                src={video.thumbnail} 
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-5 z-20 flex flex-col justify-end">
                <p className="text-[13px] md:text-sm font-medium text-gray-100 leading-snug line-clamp-3 mb-4 drop-shadow-md">
                  {video.description}
                </p>
                <div className="flex items-center gap-3">
                  <div className="bg-white rounded-full p-2 flex items-center justify-center shadow-md">
                    <Play fill="black" size={14} className="text-black ml-0.5" />
                  </div>
                  <span className="text-xs font-bold text-white tracking-wide">
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
          className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-[#2a2a2a]/90 hover:bg-[#4a4a4a] text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-white/20 opacity-0 group-hover:opacity-100 cursor-pointer"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Video Modal Overlay */}
      {activeVideo && (
        <div 
          onClick={handleOverlayClick}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm transition-opacity"
        >
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10 animate-in fade-in zoom-in-95 duration-300">
            {/* Close Button */}
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-[#ffd028] text-white hover:text-black rounded-full transition-colors"
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