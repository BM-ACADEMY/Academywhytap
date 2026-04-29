import React, { useState } from 'react';
import { Plus, Minus, MessagesSquare, HelpCircle } from 'lucide-react';

// Importing the generated mascot image
import mascotImg from '../../../../../assets/mascot.png';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const faqs = [
        {
            question: "What makes BM Academy different from other training institutes?",
            answer: "BM Academy focuses on practical, job-oriented training with real-time projects, expert mentorship, and career guidance to help students become industry-ready."
        },
        {
            question: "Are you going to give placement support after the completion of any course?",
            answer: "Yes, we provide full placement support including resume building, interview preparation, and job guidance to help you start your career."
        },
        {
            question: "What courses do you offer?",
            answer: "We offer courses in Full Stack Development, Data Analytics, AI Digital Marketing, and Creative Video Editing, designed for beginners and professionals."
        },
        {
            question: "Do you provide practical experience of working on Live projects?",
            answer: "Yes, all our courses include real-time projects and practical sessions to ensure you gain industry-level experience."
        },
        {
            question: "Why does BM Academy offer these specific courses in Full Stack, Digital Marketing, and Data Science with AI technologies?",
            answer: "These are the highest-demand skills in the current global economy. We integrate AI tools into our tracks to ensure our students remain competitive in the evolving tech landscape."
        },
        {
            question: "Is there a flexible learning option available?",
            answer: "Yes, we provide flexible learning options, including classroom and online sessions based on your convenience."
        },
        {
            question: "How to enroll for a course in BM Academy?",
            answer: "You can enroll by contacting us directly, visiting our center, or filling out the enquiry form on our website."
        }
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="bg-white py-24 px-4 md:px-12 lg:px-20 font-sans relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#14937a]/5 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14937a]/10 border border-[#14937a]/20 mb-6">
                        <HelpCircle size={16} className="text-[#14937a]" />
                        <span className="text-[#14937a] text-[11px] font-black uppercase tracking-[0.2em]">Got Questions?</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#05243b] leading-tight">
                        Frequently Asked <span className="text-[#14937a]">Questions</span>
                    </h2>
                    <p className="text-slate-500 font-medium mt-4 max-w-2xl mx-auto text-lg">
                        Everything you need to know about our courses and training methodology.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index}
                                className={`transition-all duration-500 rounded-[2.5rem] overflow-hidden border ${
                                    openIndex === index 
                                    ? 'border-[#14937a]/30 bg-[#14937a]/5 shadow-xl shadow-[#14937a]/5' 
                                    : 'border-slate-100 bg-white hover:border-[#14937a]/20'
                                }`}
                            >
                                <button 
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left px-8 py-6 flex items-center justify-between gap-6"
                                >
                                    <span className={`text-[16px] md:text-[18px] font-black leading-snug transition-colors ${
                                        openIndex === index ? 'text-[#05243b]' : 'text-[#05243b]'
                                    }`}>
                                        {faq.question}
                                    </span>
                                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                                        openIndex === index ? 'bg-[#14937a] text-white rotate-180' : 'bg-slate-50 text-[#14937a]'
                                    }`}>
                                        {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                    </div>
                                </button>
                                
                                <div 
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                                        openIndex === index ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="px-8 pb-8 text-slate-500 text-[15px] font-bold leading-relaxed border-t border-[#14937a]/10 pt-4">
                                        {faq.answer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mascot Illustration */}
                    <div className="hidden lg:flex justify-center items-center py-10 sticky top-24">
                        <div className="relative w-full max-w-md">
                            <div className="absolute inset-0 bg-[#14937a]/10 blur-[100px] rounded-full scale-125" />
                            <img 
                                src={mascotImg}
                                alt="BM Academy Mascot"
                                className="relative w-full h-auto object-contain animate-float drop-shadow-2xl"
                            />
                            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white px-8 py-4 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#14937a] rounded-full flex items-center justify-center text-white">
                                    <MessagesSquare size={20} />
                                </div>
                                <div className="text-left">
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Still confused?</p>
                                    <p className="text-[#05243b] font-black text-sm">Talk to our Experts</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-20px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}} />
        </section>
    );
};

export default FAQ;
