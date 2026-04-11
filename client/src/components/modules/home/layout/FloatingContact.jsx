import React from 'react';
import { FaWhatsapp, FaPhoneVolume } from 'react-icons/fa6';

const FloatingContact = () => {
    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4 font-sans print:hidden">
            
            {/* Phone Call Button */}
            <div className="group flex items-center gap-3">
                <div className="bg-[#05243b] text-white px-5 py-2.5 rounded-full text-[13px] font-bold shadow-xl border border-white/10 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                    Call Us Now
                </div>
                <a 
                    href="tel:+919944940051" 
                    className="w-14 h-14 bg-[#05243b] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#2a9b87] hover:scale-110 transition-all duration-300 active:scale-95 border-2 border-white/20 relative"
                >
                    <div className="absolute inset-0 bg-[#05243b] rounded-full animate-ping opacity-20 group-hover:bg-[#2a9b87]"></div>
                    <FaPhoneVolume size={22} className="relative z-10" />
                </a>
            </div>

            {/* WhatsApp Button */}
            <div className="group flex items-center gap-3">
                <div className="bg-white text-[#05243b] px-5 py-2.5 rounded-full text-[13px] font-bold shadow-xl border border-slate-100 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                    Talk to an Expert
                </div>
                <a 
                    href="https://api.whatsapp.com/send/?phone=%2B919944940051&text&type=phone_number&app_absent=0" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-16 h-16 bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#22c35e] hover:scale-110 transition-all duration-500 active:scale-95 border-4 border-white relative"
                >
                    <div className="absolute inset-0 bg-[#25d366] rounded-full animate-pulse opacity-30"></div>
                    <FaWhatsapp size={32} className="relative z-10" />
                </a>
            </div>

        </div>
    );
};

export default FloatingContact;
