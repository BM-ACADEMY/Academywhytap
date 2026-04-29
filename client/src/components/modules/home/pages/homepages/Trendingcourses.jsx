import React, { useState, useEffect } from 'react';
import { Clock, Briefcase, Star, PlayCircle, ArrowRight, BarChart3, ChevronLeft, ChevronRight, Users } from 'lucide-react';

const TrendingCourses = () => {
    // Carousel State
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardsToShow, setCardsToShow] = useState(3);

    // Course data
    const courses = [
        {
            id: 1,
            title: "AI-Powered Digital Marketing Course",
            duration: "3–4 Months",
            support: "Placement + Internship Support",
            badge: "POPULAR",
            students: "7.3K",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        },
        {
            id: 2,
            title: "Full Stack Development Course (MERN Stack)",
            duration: "6 Months",
            support: "100% Placement Assistance",
            badge: "MOST WANTED",
            students: "7.5K",
            image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        },
        {
            id: 3,
            title: "Certification in Data Analytics & Business Intelligence",
            duration: "6 Months",
            support: "Placement Support",
            badge: "TRENDING",
            students: "7.9K",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        },
        {
            id: 4,
            title: "Creative Video Editing Course with AI Tools",
            duration: "3–6 Months",
            support: "Premiere Pro + After Effects",
            badge: "CREATIVE",
            students: "6.8K",
            image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            isEditing: true
        }
    ];

    // Responsive handling
    useEffect(() => {
        const updateCardsToShow = () => {
            if (window.innerWidth >= 1024) setCardsToShow(3);
            else if (window.innerWidth >= 768) setCardsToShow(2);
            else setCardsToShow(1);
        };
        updateCardsToShow();
        window.addEventListener('resize', updateCardsToShow);
        return () => window.removeEventListener('resize', updateCardsToShow);
    }, []);

    const nextSlide = () => {
        if (currentIndex < courses.length - cardsToShow) setCurrentIndex(currentIndex + 1);
        else setCurrentIndex(0);
    };

    const prevSlide = () => {
        if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
        else setCurrentIndex(courses.length - cardsToShow);
    };

    return (
        <section className="bg-white py-24 px-6 md:px-12 lg:px-20 font-sans relative overflow-hidden" id="trending-courses">
            {/* Background Decorative Glow */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#14937a]/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto text-center mb-20 space-y-4 relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14937a]/10 border border-[#14937a]/20 mb-2">
                    <span className="text-[#14937a] text-[11px] font-black uppercase tracking-[0.2em]">Our Programs</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-[#05243b] leading-tight">
                    Top Job-Oriented <span className="text-[#14937a]">Courses</span>
                </h2>
                <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
                    Upgrade your career with industry-focused training programs and placement support.
                </p>
            </div>

            {/* Carousel Container */}
            <div className="max-w-[1440px] mx-auto relative z-10">
                {/* Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 w-12 md:h-12 w-12 h-12 bg-white rounded-full shadow-2xl border border-slate-100 flex items-center justify-center text-[#05243b] hover:bg-[#14937a] hover:text-white transition-all z-20 active:scale-90"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 w-12 md:h-12 w-12 h-12 bg-white rounded-full shadow-2xl border border-slate-100 flex items-center justify-center text-[#05243b] hover:bg-[#14937a] hover:text-white transition-all z-20 active:scale-90"
                >
                    <ChevronRight size={24} />
                </button>

                <div className="overflow-hidden py-10 px-2">
                    <div 
                        className="flex transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1)" 
                        style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
                    >
                        {courses.map((course) => (
                            <div
                                key={course.id}
                                style={{ flex: `0 0 ${100 / cardsToShow}%` }}
                                className="px-4"
                            >
                                <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(20,147,122,0.12)] transition-all duration-500 group border border-slate-50 p-3 relative">
                                    
                                    {course.badge && (
                                        <div className="absolute top-6 right-6 z-30 bg-[#e8be66] text-[#05243b] text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg tracking-wider uppercase">
                                            {course.badge}
                                        </div>
                                    )}

                                    <div className="relative w-full aspect-[16/10] rounded-[1.8rem] overflow-hidden">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#05243b]/60 to-transparent"></div>

                                        <div className="absolute bottom-4 left-4 z-20 bg-white/95 backdrop-blur-md text-[#14937a] px-5 py-2 rounded-2xl text-[12px] font-black shadow-xl flex items-center gap-2">
                                            <Clock size={14} />
                                            {course.duration}
                                        </div>
                                    </div>

                                    <div className="pt-8 pb-4 px-5 text-center">
                                        <h3 className="text-[20px] font-black text-[#05243b] mb-4 leading-tight min-h-[60px] flex items-center justify-center">
                                            {course.title}
                                        </h3>

                                        <div className="flex items-center justify-center gap-2 text-[#14937a] font-black text-[12px] tracking-wider uppercase mb-8">
                                            {course.isEditing ? <PlayCircle size={16} /> : <Briefcase size={16} />}
                                            {course.support}
                                        </div>

                                        <div className="flex items-center justify-between border-t border-slate-100 pt-6 mb-8">
                                            <div className="flex items-center gap-2 text-slate-400">
                                                <Users size={16} />
                                                <span className="text-[13px] font-black">{course.students}</span>
                                            </div>
                                            <div className="flex items-center gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={14} className="fill-[#e8be66] text-[#e8be66]" />
                                                ))}
                                            </div>
                                        </div>

                                        <button className="w-full py-5 rounded-[1.2rem] bg-[#05243b] text-white font-black text-sm uppercase tracking-widest transition-all duration-300 group-hover:bg-[#14937a] shadow-xl shadow-[#05243b]/10 active:scale-95">
                                            Start Learning
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Status Dots */}
                <div className="flex justify-center gap-3 mt-4">
                    {[...Array(courses.length - cardsToShow + 1)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-2 rounded-full transition-all duration-500 ${currentIndex === i ? 'w-8 bg-[#14937a]' : 'w-2 bg-slate-200'}`}
                        />
                    ))}
                </div>

                <div className="flex justify-center mt-16">
                    <button className="group flex items-center gap-3 px-10 py-5 bg-white border-2 border-[#05243b] text-[#05243b] rounded-2xl font-black text-[16px] hover:bg-[#05243b] hover:text-white transition-all shadow-xl shadow-slate-100">
                        Explore All Courses
                        <ArrowRight size={20} className="transform group-hover:translate-x-2 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TrendingCourses;