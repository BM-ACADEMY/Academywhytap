import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X as LucideX,
  Search,
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

  // Updated brand color to match the design's deep teal
  const brandColor = '#006d5b'; 
  const logoColor = '#001f3f';

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
    { name: 'Home', href: '/', active: true },
    {
      name: 'Course',
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

  return (
    <>
      {/* Sticky Main Nav */}
      <nav 
        className={`sticky top-0 z-[100] w-full bg-white transition-all duration-300 transform-gpu font-sans
          ${isScrolled ? 'shadow-md py-2' : 'shadow-sm py-4 border-b border-gray-100'}`}
      >
        <div className="px-6 md:px-8 flex justify-between items-center relative max-w-[1920px] mx-auto">
          
          {/* Logo (Updated to match design text) */}
          <Link to="/" className="flex items-center cursor-pointer group">
            <span className="text-[26px] font-bold text-[#001f3f] tracking-tight">BM Academy</span>
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
                    ${link.active ? 'text-[#006d5b]' : 'text-slate-600 hover:text-[#006d5b]'}`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown size={16} className={`${activeDropdown === idx ? 'rotate-180' : ''} transition-all duration-300 opacity-60`} />
                  )}
                  
                  {/* Design-matching active underline */}
                  {link.active && (
                    <div className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#006d5b]" />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.hasDropdown && activeDropdown === idx && (
                  <div className="absolute top-full left-0 w-80 bg-white shadow-xl mt-0 overflow-hidden rounded-xl border border-gray-100 transform transition-all duration-300 ease-out origin-top z-50">
                    {link.items.map((item, i) => (
                      <a
                        key={i}
                        href="#"
                        className="block px-6 py-3.5 text-[14px] font-medium transition-colors border-b border-gray-50 last:border-none bg-white text-gray-600 hover:bg-[#006d5b] hover:text-white"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Header Action Buttons (Updated to match design) */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {/* Search Button */}
            <div className="flex items-center space-x-2 text-slate-500 cursor-pointer hover:text-slate-700 transition-colors">
              <Search size={20} />
              <span className="text-[16px] font-medium hidden xl:block">Search</span>
            </div>

            {/* Pill-shaped CTA Button */}
            <button
              onClick={() => setIsEnquiryModalOpen(true)}
              className="px-8 py-2.5 bg-[#006d5b] text-white font-semibold rounded-full hover:bg-[#005a4b] transition-all cursor-pointer text-[15px] active:scale-95"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[#001f3f] hover:bg-slate-50 rounded-lg transition-colors border-none bg-transparent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <LucideX size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Sidebar */}
        <div className={`lg:hidden bg-white w-full border-t border-gray-100 shadow-2xl absolute left-0 z-40 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}>
          <div className="flex flex-col p-5 gap-2">
            {navLinks.map((link, idx) => (
              <div key={idx} className="border-b border-gray-50 last:border-none">
                <div
                  className={`flex justify-between items-center px-4 py-3.5 font-medium rounded-lg transition-colors
                      ${link.active ? 'bg-[#e6f0ef] text-[#006d5b]' : 'text-slate-600 hover:bg-gray-50'}`}
                  onClick={() => link.hasDropdown && setActiveDropdown(activeDropdown === idx ? null : idx)}
                >
                  <Link to={link.href} className="flex-grow" onClick={() => !link.hasDropdown && setIsMenuOpen(false)}>{link.name}</Link>
                  {link.hasDropdown && <ChevronDown size={20} className={`${activeDropdown === idx ? 'rotate-180' : ''} transition-transform duration-300`} />}
                </div>

                {link.hasDropdown && (
                  <div className={`bg-gray-50 flex flex-col mt-1 rounded-xl overflow-hidden transition-all duration-300 ${activeDropdown === idx ? 'max-h-[500px] py-2' : 'max-h-0'}`}>
                    {link.items.map((item, i) => (
                      <a key={i} href="#" className="px-8 py-3 text-[14px] font-medium text-slate-500 hover:text-[#006d5b] transition-colors">
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile Actions */}
            <div className="flex flex-col gap-3 mt-4 px-2">
              <div className="flex items-center space-x-3 py-3 text-slate-500 justify-center bg-gray-50 rounded-full">
                <Search size={20} />
                <span className="font-medium">Search</span>
              </div>
              <button
                onClick={() => {
                  setIsEnquiryModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full py-3.5 bg-[#006d5b] text-white font-semibold rounded-full shadow-md transform active:scale-95 transition-all text-[16px] cursor-pointer border-none"
              >
                Apply Now
              </button>
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