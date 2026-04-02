import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  const brandColor = '#9D1B50';

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

  const socialLinks = [
    { Icon: InstagramFilled, href: '#' },
    { Icon: FacebookFilled, href: '#' },
    { Icon: LinkedinFilled, href: '#' },
    { Icon: TwitterOutlined, href: '#' },
    { Icon: YoutubeFilled, href: '#' },
  ];

  return (
    <>
      {/* 1st Header: Top Bar (Regular Div - scrolls away naturally) */}
      <div className="w-full bg-gray-50 border-b border-gray-100 px-4 md:px-12 py-3 flex flex-wrap justify-between items-center text-sm relative z-[101]">
        <div className="flex flex-wrap gap-4 md:gap-8 items-center">
          <a href="tel:+919944940051" className="flex items-center gap-2 transition-all group">
            <PhoneFilled style={{ color: brandColor }} className="text-lg group-hover:scale-110 transition-transform" />
            <span className="font-bold text-[14px] text-gray-700 group-hover:text-[#9D1B50] tracking-tight transition-colors">+91 994 494 0051</span>
          </a>
          <a href="mailto:admin@abmgroups.org" className="flex items-center gap-2 transition-all group">
            <MailFilled style={{ color: brandColor }} className="text-lg group-hover:scale-110 transition-transform" />
            <span className="font-bold text-[14px] text-gray-700 group-hover:text-[#9D1B50] tracking-tight transition-colors">admin@abmgroups.org</span>
          </a>
        </div>

        <div className="flex gap-3 items-center mt-2 lg:mt-0">
          {socialLinks.map((item, idx) => (
            <a key={idx} href={item.href} className="w-8 h-8 rounded-lg bg-white border border-gray-100 flex items-center justify-center hover:bg-[#9D1B50] hover:text-white transition-all shadow-sm group">
              <item.Icon className="text-gray-400 group-hover:text-white text-base transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* 2nd Header: Main Nav (Sticky - pins to top of screen) */}
      <nav 
        className={`sticky top-0 z-[100] w-full bg-white transition-all duration-300 transform-gpu
          ${isScrolled ? 'shadow-xl py-2 border-b border-gray-50' : 'shadow-none py-4 md:py-6 border-b border-transparent'}`}
      >
        <div className="px-4 md:px-12 flex justify-between items-center relative max-w-[1920px] mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <div className="w-10 h-10 bg-[#9D1B50] rounded-full flex items-center justify-center text-white text-2xl font-bold italic shadow-lg shadow-[#9D1B50]/20 group-hover:scale-110 transition-transform">bm</div>
            <div className="flex flex-col leading-tight">
              <span className="text-[22px] font-black text-gray-800 tracking-tight lowercase">Bm Academy</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, idx) => (
              <div
                key={idx}
                className="relative"
                onMouseEnter={() => link.hasDropdown && setActiveDropdown(idx)}
                onMouseLeave={() => link.hasDropdown && setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={`px-4 py-2 text-[15px] font-bold flex items-center gap-1.5 transition-all
                    ${link.active ? 'text-[#9D1B50] border-b-2 border-[#9D1B50]' : 'text-gray-600 hover:text-[#9D1B50]'}`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown size={14} className={`${activeDropdown === idx ? 'rotate-180' : ''} transition-all duration-300 opacity-60`} />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.hasDropdown && activeDropdown === idx && (
                  <div className="absolute top-full left-0 w-80 bg-white shadow-2xl mt-0 overflow-hidden rounded-xl border border-gray-50 transform transition-all duration-300 ease-out origin-top z-50 animate-in fade-in slide-in-from-top-2">
                    {link.items.map((item, i) => (
                      <a
                        key={i}
                        href="#"
                        className="block px-6 py-3.5 text-[14px] font-bold transition-colors border-b border-gray-50 last:border-none bg-white text-gray-700 hover:bg-[#9D1B50] hover:text-white"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Header Action Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => setIsEnquiryModalOpen(true)}
              className="px-6 h-12 bg-[#9D1B50] text-white font-bold rounded-xl hover:bg-[#861B47] transition-all cursor-pointer text-sm shadow-md shadow-[#9D1B50]/20 active:scale-95"
            >
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-[#9D1B50] hover:bg-red-50 rounded-lg transition-colors border-none bg-transparent"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <LucideX size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Navigation Sidebar-like menu */}
        <div className={`lg:hidden bg-white w-full border-t border-gray-100 shadow-2xl absolute left-0 z-40 transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}>
          <div className="flex flex-col p-5 gap-3">
            {navLinks.map((link, idx) => (
              <div key={idx} className="border-b border-gray-50 last:border-none">
                <div
                  className={`flex justify-between items-center px-4 py-3.5 font-bold rounded-lg transition-colors
                      ${link.active ? 'bg-[#9D1B50] text-white' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => link.hasDropdown && setActiveDropdown(activeDropdown === idx ? null : idx)}
                >
                  <Link to={link.href} className="flex-grow" onClick={() => setIsMenuOpen(false)}>{link.name}</Link>
                  {link.hasDropdown && <ChevronDown size={20} className={`${activeDropdown === idx ? 'rotate-180' : ''} transition-transform duration-300`} />}
                </div>

                {link.hasDropdown && (
                  <div className={`bg-gray-50 flex flex-col mt-1 rounded-xl overflow-hidden transition-all duration-300 ${activeDropdown === idx ? 'max-h-[500px] py-2' : 'max-h-0'}`}>
                    {link.items.map((item, i) => (
                      <a key={i} href="#" className="px-8 py-3.5 text-sm font-bold text-gray-500 hover:text-[#9D1B50] transition-colors">
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => {
                setIsEnquiryModalOpen(true);
                setIsMenuOpen(false);
              }}
              className="mt-2 w-full py-4 bg-[#9D1B50] text-white font-bold rounded-xl shadow-lg shadow-[#9D1B50]/30 transform active:scale-95 transition-all text-lg cursor-pointer border-none"
            >
              Apply Now
            </button>
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
