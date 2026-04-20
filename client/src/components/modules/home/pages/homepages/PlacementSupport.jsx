import React from 'react';
import { Rocket, Star, Briefcase, GraduationCap, Users, FileCheck } from 'lucide-react';
import jobImage from '../../../../../assets/img10.jpg';

const PlacementSupport = () => {
    const careerPoints = [
        { text: "Placement Assistance", icon: <Briefcase size={18} /> },
        { text: "Resume Building & Portfolio", icon: <FileCheck size={18} /> },
        { text: "Mock Interviews & Career Guidance", icon: <Users size={18} /> },
        { text: "Hiring Partner Network", icon: <Briefcase size={18} /> },
        { text: "Internship Opportunities", icon: <Rocket size={18} /> }
    ];

    const stats = [
        { label: "Students Placed", value: "1,000+", icon: <GraduationCap className="text-navy-600" size={20} /> },
        { label: "Hiring Partners", value: "100+", icon: <Briefcase className="text-navy-600" size={20} /> },
        { label: "Student Rating", value: "4.8", icon: <Star className="text-yellow-500 fill-yellow-500" size={20} />, subtext: "Average Rating" }
    ];

    return (
        <section className="bg-white py-20 px-4 md:px-12 lg:px-20 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-2 text-[#05243b] mb-2 group">
                        <Rocket size={28} className="group-hover:animate-bounce transition-all duration-500" />
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight">
                            Career Opportunities & Placement Support
                        </h2>
                    </div>
                    <p className="text-slate-600 text-sm md:text-lg font-medium max-w-3xl mx-auto leading-relaxed">
                        Kickstart your career with real job opportunities, internships, and industry connections in <span className="text-[#05243b] font-bold">Pondicherry & Tamil Nadu</span>
                    </p>
                </div>

                {/* Main Content Card */}
                <div className="bg-[#f3f4f6] rounded-[3.5rem] p-8 lg:p-16 shadow-2xl border border-white/50 relative overflow-hidden group">
                    {/* Subtle Background Glow */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                        
                        {/* Left Column: Content */}
                        <div className="space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-3xl lg:text-4xl font-black text-slate-800 leading-tight">
                                    Get Placed with <span className="text-[#05243b]">Top Companies</span>
                                </h3>
                                <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
                                    At BM Academy, we don't just teach — we <span className="text-[#05243b] font-bold">help you build a career</span>. 
                                    Get access to <span className="text-[#14937a] font-semibold">placement support</span>, <span className="text-[#14937a] font-semibold">internships</span>, and real job opportunities through our industry network.
                                </p>
                            </div>

                            {/* Checklist */}
                            <ul className="space-y-4">
                                {careerPoints.map((point, idx) => (
                                    <li key={idx} className="flex items-center gap-4 group/item">
                                        <div className="bg-[#14937a]/10 text-[#14937a] p-2 rounded-xl group-hover/item:bg-[#14937a] group-hover/item:text-white transition-all duration-300">
                                            {point.icon}
                                        </div>
                                        <span className="text-slate-700 font-bold text-base md:text-lg group-hover/item:text-[#05243b] transition-colors">
                                            {point.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            {/* Stats Section */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="bg-white border border-slate-100 p-6 rounded-3xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                        <div className="flex flex-col items-center sm:items-start gap-2">
                                            <span className="text-2xl font-black text-slate-800 tracking-tight">{stat.value}</span>
                                            <span className="text-slate-500 text-xs font-bold uppercase tracking-wider text-center sm:text-left">{stat.label}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Action */}
                            <div className="pt-6">
                                <button className="bg-[#05243b] hover:bg-[#14937a] text-white px-10 py-4 rounded-xl font-bold text-[15px] uppercase tracking-wider shadow-lg hover:shadow-[#14937a]/20 active:scale-95 transition-all duration-300 w-full sm:w-auto">
                                    Start Your Career Today
                                </button>
                            </div>
                        </div>

                        {/* Right Column: Visuals */}
                        <div className="flex flex-col items-center lg:items-end w-full">
                            
                            {/* Main Professional Image */}
                            <div className="w-full relative group/img">
                                <div className="absolute inset-0 bg-blue-900/10 rounded-[3rem] -rotate-1 group-hover/img:rotate-0 transition-all duration-500"></div>
                                <img 
                                    src={jobImage} 
                                    alt="Professional placement success" 
                                    className="relative w-full aspect-4/3 object-cover rounded-[2.5rem] shadow-2xl transition-all duration-500 hover:scale-[1.01]"
                                />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default PlacementSupport;
