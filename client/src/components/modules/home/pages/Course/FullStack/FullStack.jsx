import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock,ChevronDown,Check ,Quote , TrendingUp, Users, CreditCard, Star, Laptop, ChevronRight, Award, Briefcase, Megaphone, Plus, Minus, HelpCircle, Code2, Server, Database, Globe, Cpu, Smartphone, Layout, Rocket } from 'lucide-react';
import academyImage from '../../../../../../assets/Acadmey.png';
import graduationSuccess from '../../../../../../assets/graduation_success_clean.png';
import aiDeveloperImg from '../../../../../../assets/ai_fsd_developer.png';

const learnings = [
  'Frontend Development (React & Next.js)',
  'Backend Architecture (Node.js & Express)',
  'Database Management (MongoDB & SQL)',
  'AI-Powered Code Automation & Tools',
  'REST API & GraphQL Implementation',
  'DevOps & Cloud Deployment (AWS/Azure)',
  'Mobile-First Responsive Design',
  'Agile Project Management & Git',
];

const curriculum = [
  { 
    module: 'Module 1', 
    title: 'Introduction to Web Development', 
    desc: 'Understand how the web works, development basics, and industry overview.',
    topics: ['Web Architecture (Client-Server)', 'Browsers & Rendering Engines', 'Version Control (Git/GitHub)', 'Code Editors & Setup'] 
  },
  { 
    module: 'Module 2', 
    title: 'UI/UX Fundamentals', 
    desc: 'Learn design principles, user experience concepts, and interface structuring.',
    topics: ['Wireframing & Prototyping', 'Color Theory & Typography', 'Figma Basics', 'User Psychology & Accessibility'] 
  },
  { 
    module: 'Module 3', 
    title: 'Frontend Development (HTML, CSS, JavaScript)', 
    desc: 'Build responsive websites using core web technologies and modern styling techniques.',
    topics: ['Semantic HTML5', 'Advanced CSS3 (Flex/Grid)', 'JavaScript ES6+ Syntax', 'Responsive Layouts'] 
  },
  { 
    module: 'Module 4', 
    title: 'Frontend Framework (React.js)', 
    desc: 'Develop dynamic user interfaces using React and component-based architecture.',
    topics: ['JSX & Components', 'React Hooks (State/Effect)', 'Context API & Routing', 'Tailwind CSS Integration'] 
  },
  { 
    module: 'Module 5', 
    title: 'Backend Development (Node.js & Express.js)', 
    desc: 'Create server-side applications, APIs, and handle business logic.',
    topics: ['Server Setup with Node', 'Express Routing', 'RESTful API Design', 'Middleware & Authentication'] 
  },
  { 
    module: 'Module 6', 
    title: 'Database Management (MongoDB & SQL)', 
    desc: 'Work with databases to store, manage, and retrieve application data.',
    topics: ['NoSQL with MongoDB', 'Mongoose ODM', 'Relational DB (MySQL/Postgres)', 'Data Modeling'] 
  },
  { 
    module: 'Module 7', 
    title: 'Software Testing Basics', 
    desc: 'Understand testing concepts to ensure application quality and performance.',
    topics: ['Unit Testing with Jest', 'Integration Testing', 'Debugging Techniques', 'QA Best Practices'] 
  },
  { 
    module: 'Module 8', 
    title: 'Deployment & Hosting', 
    desc: 'Learn how to deploy applications and make them live on the internet.',
    topics: ['Vercel & Netlify Deployment', 'AWS Basics', 'Docker Containerization', 'CI/CD Pipelines'] 
  },
  { 
    module: 'Module 9', 
    title: 'Backend Frameworks (Laravel or Django – Overview)', 
    desc: 'Get exposure to additional backend technologies and frameworks.',
    topics: ['PHP/Laravel Fundamentals', 'Python/Django Basics', 'MVC Architecture', 'Framework Comparison'] 
  },
];

const stats = [
  { value: '3 / 6 Months', label: 'Duration' },
  { value: '5000+', label: 'Students Enrolled' },
  { value: '4.8 ★', label: 'Average Rating' },
  { value: '96%', label: 'Placement Rate' },
];

