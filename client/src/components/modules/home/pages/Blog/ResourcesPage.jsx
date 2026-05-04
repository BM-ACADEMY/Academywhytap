import React, { useState } from 'react';
import {
  Download, FileText, X, ChevronRight, Sparkles,
  Code, Globe, BarChart, Film, Check, BookOpen, Users, Award
} from 'lucide-react';

const courses = [
  {
    id: 'full-stack',
    title: 'Full Stack Development',
    subtitle: 'AI-Powered Full Stack (MERN)',
    icon: <Code size={32} />,
    color: '#2563eb',
    gradient: 'from-blue-600 to-blue-400',
    bgLight: '#eff6ff',
    duration: '6 Months',
    modules: 12,
    pages: '28 Pages',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
    topics: ['HTML, CSS & JavaScript', 'React & Next.js', 'Node.js & Express', 'MongoDB & SQL', 'REST API & GraphQL', 'DevOps & Cloud'],
    whatsappText: 'Hi, I want to download the Full Stack Development syllabus.'
  },
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    subtitle: 'AI-Powered Digital Marketing',
    icon: <Globe size={32} />,
    color: '#db2777',
    gradient: 'from-pink-600 to-rose-400',
    bgLight: '#fdf2f8',
    duration: '4 Months',
    modules: 10,
    pages: '22 Pages',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    topics: ['SEO & SEM', 'Google Ads', 'Social Media Marketing', 'Content Marketing', 'Email Marketing', 'Analytics & AI Tools'],
    whatsappText: 'Hi, I want to download the Digital Marketing syllabus.'
  },
  {
    id: 'data-analytics',
    title: 'Data Analytics',
    subtitle: 'AI-Powered Data Analytics',
    icon: <BarChart size={32} />,
    color: '#7c3aed',
    gradient: 'from-violet-600 to-purple-400',
    bgLight: '#f5f3ff',
    duration: '5 Months',
    modules: 11,
    pages: '24 Pages',
    image: 'https://images.unsplash.com/photo-1551288049-bbda38a5f9a2?w=600&q=80',
    topics: ['Excel & SQL', 'Python for Data Analysis', 'Power BI & Tableau', 'Statistics & Probability', 'Data Cleaning & ETL', 'Dashboard Design'],
    whatsappText: 'Hi, I want to download the Data Analytics syllabus.'
  },
  {
    id: 'video-editing',
    title: 'Video Editing & AI Tools',
    subtitle: 'Creative Video Editing',
    icon: <Film size={32} />,
    color: '#ea580c',
    gradient: 'from-orange-600 to-amber-400',
    bgLight: '#fff7ed',
    duration: '3 Months',
    modules: 8,
    pages: '18 Pages',
    image: 'https://images.unsplash.com/photo-1574717024453-354056aafa98?w=600&q=80',
    topics: ['Premiere Pro Basics', 'Color Grading & LUTs', 'Motion Graphics', 'Audio Mixing', 'YouTube & Social Editing', 'AI Video Tools'],
    whatsappText: 'Hi, I want to download the Video Editing & AI Tools syllabus.'
  }
];

const ResourcesPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [form, setForm] = useState({ name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const openModal = (course) => {
    setSelectedCourse(course);
    setForm({ name: '', phone: '', email: '' });
    setSubmitted(false);
  };

  const closeModal = () => {
    setSelectedCourse(null);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone) return;
    setSubmitted(true);
    const message = encodeURIComponent(
      `${selectedCourse.whatsappText}\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || 'Not provided'}`
    );
    setTimeout(() => {
      window.open(`https://wa.me/919944940051?text=${message}`, '_blank');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] font-sans pb-24">

      {/* Hero Banner */}
      <div className="relative pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden bg-[#05243b]">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1600&q=80" alt="" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05243b]/95 via-[#05243b]/80 to-[#05243b]" />
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#14937a]/20 rounded-full blur-[120px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <Sparkles size={14} className="text-[#e8be66]" />
            <span className="text-white text-[10px] font-black uppercase tracking-widest">Free Downloads</span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight">
            Course <span className="text-[#14937a]">Resources</span>
          </h1>
          <p className="text-slate-300 text-base md:text-xl leading-relaxed font-medium max-w-2xl mx-auto">
            Download free course syllabi for all our tracks. Get a complete overview of what you'll learn before you enroll.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap items-center justify-center gap-8 mt-12">
            {[
              { icon: <BookOpen size={18} />, label: '4 Course Syllabi' },
              { icon: <Users size={18} />, label: '500+ Students Enrolled' },
              { icon: <Award size={18} />, label: '100% Placement Support' }
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2 text-white/70 font-bold text-sm">
                <span className="text-[#14937a]">{stat.icon}</span>
                {stat.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-500"
            >
              {/* Card Header Image */}
              <div className="relative h-52 overflow-hidden">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to bottom, ${course.color}60, ${course.color}dd)` }} />
                {/* Icon & Title */}
                <div className="absolute bottom-0 left-0 p-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white shadow-xl">
                      {course.icon}
                    </div>
                    <div>
                      <p className="text-white/70 text-[10px] font-black uppercase tracking-widest mb-0.5">{course.subtitle}</p>
                      <h2 className="text-white font-black text-xl leading-tight">{course.title}</h2>
                    </div>
                  </div>
                </div>
                {/* Pages Badge */}
                <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-1.5">
                  <FileText size={12} />
                  {course.pages}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8">
                {/* Meta Chips */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider" style={{ backgroundColor: `${course.color}15`, color: course.color }}>
                    {course.duration}
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-slate-100 text-slate-500">
                    {course.modules} Modules
                  </span>
                  <span className="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-[#14937a]/10 text-[#14937a]">
                    Free Download
                  </span>
                </div>

                {/* Topics */}
                <div className="grid grid-cols-2 gap-2.5 mb-8">
                  {course.topics.map((topic, i) => (
                    <div key={i} className="flex items-center gap-2 text-[13px] text-slate-500 font-bold">
                      <Check size={14} className="shrink-0" style={{ color: course.color }} />
                      {topic}
                    </div>
                  ))}
                </div>

                {/* Download Button */}
                <button
                  onClick={() => openModal(course)}
                  className="w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest text-white flex items-center justify-center gap-3 transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 shadow-xl"
                  style={{ backgroundColor: course.color, boxShadow: `0 10px 30px ${course.color}30` }}
                >
                  <Download size={18} />
                  Download Syllabus
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Download Modal */}
      {selectedCourse && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeModal} />

          {/* Modal Card */}
          <div className="relative bg-white rounded-[2.5rem] w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="relative p-8 pb-6" style={{ background: `linear-gradient(135deg, ${selectedCourse.color}, ${selectedCourse.color}cc)` }}>
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full translate-x-1/2 -translate-y-1/2" />
              </div>
              <button onClick={closeModal} className="absolute top-5 right-5 w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all">
                <X size={18} />
              </button>
              <div className="relative z-10 flex items-center gap-4">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                  {selectedCourse.icon}
                </div>
                <div>
                  <p className="text-white/70 text-[10px] font-black uppercase tracking-widest mb-1">Free Syllabus</p>
                  <h3 className="text-white font-black text-xl">{selectedCourse.title}</h3>
                </div>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-8">
              {!submitted ? (
                <>
                  <p className="text-slate-500 font-medium text-sm mb-6 leading-relaxed">
                    Enter your details below and we'll send your syllabus instantly via WhatsApp.
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-[11px] font-black text-[#05243b] uppercase tracking-wider mb-2">Full Name *</label>
                      <input
                        required
                        type="text"
                        placeholder="e.g. John Doe"
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#14937a] focus:ring-4 focus:ring-[#14937a]/10 outline-none transition-all text-[#05243b] font-bold placeholder:text-slate-300 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-black text-[#05243b] uppercase tracking-wider mb-2">Phone Number *</label>
                      <div className="flex gap-2">
                        <div className="px-4 py-3.5 rounded-2xl bg-slate-100 border border-slate-200 text-[#05243b] font-black text-sm flex items-center">+91</div>
                        <input
                          required
                          type="tel"
                          placeholder="10 Digit Number"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#14937a] focus:ring-4 focus:ring-[#14937a]/10 outline-none transition-all text-[#05243b] font-bold placeholder:text-slate-300 text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-black text-[#05243b] uppercase tracking-wider mb-2">Email Address (Optional)</label>
                      <input
                        type="email"
                        placeholder="name@email.com"
                        value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 focus:border-[#14937a] focus:ring-4 focus:ring-[#14937a]/10 outline-none transition-all text-[#05243b] font-bold placeholder:text-slate-300 text-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest text-white flex items-center justify-center gap-3 transition-all hover:opacity-90 shadow-xl mt-2"
                      style={{ backgroundColor: selectedCourse.color, boxShadow: `0 10px 30px ${selectedCourse.color}30` }}
                    >
                      <Download size={18} /> Get Syllabus on WhatsApp
                    </button>
                    <p className="text-slate-400 text-[11px] text-center font-medium pt-1">
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                </>
              ) : (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-[#14937a]/10 rounded-full flex items-center justify-center mx-auto mb-5">
                    <Check size={36} className="text-[#14937a]" />
                  </div>
                  <h4 className="text-[#05243b] font-black text-xl mb-2">Opening WhatsApp!</h4>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed">
                    Your syllabus request is being sent via WhatsApp. Our team will share the PDF with you shortly.
                  </p>
                  <button
                    onClick={closeModal}
                    className="mt-6 px-8 py-3 rounded-full border-2 border-slate-200 text-slate-500 font-black text-sm hover:bg-slate-50 transition-all"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResourcesPage;
