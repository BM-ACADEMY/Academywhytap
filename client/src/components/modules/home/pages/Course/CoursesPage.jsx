import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Users, ChevronRight, Clock, Rocket, Award, ShieldCheck, Zap } from 'lucide-react';
import desktopBanner from '../../../../../assets/course/digital-marketing/desktop.png';
import mobileBanner from '../../../../../assets/course/digital-marketing/mobile.png';

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
    <span className="text-sm font-black text-[#05243b] ml-1">{rating}</span>
  </div>
);

const CourseCard = ({ course }) => (
  <div className="bg-white rounded-[2.5rem] shadow-sm hover:shadow-[0_30px_60px_rgba(5,36,59,0.12)] transition-all duration-500 overflow-hidden group flex flex-col hover:-translate-y-2 border border-slate-100 relative">
    <div className="relative overflow-hidden m-3 rounded-[1.8rem]">
      <img
        src={course.image}
        alt={course.shortName}
        className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#05243b]/60 to-transparent" />
      <span className="absolute top-4 right-4 bg-[#e8be66] text-[#05243b] text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg tracking-widest uppercase">
        {course.badge}
      </span>
      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 px-5 py-2 rounded-2xl bg-white/90 backdrop-blur-md text-[#14937a] text-[12px] font-black shadow-xl border border-white/20 flex items-center gap-2 min-w-max"
      >
        <Clock size={14} strokeWidth={3} />
        {course.duration}
      </div>
    </div>

    <div className="px-7 pb-8 pt-4 flex flex-col flex-1">
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 rounded-lg bg-[#14937a]/10 text-[#14937a] text-[10px] font-black uppercase tracking-widest">
           Certification
        </span>
        <StarRating rating={course.rating} />
      </div>

      <h3 className="text-[20px] font-black text-[#05243b] mb-3 leading-tight group-hover:text-[#14937a] transition-colors">
        {course.title}
      </h3>
      
      <div className="flex items-center gap-2 font-bold text-[11px] tracking-widest uppercase mb-6" style={{ color: course.tagColor }}>
        <ShieldCheck size={14} />
        {course.tag}
      </div>

      <div className="flex items-center justify-between border-t border-slate-50 pt-6 mt-auto mb-6">
        <div className="flex items-center gap-2 text-slate-400">
          <Users size={16} />
          <span className="text-[13px] font-bold">{course.students} Learners</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-[#14937a] group-hover:text-white transition-all duration-300">
          <ChevronRight size={18} />
        </div>
      </div>

      <Link
        to={course.href}
        className="block w-full text-center py-4 rounded-2xl bg-[#05243b] text-white font-black text-[13px] uppercase tracking-widest transition-all hover:bg-[#14937a] hover:shadow-xl shadow-[#05243b]/10 active:scale-95"
      >
        View Course Details
      </Link>
    </div>
  </div>
);

const CoursesPage = () => (
  <div className="min-h-screen bg-[#fcfcfc] font-sans">
    {/* Premium Banner Section */}
    <div className="relative pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden bg-[#05243b]">
      {/* Background Imagery */}
      <div className="absolute inset-0">
        <img src={mobileBanner} alt="mobile banner" className="w-full h-full object-cover md:hidden opacity-30" />
        <img src={desktopBanner} alt="desktop banner" className="w-full h-full object-cover hidden md:block opacity-30" />
        <div className="absolute inset-0 bg-[#05243b]/60 md:bg-transparent md:bg-gradient-to-r md:from-[#05243b] md:via-[#05243b]/60 md:to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm mb-12">
          <Link to="/" className="text-[#14937a] hover:text-white transition-colors font-black uppercase tracking-widest text-[11px]">Home</Link>
          <ChevronRight size={14} className="text-white/20" />
          <span className="text-white/60 font-black uppercase tracking-widest text-[11px]">Professional Courses</span>
        </div>

        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
            <Rocket size={16} className="text-[#14937a]" />
            <span className="text-white text-[11px] font-black uppercase tracking-widest">Pondicherry's #1 Skill Academy</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8">
            Master the <span className="text-[#14937a]">Skills</span> <br />
            of the Future
          </h1>
          <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
            Join 15,000+ successful alumni in AI-powered programs designed by industry experts. Get 100% placement support and real-world project experience.
          </p>
        </div>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#14937a]/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#02182b] rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
    </div>

    {/* Course Grid Section */}
    <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-20 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {courses.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>

      {/* Trust Section Below Grid */}
      <div className="mt-32 grid md:grid-cols-3 gap-12 border-t border-slate-100 pt-32">
        {[
          { icon: <Award size={32} />, title: "Certified Excellence", desc: "Our certifications are recognized by leading global tech corporations." },
          { icon: <Users size={32} />, title: "Expert Mentors", desc: "Learn from professionals who have built products for top Fortune 500 companies." },
          { icon: <Zap size={32} />, title: "Live Projects", desc: "Apply your knowledge immediately with hands-on real-world business challenges." }
        ].map((item, i) => (
          <div key={i} className="text-center group">
            <div className="w-20 h-20 rounded-[2rem] bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#14937a] mx-auto mb-8 group-hover:bg-[#14937a] group-hover:text-white transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
              {item.icon}
            </div>
            <h3 className="text-xl font-black text-[#05243b] mb-4">{item.title}</h3>
            <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default CoursesPage;
