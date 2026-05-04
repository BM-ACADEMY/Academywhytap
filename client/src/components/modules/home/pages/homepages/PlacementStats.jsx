import React from 'react';
import { Building2, TrendingUp, GraduationCap, Users, MapPin, Award } from 'lucide-react';

const PlacementStats = () => {
    const stats = [
        {
            id: 1,
            value: "500+",
            label: "Hiring Partners",
            subLabel: "Top companies hiring our students",
            icon: <Building2 className="w-8 h-8 text-[#14937a]" />,
            color: "from-[#14937a]/20 to-emerald-500/10"
        },
        {
            id: 2,
            value: "₹12 LPA",
            label: "Highest Package",
            subLabel: "Achieved by top-performing students",
            icon: <Award className="w-8 h-8 text-yellow-500" />,
            color: "from-yellow-500/20 to-orange-500/10"
        },
        {
            id: 3,
            value: "400+",
            label: "Colleges Connected",
            subLabel: "Trusted training partner across India",
            icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
            color: "from-blue-500/20 to-cyan-500/10"
        }
    ];

    const placements = [
        {
            id: 1,
            name: "Karthick Selvan P",
            role: "Junior Frontend Developer",
            company: "Bluescope IT",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 2,
            name: "Sivashankari P",
            role: "Web Developer",
            company: "Genxlead",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 3,
            name: "Narendiran KK",
            role: "Digital Marketing Executive",
            company: "APD Group",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 4,
            name: "Kavipriya S",
            role: "Digital Marketing Executive",
            company: "APD Group of Companies",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 5,
            name: "Vignesh M",
            role: "Mern Stack Developer",
            company: "Uplogic Technologies",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 6,
            name: "Selva Sathish",
            role: "Software Engineer",
            company: "HCL Tech",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 7,
            name: "Dhanush",
            role: "Graphic Designer",
            company: "Why Global Services",
            image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 8,
            name: "Abishek T",
            role: "Software Developer",
            company: "Why Global Services",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
        }
    ];

    return (
        <section className="bg-[#020b13] py-24 px-6 overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Trusted by Thousands to <span className="text-[#14937a]">Build Careers</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto font-medium">
                        BM Academy has helped thousands of students gain real-world skills and secure high-paying jobs across top companies.
                    </p>
                </div>

                {/* Stats Bar */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                    {stats.map((stat) => (
                        <div 
                            key={stat.id}
                            className="relative group bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden hover:bg-white/[0.05] transition-all duration-500"
                        >
                            {/* Decorative background gradient */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                            
                            <div className="relative z-10 flex flex-col items-center text-center">
                                <div className="mb-6 p-4 bg-white/5 rounded-2xl group-hover:scale-110 transition-transform">
                                    {stat.icon}
                                </div>
                                <h3 className="text-4xl font-black text-white mb-2 tracking-tighter">
                                    {stat.value}
                                </h3>
                                <p className="text-[#14937a] font-bold text-sm uppercase tracking-[0.2em] mb-2">
                                    {stat.label}
                                </p>
                                <p className="text-slate-500 text-xs font-medium">
                                    {stat.subLabel}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Success Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {placements.map((student) => (
                        <div 
                            key={student.id}
                            className="group bg-white/[0.02] border border-white/5 rounded-2xl p-5 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300"
                        >
                            <div className="flex items-center gap-4">
                                <div className="relative shrink-0">
                                    <div className="absolute -inset-1 bg-gradient-to-r from-[#14937a] to-emerald-500 rounded-full opacity-0 group-hover:opacity-40 blur-sm transition-opacity"></div>
                                    <img 
                                        src={student.image} 
                                        alt={student.name}
                                        className="relative w-12 h-12 rounded-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-white font-bold text-sm truncate group-hover:text-[#14937a] transition-colors">
                                        {student.name}
                                    </h4>
                                    <p className="text-[#14937a] text-[10px] font-bold uppercase tracking-wider mt-1 truncate">
                                        Placed as {student.role}
                                    </p>
                                    <p className="text-slate-500 text-[10px] font-medium mt-0.5 truncate">
                                        at {student.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom Badge/Marquee Placeholder */}
                <div className="mt-20 flex justify-center">
                    <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-slate-400 uppercase tracking-widest">
                        <Users size={14} className="text-[#14937a]" />
                        And <span className="text-white">1,500+ More</span> Students Placed This Year
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlacementStats;
