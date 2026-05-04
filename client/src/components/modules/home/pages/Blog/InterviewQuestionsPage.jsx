import React from 'react';
import { 
  FileSearch, 
  Code, 
  BarChart, 
  Globe, 
  ChevronRight, 
  Sparkles,
  ArrowRight,
  BookOpen,
  Trophy
} from 'lucide-react';
import { Link } from 'react-router-dom';

const InterviewQuestionsPage = () => {
  const categories = [
    {
      id: 'full-stack',
      title: "Full Stack Development",
      count: "150+ Questions",
      icon: <Code size={32} />,
      color: "#14937a",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
      description: "Master the full stack! A complete guide to the most common interview questions on React, Node.js, Databases, and System Design."
    },
    {
      id: 'digital-marketing',
      title: "Digital Marketing",
      count: "120+ Questions",
      icon: <Globe size={32} />,
      color: "#e8be66",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      description: "Prepare for your next job interview with our list of top Digital Marketing interview questions. Covers SEO, PPC, Social Media, and Analytics."
    },
    {
      id: 'data-analytics',
      title: "Data Analytics",
      count: "100+ Questions",
      icon: <BarChart size={32} />,
      color: "#05243b",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      description: "Master your data interview! Explore the most common Data Analytics interview questions covering SQL, Python, Excel, and Statistics."
    }
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans pb-24">
      {/* Premium Hub Banner */}
      <div className="relative pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden bg-[#05243b]">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80" 
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
              <span className="text-white text-[10px] font-black uppercase tracking-widest">Interview Preparation Hub</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
              Crack Your <span className="text-[#14937a]">Next</span> Interview
            </h1>
            <p className="text-slate-300 text-base md:text-xl leading-relaxed font-medium max-w-2xl">
              Curated guides, top-tier questions, and expert-crafted answers to help you land your dream job in tech.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.id}
              to={`/interview-questions/${cat.id}`}
              className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col hover:-translate-y-2"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={cat.image} 
                  alt={cat.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#05243b]/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                    {cat.icon}
                  </div>
                  <div>
                    <p className="text-white/60 text-[10px] font-black uppercase tracking-widest leading-none mb-1">Track</p>
                    <h3 className="text-white font-black text-lg">{cat.title}</h3>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-[#14937a] font-black text-[11px] uppercase tracking-widest mb-4">
                  <BookOpen size={14} />
                  {cat.count}
                </div>
                <p className="text-slate-500 font-medium text-sm leading-relaxed mb-8 flex-1">
                  {cat.description}
                </p>
                
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <span className="text-[#05243b] font-black text-[12px] uppercase tracking-widest flex items-center gap-2 group-hover:text-[#14937a] transition-colors">
                    Start Learning
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-[#14937a]/10 group-hover:text-[#14937a] transition-all">
                    <ChevronRight size={20} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Total Questions", value: "500+", icon: <FileSearch /> },
            { label: "Success Rate", value: "94%", icon: <Trophy /> },
            { label: "Updated For", value: "2026", icon: <Sparkles /> },
            { label: "Track Available", value: "3 Tracks", icon: <ArrowRight /> }
          ].map((stat, i) => (
            <div key={i} className="bg-white/50 backdrop-blur-sm p-6 rounded-[2rem] border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#14937a]/10 text-[#14937a] flex items-center justify-center">
                {stat.icon}
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none mb-1">{stat.label}</p>
                <p className="text-[#05243b] font-black text-xl">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InterviewQuestionsPage;
