import React from 'react';
import { GraduationCap, BookOpen, Briefcase, ChevronRight, ArrowDown } from 'lucide-react';

const StudentJourney = () => {
    const journeys = [
        {
            id: 1,
            student: "Kavipriya S",
            background: "B.Com Graduate",
            training: "Digital Marketing Specialist",
            placement: "Digital Marketing Executive",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 2,
            student: "Rooshika R",
            background: "BE Graduate",
            training: "Digital Marketing Specialist",
            placement: "Digital Marketing Executive",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 3,
            student: "Marimuthu S",
            background: "BSc Computer Science",
            training: "Full Stack Development",
            placement: "Frontend Developer",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
        },
        {
            id: 4,
            student: "Vasanthakumar",
            background: "MSc CS",
            training: "Full Stack Development",
            placement: "Full Stack Developer",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
        }
    ];

    return (
        <section id="placement-records" className="bg-[#020b13] py-24 px-6 relative overflow-hidden font-sans">
            {/* Background Decorative Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-20">
                <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-emerald-500/10 blur-[150px] rounded-full"></div>
                <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-blue-500/10 blur-[150px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        From Student to <span className="text-[#14937a]">Professional</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-3xl mx-auto font-medium">
                        See how BM Academy transforms students into job-ready professionals through structured training and placement support.
                    </p>
                </div>

                {/* Journey Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {journeys.map((item) => (
                        <div 
                            key={item.id}
                            className="group relative bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 hover:bg-white/[0.05] hover:border-[#14937a]/30 transition-all duration-500 hover:-translate-y-2"
                        >
                            {/* Student Header */}
                            <div className="flex items-center gap-4 mb-10">
                                <div className="relative">
                                    <div className="absolute -inset-1 bg-[#14937a] rounded-full blur-sm opacity-30 group-hover:opacity-100 transition-opacity"></div>
                                    <img 
                                        src={item.image} 
                                        alt={item.student}
                                        className="relative w-12 h-12 rounded-full object-cover border-2 border-white/10"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm tracking-tight">{item.student}</h3>
                                    <div className="flex items-center gap-1 text-[10px] font-black uppercase text-[#14937a] tracking-widest">
                                        <div className="w-1.5 h-1.5 bg-[#14937a] rounded-full animate-pulse"></div>
                                        Verified
                                    </div>
                                </div>
                            </div>

                            {/* Transformation Steps */}
                            <div className="space-y-4 relative">
                                {/* Vertical Line Connection */}
                                <div className="absolute left-[15px] top-6 bottom-6 w-[2px] border-l-2 border-dashed border-white/10 group-hover:border-[#14937a]/30 transition-colors"></div>

                                {/* Step 1: Background */}
                                <div className="relative z-10 flex items-start gap-4">
                                    <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-white transition-colors">
                                        <GraduationCap size={16} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-1">Background</p>
                                        <h4 className="text-sm font-bold text-white/90">{item.background}</h4>
                                    </div>
                                </div>

                                {/* Step 2: Training */}
                                <div className="relative z-10 flex items-start gap-4 py-4">
                                    <div className="shrink-0 w-8 h-8 rounded-full bg-[#14937a]/20 border border-[#14937a]/30 flex items-center justify-center text-[#14937a] shadow-lg shadow-[#14937a]/10">
                                        <BookOpen size={16} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase text-[#14937a] tracking-widest mb-1">BM Academy Training</p>
                                        <h4 className="text-sm font-black text-white">{item.training}</h4>
                                    </div>
                                </div>

                                {/* Step 3: Placement */}
                                <div className="relative z-10 flex items-start gap-4">
                                    <div className="shrink-0 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 group-hover:text-[#14937a] group-hover:bg-[#14937a]/10 transition-all">
                                        <Briefcase size={16} />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-1">Placement</p>
                                        <div className="inline-block px-3 py-1 bg-[#14937a] rounded-lg text-[10px] font-black text-white uppercase tracking-tighter shadow-lg shadow-[#14937a]/20">
                                            Placed as {item.placement}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className="mt-24 text-center">
                    <button className="group relative px-10 py-5 bg-[#14937a] hover:bg-[#117a65] rounded-2xl text-white font-black text-lg transition-all duration-300 shadow-2xl shadow-[#14937a]/30 hover:shadow-[#14937a]/50 hover:-translate-y-1">
                        <span className="flex items-center gap-3">
                            Start Your Career Journey
                            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                    <p className="mt-6 text-slate-500 text-sm font-medium">
                        Join over <span className="text-white">1,200+ students</span> who have successfully transformed their careers.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default StudentJourney;
