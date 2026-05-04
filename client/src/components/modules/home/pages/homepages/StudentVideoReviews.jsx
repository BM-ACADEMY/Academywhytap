import React, { useState } from 'react';
import { Play, X, Calendar, GraduationCap, Briefcase, Rocket } from 'lucide-react';

const StudentVideoReviews = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    const reviews = [
        {
            id: 1,
            title: "From Learning to First Job in Video Editing",
            tag: "Student Experience",
            icon: <GraduationCap size={14} />,
            thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
            videoId: "dQw4w9WgXcQ", // Placeholder
            color: "from-blue-500 to-indigo-600",
            date: "May 2026"
        },
        {
            id: 2,
            title: "How Pavithra Built Real Project Experience",
            tag: "Project Experience",
            icon: <Rocket size={14} />,
            thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
            videoId: "dQw4w9WgXcQ", // Placeholder
            color: "from-emerald-500 to-teal-600",
            date: "April 2026"
        },
        {
            id: 3,
            title: "From Beginner to Digital Marketing Professional",
            tag: "Career Growth",
            icon: <Calendar size={14} />,
            thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
            videoId: "dQw4w9WgXcQ", // Placeholder
            color: "from-purple-500 to-pink-600",
            date: "March 2026"
        },
        {
            id: 4,
            title: "From Student to Web Developer Journey",
            tag: "Placed / Career Started",
            icon: <Briefcase size={14} />,
            thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
            videoId: "dQw4w9WgXcQ", // Placeholder
            color: "from-orange-500 to-red-600",
            date: "Feb 2026"
        },
        {
            id: 5,
            title: "Full Stack Journey: From Training to Career",
            tag: "Placed / Career Started",
            icon: <Briefcase size={14} />,
            thumbnail: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
            videoId: "dQw4w9WgXcQ", // Placeholder
            color: "from-cyan-500 to-blue-600",
            date: "Jan 2026"
        }
    ];

    return (
        <section id="testimonials" className="bg-[#020b13] py-24 px-6 overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                            Real Student <span className="text-[#14937a]">Success Stories</span>
                        </h2>
                        <p className="text-slate-400 text-lg font-medium">
                            Watch how BM Academy students gained skills, worked on real projects, and started their careers.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-black text-[#14937a] uppercase tracking-widest">
                            {reviews.length} Stories Found
                        </div>
                    </div>
                </div>

                {/* Video Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((video) => (
                        <div 
                            key={video.id}
                            className="group relative flex flex-col bg-white/[0.02] border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-black/50"
                        >
                            {/* Thumbnail Container */}
                            <div className="relative aspect-video overflow-hidden">
                                <img 
                                    src={video.thumbnail} 
                                    alt={video.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
                                
                                {/* Tag Overlay */}
                                <div className="absolute top-4 left-4">
                                    <div className={`flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[10px] font-black text-white uppercase tracking-wider`}>
                                        <span className="text-[#14937a]">{video.icon}</span>
                                        {video.tag}
                                    </div>
                                </div>

                                {/* Play Button Overlay */}
                                <button 
                                    onClick={() => setSelectedVideo(video.videoId)}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-[#14937a] rounded-full flex items-center justify-center text-white shadow-2xl shadow-[#14937a]/40 scale-90 group-hover:scale-100 transition-all duration-500"
                                >
                                    <Play size={28} fill="currentColor" className="ml-1" />
                                    {/* Pulse Effect */}
                                    <div className="absolute inset-0 bg-[#14937a] rounded-full animate-ping opacity-20"></div>
                                </button>

                                {/* Date Overlay */}
                                <div className="absolute bottom-4 right-4 text-[10px] font-bold text-white/60 uppercase tracking-widest">
                                    {video.date}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-white leading-tight group-hover:text-[#14937a] transition-colors duration-300">
                                    {video.title}
                                </h3>
                                <div className="mt-6 flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-[#14937a]/20 flex items-center justify-center text-[#14937a]">
                                        <Play size={14} />
                                    </div>
                                    <button 
                                        onClick={() => setSelectedVideo(video.videoId)}
                                        className="text-xs font-black text-white/40 uppercase tracking-[0.2em] hover:text-white transition-colors"
                                    >
                                        Watch Testimonial
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Video Modal */}
                {selectedVideo && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
                        {/* Backdrop */}
                        <div 
                            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
                            onClick={() => setSelectedVideo(null)}
                        ></div>
                        
                        {/* Modal Content */}
                        <div className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl">
                            <button 
                                onClick={() => setSelectedVideo(null)}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-all"
                            >
                                <X size={24} />
                            </button>
                            <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                                title="Student Review"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default StudentVideoReviews;
