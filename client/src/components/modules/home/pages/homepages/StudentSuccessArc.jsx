import React, { useState, useEffect } from 'react';
import { Quote, ChevronRight, ChevronLeft, Star, ExternalLink, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import StudentVideoReviews from './StudentVideoReviews';
import StudentJourney from './StudentJourney';
import PlacementStats from './PlacementStats';
import GoogleReviews from './GoogleReviews';

const StudentSuccessArc = () => {
    const students = [
        {
            id: 1,
            name: "Arun Kumar",
            role: "Lead Video Editor",
            company: "Creative Cloud Studios",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800",
            quote: "Joining BM Academy was a turning point. The hands-on projects gave me the confidence to handle high-stakes content for global clients. The mentors don't just teach; they transform your perspective.",
            rating: 5,
            color: "from-blue-500 to-emerald-500"
        },
        {
            id: 2,
            name: "Priya Sharma",
            role: "Content Strategist",
            company: "Digital Flow Agency",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
            quote: "I learned how to build a brand that resonates. The AI-powered tools we mastered were a complete game changer for my workflow. I'm now leading a team of five creators.",
            rating: 5,
            color: "from-purple-500 to-pink-500"
        },
        {
            id: 3,
            name: "Karthik Raja",
            role: "Motion Designer",
            company: "Animax Interactive",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
            quote: "The technical depth here is unmatched. I transitioned from simple graphics to complex 3D motion design within months. The portfolio I built here landed me my dream job.",
            rating: 5,
            color: "from-orange-500 to-red-500"
        },
        {
            id: 4,
            name: "Naveen Murali",
            role: "Full-Stack Developer",
            company: "TechNova Solutions",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
            quote: "The practical approach helped me start my journey even before finishing. I've already delivered three major projects. BM Academy is where theory meets reality.",
            rating: 5,
            color: "from-cyan-500 to-blue-500"
        },
        {
            id: 5,
            name: "Divya Prakash",
            role: "Social Media Head",
            company: "Brand Pulse",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
            quote: "Staying ahead of trends is vital. BM Academy taught me how to use data and AI to optimize performance. My strategies are now driving 300% more engagement for our clients.",
            rating: 5,
            color: "from-emerald-500 to-teal-500"
        }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const location = useLocation();

    // Handle smooth scroll to hash on load or hash change
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                // Small timeout to ensure the DOM is ready if navigating between pages
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    const handleStudentClick = (index) => {
        if (index === activeIndex) return;
        setIsAnimating(true);
        setTimeout(() => {
            setActiveIndex(index);
            setIsAnimating(false);
        }, 400);
    };

    const nextStudent = () => handleStudentClick((activeIndex + 1) % students.length);
    const prevStudent = () => handleStudentClick((activeIndex - 1 + students.length) % students.length);

    return (
        <section id="placement" className="relative min-h-screen bg-[#020b13] py-24 px-6 overflow-hidden font-sans selection:bg-[#14937a] selection:text-white">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#14937a]/10 blur-[120px] rounded-full animate-pulse"></div>
                <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20">
                    <nav className="flex justify-center items-center gap-3 text-xs font-bold uppercase tracking-[0.3em] text-[#14937a] mb-6">
                        <Link to="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
                        <span className="text-slate-400">Wall of Fame</span>
                    </nav>
                    <h2 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6">
                        Real Stories. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14937a] to-emerald-400">
                            Verified Success.
                        </span>
                    </h2>
                    <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto font-medium">
                        Join the ranks of our high-achieving alumni who are reshaping industries across the globe.
                    </p>
                </div>

                {/* Main Showcase Grid */}
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                    
                    {/* Left: Interactive Sidebar (Thumbnails) */}
                    <div className="lg:col-span-4 order-2 lg:order-1">
                        <div className="space-y-4">
                            {students.map((student, idx) => (
                                <button
                                    key={student.id}
                                    onClick={() => handleStudentClick(idx)}
                                    className={`w-full group relative flex items-center gap-4 p-4 rounded-2xl transition-all duration-500 border ${
                                        idx === activeIndex 
                                        ? 'bg-white/10 border-white/20 shadow-2xl shadow-black/40 scale-[1.02]' 
                                        : 'bg-transparent border-transparent hover:bg-white/5 hover:border-white/10'
                                    }`}
                                >
                                    <div className="relative shrink-0">
                                        <div className={`absolute -inset-1 rounded-full bg-gradient-to-r ${student.color} opacity-0 group-hover:opacity-100 transition-opacity blur-sm ${idx === activeIndex ? 'opacity-100' : ''}`}></div>
                                        <img 
                                            src={student.image} 
                                            alt={student.name}
                                            className="relative w-14 h-14 rounded-full object-cover grayscale-[50%] group-hover:grayscale-0 transition-all duration-500"
                                        />
                                    </div>
                                    <div className="text-left">
                                        <h4 className={`font-bold transition-colors ${idx === activeIndex ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`}>
                                            {student.name}
                                        </h4>
                                        <p className="text-[10px] font-black uppercase tracking-widest text-[#14937a]">
                                            {student.company}
                                        </p>
                                    </div>
                                    {idx === activeIndex && (
                                        <div className="ml-auto w-2 h-2 bg-[#14937a] rounded-full animate-ping"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Featured Testimonial Stage */}
                    <div className="lg:col-span-8 order-1 lg:order-2">
                        <div className={`relative transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}>
                            
                            {/* The Glass Stage */}
                            <div className="relative bg-white/[0.03] backdrop-blur-3xl rounded-[3rem] border border-white/10 p-8 md:p-16 overflow-hidden">
                                {/* Decorative elements inside glass */}
                                <div className={`absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br ${students[activeIndex].color} opacity-20 blur-[80px]`}></div>
                                
                                <Quote className="text-[#14937a] mb-10 w-16 h-16 opacity-50" />
                                
                                <div className="relative">
                                    <div className="flex gap-1 mb-8">
                                        {[...Array(students[activeIndex].rating)].map((_, i) => (
                                            <Star key={i} size={20} className="fill-[#14937a] text-[#14937a]" />
                                        ))}
                                    </div>

                                    <h3 className="text-xl md:text-3xl font-semibold text-white leading-relaxed mb-10 italic">
                                        "{students[activeIndex].quote}"
                                    </h3>

                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-10 border-t border-white/10">
                                        <div className="flex items-center gap-6">
                                            <div className="relative">
                                                <div className={`absolute -inset-2 rounded-2xl bg-gradient-to-r ${students[activeIndex].color} opacity-30 blur-md`}></div>
                                                <img 
                                                    src={students[activeIndex].image} 
                                                    alt={students[activeIndex].name}
                                                    className="relative w-20 h-20 rounded-2xl object-cover"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-black text-white">{students[activeIndex].name}</h4>
                                                <p className="text-[#14937a] font-bold text-[10px] uppercase tracking-widest mt-1">
                                                    {students[activeIndex].role} @ {students[activeIndex].company}
                                                </p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex gap-4">
                                            <button className="p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-white transition-all hover:scale-110">
                                                <User size={24} />
                                            </button>
                                            <button className="px-6 py-4 bg-[#14937a] hover:bg-[#117a65] text-white rounded-2xl font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-[#14937a]/20">
                                                View Portfolio <ExternalLink size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating navigation controls for the stage */}
                            <div className="absolute -bottom-6 right-12 flex gap-4">
                                <button 
                                    onClick={prevStudent}
                                    className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-[#14937a] transition-all"
                                >
                                    <ChevronLeft size={28} />
                                </button>
                                <button 
                                    onClick={nextStudent}
                                    className="w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl flex items-center justify-center text-white hover:bg-[#14937a] transition-all"
                                >
                                    <ChevronRight size={28} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <StudentVideoReviews />
            <StudentJourney />
            <PlacementStats />
            <GoogleReviews />

            {/* Custom Styles for animations and fine-tuning */}
            <style dangerouslySetInnerHTML={{ __html: `
                html {
                    scroll-behavior: smooth;
                }
                @keyframes pulse-gentle {
                    0%, 100% { opacity: 0.1; transform: scale(1); }
                    50% { opacity: 0.15; transform: scale(1.1); }
                }
                .animate-pulse {
                    animation: pulse-gentle 8s ease-in-out infinite;
                }
            `}} />
        </section>
    );
};

export default StudentSuccessArc;
