import React from 'react';
import { Clock, Briefcase, Star, PlayCircle, ArrowRight } from 'lucide-react';

const TrendingCourses = () => {
  // Course data based on user input
  const courses = [
    {
      id: 1,
      title: "AI-Powered Digital Marketing Course",
      duration: "3-4 Months",
      support: "Placement + Internship Support",
      badge: "POPULAR",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 2,
      title: "Full Stack Development Course (MERN)",
      duration: "6 Months",
      support: "100% Placement Assistance",
      badge: "MOST WANTED",
      image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 3,
      title: "Certification in Data Analytics & BI",
      duration: "6 Months",
      support: "Placement Support",
      badge: null,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: 4,
      title: "Creative Video Editing Course with AI",
      duration: "3-6 Months",
      support: "Premiere Pro + After Effects",
      badge: null,
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      isEditing: true // flag for specific icon
    }
  ];

  return (
    <section className="bg-[#f8fafc] py-24 px-6 md:px-12 lg:px-20 font-sans">
      
      {/* Section Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#05243b] tracking-tight mb-4">
          Top Job-Oriented Courses in Pondicherry
        </h2>
        <p className="text-slate-500 text-base md:text-lg max-w-3xl mx-auto font-medium">
          Upgrade your career with industry-focused training programs in Kottakuppam, Pondicherry with placement support designed to make you professional from day one.
        </p>
      </div>

      {/* Course Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {courses.map((course) => (
          <div 
            key={course.id} 
            className="bg-white rounded-3xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(5,36,59,0.1)] transition-all duration-300 flex flex-col group relative border border-slate-100"
          >
            {/* Top Right Badge */}
            {course.badge && (
              <div className="absolute top-0 right-0 z-20 bg-[#e8be66] text-[#05243b] text-[10px] font-black px-4 py-1.5 rounded-bl-xl tracking-wider uppercase shadow-md">
                {course.badge}
              </div>
            )}

            {/* Course Image */}
            <div className="w-full h-[200px] overflow-hidden relative bg-[#05243b]">
              <div className="absolute inset-0 bg-[#05243b]/20 z-10 group-hover:bg-transparent transition-colors duration-300"></div>
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Card Content */}
            <div className="p-7 flex flex-col flex-grow">
              
              {/* Duration Info */}
              <div className="flex items-center gap-1.5 text-[#a67c00] mb-3">
                <Clock size={14} strokeWidth={2.5} />
                <span className="text-[11px] font-bold tracking-wider uppercase">
                  {course.duration}
                </span>
              </div>

              {/* Course Title */}
              <h3 className="text-[19px] font-extrabold text-[#05243b] leading-snug mb-4 flex-grow">
                {course.title}
              </h3>

              {/* Placement / Special Support Info */}
              <div className="flex items-start gap-2 text-slate-500 mb-6 min-h-[40px]">
                {course.isEditing ? (
                  <PlayCircle size={16} className="text-[#14937a] mt-0.5 flex-shrink-0" />
                ) : (
                  <Briefcase size={16} className="text-[#14937a] mt-0.5 flex-shrink-0" />
                )}
                <span className="text-[13px] font-semibold leading-snug">
                  {course.support}
                </span>
              </div>

              {/* Ratings (Requested to keep stars) */}
              <div className="flex items-center gap-1 mb-6 border-t border-slate-100 pt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#e8be66] text-[#e8be66]" />
                ))}
                <span className="text-slate-400 text-xs font-bold ml-1">4.9/5</span>
              </div>

              {/* Start Learning Button */}
              <button className="w-full py-3.5 px-6 rounded-full border-2 border-[#14937a] text-[#14937a] font-bold text-[15px] hover:bg-[#14937a] hover:text-white transition-colors duration-300">
                Start Learning
              </button>
              
            </div>
          </div>
        ))}
      </div>

      {/* Explore All Courses Bottom Action */}
      <div className="flex justify-center">
        <button className="group flex items-center justify-center gap-2 px-10 py-4 bg-[#05243b] text-white rounded-full font-bold text-[16px] hover:bg-[#0a3354] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
          Explore All Courses
          <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </section>
  );
};

export default TrendingCourses;