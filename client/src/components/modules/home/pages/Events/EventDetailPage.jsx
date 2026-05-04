import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  ArrowLeft, 
  Share2, 
  CheckCircle,
  Video
} from 'lucide-react';

const EventDetailPage = () => {
  const { id } = useParams();

  // Mock data for detail view
  const event = {
    title: "AEO & GEO: The Future of Search & Visibility in the AI Era",
    date: "14/02/2026",
    time: "10:00 AM - 01:00 PM",
    location: "Egmore, Chennai",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200&q=80",
    description: "Discover how AI is revolutionizing search engines and how businesses can adapt their SEO and GEO strategies to remain visible. This workshop covers the shift from traditional keyword search to generative engine optimization.",
    organizer: "BM Academy Tech Team",
    highlights: [
      "Introduction to Generative Engine Optimization (GEO)",
      "How AI Agents process web information",
      "Strategies for AEO (Answer Engine Optimization)",
      "Hands-on visibility audit techniques"
    ]
  };

  return (
    <div className="min-h-screen bg-[#fcfcfc] font-sans pb-24">
      {/* Top Navigation */}
      <div className="bg-white border-b border-slate-100 py-6 sticky top-20 z-40 backdrop-blur-md bg-white/80">
        <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
          <Link to="/events" className="flex items-center gap-2 text-slate-500 hover:text-[#14937a] transition-colors font-bold text-sm">
            <ArrowLeft size={18} />
            Back to Events
          </Link>
          <button className="p-2.5 rounded-xl border border-slate-100 text-slate-400 hover:text-[#14937a] hover:bg-slate-50 transition-all">
            <Share2 size={20} />
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 pt-12">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#14937a]/10 text-[#14937a] text-[10px] font-black uppercase tracking-widest mb-6">
              Workshop
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-[#05243b] leading-tight mb-8">
              {event.title}
            </h1>

            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 border border-slate-100">
              <img 
                src={event.image} 
                alt={event.title} 
                className="w-full aspect-video object-cover"
              />
            </div>

            <div className="prose prose-slate max-w-none">
              <h2 className="text-2xl font-black text-[#05243b] mb-6">About this Event</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                {event.description}
              </p>

              <h3 className="text-xl font-black text-[#05243b] mb-6">Event Highlights</h3>
              <div className="grid gap-4 mb-12">
                {event.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-50 shadow-sm">
                    <CheckCircle className="text-[#14937a] shrink-0 mt-1" size={20} />
                    <span className="text-[#05243b] font-bold">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar Info */}
          <div className="lg:col-span-4">
            <div className="sticky top-40 space-y-8">
              {/* Event Meta Card */}
              <div className="bg-white rounded-[2rem] border border-slate-100 shadow-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#14937a]">
                      <Calendar size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Date</p>
                      <p className="text-[#05243b] font-black">{event.date}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#14937a]">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Time</p>
                      <p className="text-[#05243b] font-black">{event.time}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#14937a]">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Location</p>
                      <p className="text-[#05243b] font-black">{event.location}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-[#14937a]">
                      <Video size={24} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Format</p>
                      <p className="text-[#05243b] font-black">In-Person & Online</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-slate-100">
                  <button className="w-full py-5 bg-[#14937a] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#05243b] transition-all shadow-xl shadow-[#14937a]/20 active:scale-95">
                    Register Now
                  </button>
                  <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-widest mt-4">
                    Limited Seats Available
                  </p>
                </div>
              </div>

              {/* Need Help Card */}
              <div className="bg-[#05243b] rounded-[2rem] p-8 text-white relative overflow-hidden">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#14937a]/20 rounded-full blur-2xl" />
                <h4 className="text-xl font-black mb-2 relative z-10">Need Help?</h4>
                <p className="text-white/60 text-sm font-medium mb-6 relative z-10">Have questions about this event? Our team is here to help you.</p>
                <button className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white font-bold text-sm transition-all relative z-10">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;
