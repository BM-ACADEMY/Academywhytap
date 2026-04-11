import React from 'react';
import { 
    FaInstagram, 
    FaFacebookF, 
    FaYoutube, 
    FaLinkedinIn,
    FaXTwitter
} from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer className="bg-[#05243b] text-white pt-8 pb-6 px-4 md:px-12 lg:px-20 font-sans border-t border-white/5">
            <div className="max-w-7xl mx-auto space-y-5">
                
                {/* 1. Company Section */}
                <div className="space-y-1">
                    <h3 className="text-[16px] font-bold text-white">Company</h3>
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5 text-[13px] text-slate-300 font-medium">
                        <a href="#" className="hover:text-[#2a9b87] transition-colors">About Us</a> <span className="text-slate-600">|</span>
                        <a href="#" className="hover:text-[#2a9b87] transition-colors">Our Story</a> <span className="text-slate-600">|</span>
                        <a href="#" className="hover:text-[#2a9b87] transition-colors">Vision & Mission</a> <span className="text-slate-600">|</span>
                        <a href="#" className="hover:text-[#2a9b87] transition-colors">Founder</a> <span className="text-slate-600">|</span>
                        <a href="#" className="hover:text-[#2a9b87] transition-colors">Why Choose BM Academy</a> <span className="text-slate-600">|</span>
                        <a href="#" className="hover:text-[#2a9b87] transition-colors">Training Methodology</a> <span className="text-slate-600">|</span>
                        <a href="#" className="hover:text-[#2a9b87] transition-colors">Meet Our Mentors</a> <span className="text-slate-600">|</span>
                        <a href="#" className="hover:text-[#2a9b87] transition-colors">Alumni Work At</a> <span className="text-slate-600">|</span>
                        <a href="#" className="hover:text-[#2a9b87] transition-colors">Placement Records</a> <span className="text-slate-600">|</span>
                        <a href="#" className="hover:text-[#2a9b87] transition-colors">Testimonials</a> <span className="text-slate-600">|</span>
                        <a href="#" className="hover:text-[#2a9b87] transition-colors">Career</a> <span className="text-slate-600">|</span>
                        <a href="#" className="hover:text-[#2a9b87] transition-colors">Vibes</a> <span className="text-slate-600">|</span>
                        <a href="#" className="hover:text-[#2a9b87] transition-colors">FAQs</a> <span className="text-slate-600">|</span>
                        <a href="#" className="hover:text-[#2a9b87] transition-colors">Masterclasses</a> <span className="text-slate-600">|</span>
                        <a href="#" className="hover:text-[#2a9b87] transition-colors">Interview Questions</a> <span className="text-slate-600">|</span>
                        <a href="#" className="hover:text-[#2a9b87] transition-colors">Terms & Conditions</a> <span className="text-slate-600">|</span>
                        <a href="#" className="hover:text-[#2a9b87] transition-colors">Privacy Policy</a>
                    </div>
                </div>

                <hr className="border-white/10" />

                {/* 2. Best IT Courses Section */}
                <div className="space-y-1">
                    <h3 className="text-[16px] font-bold text-white">Best IT Courses</h3>
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5 text-[13px] text-slate-300 font-medium">
                        <a href="#" className="hover:text-[#2a9b87] transition-colors">Full Stack Development</a> <span className="text-slate-600">|</span>
                        <a href="#" className="hover:text-[#2a9b87] transition-colors">Data Analytics & Business Intelligence</a> <span className="text-slate-600">|</span>
                        <a href="#" className="hover:text-[#2a9b87] transition-colors">AI-Powered Digital Marketing</a> <span className="text-slate-600">|</span>
                        <a href="#" className="hover:text-[#2a9b87] transition-colors">Creative Video Editing</a>
                    </div>
                </div>

                <hr className="border-white/10" />

                {/* 3. Combined Resources, Follow, Student Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-6 lg:gap-8 items-start">
                    
                    {/* Resources & Events */}
                    <div className="lg:col-span-4 space-y-1">
                        <h3 className="text-[16px] font-bold text-white">Resources & Events</h3>
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5 text-[13px] text-slate-300 font-medium">
                            <a href="#" className="hover:text-[#2a9b87] transition-colors">Blog</a> <span className="text-slate-600">|</span>
                            <a href="#" className="hover:text-[#2a9b87] transition-colors">Events & Workshops</a> <span className="text-slate-600">|</span>
                            <a href="#" className="hover:text-[#2a9b87] transition-colors">Student Success Stories</a> <span className="text-slate-600">|</span>
                            <a href="#" className="hover:text-[#2a9b87] transition-colors">Career Guidance</a>
                        </div>
                    </div>

                    {/* Follow us */}
                    <div className="lg:col-span-4 flex flex-col items-start lg:items-center space-y-1.5">
                        <h3 className="text-[16px] font-bold text-white w-full lg:text-center">Follow us</h3>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/bmacademypondy/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#2a9b87] hover:border-[#2a9b87] transition-all"><FaInstagram size={14} /></a>
                            <a href="https://www.facebook.com/people/BM-Academy/61566753898165/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#2a9b87] hover:border-[#2a9b87] transition-all"><FaFacebookF size={13} /></a>
                            <a href="https://www.youtube.com/@bmacademypondy" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#2a9b87] hover:border-[#2a9b87] transition-all"><FaYoutube size={14} /></a>
                            <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fbm-academypondy%2Fabout%2F%3FviewAsMember%3Dtrue" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#2a9b87] hover:border-[#2a9b87] transition-all"><FaLinkedinIn size={14} /></a>
                            <a href="https://x.com/BMACADEMYPONDY" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center hover:bg-[#2a9b87] hover:border-[#2a9b87] transition-all"><FaXTwitter size={13} /></a>
                        </div>
                    </div>

                    {/* Students Corner */}
                    <div className="lg:col-span-4 space-y-1 lg:text-right">
                        <h3 className="text-[16px] font-bold text-white w-full">Students Corner</h3>
                        <div className="flex items-center lg:justify-end gap-x-3 text-[13px] text-slate-300 font-medium">
                            <a href="#" className="hover:text-[#2a9b87] transition-colors">Student Login</a> <span className="text-slate-600">|</span>
                            <a href="#" className="hover:text-[#2a9b87] transition-colors">Skill Test</a>
                        </div>
                    </div>

                </div>

                <hr className="border-white/10" />

                {/* 4. About BM Academy Paragraph */}
                <div className="pt-1">
                    <p className="text-[12px] md:text-[13px] text-slate-400 font-medium leading-relaxed max-w-6xl opacity-70">
                        BM ACADEMY, THE TRAINING AND PLACEMENT DIVISION OF BM GLOBAL SERVICES, STARTED IN PONDICHERRY TO PROVIDE DISSERTATION SUPPORT AND TECHNICAL TRAINING FOR STUDENTS. TODAY, IT HAS EXPANDED TO OFFER COMPREHENSIVE EDUCATION SERVICES FOCUSED ON JOB-READY SKILLS.
                    </p>
                </div>

                {/* 5. Contact Details & Opening Hours */}
                <div className="space-y-1">
                    <h3 className="text-[15px] font-bold text-white">Contact details & Opening Hours</h3>
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-0.5 text-[12px] md:text-[13px] text-slate-300 font-medium">
                        <span className="text-white">Kottakuppam, Pondicherry (Puducherry)</span> <span className="text-slate-600">|</span>
                        <a href="tel:+919944940051" className="hover:text-[#2a9b87] transition-colors">+91 99449 40051</a> <span className="text-slate-600">|</span>
                        <a href="mailto:contact@bmacademy.in" className="hover:text-[#2a9b87] transition-colors">contact@bmacademy.in</a> <span className="text-slate-600">|</span>
                        <span>Monday - Saturday: 10 AM - 7 PM</span> <span className="text-slate-600">|</span>
                        <span>Sunday Holiday</span>
                    </div>
                </div>

                {/* 6. Footer Bottom: Copyright Pill (Smaller) */}
                <div className="pt-2 flex justify-start">
                    <div className="bg-slate-50/10 backdrop-blur-sm border border-white/5 px-5 py-1.5 rounded-full text-slate-200 text-[11px] font-bold">
                        &copy; 2025 BM ACADEMY. All rights reserved.
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
