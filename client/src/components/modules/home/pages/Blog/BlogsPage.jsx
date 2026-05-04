import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ChevronRight, 
  Calendar, 
  User, 
  Clock, 
  ArrowRight,
  TrendingUp,
  Sparkles
} from 'lucide-react';

const BlogsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Articles');

  const categories = [
    'All Articles', 'AI & ML', 'Digital Marketing', 'Data Analytics', 
    'Cybersecurity', 'Software Development', 'Career Guidance'
  ];

  const articles = [
    {
      id: 1,
      title: "What Recruiters Don't Tell You About Data Science Jobs",
      excerpt: "Over the past few years, the data science landscape has changed significantly. Here's what you need to know about the hidden expectations...",
      author: "John Benhar P S",
      date: "Mar 30, 2026",
      readTime: "5 Min Read",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
      category: "Data Science"
    },
    {
      id: 2,
      title: "From Non-IT to Data Analyst: A Complete Transition Blueprint",
      excerpt: "Transitioning into a data analytics role from a non-technical background is possible with the right roadmap and tools...",
      author: "Shakthi A",
      date: "Mar 31, 2026",
      readTime: "5 Min Read",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
      category: "Data Analytics"
    },
    {
      id: 3,
      title: "Infosys Joins Hands with Anthropic: The Rise of AI Agents",
      excerpt: "The partnership between Infosys and Anthropic marks a new era in enterprise AI agents and large language models...",
      author: "Shakthi A",
      date: "Mar 30, 2026",
      readTime: "5 Min Read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80",
      category: "AI & ML"
    },
    {
      id: 4,
      title: "DATA ANALYST ROADMAP 2026: Skills, Tools & Salary",
      excerpt: "Everything you need to know about becoming a Data Analyst in 2026, from essential tools to latest salary trends...",
      author: "John Benhar P S",
      date: "Mar 28, 2026",
      readTime: "8 Min Read",
      image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=1200&q=80",
      category: "Data Analytics"
    }
  ];

  const featuredArticle = articles[0];

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans pb-24">
      {/* Premium Compact Banner */}
      <div className="relative pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden bg-[#05243b]">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80" 
            alt="background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05243b]/95 via-[#05243b]/80 to-[#05243b]" />
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#14937a]/20 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <Sparkles size={14} className="text-[#e8be66]" />
              <span className="text-white text-[10px] font-black uppercase tracking-widest">Knowledge Hub</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
              The <span className="text-[#14937a]">Student</span> Corner <span className="text-[#e8be66]">Blog</span>
            </h1>
            <p className="text-slate-300 text-base md:text-xl leading-relaxed font-medium max-w-2xl">
              Expert insights, career roadmaps, and industry updates curated for future tech leaders.
            </p>
          </div>
        </div>
      </div>

      {/* Category Pills - Compact overlap */}
      <div className="relative z-30 -mt-10 mb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_-15px_rgba(5,36,59,0.2)] border border-slate-100 p-5 flex items-center gap-4 overflow-x-auto no-scrollbar">
            <div className="flex items-center gap-3">
              {categories.map((cat) => (
                <button 
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-10 py-4 rounded-2xl font-black text-[12px] uppercase tracking-widest transition-all ${selectedCategory === cat ? 'bg-[#14937a] text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50 hover:text-[#05243b]'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto px-6 mt-32">
        {/* Featured Story - Glass Style */}
        <div className="mb-24 relative group">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#14937a]/20 to-[#e8be66]/20 rounded-[4rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative bg-white rounded-[3.5rem] shadow-2xl border border-slate-100 overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-80 lg:h-[500px] overflow-hidden">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#05243b]/40 to-transparent" />
                <div className="absolute bottom-8 left-8">
                  <div className="px-4 py-2 bg-[#14937a] text-white text-[10px] font-black uppercase tracking-widest rounded-lg">
                    Featured Article
                  </div>
                </div>
              </div>
              <div className="p-10 lg:p-16 flex flex-col justify-center bg-white relative">
                {/* Decorative Icon */}
                <div className="absolute top-10 right-10 text-slate-50 opacity-20">
                  <TrendingUp size={120} />
                </div>
                <div className="flex items-center gap-4 text-[#14937a] font-black text-[11px] uppercase tracking-[0.2em] mb-6">
                  <Calendar size={16} />
                  {featuredArticle.date}
                </div>
                <h2 className="text-3xl lg:text-5xl font-black text-[#05243b] leading-[1.2] mb-8 group-hover:text-[#14937a] transition-colors">
                  {featuredArticle.title}
                </h2>
                <p className="text-slate-500 text-lg leading-relaxed mb-10 font-medium">
                  {featuredArticle.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-8 border-t border-slate-50">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-[#05243b] text-white flex items-center justify-center font-black text-sm">
                      JB
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Author</p>
                      <p className="text-[#05243b] font-bold">{featuredArticle.author}</p>
                    </div>
                  </div>
                  <Link 
                    to={`/blog/featured`}
                    className="flex items-center gap-3 text-[#14937a] font-black text-[13px] uppercase tracking-widest group/link"
                  >
                    Read Story
                    <div className="w-10 h-10 rounded-full border-2 border-[#14937a]/20 flex items-center justify-center group-hover/link:bg-[#14937a] group-hover/link:text-white transition-all">
                      <ArrowRight size={18} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Feed Section */}
        <div className="flex flex-col md:flex-row gap-8 items-end justify-between mb-16 px-4">
          <div>
            <h3 className="text-4xl font-black text-[#05243b] mb-4">Latest <span className="text-[#14937a]">Insights</span></h3>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Exploring {selectedCategory}</p>
          </div>
          <div className="relative w-full md:max-w-md group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search size={20} className="text-slate-300 group-focus-within:text-[#14937a] transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Search anything..." 
              className="w-full pl-16 pr-8 py-5 bg-white border border-slate-100 rounded-[2rem] focus:outline-none focus:border-[#14937a] focus:ring-4 focus:ring-[#14937a]/5 transition-all font-bold text-[#05243b] shadow-xl shadow-slate-200/20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {articles.map((article) => (
            <div key={article.id} className="group flex flex-col h-full bg-white rounded-[2.5rem] border border-slate-50 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-widest text-[#14937a]">
                  {article.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 text-slate-400 font-bold text-[11px] uppercase tracking-widest mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#14937a]" />
                    {article.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-[#14937a]" />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="text-[20px] font-black text-[#05243b] leading-tight mb-8 group-hover:text-[#14937a] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center">
                      <User size={14} className="text-[#05243b]" />
                    </div>
                    <span className="text-[12px] font-black text-slate-500">{article.author}</span>
                  </div>
                  <Link 
                    to={`/blog/details`}
                    className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#05243b] group-hover:bg-[#14937a] group-hover:text-white transition-all shadow-sm"
                  >
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating Load More */}
        <div className="mt-20 flex justify-center">
          <button className="group relative px-12 py-5 bg-[#05243b] text-white rounded-2xl font-black text-sm uppercase tracking-widest overflow-hidden transition-all hover:pr-16 active:scale-95 shadow-2xl shadow-[#05243b]/20">
            <span className="relative z-10">Explore More Articles</span>
            <div className="absolute right-0 top-0 bottom-0 w-0 bg-[#14937a] group-hover:w-full transition-all duration-500" />
            <ArrowRight className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all z-20" size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
