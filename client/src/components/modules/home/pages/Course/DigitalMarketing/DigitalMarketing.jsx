import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, TrendingUp, Users, CreditCard, Star, Laptop, ChevronRight, Award, Briefcase, Megaphone, Plus, Minus, HelpCircle } from 'lucide-react';
import desktopBanner from '../../../../../../assets/course/digital-marketing/desktop.png';
import mobileBanner from '../../../../../../assets/course/digital-marketing/mobile.png';
import academyImage from '../../../../../../assets/Acadmey.png';
import graduationSuccess from '../../../../../../assets/graduation_success_clean.png';


const DigitalMarketing = () => {
  const [reviews, setReviews] = useState([]);
  const [videoReviews, setVideoReviews] = useState([]);
  const [reviewStats, setReviewStats] = useState({ rating: 4.9, count: 32 });
  const [openModule, setOpenModule] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Dynamic Data Fetching
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URI}/enquiry/google-reviews/`);
        const data = await response.json();
        if (data.reviews) setReviews(data.reviews);
        if (data.videoReviews) setVideoReviews(data.videoReviews);
      } catch (error) {
        console.warn("Backend fetch failed, using internal cache.");
        // Fallback reviews in case backend is down
        setReviews([
          { name: 'Sindhu Sindhuja', text: 'I enrolled in a Digital Marketing course in Pondicherry at BM Academy, and it was an excellent learning experience.', time: '2 months ago', rating: 5 },
          { name: 'Vasanth J', text: 'Best institute for full stack and digital marketing. The placement team is very active.', time: '3 months ago', rating: 5 }
        ]);
        setVideoReviews([
          { name: 'Review 1', id: 'dQw4w9WgXcQ' },
          { name: 'Review 2', id: 'dQw4w9WgXcQ' }
        ]);
      }
    };

    fetchReviews();
    window.scrollTo(0, 0);
  }, []);

  const learnings = [
    'SEO & Search Engine Optimization',
    'Google Ads & Meta Ads Campaigns',
    'Social Media Marketing Strategy',
    'Email Marketing & Automation',
    'Content Marketing & Copywriting',
    'Analytics with Google Analytics 4',
    'AI Tools for Digital Marketing',
    'Brand Building & Influencer Marketing',
  ];

const curriculum = [
  { 
    module: 'Module 1', 
    title: 'Marketing Fundamentals & Consumer Behavior', 
    topics: ['Consumer Psychology', 'Market Research & Analysis', 'Brand Positioning Strategy', 'Traditional vs Digital Marketing'] 
  },
  { 
    module: 'Module 2', 
    title: 'Content Creation (Text, Image & Video)', 
    topics: ['Creative Copywriting', 'Graphic Design Basics for Social Media', 'Video Marketing & Editing', 'Content Calendar Planning'] 
  },
  { 
    module: 'Module 3', 
    title: 'Website Development (WordPress)', 
    topics: ['Domain & Hosting Setup', 'WordPress Installation & Themes', 'Building Landing Pages', 'Website Optimization (No Coding)'] 
  },
  { 
    module: 'Module 4', 
    title: 'Search Engine Optimization (SEO)', 
    topics: ['Keyword Research & Strategy', 'On-Page & Technical SEO', 'Off-Page SEO & Link Building', 'Google Search Console & Analytics'] 
  },
  { 
    module: 'Module 5', 
    title: 'Social Media Marketing (SMM & SMO)', 
    topics: ['Instagram & Facebook Marketing', 'LinkedIn & Twitter Branding', 'Social Media Algorithms', 'Community Management'] 
  },
  { 
    module: 'Module 6', 
    title: 'Paid Ads & Search Engine Marketing (SEM)', 
    topics: ['Google Ads (PPC)', 'Meta Ads Manager', 'Remarketing Strategies', 'A/B Testing & Budgeting'] 
  },
  { 
    module: 'Module 7', 
    title: 'Email Marketing & E-Commerce Marketing', 
    topics: ['Email Automation & Funnels', 'Affiliate Marketing Basics', 'Shopify & E-commerce Strategy', 'Online Business Scaling'] 
  },
];

const stats = [
  { value: '3 / 6 Months', label: 'Duration' },
  { value: '5200+', label: 'Students Enrolled' },
  { value: '4.9 ★', label: 'Average Rating' },
  { value: '98%', label: 'Placement Rate' },
];


  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Redesigned Banner/Hero */}
      <div className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #02182b 0%, #05243b 100%)' }}>
        {/* Responsive Background Images */}
        <div className="absolute inset-0">
          <img src={mobileBanner} alt="mobile banner" className="w-full h-full object-cover md:hidden" />
          <img src={desktopBanner} alt="desktop banner" className="w-full h-full object-cover hidden md:block" />
          {/* Overlay for Readability */}
          <div className="absolute inset-0 bg-[#02182b]/70 md:bg-transparent md:bg-gradient-to-r md:from-[#02182b]/90 md:via-[#02182b]/40 md:to-transparent" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            {/* Trust Line */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-[#05243b] bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" />
                  </div>
                ))}
              </div>
              <div className="text-slate-300 text-sm font-medium">
                <span className="text-white font-bold">Trusted by 1000+ Students</span>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-[#e8be66] font-bold">4.8</span>
                  <div className="flex text-[#e8be66]">
                    {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={12} fill="currentColor" />)}
                  </div>
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14937a]/10 border border-[#14937a]/30 mb-6">
              <div className="w-2 h-2 rounded-full bg-[#14937a] animate-pulse" />
              <span className="text-[#14937a] text-[13px] font-bold uppercase tracking-wide">Placement Support & Career Guidance</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-[1.1] mb-6">
              AI-Powered <br />
              <span className="text-[#14937a]">Digital Marketing</span> Course
            </h1>

            <p className="text-slate-300 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
              Learn SEO, Social Media Marketing, and Google Ads with AI tools through hands-on training and real-time projects to build job-ready skills.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 rounded-xl font-bold text-white text-[16px] bg-[#14937a] hover:bg-[#117a65] transition-all shadow-xl shadow-[#14937a]/20 active:scale-95 flex items-center gap-2">
                Book Free Demo Class
              </button>
              <button className="px-8 py-4 rounded-xl font-bold text-white border-2 border-slate-500 hover:border-white hover:bg-white/5 transition-all text-[16px]">
                Download Syllabus
              </button>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-10 relative overflow-hidden">
              {/* Form Header Badge */}
              <div className="absolute top-0 left-0 right-0 py-3 bg-[#e8be66] text-center">
                <span className="text-[#05243b] font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2">
                  <Clock size={16} /> Next Batch Starts Soon
                </span>
              </div>
              
              <div className="mt-8 space-y-5">
                <div>
                  <label className="block text-[13px] font-bold text-[#05243b] mb-1.5 ml-1">Full Name *</label>
                  <input type="text" placeholder="e.g. John Doe" className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#14937a] focus:ring-2 focus:ring-[#14937a]/10 outline-none transition-all text-[#05243b] font-medium" />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-[#05243b] mb-1.5 ml-1">Phone Number *</label>
                  <div className="flex gap-2">
                    <div className="px-4 py-3.5 rounded-xl bg-slate-100 border border-slate-200 text-[#05243b] font-bold">+91</div>
                    <input type="tel" placeholder="10 Digit Mobile Number" className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#14937a] focus:ring-2 focus:ring-[#14937a]/10 outline-none transition-all text-[#05243b] font-medium" />
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-[#05243b] mb-1.5 ml-1">Email Address *</label>
                  <input type="email" placeholder="name@company.com" className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#14937a] focus:ring-2 focus:ring-[#14937a]/10 outline-none transition-all text-[#05243b] font-medium" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[13px] font-bold text-[#05243b] mb-1.5 ml-1">City *</label>
                    <input type="text" placeholder="Your City" className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#14937a] focus:ring-2 focus:ring-[#14937a]/10 outline-none transition-all text-[#05243b] font-medium" />
                  </div>
                  <div>
                    <label className="block text-[13px] font-bold text-[#05243b] mb-1.5 ml-1">Highest Qualification</label>
                    <select className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:border-[#14937a] focus:ring-2 focus:ring-[#14937a]/10 outline-none transition-all text-[#05243b] font-medium appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2024%2024%22%20stroke%3D%22currentColor%22%3E%3Cpath%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%222%22%20d%3D%22M19%209l-7%207-7-7%22%20%2F%3E%3C%2Fsvg%3E')] bg-[length:1.25rem_1.25rem] bg-[right_1rem_center] bg-no-repeat">
                      <option>Select</option>
                      <option>Graduate</option>
                      <option>Post Graduate</option>
                      <option>Diploma</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <button className="w-full py-4 rounded-xl bg-[#05243b] hover:bg-[#14937a] text-white font-black text-sm uppercase tracking-[0.2em] shadow-lg transition-all active:scale-[0.98] mt-2">
                  Submit Request
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white py-8 border-b border-slate-100 relative z-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center border-r last:border-none border-slate-200/50 px-4 group">
              <div className="text-3xl font-black text-[#14937a] mb-1 group-hover:scale-110 transition-transform duration-300">{s.value}</div>
              <div className="text-[11px] font-bold text-slate-500 tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose BM Academy / Course Highlights */}
      <section className="py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#14937a]/10 text-[#14937a] text-[13px] font-bold uppercase tracking-widest mb-4">
              Why Choose BM Academy?
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#05243b] mb-6 leading-tight">
              AI-Powered Digital Marketing Course <br className="hidden md:block" />
              <span className="text-[#14937a]">with Practical Training</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Learn Digital Marketing with AI tools through hands-on training, live projects, and expert guidance designed to help you build real-world skills and become job-ready.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left Features */}
            <div className="space-y-10 order-2 lg:order-1">
              {[
                { title: 'Placement Support', desc: '100% assistance with resume building and mock interviews.', icon: <Award className="text-[#14937a]" /> },
                { title: 'Live Projects', desc: 'Work on real-time client campaigns and industry case studies.', icon: <CheckCircle className="text-[#14937a]" /> },
                { title: 'Soft Skills & Communication', desc: 'Personality development and professional communication training.', icon: <Users className="text-[#14937a]" /> }
              ].map((f, i) => (
                <div key={i} className="flex gap-5 group lg:text-right lg:flex-row-reverse">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center group-hover:bg-[#14937a] group-hover:text-white transition-all duration-300 transform group-hover:rotate-12">
                    {React.cloneElement(f.icon, { size: 28, className: 'group-hover:text-white transition-colors' })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#05243b] mb-2">{f.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Central Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                <img 
                  src={academyImage} 
                  alt="Marketing Training" 
                  className="rounded-[3rem] w-full object-cover aspect-square"
                />
                <div className="absolute -bottom-6 -right-6 bg-[#05243b] p-6 rounded-3xl hidden md:block">
                  <div className="text-white font-black text-2xl">100%</div>
                  <div className="text-[#14937a] text-xs font-bold uppercase tracking-wider">Practical</div>
                </div>
              </div>
            </div>

            {/* Right Features */}
            <div className="space-y-10 order-3">
              {[
                { title: 'Classroom & Online Training', desc: 'Flexible learning modes with recorded sessions and live Q&A.', icon: <Laptop className="text-[#14937a]" /> },
                { title: 'Practical Training Schedule', desc: 'Hands-on practice with industry-standard AI marketing tools.', icon: <Clock className="text-[#14937a]" /> },
                { title: 'Affordable Fees & EMI Options', desc: 'Quality education made accessible with easy payment plans.', icon: <Briefcase className="text-[#14937a]" /> }
              ].map((f, i) => (
                <div key={i} className="flex gap-5 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center group-hover:bg-[#14937a] group-hover:text-white transition-all duration-300 transform group-hover:-rotate-12">
                    {React.cloneElement(f.icon, { size: 28, className: 'group-hover:text-white transition-colors' })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#05243b] mb-2">{f.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights - Geometric Flow Design */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        {/* Background Decorative Shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#14937a]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#05243b]/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-[#05243b] mb-4">
              Course <span className="text-[#14937a]">Highlights</span>
            </h2>
            <div className="w-24 h-1.5 bg-[#14937a] mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Comprehensive Curriculum',
                desc: 'Learn Digital Marketing with a structured curriculum covering SEO, Social Media, Google Ads, Content Marketing, and AI tools.',
                icon: <Megaphone />, color: '#14937a', shape: 'rounded-[3rem_1rem_3rem_1rem]', iconShape: 'rounded-full'
              },
              {
                title: 'Real-World Projects',
                desc: 'Work on live projects and case studies to gain hands-on experience and build a strong portfolio.',
                icon: <Briefcase />, color: '#2563eb', shape: 'rounded-[1rem_3rem_1rem_3rem]', iconShape: 'rounded-2xl'
              },
              {
                title: 'Classroom & Online Training',
                desc: 'Choose flexible learning options with both classroom sessions and guided online training.',
                icon: <Laptop />, color: '#7c3aed', shape: 'rounded-[2rem]', iconShape: 'rounded-[1.5rem_0.5rem]'
              },
              {
                title: 'Flexible Payment Options',
                desc: 'Affordable course fees with easy EMI options for better accessibility.',
                icon: <CreditCard />, color: '#db2777', shape: 'rounded-[1rem_1rem_4rem_1rem]', iconShape: 'rounded-full rotate-12'
              },
              {
                title: 'Certification',
                desc: 'Receive a BM Academy course completion certificate after successfully finishing the program.',
                icon: <Award />, color: '#059669', shape: 'rounded-[1rem_4rem_1rem_1rem]', iconShape: 'rounded-xl -rotate-12'
              },
              {
                title: 'Industry Expert Trainers',
                desc: 'Learn from experienced mentors with real-world industry knowledge and practical insights.',
                icon: <Users />, color: '#ea580c', shape: 'rounded-[3rem_3rem_1rem_1rem]', iconShape: 'rounded-full'
              },
              {
                title: 'Career Support',
                desc: 'Get support with resume building, interview preparation, and career guidance.',
                icon: <CheckCircle />, color: '#0284c7', shape: 'rounded-[1rem_1rem_3rem_3rem]', iconShape: 'rounded-2xl rotate-6'
              },
              {
                title: 'Practical & Interactive Learning',
                desc: 'Engage in hands-on training, tool-based learning, and interactive sessions for better understanding.',
                icon: <Clock />, color: '#4f46e5', shape: 'rounded-[2rem]', iconShape: 'rounded-full hover:scale-110'
              }
            ].map((card, i) => (
              <div 
                key={i} 
                className={`group bg-white p-10 shadow-sm border border-slate-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 relative overflow-hidden ${card.shape}`}
              >
                {/* Decorative Pattern */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full -mr-12 -mt-12 group-hover:bg-[#14937a]/10 transition-colors" />
                
                <div 
                  className={`w-16 h-16 flex items-center justify-center mb-8 shadow-inner transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg ${card.iconShape}`}
                  style={{ backgroundColor: `${card.color}15`, color: card.color }}
                >
                  {React.cloneElement(card.icon, { size: 32 })}
                </div>

                <div className="relative z-10">
                  <h3 className="font-black text-[#05243b] text-xl leading-tight mb-4 group-hover:text-[#14937a] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 text-[14px] leading-relaxed">
                    <span className="text-[#14937a] font-black mr-2">/</span>
                    {card.desc}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div 
                  className="absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full transition-all duration-500"
                  style={{ backgroundColor: card.color }}
                />
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
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              Our proven learning methodology designed to take you from a beginner to a job-ready professional.
            </p>
          </div>

          <div className="relative">
            {/* Dashed Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 border-t-2 border-dashed border-slate-200 -translate-y-1/2 z-0" />

            <div className="grid lg:grid-cols-7 gap-8 relative z-10">
              {[
                { title: 'Skill Assessment', desc: 'Identify your current level', icon: <Star /> },
                { title: 'Technical Training', desc: 'Learn core concepts', icon: <Laptop /> },
                { title: 'Hands-On Practice', desc: 'Practice with real tasks', icon: <CheckCircle /> },
                { title: 'Live Projects', desc: 'Build real-world projects', icon: <Briefcase /> },
                { title: 'Soft Skills', desc: 'Improve communication', icon: <Users /> },
                { title: 'Career Prep', desc: 'Resume + mock interviews', icon: <Award /> },
                { title: 'Cert & Support', desc: 'Get certified + guidance', icon: <Clock /> }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center group">
                  <div className="relative">
                    {/* Node */}
                    <div className="w-20 h-20 rounded-full bg-white border-4 border-slate-50 shadow-xl flex items-center justify-center text-[#14937a] transition-all duration-500 group-hover:bg-[#14937a] group-hover:text-white group-hover:scale-110 relative z-10">
                      {React.cloneElement(step.icon, { size: 32 })}
                    </div>
                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#05243b] text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-lg">
                      {i + 1}
                    </div>
                  </div>

                  <div className="mt-8 space-y-2">
                    <h3 className="font-black text-[#05243b] group-hover:text-[#14937a] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed max-w-[120px] mx-auto">
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

      <div className="max-w-7xl mx-auto px-4 py-24 grid lg:grid-cols-12 gap-16">
        {/* Syllabus Section (Left) */}
        <div className="lg:col-span-8 space-y-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-[#05243b] mb-6 leading-tight">
              AI-Powered Digital Marketing <br className="hidden md:block" />
              <span className="text-[#14937a]">Course Syllabus</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
              Learn step-by-step digital marketing skills with AI tools, practical training, and real-world strategies designed to make you industry-ready.
            </p>
          </div>

          <div className="space-y-5">
            {curriculum.map((m, i) => (
              <div key={i} className={`group border rounded-[2rem] overflow-hidden transition-all duration-500 ${openModule === i ? 'border-[#14937a]/40 shadow-xl shadow-[#14937a]/5 bg-white' : 'border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg'}`}>
                <button
                  onClick={() => setOpenModule(openModule === i ? null : i)}
                  className={`w-full flex items-center justify-between px-8 py-7 transition-all ${openModule === i ? 'bg-white' : ''}`}
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl transition-all duration-300 ${openModule === i ? 'bg-[#14937a] text-white rotate-6' : 'bg-white text-[#05243b] shadow-sm'}`}>
                      {i + 1}
                    </div>
                    <div className="text-left">
                      <span className="text-[11px] text-[#14937a] font-black uppercase tracking-[0.2em] mb-1 block">{m.module}</span>
                      <p className="text-[#05243b] font-black text-lg md:text-xl group-hover:text-[#14937a] transition-colors">{m.title}</p>
                    </div>
                  </div>
                  <div className={`w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center transition-all duration-300 ${openModule === i ? 'rotate-180 bg-[#14937a] border-[#14937a] text-white' : 'text-slate-400 group-hover:border-[#14937a] group-hover:text-[#14937a]'}`}>
                    <ChevronRight size={20} className="rotate-90" />
                  </div>
                </button>
                {openModule === i && (
                  <div className="px-8 pb-8 pt-2 bg-white animate-in fade-in slide-in-from-top-4 duration-300">
                    <div className="h-px bg-slate-100 mb-6 mx-4" />
                    <div className="grid md:grid-cols-2 gap-4">
                      {m.topics.map((t, j) => (
                        <div key={j} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-[#14937a]/20 transition-all group/item">
                          <CheckCircle size={18} className="text-[#14937a] mt-0.5 shrink-0 group-hover/item:scale-110 transition-transform" />
                          <span className="text-[#05243b] text-sm font-bold leading-snug">{t}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 p-5 bg-[#14937a]/5 rounded-2xl border border-[#14937a]/10 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                        <Star size={20} className="text-[#14937a]" />
                      </div>
                      <p className="text-[#05243b] text-[13px] font-bold">
                        <span className="text-[#14937a]">Hands-on:</span> Interactive sessions with industry-standard AI tools included in this module.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Lead Form Sidebar (Right) */}
        <div className="lg:col-span-4 relative">
          <div className="sticky top-28 bg-white rounded-[2.5rem] shadow-2xl border border-slate-100 p-8 md:p-10 overflow-hidden">
            {/* Design Accents */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#14937a]/5 rounded-bl-full -mr-16 -mt-16" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#05243b]/5 rounded-tr-full -ml-12 -mb-12" />

            <div className="relative z-10 space-y-8">
              <div className="text-center">
                <h3 className="text-2xl font-black text-[#05243b] mb-2 leading-tight">Start Your Career in <br /> <span className="text-[#14937a]">Digital Marketing</span></h3>
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
                      <option>High School</option>
                      <option>Graduate</option>
                      <option>Post Graduate</option>
                      <option>Professional</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-[12px] font-black text-[#05243b] uppercase tracking-wider mb-2 ml-1">Year of Passing *</label>
                    <select className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#14937a] outline-none transition-all text-[#05243b] font-bold text-sm appearance-none">
                      <option>Select</option>
                      {Array.from({length: 10}, (_, i) => 2026 - i).map(y => (
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
                  <span className="text-red-600 text-[11px] font-black uppercase tracking-wider">Limited Seats Available – Enroll Today</span>
                </div>
                
                <p className="text-slate-400 text-[12px] text-center font-bold px-4">
                  No prior experience required • Beginner-friendly course
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Skills & Tools Covered */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          {/* Skills Covered (Tabs) */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-[#14937a]/10 flex items-center justify-center">
                <Award size={28} className="text-[#14937a]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#05243b]">Skills Covered</h2>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-12">
              {['Search Engine Optimization', 'Search Engine Marketing', 'Social Media Marketing', 'WordPress & Content', 'Advanced Analytics'].map((tab, i) => (
                <button key={i} className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 ${i === 0 ? 'bg-[#14937a] text-white shadow-lg shadow-[#14937a]/20' : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-100'}`}>
                  {tab}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building', 'Site Audit', 'Google Search Console'].map((skill, i) => (
                <div key={i} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 text-center group">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl mx-auto mb-4 flex items-center justify-center text-[#14937a] group-hover:bg-[#14937a] group-hover:text-white transition-all">
                    <CheckCircle size={24} />
                  </div>
                  <p className="text-[#05243b] font-bold text-sm leading-tight">{skill}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tools Covered */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-[#14937a]/10 flex items-center justify-center">
                <Laptop size={28} className="text-[#14937a]" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-[#05243b]">Tools Covered</h2>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-8 gap-4">
              {[
                'Canva', 'Facebook Ads', 'Google Ads', 'RankMath', 'ScreamingFrog', 'SEMRush', 'Twitter Ads', 'Google Trends',
                'Yoast', 'Mailchimp', 'Ubersuggest', 'Bing Ads', 'Neuron', 'Miro', 'Lately', 'Jasper',
                'Flick', 'Durable', 'DeepSeek', 'OpenAI', 'Midjourney', 'Google Analytics', 'Ahrefs', 'Buffer'
              ].map((tool, i) => (
                <div key={i} className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col items-center justify-center gap-2 group">
                  <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center mb-1 group-hover:scale-110 transition-transform">
                    <span className="text-[#14937a] font-black text-xs">{tool[0]}</span>
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-tighter group-hover:text-[#05243b] transition-colors">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Who Can Apply & Placement Eligibility - Refined UI */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Who Can Apply */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-full bg-[#14937a] flex items-center justify-center text-white shadow-lg shadow-[#14937a]/20">
                <CheckCircle size={22} strokeWidth={3} />
              </div>
              <h2 className="text-3xl font-black text-[#05243b]">Who Can Apply?</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Eligibility Year of Passing', value: '2020 - 2025', icon: <Clock />, color: '#2563eb' },
                { title: 'Graduates', value: 'Any Graduate/Diploma', icon: <Award />, color: '#db2777' },
                { title: 'Academic Percentage', value: 'Min 60%', icon: <Star />, color: '#4f46e5' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-8 rounded-2xl bg-[#f8fafc] border border-slate-50 transition-all duration-300 hover:bg-white hover:shadow-xl group">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-[0_8px_16px_rgba(0,0,0,0.1)] transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: item.color }}>
                    {React.cloneElement(item.icon, { size: 28 })}
                  </div>
                  <div>
                    <h3 className="text-slate-400 font-black text-[10px] uppercase tracking-[0.15em] mb-1">{item.title}</h3>
                    <p className="text-[#05243b] font-black text-xl leading-none">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Placement Eligibility */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="w-10 h-10 rounded-full bg-[#14937a] flex items-center justify-center text-white shadow-lg shadow-[#14937a]/20">
                <CheckCircle size={22} strokeWidth={3} />
              </div>
              <h2 className="text-3xl font-black text-[#05243b]">Placement Eligibility</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Attendance', value: 'Min 90%', icon: <Users />, color: '#4f46e5' },
                { title: 'Assessment Marks', value: 'Min 75%', icon: <Award />, color: '#db2777' },
                { title: 'Live Projects', value: '100%', icon: <Briefcase />, color: '#ea580c' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-8 rounded-2xl bg-[#f8fafc] border border-slate-50 transition-all duration-300 hover:bg-white hover:shadow-xl group">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-[0_8px_16px_rgba(0,0,0,0.1)] transition-transform duration-300 group-hover:scale-110" style={{ backgroundColor: item.color }}>
                    {React.cloneElement(item.icon, { size: 28 })}
                  </div>
                  <div>
                    <h3 className="text-slate-400 font-black text-[10px] uppercase tracking-[0.15em] mb-1">{item.title}</h3>
                    <p className="text-[#05243b] font-black text-xl leading-none">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Career Choice - Vertical Connector UI */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#05243b] mb-6">
              Why Choose <span className="text-[#14937a]">AI-Powered Digital Marketing</span> as a Career?
            </h2>
            <p className="text-slate-500 max-w-3xl mx-auto text-lg leading-relaxed">
              AI-Powered Digital Marketing is one of the fastest-growing career fields today. As businesses move online, the demand for skilled digital marketers continues to rise.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-4 relative pt-20">
            {[
              { title: 'High Demand for Professionals', desc: 'Businesses are actively looking for skilled digital marketers.', icon: <Users />, offset: 'mt-0' },
              { title: 'Freelancing & Income', desc: 'Work as a freelancer or build your own services.', icon: <Briefcase />, offset: 'md:mt-24' },
              { title: 'Multiple Career Paths', desc: 'Explore roles like SEO Specialist, SMM, PPC Expert.', icon: <Award />, offset: 'mt-0' },
              { title: 'Flexible Work Opportunities', desc: 'Allows remote work and flexible schedules.', icon: <Laptop />, offset: 'md:mt-24' },
              { title: 'Continuous Growth', desc: 'Stay updated with AI technologies and trends.', icon: <TrendingUp />, offset: 'mt-0' }
            ].map((item, i) => (
              <div key={i} className={`flex-1 flex flex-col items-center group relative ${item.offset}`}>
                {/* Vertical Line */}
                <div className="absolute top-[-80px] left-1/2 w-0.5 h-[160px] bg-slate-200 -translate-x-1/2 z-0 group-hover:bg-[#14937a] transition-colors duration-500" />
                
                {/* Circle Node */}
                <div className="relative z-10 w-28 h-28 rounded-full bg-white border-4 border-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center text-[#14937a] transition-all duration-500 group-hover:bg-[#14937a] group-hover:text-white group-hover:scale-110 group-hover:shadow-[#14937a]/30">
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#14937a]/20 group-hover:border-white/40 group-hover:rotate-45 transition-all duration-700" />
                  {React.cloneElement(item.icon, { size: 40 })}
                </div>

                {/* Content */}
                <div className="mt-8 px-4">
                  <h3 className="text-[#05243b] font-black text-sm md:text-[15px] leading-tight mb-2 group-hover:text-[#14937a] transition-colors uppercase tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-[11px] font-bold leading-relaxed hidden md:block group-hover:text-slate-500">
                    👉 {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Job Roles & Salary - Career Ladder UI */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-1 bg-[#14937a] rounded-full" />
            <h2 className="text-3xl md:text-4xl font-black text-[#05243b]">
              Job Roles and <span className="text-[#14937a]">Annual Salary Range</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              {
                stage: 'Stage 01',
                exp: '0 - 6 Months',
                title: 'Digital Marketing Intern',
                salary: '₹1.2 LPA - ₹2.4 LPA',
                roles: ['DM Intern', 'SEO Trainee', 'SMM Intern', 'Content Writing Intern'],
                color: '#14937a'
              },
              {
                stage: 'Stage 02',
                exp: '6 Months - 2 Years',
                title: 'DM Analyst / Executive',
                salary: '₹2.4 LPA - ₹4.2 LPA',
                roles: ['DM Executive', 'SEO Analyst', 'SMM Executive', 'Email Marketing Assistant'],
                color: '#2563eb'
              },
              {
                stage: 'Stage 03',
                exp: '2 - 3.5 Years',
                title: 'DM Specialist',
                salary: '₹4.2 LPA - ₹7.2 LPA',
                roles: ['SEO Specialist', 'PPC / Ads Expert', 'Performance Marketer', 'Content Strategist'],
                color: '#7c3aed'
              },
              {
                stage: 'Stage 04',
                exp: '3.5 - 5 Years',
                title: 'DM Manager',
                salary: '₹7.2 LPA - ₹12 LPA',
                roles: ['DM Manager', 'Growth Hacker', 'Brand Marketing Head', 'Automation Specialist'],
                color: '#db2777'
              },
              {
                stage: 'Stage 05',
                exp: '5+ Years',
                title: 'DM Head / Entrepreneur',
                salary: '₹12 LPA - ₹36 LPA+',
                roles: ['Head of Digital', 'CMO', 'DM Consultant', 'Startup Founder'],
                color: '#ea580c'
              }
            ].map((item, i) => (
              <div key={i} className="group relative">
                {/* Stage Header */}
                <div 
                  className="py-2 px-4 rounded-t-2xl text-white text-[10px] font-black uppercase tracking-widest text-center transition-all duration-300 group-hover:brightness-110"
                  style={{ backgroundColor: item.color }}
                >
                  {item.stage}
                </div>
                
                <div className="bg-white border border-slate-100 rounded-b-2xl p-6 shadow-sm group-hover:shadow-2xl transition-all duration-500 group-hover:-translate-y-1 h-full flex flex-col">
                  <div className="mb-6 flex-grow">
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">{item.exp}</p>
                    <h3 className="text-[#05243b] font-black text-sm leading-tight mb-4 group-hover:text-[#14937a] transition-colors h-10">{item.title}</h3>
                    
                    <div className="py-2 border-y border-dashed border-slate-100 mb-6">
                      <p className="text-[#14937a] text-[10px] font-black uppercase tracking-widest mb-1">Avg Salary (CTC)</p>
                      <p className="text-[#05243b] font-black text-sm">{item.salary}</p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">Roles</p>
                      {item.roles.map((role, j) => (
                        <div key={j} className="flex items-start gap-2 text-[12px] text-slate-600 font-bold group-hover:text-[#05243b] transition-colors">
                          <div className="w-1 h-1 rounded-full bg-[#14937a] mt-1.5 shrink-0" />
                          {role}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Icon Decoration */}
                  <div className="mt-6 pt-4 border-t border-slate-50 opacity-20 group-hover:opacity-100 transition-opacity">
                    <TrendingUp size={24} style={{ color: item.color }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Alumni Placement - Logo Grid UI */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#05243b] mb-4">
              Our Students <span className="text-[#14937a]">Work At</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
              Our students have secured opportunities in various leading tech companies and startups.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Logo Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  'TCS', 'HCL', 'Microsoft', 'Amazon', 'Caterpillar', 'PayPal', 'HITS', 'Monks',
                  'Ultragits', 'Aptitude', 'Mi', 'Spansys', 'Maxwell', 'Accenture', 'Infosys', 'Airtel',
                  'Wipro', 'EWALL', 'Trident', 'Cognizant'
                ].map((logo, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-center hover:shadow-xl transition-all duration-300 group">
                    <span className="text-slate-400 font-black text-sm tracking-widest group-hover:text-[#14937a] transition-colors">{logo}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Illustration (Seamless) */}
            <div className="lg:col-span-4 relative flex items-center justify-center">
              <div className="relative w-full max-w-[450px] animate-bounce-subtle">
                <img 
                  src={graduationSuccess} 
                  alt="Graduation Success" 
                  className="w-full h-auto mix-blend-multiply pointer-events-none"
                />
                
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-center w-full">
                  <p className="font-black text-4xl text-[#14937a] mb-1">100%</p>
                  <p className="text-[#05243b] font-black text-xs uppercase tracking-[0.2em]">Placement Support</p>
                </div>
              </div>

              {/* Decorative Blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#14937a]/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>
      {/* Student Testimonials - DM Focus */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14937a]/10 text-[#14937a] font-bold text-xs uppercase tracking-widest mb-4">
              <Star size={14} className="fill-[#14937a]" />
              Trust by 500+ Students
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#05243b] mb-4">
              Reviews from Our <span className="text-[#14937a]">Successful Students</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              See how our AI-powered Digital Marketing training has helped students transform their careers.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Video Testimonials */}
            <div>
              <h3 className="text-xl font-black text-[#05243b] mb-8 flex items-center gap-3">
                <div className="w-1.5 h-6 bg-[#14937a] rounded-full" />
                Video Success Stories
              </h3>
              <div className="max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                <div className="grid sm:grid-cols-2 gap-6">
                  {videoReviews.map((video, i) => (
                    <div key={i} className="group relative rounded-3xl overflow-hidden shadow-lg aspect-video bg-black">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id}`}
                        title={`${video.name} Testimonial`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Professional Dynamic Reviews Widget */}
            <div className="lg:col-span-6">
              <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-2xl relative overflow-hidden group">
                {/* Google Logo Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
                    <div>
                      <h4 className="text-[#05243b] font-black text-lg">BM Academy Reviews</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-[#14937a] font-bold text-xs">Verified Student Success</span>
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 justify-end">
                      <Star size={16} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-2xl font-black text-[#05243b]">4.9</span>
                    </div>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-tighter">Live Aggregate Rating</p>
                  </div>
                </div>

                {/* Dynamic Review List */}
                <div className="max-h-[450px] overflow-y-auto pr-4 custom-scrollbar space-y-6">
                  {reviews.length > 0 ? (
                    reviews.map((review, i) => (
                      <div key={i} className="p-6 rounded-3xl bg-slate-50/50 border border-slate-100 transition-all hover:shadow-lg hover:bg-white group/card">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#14937a] to-[#05243b] flex items-center justify-center text-white font-black text-xl shadow-lg shadow-[#14937a]/20">
                            {review.name[0]}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="text-[#05243b] font-black text-sm">{review.name}</p>
                              <span className="text-[10px] text-slate-400 font-bold">{review.time}</span>
                            </div>
                            <div className="flex gap-0.5 mt-1">
                              {[...Array(review.rating || 5)].map((_, i) => (
                                <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-slate-600 text-[13px] leading-relaxed font-medium italic">
                          "{review.text}"
                        </p>
                      </div>
                    ))
                  ) : (
                    // Loading Skeleton
                    <div className="space-y-4 animate-pulse">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="h-32 bg-slate-100 rounded-3xl" />
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-8">
                  <Link 
                    to="https://www.google.com/search?q=BM+Academy+-+Digital+Marketing" 
                    target="_blank" 
                    className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-[#05243b] text-white hover:bg-[#14937a] transition-all font-black text-sm shadow-xl shadow-[#05243b]/20"
                  >
                    View All Live Reviews on Google
                    <ChevronRight size={18} />
                  </Link>
                </div>

                {/* Decoration */}
                <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-[#14937a]/5 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <div className="w-16 h-16 bg-[#14937a]/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-[#14937a]">
              <HelpCircle size={32} />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#05243b] mb-4">
              Frequently Asked <span className="text-[#14937a]">Questions</span>
            </h2>
            <p className="text-slate-500 text-lg">
              Get answers to common questions about our Digital Marketing course, training process, and career opportunities.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { q: 'What is AI-Powered Digital Marketing?', a: 'AI-Powered Digital Marketing uses smart tools and automation to improve SEO, content creation, ads, and data analysis, making marketing more efficient and result-driven.' },
              { q: 'Who can enroll in this course?', a: 'This course is suitable for students, graduates, job seekers, entrepreneurs, and anyone looking to build a career in digital marketing. No prior experience is required.' },
              { q: 'What makes this a practical training program?', a: 'At BM Academy, you will learn through hands-on training, real-time projects, and tool-based learning instead of only theory.' },
              { q: 'What career opportunities are available after this course?', a: 'You can apply for roles like Digital Marketing Executive, SEO Specialist, Social Media Manager, Content Marketer, or start freelancing or your own business.' },
              { q: 'Will I receive a certificate after completion?', a: 'Yes, you will receive a course completion certificate from BM Academy after successfully finishing the program.' },
              { q: 'Do you provide placement support?', a: 'Yes, we provide placement support including resume building, interview preparation, and career guidance to help you secure job opportunities.' }
            ].map((faq, i) => (
              <div key={i} className="border border-slate-100 rounded-3xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className={`w-full p-6 text-left flex items-center justify-between transition-all ${openFaq === i ? 'bg-[#14937a] text-white' : 'bg-white text-[#05243b] hover:bg-slate-50'}`}
                >
                  <span className="font-black text-[15px] md:text-lg pr-4">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openFaq === i ? 'bg-white/20 rotate-180' : 'bg-slate-100'}`}>
                    {openFaq === i ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === i ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="p-8 bg-slate-50/50 text-slate-600 leading-relaxed font-bold text-sm md:text-[15px] flex gap-3">
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
            <p className="text-slate-400 mb-8 relative z-10">Our career counselors are here to help you choose the right path.</p>
            <button 
              onClick={() => window.open('https://wa.me/919944940051?text=Hi, I am interested in the AI-Powered Digital Marketing course.', '_blank')}
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

export default DigitalMarketing;
