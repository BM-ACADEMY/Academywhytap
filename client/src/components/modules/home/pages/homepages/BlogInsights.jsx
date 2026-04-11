import React from 'react';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';

// Importing assets for blog images
import blogImg1 from '../../../../../assets/course/digital-marketing/desktop.png';
import blogImg2 from '../../../../../assets/class/class1.png';
import blogImg3 from '../../../../../assets/img10.jpg';

const BlogInsights = () => {
    const blogs = [
        {
            id: 1,
            date: "31/12/2025",
            title: "NVIDIA Backs Nuclear Power for AI Data Centers",
            image: blogImg1,
        },
        {
            id: 2,
            date: "31/12/2025",
            title: "GCCs Are Creating Tech Jobs Faster Than IT Companies in India",
            image: blogImg2,
        },
        {
            id: 3,
            date: "20/11/2025",
            title: "WHY TAP Explores Workforce Development Initiatives with 8 Queens Software...",
            image: blogImg3,
        }
    ];

    return (
        <section className="bg-[#f3f4f6] py-16 px-4 md:px-12 lg:px-20 font-sans">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header - Exactly matching Why Tap scaling */}
                <div className="text-center mb-12 space-y-3">
                    <div className="flex flex-col items-center gap-2">
                        <div className="text-[#05243b]/40">
                            <BookOpen size={24} />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#05243b]">
                            Latest News
                        </h2>
                        <p className="text-gray-600 text-sm md:text-[15px] font-medium max-w-4xl mx-auto leading-relaxed">
                            Get updates on industry trends, career insights, and opportunities presented by the best IT training institute in Chennai with placement in Full Stack Development, Digital Marketing and Data Science courses.
                        </p>
                    </div>
                </div>

                {/* Blog Cards Grid - 1:1 Parity */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {blogs.map((blog) => (
                        <div 
                            key={blog.id} 
                            className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group"
                        >
                            {/* Featured Image */}
                            <div className="relative h-44 shrink-0">
                                <img 
                                    src={blog.image} 
                                    alt={blog.title} 
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Card Content */}
                            <div className="p-5 flex flex-col grow">
                                <div className="flex items-center gap-1.5 text-gray-400 font-bold text-[11px] mb-3">
                                    <Calendar size={13} className="text-[#2a9b87]" />
                                    {blog.date}
                                </div>
                                
                                <h3 className="text-[15px] md:text-base font-bold text-[#05243b] leading-snug mb-6 line-clamp-3 h-18">
                                    {blog.title}
                                </h3>
                                
                                {/* Bottom Action Row */}
                                <div className="mt-auto flex justify-end">
                                    <button className="bg-[#05243b] hover:bg-[#2a9b87] text-white px-4 py-2 rounded-lg text-[11px] font-bold transition-all shadow-sm active:scale-95">
                                        Read More
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    
                    {/* Placeholder for 4th card seen in Why Tap reference */}
                    <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full group">
                        <div className="relative h-44 shrink-0 bg-[#05243b]/5 flex items-center justify-center">
                            <h4 className="text-[#05243b]/20 font-black text-xs uppercase tracking-widest">Events</h4>
                        </div>
                        <div className="p-5 flex flex-col grow">
                            <div className="flex items-center gap-1.5 text-gray-400 font-bold text-[11px] mb-3">
                                <Calendar size={13} className="text-[#2a9b87]" />
                                19/09/2025
                            </div>
                            <h3 className="text-[15px] md:text-base font-bold text-[#05243b] leading-snug mb-6 line-clamp-3 h-18">
                                Women are increasingly targeted in cybercrime
                            </h3>
                            <div className="mt-auto flex justify-end">
                                <button className="bg-[#05243b] hover:bg-[#2a9b87] text-white px-4 py-2 rounded-lg text-[11px] font-bold transition-all shadow-sm active:scale-95">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* View All Button - Refined Outline Style */}
                <div className="flex justify-center">
                    <button className="px-8 py-2.5 rounded-lg border border-[#05243b] text-[#05243b] font-bold text-sm hover:bg-[#05243b] hover:text-white transition-all transform active:scale-95">
                        View All
                    </button>
                </div>

            </div>
        </section>
    );
};

export default BlogInsights;
