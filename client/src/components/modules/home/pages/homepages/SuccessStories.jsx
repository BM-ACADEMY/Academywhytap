import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, ShieldCheck, MessageSquareQuote } from 'lucide-react';
import review1 from '../../../../../assets/testimonials/Screenshot 2026-04-10 160053.png';
import review2 from '../../../../../assets/testimonials/Screenshot 2026-04-10 160129.png';
import review3 from '../../../../../assets/testimonials/Screenshot 2026-04-10 160148.png';

const SuccessStories = () => {
    const reviews = [review1, review2, review3];
    const [activeIndex, setActiveIndex] = useState(0);

    const nextReview = () => setActiveIndex((prev) => (prev + 1) % reviews.length);
    const prevReview = () => setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

    return (
        <section className="bg-slate-50 py-24 px-4 md:px-12 lg:px-20 font-sans relative overflow-hidden">
            
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-[#14937a]/5 rounded-[100%] blur-[80px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                
                {/* Centered Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-5">
                    <div className="flex items-center justify-center gap-2 mb-2">
                        <span className="bg-white text-[#14937a] text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-sm border border-slate-100 flex items-center gap-2">
                            <MessageSquareQuote size={16} />
                            Student Success Stories
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#05243b] tracking-tight">
                        Real Feedback from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14937a] to-[#0e6e5b]">Real Students</span>
                    </h2>
                    <p className="text-slate-500 text-base font-medium leading-relaxed">
                        Discover how our hands-on training has helped students launch their careers. Every review is authentic and verified.
                    </p>
                </div>

                {/* Browser Mockup Showcase */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-[24px] shadow-[0_20px_80px_-15px_rgba(5,36,59,0.15)] border border-slate-200 overflow-hidden transition-all duration-500">
                        
                        {/* Browser Top Bar */}
                        <div className="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
                            {/* macOS style traffic lights */}
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"></div>
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"></div>
                            </div>
                            
                            {/* Fake Address Bar / Trust Badge */}
                            <div className="bg-white/60 border border-slate-200 text-slate-500 text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-md flex items-center gap-2">
                                <ShieldCheck size={14} className="text-[#14937a]" />
                                Verified Google Review
                            </div>
                            
                            {/* Empty div for flex balance */}
                            <div className="w-[42px]"></div>
                        </div>

                        {/* Screenshot Content Area */}
                        <div className="bg-[#05243b]/5 relative w-full aspect-[16/10] md:aspect-[21/9] flex items-center justify-center p-0 md:p-4">
                            <img 
                                key={activeIndex} // Forces re-render for crisp updates
                                src={reviews[activeIndex]} 
                                alt={`Student Review ${activeIndex + 1}`} 
                                className="w-full h-full object-contain md:object-cover md:rounded-xl shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Integrated Navigation Pill */}
                    <div className="flex justify-center mt-8 md:mt-12">
                        <div className="bg-white rounded-full shadow-[0_8px_30px_rgba(5,36,59,0.06)] border border-slate-100 p-2 flex items-center gap-6">
                            <button 
                                onClick={prevReview}
                                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-[#05243b] hover:bg-slate-50 transition-colors focus:outline-none"
                            >
                                <ChevronLeft size={24} />
                            </button>
                            
                            {/* Dots */}
                            <div className="flex gap-2.5">
                                {reviews.map((_, i) => (
                                    <button 
                                        key={i}
                                        onClick={() => setActiveIndex(i)}
                                        className={`h-2.5 transition-all duration-300 rounded-full ${
                                            activeIndex === i ? 'w-8 bg-[#14937a]' : 'w-2.5 bg-slate-200 hover:bg-slate-300'
                                        }`}
                                    />
                                ))}
                            </div>

                            <button 
                                onClick={nextReview}
                                className="w-10 h-10 rounded-full flex items-center justify-center text-slate-400 hover:text-[#05243b] hover:bg-slate-50 transition-colors focus:outline-none"
                            >
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Clean Bottom Trust Indicators */}
                <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 opacity-80">
                    <div className="flex items-center gap-3">
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} size={20} className="fill-[#e8be66] text-[#e8be66]" />
                            ))}
                        </div>
                        <span className="text-[#05243b] font-bold text-sm">4.9/5 Average</span>
                    </div>
                    
                    <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                    
                    <div className="flex items-center gap-2">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_Logo.svg" alt="Google" className="h-5 grayscale" />
                        <span className="text-slate-500 font-semibold text-sm">Reviews</span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SuccessStories;