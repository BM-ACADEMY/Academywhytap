import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Clock, Users, Star, ChevronRight, Award, Briefcase, Video } from 'lucide-react';

const learnings = [
  'Video Editing Fundamentals',
  'Adobe Premiere Pro Mastery',
  'After Effects for Motion Graphics',
  'Color Grading & Correction',
  'Sound Design & Audio Editing',
  'AI Tools for Automated Editing',
  'Social Media Content Creation',
  'Portfolio & Client Management',
];

const curriculum = [
  { module: 'Module 1', title: 'Editing Basics', topics: ['Software Interface', 'Timeline Management', 'Cutting Techniques'] },
  { module: 'Module 2', title: 'Advanced Visuals', topics: ['Transitions & Effects', 'Color Grading', 'Text & Titles'] },
  { module: 'Module 3', title: 'Motion Graphics', topics: ['After Effects Basics', 'Keyframing', 'Compositing'] },
  { module: 'Module 4', title: 'AI & Sound', topics: ['AI Voiceovers', 'Auto-Captions', 'Sound Mixing'] },
  { module: 'Module 5', title: 'Professional Path', topics: ['Short-form Content', 'YouTube SEO', 'Freelancing Tips'] },
];

const stats = [
  { value: '3 / 6 Months', label: 'Duration' },
  { value: '3200+', label: 'Students Enrolled' },
  { value: '4.6 ★', label: 'Average Rating' },
  { value: '90%', label: 'Placement Rate' },
];

