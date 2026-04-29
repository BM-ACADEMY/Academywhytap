import React, { useState, useEffect } from 'react';
import { Star, Quote, Users, ChevronRight, ChevronLeft } from 'lucide-react';

// Importing assets for student photos
import yogarajPhoto from '../../../../../assets/kamar1.png';
import sindhuPhoto from '../../../../../assets/class/class3.png';
import shabbuPhoto from '../../../../../assets/kamar2.png';
import fazilPhoto from '../../../../../assets/avatar.png';

const TestimonialSection = () => {
    const testimonials = [
        {
            id: 1,
            name: "Yogaraj",
            role: "Digital Marketing Executive",
            heading: "Best IT Training Institute",
            content: "I joined the PG in Digital Marketing course at WHY TAP when I had no clear idea about my future. I had just taken over my father's business and didn't know what direction to go in. Before joining, I had zero knowledge about digital marketing. But WHY TAP made it easy to understand and grow. Their live projects, expert mentors, and practical learning helped me build real skills.",
            rating: 5,
            image: yogarajPhoto
        },
        {
            id: 2,
            name: "Mohamed Fazil",
            role: "Full Stack Developer",
            heading: "Exceeded Expectations",
            content: "My journey with WHY TAP as a MERN stack developer student has been truly life-changing. I came in with the goal of starting a career in tech, and this course gave me everything I needed — strong fundamentals, hands-on project work, and real mentorship. Thanks to the support and training, I'm now placed and excited to start my dream career.",
            rating: 5,
            image: fazilPhoto
        },
        {
            id: 3,
            name: "Sindhu Sindhuja",
            role: "Data Analyst",
            heading: "Excellent Learning Experience",
            content: "I enrolled in a Data Analyst course in Pondicherry at BM Academy, and it was an excellent learning experience. My mentor Arshad explained each topic clearly and provided real-time examples to enhance our understanding. He also supported us with projects, which boosted my confidence a lot. I feel well-prepared to apply for jobs.",
            rating: 5,
            image: sindhuPhoto
        },
        {
            id: 4,
            name: "Shabbu Sala",
            role: "Full Stack Developer",
            heading: "Hands-on Practical Training",
            content: "I really like BM Academy. I joined the FSD course, and it has been extremely useful for me. My trainer taught very well and explained every concept clearly. She patiently clarified all my doubts and provided multiple real-time tasks, which helped me gain strong practical knowledge. The hands-on training improved my confidence significantly.",
            rating: 5,
            image: shabbuPhoto
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 8000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    return (
        <section className="bg-white py-24 px-4 font-sans relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#14937a]/5 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14937a]/10 border border-[#14937a]/20 mb-6">
                        <Users size={16} className="text-[#14937a]" />
                        <span className="text-[#14937a] text-[11px] font-black uppercase tracking-[0.2em]">Student Success</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-[#05243b] leading-tight">
                        Reviews from Our <span className="text-[#14937a]">Successful Students</span>
                    </h2>
                    <p className="text-slate-500 font-medium mt-4 max-w-2xl mx-auto text-lg">
                        Real stories from students who transformed their careers through our AI-powered training.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Navigation */}
                    <button 
                        onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 md:-translate-x-12 z-20 w-12 h-12 bg-white rounded-full shadow-2xl border border-slate-50 flex items-center justify-center text-[#05243b] hover:bg-[#14937a] hover:text-white transition-all active:scale-90"
                    >
                        <ChevronLeft size={24} />
                    </button>
                    <button 
                        onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 md:translate-x-12 z-20 w-12 h-12 bg-white rounded-full shadow-2xl border border-slate-50 flex items-center justify-center text-[#05243b] hover:bg-[#14937a] hover:text-white transition-all active:scale-90"
                    >
                        <ChevronRight size={24} />
                    </button>

                    <div className="bg-[#05243b] rounded-[4rem] p-8 md:p-16 shadow-2xl relative overflow-hidden group">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#14937a]/10 to-transparent pointer-events-none" />
                        
                        <div className="grid md:grid-cols-12 gap-12 items-center relative z-10">
                            {/* Image Column */}
                            <div className="md:col-span-5 flex justify-center">
                                <div className="relative w-full max-w-[320px]">
                                    <div className="absolute -inset-4 bg-[#14937a]/20 rounded-[3rem] rotate-6 group-hover:rotate-0 transition-transform duration-700" />
                                    <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border-8 border-white/10 shadow-2xl">
                                        <img 
                                            src={testimonials[currentIndex].image} 
                                            alt={testimonials[currentIndex].name} 
                                            className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-700"
                                            key={currentIndex}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="md:col-span-7 space-y-8">
                                <div className="relative">
                                    <Quote className="absolute -top-12 -left-8 w-24 h-24 text-white/5 pointer-events-none" />
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                            <Star key={i} size={20} className="fill-[#e8be66] text-[#e8be66]" />
                                        ))}
                                    </div>
                                    <h3 className="text-2xl lg:text-3xl font-black text-white italic leading-tight mb-6">
                                        "{testimonials[currentIndex].heading}"
                                    </h3>
                                    <p className="text-slate-300 text-lg leading-relaxed font-medium animate-in fade-in slide-in-from-left-4 duration-700" key={testimonials[currentIndex].content}>
                                        {testimonials[currentIndex].content}
                                    </p>
                                </div>

                                <div className="pt-8 border-t border-white/10">
                                    <h4 className="text-[#14937a] text-xl font-black">{testimonials[currentIndex].name}</h4>
                                    <p className="text-slate-400 font-bold text-xs uppercase tracking-[0.2em] mt-1">
                                        {testimonials[currentIndex].role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-3 mt-12">
                        {testimonials.map((_, i) => (
                            <button 
                                key={i} 
                                onClick={() => setCurrentIndex(i)}
                                className={`h-2 rounded-full transition-all duration-500 ${
                                    currentIndex === i ? 'w-10 bg-[#14937a]' : 'w-2 bg-slate-200'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;