import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X as LucideX,
  Award
} from 'lucide-react';
import {
  PhoneFilled,
  MailFilled,
  InstagramFilled,
  FacebookFilled,
  LinkedinFilled,
  YoutubeFilled,
  TwitterOutlined
} from '@ant-design/icons';
import EnquiryModal from './EnquiryModal';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const location = useLocation();

  // Updated brand color to match the design's deep teal
  const brandColor = '#14937a'; 
  const logoColor = '#05243b';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    {
      name: 'Course',
      href: '/courses',
      hasDropdown: true,
      items: [
        { name: 'PG Certification in AI-Powered Digital Marketing', href: '/course/digital-marketing' },
        { name: 'PG Certification in AI-Powered Full Stack Development', href: '/course/full-stack-development' },
        { name: 'Certification in AI-Powered Data Analytics', href: '/course/data-analysis' },
        { name: 'Basic to Advanced Video Editing with AI', href: '/course/video-editing' }
      ]
    },
    {
      name: 'Placement',
      href: '#',
      hasDropdown: true,
      items: ['Testimonials', 'Placement Records', 'Reviews']
    },
    { name: 'Events', href: '#' },
    {
      name: 'Student Corner',
      href: '#',
      hasDropdown: true,
      items: [
        'Blogs', 'CEO Writes', 'Masterclasses', 'Interview Questions',
        'Resume Builder', 'FAQs', 'Resources', 'Apply For Jobs',
        'Student Login', 'Skill Test'
      ]
    },
    { name: 'Verify Certificate', href: '/verify-certificate' },
    { name: 'Contact', href: '/contact' },
  ];

  const isLinkActive = (link) => {
    if (link.href === '/') {
      return location.pathname === '/';
    }
    if (link.name === 'Course') {
      return location.pathname.startsWith('/course') || location.pathname === '/courses';
    }
    return location.pathname === link.href;
  };

  return (
    <>
      {/* Sticky Main Nav */}
      <nav 
        className={`sticky top-0 z-[100] w-full bg-white transition-all duration-300 transform-gpu font-sans
          ${isScrolled ? 'shadow-md' : 'shadow-sm border-b border-gray-100'} py-4`}
      >
        <div className="px-6 md:px-8 flex justify-between items-center relative max-w-[1920px] mx-auto">
          
          {/* Logo (Updated to match design text) */}
          <Link to="/" className="flex items-center cursor-pointer group">
            <img 
              src="/assets/logo/bmlogot.png" 
              alt="BM Academy Logo" 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(idx)}
                onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`py-2 text-[16px] font-medium flex items-center gap-1.5 transition-all relative
                    ${isLinkActive(link) ? 'text-[#14937a]' : 'text-slate-600 hover:text-[#14937a]'}`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown size={16} className={`${activeDropdown === idx ? 'rotate-180' : ''} transition-all duration-300 opacity-60`} />
                  )}
                  
                  {/* Design-matching active underline */}
                  {isLinkActive(link) && (
                    <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#14937a]" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.hasDropdown && activeDropdown === idx && (
                  <div className="absolute top-full left-0 w-80 bg-white shadow-xl mt-0 overflow-hidden rounded-xl border border-gray-100 transform transition-all duration-300 ease-out origin-top z-50">
                    {link.items.map((item, i) => (
                      <Link
                        key={i}
                        to={typeof item === 'string' ? '#' : item.href}
                        className="block px-6 py-3.5 text-[14px] font-medium transition-colors border-b border-gray-50 last:border-none bg-white text-gray-600 hover:bg-[#14937a] hover:text-white"
                      >
                        {typeof item === 'string' ? item : item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Header Action Buttons (Updated to match design) */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <button className="text-[15px] font-bold text-[#05243b] hover:text-[#14937a] transition-colors">
              Student Login
            </button>
            <button 
              onClick={() => setIsEnquiryModalOpen(true)}
              className="px-6 py-2.5 bg-[#14937a] text-white rounded-lg font-bold text-[15px] hover:bg-[#05243b] transition-all duration-300 shadow-lg shadow-[#14937a]/20 hover:shadow-none active:scale-95"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 text-slate-600 hover:bg-slate-50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Navigation Sidebar */}
        <div className={`fixed inset-0 z-[200] lg:hidden transition-all duration-500 ${isMenuOpen ? 'visible' : 'invisible'}`}>
          <div 
            className={`absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity duration-500 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
            onClick={() => setIsMenuOpen(false)}
          />
          <div className={`absolute right-0 top-0 bottom-0 w-[300px] bg-white shadow-2xl transition-transform duration-500 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <img src="/assets/logo/bmlogot.png" alt="Logo" className="h-8" />
                <button onClick={() => setIsMenuOpen(false)} className="p-2 hover:bg-slate-50 rounded-lg">
                  <LucideX size={24} className="text-slate-600" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                {navLinks.map((link, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Link 
                        to={link.href}
                        className={`text-lg font-bold ${isLinkActive(link) ? 'text-[#14937a]' : 'text-slate-700'}`}
                        onClick={() => !link.hasDropdown && setIsMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                      {link.hasDropdown && (
                        <button 
                          onClick={() => setActiveDropdown(activeDropdown === idx ? null : idx)}
                          className="p-2 hover:bg-slate-50 rounded-lg"
                        >
                          <ChevronDown size={20} className={`transition-transform ${activeDropdown === idx ? 'rotate-180' : ''}`} />
                        </button>
                      )}
                    </div>
                    {link.hasDropdown && activeDropdown === idx && (
                      <div className="pl-4 space-y-3 border-l-2 border-slate-100 ml-1">
                        {link.items.map((item, i) => (
                          <Link 
                            key={i}
                            to={typeof item === 'string' ? '#' : item.href}
                            className="block text-slate-600 font-medium hover:text-[#14937a]"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {typeof item === 'string' ? item : item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <button 
                  onClick={() => { setIsEnquiryModalOpen(true); setIsMenuOpen(false); }}
                  className="w-full py-4 bg-[#14937a] text-white rounded-xl font-bold shadow-lg shadow-[#14937a]/20"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <EnquiryModal 
        isOpen={isEnquiryModalOpen} 
        onClose={() => setIsEnquiryModalOpen(false)} 
      />
    </>
  );
};

export default Header;