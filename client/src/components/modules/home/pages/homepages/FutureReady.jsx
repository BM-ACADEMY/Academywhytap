import React from 'react';
import { 
    Rocket, 
    FileCheck, 
    Users2, 
    HandCoins, 
    ChevronLeft, 
    ChevronRight 
} from 'lucide-react';

const FutureReady = () => {
    const featureCards = [
        {
            title: "Upskill Your Career",
            desc: "Master in-demand skills and build a strong foundation for your future",
            icon: <FileCheck size={40} className="text-[#02182b]" />,
            bgColor: "bg-[#02182b]", // Navy
            height: "h-[400px]",
            offset: "lg:translate-y-12"
        },
        {
            title: "Build Confidence & Personality",
            desc: "Improve communication, confidence, and become industry-ready",
            icon: <Users2 size={40} className="text-[#14937a]" />,
            bgColor: "bg-[#14937a]", // Teal
            height: "h-[480px]",
            offset: "lg:-translate-y-8"
        },
        {
            title: "Become Job-Ready",
            desc: "Gain practical experience and prepare for real job opportunities",
            icon: <HandCoins size={40} className="text-[#05243b]" />,
            bgColor: "bg-[#05243b]", // Deep Navy
            height: "h-[400px]",
            offset: "lg:translate-y-12"
        }
    ];

    const partners = [
        { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
        { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
        { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
        { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
    ];

    return (
        <section className="bg-[#f3f4f6] py-20 px-4 md:px-12 lg:px-20 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                
                {/* Header Section */}
                <div className="text-center mb-16 space-y-4 max-w-4xl">
                    <div className="flex items-center justify-center gap-2 text-[#05243b] mb-2 group">
                        <Rocket size={24} className="group-hover:animate-bounce" />
                        <span className="font-bold text-lg md:text-xl">Future Ready with BM Academy for Top Notch Training</span>
                    </div>
                    <p className="text-slate-600 text-sm md:text-lg font-medium leading-relaxed">
                        BM Academy empowers students in Kottakuppam, Pondicherry with job-oriented training in Full Stack Development, Data Analytics, AI Digital Marketing, and Video Editing through hands-on learning and real-world projects
                    </p>
                </div>

                {/* Main Content Container (Pill Shaped) */}
                <div className="w-full bg-[#f4f7fa] rounded-[4rem] px-8 pt-24 pb-16 md:px-12 lg:px-16 flex flex-col items-center relative">
                    
                    {/* Staggered Cards Container */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-4 w-full relative z-10">
                        {featureCards.map((card, idx) => (
                            <div 
                                key={idx}
                                className={`${card.bgColor} ${card.height} ${card.offset} p-8 rounded-[3.5rem] flex flex-col items-center text-center shadow-2xl transition-all duration-500 hover:scale-[1.02] justify-center group overflow-hidden border border-white/10`}
                            >
                                {/* Subtle Glow Effect */}
                                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Icon Container (Restyled to match reference) */}
                                <div className="bg-white w-24 h-24 rounded-[2rem] shadow-xl flex items-center justify-center mb-10 overflow-hidden transform group-hover:rotate-6 transition-transform">
                                    {card.icon}
                                </div>

                                {/* Title Area */}
                                <div className="space-y-5 px-2">
                                    <h3 className="text-white text-2xl lg:text-3xl font-extrabold leading-tight">
                                        {card.title}
                                    </h3>
                                    <p className="text-white/80 text-[15px] lg:text-base font-medium leading-relaxed line-clamp-3">
                                        {card.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Hiring Partners Section (Integrated into the box) */}
                    <div className="w-full mt-4 mb-4">
                        <div className="flex items-center justify-center gap-6 mb-12">
                            <div className="h-[1px] flex-grow bg-slate-300 max-w-[200px]"></div>
                            <span className="text-slate-500 text-[11px] font-black uppercase tracking-[0.3em] whitespace-nowrap">
                                Our Hiring Partners
                            </span>
                            <div className="h-[1px] flex-grow bg-slate-300 max-w-[200px]"></div>
                        </div>

                        <div className="relative group/carousel px-10">
                            {/* Navigation Arrows (Visual only for now) */}
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
                                <button className="w-8 h-8 rounded-full bg-white shadow-md text-slate-300 hover:text-slate-600 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all cursor-pointer">
                                    <ChevronLeft size={20} />
                                </button>
                            </div>
                            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
                                <button className="w-8 h-8 rounded-full bg-white shadow-md text-slate-300 hover:text-slate-600 flex items-center justify-center opacity-0 group-hover/carousel:opacity-100 transition-all cursor-pointer">
                                    <ChevronRight size={20} />
                                </button>
                            </div>

                            {/* Logos Grid (as shown in ref image) */}
                        <div className="relative w-full overflow-hidden">
                             {/* Infinite Scroll Container */}
                            <div className="flex gap-4 lg:gap-6 items-center animate-scroll whitespace-nowrap py-4">
                                {[...partners, ...partners].map((partner, idx) => (
                                    <div 
                                        key={idx} 
                                        className="inline-flex flex-none bg-white px-6 py-5 rounded-2xl shadow-sm border border-slate-100 items-center justify-center min-w-[140px] h-[70px] hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer group"
                                    >
                                        <img 
                                            src={partner.logo} 
                                            alt={partner.name}
                                            className="h-7 w-auto object-contain transition-all duration-500"
                                        />
                                    </div>
                                ))}
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

        <style>{`
            @keyframes scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(calc(-50% - 12px)); }
            }
            .animate-scroll {
                display: flex;
                width: max-content;
                animation: scroll 25s linear infinite;
            }
            .animate-scroll:hover {
                animation-play-state: paused;
            }
        `}</style>
    </section>
);
};

export default FutureReady;
