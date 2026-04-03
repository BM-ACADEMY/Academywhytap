import React, { useRef } from 'react';
import { BarChart3, ChevronLeft, ChevronRight, Users, Star, ArrowRight } from 'lucide-react';

const Trendingcourses = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      // Adjusted scroll amount for the new wider cards + gap (400px width + 32px gap)
      const scrollAmount = direction === 'left' ? -432 : 432;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const courses = [
    {
      id: 1,
      title: "AI-Powered Digital Marketing Course",
      duration: "3–4 Months",
      supportText: "Placement + Internship Support",
      students: "950+",
      rating: 5,
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Full Stack Development Course (MERN Stack)",
      duration: "6 Months",
      supportText: "100% Placement Assistance",
      students: "1,200+",
      rating: 5,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Certification in Data Analytics & Business Intelligence",
      duration: "6 Months",
      supportText: "Placement Support",
      students: "850+",
      rating: 5,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      title: "Creative Video Editing Course with AI Tools",
      duration: "3–6 Months",
      supportText: "Premiere Pro + After Effects", 
      students: "600+",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Helper function to render stars
  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        size={16} 
        className={`${index < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
        fill={index < Math.floor(rating) ? 'currentColor' : 'none'} 
      />
    ));
  };

  return (
    <section className="py-20 px-4 max-w-[1500px] mx-auto font-sans bg-white">
      
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <BarChart3 size={32} className="text-[#902157]" />
          <h2 className="text-3xl md:text-4xl font-bold text-[#902157]">
            Top Job-Oriented Courses in Pondicherry
          </h2>
        </div>
        <p className="text-gray-800 text-lg md:text-xl font-medium max-w-3xl mx-auto">
          Upgrade your career with industry-focused training programs in Kottakuppam, Pondicherry with placement support
        </p>
      </div>

      {/* Carousel Wrapper - Added horizontal padding to make room for arrows */}
      <div className="relative w-full max-w-[1350px] mx-auto px-12 md:px-16 mb-16 group">
        
        {/* Left Arrow - Positioned absolutely inside the wrapper, but outside the scroll container */}
        <button 
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-pink-100 hover:bg-pink-200 text-pink-500 rounded-full flex items-center justify-center transition-colors shadow-sm cursor-pointer"
          aria-label="Scroll left"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Scrollable Track */}
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 lg:gap-8 overflow-x-auto pb-10 pt-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {courses.map((course) => (
            <div 
              key={course.id}
              // Wider card width ensures exactly 3 fit nicely on desktop
              className="flex-shrink-0 w-[320px] md:w-[380px] lg:w-[400px] bg-white rounded-3xl border border-[#902157]/20 shadow-[0_4px_20px_rgb(0,0,0,0.04)] p-4 snap-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 group/card cursor-pointer flex flex-col"
            >
              
              {/* Image Container with floating badge */}
              <div className="relative mb-8">
                {/* Changed to aspect-video (16:9) for wider images */}
                <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-video">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                  />
                </div>
                {/* Overlapping Duration Badge - slightly thicker border to match reference */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#f0467b] text-white px-6 py-1.5 rounded-full border-[4px] border-white font-bold text-sm shadow-sm whitespace-nowrap z-10">
                  {course.duration}
                </div>
              </div>

              {/* Card Content Area */}
              <div className="px-3 pb-2 flex flex-col flex-grow items-center text-center">
                <h3 className="text-[18px] font-bold text-gray-900 leading-snug h-[54px] mb-3 flex items-center justify-center w-full px-2">
                  {course.title}
                </h3>
                
                <p className="text-[#902157] font-semibold text-sm mb-8 h-[20px]">
                  {course.supportText}
                </p>

                {/* Footer Stats Row */}
                <div className="flex items-center justify-between w-full mb-6 text-sm mt-auto border-t border-gray-100 pt-5">
                  <div className="flex items-center gap-1.5 text-gray-600 font-medium">
                    <Users size={16} className="text-gray-400" />
                    <span>{course.students} Students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {renderStars(course.rating)}
                  </div>
                </div>

                {/* Enroll Button */}
                <button className="w-full bg-[#902157] text-white py-3.5 rounded-[16px] font-bold text-base hover:bg-[#7a1c4a] transition-colors active:scale-[0.98]">
                  Start Learning
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-pink-100 hover:bg-pink-200 text-pink-500 rounded-full flex items-center justify-center transition-colors shadow-sm cursor-pointer"
          aria-label="Scroll right"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Bottom Button Area */}
      <div className="flex justify-center">
        <button className="flex items-center gap-2 bg-transparent border-2 border-[#902157] text-[#902157] px-8 py-3.5 rounded-full font-bold text-lg hover:bg-[#902157] hover:text-white transition-all duration-300 group">
          Explore All Courses 
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </button>
      </div>

    </section>
  );
};

export default Trendingcourses;