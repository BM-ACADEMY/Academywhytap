import React, { useState, useEffect } from 'react';
import { 
  CheckCircle, Clock, TrendingUp, Users, Star, Laptop, ChevronRight, 
  Award, Briefcase, Plus, Minus, Database, Cpu, Rocket, 
  BarChart2, PieChart, Layout, Search, Zap, FileText, Brain, Play, HelpCircle, Shield
} from 'lucide-react';
import graduationSuccess from '../../../../../../assets/graduation_success_clean.png';
import desktopBanner from '../../../../../../assets/course/digital-marketing/desktop.png';
import mobileBanner from '../../../../../../assets/course/digital-marketing/mobile.png';

const skillTools = {
  'Visualization': [
    { name: 'Power BI', icon: 'https://cdn.worldvectorlogo.com/logos/power-bi.svg' },
    { name: 'Tableau', icon: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' },
    { name: 'Advanced Excel', icon: 'https://cdn.worldvectorlogo.com/logos/microsoft-excel-2013.svg' },
    { name: 'Google Data Studio', icon: 'https://cdn.worldvectorlogo.com/logos/google-data-studio.svg' },
  ],
  'Analysis & SQL': [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
  ],
  'AI & Statistics': [
    { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
    { name: 'Scikit-Learn', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg' },
    { name: 'ChatGPT for Data', icon: 'https://www.svgrepo.com/show/306500/openai.svg' },
  ]
};

const curriculum = [
  { 
    module: 'Module 1', 
    title: 'Excel & SQL Fundamentals', 
    topics: ['Data cleaning and formatting techniques', 'Advanced Excel formulas and functions', 'Pivot tables and data modeling', 'Introduction to SQL and RDBMS', 'Writing efficient SQL queries'] 
  },
  { 
    module: 'Module 2', 
    title: 'Data Visualization (Power BI / Tableau)', 
    topics: ['Introduction to BI tools', 'Building interactive dashboards', 'Connecting to multiple data sources', 'Data modeling and DAX functions', 'Data storytelling best practices'] 
  },
  { 
    module: 'Module 3', 
    title: 'Python for Analytics & EDA', 
    topics: ['Python programming fundamentals', 'Data analysis with Pandas and NumPy', 'Data cleaning and preprocessing', 'Data visualization with Matplotlib', 'Exploratory Data Analysis (EDA)'] 
  },
  { 
    module: 'Module 4', 
    title: 'Statistics & AI for Data Science', 
    topics: ['Probability & Descriptive Statistics', 'Inferential Statistics for Business', 'AI Tools for Data Cleaning', 'Automated Insights Generation', 'Predictive Modeling Basics'] 
  },
  { 
    module: 'Module 5', 
    title: 'Capstone Projects & Career Prep', 
    topics: ['Real-world Industry Case Studies', 'Building a Data Analyst Portfolio', 'Resume & LinkedIn Optimization', 'Mock Interviews & Technical Tests', '100% Placement Assistance'] 
  }
];

const DataAnalysis = () => {
  const [activeTab, setActiveTab] = useState('Visualization');
  const [openModule, setOpenModule] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [videoReviews, setVideoReviews] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: '',
    course: 'Data Analytics'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/919944940051?text=Hi, I am interested in the AI-Powered Data Analytics course. Name: ${formData.name}, Phone: ${formData.phone}, City: ${formData.city}`, '_blank');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setReviews([
      { name: 'Sindhu Sindhuja', text: 'I enrolled in a Data Analyst course in Pondicherry at BM Academy, and it was an excellent learning experience.', time: '2 months ago', rating: 5 },
      { name: 'Vasanth J', text: 'Best institute for data analytics. The placement team is very active.', time: '3 months ago', rating: 5 }
    ]);
    setVideoReviews([
      { name: 'Success Story 1', id: 'dQw4w9WgXcQ' },
      { name: 'Success Story 2', id: 'dQw4w9WgXcQ' },
      { name: 'Success Story 3', id: 'dQw4w9WgXcQ' }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#14937a] selection:text-white">
      {/* Hero Section */}
      <div className="relative pt-24 pb-12 md:pt-32 md:pb-24 overflow-hidden bg-[#05243b]">
        <div className="absolute inset-0 z-0">
          <img src={mobileBanner} alt="mobile banner" className="w-full h-full object-cover md:hidden opacity-30" />
          <img src={desktopBanner} alt="desktop banner" className="w-full h-full object-cover hidden md:block opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#05243b] via-[#05243b]/90 to-transparent" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#14937a]/10 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 group hover:border-[#14937a]/50 transition-all duration-500">
              <div className="w-2 h-2 rounded-full bg-[#14937a] animate-ping" />
              <span className="text-[#14937a] text-xs md:text-sm font-black uppercase tracking-[0.2em]">
                AI-Powered Data Analytics Course in Pondicherry
              </span>
            </div>

            <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.05] mb-8 tracking-tight">
              Master <span className="text-[#14937a]">Data Analytics</span> with <br />
              Advanced AI Insights
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed max-w-2xl font-medium mb-12">
              Turn raw data into actionable business intelligence. Master Excel, SQL, Power BI, and Python with real-world case studies and AI-driven automation techniques at BM Academy.
            </p>

            <div className="flex flex-wrap gap-5">
              <button 
                onClick={() => document.getElementById('syllabus')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-[#14937a] text-white font-black rounded-2xl hover:bg-white hover:text-[#05243b] transition-all shadow-[0_20px_50px_rgba(20,147,122,0.3)] flex items-center gap-3 active:scale-95 cursor-pointer group"
              >
                Enroll Now
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-4 px-6 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+15}`} className="w-10 h-10 rounded-full border-2 border-[#05243b]" alt="student" />
                  ))}
                </div>
                <div className="text-xs">
                  <p className="text-white font-black">Trusted by 5000+</p>
                  <p className="text-[#14937a] font-black uppercase tracking-widest">Active Learners</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Form */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-[#14937a]/20 blur-[80px] rounded-full scale-75 animate-pulse" />
            <div className="relative bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-white/20">
              <div className="bg-[#e8be66] py-4 px-8 text-center">
                <div className="flex items-center justify-center gap-2 text-[#05243b] font-black text-sm uppercase tracking-widest">
                  <Clock size={16} />
                  Next Batch Starts Soon
                </div>
              </div>
              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-black text-[#05243b] mb-2 text-center uppercase tracking-tight">Start Your Career</h3>
                <p className="text-slate-500 text-sm text-center mb-8 font-bold italic">Join Pondicherry's Best Data Academy</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { label: 'Full Name *', name: 'name', type: 'text', placeholder: 'e.g. Sanjay Kumar' },
                    { label: 'Phone Number *', name: 'phone', type: 'tel', placeholder: '10 Digit Mobile Number' },
                    { label: 'City *', name: 'city', type: 'text', placeholder: 'e.g. Pondicherry' }
                  ].map(field => (
                    <div key={field.name}>
                      <label className="block text-[11px] font-black text-[#05243b] uppercase tracking-widest mb-2 ml-1">{field.label}</label>
                      <input 
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required
                        placeholder={field.placeholder}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#14937a] focus:bg-white transition-all font-bold text-[#05243b] placeholder:text-slate-300"
                      />
                    </div>
                  ))}
                  <button className="w-full py-5 bg-[#14937a] text-white font-black rounded-2xl hover:bg-[#05243b] transition-all duration-300 shadow-xl shadow-[#14937a]/20 uppercase tracking-widest text-sm mt-4 active:scale-95 cursor-pointer">
                    Enroll Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-[#05243b] mb-6 tracking-tight">Tools of the <span className="text-[#14937a]">Trade</span></h2>
            <div className="flex flex-wrap justify-center gap-4">
              {Object.keys(skillTools).map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`px-8 py-3 rounded-full font-black text-sm uppercase tracking-widest transition-all ${activeTab === cat ? 'bg-[#14937a] text-white shadow-xl shadow-[#14937a]/20' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skillTools[activeTab].map((tool, i) => (
              <div key={i} className="group p-10 rounded-[3rem] bg-white border border-slate-100 flex flex-col items-center justify-center gap-6 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-[#14937a]/30">
                <div className="w-20 h-20 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110">
                  <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-[#05243b] font-black text-center group-hover:text-[#14937a] transition-colors">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14937a]/10 text-[#14937a] text-xs font-black uppercase tracking-widest mb-6">
              <Star size={14} />
              Key Features
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#05243b] mb-6">Course <span className="text-[#14937a]">Highlights</span></h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-lg font-medium">Industry-aligned curriculum designed for immediate impact in the data science landscape.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Global Curriculum', desc: 'Covering Excel, SQL, Power BI & Python in depth.', icon: <Database size={24} /> },
              { title: 'AI Integration', desc: 'Using AI tools for automated analysis and insights.', icon: <Cpu size={24} /> },
              { title: 'Live Projects', desc: 'Real-time datasets and industry case studies.', icon: <Rocket size={24} /> },
              { title: 'Placement Goal', desc: '100% career guidance and placement support.', icon: <Briefcase size={24} /> },
              { title: 'Modern Lab', desc: 'Hands-on practice in high-tech specialized labs.', icon: <Laptop size={24} /> },
              { title: 'Certification', desc: 'Industry-recognized professional BM Academy certificate.', icon: <Award size={24} /> }
            ].map((item, i) => (
              <div key={i} className="group p-10 rounded-[3rem] bg-white border border-slate-100 hover:border-[#14937a]/30 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2">
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-[#14937a] mb-8 group-hover:bg-[#14937a] group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black text-[#05243b] mb-4">{item.title}</h3>
                <p className="text-slate-500 text-sm font-bold leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14937a]/10 text-[#14937a] text-xs font-black uppercase tracking-widest mb-6">
              <Cpu size={14} />
              Our Excellence
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#05243b] mb-6">Learning <span className="text-[#14937a]">Methodology</span></h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">A systematic 8-step journey designed to transform raw potential into data expertise.</p>
          </div>

          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 hidden lg:block px-20">
               <svg width="100%" height="200" viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-10">
                  <path d="M0 100C150 100 150 20 300 20C450 20 450 180 600 180C750 180 750 20 900 20C1050 20 1050 100 1200 100" stroke="#14937a" strokeWidth="4" strokeDasharray="12 12"/>
               </svg>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-32 gap-x-12 relative">
              {[
                { title: 'Expert-Led Training', step: '01', icon: <Users size={28} />, color: 'from-purple-500 to-indigo-600', pos: 'lg:-translate-y-12' },
                { title: 'Concept Simplification', step: '02', icon: <Search size={28} />, color: 'from-blue-500 to-cyan-600', pos: 'lg:translate-y-12' },
                { title: 'Practical Learning', step: '03', icon: <Laptop size={28} />, color: 'from-teal-500 to-emerald-600', pos: 'lg:-translate-y-12' },
                { title: 'Personal Mentorship', step: '04', icon: <Users size={28} />, color: 'from-green-500 to-lime-600', pos: 'lg:translate-y-12' },
                { title: 'Portfolio Building', step: '05', icon: <Layout size={28} />, color: 'from-yellow-400 to-orange-500', pos: 'lg:-translate-y-12' },
                { title: 'AI Tool Mastery', step: '06', icon: <Zap size={28} />, color: 'from-orange-500 to-red-600', pos: 'lg:translate-y-12' },
                { title: 'Capstone Projects', step: '07', icon: <Rocket size={28} />, color: 'from-sky-500 to-blue-600', pos: 'lg:-translate-y-12' },
                { title: 'Industry-Ready Training', step: '08', icon: <Award size={28} />, color: 'from-pink-500 to-rose-600', pos: 'lg:translate-y-12' }
              ].map((method, i) => (
                <div key={i} className={`relative group flex flex-col items-center text-center ${method.pos} transition-all duration-700`}>
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center text-white mb-10 shadow-[0_20px_50px_rgba(0,0,0,0.15)] relative z-10 group-hover:scale-110 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] transition-all duration-500`}>
                    {method.icon}
                    <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#05243b] text-white text-xs font-black flex items-center justify-center border-4 border-white shadow-xl">
                      {method.step}
                    </div>
                  </div>
                  <div className="max-w-[180px]">
                    <h3 className="text-lg font-black text-[#05243b] leading-tight group-hover:text-[#14937a] transition-colors uppercase tracking-tight">{method.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Goals Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <img src={graduationSuccess} alt="Career Success" className="relative z-10 w-full h-auto group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute -bottom-10 -right-10 bg-[#05243b] p-10 rounded-[3rem] shadow-2xl border border-white/5 animate-float hidden md:block">
                <p className="text-[#14937a] font-black text-5xl mb-2">100%</p>
                <p className="text-white text-xs font-black uppercase tracking-[0.2em]">Career Support</p>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14937a]/10 text-[#14937a] text-xs font-black uppercase tracking-widest mb-6">
                <TrendingUp size={14} />
                Future-Ready Careers
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-[#05243b] mb-6 leading-tight">Achieve Your Career Goals with <span className="text-[#14937a]">BM Academy</span></h2>
              <p className="text-slate-500 text-lg font-medium leading-relaxed mb-10">The data landscape is evolving. BM Academy equips you with the advanced skills needed to thrive in top-tier analytics roles globally through hands-on training and real-world projects.</p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { role: 'Data Analyst', icon: <BarChart2 size={18} />, color: 'bg-rose-50 border-rose-100 text-rose-600' },
                  { role: 'Business Analyst', icon: <TrendingUp size={18} />, color: 'bg-amber-50 border-amber-100 text-amber-600' },
                  { role: 'BI Developer', icon: <PieChart size={18} />, color: 'bg-purple-50 border-purple-100 text-purple-600' },
                  { role: 'Data Scientist', icon: <Brain size={18} />, color: 'bg-cyan-50 border-cyan-100 text-cyan-600' },
                  { role: 'Reporting Analyst', icon: <Layout size={18} />, color: 'bg-emerald-50 border-emerald-100 text-emerald-600' },
                  { role: 'Database Admin', icon: <Database size={18} />, color: 'bg-pink-50 border-pink-100 text-pink-600' }
                ].map((job, i) => (
                  <div key={i} className={`flex items-center gap-4 p-5 rounded-2xl border ${job.color} hover:shadow-lg transition-all duration-300 group`}>
                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      {job.icon}
                    </div>
                    <span className="font-black text-sm text-[#05243b]">{job.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Success Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14937a]/10 text-[#14937a] text-xs font-black uppercase tracking-widest mb-6">
                <Play size={14} fill="currentColor" />
                Student Success
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-[#05243b] mb-4">How Our Students <span className="text-[#14937a]">Transformed</span></h2>
              <p className="text-slate-500 text-lg font-medium max-w-xl">Real stories from students who launched their data careers with us and mastered the art of business intelligence.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-white border border-slate-100 flex items-center gap-4 shadow-xl shadow-slate-200/50">
                <div className="w-10 h-10 rounded-xl bg-yellow-400 flex items-center justify-center text-white"><Star size={20} fill="currentColor" /></div>
                <div><p className="text-[#05243b] font-black text-lg leading-none mb-1">4.9/5</p><p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Google Rating</p></div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {videoReviews.slice(0, 2).map((video, i) => (
              <div key={i} className="group relative rounded-[3rem] overflow-hidden bg-[#05243b] aspect-video shadow-2xl hover:-translate-y-2 transition-all duration-700">
                <iframe className="w-full h-full relative z-0" src={`https://www.youtube.com/embed/${video.id}`} title={video.name} frameBorder="0" allowFullScreen></iframe>
              </div>
            ))}
          </div>

          <div className="relative">
            <h3 className="text-2xl font-black text-[#05243b] mb-8 flex items-center gap-3">
              <div className="w-2 h-8 bg-[#14937a] rounded-full" />
              Data Pro Spotlights
            </h3>
            <div className="flex gap-6 overflow-x-auto pb-12 pt-4 px-4 -mx-4 custom-scrollbar no-scrollbar scroll-smooth">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="flex-shrink-0 w-[280px] group">
                  <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-200 aspect-[9/16] shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-4">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#05243b] via-transparent to-transparent z-10 opacity-60" />
                    <img src={`https://images.unsplash.com/photo-${1551288049 + item}?w=400&q=80`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Student" />
                    <div className="absolute bottom-8 left-8 right-8 z-20">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/30 group-hover:bg-[#14937a] transition-colors"><Play size={20} fill="currentColor" /></div>
                      <p className="text-white font-black text-lg leading-tight mb-1">Student Success {item}</p>
                      <p className="text-slate-300 text-[10px] font-bold uppercase tracking-widest">Data Analyst @ Fortune 500</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hiring & Placement Network Section */}
      <section className="py-32 bg-white relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14937a]/10 text-[#14937a] text-xs font-black uppercase tracking-widest mb-6">
              <Briefcase size={14} />
              Career Partners
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#05243b] mb-6">Our Hiring & <span className="text-[#14937a]">Placement Network</span></h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto font-medium">BM Academy students get career support and opportunities to work with leading multinational corporations and data-driven enterprises.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {[
              { name: 'Google', color: 'text-blue-600' },
              { name: 'Amazon', color: 'text-orange-600' },
              { name: 'TCS', color: 'text-blue-700' },
              { name: 'Infosys', color: 'text-blue-800' },
              { name: 'Accenture', color: 'text-purple-600' },
              { name: 'Microsoft', color: 'text-sky-600' }
            ].map((company, i) => (
              <div key={i} className="group h-32 bg-white border border-slate-100 rounded-[2rem] flex flex-col items-center justify-center p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-[#14937a]/30">
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-3 group-hover:bg-[#14937a]/10 transition-colors">
                  <Database size={24} className="text-slate-300 group-hover:text-[#14937a]" />
                </div>
                <span className={`font-black text-xs uppercase tracking-tighter text-center ${company.color}`}>{company.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
             {['Oracle', 'IBM', 'Capgemini', 'Wipro', 'HCL', 'PayPal'].map((c, i) => (
                <div key={i} className="p-4 border border-slate-100 rounded-xl text-center">
                  <span className="text-[10px] font-black text-[#05243b] uppercase tracking-widest">{c}</span>
                </div>
             ))}
          </div>
        </div>
      </section>

      {/* Syllabus Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden" id="syllabus">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14937a]/10 text-[#14937a] text-xs font-black uppercase tracking-widest mb-6">
              <Database size={14} />
              Comprehensive Curriculum
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#05243b] mb-6">Data Analysis <span className="text-[#14937a]">Course Syllabus</span></h2>
            <p className="text-slate-500 text-lg font-medium">A structured roadmap from data basics to advanced professional business intelligence.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              {curriculum.map((module, i) => (
                <div key={i} className="group border border-slate-100 rounded-[2.5rem] overflow-hidden transition-all duration-500 bg-white hover:shadow-2xl hover:border-[#14937a]/20">
                  <button onClick={() => setOpenModule(openModule === i ? null : i)} className={`w-full p-8 text-left flex items-center justify-between transition-all duration-500 ${openModule === i ? 'bg-[#05243b] text-white' : 'hover:bg-slate-50'}`}>
                    <div className="flex items-center gap-6">
                      <span className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-lg transition-all duration-500 ${openModule === i ? 'bg-[#14937a] text-white scale-110' : 'bg-slate-50 text-[#14937a]'}`}>{i + 1}</span>
                      <div>
                        <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${openModule === i ? 'text-[#14937a]' : 'text-slate-400'}`}>{module.module}</p>
                        <span className="font-black text-xl md:text-2xl tracking-tight">{module.title}</span>
                      </div>
                    </div>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${openModule === i ? 'bg-white/10 rotate-180' : 'bg-slate-100 text-[#05243b]'}`}><ChevronRight size={24} className={openModule === i ? 'rotate-90 text-[#14937a]' : ''} /></div>
                  </button>
                  <div className={`transition-all duration-700 ease-in-out overflow-hidden ${openModule === i ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-10 bg-white">
                      <div className="space-y-4">
                        {module.topics.map((topic, j) => (
                          <div key={j} className="flex items-start gap-4 p-5 rounded-[1.5rem] bg-slate-50/50 border border-slate-100 group/topic hover:border-[#14937a]/30 hover:bg-white transition-all duration-300">
                            <div className="w-6 h-6 rounded-full bg-[#14937a]/10 flex items-center justify-center text-[#14937a] mt-0.5 shrink-0 group-hover/topic:bg-[#14937a] group-hover/topic:text-white transition-colors"><CheckCircle size={14} /></div>
                            <span className="text-slate-600 font-bold text-sm leading-relaxed">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-5 sticky top-32">
              <div className="bg-[#05243b] rounded-[3.5rem] p-10 md:p-12 shadow-3xl relative overflow-hidden border border-white/5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#14937a]/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-2 text-center uppercase tracking-tight">Start Your Career</h3>
                  <p className="text-slate-400 text-sm font-bold text-center mb-10">Fill the form below and our experts will contact you.</p>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {[{ label: 'Full Name', name: 'name', type: 'text', placeholder: 'Enter your name' }, { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: 'Enter 10-digit number' }, { label: 'Current City', name: 'city', type: 'text', placeholder: 'Enter your city' }].map((field) => (
                      <div key={field.name}>
                        <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-4">{field.label}</label>
                        <input type={field.type} name={field.name} value={formData[field.name]} onChange={handleChange} placeholder={field.placeholder} className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#14937a]/50 focus:border-[#14937a] transition-all font-bold" required />
                      </div>
                    ))}
                    <button className="w-full bg-[#14937a] text-white font-black py-5 rounded-2xl hover:bg-white hover:text-[#05243b] transition-all duration-500 shadow-xl shadow-[#14937a]/20 cursor-pointer active:scale-95 text-lg uppercase tracking-widest mt-4">Enroll Now</button>
                  </form>
                  <p className="text-slate-500 text-[10px] font-bold text-center mt-8 uppercase tracking-widest flex items-center justify-center gap-2"><Shield size={12} />100% Privacy Protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14937a]/10 text-[#14937a] text-xs font-black uppercase tracking-widest mb-6">
              <HelpCircle size={14} />
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#05243b] mb-6">Common <span className="text-[#14937a]">Queries</span></h2>
            <p className="text-slate-500 text-lg font-medium">Find answers to common questions about the Data Analysis course at BM Academy.</p>
          </div>
          <div className="space-y-6">
            {[
              { q: 'What is the duration of the course?', a: 'The course duration is approximately 3 to 6 months, depending on the batch and learning pace.' },
              { q: 'Is the course suitable for beginners?', a: 'Yes, this course is beginner-friendly and starts from the basics.' },
              { q: 'What is the mode of training?', a: 'We offer classroom and online training, allowing students to learn in a flexible way.' },
              { q: 'Will I work on real-world projects?', a: 'Yes, students will work on real-time projects to build a strong portfolio.' },
              { q: 'Will I receive a certificate after completion?', a: 'Yes, you will receive a course completion certificate from BM Academy.' },
              { q: 'Do you provide placement support?', a: 'Yes, we provide 100% placement assistance and career guidance.' }
            ].map((faq, i) => (
              <div key={i} className="group border border-slate-100 rounded-[2rem] overflow-hidden transition-all duration-500 bg-white hover:border-[#14937a]/30">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full p-8 text-left flex items-center justify-between group-hover:bg-slate-50/50 transition-all">
                  <span className={`font-black text-lg pr-8 transition-colors ${openFaq === i ? 'text-[#14937a]' : 'text-[#05243b]'}`}>{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${openFaq === i ? 'bg-[#14937a] text-white rotate-180' : 'bg-slate-100 text-[#05243b]'}`}><ChevronRight size={18} className={openFaq === i ? 'rotate-90' : ''} /></div>
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}><div className="p-8 pt-0 text-slate-500 font-bold text-[15px] leading-relaxed">{faq.a}</div></div>
              </div>
            ))}
          </div>
          <div className="mt-20 p-12 rounded-[3.5rem] bg-[#05243b] text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#14937a]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <p className="text-white font-black text-3xl mb-4 relative z-10">Still have questions?</p>
            <p className="text-slate-400 mb-10 relative z-10 max-w-lg mx-auto">Our tech mentors are here to help you start your data journey. Get a free career consultation today.</p>
            <button onClick={() => window.open('https://wa.me/919944940051?text=Hi, I have some questions about the Data Analytics course.', '_blank')} className="px-12 py-5 bg-[#14937a] text-white font-black rounded-2xl hover:bg-white hover:text-[#05243b] transition-all relative z-10 shadow-2xl shadow-[#14937a]/30 cursor-pointer active:scale-95 text-lg">Talk to an Expert</button>
          </div>
        </div>
      </section>

      {/* Custom Styles for Scrollbar */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f1f1f1; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #14937a; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #0d6d5a; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </div>
  );
};

export default DataAnalysis;
