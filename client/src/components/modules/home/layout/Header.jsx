import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  Mail, 
  ChevronDown, 
  Menu, 
  X as LucideX 
} from 'lucide-react';
import EnquiryModal from './EnquiryModal';

// Custom SVG Icons for Brands (removed in Lucide v1)
const Facebook = ({ size = 24, ...props }) => (
  <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 24, ...props }) => (
  <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Linkedin = ({ size = 24, ...props }) => (
  <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const XBrand = ({ size = 24, ...props }) => (
  <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const Youtube = ({ size = 24, ...props }) => (
  <svg width={size} height={size} {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.42 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.42-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { 
      name: 'Courses', 
      href: '#', 
      hasDropdown: true, 
      items: [
        'PG Certification in AI-Powered Digital Marketing',
        'PG Certification in AI-Powered MER Stack Development',
        'PG Certification in AI-Powered Full Stack Development',
        'PG Certification in AI-Powered Data Science',
        'Basic to Advanced Video Editing with AI',
        'Certification in AI-Powered Data Analytics'
      ] 
    },
    { 
      name: 'Placements', 
      href: '#', 
      hasDropdown: true, 
      items: ['Testimonials', 'Placement Records', 'Reviews'] 
    },
    { name: 'Events', href: '#' },
    { 
      name: 'Students Corner', 
      href: '#', 
      hasDropdown: true, 
      items: [
        'Blogs', 'CEO Writes', 'Masterclasses', 'Interview Questions', 
        'Resume Builder', 'FAQs', 'Resources', 'Apply For Jobs', 
        'Student Login', 'Skill Test'
      ] 
    },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <header className="w-full font-sans sticky top-0 z-[100] bg-white transition-all duration-300">
      {/* Top Bar */}
      <div className={`bg-[#f0f2f5] border-b border-gray-100 px-4 md:px-12 flex flex-wrap justify-between items-center text-sm transition-all duration-500 ease-in-out overflow-hidden ${isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-[60px] py-4 opacity-100'}`}>
        <div className="flex flex-wrap gap-4 md:gap-8 items-center">
          <a href="tel:+918270099991" className="flex items-center gap-2 transition-colors group">
            <Phone size={16} className="text-[#7A1A40] group-hover:text-[#861B47] stroke-[2.5] transition-colors" />
            <span className="font-bold text-[15px] text-[#000000] group-hover:text-[#861B47] tracking-wide transition-colors">+91 827 0099 991</span>
          </a>
          <a href="mailto:contact@whytap.in" className="flex items-center gap-2 transition-colors group">
            <Mail size={16} className="text-[#7A1A40] group-hover:text-[#861B47] stroke-[2.5] transition-colors" />
            <span className="font-bold text-[15px] text-[#000000] group-hover:text-[#861B47] tracking-wide transition-colors">contact@whytap.in</span>
          </a>
        </div>
        
        <div className="flex gap-4 items-center mt-2 lg:mt-0">
          {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
            <a key={idx} href="#" className="p-1.5 rounded-full bg-white hover:bg-[#7A1A40]/5 transition-all shadow-md">
              <Icon size={16} className="text-[#7A1A40]" />
            </a>
          ))}
          <a href="#" className="p-1.5 rounded-full bg-white hover:bg-[#7A1A40]/5 transition-all shadow-md">
              <XBrand size={16} className="text-[#7A1A40]" />
          </a>
          <a href="#" className="p-1.5 rounded-full bg-white hover:bg-[#7A1A40]/5 transition-all shadow-md">
            <Youtube size={16} className="text-[#7A1A40]" />
          </a>
        </div>
      </div>

      {/* Main Header */}
      <nav className="bg-white py-3.5 px-4 md:px-12 flex justify-between items-center shadow-sm relative">
        {/* Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer group">
          <div className="w-10 h-10 bg-[#7A1A40] rounded-full flex items-center justify-center text-white text-2xl font-bold italic shadow-md group-hover:scale-105 transition-transform">y</div>
          <div className="flex flex-col leading-tight">
            <span className="text-[22px] font-bold text-[#6B7280] tracking-tight lowercase">why tap</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link, idx) => (
            <div 
              key={idx} 
              className="relative"
              onMouseEnter={() => link.hasDropdown && setActiveDropdown(idx)}
              onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
            >
              <a 
                href={link.href}
                className={`px-5 py-2.5 text-[16px] font-bold flex items-center gap-1 transition-all
                  ${link.active ? 'bg-[#7A1A40] text-white rounded-none' : 'text-[#7A1A40] hover:opacity-80'}`}
              >
                {link.name}
                {link.hasDropdown && (
                  <ChevronDown size={14} className={`${activeDropdown === idx ? 'rotate-180' : ''} transition-transform duration-300 opacity-80`} />
                )}
              </a>
              
              {/* Dropdown Menu */}
              {link.hasDropdown && activeDropdown === idx && (
                <div className="absolute top-full left-0 w-80 bg-white shadow-2xl mt-0 overflow-hidden rounded-b-xl transform transition-all duration-300 ease-out origin-top z-50 animate-in fade-in slide-in-from-top-2">
                   {link.items.map((item, i) => (
                     <a 
                       key={i} 
                       href="#" 
                       className="block px-6 py-3.5 text-[14px] font-bold transition-colors border-b border-gray-100 last:border-none bg-white text-[#861B47] hover:bg-[#861B47] hover:text-white"
                     >
                       {item}
                     </a>
                   ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Apply Now Button */}
        <div className="hidden lg:block">
          <button 
            onClick={() => setIsEnquiryModalOpen(true)}
            className="px-6 py-2 border-2 border-[#7A1A40] text-[#7A1A40] font-bold rounded-lg hover:bg-[#7A1A40] hover:text-white transition-all cursor-pointer text-[14px]"
          >
            Apply Now
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-[#7A1A40] hover:bg-gray-100 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <LucideX size={30} /> : <Menu size={30} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div className={`lg:hidden bg-white w-full border-t border-gray-100 shadow-2xl absolute z-40 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}>
          <div className="flex flex-col p-5 gap-3">
            {navLinks.map((link, idx) => (
              <div key={idx} className="border-b border-gray-50 last:border-none">
                <div 
                   className={`flex justify-between items-center px-4 py-3.5 font-bold rounded-lg transition-colors
                    ${link.active ? 'bg-[#7A1A40] text-white shadow-md' : 'text-[#7A1A40] hover:bg-gray-50'}`}
                  onClick={() => link.hasDropdown && setActiveDropdown(activeDropdown === idx ? null : idx)}
                >
                  <a href={link.href} className="flex-grow">{link.name}</a>
                  {link.hasDropdown && <ChevronDown size={20} className={`${activeDropdown === idx ? 'rotate-180' : ''} transition-transform duration-300`} />}
                </div>
                
                {link.hasDropdown && (
                  <div className={`bg-gray-50 flex flex-col mt-1 rounded-xl overflow-hidden transition-all duration-300 ${activeDropdown === idx ? 'max-h-[500px] py-2' : 'max-h-0'}`}>
                    {link.items.map((item, i) => (
                      <a key={i} href="#" className="px-8 py-3.5 text-sm font-bold text-gray-600 hover:text-[#861B47] active:bg-white transition-colors">
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button 
              onClick={() => setIsEnquiryModalOpen(true)}
              className="mt-4 w-full py-4 bg-[#7A1A40] text-white font-bold rounded-xl shadow-lg shadow-[#7A1A40]/30 transform active:scale-95 transition-all text-lg cursor-pointer"
            >
              Apply Now
            </button>
          </div>
        </div>

        <EnquiryModal 
          isOpen={isEnquiryModalOpen} 
          onClose={() => setIsEnquiryModalOpen(false)} 
        />
    </header>
  );
};

export default Header;
