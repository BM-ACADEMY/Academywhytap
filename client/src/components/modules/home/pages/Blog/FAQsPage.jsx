import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageCircle, Code, Globe, BarChart, Film } from 'lucide-react';

const tracks = [
  {
    id: 'general',
    label: 'General',
    icon: <HelpCircle size={20} />,
    color: '#14937a',
    faqs: [
      { q: "What makes BM Academy different from other training institutes?", a: "BM Academy focuses on practical, job-oriented training with real-time projects, expert mentorship, and career guidance to help students become industry-ready." },
      { q: "Are you going to give placement support after the completion of any course?", a: "Yes, we provide full placement support including resume building, interview preparation, and job guidance to help you start your career." },
      { q: "What courses do you offer?", a: "We offer courses in Full Stack Development, Data Analytics, AI Digital Marketing, and Creative Video Editing, designed for beginners and professionals." },
      { q: "Do you provide practical experience of working on Live projects?", a: "Yes, all our courses include real-time projects and practical sessions to ensure you gain industry-level experience." },
      { q: "Is there a flexible learning option available?", a: "Yes, we provide flexible learning options, including classroom and online sessions based on your convenience." },
      { q: "How to enroll for a course in BM Academy?", a: "You can enroll by contacting us directly, visiting our center, or filling out the enquiry form on our website." },
    ]
  },
  {
    id: 'full-stack',
    label: 'Full Stack Development',
    icon: <Code size={20} />,
    color: '#2563eb',
    faqs: [
      { q: "What is the Full Stack Development course at BM Academy?", a: "This course is designed to teach both frontend and backend development, including technologies like HTML, CSS, JavaScript, React, Node.js, and databases. It focuses on practical learning through real-time projects." },
      { q: "Who can join this Full Stack Development course?", a: "Students, fresh graduates, and working professionals who want to start or switch to a career in web development can join this course. No specific background is required." },
      { q: "Do I need prior programming knowledge?", a: "No, prior programming experience is not required. The course starts from basics and gradually moves to advanced concepts." },
      { q: "What job roles can I apply for after completing the course?", a: "You can apply for roles such as Frontend Developer, Backend Developer, Full Stack Developer, and JavaScript Developer." },
      { q: "Will I receive a certificate after completion?", a: "Yes, you will receive a course completion certificate from BM Academy after successfully finishing the training." },
      { q: "Does BM Academy provide placement support?", a: "Yes, we provide career guidance including resume building, interview preparation, and job support to help you start your career." },
      { q: "Will I get practical experience during the course?", a: "Yes, the course includes hands-on practice and real-time projects to help you gain practical development experience." },
    ]
  },
  {
    id: 'digital-marketing',
    label: 'Digital Marketing',
    icon: <Globe size={20} />,
    color: '#db2777',
    faqs: [
      { q: "What is AI-Powered Digital Marketing?", a: "AI-Powered Digital Marketing uses smart tools and automation to improve SEO, content creation, ads, and data analysis, making marketing more efficient and result-driven." },
      { q: "Who can enroll in this course?", a: "This course is suitable for students, graduates, job seekers, entrepreneurs, and anyone looking to build a career in digital marketing. No prior experience is required." },
      { q: "What makes this a practical training program?", a: "At BM Academy, you will learn through hands-on training, real-time projects, and tool-based learning instead of only theory." },
      { q: "What career opportunities are available after this course?", a: "You can apply for roles like Digital Marketing Executive, SEO Specialist, Social Media Manager, Content Marketer, or start freelancing or your own business." },
      { q: "Will I receive a certificate after completion?", a: "Yes, you will receive a course completion certificate from BM Academy after successfully finishing the program." },
      { q: "Do you provide placement support?", a: "Yes, we provide placement support including resume building, interview preparation, and career guidance to help you secure job opportunities." },
    ]
  },
  {
    id: 'data-analytics',
    label: 'Data Analytics',
    icon: <BarChart size={20} />,
    color: '#7c3aed',
    faqs: [
      { q: "What will I learn in the Data Analytics course?", a: "You will learn Excel, SQL, Python/R basics, Power BI, Tableau, and Google Analytics, along with data cleaning, visualization, and storytelling." },
      { q: "Do I need a mathematics or statistics background?", a: "No, you don't need an advanced math background. The course covers all the statistics you need from scratch in a practical and easy-to-understand way." },
      { q: "What tools will I be trained on?", a: "You will be trained on Excel, SQL, Python, Power BI, Tableau, and Google Analytics — all the industry-standard tools used by data analysts." },
      { q: "Is this course practical or theory-based?", a: "BM Academy follows a practical-first approach. You will work on real datasets, case studies, and live projects to build strong analytical skills." },
      { q: "What jobs can I get after this course?", a: "You can work as a Data Analyst, Business Intelligence Analyst, Reporting Analyst, or pursue roles in data visualization and business analytics." },
      { q: "Will I get a certificate after completion?", a: "Yes, you will receive a BM Academy certificate upon completion, which you can showcase to employers and add to your LinkedIn profile." },
    ]
  },
  {
    id: 'video-editing',
    label: 'Video Editing',
    icon: <Film size={20} />,
    color: '#ea580c',
    faqs: [
      { q: "What is the duration of the course?", a: "The course duration is approximately 3 to 6 months, depending on the batch and learning pace, with structured modules and practical sessions." },
      { q: "Is the course suitable for beginners?", a: "Yes, this course is beginner-friendly and starts from the basics, making it suitable for students with no prior experience." },
      { q: "What is the mode of training?", a: "We offer classroom and online training, allowing students to learn in a flexible and convenient way." },
      { q: "What teaching methods are used in this course?", a: "BM Academy follows a practical learning approach with live projects, hands-on training, and real-time guidance from trainers." },
      { q: "Will I work on real-world projects?", a: "Yes, students will work on real-time projects to build a strong portfolio and gain practical experience." },
      { q: "Will I receive a certificate after completion?", a: "Yes, you will receive a course completion certificate from BM Academy." },
      { q: "Do you provide placement support?", a: "Yes, we provide career guidance, portfolio support, and interview preparation to help you start your career." },
    ]
  }
];

