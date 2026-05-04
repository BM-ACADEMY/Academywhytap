import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Search, 
  ChevronRight, 
  CheckCircle2, 
  BookOpen, 
  HelpCircle,
  MessageSquare,
  Bookmark,
  Share2,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

const InterviewQuestionDetail = () => {
  const { category: trackId } = useParams();
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedQuestion, setExpandedQuestion] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const tracks = {
    'full-stack': {
      title: "Full Stack Development Interview Questions",
      description: "Essential Topics and Examples to Help You Prepare",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
      categories: [
        {
          id: 1,
          name: "fsd",
          questions: [
            { q: "What is Full Stack Development?", a: "Full Stack Development involves working on both the frontend (client-side) and backend (server-side) of an application, including databases, APIs, and deployment." },
            { q: "Who is a Full Stack Developer?", a: "A Full Stack Developer is a professional skilled in frontend technologies (HTML, CSS, JavaScript), backend technologies (Node.js, Java, Python, etc.), databases, APIs, and version control systems." },
            { q: "What are the core technologies of frontend development?", a: "HTML, CSS, JavaScript, Frameworks/Libraries (React, Angular, Vue), and Tools (Webpack, Babel)." },
            { q: "What is the difference between HTML and HTML5?", a: "HTML5 introduces semantic elements (<article>, <section>), audio/video support, local storage, and better mobile support." },
            { q: "What is React?", a: "React is a JavaScript library used to build reusable UI components. It uses a virtual DOM for better performance." },
            { q: "What is the Virtual DOM?", a: "The Virtual DOM is a lightweight copy of the real DOM that improves performance by updating only the changed parts of the UI." }
          ]
        },
        {
          id: 2,
          name: "Backend interview questions",
          questions: [
            { q: "What is backend development?", a: "Backend development handles server-side logic, database operations, authentication, and API creation." },
            { q: "What is Node.js?", a: "Node.js is a JavaScript runtime that allows JavaScript to run on the server using a non-blocking, event-driven architecture." },
            { q: "What is REST API?", a: "REST API is an architectural style that allows communication between client and server using HTTP methods like GET, POST, PUT, DELETE." },
            { q: "What is middleware?", a: "Middleware functions process requests before reaching the server, commonly used for logging, authentication, and error handling." }
          ]
        },
        {
          id: 3,
          name: "Database Interview Questions",
          questions: [
            { q: "Difference between SQL and NoSQL databases?", a: "SQL databases are relational and table-based, while NoSQL databases are non-relational and document-based, offering better scalability for unstructured data." },
            { q: "What is MongoDB?", a: "MongoDB is a NoSQL database that stores data in JSON-like documents." },
            { q: "What is normalization?", a: "Normalization organizes database tables to reduce data redundancy and improve data integrity." }
          ]
        },
        {
          id: 4,
          name: "API & Security Questions",
          questions: [
            { q: "What is authentication vs authorization?", a: "Authentication verifies user identity, while Authorization determines user permissions." },
            { q: "What is JWT?", a: "JWT (JSON Web Token) is a secure way to transmit user information between client and server." },
            { q: "How do you secure a web application?", a: "Use HTTPS, input validation, JWT authentication, password hashing, and prevent SQL Injection & XSS." }
          ]
        }
      ]
    },
    'digital-marketing': {
      title: "Digital Marketing Interview Questions",
      description: "Complete Guide to SEO, SEM, and Social Media",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      categories: [
        {
          id: 1,
          name: "Fundamentals",
          questions: [
            { q: "What is Digital Marketing?", a: "Digital Marketing is the promotion of products or services using digital channels such as search engines, social media, email, websites, and mobile apps to reach and engage customers online." },
            { q: "What are the main types of Digital Marketing?", a: "SEO, SEM (Google Ads), Social Media Marketing (SMM), Content Marketing, Email Marketing, Affiliate Marketing, Influencer Marketing, and Mobile Marketing." }
          ]
        },
        {
          id: 2,
          name: "SEO (Search Engine Optimization)",
          questions: [
            { q: "What is SEO?", a: "SEO is the process of improving a website’s visibility on search engines like Google to get organic (unpaid) traffic." },
            { q: "What are the types of SEO?", a: "On-Page SEO (Content, keywords), Off-Page SEO (Backlinks), and Technical SEO (Site speed, mobile friendliness)." }
          ]
        },
        {
          id: 3,
          name: "SEM & Google Ads",
          questions: [
            { q: "What is SEM?", a: "SEM (Search Engine Marketing) is paid advertising on search engines, mainly through platforms like Google Ads, to increase website visibility instantly." },
            { q: "Difference between SEO and SEM?", a: "SEO is organic and takes time to show results, while SEM is paid and provides instant visibility." },
            { q: "What is Google Ads?", a: "An online advertising platform where advertisers bid on keywords to display ads on Google Search, YouTube, and partner websites." },
            { q: "What is CPC & CTR?", a: "CPC (Cost Per Click) is the amount paid per click. CTR (Click-Through Rate) is (Clicks / Impressions) × 100." }
          ]
        },
        {
          id: 4,
          name: "SMM & Social Media",
          questions: [
            { q: "What is Social Media Marketing?", a: "SMM involves promoting brands and content on platforms like Facebook, Instagram, LinkedIn, and YouTube to increase engagement and sales." },
            { q: "What are organic and paid posts?", a: "Organic posts are free and visible to followers, while Paid posts are sponsored ads shown to a targeted audience." }
          ]
        },
        {
          id: 5,
          name: "Content & Email Marketing",
          questions: [
            { q: "What is Content Marketing?", a: "Creating valuable content like blogs, videos, and infographics to attract and retain customers." },
            { q: "What is Email Marketing?", a: "Sending promotional or informational emails to users to build relationships and drive conversions." }
          ]
        },
        {
          id: 6,
          name: "Analytics & Metrics",
          questions: [
            { q: "What is Google Analytics?", a: "A tool used to track website traffic, user behavior, conversions, and campaign performance." },
            { q: "What is Bounce Rate?", a: "The percentage of visitors who leave a website after viewing only one page." },
            { q: "What is Conversion Rate?", a: "Conversion Rate = (Conversions / Total Visitors) × 100." },
            { q: "What is ROI in Digital Marketing?", a: "ROI (Return on Investment) = (Revenue − Cost) / Cost × 100. It measures profit from marketing efforts." }
          ]
        },
        {
          id: 7,
          name: "Advanced Strategies",
          questions: [
            { q: "What is Remarketing?", a: "Remarketing targets users who have already visited a website by showing them ads again to bring them back." },
            { q: "What is a Sales Funnel?", a: "A journey showing: Awareness → Interest → Consideration → Conversion." },
            { q: "What are Affiliate & Influencer Marketing?", a: "Affiliate: Earning commission via referral links. Influencer: Collaborating with influencers to reach their followers." }
          ]
        }
      ]
    },
    'data-analytics': {
      title: "Data Analytics Interview Questions",
      description: "Master SQL, Python, Excel, and Statistics Interviews",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
      categories: [
        {
          id: 1,
          name: "Fundamentals",
          questions: [
            { q: "What is Data Analytics?", a: "Data Analytics is the process of collecting, cleaning, analyzing, and interpreting data to discover patterns, trends, and insights that help in decision-making." },
            { q: "What are the types of Data Analytics?", a: "Descriptive Analytics (What happened), Diagnostic Analytics (Why it happened), Predictive Analytics (What will happen), Prescriptive Analytics (What should be done)." },
            { q: "What is the role of a Data Analyst?", a: "A Data Analyst collects data, cleans it, analyzes trends, creates reports/dashboards, and provides insights to support business decisions." },
            { q: "What tools are commonly used in Data Analytics?", a: "Excel, SQL, Python/R, Power BI/Tableau, and Google Analytics." },
            { q: "What is the difference between Data Analysis and Data Analytics?", a: "Data Analysis examines data to find insights. Data Analytics includes data analysis plus prediction, visualization, and decision-making support." },
            { q: "Why is data analytics important?", a: "It helps businesses make informed decisions, reduce costs, improve performance, and identify new opportunities." }
          ]
        },
        {
          id: 2,
          name: "Data Cleaning & Quality",
          questions: [
            { q: "What is data cleaning?", a: "Data cleaning is the process of fixing or removing incorrect, incomplete, duplicate, or irrelevant data to improve data quality." },
            { q: "What is missing data and how do you handle it?", a: "Missing data occurs when values are absent. It can be handled by removing rows, replacing with mean/median, or using predictive methods." },
            { q: "What is the difference between structured and unstructured data?", a: "Structured Data is organized in tables (Excel, SQL). Unstructured Data includes text, images, videos, and emails." },
            { q: "What is ETL?", a: "ETL stands for Extract, Transform, Load — a process used to move and prepare data from source systems to a data warehouse." }
          ]
        },
        {
          id: 3,
          name: "SQL Interview Questions",
          questions: [
            { q: "What is SQL and why is it used?", a: "SQL (Structured Query Language) is used to store, retrieve, filter, and manipulate data in relational databases." },
            { q: "What is a primary key?", a: "A primary key uniquely identifies each record in a table and cannot contain NULL values." },
            { q: "What is the difference between INNER JOIN and LEFT JOIN?", a: "INNER JOIN returns matching records from both tables. LEFT JOIN returns all records from the left table and matching records from the right table." },
            { q: "What is normalization?", a: "Normalization is the process of organizing data in a database to reduce redundancy and improve data integrity." }
          ]
        },
        {
          id: 4,
          name: "Excel & Visualization",
          questions: [
            { q: "What is Excel VLOOKUP?", a: "VLOOKUP searches for a value in the first column of a table and returns a corresponding value from another column." },
            { q: "What is a Pivot Table?", a: "A Pivot Table summarizes large datasets by grouping, filtering, and calculating values easily." },
            { q: "What is data visualization?", a: "Data visualization represents data using charts, graphs, and dashboards to make insights easier to understand." },
            { q: "What is Power BI?", a: "Power BI is a business intelligence tool used to visualize data and share interactive reports." }
          ]
        },
        {
          id: 5,
          name: "Statistics & Metrics",
          questions: [
            { q: "What is correlation?", a: "Correlation measures the relationship between two variables (positive, negative, or zero)." },
            { q: "What is KPI?", a: "KPI (Key Performance Indicator) is a measurable value used to evaluate business performance." }
          ]
        }
      ]
    }
  };

  const trackData = tracks[trackId] || tracks['full-stack'];
  const filteredQuestions = trackData.categories[activeCategory]?.questions.filter(q => 
    q.q.toLowerCase().includes(searchQuery.toLowerCase())
  ) || [];

  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans flex flex-col">
      {/* Detail Navigation Bar */}
      <div className="bg-white/80 backdrop-blur-md sticky top-0 z-[100] border-b border-slate-100 py-4">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link to="/interview-questions" className="p-2 hover:bg-slate-50 rounded-xl transition-all text-slate-400 hover:text-[#14937a]">
              <ArrowLeft size={24} />
            </Link>
            <div className="hidden md:block">
              <h1 className="text-[#05243b] font-black text-lg leading-tight">{trackData.title}</h1>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{trackId.replace('-', ' ')} Track</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            <button className="p-2 text-slate-400 hover:text-[#14937a] transition-colors"><Share2 size={20} /></button>
            <button className="p-2 text-slate-400 hover:text-[#14937a] transition-colors"><Bookmark size={20} /></button>
            <button 
              className="lg:hidden p-2 text-[#05243b] hover:bg-slate-50 rounded-xl"
              onClick={() => setIsSidebarOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-1 max-w-7xl mx-auto w-full">
        {/* Sidebar Navigation */}
        <aside className={`
          fixed lg:sticky lg:top-24 h-full lg:h-[calc(100vh-120px)] w-[300px] bg-white lg:bg-transparent z-[110] lg:z-10
          transition-transform duration-500 lg:translate-x-0
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          border-r border-slate-100 lg:border-none p-6 overflow-y-auto
        `}>
          <div className="flex items-center justify-between lg:hidden mb-8">
            <h2 className="font-black text-[#05243b]">Categories</h2>
            <button onClick={() => setIsSidebarOpen(false)} className="p-2 hover:bg-slate-50 rounded-xl">
              <X size={20} />
            </button>
          </div>

          <div className="space-y-2">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4 px-2">Knowledge Domains</p>
            {trackData.categories.map((cat, idx) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(idx);
                  setIsSidebarOpen(false);
                  setExpandedQuestion(0);
                }}
                className={`
                  w-full text-left px-5 py-4 rounded-2xl transition-all flex items-center justify-between group
                  ${activeCategory === idx 
                    ? 'bg-[#14937a] text-white shadow-xl shadow-[#14937a]/20' 
                    : 'hover:bg-[#14937a]/5 text-slate-600 hover:text-[#14937a]'}
                `}
              >
                <div className="flex items-center gap-3">
                  <BookOpen size={18} className={activeCategory === idx ? 'text-white' : 'text-slate-300 group-hover:text-[#14937a]'} />
                  <span className="font-black text-sm tracking-tight">{cat.name}</span>
                </div>
                <ChevronRight size={16} className={`transition-transform ${activeCategory === idx ? 'rotate-90' : 'opacity-0 group-hover:opacity-100'}`} />
              </button>
            ))}
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 p-6 lg:p-10 lg:pl-12 max-w-4xl">
          {/* Track Header Card */}
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl mb-12 border border-slate-100 aspect-[2.5/1]">
            <img src={trackData.image} alt="header" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#05243b]/60 flex flex-col justify-center px-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-white/10 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest mb-4 w-fit">
                Professional Guide
              </div>
              <h2 className="text-2xl md:text-4xl font-black text-white leading-tight">
                {trackData.categories[activeCategory].name} Questions
              </h2>
            </div>
          </div>

          {/* Search Questions */}
          <div className="relative mb-12 group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-[#14937a] transition-colors" size={20} />
            <input 
              type="text"
              placeholder="Search within these questions..."
              className="w-full pl-16 pr-6 py-4 bg-white border border-slate-100 rounded-2xl focus:ring-2 focus:ring-[#14937a]/20 font-bold text-slate-600 transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Questions List */}
          <div className="space-y-6">
            {filteredQuestions.map((q, idx) => (
              <div 
                key={idx}
                className={`
                  transition-all duration-500 rounded-[2.5rem] overflow-hidden border
                  ${expandedQuestion === idx 
                    ? 'border-[#14937a]/30 bg-[#14937a]/5 shadow-xl shadow-[#14937a]/5' 
                    : 'border-slate-100 bg-white hover:border-[#14937a]/20'}
                `}
              >
                <button 
                  onClick={() => setExpandedQuestion(expandedQuestion === idx ? -1 : idx)}
                  className="w-full text-left px-8 py-6 flex items-center justify-between gap-6"
                >
                  <div className="flex gap-4 items-start">
                    <span className={`text-[16px] font-black mt-0.5 ${expandedQuestion === idx ? 'text-[#14937a]' : 'text-slate-300'}`}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[16px] md:text-[18px] font-black leading-snug text-[#05243b]">
                      {q.q}
                    </span>
                  </div>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    expandedQuestion === idx ? 'bg-[#14937a] text-white rotate-180' : 'bg-slate-50 text-[#14937a]'
                  }`}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    expandedQuestion === idx ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-8 pb-8 text-slate-500 text-[15px] font-medium leading-relaxed border-t border-[#14937a]/10 pt-6">
                    <div className="flex gap-4">
                      <div className="mt-1 shrink-0"><CheckCircle2 size={18} className="text-[#14937a]" /></div>
                      <p>{q.a}</p>
                    </div>
                    
                    <div className="mt-8 flex gap-4">
                      <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-100 text-[#05243b] text-[11px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all">
                        <MessageSquare size={14} className="text-[#14937a]" /> Discuss
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-100 text-[#05243b] text-[11px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all">
                        <HelpCircle size={14} className="text-[#14937a]" /> Ask Expert
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Mock */}
          {filteredQuestions.length > 0 && (
            <button className="w-full mt-12 py-5 rounded-[2rem] bg-[#05243b] text-white font-black text-sm uppercase tracking-widest hover:bg-[#14937a] transition-all shadow-xl shadow-[#05243b]/10">
              Load More Questions
            </button>
          )}

          {filteredQuestions.length === 0 && (
            <div className="text-center py-20 bg-white rounded-[3rem] border border-dashed border-slate-200">
              <Search className="mx-auto text-slate-200 mb-4" size={48} />
              <p className="text-slate-400 font-bold">No questions found matching your search.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default InterviewQuestionDetail;
