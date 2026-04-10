import React from 'react';
import { Monitor, Users, Play, Code, PieChart, Palette, GraduationCap, ChevronRight, School } from 'lucide-react';
import class1 from '../../../../../assets/class/class1.png';
import class2 from '../../../../../assets/class/class2.png';
import kamar1 from '../../../../../assets/class/class3.png';
import kamar2 from '../../../../../assets/class/class3.png';

const LearningEnvironment = () => {
    const topGallery = [
        {
            title: "Live Training Session",
            desc: "Hands-on training with real-time projects to help students build industry-ready skills.",
            icon: <Play size={20} />,
            image: class2
        },
        {
            title: "Classroom Training",
            desc: "Learn in a structured classroom environment with expert trainers and interactive sessions.",
            icon: <Users size={20} />,
            image: class1
        },
        {
            title: "Computer Lab Training",
            desc: "Participate in workshops, seminars and events to enhance your knowledge and confidence.",
            icon: <Monitor size={20} />,
            image: kamar2
        },
        {
            title: "Full Stack Development Training",
            desc: "Work on coding projects and application development to gain practical experience in web technologies.",
            icon: <Code size={20} />,
            image: class1
        },
        {
            title: "Data Analytics & Practical Learning",
            desc: "Analyze real datasets and learn tools used in data analytics and business intelligence.",
            icon: <PieChart size={20} />,
            image: kamar1
        },
        {
            title: "Digital Marketing & Design Training",
            desc: "Learn digital marketing strategies, tools, and creative design skills through practical sessions.",
            icon: <Palette size={20} />,
            image: class2
        }
    ];

    return (
        <section className="bg-[#f3f4f6] py-20 px-4 md:px-12 lg:px-20 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <div className="bg-[#05243b]/5 px-4 py-2 rounded-full flex items-center gap-2 border border-[#05243b]/10">
                            <School size={16} className="text-[#14937a]" />
                            <span className="text-[#05243b] text-xs font-bold uppercase tracking-wider">Our Learning Environment</span>
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#05243b]">
                        BM Academy Classroom & Training Gallery in Pondicherry
                    </h2>
                    <p className="text-slate-500 text-sm md:text-base font-medium max-w-4xl mx-auto leading-relaxed">
                        Explore our modern classrooms and hands-on training sessions at <span className="text-[#05243b] font-bold">BM Academy, Kottakuppam (Pondicherry)</span>, where students gain practical skills in Full Stack Development, Data Analytics, Digital Marketing, and Video Editing.
                    </p>
                </div>

                {/* Top Row Grid: Framed Gallery Style */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {topGallery.map((item, idx) => (
                        <div key={idx} className="bg-white p-2.5 rounded-[2rem] shadow-[0_8px_30px_rgba(5,36,59,0.04)] hover:shadow-[0_15px_45px_rgba(5,36,59,0.1)] hover:-translate-y-1 transition-all duration-500 border border-[#05243b] group cursor-pointer">
                            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-slate-100">
                                <img 
                                    src={item.image} 
                                    alt={item.title} 
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Floating Top-Right Icon Badge */}
                                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-[#14937a] p-3 rounded-xl shadow-sm border border-white/50 group-hover:scale-110 transition-transform duration-300">
                                    {item.icon}
                                </div>
                            </div>
                            <div className="px-3 pb-3 space-y-2">
                                <h3 className="text-xl font-bold text-[#05243b] group-hover:text-[#14937a] transition-colors">{item.title}</h3>
                                <p className="text-slate-500 text-sm font-medium leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default LearningEnvironment;