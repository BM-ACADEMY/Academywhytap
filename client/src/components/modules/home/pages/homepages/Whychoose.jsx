import React from 'react';
import { 
  Award, 
  CheckCircle, 
  Users, 
  Laptop, 
  Clock, 
  CreditCard,
  ChevronRight 
} from 'lucide-react';
import robotImg from '../../../../../assets/course/data-analysis/robot_v2.png';

const WhyChoose = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14937a]/10 border border-[#14937a]/20 mb-6">
            <span className="text-[#14937a] text-[11px] font-black uppercase tracking-[0.2em]">Our Advantage</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-[#05243b]">
            Why Choose <span className="text-[#14937a]">BM Academy?</span>
          </h2>
          <p className="text-slate-500 font-medium mt-4 max-w-2xl mx-auto">
            Elevate your career with industry-focused learning, hands-on projects, and expert guidance.
          </p>
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
                title: "Soft Skills Training", 
                desc: "Personality development and professional communication sessions.", 
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
                title: "Flexible Learning", 
                desc: "Choose between classroom or online training modes.", 
                icon: <Laptop size={24} /> 
              },
              { 
                title: "Expert Mentors", 
                desc: "Learn from professionals with real-world industry experience.", 
                icon: <Clock size={24} /> 
              },
              { 
                title: "EMI Options", 
                desc: "Accessible education with affordable and flexible payment plans.", 
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

        {/* CTA Link */}
        <div className="mt-20 text-center">
            <button className="inline-flex items-center gap-3 px-10 py-5 bg-[#14937a] text-white rounded-2xl font-black text-[16px] hover:bg-[#05243b] transition-all shadow-xl shadow-[#14937a]/20 active:scale-95">
                Join our Next Batch
                <ChevronRight size={22} />
            </button>
        </div>
      </div>

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
  );
};

export default WhyChoose;
