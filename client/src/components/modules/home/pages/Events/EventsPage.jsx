import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Calendar, 
  MapPin, 
  ArrowRight, 
  ChevronRight, 
  Clock, 
  Rocket, 
  Sparkles,
  CreditCard,
  Tag,
  X
} from 'lucide-react';

const EventsPage = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    dateRange: 'All Dates',
    paymentType: 'All',
    eventType: 'All Events'
  });

  const handleClearFilters = () => {
    setFilters({
      dateRange: 'All Dates',
      paymentType: 'All',
      eventType: 'All Events'
    });
    setSearchQuery('');
  };

  const pastEvents = [
    {
      id: 1,
      title: "AEO & GEO: The Future of Search & Visibility in the AI Era",
      date: "14/02/2026",
      location: "Egmore, Chennai",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      tag: "Workshop",
      color: "maroon"
    },
    {
      id: 2,
      title: "HR Meet 2025 | Shaping the Future of Human Resources",
      date: "19/09/2025",
      location: "WHY TAP, Egmore, Chennai",
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80",
      tag: "Networking",
      color: "teal"
    },
    {
      id: 3,
      title: "FREE Masterclass on Cyber Crime, Scams & Safety Hacks",
      date: "30/08/2025",
      location: "Egmore, Chennai",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80",
      tag: "Masterclass",
      color: "maroon"
    },
    {
      id: 4,
      title: "FREE Masterclass on SEO - How SEO works with your website",
      date: "23/08/2025",
      location: "WHY TAP, Egmore, Chennai",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80",
      tag: "Masterclass",
      color: "teal"
    }
  ];


  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans">
      {/* Premium Header Banner */}
      <div className="relative pt-24 pb-32 md:pt-32 md:pb-40 overflow-hidden bg-[#05243b]">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#14937a]/10 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#861B47]/10 rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4 pointer-events-none" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
            <Link to="/" className="text-[#14937a] hover:text-white transition-colors font-black uppercase tracking-widest text-[11px]">Home</Link>
            <ChevronRight size={14} className="text-white/20" />
            <span className="text-white/60 font-black uppercase tracking-widest text-[11px]">Events & Workshops</span>
          </div>

          <div className="max-w-4xl animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <Sparkles size={16} className="text-[#e8be66]" />
              <span className="text-white text-[11px] font-black uppercase tracking-widest">Learn from the best in the industry</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-8">
              Upcoming <span className="text-[#14937a]">Events</span> <br />
              & Workshops
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
              Join our exclusive webinars, masterclasses, and networking events to accelerate your career and stay ahead in the AI-powered digital world.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Controls Section */}
      <div className="max-w-7xl mx-auto px-6 -mt-12 relative z-20 pb-24">
        <div className="bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(5,36,59,0.08)] border border-slate-100 p-6 md:p-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="flex items-center gap-4 w-full lg:w-auto">
              {/* Filter Button */}
              <button 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className={`flex items-center gap-3 px-8 py-4 ${isFilterOpen ? 'bg-[#05243b]' : 'bg-[#14937a]'} text-white rounded-2xl font-black text-[13px] uppercase tracking-widest hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-[#861B47]/20 relative`}
              >
                <Filter size={18} />
                Filter Events
                {(filters.dateRange !== 'All Dates' || filters.paymentType !== 'All' || filters.eventType !== 'All Events') && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-black">
                    1
                  </div>
                )}
              </button>

              {/* Clear All Button */}
              {(searchQuery || filters.dateRange !== 'All Dates' || filters.paymentType !== 'All' || filters.eventType !== 'All Events') && (
                <button 
                  onClick={handleClearFilters}
                  className="flex items-center gap-2 text-slate-400 hover:text-[#14937a] font-bold text-sm transition-colors px-4"
                >
                  <X size={16} />
                  Clear All
                </button>
              )}
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:max-w-2xl group">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <Search size={20} className="text-slate-400 group-focus-within:text-[#14937a] transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Search workshops, webinars, or career events…" 
                className="w-full pl-16 pr-8 py-5 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:border-[#14937a] focus:bg-white transition-all font-bold text-[#05243b] shadow-inner"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Expandable Filter Panel */}
          {isFilterOpen && (
            <div className="mt-8 p-8 bg-[#f8f9fa] rounded-3xl border border-slate-100 animate-in slide-in-from-top-4 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Date Range Filter */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[#14937a]">
                    <Calendar size={18} className="font-bold" />
                    <span className="font-black text-[13px] uppercase tracking-widest">Date Range</span>
                  </div>
                  <select 
                    value={filters.dateRange}
                    onChange={(e) => setFilters({...filters, dateRange: e.target.value})}
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#861B47] font-bold text-[#05243b] appearance-none cursor-pointer"
                  >
                    <option>All Dates</option>
                    <option>Today</option>
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>Next Month</option>
                    <option>Custom Range (From - To)</option>
                  </select>
                </div>

                {/* Payment Type Filter */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[#14937a]">
                    <CreditCard size={18} />
                    <span className="font-black text-[13px] uppercase tracking-widest">Payment Type</span>
                  </div>
                  <select 
                    value={filters.paymentType}
                    onChange={(e) => setFilters({...filters, paymentType: e.target.value})}
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#861B47] font-bold text-[#05243b] appearance-none cursor-pointer"
                  >
                    <option value="All">All Types</option>
                    <option value="Free">Free</option>
                    <option value="Paid">Paid</option>
                  </select>
                </div>

                {/* Event Type Filter */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[#14937a]">
                    <Tag size={18} />
                    <span className="font-black text-[13px] uppercase tracking-widest">Event Type</span>
                  </div>
                  <select 
                    value={filters.eventType}
                    onChange={(e) => setFilters({...filters, eventType: e.target.value})}
                    className="w-full px-5 py-4 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-[#861B47] font-bold text-[#05243b] appearance-none cursor-pointer"
                  >
                    <option>All Events</option>
                    <option>Workshop</option>
                    <option>Masterclass</option>
                    <option>Webinar</option>
                    <option>Networking</option>
                  </select>
                </div>
              </div>
            </div>
          )}


          {/* Tabs Section */}
          <div className="flex justify-center mt-12 border-b border-slate-100">
            <div className="flex gap-12 relative">
              <button 
                onClick={() => setActiveTab('upcoming')}
                className={`pb-4 text-[15px] font-black uppercase tracking-[0.2em] transition-all relative ${activeTab === 'upcoming' ? 'text-[#14937a]' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Upcoming Events
                {activeTab === 'upcoming' && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#14937a] rounded-full animate-in fade-in slide-in-from-bottom-2" />}
              </button>
              <button 
                onClick={() => setActiveTab('past')}
                className={`pb-4 text-[15px] font-black uppercase tracking-[0.2em] transition-all relative ${activeTab === 'past' ? 'text-[#14937a]' : 'text-slate-400 hover:text-slate-600'}`}
              >
                Past Events
                {activeTab === 'past' && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#14937a] rounded-full animate-in fade-in slide-in-from-bottom-2" />}
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="mt-16 min-h-[400px]">
            {activeTab === 'upcoming' ? (
              <div className="flex flex-col items-center justify-center py-20 animate-in fade-in zoom-in-95 duration-500">
                <div className="w-24 h-24 bg-[#14937a]/5 rounded-full flex items-center justify-center mb-8 relative">
                  <Calendar size={40} className="text-[#14937a] relative z-10" />
                  <div className="absolute inset-0 bg-[#14937a]/10 rounded-full animate-ping" />
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-[#05243b] mb-4 text-center">
                  No Upcoming Events Right Now 🚀
                </h2>
                <p className="text-slate-500 text-lg font-medium text-center max-w-md leading-relaxed">
                  But don’t worry — exciting workshops and career sessions are coming soon! Stay tuned and follow our social media for updates.
                </p>
                <button className="mt-10 px-8 py-4 bg-[#05243b] text-white rounded-2xl font-black text-[13px] uppercase tracking-widest hover:bg-[#14937a] transition-all active:scale-95 shadow-xl shadow-[#05243b]/10">
                  Notify Me of New Events
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                {pastEvents
                  .filter(event => event.title.toLowerCase().includes(searchQuery.toLowerCase()) || event.location.toLowerCase().includes(searchQuery.toLowerCase()))
                  .map((event) => (
                  <div key={event.id} className="group bg-white rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-[0_30px_60px_rgba(5,36,59,0.1)] transition-all duration-500 flex flex-col h-full">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#05243b]/80 to-transparent opacity-60" />
                      <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-[#05243b]">
                        {event.tag}
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 text-[#14937a] font-bold text-[11px] uppercase tracking-widest mb-4">
                        <Calendar size={14} />
                        {event.date}
                      </div>
                      <h3 className="text-[17px] font-black text-[#05243b] leading-tight mb-4 group-hover:text-[#14937a] transition-colors line-clamp-2">
                        {event.title}
                      </h3>
                      <div className="flex items-center gap-2 text-slate-400 font-bold text-[12px] mb-8">
                        <MapPin size={14} />
                        {event.location}
                      </div>
                      <Link 
                        to={`/event/${event.id}`}
                        className="mt-auto flex items-center justify-between w-full py-3 px-6 rounded-xl border border-slate-100 text-[#05243b] font-black text-[11px] uppercase tracking-widest hover:bg-[#05243b] hover:text-white transition-all group/btn"
                      >
                        Read More
                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
