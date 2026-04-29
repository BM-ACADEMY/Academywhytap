import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, ChevronRight,Clock  } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: 'PG Certification in AI-Powered Full Stack Development',
    shortName: 'Full Stack Development',
    duration: '3 / 6 Months',
    students: '4800+',
    rating: 4.8,
    tag: '100% Assured Placement + Stipend',
    tagColor: '#14937a',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80',
    href: '/course/full-stack-development',
    badge: 'MOST WANTED',
  },
  {
    id: 2,
    title: 'PG Certification in AI-Powered Digital Marketing',
    shortName: 'Digital Marketing',
    duration: '3 / 6 Months',
    students: '5200+',
    rating: 4.9,
    tag: '100% Assured Placement + Stipend',
    tagColor: '#14937a',
    image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
    href: '/course/digital-marketing',
    badge: 'POPULAR',
  },
  {
    id: 3,
    title: 'Certification in AI-Powered Data Analytics',
    shortName: 'Data Analysis',
    duration: '3 / 6 Months',
    students: '5900+',
    rating: 4.7,
    tag: 'Placement Assistance',
    tagColor: '#05243b',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    href: '/course/data-analysis',
    badge: 'TRENDING',
  },
  {
    id: 4,
    title: 'Basic to Advanced Video Editing with AI',
    shortName: 'Video Editing',
    duration: '3 / 6 Months',
    students: '3200+',
    rating: 4.6,
    tag: 'Placement Assistance',
    tagColor: '#05243b',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80',
    href: '/course/video-editing',
    badge: 'CREATIVE',
  },
];

const StarRating = ({ rating }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <Star key={s} size={13} fill={s <= Math.round(rating) ? '#e8be66' : 'none'} stroke="#e8be66" />
    ))}
    <span className="text-sm text-gray-500 ml-1">{rating}</span>
  </div>
);

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-[2rem] shadow-sm hover:shadow-[0_20px_50px_rgba(5,36,59,0.08)] transition-all duration-500 overflow-hidden group flex flex-col hover:-translate-y-2 border border-[#05243b] p-2.5">
    <div className="relative overflow-hidden rounded-[1.5rem]">
      <img
        src={course.image}
        alt={course.shortName}
        className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      <span className="absolute top-3 right-3 bg-[#e8be66] text-[#05243b] text-[10px] font-black px-3 py-1 rounded-full shadow-sm tracking-wider uppercase">
        {course.badge}
      </span>
      <div
        className="absolute bottom-3 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-white text-[#14937a] text-[12px] font-bold shadow-md border border-slate-100 flex items-center gap-1.5 min-w-max"
      >
        <Clock size={14} />
        {course.duration}
      </div>
    </div>

    <div className="p-5 flex flex-col flex-1 text-center">
      <h3 className="text-[17px] font-extrabold text-[#05243b] mb-1.5 leading-[1.3] h-[45px] flex items-center justify-center">
        {course.title}
      </h3>
      <div className="flex items-center justify-center gap-2 font-bold text-[13px] tracking-wide uppercase mb-4" style={{ color: course.tagColor }}>
        {course.tag}
      </div>
      <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-auto mb-4">
        <div className="flex items-center gap-1.5 text-slate-400">
          <Users size={14} />
          <span className="text-[12px] font-bold">{course.students} Students</span>
        </div>
        <StarRating rating={course.rating} />
      </div>
      <Link
        to={course.href}
        className="block w-full text-center py-3.5 rounded-xl bg-[#05243b] text-white font-bold text-[14px] uppercase tracking-wider transition-all hover:bg-[#14937a] hover:shadow-lg active:scale-95"
      >
        Enroll Now
      </Link>
    </div>
  </div>
);

const CoursesPage = () => (
  <div className="min-h-screen bg-[#fcfcfc]">
    <div className="max-w-7xl mx-auto px-6 py-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-10">
        <Link to="/" className="text-[#14937a] hover:underline font-bold uppercase tracking-wider text-[12px]">Home</Link>
        <ChevronRight size={14} className="text-gray-400" />
        <span className="text-[#05243b] font-bold uppercase tracking-wider text-[12px]">Courses</span>
      </div>

      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center mb-16 space-y-3">
        <h1 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#05243b] tracking-tight leading-tight">
          Explore Our <span className="text-[#14937a]">Professional Courses</span>
        </h1>
        <p className="text-slate-500 text-sm md:text-[17px] max-w-2xl mx-auto font-medium leading-relaxed">
          Industry-ready, AI-powered programs designed to make you job-ready with 100% placement support across Pondicherry & Tamil Nadu.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </div>
  </div>
);

export default CoursesPage;