const FAQsPage = () => {
  const [activeTrack, setActiveTrack] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(0);

  const currentTrack = tracks[activeTrack];

  const handleTrackChange = (idx) => {
    setActiveTrack(idx);
    setExpandedFaq(0);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans pb-24">
      {/* Premium Banner */}
      <div className="relative pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden bg-[#05243b]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=80"
            alt="background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05243b]/95 via-[#05243b]/80 to-[#05243b]" />
          <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[#14937a]/20 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles size={14} className="text-[#e8be66]" />
            <span className="text-white text-[10px] font-black uppercase tracking-widest">Got Questions?</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
            Frequently Asked <span className="text-[#14937a]">Questions</span>
          </h1>
          <p className="text-slate-300 text-base md:text-xl leading-relaxed font-medium max-w-2xl mx-auto">
            Everything you need to know about our courses, training process, and career support — answered by our team.
          </p>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="flex flex-col lg:flex-row gap-10">

          {/* Sidebar Track Selector */}
          <aside className="lg:w-72 shrink-0">
            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl p-6 lg:sticky lg:top-28">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-5 px-2">Browse by Track</p>
              <div className="space-y-2">
                {tracks.map((track, idx) => (
                  <button
                    key={track.id}
                    onClick={() => handleTrackChange(idx)}
                    className={`w-full text-left px-5 py-4 rounded-2xl transition-all flex items-center gap-4 group ${
                      activeTrack === idx
                        ? 'text-white shadow-xl'
                        : 'hover:bg-slate-50 text-slate-600'
                    }`}
                    style={activeTrack === idx ? { backgroundColor: track.color } : {}}
                  >
                    <div className={`shrink-0 ${activeTrack === idx ? 'text-white' : 'text-slate-300 group-hover:text-[#14937a]'}`}>
                      {track.icon}
                    </div>
                    <span className="font-black text-sm leading-tight">{track.label}</span>
                  </button>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 p-6 bg-[#05243b] rounded-[2rem] text-center">
                <MessageCircle size={28} className="text-[#14937a] mx-auto mb-3" />
                <p className="text-white font-black text-sm mb-2">Still have questions?</p>
                <p className="text-slate-400 text-[11px] font-medium mb-4">Our team is ready to help you.</p>
                <button
                  onClick={() => window.open('https://wa.me/919944940051', '_blank')}
                  className="w-full py-3 bg-[#14937a] text-white font-black text-[11px] uppercase tracking-widest rounded-xl hover:bg-white hover:text-[#05243b] transition-all"
                >
                  Talk to an Expert
                </button>
              </div>
            </div>
          </aside>

          {/* FAQ List */}
          <main className="flex-1">
            {/* Track Header */}
            <div
              className="flex items-center gap-4 p-8 rounded-[2.5rem] mb-8 border border-white/10"
              style={{ background: `linear-gradient(135deg, ${currentTrack.color}15, ${currentTrack.color}05)`, borderColor: `${currentTrack.color}20` }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-xl shrink-0"
                style={{ backgroundColor: currentTrack.color }}
              >
                {currentTrack.icon}
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest mb-1" style={{ color: currentTrack.color }}>FAQ Category</p>
                <h2 className="text-2xl font-black text-[#05243b]">{currentTrack.label}</h2>
                <p className="text-slate-400 text-sm font-medium">{currentTrack.faqs.length} questions answered</p>
              </div>
            </div>

            {/* Questions */}
            <div className="space-y-4">
              {currentTrack.faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className={`transition-all duration-300 rounded-[2.5rem] overflow-hidden border ${
                    expandedFaq === idx
                      ? 'shadow-xl'
                      : 'border-slate-100 bg-white hover:border-slate-200'
                  }`}
                  style={expandedFaq === idx ? { borderColor: `${currentTrack.color}40`, background: `${currentTrack.color}05` } : {}}
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === idx ? -1 : idx)}
                    className="w-full text-left px-8 py-6 flex items-center justify-between gap-6"
                  >
                    <div className="flex gap-4 items-start">
                      <span
                        className="text-[16px] font-black mt-0.5 shrink-0"
                        style={{ color: expandedFaq === idx ? currentTrack.color : '#cbd5e1' }}
                      >
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[16px] md:text-[18px] font-black leading-snug text-[#05243b]">
                        {faq.q}
                      </span>
                    </div>
                    <div
                      className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all text-white ${
                        expandedFaq === idx ? 'rotate-180' : 'bg-slate-100 !text-slate-400'
                      }`}
                      style={expandedFaq === idx ? { backgroundColor: currentTrack.color } : {}}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </button>

                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedFaq === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-8 pb-8 pt-2">
                      <div className="h-px bg-slate-100 mb-6" style={expandedFaq === idx ? { backgroundColor: `${currentTrack.color}20` } : {}} />
                      <div className="flex gap-4 text-slate-500 text-[15px] font-medium leading-relaxed">
                        <span className="shrink-0 text-lg">👉</span>
                        <p>{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default FAQsPage;