const skillTools = {
  'UI/UX Design': [
    { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
    { name: 'Adobe XD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg' },
    { name: 'Photoshop', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
    { name: 'Illustrator', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg' }
  ],
  'Front-End Development': [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' }
  ],
  'Back-End Development': [
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' }
  ],
  'Database Management System': [
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Oracle', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
    { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' }
  ]
};

const FullStack = () => {
  const [reviews, setReviews] = useState([]);
  const [videoReviews, setVideoReviews] = useState([]);
  const [reviewStats, setReviewStats] = useState({ rating: 4.8, count: 5000 });
  const [openModule, setOpenModule] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  const [activeTab, setActiveTab] = useState('UI/UX Design');
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
        setReviews([
          { name: 'Arun Kumar', text: 'The AI-powered FSD course at BM Academy completely changed my perspective on coding. The tools we learned make development so much faster.', time: '1 month ago', rating: 5 },
          { name: 'Priya Dharshini', text: 'Best place to learn React and Node. The projects are very practical and the placement team is excellent.', time: '2 months ago', rating: 5 }
        ]);
        setVideoReviews([
          { name: 'FSD Success Story 1', id: 'dQw4w9WgXcQ' },
          { name: 'FSD Success Story 2', id: 'dQw4w9WgXcQ' }
        ]);
      }
    };

    fetchReviews();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#14937a] selection:text-white">
      {/* Premium Hero Section */}
      <div className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-[#05243b]">
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-[#14937a] blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[50%] bg-[#02182b] blur-[100px] rounded-full" />
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-8">
              {/* Trust Badge */}
              <div className="inline-flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-2 pr-6 rounded-2xl animate-fade-in-down">
                <div className="flex -space-x-3 overflow-hidden p-1">
                  {[1, 2, 3, 4].map(i => (
                    <img key={i} className="inline-block h-10 w-10 rounded-full ring-2 ring-[#05243b] object-cover" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-white font-black text-sm">Trusted by 5000+ Students</span>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-[#e8be66] font-bold text-[11px] uppercase tracking-widest">⭐ 4.8 Rating</span>
                    <span className="text-white/40 text-[11px]">|</span>
                    <span className="text-[#14937a] font-bold text-[11px] uppercase tracking-widest flex items-center gap-1">
                      👉 Career-Focused Training
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-4">
                <span className="inline-block px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white/60 text-[10px] font-black uppercase tracking-[0.3em] mb-2 animate-fade-in">
                  PG Certification
                </span>
                <h1 className="text-4xl md:text-7xl font-black text-white leading-[1.1] tracking-tight">
                  AI-Powered <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14937a] to-[#2a9b87]">Full Stack</span> <br />
                  Development
                </h1>
                <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl font-medium">
                  Learn AI-powered Full Stack Development with hands-on training, real-world projects, and expert mentorship to build practical, job-ready skills.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-5 pt-4">
                <button 
                  onClick={() => window.open('https://wa.me/919944940051?text=Hi, I want to download the Full Stack Development syllabus.', '_blank')}
                  className="group px-10 py-5 bg-[#14937a] text-white font-black rounded-2xl hover:bg-white hover:text-[#05243b] transition-all duration-300 shadow-2xl shadow-[#14937a]/20 flex items-center gap-3 cursor-pointer active:scale-95"
                >
                  Download Syllabus
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                   onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })}
                   className="px-10 py-5 bg-white/5 text-white border-2 border-white/10 font-black rounded-2xl hover:bg-white/10 hover:border-[#14937a] transition-all duration-300 backdrop-blur-sm cursor-pointer active:scale-95"
                >
                  Book Free Demo Class
                </button>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-[#14937a]/20 blur-[80px] rounded-full scale-75 animate-pulse" />
              <div className="relative bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20">
                {/* Form Header */}
                <div className="bg-[#e8be66] py-4 px-8 text-center">
                  <div className="flex items-center justify-center gap-2 text-[#05243b] font-black text-sm uppercase tracking-widest">
                    <Clock size={16} />
                    Next Batch Starts Soon
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <h3 className="text-2xl font-black text-[#05243b] mb-2 text-center">Start Your Career</h3>
                  <p className="text-slate-500 text-sm text-center mb-8 font-bold italic">Join Pondicherry's Top-Rated FSD Academy</p>
                  
                  <form className="space-y-5">
                    <div>
                      <label className="block text-[11px] font-black text-[#05243b] uppercase tracking-widest mb-2 ml-1">Full Name *</label>
                      <input type="text" placeholder="e.g. John Doe" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#14937a] focus:bg-white transition-all font-bold text-[#05243b] placeholder:text-slate-300" />
                    </div>
                    <div>
                      <label className="block text-[11px] font-black text-[#05243b] uppercase tracking-widest mb-2 ml-1">Phone Number *</label>
                      <div className="flex gap-2">
                        <div className="px-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl font-bold text-[#05243b]">+91</div>
                        <input type="tel" placeholder="10 Digit Mobile Number" className="flex-1 px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#14937a] focus:bg-white transition-all font-bold text-[#05243b] placeholder:text-slate-300" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-black text-[#05243b] uppercase tracking-widest mb-2 ml-1">Highest Qualification</label>
                      <select className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#14937a] focus:bg-white transition-all font-bold text-[#05243b] appearance-none">
                        <option>B.E / B.Tech</option>
                        <option>B.Sc / BCA</option>
                        <option>M.E / M.Tech</option>
                        <option>Other Graduate</option>
                      </select>
                    </div>
                    <button className="w-full py-5 bg-[#05243b] text-white font-black rounded-2xl hover:bg-[#14937a] transition-all duration-300 shadow-xl shadow-[#05243b]/20 uppercase tracking-widest text-sm mt-4">
                      Submit Request
                    </button>
                  </form>
                </div>
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
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#14937a]/10 text-[#14937a] text-[13px] font-bold uppercase tracking-widest mb-4">
              Why Choose BM Academy?
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#05243b] mb-6 leading-tight">
              Build Your Career with <br className="hidden md:block" />
              <span className="text-[#14937a]">Practical Full Stack Training</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              Our AI-Powered Full Stack Development course is designed for beginners, students, and professionals who want to gain real-world development skills through structured learning, hands-on projects, and expert guidance.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16 items-center">
            {/* Left Features */}
            <div className="space-y-12 order-2 lg:order-1">
              {[
                { title: 'Placement Support', desc: '100% assistance with resume building and mock interviews.', icon: <Award className="text-[#14937a]" /> },
                { title: 'Live Projects', desc: 'Work on real-time client applications and industry case studies.', icon: <CheckCircle className="text-[#14937a]" /> },
                { title: 'Soft Skills & Communication', desc: 'Personality development and professional communication training.', icon: <Users className="text-[#14937a]" /> }
              ].map((f, i) => (
                <div key={i} className="flex gap-6 group lg:text-right lg:flex-row-reverse">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center group-hover:bg-[#14937a] group-hover:text-white transition-all duration-300 transform group-hover:rotate-12">
                    {React.cloneElement(f.icon, { size: 30, className: 'group-hover:text-white transition-colors' })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#05243b] mb-2">{f.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-bold">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Central Image */}
            <div className="order-1 lg:order-2 relative">
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                <img 
                  src={academyImage} 
                  alt="Full Stack Training" 
                  className="rounded-[4rem] w-full object-cover aspect-square"
                />
                <div className="absolute -bottom-8 -right-8 bg-[#05243b] p-8 rounded-[2rem] hidden md:block border-4 border-white">
                  <div className="text-white font-black text-3xl">100%</div>
                  <div className="text-[#14937a] text-[10px] font-black uppercase tracking-[0.2em] mt-1">Practical</div>
                </div>
              </div>
            </div>

            {/* Right Features */}
            <div className="space-y-12 order-3">
              {[
                { title: 'Classroom & Online Training', desc: 'Flexible learning modes with recorded sessions and live Q&A.', icon: <Laptop className="text-[#14937a]" /> },
                { title: 'Practical Training Schedule', desc: 'Hands-on practice with industry-standard development tools.', icon: <Clock className="text-[#14937a]" /> },
                { title: 'Affordable Fees & EMI Options', desc: 'Quality education made accessible with easy payment plans.', icon: <CreditCard className="text-[#14937a]" /> }
              ].map((f, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center group-hover:bg-[#14937a] group-hover:text-white transition-all duration-300 transform group-hover:-rotate-12">
                    {React.cloneElement(f.icon, { size: 30, className: 'group-hover:text-white transition-colors' })}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#05243b] mb-2">{f.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-bold">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Course Highlights Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-[#05243b] mb-6">
              Course <span className="text-[#14937a]">Highlights</span>
            </h2>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-medium">
              Our Full Stack Development course is designed with a practical approach, combining technical skills, real-time projects, and guided mentorship to help you become job-ready.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                title: 'Comprehensive Curriculum', 
                desc: 'Learn core concepts in frontend, backend, and database with a structured and easy-to-follow syllabus.', 
                icon: <Layout className="text-emerald-500" />,
                bg: 'bg-emerald-50'
              },
              { 
                title: 'Flexible Learning Mode', 
                desc: 'Attend classes in classroom or online based on your convenience and schedule.', 
                icon: <Laptop className="text-blue-500" />,
                bg: 'bg-blue-50'
              },
              { 
                title: 'Flexible Payment Options', 
                desc: 'Choose convenient payment plans to continue your learning without financial pressure.', 
                icon: <CreditCard className="text-purple-500" />,
                bg: 'bg-purple-50'
              },
              { 
                title: 'Industry-Relevant Certification', 
                desc: 'Receive a certification upon completion to showcase your skills and knowledge.', 
                icon: <Award className="text-orange-500" />,
                bg: 'bg-orange-50'
              },
              { 
                title: 'Expert-Led Training', 
                desc: 'Learn from experienced trainers with real-world development knowledge and practical insights.', 
                icon: <Users className="text-indigo-500" />,
                bg: 'bg-indigo-50'
              },
              { 
                title: 'Interactive Learning', 
                desc: 'Engage in practical sessions, discussions, and hands-on activities for better understanding.', 
                icon: <CheckCircle className="text-cyan-500" />,
                bg: 'bg-cyan-50'
              },
              { 
                title: 'Progress Tracking System', 
                desc: 'Track your learning progress, access materials, and stay consistent with guided support.', 
                icon: <TrendingUp className="text-rose-500" />,
                bg: 'bg-rose-50'
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-[2.5rem] bg-white border border-slate-100 hover:border-[#14937a]/30 hover:shadow-2xl hover:shadow-slate-100/50 transition-all duration-500 group">
                <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>
                <h4 className="text-[#05243b] font-black text-xl mb-4 leading-tight">{item.title}</h4>
                <div className="flex gap-3">
                  <span className="text-[#14937a] shrink-0 font-bold">👉</span>
                  <p className="text-slate-500 text-sm font-bold leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
            
            {/* CTA Card */}
            <div className="p-8 rounded-[2.5rem] bg-[#05243b] flex flex-col justify-center items-center text-center group cursor-pointer hover:bg-[#14937a] transition-all duration-500">
               <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6 text-white group-hover:rotate-12 transition-transform">
                  <Rocket size={28} />
               </div>
               <h4 className="text-white font-black text-xl mb-2">Ready to Start?</h4>
               <p className="text-white/60 text-xs font-bold mb-6">Join the next batch today!</p>
               <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="px-6 py-3 bg-white text-[#05243b] font-black rounded-xl text-sm uppercase tracking-widest active:scale-95 transition-all">
                  Apply Now
               </button>
            </div>
          </div>
        </div>
      </section>

      {/* How You'll Learn Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-[#05243b] mb-4">
              How You'll Learn at <span className="text-[#14937a]">BM Academy</span>
            </h2>
            <p className="text-slate-500 text-lg font-medium">
              Our proven learning methodology designed to take you from a beginner to a <br className="hidden md:block" /> job-ready professional.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="absolute top-1/3 left-0 w-full h-px border-t-2 border-dashed border-slate-100 hidden lg:block" />
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 relative z-10">
              {[
                { step: '1', title: 'Skill Assessment', desc: 'Identify your current level', icon: <Star /> },
                { step: '2', title: 'Technical Training', desc: 'Learn core concepts', icon: <Laptop /> },
                { step: '3', title: 'Hands-On Practice', desc: 'Practice with real tasks', icon: <CheckCircle /> },
                { step: '4', title: 'Live Projects', desc: 'Build real-world projects', icon: <Briefcase /> },
                { step: '5', title: 'Soft Skills', desc: 'Improve communication', icon: <Users /> },
                { step: '6', title: 'Career Prep', desc: 'Resume + mock interviews', icon: <Award /> },
                { step: '7', title: 'Cert & Support', desc: 'Get certified + guidance', icon: <Clock /> }
              ].map((s, i) => (
                <div key={i} className="text-center group">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 bg-white rounded-full shadow-xl shadow-slate-200/50 flex items-center justify-center text-[#14937a] group-hover:bg-[#14937a] group-hover:text-white transition-all duration-500 border border-slate-50">
                      {React.cloneElement(s.icon, { size: 32 })}
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#05243b] text-white text-[10px] font-black rounded-full flex items-center justify-center shadow-lg">
                      {s.step}
                    </div>
                  </div>
                  <h4 className="text-[#05243b] font-black text-sm mb-2">{s.title}</h4>
                  <p className="text-slate-400 text-[11px] font-bold leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>





      {/* Syllabus Section */}
      <section className="py-24 bg-white relative overflow-hidden" id="syllabus">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#05243b] mb-6 leading-tight">
              AI-Powered Full Stack Development <br />
              <span className="text-[#14937a]">Course Syllabus</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-4xl font-medium leading-relaxed">
              Explore a comprehensive Full Stack Development syllabus designed to help you learn frontend, backend, and database technologies with practical, real-world applications. This course covers modern tools and AI integration to build job-ready skills.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Syllabus Accordions */}
            <div className="lg:col-span-8 space-y-6">
              {curriculum.map((m, i) => (
                <div key={i} className={`border rounded-[2rem] transition-all duration-500 ${openModule === i ? 'border-[#14937a] shadow-2xl shadow-[#14937a]/10' : 'border-slate-100 hover:border-slate-200'}`}>
                  <button 
                    onClick={() => setOpenModule(openModule === i ? null : i)}
                    className="w-full p-6 md:p-8 text-left flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-6">
                      <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl transition-all duration-500 ${openModule === i ? 'bg-[#14937a] text-white scale-110 shadow-lg' : 'bg-slate-50 text-[#05243b] group-hover:bg-[#14937a]/10'}`}>
                        {i + 1}
                      </div>
                      <div>
                        <p className={`text-[10px] font-black uppercase tracking-widest mb-1 ${openModule === i ? 'text-[#14937a]' : 'text-slate-400'}`}>
                          {m.module}
                        </p>
                        <h4 className="font-black text-lg md:text-xl text-[#05243b]">{m.title}</h4>
                      </div>
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openModule === i ? 'bg-[#05243b] text-white rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                      <ChevronDown size={20} />
                    </div>
                  </button>
                  
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${openModule === i ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-8 md:p-10 bg-white border-t border-slate-50">
                      <p className="text-slate-500 font-bold mb-8 italic text-sm">
                        {m.desc}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-8">
                        {m.topics.map((topic, idx) => (
                          <div key={idx} className="flex items-start gap-3 group/item">
                            <div className="mt-1 w-5 h-5 rounded-full bg-[#14937a]/10 flex items-center justify-center text-[#14937a] transition-all group-hover/item:bg-[#14937a] group-hover/item:text-white">
                              <Check size={12} strokeWidth={4} />
                            </div>
                            <span className="text-slate-600 text-sm font-bold">{topic}</span>
                          </div>
                        ))}
                      </div>

                      <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4 group/hands">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#14937a] shadow-sm transition-transform group-hover/hands:scale-110">
                          <Rocket size={20} />
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-[#14937a] mb-1">Hands-on Experience</p>
                          <p className="text-[#05243b] text-xs font-bold leading-relaxed">
                            Interactive sessions with industry-standard AI tools and real-time development environments included in this module.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Lead Form (Sticky) */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 p-1">
                <div className="bg-slate-50/50 p-8 rounded-[2rem] border border-slate-100">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-black text-[#05243b] mb-2">
                      Start Your Career in <br />
                      <span className="text-[#14937a]">Full Stack Development</span>
                    </h3>
                    <p className="text-slate-400 text-xs font-bold">Fill in your details for a free demo class</p>
                  </div>

                  <form className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-[#05243b] uppercase tracking-widest ml-1">Full Name *</label>
                      <input type="text" placeholder="e.g. John Doe" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-[#14937a] focus:bg-white transition-all font-bold text-sm text-[#05243b]" />
                    </div>
                    
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-[#05243b] uppercase tracking-widest ml-1">Phone Number *</label>
                      <div className="flex gap-2">
                        <div className="px-3 py-3.5 bg-slate-50 border border-slate-100 rounded-xl font-bold text-sm text-[#05243b]">+91</div>
                        <input type="tel" placeholder="10 Digit Number" className="flex-1 px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-[#14937a] focus:bg-white transition-all font-bold text-sm text-[#05243b]" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-[#05243b] uppercase tracking-widest ml-1">Email Address *</label>
                      <input type="email" placeholder="name@email.com" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-[#14937a] focus:bg-white transition-all font-bold text-sm text-[#05243b]" />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black text-[#05243b] uppercase tracking-widest ml-1">Your City *</label>
                      <input type="text" placeholder="e.g. Pondicherry" className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-[#14937a] focus:bg-white transition-all font-bold text-sm text-[#05243b]" />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-[#05243b] uppercase tracking-widest ml-1">Qualification *</label>
                        <select className="w-full px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-[#14937a] font-bold text-xs text-[#05243b] appearance-none">
                          <option>Select</option>
                          <option>B.E / B.Tech</option>
                          <option>B.Sc / BCA</option>
                          <option>Graduate</option>
                          <option>Post Graduate</option>
                        </select>
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-[10px] font-black text-[#05243b] uppercase tracking-widest ml-1">Year of Passing *</label>
                        <select className="w-full px-4 py-3.5 bg-slate-50 border border-slate-100 rounded-xl focus:outline-none focus:border-[#14937a] font-bold text-xs text-[#05243b] appearance-none">
                          <option>Select</option>
                          <option>2024</option>
                          <option>2023</option>
                          <option>2022</option>
                          <option>Earlier</option>
                        </select>
                      </div>
                    </div>

                    <button className="w-full py-4 bg-[#05243b] text-white font-black rounded-xl hover:bg-[#14937a] transition-all duration-300 shadow-xl shadow-[#05243b]/10 uppercase tracking-widest text-xs mt-4">
                      Get Free Demo Class
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools Covered Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          
          {/* Skills Covered */}
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#14937a]/10 flex items-center justify-center text-[#14937a]">
                <Cpu size={24} />
              </div>
              <h2 className="text-3xl font-black text-[#05243b]">Skills Covered</h2>
            </div>

            <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-xl shadow-slate-200/50">
              {/* Tabs */}
              <div className="flex flex-wrap gap-4 md:gap-8 border-b border-slate-100 pb-6 mb-10">
                {['UI/UX Design', 'Front-End Development', 'Back-End Development', 'Database Management System'].map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 text-sm md:text-base font-black transition-all relative ${activeTab === tab ? 'text-[#14937a]' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    {tab}
                    {activeTab === tab && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#14937a] rounded-full" />}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {(skillTools[activeTab] || []).map((tool, i) => (
                  <div key={i} className="p-6 rounded-[2rem] border border-slate-100 flex flex-col items-center justify-center gap-4 hover:shadow-xl transition-all group">
                    <div className="w-16 h-16 flex items-center justify-center">
                      <img src={tool.icon} alt={tool.name} className="w-12 h-12 object-contain group-hover:scale-110 transition-transform" />
                    </div>
                    <span className="text-xs font-black text-[#05243b]">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tools Covered Logo Cloud */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-[#14937a]/10 flex items-center justify-center text-[#14937a]">
                <Briefcase size={24} />
              </div>
              <h2 className="text-3xl font-black text-[#05243b]">Tools Covered</h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {[
                { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg' },
                { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
                { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
                { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
                { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' }
              ].map((tool, i) => (
                <div key={i} className="px-6 py-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-3 hover:shadow-md transition-all group">
                  <img src={tool.icon} alt={tool.name} className="w-8 h-8 object-contain group-hover:scale-110 transition-transform" />
                  <span className="text-[11px] font-black text-[#05243b]">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Who Can Apply Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-16">
            <div className="w-10 h-10 rounded-xl bg-[#14937a]/10 flex items-center justify-center text-[#14937a]">
              <Award size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[#05243b]">Who Can Apply?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Eligibility Year of Passing', 
                value: '2022 - 2025', 
                icon: <HelpCircle size={24} />, 
                color: 'bg-indigo-100 text-indigo-600' 
              },
              { 
                title: 'Graduates', 
                value: 'CS Background', 
                icon: <Briefcase size={24} />, 
                color: 'bg-pink-100 text-pink-600' 
              },
              { 
                title: 'Academic Percentage', 
                value: 'Minimum 60% marks in UG', 
                icon: <Award size={24} />, 
                color: 'bg-blue-100 text-blue-600' 
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 flex items-center gap-6 group hover:-translate-y-2 transition-all duration-500 text-left">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all group-hover:scale-110 shrink-0 ${item.color}`}>
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-1">{item.title}</h4>
                  <p className="text-[#05243b] font-black text-sm md:text-base">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why FSD Career Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-[#05243b] mb-6 leading-tight">
              Why Choose Full Stack Development <br />
              <span className="text-[#14937a]">as Your Career?</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-4xl mx-auto font-medium leading-relaxed">
              Full Stack Development is one of the most in-demand career paths in today’s tech industry. At BM Academy, we help students build practical skills in frontend, backend, and real-world development to prepare them for job opportunities and career growth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-6 pt-10">
            {[
              { 
                title: 'High Demand Across Industries', 
                desc: 'Full Stack Developers are needed in startups, companies, and growing tech businesses.',
                icon: <TrendingUp size={32} />
              },
              { 
                title: 'Career Growth Opportunities', 
                desc: 'Build a strong foundation to grow into roles like Developer, Software Engineer, or Tech Specialist.',
                icon: <Users size={32} />
              },
              { 
                title: 'Complete Development Skills', 
                desc: 'Learn both frontend and backend technologies to become a well-rounded developer.',
                icon: <Code2 size={32} />
              },
              { 
                title: 'Learn Modern Tools & Technologies', 
                desc: 'Stay updated with frameworks, tools, and industry practices used in real projects.',
                icon: <Laptop size={32} />
              },
              { 
                title: 'Flexible Career Paths', 
                desc: 'Work in companies, startups, freelance, or build your own projects.',
                icon: <Briefcase size={32} />
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center group">
                <div className="relative mb-10">
                  {/* Vertical Line */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-px h-12 bg-slate-200 group-hover:bg-[#14937a] transition-colors" />
                  
                  {/* Icon Container with Bracket */}
                  <div className="relative w-24 h-24 rounded-full border border-slate-200 flex items-center justify-center bg-white shadow-lg group-hover:border-[#14937a] transition-all group-hover:scale-110">
                    {/* The Bracket Semicircle */}
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-12 border-l-4 border-[#05243b] rounded-l-full group-hover:border-[#14937a]" />
                    
                    <div className="text-[#05243b] group-hover:text-[#14937a] transition-colors">
                      {item.icon}
                    </div>
                  </div>
                </div>
                
                <h4 className="text-[#05243b] font-black text-sm md:text-base mb-3 group-hover:text-[#14937a] transition-colors px-4">
                  {item.title}
                </h4>
                <p className="text-slate-400 text-xs font-bold leading-relaxed px-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Opportunities Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-[#05243b] mb-6 leading-tight">
              Career Opportunities After <br />
              <span className="text-[#14937a]">Full Stack Development Course</span>
            </h2>
            <p className="text-slate-600 text-lg max-w-4xl mx-auto font-medium leading-relaxed">
              Explore career paths you can pursue after completing the Full Stack Development course at BM Academy. Build real-world skills in frontend, backend, and databases to prepare for entry-level and growth-focused tech roles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Web Application Developer', desc: 'Build responsive and dynamic web applications using modern frontend and backend technologies.', icon: <Layout size={24} /> },
              { title: 'API Developer', desc: 'Create and manage REST APIs for seamless communication between frontend and backend systems.', icon: <Server size={24} /> },
              { title: 'JavaScript Developer', desc: 'Create interactive web applications and dynamic features using JavaScript and modern libraries.', icon: <Code2 size={24} /> },
              { title: 'Frontend Developer', desc: 'Build responsive and user-friendly websites using HTML, CSS, JavaScript, and modern frameworks like React.', icon: <Smartphone size={24} /> },
              { title: 'Backend Developer', desc: 'Develop server-side applications, manage databases, and create APIs using Node.js and backend technologies.', icon: <Database size={24} /> },
              { title: 'Full Stack Developer', desc: 'Handle both frontend and backend development to build complete, scalable web applications.', icon: <Globe size={24} /> },
              { title: 'Freelance Developer', desc: 'Work independently on real-world projects, build websites for clients, and grow as a freelance developer.', icon: <Briefcase size={24} /> },
              { title: 'MERN Stack Developer', desc: 'Work on complete web applications using MongoDB, Express.js, React, and Node.js (MERN Stack).', icon: <Cpu size={24} /> }
            ].map((role, i) => (
              <div key={i} className="p-10 rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/30 hover:shadow-2xl transition-all duration-500 group text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#14937a] flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-[#14937a]/20">
                  {role.icon}
                </div>
                <h4 className="text-[#05243b] font-black text-lg md:text-xl mb-4 group-hover:text-[#14937a] transition-colors">{role.title}</h4>
                <p className="text-slate-400 text-sm font-bold leading-relaxed">{role.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Roles & Salary Range Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#14937a]/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#05243b]/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/4" />

        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14937a]/10 text-[#14937a] text-xs font-black uppercase tracking-widest mb-6">
              <TrendingUp size={14} />
              Career Roadmap
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-[#05243b] mb-6 leading-tight">
              Job Roles and <span className="text-[#14937a]">Annual Salary Range</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
              From internships to leadership—visualize your growth path in the high-paying world of Full Stack Development.
            </p>
          </div>

          <div className="relative">
            {/* The Connecting Path Line (Desktop) */}
            <div className="hidden lg:block absolute top-48 left-0 w-full h-1 bg-slate-100 -translate-y-1/2">
              <div className="h-full bg-gradient-to-r from-[#14937a] to-[#05243b] w-full opacity-20" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
              {[
                {
                  stage: '01',
                  title: 'Full Stack Intern',
                  exp: '0 – 6 Months',
                  salary: '2 - 3 LPA',
                  roles: ['Web Development Intern', 'Junior React Developer', 'Node.js Trainee', 'Backend Intern']
                },
                {
                  stage: '02',
                  title: 'Junior Developer',
                  exp: '6 Months – 1.5 Years',
                  salary: '3 - 6.5 LPA',
                  roles: ['Junior Full Stack Developer', 'Frontend Developer (React)', 'Backend Developer (Node.js)', 'API Developer']
                },
                {
                  stage: '03',
                  title: 'Professional',
                  exp: '1.5 – 3 Years',
                  salary: '6.5 - 10 LPA',
                  roles: ['Full Stack Developer (MERN)', 'Technical Analyst', 'Software Engineer', 'DevOps Support Engineer']
                },
                {
                  stage: '04',
                  title: 'Senior Lead',
                  exp: '3 – 5 Years',
                  salary: '10 - 18 LPA',
                  roles: ['Lead Full Stack Engineer', 'Technical Architect', 'Project Lead', 'Cloud Integration Specialist']
                },
                {
                  stage: '05',
                  title: 'Tech Leader',
                  exp: '5+ Years',
                  salary: '18 - 40+ LPA',
                  roles: ['CTO / VP Engineering', 'Product Manager', 'Startup Founder', 'Full Stack Consultant']
                }
              ].map((item, i) => (
                <div key={i} className="relative group">
                  {/* Stage Circle on Path */}
                  <div className="hidden lg:flex absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white border-4 border-slate-50 items-center justify-center text-[#05243b] font-black text-sm z-20 group-hover:border-[#14937a] group-hover:bg-[#14937a] group-hover:text-white transition-all duration-500 shadow-xl">
                    {item.stage}
                  </div>

                  <div className="mt-8 space-y-6">
                    {/* Top Stats Card */}
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 group-hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-[#14937a]/5 rounded-full translate-x-1/2 -translate-y-1/2" />
                      
                      <div className="relative z-10 text-center">
                        <p className="text-[10px] font-black text-[#14937a] uppercase tracking-widest mb-2">Stage {item.stage}</p>
                        <h4 className="text-[#05243b] font-black text-lg mb-1 leading-tight">{item.title}</h4>
                        <p className="text-slate-400 text-[10px] font-bold mb-6 italic">{item.exp}</p>
                        
                        <div className="inline-block px-4 py-2 rounded-xl bg-slate-50 border border-slate-100 group-hover:bg-[#14937a]/5 group-hover:border-[#14937a]/20 transition-all">
                          <p className="text-[#05243b] font-black text-sm">₹{item.salary}</p>
                        </div>
                      </div>
                    </div>

                    {/* Roles List Card */}
                    <div className="bg-slate-50/50 backdrop-blur-sm p-8 rounded-[2.5rem] border border-white group-hover:bg-white group-hover:shadow-xl transition-all duration-500">
                      <h5 className="text-[#05243b] font-black text-[11px] uppercase tracking-widest mb-6 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#14937a]" />
                        Key Roles
                      </h5>
                      <ul className="space-y-4">
                        {item.roles.map((role, idx) => (
                          <li key={idx} className="flex items-start gap-3 group/role">
                            <ChevronRight size={12} className="mt-1 text-[#14937a] group-hover/role:translate-x-1 transition-transform" />
                            <span className="text-slate-600 text-[11px] font-bold leading-tight">{role}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-20 p-8 rounded-[2.5rem] bg-[#05243b] text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 w-64 h-64 bg-[#14937a]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
             <p className="text-white font-black text-lg md:text-xl relative z-10">
               * Salary ranges are based on industry averages for 2024-2025 across Tier 1 & Tier 2 cities in India.
             </p>
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
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center justify-center group transition-all duration-500 hover:-translate-y-1">
                    <span className="text-slate-400 font-black text-lg group-hover:text-[#05243b] transition-colors uppercase tracking-widest">{company}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Success Illustration & CTA */}
            <div className="lg:col-span-4 relative">
              <div className="relative z-10 bg-white p-8 rounded-[3rem] border border-slate-100">
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
              <div className="absolute -bottom-6 -right-6 bg-[#05243b] text-white p-6 rounded-3xl z-20 hidden md:block animate-bounce-slow">
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

      {/* Social Proof & Reviews Section */}
      {/* Student Testimonials Section */}
      <section className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#14937a]/10 text-[#14937a] font-bold text-xs uppercase tracking-widest mb-4">
              <Star size={14} className="fill-[#14937a]" />
              Trust by 500+ Students
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-[#05243b] mb-4">
              Reviews from Our <span className="text-[#14937a]">Successful Students</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">
              See how our AI-powered Full Stack Development training has helped students transform their careers.
            </p>
          </div>


          {/* 2. Video & Google Reviews Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Video Stories */}
            <div>
              <h3 className="text-2xl font-black text-[#05243b] mb-8 flex items-center gap-3">
                <div className="w-2 h-8 bg-[#14937a] rounded-full" />
                Video Success Stories
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {videoReviews.map((video, i) => (
                  <div key={i} className="group relative rounded-3xl overflow-hidden shadow-lg aspect-video bg-black">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.name}
                      frameBorder="0"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Reviews Widget */}
            <div>
              <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-2xl relative overflow-hidden h-full">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <img src="https://www.google.com/favicon.ico" alt="Google" className="w-6 h-6" />
                    <div>
                      <h4 className="text-[#05243b] font-black text-lg">BM Academy Reviews</h4>
                      <p className="text-[#14937a] font-bold text-xs">Verified Student Success</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 justify-end">
                      <Star size={16} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-2xl font-black text-[#05243b]">4.8</span>
                    </div>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-tighter">Live Aggregate Rating</p>
                  </div>
                </div>

                <div className="max-h-[400px] overflow-y-auto pr-4 custom-scrollbar space-y-6">
                  {reviews.length > 0 ? (
                    reviews.map((review, i) => (
                      <div key={i} className="p-6 rounded-3xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-10 h-10 rounded-full bg-[#05243b] flex items-center justify-center text-white font-black">
                            {review.name[0]}
                          </div>
                          <div>
                            <p className="text-[#05243b] font-black text-sm">{review.name}</p>
                            <div className="flex gap-0.5 mt-1">
                              {[...Array(review.rating || 5)].map((_, i) => (
                                <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-slate-600 text-xs italic leading-relaxed">"{review.text}"</p>
                      </div>
                    ))
                  ) : (
                    <div className="animate-pulse space-y-4">
                      {[1, 2, 3].map(i => <div key={i} className="h-24 bg-slate-100 rounded-3xl" />)}
                    </div>
                  )}
                </div>

                <div className="mt-8">
                  <Link 
                    to="https://www.google.com/search?q=BM+Academy+Pondicherry" 
                    target="_blank"
                    className="flex items-center justify-center gap-3 py-4 rounded-2xl bg-[#05243b] text-white hover:bg-[#14937a] transition-all font-black text-sm"
                  >
                    View All Reviews on Google
                    <ChevronRight size={18} />
                  </Link>
                </div>
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
              Find answers to common questions about the Full Stack Development course at BM Academy, including eligibility, training process, certification, and career opportunities.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { q: 'What is the Full Stack Development course at BM Academy?', a: 'This course is designed to teach both frontend and backend development, including technologies like HTML, CSS, JavaScript, React, Node.js, and databases. It focuses on practical learning through real-time projects.' },
              { q: 'Who can join this Full Stack Development course?', a: 'Students, fresh graduates, and working professionals who want to start or switch to a career in web development can join this course. No specific background is required.' },
              { q: 'Do I need prior programming knowledge?', a: 'No, prior programming experience is not required. The course starts from basics and gradually moves to advanced concepts.' },
              { q: 'What job roles can I apply for after completing the course?', a: 'You can apply for roles such as Frontend Developer, Backend Developer, Full Stack Developer, and JavaScript Developer.' },
              { q: 'Will I receive a certificate after completion?', a: 'Yes, you will receive a course completion certificate from BM Academy after successfully finishing the training.' },
              { q: 'Does BM Academy provide placement support?', a: 'Yes, we provide career guidance including resume building, interview preparation, and job support to help you start your career.' },
              { q: 'Will I get practical experience during the course?', a: 'Yes, the course includes hands-on practice and real-time projects to help you gain practical development experience.' }
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
            <p className="text-slate-400 mb-8 relative z-10">Our tech mentors are here to help you choose the right stack.</p>
            <button 
              onClick={() => window.open('https://wa.me/919944940051?text=Hi, I have some questions about the Full Stack Development course.', '_blank')}
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
          height: 6px;
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

export default FullStack;
