import React from 'react';
import { 
  ShieldCheck, 
  Laptop, 
  Award, 
  Users, 
  BadgeIndianRupee, 
  MessageSquare, 
  Cpu, 
  Monitor, 
  ChevronRight 
} from 'lucide-react';

const WhyChoose = () => {
  const features = [
    {
      id: "01",
      title: "100% Placement Support",
      desc: "Get career guidance, resume building, and interview preparation to help you land your first job.",
      icon: <ShieldCheck size={28} className="text-[#14937a]" />,
    },
    {
      id: "02",
      title: "Real-Time Projects",
      desc: "Work on live projects to gain practical experience in real-world scenarios.",
      icon: <Laptop size={28} className="text-[#14937a]" />,
    },
    {
      id: "03",
      title: "Industry-Recognized Certification",
      desc: "Earn certifications that add value to your resume and boost your career opportunities.",
      icon: <Award size={28} className="text-[#14937a]" />,
    },
    {
      id: "04",
      title: "Learn from Industry Mentors",
      desc: "Get trained by experienced professionals with real industry knowledge.",
      icon: <Users size={28} className="text-[#14937a]" />,
    },
    {
      id: "05",
      title: "Affordable Fees & EMI Options",
      desc: "Flexible payment options to make quality education accessible for everyone.",
      icon: <BadgeIndianRupee size={28} className="text-[#14937a]" />,
    },
    {
      id: "06",
      title: "Soft Skills & Interview Training",
      desc: "Improve communication, confidence, and interview skills to succeed in your career.",
      icon: <MessageSquare size={28} className="text-[#14937a]" />,
    },
    {
      id: "07",
      title: "Updated Curriculum & Latest Tools",
      desc: "Learn modern technologies like MERN Stack, Data Analytics, AI tools, and more.",
      icon: <Cpu size={28} className="text-[#14937a]" />,
    },
    {
      id: "08",
      title: "Flexible Learning Options",
      desc: "Choose online or offline classes with a comfortable learning environment.",
      icon: <Monitor size={28} className="text-[#14937a]" />,
    },
  ];

  return (
    <section className="bg-[#fcfcfc] py-20 px-6 md:px-12 lg:px-20 font-sans relative overflow-hidden text-[#05243b]">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#14937a]/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#05243b]/5 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14937a]/10 border border-[#14937a]/20">
            <span className="text-[#14937a] text-[11px] font-black uppercase tracking-[0.2em]">Our Advantage</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-tight">
            Why Choose BM Academy?
          </h2>
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            Get industry-focused training in Kottakuppam, Pondicherry with hands-on learning, expert mentorship, and placement support
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="group bg-white p-7 rounded-[2rem] border border-[#05243b]/10 shadow-sm hover:shadow-xl hover:border-[#14937a]/30 transition-all duration-500 hover:-translate-y-1.5 relative overflow-hidden"
            >
              
              {/* Large Decorative Number */}
              <div className="absolute top-6 right-8 text-[44px] font-black text-[#05243b]/5 pointer-events-none select-none group-hover:text-[#14937a]/10 transition-colors duration-500">
                {feature.id}
              </div>

              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-[#fcfcfc] border border-[#f0f0f0] flex items-center justify-center mb-6 group-hover:bg-[#14937a] group-hover:text-white transition-all duration-500 shadow-sm">
                <span className="group-hover:scale-110 transition-transform">
                    {React.cloneElement(feature.icon, { 
                        className: "text-[#14937a] group-hover:text-white transition-colors" 
                    })}
                </span>
              </div>

              {/* Text Content */}
              <div className="space-y-3 relative z-10">
                <h3 className="text-[19px] font-extrabold leading-snug tracking-tight group-hover:text-[#14937a] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-500 text-[14px] leading-relaxed font-medium">
                  {feature.desc}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#14937a] transition-all duration-500 group-hover:w-full"></div>
            </div>
          ))}
        </div>

        {/* Optional Call to Action Link */}
        <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#05243b] text-white rounded-full font-bold text-[15px] hover:bg-[#14937a] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 active:scale-95">
                Join our Next Batch
                <ChevronRight size={20} />
            </button>
        </div>

      </div>
    </section>
  );
};

export default WhyChoose;
