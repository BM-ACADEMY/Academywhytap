import React from 'react';
import { Star, CheckCircle2, MessageSquare, Sparkles, ExternalLink } from 'lucide-react';

const GoogleReviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Pavan Kumar",
            date: "11 days ago",
            rating: 5,
            text: "Good experience for all i learned how the cyber crime works. The practical sessions were very helpful and the mentors explained everything clearly.",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100",
            verified: true
        },
        {
            id: 2,
            name: "Dio Akash",
            date: "1 month ago",
            rating: 5,
            text: "Very nice full sessions to learns about cyber security. I gained a lot of knowledge about networking and security protocols.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100",
            verified: true
        },
        {
            id: 3,
            name: "Priyanka",
            date: "1 month ago",
            rating: 5,
            text: "It was good to know about new things it will make me to admire the cyber world. The course structure is very well organized.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100",
            verified: true
        },
        {
            id: 4,
            name: "manisha karthi",
            date: "1 month ago",
            rating: 5,
            text: "Great experience! The road map to get deep into cyber security session is very useful to helpful to get knowledge. eye opening session.",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100",
            verified: true
        }
    ];

    return (
        <section id="reviews" className="bg-[#020b13] py-24 px-6 relative overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                            What Our <span className="text-[#14937a]">Students Say</span>
                        </h2>
                        <p className="text-slate-400 text-lg font-medium">
                            Real feedback from our students who experienced BM Academy’s training and placement support.
                        </p>
                    </div>
                </div>

                {/* Google Trust Header (Theme Pattern) */}
                <div className="bg-[#020b13] border border-white/5 rounded-[2.5rem] p-6 md:px-12 md:py-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-black/50">
                    <div className="flex items-center gap-8">
                        <div className="text-5xl font-black text-white tracking-tighter">4.6</div>
                        <div className="flex flex-col">
                            <div className="flex gap-0.5 mb-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} className={i < 4 ? "fill-yellow-500 text-yellow-500" : "fill-slate-700 text-slate-700"} />
                                ))}
                            </div>
                            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.1em]">
                                1,037 reviews on <span className="text-white">Google</span>
                            </p>
                        </div>
                    </div>
                    <button className="px-10 py-4 bg-[#14937a] hover:bg-[#14937a] text-white rounded-2xl font-black text-[10px] uppercase tracking-[0.15em] transition-all hover:scale-105 shadow-xl shadow-[#7a143b]/10 whitespace-nowrap">
                        Review us on Google
                    </button>
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    
                    {/* AI Summary Card */}
                    <div className="lg:col-span-1 bg-gradient-to-br from-[#14937a]/10 to-transparent border border-[#14937a]/30 rounded-[2rem] p-8 relative overflow-hidden group">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#14937a]/20 blur-3xl rounded-full"></div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 bg-[#14937a] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#14937a]/20">
                                <Sparkles size={20} />
                            </div>
                            <h3 className="text-sm font-black text-[#14937a] uppercase tracking-tighter">AI Summary</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Students appreciate the practical, hands-on approach to learning.",
                                "Mentors are highly praised for their clarity, patience, and support.",
                                "The institute fosters a motivating and friendly atmosphere for skill development."
                            ].map((item, i) => (
                                <li key={i} className="flex gap-3 text-xs font-medium text-slate-300 leading-relaxed">
                                    <CheckCircle2 size={14} className="shrink-0 text-[#14937a] mt-0.5" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-8 pt-6 border-t border-white/10">
                            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Based on 1,037 reviews</p>
                        </div>
                    </div>

                    {/* Individual Review Cards */}
                    {reviews.map((review) => (
                        <div 
                            key={review.id}
                            className="bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 flex flex-col hover:bg-white/[0.05] transition-all group"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={14} className="fill-yellow-500 text-yellow-500" />
                                ))}
                            </div>
                            <p className="text-sm font-medium text-slate-300 leading-relaxed mb-8 flex-grow italic">
                                "{review.text}"
                            </p>
                            <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                                <img src={review.image} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                                <div className="min-w-0">
                                    <div className="flex items-center gap-1">
                                        <h4 className="text-xs font-bold text-white truncate">{review.name}</h4>
                                        {review.verified && <CheckCircle2 size={10} className="text-[#14937a]" />}
                                    </div>
                                    <p className="text-[10px] font-medium text-slate-500">{review.date}</p>
                                </div>
                                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ExternalLink size={12} className="text-[#14937a]" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Brand */}
                <div className="mt-16 flex justify-center">
                    <div className="flex items-center gap-2 text-slate-500 font-black text-[10px] uppercase tracking-[0.3em]">
                        Verified Reviews on <span className="text-white">Google Maps</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GoogleReviews;
