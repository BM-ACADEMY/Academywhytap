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
            students: "7,300+",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        },
        {
            id: 2,
            title: "Full Stack Development Course (MERN Stack)",
            duration: "6 Months",
            support: "100% Placement Assistance",
            badge: "MOST WANTED",
            students: "7,530+",
            image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        },
        {
            id: 3,
            title: "Certification in Data Analytics & Business Intelligence",
            duration: "6 Months",
            support: "Placement Support",
            badge: null,
            students: "7,900+",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        },
        {
            id: 4,
            title: "Creative Video Editing Course with AI Tools",
            duration: "3–6 Months",
            support: "Premiere Pro + After Effects",
            badge: null,
            students: "6,800+",
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
        if (currentIndex < courses.length - cardsToShow) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(courses.length - cardsToShow);
        }
    };

    return (
        <section className="bg-[#fcfcfc] py-16 px-6 md:px-12 lg:px-20 font-sans relative overflow-hidden">

            {/* Background Decorative Glow */}
            <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#14937a]/5 to-transparent rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto text-center mb-12 space-y-3 relative z-10">
                <div className="inline-flex items-center gap-2 text-[#05243b] justify-center">
                    <BarChart3 size={24} className="text-[#14937a]" />
                    <h2 className="text-2xl md:text-3xl lg:text-[38px] font-extrabold tracking-tight">
                        Top Job-Oriented Courses in Pondicherry
                    </h2>
                </div>
                <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto font-medium">
                    Upgrade your career with industry-focused training programs in Kottakuppam, Pondicherry with placement support
                </p>
            </div>

            {/* Carousel Container */}
            <div className="max-w-7xl mx-auto relative px-4 md:px-12 z-10">

                {/* Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-[40%] -translate-y-1/2 -translate-x-2 md:-translate-x-4 w-10 md:w-12 h-10 md:h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#05243b] transition-all z-20 hover:scale-110 active:scale-95"
                >
                    <ChevronLeft size={24} />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-[40%] -translate-y-1/2 translate-x-2 md:translate-x-4 w-10 md:w-12 h-10 md:h-12 bg-white rounded-full shadow-lg border border-slate-100 flex items-center justify-center text-slate-400 hover:text-[#05243b] transition-all z-20 hover:scale-110 active:scale-95"
                >
                    <ChevronRight size={24} />
                </button>

                <div className="overflow-hidden py-4 px-1">
                    <div 
                        className="flex transition-transform duration-500 ease-out" 
                        style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}
                    >
                        {courses.map((course) => (
                            <div
                                key={course.id}
                                style={{ flex: `0 0 ${100 / cardsToShow}%` }}
                                className="px-3"
                            >
                                {/* EXACT LINE BORDER UPDATED HERE: border-[#05243b] */}
                                <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(5,36,59,0.08)] transition-all duration-500 group border border-[#05243b] p-2.5 relative">
                                    
                                    {/* Bubble Decoration */}
                                    <div className="absolute top-0 right-0 w-12 h-12 bg-[#14937a]/10 rounded-bl-[100%] pointer-events-none translate-x-1/3 -translate-y-1/3 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 opacity-30"></div>

                                    {course.badge && (
                                        <div className="absolute top-6 right-6 z-30 bg-[#e8be66] text-[#05243b] text-[10px] font-black px-3 py-1 rounded-full shadow-sm tracking-wider uppercase">
                                            {course.badge}
                                        </div>
                                    )}

                                    <div className="relative w-full aspect-[16/10] rounded-[1.5rem] overflow-hidden">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 bg-white text-[#14937a] px-5 py-1.5 rounded-full text-[12px] font-bold shadow-md border border-slate-100 flex items-center gap-1.5 min-w-max">
                                            <Clock size={14} />
                                            {course.duration}
                                        </div>
                                    </div>

                                    <div className="pt-8 pb-3 px-4 text-center space-y-3.5">
                                        <h3 className="text-[18px] font-extrabold text-[#05243b] leading-[1.3] px-1 h-[48px] flex items-center justify-center">
                                            {course.title}
                                        </h3>

                                        <div className="flex items-center justify-center gap-2 text-[#14937a] font-bold text-[13px] tracking-wide uppercase">
                                            {course.isEditing ? <PlayCircle size={14} /> : <Briefcase size={14} />}
                                            {course.support}
                                        </div>

                                        <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-1">
                                            <div className="flex items-center gap-1.5 text-slate-400">
                                                <Users size={14} />
                                                <span className="text-[12px] font-bold">{course.students} Students</span>
                                            </div>
                                            <div className="flex items-center gap-0.5">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star key={i} size={13} className="fill-[#e8be66] text-[#e8be66]" />
                                                ))}
                                            </div>
                                        </div>

                                        <button className="w-full mt-2 py-3.5 rounded-xl bg-[#05243b] text-white font-bold text-[14px] uppercase tracking-wider transform transition-all duration-300 hover:bg-[#14937a] hover:shadow-lg active:scale-95">
                                            Start Learning
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Status Dots */}
                <div className="flex justify-center gap-2.5 mt-10">
                    {[...Array(courses.length - cardsToShow + 1)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIndex(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-5 bg-[#05243b]' : 'w-1.5 bg-slate-200'}`}
                        />
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <button className="group flex items-center gap-2 px-8 py-3.5 bg-white border-2 border-[#05243b] text-[#05243b] rounded-full font-bold text-[15px] hover:bg-[#05243b] hover:text-white transition-all shadow-sm">
                        Explore All Courses
                        <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

        </section>
    );
};

export default TrendingCourses;