const VideoEditing = () => {
  const [openModule, setOpenModule] = React.useState(0);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero */}
      <div className="relative py-16 md:py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #02182b 0%, #05243b 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1400&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4 flex-wrap">
              <Link to="/" className="text-[#14937a] text-[12px] font-bold uppercase tracking-wider hover:underline">Home</Link>
              <ChevronRight size={13} className="text-gray-500" />
              <Link to="/courses" className="text-[#14937a] text-[12px] font-bold uppercase tracking-wider hover:underline">Courses</Link>
              <ChevronRight size={13} className="text-gray-500" />
              <span className="text-white/60 text-[12px] font-bold uppercase tracking-wider">Video Editing</span>
            </div>
            <span className="inline-block bg-[#e8be66] text-[#05243b] text-[10px] font-black px-3 py-1 rounded-full mb-4 tracking-wider uppercase">Creative</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-4">
              Basic to Advanced<br />
              <span className="text-[#14937a]">Video Editing with AI</span>
            </h1>
            <p className="text-slate-300 text-base md:text-lg mb-8 leading-relaxed max-w-xl">
              Master the art of storytelling through video. Learn industry-standard tools like Premiere Pro and After Effects, enhanced by the latest AI technologies.
            </p>
            <div className="flex flex-wrap gap-5 mb-8">
              <div className="flex items-center gap-2 text-slate-300 text-sm"><Clock size={16} className="text-[#14937a]" /><span>3 / 6 Months</span></div>
              <div className="flex items-center gap-2 text-slate-300 text-sm"><Users size={16} className="text-[#14937a]" /><span>3200+ Students</span></div>
              <div className="flex items-center gap-2 text-slate-300 text-sm"><Star size={16} fill="#e8be66" stroke="#e8be66" /><span>4.6 Rating</span></div>
            </div>
            <div className="flex gap-4 flex-wrap">
              <button className="px-8 py-3.5 rounded-full font-bold text-white text-[15px] bg-[#14937a] hover:bg-[#117a65] transition-all shadow-lg shadow-[#14937a]/20 active:scale-95">
                Enroll Now
              </button>
              <button className="px-8 py-3.5 rounded-full font-bold text-white border-2 border-slate-500 hover:border-slate-300 hover:bg-white/5 transition-all text-[15px]">
                Download Syllabus
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <img src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=700&q=80" alt="Video Editing" className="rounded-[2rem] shadow-2xl w-full h-80 object-cover border-4 border-white/10" />
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white py-8 border-b border-slate-100 relative z-20">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center border-r last:border-none border-slate-200/50 px-4">
              <div className="text-3xl font-black text-[#a67c00] mb-1">{s.value}</div>
              <div className="text-[11px] font-bold text-slate-500 tracking-widest uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-16">
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Video size={32} className="text-[#14937a]" />
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#05243b]">What You'll Learn</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {learnings.map((l, i) => (
                <div key={i} className="flex items-center gap-3 bg-[#fcfcfc] border border-slate-100 rounded-2xl px-5 py-4 hover:border-[#14937a]/30 hover:shadow-md transition-all group">
                  <CheckCircle size={18} className="text-[#14937a] shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-[#05243b] text-sm font-semibold">{l}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#05243b] mb-8">Course Curriculum</h2>
            <div className="space-y-4">
              {curriculum.map((m, i) => (
                <div key={i} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${openModule === i ? 'border-[#14937a]/30 shadow-md' : 'border-slate-100'}`}>
                  <button
                    onClick={() => setOpenModule(openModule === i ? null : i)}
                    className={`w-full flex items-center justify-between px-6 py-5 transition-colors text-left ${openModule === i ? 'bg-slate-50' : 'bg-white hover:bg-slate-50'}`}
                  >
                    <div>
                      <span className="text-[10px] text-[#14937a] font-black uppercase tracking-widest">{m.module}</span>
                      <p className="text-[#05243b] font-extrabold text-[17px] mt-0.5">{m.title}</p>
                    </div>
                    <ChevronRight size={20} className={`text-slate-400 transition-transform duration-300 ${openModule === i ? 'rotate-90 text-[#14937a]' : ''}`} />
                  </button>
                  {openModule === i && (
                    <div className="px-8 py-6 bg-white border-t border-slate-50">
                      <ul className="space-y-3">
                        {m.topics.map((t, j) => (
                          <li key={j} className="flex items-center gap-3 text-slate-600 text-[15px] font-medium">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#14937a]" />{t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="relative">
          <div className="bg-white border border-slate-100 rounded-[2rem] shadow-xl p-8 sticky top-24 overflow-hidden">
            {/* Bubble Decoration */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-[#14937a]/5 rounded-bl-[100%] pointer-events-none translate-x-1/4 -translate-y-1/4"></div>
            
            <img src="https://images.unsplash.com/photo-1524678714210-9917a6c619c2?w=400&q=80" alt="course" className="rounded-2xl w-full h-44 object-cover mb-6 border border-slate-100 shadow-sm" />
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-slate-600 font-bold text-[14px]"><Clock size={18} className="text-[#14937a]" /><span>Duration: <strong className="text-[#05243b]">3 / 6 Months</strong></span></div>
              <div className="flex items-center gap-3 text-slate-600 font-bold text-[14px]"><Users size={18} className="text-[#14937a]" /><span>Students: <strong className="text-[#05243b]">3200+</strong></span></div>
              <div className="flex items-center gap-3 text-slate-600 font-bold text-[14px]"><Award size={18} className="text-[#14937a]" /><span>Certification: <strong className="text-[#05243b]">Certification</strong></span></div>
              <div className="flex items-center gap-3 text-slate-600 font-bold text-[14px]"><Briefcase size={18} className="text-[#14937a]" /><span>Placement: <strong className="text-[#05243b]">Assistance</strong></span></div>
            </div>
            
            <button className="w-full py-4 rounded-xl font-bold text-white text-[15px] mb-4 bg-[#05243b] hover:bg-[#14937a] transition-all duration-300 shadow-md uppercase tracking-wider active:scale-95">
              Enroll Now
            </button>
            <button className="w-full py-4 rounded-xl font-bold text-[#05243b] border-2 border-[#05243b] hover:bg-[#05243b] hover:text-white transition-all duration-300 text-[15px] uppercase tracking-wider">
              Download Brochure
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoEditing;
