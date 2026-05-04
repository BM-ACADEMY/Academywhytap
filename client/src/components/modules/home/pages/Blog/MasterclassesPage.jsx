import React, { useState } from 'react';
import { 
  Play, 
  Calendar, 
  User, 
  Search, 
  Filter, 
  Sparkles, 
  ChevronRight,
  MonitorPlay,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MasterclassesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);

  const masterclasses = [
    {
      id: 1,
      title: "FREE Masterclass on Communication",
      instructor: "Sathishkumar Kannan, MS (UK), CEO",
      date: "May 17, 2025",
      thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      category: "Soft Skills",
      videoId: "dQw4w9WgXcQ" // Placeholder YouTube IDs
    },
    {
      id: 2,
      title: "Overcoming Procrastination",
      instructor: "Sathishkumar Kannan, MS (UK)",
      date: "May 17, 2025",
      thumbnail: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
      category: "Productivity",
      videoId: "7e90gBu4pas"
    },
    {
      id: 3,
      title: "Masterclass on Employability Skills",
      instructor: "Sathishkumar Kannan, MS (UK)",
      date: "May 24, 2025",
      thumbnail: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
      category: "Career",
      videoId: "3JZ_D3ELwOQ"
    },
    {
      id: 4,
      title: "Resume Building & Interview Prep",
      instructor: "Sathishkumar Kannan, MS (UK)",
      date: "May 31, 2025",
      thumbnail: "https://images.unsplash.com/photo-1586281380349-631531a744c2?w=800&q=80",
      category: "Career",
      videoId: "2g811Eo7K8U"
    },
    {
      id: 5,
      title: "Goal Setting & Game Plans",
      instructor: "Sathishkumar Kannan, MS (UK)",
      date: "Jun 12, 2025",
      thumbnail: "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=800&q=80",
      category: "Strategy",
      videoId: "iSglH-TfCks"
    },
    {
      id: 6,
      title: "Cracking the UI/UX Designer Interview",
      instructor: "Sathishkumar Kannan, MS (UK)",
      date: "Jul 01, 2025",
      thumbnail: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=800&q=80",
      category: "Design",
      videoId: "c9Wg6A_De8k"
    },
    {
      id: 7,
      title: "Cyber Crime, Scams & Safety Hacks",
      instructor: "Expert Panel",
      date: "Aug 30, 2025",
      thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
      category: "Security",
      videoId: "zR6v-25G1-Y"
    },
    {
      id: 8,
      title: "How SEO Works with your Website",
      instructor: "Ms. Monisha, SEO Manager",
      date: "Sep 22, 2025",
      thumbnail: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80",
      category: "Marketing",
      videoId: "hF515-0Tduc"
    },
    {
      id: 9,
      title: "Manual Software Testing Essentials",
      instructor: "Sathishkumar Kannan, MS (UK)",
      date: "Oct 15, 2025",
      thumbnail: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&q=80",
      category: "Software",
      videoId: "nd9pAsL7D-4"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans pb-24">
      {/* Video Player Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-10">
          <div 
            className="absolute inset-0 bg-[#05243b]/90 backdrop-blur-xl animate-in fade-in duration-300"
            onClick={() => setSelectedVideo(null)}
          />
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-[2rem] overflow-hidden shadow-[0_0_100px_-20px_rgba(20,147,122,0.5)] border border-white/10 animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-[#14937a] text-white flex items-center justify-center transition-all backdrop-blur-md border border-white/20 group"
            >
              <ArrowRight className="rotate-45 group-hover:rotate-0 transition-transform" size={24} />
            </button>
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* Compact Premium Banner */}
      <div className="relative pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden bg-[#05243b]">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&q=80" 
            alt="background" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05243b]/95 via-[#05243b]/80 to-[#05243b]" />
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#14937a]/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <Sparkles size={14} className="text-[#e8be66]" />
              <span className="text-white text-[10px] font-black uppercase tracking-widest">Expert-Led Sessions</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
              Premium <span className="text-[#14937a]">Master</span>classes
            </h1>
            <p className="text-slate-300 text-base md:text-xl leading-relaxed font-medium max-w-2xl">
              Unlock exclusive industry insights from the top 1% of tech leaders and career experts.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        
        {/* Search & Filter Bar */}
        <div className="bg-white p-4 rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(5,36,59,0.15)] border border-slate-100 mb-16 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1 w-full group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#14937a] transition-colors" size={20} />
            <input 
              type="text"
              placeholder="Search masterclasses by topic or instructor..."
              className="w-full pl-16 pr-6 py-4 bg-slate-50 border-none rounded-2xl focus:ring-2 focus:ring-[#14937a]/20 font-bold text-slate-600 transition-all"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-8 py-4 bg-[#05243b] text-white rounded-2xl font-black text-[12px] uppercase tracking-widest hover:bg-[#14937a] transition-all whitespace-nowrap shadow-xl shadow-[#05243b]/10">
            <Filter size={18} />
            Filter by Date
          </button>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {masterclasses.map((mc) => (
            <div 
              key={mc.id} 
              onClick={() => setSelectedVideo(mc.videoId)}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col hover:-translate-y-2 cursor-pointer"
            >
              {/* YouTube Style Thumbnail */}
              <div className="relative aspect-video overflow-hidden m-3 rounded-[1.8rem]">
                <img 
                  src={mc.thumbnail} 
                  alt={mc.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay with Play Button */}
                <div className="absolute inset-0 bg-[#05243b]/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px]">
                  <div className="w-16 h-16 rounded-full bg-[#14937a] text-white flex items-center justify-center shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play size={28} fill="currentColor" />
                  </div>
                </div>
                {/* Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[#14937a] text-[10px] font-black uppercase tracking-widest shadow-lg border border-white/20">
                  {mc.category}
                </div>
                {/* Duration Placeholder */}
                <div className="absolute bottom-4 right-4 bg-black/80 px-3 py-1 rounded text-white text-[11px] font-black">
                  45:00
                </div>
              </div>

              {/* Content */}
              <div className="px-8 pb-8 pt-4 flex-1 flex flex-col">
                <div className="flex items-center gap-3 text-slate-400 font-bold text-[11px] uppercase tracking-widest mb-4">
                  <Calendar size={14} className="text-[#14937a]" />
                  {mc.date}
                </div>
                <h3 className="text-xl font-black text-[#05243b] mb-4 leading-tight group-hover:text-[#14937a] transition-colors min-h-[56px] flex items-center">
                  {mc.title}
                </h3>
                
                <div className="flex items-center gap-3 mb-8 pt-6 border-t border-slate-50 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-[#05243b] text-white flex items-center justify-center font-black text-[10px]">
                    {mc.instructor.split(' ')[0][0]}
                  </div>
                  <div>
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">Instructor</p>
                    <p className="text-[#05243b] font-bold text-[13px] leading-tight">{mc.instructor}</p>
                  </div>
                </div>

                <button className="w-full py-4 rounded-2xl bg-slate-50 text-[#05243b] font-black text-[12px] uppercase tracking-widest group-hover:bg-[#14937a] group-hover:text-white transition-all flex items-center justify-center gap-2">
                  Watch Masterclass
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 bg-[#05243b] rounded-[3rem] p-12 md:p-20 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#14937a]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <MonitorPlay size={48} className="text-[#e8be66] mx-auto mb-8" />
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Missing a Session?
            </h2>
            <p className="text-slate-300 text-lg font-medium mb-10 leading-relaxed">
              All our masterclasses are recorded and made available for lifetime access to our enrolled students.
            </p>
            <button className="px-10 py-5 bg-[#14937a] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#14937a]/90 transition-all shadow-2xl shadow-[#14937a]/20">
              Join Our Next Live Session
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterclassesPage;
