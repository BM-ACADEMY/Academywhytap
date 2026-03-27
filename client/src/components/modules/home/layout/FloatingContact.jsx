import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex items-center gap-3">
      {/* Talk to an Expert Label */}
      <div className="bg-white px-5 py-3 rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.2)] border border-gray-100 hidden md:flex items-center gap-2 group cursor-pointer hover:bg-gray-50 transition-all transform hover:-translate-y-1 active:scale-95">
        <span className="text-[15px] font-bold text-black tracking-tight">Talk to an Expert</span>
      </div>
      
      {/* WhatsApp Button */}
      <a 
        href="https://wa.me/918270099991" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-16 h-16 bg-[#24a653] text-white rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(36,166,83,0.3)] hover:scale-110 hover:rotate-6 active:scale-95 transition-all text-4xl"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle fill="white" size={32} />
      </a>
    </div>
  );
};

export default FloatingContact;
