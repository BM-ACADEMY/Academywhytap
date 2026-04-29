import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle, Clock, TrendingUp, Users, Star, Laptop, ChevronRight, 
  Award, Briefcase, Megaphone, Plus, Minus, HelpCircle, Code2, 
  Server, Database, Globe, Cpu, Smartphone, Layout, Rocket, 
  BarChart2, PieChart, Activity, Zap, Target, Search, MessageSquare, Quote,CreditCard,
  GraduationCap, BadgeCheck, FileText, Brain
} from 'lucide-react';
import academyImage from '../../../../../../assets/Acadmey.png';
import graduationSuccess from '../../../../../../assets/graduation_success_clean.png';
import desktopBanner from '../../../../../../assets/course/digital-marketing/desktop.png';
import mobileBanner from '../../../../../../assets/course/digital-marketing/mobile.png';
import robotImg from '../../../../../../assets/course/data-analysis/robot_v2.png';

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
  const [activeTab, setActiveTab] = useState('Tools');
  const [openModule, setOpenModule] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [videoReviews, setVideoReviews] = useState([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

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
    // Dynamic fetch placeholder
    setReviews([
      { name: 'Sindhu Sindhuja', text: 'I enrolled in a Data Analyst course in Pondicherry at BM Academy, and it was an excellent learning experience.', time: '2 months ago', rating: 5 },
      { name: 'Vasanth J', text: 'Best institute for data analytics. The placement team is very active.', time: '3 months ago', rating: 5 }
    ]);
    setVideoReviews([
      { name: 'Success Story 1', id: 'dQw4w9WgXcQ' },
      { name: 'Success Story 2', id: 'dQw4w9WgXcQ' }
    ]);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#14937a] selection:text-white">
      {/* Hero Section */}
      <div className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #02182b 0%, #05243b 100%)' }}>
        {/* Responsive Background Images */}
        <div className="absolute inset-0">
          <img src={mobileBanner} alt="mobile banner" className="w-full h-full object-cover md:hidden" />
          <img src={desktopBanner} alt="desktop banner" className="w-full h-full object-cover hidden md:block" />
          <div className="absolute inset-0 bg-[#02182b]/70 md:bg-transparent md:bg-gradient-to-r md:from-[#02182b]/90 md:via-[#02182b]/40 md:to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            {/* Trust Line */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#05243b] bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+25}`} alt="user" />
                  </div>
                ))}
              </div>
              <div className="text-slate-300 text-sm font-medium">
                <span className="text-white font-bold">Trusted by 5000+ Students</span>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-[#e8be66] font-bold">4.8</span>
                  <div className="flex text-[#e8be66]">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={12} fill="currentColor" />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#14937a] animate-pulse" />
              <span className="text-[#14937a] text-[13px] font-bold uppercase tracking-wide">Placement Support Guaranteed</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tight">
              AI-Powered <br />
              <span className="text-[#14937a]">Data Analytics</span> Course
            </h1>

            <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
              Learn data analytics using tools like Excel, SQL, Power BI, and Python with hands-on training and real-time projects at BM Academy to build practical skills for data-driven careers.
            </p>

            <div className="flex flex-wrap gap-5">
              <button 
                onClick={() => window.open('https://wa.me/919944940051?text=Hi, I am interested in the AI-Powered Data Analytics syllabus.', '_blank')}
                className="px-10 py-5 bg-[#14937a] text-white font-black rounded-2xl hover:bg-white hover:text-[#05243b] transition-all shadow-xl shadow-[#14937a]/20 flex items-center gap-3 active:scale-95 cursor-pointer"
              >
                Download Syllabus
                <ChevronRight size={20} />
              </button>
              <button 
                onClick={() => document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-10 py-5 bg-white/5 text-white font-black rounded-2xl hover:bg-white hover:text-[#05243b] transition-all border border-white/20 backdrop-blur-md active:scale-95 cursor-pointer"
              >
                Book Free Demo Class
              </button>
            </div>
          </div>

          {/* Right Form Card */}
          <div className="lg:col-span-5 relative" id="enquiry-form">
            <div className="absolute inset-0 bg-[#14937a]/20 blur-[80px] rounded-full scale-75 animate-pulse" />
            <div className="relative bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-white/20">
              {/* Form Header */}
              <div className="bg-[#e8be66] py-4 px-8 text-center">
                <div className="flex items-center justify-center gap-2 text-[#05243b] font-black text-sm uppercase tracking-widest">
                  <Clock size={16} />
                  Next Batch Starts Soon
                </div>
              </div>

              <div className="p-8 md:p-10">
                <h3 className="text-2xl font-black text-[#05243b] mb-2 text-center">Start Your Career</h3>
                <p className="text-slate-500 text-sm text-center mb-8 font-bold italic">Join Pondicherry's Top-Rated Analytics Academy</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[11px] font-black text-[#05243b] uppercase tracking-widest mb-2 ml-1">Full Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe" 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#14937a] focus:bg-white transition-all font-bold text-[#05243b] placeholder:text-slate-300" 
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-black text-[#05243b] uppercase tracking-widest mb-2 ml-1">Phone Number *</label>
                    <div className="flex gap-2">
                      <div className="px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-[#05243b]">+91</div>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10 Digit Mobile Number" 
                        className="flex-1 px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#14937a] focus:bg-white transition-all font-bold text-[#05243b] placeholder:text-slate-300" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[11px] font-black text-[#05243b] uppercase tracking-widest mb-2 ml-1">City *</label>
                    <input 
                      type="text" 
                      name="city"
                      required
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="e.g. Pondicherry" 
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#14937a] focus:bg-white transition-all font-bold text-[#05243b] placeholder:text-slate-300" 
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-5 bg-[#14937a] text-white font-black rounded-2xl hover:bg-[#05243b] transition-all duration-300 shadow-xl shadow-[#14937a]/20 uppercase tracking-widest text-sm mt-4 active:scale-95 cursor-pointer"
                  >
                    Enroll Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose BM Academy? - Premium Redesign */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#05243b]">
              Why Choose <span className="text-[#14937a]">BM Academy?</span>
            </h2>
            <p className="text-slate-500 font-medium mt-4">Elevate your career with industry-focused learning, hands-on projects, and expert guidance.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 md:gap-12 items-center">
            {/* Left Features */}
            <div className="space-y-12 text-right order-2 lg:order-1">
              {[
                { 
                  title: "Placement Support", 
                  desc: "100% assistance with resume building and mock interviews.", 
                  icon: <Award size={24} /> 
                },
                { 
                  title: "Live Projects", 
                  desc: "Work on real-time client applications and industry case studies.", 
                  icon: <CheckCircle size={24} /> 
                },
                { 
                  title: "Soft Skills & Communication", 
                  desc: "Personality development and professional communication training.", 
                  icon: <Users size={24} /> 
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 justify-end group">
                  <div className="order-2 lg:order-1">
                    <h3 className="text-xl font-black text-[#05243b] mb-2 group-hover:text-[#14937a] transition-colors">{item.title}</h3>
                    <p className="text-slate-500 text-sm font-bold leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center text-[#14937a] shrink-0 order-1 lg:order-2 group-hover:bg-[#14937a] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>

            {/* Center Illustration */}
            <div className="relative flex justify-center order-1 lg:order-2 mb-12 lg:mb-0">
              <div className="absolute inset-0 bg-[#14937a]/5 blur-[100px] rounded-full scale-150" />
              <div className="relative">
                <img 
                  src={robotImg} 
                  alt="Practical Training Robot" 
                  className="w-full max-w-[320px] h-auto animate-float"
                  style={{ 
                    mixBlendMode: 'multiply',
                    filter: 'contrast(1.1) brightness(1.05)'
                  }}
                />
                <div className="absolute -bottom-4 -right-4 bg-[#05243b] p-6 rounded-[2rem] shadow-2xl border border-white/10 text-center min-w-[140px] transform rotate-3">
                  <p className="text-white font-black text-2xl leading-none">100%</p>
                  <p className="text-[#14937a] font-black text-[10px] uppercase tracking-widest mt-1">Practical</p>
                </div>
              </div>
            </div>

            {/* Right Features */}
            <div className="space-y-12 text-left order-3">
              {[
                { 
                  title: "Classroom & Online Training", 
                  desc: "Flexible learning modes with recorded sessions and live Q&A.", 
                  icon: <Laptop size={24} /> 
                },
                { 
                  title: "Practical Training Schedule", 
                  desc: "Hands-on practice with industry-standard development tools.", 
                  icon: <Clock size={24} /> 
                },
                { 
                  title: "Affordable Fees & EMI Options", 
                  desc: "Quality education made accessible with easy payment plans.", 
                  icon: <CreditCard size={24} /> 
                }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-xl shadow-slate-200/50 flex items-center justify-center text-[#14937a] shrink-0 group-hover:bg-[#14937a] group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#05243b] mb-2 group-hover:text-[#14937a] transition-colors">{item.title}</h3>
                    <p className="text-slate-500 text-sm font-bold leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Float Animation */}
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



      {/* Course Highlights Section */}
      <section className="py-24 bg-[#fcfcfc] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-[#05243b] mb-4">
              Course <span className="text-[#14937a]">Highlights</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
              Everything you need to master data analytics and launch a successful career in the data industry.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Comprehensive Curriculum", 
                desc: "Learn data analytics fundamentals, data visualization, and real-world problem solving with practical training and live projects.",
                icon: <Layout className="w-8 h-8" />
              },
              { 
                title: "3-Month Structured Course", 
                desc: "A focused 3-month program designed to help you build strong foundational and practical skills.",
                icon: <Clock className="w-8 h-8" />
              },
              { 
                title: "Classroom & Online Training", 
                desc: "Choose between classroom learning or online sessions based on your convenience.",
                icon: <Laptop className="w-8 h-8" />
              },
              { 
                title: "Flexible Payment Options", 
                desc: "Easy and flexible fee options to support your learning journey.",
                icon: <CreditCard className="w-8 h-8" />
              },
              { 
                title: "Course Completion Certificate", 
                desc: "Receive a BM Academy certification after successfully completing the course.",
                icon: <Award className="w-8 h-8" />
              },
              { 
                title: "Trained by Industry Experts", 
                desc: "Learn from trainers with real-world experience in data analytics and tools.",
                icon: <Users className="w-8 h-8" />
              },
              { 
                title: "Interactive Practical Learning", 
                desc: "Hands-on sessions with real datasets to improve understanding and skills.",
                icon: <Zap className="w-8 h-8" />
              },
              { 
                title: "Learning Management System (LMS)", 
                desc: "Access study materials, assignments, and track your progress through our LMS.",
                icon: <Rocket className="w-8 h-8" />
              }
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-[#14937a]/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="w-14 h-14 rounded-2xl bg-[#14937a]/5 flex items-center justify-center text-[#14937a] mb-6 group-hover:bg-[#14937a] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-[19px] font-black text-[#05243b] mb-4 leading-tight group-hover:text-[#14937a] transition-colors">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* How You'll Learn - Journey Path UI */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-[#05243b] mb-4">
              How You’ll Learn at <span className="text-[#14937a]">BM Academy</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
              Our proven learning methodology designed to take you from a beginner to a job-ready professional.
            </p>
          </div>

          <div className="relative">
            {/* Dashed Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 -translate-y-1/2 z-0" />

            <div className="grid lg:grid-cols-7 gap-8 relative z-10">
              {[
                { title: 'Skill Assessment', desc: 'Identify your current level', icon: <Star size={32} /> },
                { title: 'Technical Training', desc: 'Learn core concepts', icon: <Laptop size={32} /> },
                { title: 'Hands-On Practice', desc: 'Practice with real tasks', icon: <CheckCircle size={32} /> },
                { title: 'Live Projects', desc: 'Build real-world projects', icon: <Briefcase size={32} /> },
                { title: 'Soft Skills', desc: 'Improve communication', icon: <Users size={32} /> },
                { title: 'Career Prep', desc: 'Resume + mock interviews', icon: <Award size={32} /> },
                { title: 'Cert & Support', desc: 'Get certified + guidance', icon: <Clock size={32} /> }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="relative">
                    {/* Node */}
                    <div className="w-20 h-20 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center text-[#14937a] transition-all duration-500 group-hover:bg-[#14937a] group-hover:text-white group-hover:scale-110 relative z-10">
                      {step.icon}
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#05243b] text-white text-xs font-black flex items-center justify-center border-2 border-white shadow-lg">
                      {i + 1}
                    </div>
                  </div>

                  <div className="mt-8 space-y-2">
                    <h3 className="font-black text-[#05243b] text-sm group-hover:text-[#14937a] transition-colors leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-[10px] font-bold uppercase tracking-wider leading-relaxed max-w-[120px] mx-auto opacity-60">
                      {step.desc}
                    </p>
                  </div>

                  {/* Connecting Line (Mobile) */}
                  {i < 6 && (
                    <div className="lg:hidden w-0.5 h-12 bg-dashed border-l-2 border-dashed border-slate-200 my-4" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Syllabus Section - Premium Redesign with Lead Form */}
      <section className="py-24 bg-slate-50 overflow-hidden relative">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#14937a]/5 rounded-full blur-3xl -mr-32 -mt-32" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#05243b]/5 rounded-full blur-3xl -ml-48 -mb-48" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16">
            
            {/* Left: Syllabus Content */}
            <div className="lg:col-span-8">
              <div className="text-left mb-16">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#14937a]/10 text-[#14937a] text-[12px] font-black uppercase tracking-widest mb-6">
                  Full Curriculum Roadmap
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-[#05243b] mb-6 leading-tight">
                  AI-Powered Data Analytics <br />
                  <span className="text-[#14937a]">Course Syllabus</span>
                </h2>
                <p className="text-slate-500 text-lg font-medium max-w-2xl leading-relaxed">
                  Learn data analytics from basics to advanced using Excel, SQL, Power BI, and Python with practical training and real-time projects at BM Academy.
                </p>
              </div>

              <div className="space-y-6">
                {curriculum.map((module, i) => (
                  <div key={i} className={`group border rounded-[2rem] overflow-hidden transition-all duration-500 ${openModule === i ? 'border-[#14937a]/40 shadow-xl shadow-[#14937a]/5 bg-white' : 'border-slate-100 bg-white hover:bg-slate-50/50 hover:shadow-lg'}`}>
                    <button
                      onClick={() => setOpenModule(openModule === i ? null : i)}
                      className="w-full flex items-center justify-between px-8 py-7 transition-all"
                    >
                      <div className="flex items-center gap-6">
                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl transition-all duration-300 ${openModule === i ? 'bg-[#14937a] text-white rotate-6' : 'bg-slate-50 text-[#05243b]'}`}>
                          {i + 1}
                        </div>
                        <div className="text-left">
                          <span className="text-[11px] text-[#14937a] font-black uppercase tracking-[0.2em] mb-1 block">{module.module}</span>
                          <p className="text-[#05243b] font-black text-lg md:text-xl group-hover:text-[#14937a] transition-colors leading-tight">{module.title}</p>
                        </div>
                      </div>
                      <div className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 ${openModule === i ? 'rotate-180 bg-[#14937a] border-[#14937a] text-white' : 'text-slate-400 group-hover:border-[#14937a] group-hover:text-[#14937a]'}`}>
                        <ChevronRight size={20} className="rotate-90" />
                      </div>
                    </button>
                    {openModule === i && (
                      <div className="px-8 pb-8 pt-2 bg-white animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="h-px bg-slate-100 mb-6 mx-4" />
                        <div className="grid md:grid-cols-1 gap-4">
                          {module.topics.map((t, j) => (
                            <div key={j} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-[#14937a]/20 transition-all group/item">
                              <CheckCircle size={18} className="text-[#14937a] mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform" />
                              <span className="text-[#05243b] text-sm font-bold leading-snug">{t}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Lead Form Sidebar */}
            <div className="lg:col-span-4 relative">
              <div className="sticky top-28 bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-8 md:p-10 overflow-hidden">
                {/* Design Accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#14937a]/5 rounded-bl-full -mr-16 -mt-16" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#05243b]/5 rounded-tr-full -ml-12 -mb-12" />

                <div className="relative z-10 space-y-8">
                  <div className="text-center">
                    <h3 className="text-2xl font-black text-[#05243b] mb-2 leading-tight">Start Your Career in <br /> <span className="text-[#14937a]">Data Analytics</span></h3>
                    <p className="text-slate-500 text-sm font-medium">Fill in your details for a free demo class</p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: 'Full Name *', placeholder: 'e.g. John Doe', type: 'text' },
                      { label: 'Phone Number *', placeholder: '10 Digit Mobile Number', type: 'tel', prefix: '+91' },
                      { label: 'Email Address *', placeholder: 'name@email.com', type: 'email' },
                      { label: 'Your City *', placeholder: 'e.g. Pondicherry', type: 'text' }
                    ].map((field, i) => (
                      <div key={i}>
                        <label className="block text-[12px] font-black text-[#05243b] uppercase tracking-wider mb-2 ml-1">{field.label}</label>
                        <div className="flex gap-2">
                          {field.prefix && (
                            <div className="px-4 py-3.5 rounded-2xl bg-slate-100 border border-slate-200 text-[#05243b] font-black text-sm flex items-center">{field.prefix}</div>
                          )}
                          <input 
                            type={field.type} 
                            placeholder={field.placeholder} 
                            className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#14937a] focus:ring-4 focus:ring-[#14937a]/10 outline-none transition-all text-[#05243b] font-bold placeholder:text-slate-400 text-sm" 
                          />
                        </div>
                      </div>
                    ))}
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[12px] font-black text-[#05243b] uppercase tracking-wider mb-2 ml-1">Qualification *</label>
                        <select className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#14937a] outline-none transition-all text-[#05243b] font-bold text-sm appearance-none">
                          <option>Select</option>
                          <option>Graduate</option>
                          <option>Post Graduate</option>
                          <option>Professional</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[12px] font-black text-[#05243b] uppercase tracking-wider mb-2 ml-1">Passing Year *</label>
                        <select className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#14937a] outline-none transition-all text-[#05243b] font-bold text-sm appearance-none">
                          <option>Select</option>
                          {[2025, 2024, 2023, 2022, 2021, 2020].map(y => (
                            <option key={y}>{y}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <button className="w-full py-5 rounded-[1.2rem] bg-[#14937a] text-white font-black text-lg shadow-xl shadow-[#14937a]/20 hover:bg-[#05243b] hover:-translate-y-1 transition-all duration-300 active:scale-95 flex items-center justify-center gap-3">
                      Apply Now <ChevronRight size={20} />
                    </button>
                    
                    <div className="bg-red-50 p-3 rounded-xl border border-red-100 flex items-center justify-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-red-600 text-[11px] font-black uppercase tracking-wider text-center">Limited Seats Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Skills Covered - Custom UI Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-[#14937a]/10 flex items-center justify-center">
              <Award size={30} className="text-[#14937a]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#05243b]">Skills <span className="text-[#14937a]">Covered</span></h2>
          </div>

          {/* Custom Tabs */}
          <div className="flex flex-wrap gap-10 mb-16 border-b border-slate-100">
            {Object.keys(skillTools).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`pb-4 text-xl font-black transition-all relative ${
                  activeTab === category 
                    ? 'text-[#14937a]' 
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {category}
                {activeTab === category && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[#14937a] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Large Skill Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-24">
            {skillTools[activeTab].map((tool, i) => (
              <div key={i} className="bg-white p-10 rounded-[2rem] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.04)] flex flex-col items-center justify-between gap-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group min-h-[220px]">
                <div className="w-20 h-20 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                  <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-[#05243b] font-black text-lg text-center group-hover:text-[#14937a] transition-colors">{tool.name}</span>
              </div>
            ))}
          </div>

          {/* Tools Covered Subsection */}
          <div className="flex items-center gap-4 mb-10">
            <div className="w-10 h-10 rounded-xl bg-[#05243b]/5 flex items-center justify-center">
              <Briefcase size={22} className="text-[#05243b]" />
            </div>
            <h2 className="text-2xl font-black text-[#05243b]">Tools <span className="text-[#14937a]">Covered</span></h2>
          </div>

          <div className="flex flex-wrap gap-4">
            {[...skillTools['Tools'], ...skillTools['Languages'], ...skillTools['Database']].map((tool, i) => (
              <div key={i} className="flex items-center gap-4 bg-white px-6 py-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                <div className="w-8 h-8 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all">
                  <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-[#05243b] font-bold text-[15px] group-hover:text-[#14937a] transition-colors">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Can Apply Section */}
      <section className="py-20 bg-white overflow-hidden border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-12 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-xl bg-[#14937a]/10 flex items-center justify-center">
              <BadgeCheck size={30} className="text-[#14937a]" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#05243b]">Who Can <span className="text-[#14937a]">Apply?</span></h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-start gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-[#14937a]/5 text-[#14937a] flex items-center justify-center shrink-0 group-hover:bg-[#14937a] group-hover:text-white transition-all duration-300">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="text-[#05243b] font-black text-lg mb-2 group-hover:text-[#14937a] transition-colors leading-tight">Education Qualification</h3>
                <p className="text-slate-500 font-medium text-sm">Open to all graduates and freshers.</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-start gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-[#14937a]/5 text-[#14937a] flex items-center justify-center shrink-0 group-hover:bg-[#14937a] group-hover:text-white transition-all duration-300">
                <Briefcase size={28} />
              </div>
              <div>
                <h3 className="text-[#05243b] font-black text-lg mb-2 group-hover:text-[#14937a] transition-colors leading-tight">Working Professionals</h3>
                <p className="text-slate-500 font-medium text-sm">Looking to upskill or switch careers.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-start gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-[#14937a]/5 text-[#14937a] flex items-center justify-center shrink-0 group-hover:bg-[#14937a] group-hover:text-white transition-all duration-300">
                <Code2 size={28} />
              </div>
              <div>
                <h3 className="text-[#05243b] font-black text-lg mb-2 group-hover:text-[#14937a] transition-colors leading-tight">IT & Non-IT Students</h3>
                <p className="text-slate-500 font-medium text-sm">No prior coding experience needed.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-start gap-4 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-[#14937a]/5 text-[#14937a] flex items-center justify-center shrink-0 group-hover:bg-[#14937a] group-hover:text-white transition-all duration-300">
                <Target size={28} />
              </div>
              <div>
                <h3 className="text-[#05243b] font-black text-lg mb-2 group-hover:text-[#14937a] transition-colors leading-tight">Business Analysts</h3>
                <p className="text-slate-500 font-medium text-sm">Seeking to make data-driven decisions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-32 bg-slate-50 overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-[#05243b] mb-6">
              Why Choose an AI-Powered Data Analytics Course <br className="hidden md:block" />
              <span className="text-[#14937a]">at BM Academy?</span>
            </h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-lg font-medium leading-relaxed">
              The AI-Powered Data Analytics Course at BM Academy is designed to equip students with in-demand skills in data analysis, visualization, and AI-driven decision-making using modern tools like Excel, SQL, Power BI, and Python.
            </p>
          </div>

          <div className="relative max-w-7xl mx-auto lg:h-[400px] flex items-center mt-12 lg:mt-0">
            {/* Horizontal Line (Behind Circles) */}
            <div className="hidden lg:block absolute top-1/2 left-4 right-4 h-px bg-slate-200 -translate-y-1/2 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-6 w-full relative z-10">
              {[
                { 
                  title: 'High Demand Across Industries', 
                  desc: 'Professionals are in high demand across IT, finance, healthcare, e-commerce, and startups.', 
                  icon: <TrendingUp size={32} /> 
                },
                { 
                  title: 'Attractive Salary & Global Opportunities', 
                  desc: 'Build a career with competitive salary packages and explore job opportunities globally.', 
                  icon: <Globe size={32} /> 
                },
                { 
                  title: 'Hands-on Skills with Industry Tools', 
                  desc: 'Gain practical experience in Python, SQL, Excel, and Power BI through real-time projects.', 
                  icon: <Laptop size={32} /> 
                },
                { 
                  title: 'AI-Powered Learning & Smart Insights', 
                  desc: 'Learn how AI tools enhance data analysis and help in making smarter business decisions.', 
                  icon: <Cpu size={32} /> 
                },
                { 
                  title: 'Multiple Career Paths in Analytics', 
                  desc: 'Explore roles like Data Analyst, Business Analyst, BI Developer, and Reporting Analyst.', 
                  icon: <Target size={32} /> 
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center group relative lg:h-[350px]">
                  
                  {/* Desktop Layout Wrapper */}
                  <div className="hidden lg:flex flex-col items-center absolute w-full top-1/2 -translate-y-1/2">
                    
                    {/* Upper Section (Line UP for Odd, Empty for Even) */}
                    <div className="h-24 w-full flex justify-center items-end relative">
                      {i % 2 === 0 && (
                        <div className="absolute w-px h-24 bg-slate-200 bottom-0 group-hover:bg-[#14937a] transition-all duration-500 origin-bottom scale-y-100 group-hover:scale-y-110">
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#14937a] shadow-[0_0_10px_rgba(20,147,122,0.3)]" />
                        </div>
                      )}
                    </div>

                    {/* Circle Node */}
                    <div className="w-24 h-24 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-[#05243b] group-hover:text-[#14937a] group-hover:border-[#14937a] group-hover:shadow-[0_10px_40px_rgba(20,147,122,0.15)] transition-all duration-500 relative z-10 my-4 shrink-0 overflow-hidden">
                      {/* Thick Left-Bottom Arc Decoration */}
                      <div className="absolute -left-2 -bottom-2 w-14 h-14 border-4 border-transparent border-l-[#14937a] border-b-[#14937a] rounded-full opacity-20 group-hover:opacity-100 transition-all duration-500" />
                      {item.icon}
                    </div>

                    {/* Lower Section (Text for Odd, Line DOWN + Text for Even) */}
                    <div className="h-40 w-full relative flex justify-center">
                      {i % 2 === 0 ? (
                        <div className="pt-4 px-2">
                          <h3 className="text-[#05243b] font-black text-[15px] mb-2 group-hover:text-[#14937a] transition-colors leading-tight">{item.title}</h3>
                          <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.desc}</p>
                        </div>
                      ) : (
                        <>
                          <div className="absolute w-px h-20 bg-slate-200 top-0 group-hover:bg-[#14937a] transition-all duration-500 origin-top scale-y-100 group-hover:scale-y-110">
                            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-[#14937a] shadow-[0_0_10px_rgba(20,147,122,0.3)]" />
                          </div>
                          <div className="absolute top-24 px-2">
                            <h3 className="text-[#05243b] font-black text-[15px] mb-2 group-hover:text-[#14937a] transition-colors leading-tight">{item.title}</h3>
                            <p className="text-slate-500 text-xs font-medium leading-relaxed">{item.desc}</p>
                          </div>
                        </>
                      )}
                    </div>

                  </div>

                  {/* Mobile Layout Wrapper (Visible only on mobile/tablet) */}
                  <div className="lg:hidden flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-white border border-[#14937a]/30 flex items-center justify-center text-[#14937a] shadow-lg relative mb-6">
                      <div className="absolute -left-1 -bottom-1 w-10 h-10 border-4 border-transparent border-l-[#14937a] border-b-[#14937a] rounded-full opacity-60" />
                      {item.icon}
                    </div>
                    <h3 className="text-[#05243b] font-black text-lg mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#14937a]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#05243b]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14937a]/10 text-[#14937a] text-xs font-black uppercase tracking-widest mb-6">
              <Award size={14} />
              Career Roadmap
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#05243b] mb-8 leading-tight">
              Unlock Elite <span className="text-[#14937a]">Career Paths</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-3xl mx-auto font-medium leading-relaxed">
              Our AI-powered curriculum is engineered to place you in high-growth roles across the global data ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { role: 'Data Analyst', desc: 'Transform raw data into strategic business intelligence using advanced Excel, SQL, and Power BI.', icon: <BarChart2 size={28} /> },
              { role: 'BI Analyst', desc: 'Architect dynamic dashboards that track mission-critical KPIs and drive executive decisions.', icon: <PieChart size={28} /> },
              { role: 'AI Data Analyst', desc: 'Leverage machine learning and AI automation to uncover predictive insights and smart strategies.', icon: <Cpu size={28} /> },
              { role: 'Marketing Analyst', desc: 'Optimize customer acquisition and campaign ROI through data-driven performance analysis.', icon: <TrendingUp size={28} /> },
              { role: 'Freelance Consultant', desc: 'Build a high-value independent practice solving complex data problems for global clients.', icon: <Laptop size={28} /> },
              { role: 'Reporting Specialist', desc: 'Design enterprise-level reporting systems that provide real-time business monitoring.', icon: <Layout size={28} /> },
              { role: 'Data Engineer', desc: 'Master the backend of data with high-performance pipelines and RDBMS architecture.', icon: <Database size={28} /> },
              { role: 'Data Scientist (Entry)', desc: 'Begin your journey into predictive modeling using Python, Pandas, and Scikit-learn.', icon: <Brain size={28} /> }
            ].map((item, i) => (
              <div key={i} className="group relative">
                <div className="h-full bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(20,147,122,0.12)] hover:-translate-y-2 transition-all duration-500 relative z-10">
                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-[#14937a] mb-8 group-hover:bg-[#14937a] group-hover:text-white transition-all duration-500 shadow-inner">
                    {item.icon}
                  </div>
                  <h3 className="text-[#05243b] font-black text-xl mb-4 leading-tight group-hover:text-[#14937a] transition-colors">{item.role}</h3>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed mb-6">{item.desc}</p>
                  <div className="flex items-center gap-2 text-[#14937a] font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover:translate-x-0">
                    Learn More <ChevronRight size={14} />
                  </div>
                </div>
                {/* Decorative background element on hover */}
                <div className="absolute inset-4 bg-[#14937a]/5 rounded-[2.5rem] -z-0 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Roles and Salary Range Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden border-t border-slate-100">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
             style={{ backgroundImage: `radial-gradient(#05243b 1px, transparent 1px)`, backgroundSize: '32px 32px' }} />

        <div className="max-w-[1440px] mx-auto px-6 relative">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14937a]/10 text-[#14937a] text-xs font-black uppercase tracking-widest mb-6">
              <TrendingUp size={14} />
              Growth Trajectory
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#05243b] mb-6">
              Salary <span className="text-[#14937a]">Progression</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
              A comprehensive view of your career evolution and earning potential in the data domain.
            </p>
          </div>

          <div className="relative">
            {/* Desktop Path Line */}
            <div className="hidden lg:block absolute top-10 left-10 right-10 h-0.5 border-t-2 border-dashed border-slate-200 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
              {[
                {
                  stage: 'STAGE 01',
                  mainRole: 'Data Analytics Intern',
                  exp: '(0 – 6 Months)',
                  salary: '₹2 LPA – ₹3 LPA',
                  roles: ['Data Analytics Intern', 'Business Intelligence Intern', 'Excel/SQL Trainee', 'Reporting Analytics Intern']
                },
                {
                  stage: 'STAGE 02',
                  mainRole: 'Junior Data Analytics',
                  exp: '(6 Months – 1.5 Years)',
                  salary: '₹3 LPA – ₹6 LPA',
                  roles: ['Junior Data Analytics', 'Reporting Analytics', 'Business Analytics (Fresher)', 'Power BI Developer (Entry Level)']
                },
                {
                  stage: 'STAGE 03',
                  mainRole: 'Data Analytics / BI Analytics',
                  exp: '(1.5 – 3 Years)',
                  salary: '₹6 LPA – ₹10 LPA',
                  roles: ['Data Analytics', 'Business Intelligence Analytics', 'Data Visualization Specialist', 'Marketing/Data Operations Analytics']
                },
                {
                  stage: 'STAGE 04',
                  mainRole: 'Senior Analytics / Data Scientist',
                  exp: '(3 – 5 Years)',
                  salary: '₹10 LPA – ₹18 LPA',
                  roles: ['Senior Data Analytics', 'Data Scientist (Associate)', 'Predictive Analytics', 'Data Strategy Consultant']
                },
                {
                  stage: 'STAGE 05',
                  mainRole: 'Data Leader / Consultant / Entrepreneur',
                  exp: '(5+ Years)',
                  salary: '₹18 LPA – ₹40+ LPA',
                  note: '(or project-based/ freelance)',
                  roles: ['Head of Data & Analytics', 'AI/ML Consultant', 'Analytics Product Manager', 'Freelance Data Consultant']
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col group">
                  {/* Stage Badge */}
                  <div className="flex justify-center mb-6 relative">
                    <div className="w-10 h-10 rounded-full bg-[#05243b] text-white flex items-center justify-center font-black text-xs border-4 border-white shadow-xl z-10 group-hover:bg-[#14937a] group-hover:scale-110 transition-all duration-500">
                      {i + 1}
                    </div>
                  </div>

                  {/* Glass Card */}
                  <div className="flex flex-col h-full bg-white/80 backdrop-blur-sm rounded-[2.5rem] border border-white shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(20,147,122,0.15)] transition-all duration-700 overflow-hidden hover:-translate-y-3">
                    {/* Top Section */}
                    <div className="p-8 text-center bg-gradient-to-b from-slate-50/50 to-transparent border-b border-dashed border-slate-100">
                      <span className="text-[10px] font-black text-[#14937a] uppercase tracking-[0.2em] mb-4 block">{item.stage}</span>
                      <h4 className="text-[#05243b] font-black text-lg mb-1 leading-tight group-hover:text-[#14937a] transition-colors">{item.mainRole}</h4>
                      <p className="text-slate-400 text-[10px] font-bold mb-6 italic">{item.exp}</p>
                      
                      <div className="pt-6 border-t border-slate-50">
                        <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-1">Earning Potential</p>
                        <p className="text-2xl font-black text-[#05243b] group-hover:text-[#14937a] transition-colors">{item.salary}</p>
                        {item.note && <p className="text-[9px] font-bold text-slate-400 mt-1 leading-tight">{item.note}</p>}
                      </div>
                    </div>

                    {/* Roles Section */}
                    <div className="p-8 flex-grow">
                      <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-6">Common Roles</p>
                      <ul className="space-y-4">
                        {item.roles.map((role, idx) => (
                          <li key={idx} className="flex items-start gap-3 group/role">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#14937a] mt-1.5 group-hover/role:scale-150 transition-all duration-300" />
                            <span className="text-slate-600 text-xs font-bold leading-relaxed">{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom accent */}
                    <div className="h-1.5 w-full bg-slate-100 group-hover:bg-[#14937a] transition-colors duration-700" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#14937a]/10 flex items-center justify-center text-[#14937a]">
                <Users size={24} />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-[#05243b]">Our Alumni Work at</h2>
            </div>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
              Trained at BM Academy, placed at leading tech companies – see where our learners are making an impact.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Logo Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {[
                  'TCS', 'HCL', 'Microsoft', 'Amazon', 'PayPal', 'Caterpillar', 'Zoho', 'Infosys', 
                  'Wipro', 'Accenture', 'Airtel', 'Capgemini', 'Cognizant', 'IBM', 'Oracle', 'Tech Mahindra'
                ].map((company, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center justify-center group transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:border-[#14937a]/20">
                    <span className="text-slate-600 font-black text-lg group-hover:text-[#05243b] transition-colors uppercase tracking-widest">{company}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Illustration & CTA */}
            <div className="lg:col-span-4 relative">
              <div className="relative z-10 bg-white p-8 rounded-[3rem] border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
                <img 
                  src={graduationSuccess} 
                  alt="Placement Success" 
                  className="w-full h-auto mb-8 rounded-2xl" 
                />
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                  <h4 className="text-[#14937a] font-black text-lg mb-2">Join the Elite</h4>
                  <p className="text-slate-500 text-xs font-bold leading-relaxed">
                    Become part of our growing alumni community today and launch your career with global tech giants.
                  </p>
                </div>
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#05243b] text-white p-6 rounded-3xl z-20 hidden md:block shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#14937a] flex items-center justify-center">
                    <Award size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#14937a]">Verified</p>
                    <p className="text-sm font-black text-white">100% Placement Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#05243b] mb-4">Reviews from Our <span className="text-[#14937a]">Successful Students</span></h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">See how our AI-powered Data Analytics training has helped students succeed.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-black text-[#05243b] mb-8 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-[#14937a] rounded-full" />
                Video Success Stories
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {videoReviews.map((video, i) => (
                  <div key={i} className="group relative rounded-3xl overflow-hidden shadow-lg aspect-video bg-black">
                    <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${video.id}`} frameBorder="0" allowFullScreen></iframe>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
                  <h4 className="text-[#05243b] font-black">Google Reviews</h4>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-xl font-black">4.9</span>
                </div>
              </div>
              <div className="space-y-6">
                {reviews.map((review, i) => (
                  <div key={i} className="p-6 rounded-3xl bg-slate-50/50 border border-slate-100">
                    <p className="text-[#05243b] font-black text-sm mb-2">{review.name}</p>
                    <p className="text-slate-600 text-xs italic leading-relaxed">"{review.text}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#05243b] mb-4">Frequently Asked <span className="text-[#14937a]">Questions (FAQs)</span></h2>
            <p className="text-slate-500 text-lg">Find answers to common questions about the AI-Powered Data Analytics Course at BM Academy.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: 'What is the AI-Powered Data Analytics Course at BM Academy?', a: 'This course is designed to teach data analysis using modern tools like Excel, SQL, Power BI, and Python, along with AI-driven techniques to solve real-world business problems.' },
              { q: 'Who can join this Data Analytics course?', a: 'Students, fresh graduates, working professionals, and anyone interested in building a career in data analytics can enroll. No specific background is required.' },
              { q: 'Do I need prior programming knowledge?', a: 'No. This course starts from the basics and gradually moves to advanced concepts, making it beginner-friendly.' },
              { q: 'What job roles can I get after completing this course?', a: 'You can apply for roles such as Data Analyst, Business Analyst, BI Analyst, Reporting Analyst, and Freelance Data Analyst.' },
              { q: 'Will I receive a certificate after completion?', a: 'Yes, you will receive a BM Academy Certification after successfully completing the course.' },
              { q: 'Do you provide placement support?', a: 'Yes, BM Academy offers placement assistance, including resume building, mock interviews, and career guidance.' }
            ].map((faq, i) => (
              <div key={i} className="border border-slate-100 rounded-3xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className={`w-full p-6 text-left flex items-center justify-between transition-all ${openFaq === i ? 'bg-[#14937a] text-white' : 'bg-white text-[#05243b] hover:bg-slate-50'}`}
                >
                  <span className="font-black text-lg pr-4">{faq.q}</span>
                  {openFaq === i ? <Minus size={20} /> : <Plus size={20} />}
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-8 bg-slate-50/50 text-slate-600 font-bold text-[15px] flex gap-3">
                    <span className="text-[#14937a] shrink-0">👉</span>
                    <span>{faq.a}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-8 rounded-[3rem] bg-[#05243b] text-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#14937a]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <p className="text-white font-black text-2xl mb-4 relative z-10">Still have questions?</p>
            <p className="text-slate-400 mb-8 relative z-10">Our tech mentors are here to help you start your data journey.</p>
            <button 
              onClick={() => window.open('https://wa.me/919944940051?text=Hi, I have some questions about the Data Analytics course.', '_blank')}
              className="px-10 py-4 bg-[#14937a] text-white font-black rounded-full hover:bg-white hover:text-[#05243b] transition-all relative z-10 shadow-lg shadow-[#14937a]/30 cursor-pointer active:scale-95"
            >
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      {/* Custom Styles for Scrollbar */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #14937a;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #0d6d5a;
        }
      `}} />
    </div>
  );
};

export default DataAnalysis;
