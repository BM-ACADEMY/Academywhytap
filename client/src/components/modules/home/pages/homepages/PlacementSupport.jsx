import React from 'react';
import { Rocket, Star, Briefcase, GraduationCap, Users, FileCheck, CheckCircle, ChevronRight } from 'lucide-react';
import jobImage from '../../../../../assets/img10.jpg';

const PlacementSupport = () => {
    const careerPoints = [
        { text: "Placement Assistance", icon: <Briefcase size={20} /> },
        { text: "Resume Building & Portfolio", icon: <FileCheck size={20} /> },
        { text: "Mock Interviews & Guidance", icon: <Users size={20} /> },
        { text: "Hiring Partner Network", icon: <CheckCircle size={20} /> },
        { text: "Internship Opportunities", icon: <Rocket size={20} /> }
    ];

    const stats = [
        { label: "Students Placed", value: "1,000+", icon: <GraduationCap size={24} /> },
        { label: "Hiring Partners", value: "100+", icon: <Briefcase size={24} /> },
        { label: "Student Rating", value: "4.9/5", icon: <Star size={24} /> }
    ];

    return (
        <section className="bg-white py-24 px-4 md:px-12 lg:px-20 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14937a]/10 border border-[#14937a]/20 mb-6">
                        <span className="text-[#14937a] text-[11px] font-black uppercase tracking-[0.2em]">Career Success</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#05243b] leading-tight">
                        Placement Support & <span className="text-[#14937a]">Career Opportunities</span>
                    </h2>
                    <p className="text-slate-500 font-medium mt-4 max-w-2xl mx-auto text-lg">
                        We don't just teach skills; we build careers with real-world connections and job-ready training.
                    </p>
                </div>

                <div className="bg-[#05243b] rounded-[3.5rem] p-8 lg:p-16 shadow-2xl relative overflow-hidden group border border-white/10">
                    <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-[#14937a]/10 to-transparent pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#14937a]/20 rounded-full blur-[100px] pointer-events-none" />
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
                        <div className="space-y-10">
                            <div className="space-y-6">
                                <h3 className="text-3xl lg:text-5xl font-black text-white leading-tight">
                                    Land Your Dream Job <br />
                                    <span className="text-[#14937a]">with Confidence</span>
                                </h3>
                                <p className="text-slate-300 text-lg leading-relaxed font-medium">
                                    Our dedicated placement cell works tirelessly to connect you with top hiring partners and prepare you for the competitive job market.
                                </p>
                            </div>

                            <ul className="grid sm:grid-cols-2 gap-6">
                                {careerPoints.map((point, idx) => (
                                    <li key={idx} className="flex items-center gap-4 group/item">
                                        <div className="w-10 h-10 bg-white/10 text-[#14937a] flex items-center justify-center rounded-xl group-hover/item:bg-[#14937a] group-hover/item:text-white transition-all duration-300">
                                            {point.icon}
                                        </div>
                                        <span className="text-slate-200 font-black text-sm uppercase tracking-wider">
                                            {point.text}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="grid grid-cols-3 gap-6">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-[2rem] hover:bg-white/10 transition-all text-center sm:text-left">
                                        <div className="text-[#14937a] mb-3 flex justify-center sm:justify-start">{stat.icon}</div>
                                        <div className="text-2xl font-black text-white">{stat.value}</div>
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{stat.label}</div>
                                    </div>
                                ))}
                            </div>

                            <button className="inline-flex items-center gap-3 px-10 py-5 bg-[#14937a] text-white rounded-2xl font-black text-[16px] hover:bg-white hover:text-[#05243b] transition-all shadow-xl shadow-[#14937a]/20 active:scale-95">
                                Start Your Career Today
                                <ChevronRight size={22} />
                            </button>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-4 bg-[#14937a]/30 blur-2xl rounded-full scale-90 group-hover:scale-100 transition-transform duration-700" />
                            <div className="relative rounded-[3rem] overflow-hidden border-8 border-white/5 shadow-2xl">
                                <img 
                                    src={jobImage} 
                                    alt="Career Success" 
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#05243b]/60 to-transparent" />
                                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-[#14937a] rounded-xl flex items-center justify-center text-white shadow-lg">
                                            <Briefcase size={24} />
                                        </div>
                                        <div>
                                            <p className="text-[#05243b] font-black text-lg">100% Placement</p>
                                            <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">BM Academy Advantage</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlacementSupport;
