import React from 'react';
import { Home, Users, Phone } from 'lucide-react';
import welcomeImg from '../../../../assets/welcome-hero.png'; // Ensure this path is correct

const Welcome = () => {
    return (
        <section className="pt-20 pb-16 bg-white overflow-hidden font-sans">
            <div className="container mx-auto px-4 max-w-7xl">
                <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-12">

                    {/* Left Side: Image and Stats Card - Width reduced to 30% on lg */}
                    <div className="relative w-full lg:w-[32%] flex justify-center lg:justify-start lg:pt-4">
                        {/* Background Glow */}
                        <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#fbe7f0] rounded-full blur-3xl -z-10"></div>

                        <div className="relative w-full max-w-[540px]">
                            {/* Main Image Container */}
                            <div className="rounded-[2.5rem] overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.05)] border-4 border-white">
                                <img
                                    src={welcomeImg}
                                    alt="Students collaborating"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Stats Overlay Card - Refined to match reference with hover animation */}
                            <div className="absolute -bottom-10 -right-4 md:right-0 lg:-right-12 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-7 md:p-8 w-[260px] md:w-[320px] z-10 border border-[#f5d5e3] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] group cursor-pointer">
                                {/* Decorative Pink Semi-circle in top right corner - Animates on hover */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#f3e8ec] rounded-full -z-10 transition-all duration-700 ease-out group-hover:w-44 group-hover:h-44 group-hover:-top-14 group-hover:-right-14 group-hover:opacity-80"></div>

                                {/* Top Section: Icon and Learners Enrolled */}
                                <div className="flex items-center gap-4 mb-6 relative z-10">
                                    <div className="bg-[#9D1B50] p-3 rounded-2xl flex items-center justify-center h-12 w-12 shadow-lg shadow-[#9D1B50]/20">
                                        <Users size={24} className="text-white" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="text-[28px] font-black text-[#9D1B50] leading-none mb-1">16,000+</h3>
                                        <p className="text-[14px] font-bold text-gray-900 leading-tight">Learners Enrolled</p>
                                    </div>
                                </div>

                                {/* Horizontal Divider */}
                                <div className="h-px bg-gray-100 w-full mb-6 relative z-10"></div>

                                {/* Bottom Section: Split Stats */}
                                <div className="grid grid-cols-2 gap-4 relative z-10">
                                    <div className="flex flex-col">
                                        <h4 className="text-[20px] font-black text-[#9D1B50] leading-tight mb-1">15+</h4>
                                        <p className="text-[12px] font-bold text-gray-900 leading-tight">Years of Experience</p>
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-[20px] font-black text-[#9D1B50] leading-tight mb-1">150+</h4>
                                        <p className="text-[12px] font-bold text-gray-900 leading-tight">Industrial Experts</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Content - Shifted to start alignment for a higher look */}
                    <div className="w-full lg:w-[68%] flex flex-col justify-start text-left lg:pl-12 xl:pl-16 lg:pt-10">

                        {/* Top Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#fbe8f0]/60 rounded-full mb-5 w-fit border border-[#f5d5e3]/30">
                            <Home size={14} className="text-[#9D1B50]" fill="#9D1B50" />
                            <span className="text-[12px] md:text-[13px] font-bold text-[#9D1B50] tracking-wide">
                                Welcome to Bm Academy – Your gateway to a rewarding IT career
                            </span>
                        </div>

                        {/* Heading - Condensed and slightly deeper color */}
                        <h2 className="text-[24px] font-bold text-[#9D1B50] leading-[1.05] mb-3 tracking-tight lg:whitespace-nowrap">
                            Empowering Students, Empowering India
                        </h2>

                        {/* Paragraph Text - More elegant line height and slightly smaller font */}
                        <p className="text-gray-600 text-[15px] md:text-[16px] leading-[1.9] mb-8 w-full text-left font-normal max-w-[650px]">
                            At Bm Academy, we are committed to empowering students and job seekers through
                            industry-focused AI-Powered training programs in the IT sector. Our Full Stack
                            Development, Digital Marketing and Data Science courses, combined with
                            communication, soft skills training, and dedicated placement support, are designed to
                            help individuals succeed in their careers while contributing to the growth of Digital India.
                        </p>

                        {/* Text Link - Slightly smaller gap */}
                        <a
                            href="#vision"
                            className="inline-flex items-center gap-2 text-[#9D1B50] font-bold text-[15px] mb-10 w-fit group"
                        >
                            Explore Our Vision
                            <span className="text-xl font-light group-hover:translate-x-1 transition-transform ml-1">&rarr;</span>
                        </a>

                        {/* Bottom Info Cards Section */}
                        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-[100%] items-stretch">

                            {/* Contact Card - Standardized with premium styling */}
                            <div className="flex-1 bg-white border border-[#f5d5e3] rounded-[2.5rem] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex items-center gap-5 relative overflow-hidden min-w-[300px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] group cursor-pointer">
                                {/* Decorative Bubble - Animates on hover */}
                                <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#f3e8ec] rounded-full -z-10 transition-all duration-700 ease-out group-hover:w-52 group-hover:h-52 group-hover:-top-16 group-hover:-right-16 group-hover:opacity-80"></div>

                                <div className="bg-[#9D1B50] p-4 rounded-2xl flex-shrink-0 shadow-lg shadow-[#9D1B50]/20">
                                    <Phone size={24} className="text-white" fill="white" />
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-gray-900 text-[13px] font-bold mb-1 uppercase tracking-wide opacity-70">Contact Our Experts</p>
                                    <h4 className="text-xl md:text-2xl font-black text-gray-900 leading-tight">+91 827 0099 991</h4>
                                </div>
                            </div>

                            {/* Stats Cards Wrapper - Using flex-shrink-0 to prevent compression */}
                            <div className="flex gap-4 items-stretch flex-shrink-0">
                                {/* Students Card - Standardized */}
                                <div className="bg-white border border-[#f5d5e3] rounded-[2.5rem] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex flex-col justify-center min-w-[140px] relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60_rgba(0,0,0,0.08)] group cursor-pointer">
                                    <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#f3e8ec] rounded-full -z-10 transition-all duration-700 ease-out group-hover:w-36 group-hover:h-36 group-hover:-top-12 group-hover:-right-12"></div>
                                    <h4 className="text-[26px] font-black text-[#9D1B50] leading-tight mb-1">25K+</h4>
                                    <p className="text-[14px] font-bold text-gray-900">Students</p>
                                </div>

                                {/* Companies Card - Standardized */}
                                <div className="bg-white border border-[#f5d5e3] rounded-[2.5rem] p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex flex-col justify-center min-w-[140px] relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] group cursor-pointer">
                                    <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#f3e8ec] rounded-full -z-10 transition-all duration-700 ease-out group-hover:w-36 group-hover:h-36 group-hover:-top-12 group-hover:-right-12"></div>
                                    <h4 className="text-[26px] font-black text-[#9D1B50] leading-tight mb-1">600+</h4>
                                    <p className="text-[14px] font-bold text-gray-900">Companies</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Welcome;