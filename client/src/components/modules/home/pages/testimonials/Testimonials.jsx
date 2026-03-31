import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Card, Typography, Rate, Row, Col, Avatar, Button } from 'antd';
import { 
    Quote, 
    Star, 
    CheckCircle, 
    GraduationCap, 
    Brain, 
    Zap,
    MessageCircle
} from 'lucide-react';

const { Title, Text } = Typography;

const HomeTestimonials = () => {
    const testimonials = [
        {
            name: "Rahul Sharma",
            role: "Full Stack Developer",
            avatar: "RS",
            rating: 5,
            course: "Master Web Development",
            date: "March 2026",
            text: "The web development course at BM Academy completely changed my career path. The mentors are top-notch and the project-based learning model helped me land a job within weeks.",
            color: "#9D1B50"
        },
        {
            name: "Priya Patel",
            role: "Graduate Student",
            avatar: "PP",
            rating: 5,
            course: "Advanced Data Science",
            date: "February 2026",
            text: "I was skeptical about online learning, but the experience here was incredibly interactive. The curriculum is industry-aligned and covers every minute detail.",
            color: "#3b82f6"
        },
        {
            name: "Arjun Kumar",
            role: "UI/UX Designer",
            avatar: "AK",
            rating: 4,
            course: "UI/UX Mastery",
            date: "January 2026",
            text: "BM Academy's focus on practical design thinking was refreshing. I now have a professional portfolio that actually stands out to recruiters.",
            color: "#10b981"
        },
        {
            name: "Sneha Reddy",
            role: "Business Analyst",
            avatar: "SR",
            rating: 5,
            course: "Digital Marketing Pro",
            date: "March 2026",
            text: "The community at BM Academy is its biggest strength. Networking with other students and having 24/7 support from the team was invaluable.",
            color: "#f59e0b"
        },
        {
            name: "Deepak Singh",
            role: "Software Engineer",
            avatar: "DS",
            rating: 5,
            course: "Cloud Computing",
            date: "December 2025",
            text: "Highly recommended! The resources provided are vast and the certification is well-recognized in the industry. It was smooth from start to finish.",
            color: "#6366f1"
        },
        {
            name: "Meera Iyer",
            role: "Project Manager",
            avatar: "MI",
            rating: 5,
            course: "Agile Leadership",
            date: "March 2026",
            text: "The agile training helped my team transition seamlessly. The case studies used during the sessions were extremely relevant to our daily challenges.",
            color: "#ec4899"
        }
    ];

    return (
        <section className="py-24 bg-[#fafafa] relative overflow-hidden font-sans">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute -top-48 -left-48 w-96 h-96 bg-[#9D1B50]/5 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#3b82f6]/5 rounded-full blur-3xl opacity-30"></div>
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">
                {/* Header Section */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#fbe8f0] rounded-full mb-6 border border-[#f5d5e3]">
                        <MessageCircle size={14} className="text-[#9D1B50]" />
                        <span className="text-[12px] font-black text-[#9D1B50] uppercase tracking-widest">Student Stories</span>
                    </div>
                    <Title level={1} className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
                        Real Impact. <span className="text-[#9D1B50]">Real Results.</span>
                    </Title>
                    <Text className="text-lg text-gray-500 font-medium leading-relaxed block">
                        Hear from our diverse community of over 5,000+ students who have transformed their careers through BM Academy's industry-led programs.
                    </Text>
                </div>

                {/* Experience Stats Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50">
                    {[
                        { icon: <CheckCircle className="text-green-500" />, label: '98% Success Rate' },
                        { icon: <Brain className="text-[#9D1B50]" />, label: 'Practical Learning' },
                        { icon: <Zap className="text-yellow-500" />, label: 'Fast Career Shift' },
                        { icon: <GraduationCap className="text-blue-500" />, label: 'Certified Pros' }
                    ].map((stat, i) => (
                        <div key={i} className="flex flex-col items-center gap-3 text-center">
                            <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-1">
                                {stat.icon}
                            </div>
                            <span className="text-sm font-black text-gray-800 uppercase tracking-wider">{stat.label}</span>
                        </div>
                    ))}
                </div>

                {/* Testimonials Masonry-style Grid */}
                <Row gutter={[32, 32]}>
                    {testimonials.map((item, i) => (
                        <Col xs={24} md={12} lg={8} key={i}>
                            <Card 
                                className="h-full rounded-[2.5rem] border-none shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 bg-white overflow-hidden group"
                                bodyStyle={{ padding: '40px', position: 'relative' }}
                            >
                                {/* Quote Icon Decor */}
                                <div className="absolute top-8 right-8 opacity-5 text-gray-900 group-hover:scale-110 group-hover:opacity-10 transition-all duration-500">
                                    <Quote size={60} fill="currentColor" />
                                </div>

                                <div className="flex flex-col h-full">
                                    {/* Rating */}
                                    <div className="mb-6 flex gap-1">
                                        {[...Array(item.rating)].map((_, starIdx) => (
                                            <Star key={starIdx} size={16} fill={item.color} stroke={item.color} className="opacity-80" />
                                        ))}
                                    </div>

                                    {/* Testimonial Text */}
                                    <p className="text-gray-700 text-lg leading-relaxed mb-8 flex-1 font-medium italic">
                                        "{item.text}"
                                    </p>

                                    {/* User Info */}
                                    <div className="flex items-center gap-4 pt-8 border-t border-gray-50">
                                        <div 
                                            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg transition-transform group-hover:rotate-6"
                                            style={{ background: item.color }}
                                        >
                                            {item.avatar}
                                        </div>
                                        <div className="text-left leading-normal">
                                            <h4 className="font-black text-gray-900 m-0 text-lg leading-none mb-1">{item.name}</h4>
                                            <p className="text-xs font-black uppercase tracking-widest leading-none" style={{ color: item.color }}>{item.course}</p>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Bottom CTA */}
                <div className="mt-24 text-center">
                    <div className="bg-[#9D1B50] p-12 md:p-16 rounded-[4rem] relative overflow-hidden shadow-2xl shadow-[#9D1B50]/20">
                        {/* CTA Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                        
                        <Title level={2} className="text-white font-black text-3xl md:text-5xl m-0 mb-6 tracking-tight">
                            Your Success Story <span className="opacity-60 italic">Starts Here.</span>
                        </Title>
                        <p className="text-white/70 text-lg font-medium mb-10 max-w-xl mx-auto leading-relaxed">
                            Join thousands of students who are building their future today at BM Academy.
                        </p>
                        <Button 
                            type="primary" 
                            size="large"
                            className="h-16 px-12 rounded-2xl bg-white border-none text-[#9D1B50] font-black text-lg hover:scale-105 transition-all shadow-xl"
                        >
                            Enroll Today
                        </Button>
                    </div>
                </div>
            </div>

            <style>{`
                .ant-rate-star {
                    margin-right: 4px !important;
                }
                ::selection {
                    background: #9D1B50;
                    color: white;
                }
            `}</style>
        </section>
    );
};

export default HomeTestimonials;
