import React, { useState } from 'react';
import { Plus, Minus, MessagesSquare } from 'lucide-react';

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
        <section className="bg-white py-16 px-4 md:px-12 lg:px-20 font-sans relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Section Header - 1:1 Reference Match */}
                <div className="text-center mb-16 space-y-3">
                    <div className="flex flex-col items-center gap-2">
                        <div className="text-[#2a9b87]">
                            <MessagesSquare size={32} strokeWidth={1.5} />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#05243b]">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-gray-700 text-[13px] md:text-[15px] font-medium max-w-4xl mx-auto leading-relaxed px-4">
                            Explore essential insights from AI-powered Full Stack Development, Digital Marketing, and Data Science courses at our IT training institute to accelerate your career.
                        </p>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    
                    {/* Left Side: Pill-Style Accordions */}
                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <div 
                                key={index}
                                className={`transition-all duration-300 border rounded-[2rem] overflow-hidden ${
                                    openIndex === index 
                                    ? 'border-[#2a9b87] bg-white shadow-sm' 
                                    : 'border-slate-200 hover:border-[#2a9b87]/40 bg-white shadow-sm'
                                }`}
                            >
                                <button 
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full text-left px-7 py-4.5 flex items-center justify-between gap-4"
                                >
                                    <span className={`text-[14px] md:text-[15.5px] font-bold transition-colors leading-snug ${
                                        openIndex === index ? 'text-[#05243b]' : 'text-[#05243b]'
                                    }`}>
                                        {faq.question}
                                    </span>
                                    <div className="shrink-0 text-[#2a9b87]">
                                        {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                    </div>
                                </button>
                                
                                {/* Expanded Content */}
                                <div 
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                                        openIndex === index ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <div className="px-8 pb-5 text-gray-600 text-[14px] font-medium leading-relaxed">
                                        <div className="border-t border-slate-50 pt-3">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Side: Mascot Image */}
                    <div className="hidden lg:flex justify-center items-center py-10">
                        <div className="relative w-full max-w-md">
                            <img 
                                src={mascotImg}
                                alt="BM Academy Mascot"
                                className="w-full h-auto object-contain transition-transform duration-700 hover:scale-105 animate-float"
                            />
                        </div>
                    </div>

                </div>

            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-15px); }
                }
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default FAQ;
