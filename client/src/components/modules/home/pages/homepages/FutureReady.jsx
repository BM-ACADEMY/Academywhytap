import React from 'react';
import { 
  Star, 
  Laptop, 
  CheckCircle, 
  Briefcase, 
  Users, 
  Award, 
  Clock,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const FutureReady = () => {
    const steps = [
        { title: 'Career Consultation', desc: 'Identify your ideal career path', icon: <Star size={32} /> },
        { title: 'Technical Training', desc: 'Master in-demand IT skills', icon: <Laptop size={32} /> },
        { title: 'Live Projects', desc: 'Work on real-world industry tasks', icon: <CheckCircle size={32} /> },
        { title: 'Soft Skills Training', desc: 'Improve personality & comms', icon: <Users size={32} /> },
        { title: 'Career Prep', desc: 'Resume & mock interviews', icon: <Award size={32} /> },
        { title: 'Cert & Support', desc: 'Get certified & job ready', icon: <Clock size={32} /> },
        { title: 'Placement Support', desc: 'Connect with hiring partners', icon: <Briefcase size={32} /> }
    ];

    const partners = [
        { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
        { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
        { name: "Meta", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" },
        { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
        { name: "Zoho", logo: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Zoho_logo.svg" },
        { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
    ];

    return (
        <section className="py-32 bg-white overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14937a]/10 border border-[#14937a]/20 mb-6">
                        <span className="text-[#14937a] text-[11px] font-black uppercase tracking-[0.2em]">The Journey to Success</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#05243b]">
                        How You’ll Learn at <span className="text-[#14937a]">BM Academy</span>
                    </h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium mt-4">
                        Our proven learning methodology designed to take you from a beginner to a job-ready professional.
                    </p>
                </div>

                <div className="relative mb-32">
                    {/* Dashed Connecting Line (Desktop) */}
                    <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 -translate-y-1/2 z-0" />

                    <div className="grid lg:grid-cols-7 gap-8 relative z-10">
                        {steps.map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center group">
                                <div className="relative">
                                    <div className="w-20 h-20 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center text-[#14937a] transition-all duration-500 group-hover:bg-[#14937a] group-hover:text-white group-hover:scale-110 relative z-10">
                                        {step.icon}
                                    </div>
                                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#05243b] text-white text-xs font-black flex items-center justify-center border-2 border-white shadow-lg">
                                        {i + 1}
                                    </div>
                                </div>

                                <div className="mt-8 space-y-2">
                                    <h3 className="font-black text-[#05243b] text-sm group-hover:text-[#14937a] transition-colors leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider leading-relaxed max-w-[120px] mx-auto opacity-60">
                                        {step.desc}
                                    </p>
                                </div>

                                {i < 6 && (
                                    <div className="lg:hidden w-0.5 h-12 border-l-2 border-dashed border-slate-200 my-4" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Partners Scroll */}
                <div className="pt-20 border-t border-slate-50">
                    <div className="text-center mb-12">
                        <span className="text-slate-400 text-[11px] font-black uppercase tracking-[0.3em]">Our Graduates Work At</span>
                    </div>
                    <div className="relative w-full overflow-hidden">
                        <div className="flex gap-8 items-center animate-scroll whitespace-nowrap py-4">
                            {[...partners, ...partners].map((partner, idx) => (
                                <div key={idx} className="inline-flex flex-none bg-white px-8 py-6 rounded-2xl border border-slate-100 items-center justify-center min-w-[160px] h-[80px] hover:shadow-xl transition-all grayscale opacity-60 hover:grayscale-0 hover:opacity-100">
                                    <img src={partner.logo} alt={partner.name} className="h-8 w-auto object-contain" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-50% - 16px)); }
                }
                .animate-scroll {
                    display: flex;
                    width: max-content;
                    animation: scroll 30s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}} />
        </section>
    );
};

export default FutureReady;
