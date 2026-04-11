import React from 'react';
import { Send, ArrowRight } from 'lucide-react';

// Importing the generated student cutout
import studentImg from '../../../../../assets/avatar.png';

const FinalCTA = () => {
    return (
        <section className="bg-[#fcfcfc] py-20 px-4 md:px-12 lg:px-20 font-sans relative overflow-hidden">
            
            {/* Background Decorative Patterns (Subtle Graduation/Education theme) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
                <div className="absolute top-[10%] left-[20%] rotate-12 scale-150">🎓</div>
                <div className="absolute top-[40%] left-[35%] -rotate-6 scale-125">🧤</div>
                <div className="absolute bottom-[20%] right-[30%] rotate-45 scale-150">🎓</div>
                <div className="absolute top-[15%] right-[15%] -rotate-12 scale-110">🎓</div>
                <div className="absolute bottom-[10%] left-[45%] rotate-12 scale-125">🎓</div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Main Content Layout */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    
                    {/* Left Side: Large Student Cutout */}
                    <div className="w-full lg:w-2/5 flex justify-center lg:justify-start">
                        <div className="relative group">
                            {/* Suble glow behind student */}
                            <div className="absolute inset-0 bg-[#2a9b87]/10 rounded-full blur-[100px] transform scale-75 group-hover:scale-100 transition-transform duration-1000"></div>
                            <img 
                                src={studentImg} 
                                alt="BM Academy Student" 
                                className="relative w-full max-w-sm md:max-w-md h-auto object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
                            />
                        </div>
                    </div>

                    {/* Right Side: Centered Typography and Action Block */}
                    <div className="w-full lg:w-3/5 space-y-12">
                        
                        {/* Upper Section: Centered Headings */}
                        <div className="text-center space-y-4">
                            <h2 className="text-2xl md:text-3xl lg:text-[34px] font-extrabold text-[#05243b] leading-tight">
                                Take the first step toward your <span className="text-[#2a9b87]">IT & digital career!</span>
                            </h2>
                            <p className="text-slate-600 text-[14px] md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
                                Your journey to expertise starts here. Fill out the enquiry form, and we'll connect you with the right training to shape your future in the IT Industry!
                            </p>
                        </div>

                        {/* Lower Section: Action Block - Mirroring Reference Layout */}
                        <div className="flex justify-center md:justify-end pr-0 md:pr-10 lg:pr-20">
                            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 space-y-6 max-w-md">
                                
                                <div className="flex items-center gap-3 text-[#05243b] font-bold text-sm md:text-base italic">
                                    <Send size={18} className="text-[#2a9b87] rotate-[-15deg]" />
                                    <span>Take the first step toward your IT & digital career!</span>
                                </div>

                                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                    <p className="text-slate-500 text-[13px] font-bold flex items-center gap-2 text-center md:text-left">
                                        Click the Apply Now button and fill out the form
                                        <ArrowRight size={14} className="text-[#2a9b87]" />
                                    </p>
                                    
                                    <button className="shrink-0 bg-[#05243b] hover:bg-[#2a9b87] text-white px-8 py-3 rounded-2xl font-black text-sm transition-all duration-300 shadow-lg active:scale-95 whitespace-nowrap">
                                        Apply Now!
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

export default FinalCTA;
