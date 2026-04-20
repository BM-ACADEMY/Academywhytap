import React from 'react';
import { User, ArrowRight, Star } from 'lucide-react';
import avatar from '../../../../../assets/avatar.png';

const StudentsWorkAt = () => {
    // Company logos from the reference image
    const companies = [
        { name: "tcs", color: "text-red-500" },
        { name: "HCL", color: "text-blue-700" },
        { name: "Microsoft", color: "text-slate-700" },
        { name: "Pfizer", color: "text-blue-800" },
        { name: "amazon", color: "text-black" },
        { name: "CATERPILLAR", color: "text-black" },
        { name: "PayPal", color: "text-blue-600" },
        { name: "HITS", color: "text-blue-800" },
        { name: "BLUE MONKS", color: "text-black" },
        { name: "ULTRAGITS", color: "text-blue-900" },
        { name: "APTITUDE", color: "text-orange-600" },
        { name: "MI", color: "text-red-600" },
        { name: "SPANSYS", color: "text-blue-700" },
        { name: "B3 Tech", color: "text-black" },
        { name: "MAXWELL", color: "text-blue-600" },
        { name: "accenture", color: "text-purple-600" },
        { name: "Domaincer", color: "text-blue-500" },
        { name: "Infosys", color: "text-blue-600" },
        { name: "TRIDENT WEB", color: "text-teal-600" },
        { name: "airtel", color: "text-red-600" },
        { name: "SIAM", color: "text-black" },
        { name: "wipro", color: "text-blue-400" },
        { name: "iFive", color: "text-blue-600" },
        { name: "EWALL", color: "text-blue-800" },
    ];

    return (
        <section className="bg-white py-20 px-4 md:px-12 lg:px-20 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-3 text-[#05243b]">
                        <div className="bg-[#05243b] p-1.5 rounded-lg text-white">
                            <User size={20} />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                            Our Students Work At
                        </h2>
                    </div>
                    <p className="text-slate-600 text-sm md:text-[17px] font-medium max-w-3xl mx-auto leading-relaxed">
                        Our students have secured opportunities in various companies and startups
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                    
                    {/* Left Side: Logos Grid */}
                    <div className="grow grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                        {companies.map((company, idx) => (
                            <div 
                                key={idx} 
                                className="bg-[#f3f4f6] h-20 md:h-24 rounded-2xl flex items-center justify-center p-4 shadow-sm hover:shadow-[0_15px_35px_rgba(5,36,59,0.08)] hover:bg-white transition-all duration-300 border border-transparent hover:border-slate-100 group cursor-default"
                            >
                                <span className={`font-black text-sm md:text-[15px] uppercase tracking-tighter ${company.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all text-center`}>
                                    {company.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Join the Elite Card */}
                    <div className="lg:w-95 shrink-0">
                        <div className="bg-[#f3f4f6] h-full rounded-[3.5rem] p-10 flex flex-col items-center text-center shadow-lg border border-white relative overflow-hidden group">
                           
                            {/* Visual Asset (Avatar) */}
                            <div className="relative w-full aspect-square mb-10 group-hover:scale-105 transition-transform duration-700">
                                <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#05243b]/5 rounded-full blur-3xl opacity-50"></div>
                                <img 
                                    src={avatar} 
                                    alt="Elite Alumnus" 
                                    className="w-full h-full object-contain relative z-10 p-4"
                                />
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <h3 className="text-2xl font-black text-[#05243b]">
                                    Build Your Career with BM Academy
                                </h3>
                                <p className="text-slate-500 text-sm font-semibold leading-relaxed px-4">
                                    Join our growing community of learners and start your journey towards a successful career with practical training and career support.
                                </p>
                                
                                <div className="pt-6">
                                    <button className="flex items-center justify-center gap-2 bg-[#05243b] text-white w-full py-4 rounded-2xl font-bold text-[14px] uppercase tracking-widest hover:bg-[#14937a] shadow-lg shadow-[#05243b]/20 active:scale-95 transition-all group/btn">
                                        Join Now
                                        <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default StudentsWorkAt;
