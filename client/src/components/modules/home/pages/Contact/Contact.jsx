import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import * as Antd from 'antd';
import { 
    LinkedinFilled, 
    TwitterOutlined, 
    FacebookFilled, 
    CheckCircleFilled, 
    MessageFilled, 
    EnvironmentFilled, 
    PhoneFilled, 
    MailFilled,
    YoutubeFilled
} from '@ant-design/icons';


const Contact = () => {
    const [form] = Antd.Form.useForm();
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const onFinish = async (values) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URI}contact/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });
            if (response.ok) {
                setSubmitted(true);
                form.resetFields();
            } else {
                const errorData = await response.json();
                setError(errorData.detail || 'Failed to send message. Please try again.');
            }
        } catch (err) {
            console.error('Contact Error:', err);
            setError('An error occurred. Please check your connection.');
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="py-24 bg-[#fafafa] flex items-center justify-center min-h-[600px] font-sans">
                <div className="bg-white p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] text-center max-w-lg mx-auto border border-gray-100">
                    <div className="bg-green-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircleFilled className="text-green-500 text-5xl" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h2>
                    <p className="text-gray-600 mb-10 text-lg leading-relaxed">Thank you for reaching out to BM Academy. Our team will get back to you shortly.</p>
                    <Antd.Button 
                        type="primary" 
                        size="large" 
                        className="h-14 px-10 rounded-xl bg-[#9D1B50] border-none font-bold text-white"
                        onClick={() => setSubmitted(false)}
                    >
                        Send Another Message
                    </Antd.Button>
                </div>
            </div>
        );
    }

    return (
        <Antd.ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#9D1B50',
                    borderRadius: 12,
                }
            }}
        >
            <section id="contact" className="py-24 bg-[#fafafa] relative overflow-hidden font-sans">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#9D1B50]/5 rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10 text-left">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#fbe8f0] rounded-full mb-4 border border-[#f5d5e3]">
                            <MessageFilled className="text-[#9D1B50]" />
                            <span className="text-[13px] font-bold text-[#9D1B50] uppercase tracking-wider">Contact Us</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                            Let's Start a <span className="text-[#9D1B50]">Conversation</span>
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Info Column */}
                        <div className="w-full lg:w-5/12 flex flex-col gap-8">
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100 h-full">
                                <h3 className="text-2xl font-bold text-gray-900 mb-10">Contact Information</h3>
                                
                                <div className="space-y-10">
                                    <div className="flex items-start gap-6 group">
                                        <div className="bg-[#fbe8f0] p-4 rounded-2xl transition-all duration-300 group-hover:bg-[#9D1B50]">
                                            <PhoneFilled className="text-[#9D1B50] text-xl group-hover:text-white" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-[#9D1B50] uppercase tracking-widest mb-1 opacity-70">Phone</p>
                                            <p className="text-xl font-bold text-gray-900">994-494-0051</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group">
                                        <div className="bg-[#fbe8f0] p-4 rounded-2xl transition-all duration-300 group-hover:bg-[#9D1B50]">
                                            <MailFilled className="text-[#9D1B50] text-xl group-hover:text-white" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-[#9D1B50] uppercase tracking-widest mb-1 opacity-70">Email</p>
                                            <p className="text-lg font-bold text-gray-900">admin@abmgroups.org</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group">
                                        <div className="bg-[#fbe8f0] p-4 rounded-2xl transition-all duration-300 group-hover:bg-[#9D1B50]">
                                            <EnvironmentFilled className="text-[#9D1B50] text-xl group-hover:text-white" />
                                        </div>
                                        <div>
                                            <p className="text-xs font-bold text-[#9D1B50] uppercase tracking-widest mb-1 opacity-70">Location</p>
                                            <p className="text-gray-700 font-medium leading-relaxed">
                                                252 ,2nd FLOOR, M G ROAD, KOTTAKUPPAM<br />
                                                VANUR TALUK, VILLUPURAM DISTRICT.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-16 flex gap-4">
                                    {[
                                        { Icon: LinkedinFilled, label: 'LinkedIn', url: 'https://www.linkedin.com/company/bm-academypondy/about/?viewAsMember=true' },
                                        { Icon: TwitterOutlined, label: 'Twitter', url: 'https://x.com/BMACADEMYPONDY' },
                                        { Icon: FacebookFilled, label: 'Facebook', url: 'https://www.facebook.com/people/BM-Academy/61566753898165/' },
                                        { Icon: YoutubeFilled, label: 'YouTube', url: 'https://www.youtube.com/@bmacademypondy' }
                                    ].map((item, i) => (
                                        <a 
                                            key={i} 
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:bg-[#9D1B50] hover:text-white transition-all cursor-pointer text-xl shadow-sm"
                                        >
                                            <item.Icon />
                                        </a>
                                    ))}
                                </div>

                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="w-full lg:w-7/12">
                            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
                                <h3 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h3>
                                <Antd.Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false} className="contact-form">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                                        <Antd.Form.Item name="name" label={<span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">Full Name</span>} rules={[{ required: true, message: 'Required' }]}>
                                            <Antd.Input className="h-14 bg-gray-50 border-none rounded-xl px-4 font-medium" placeholder="E.g. John Doe" />
                                        </Antd.Form.Item>
                                        <Antd.Form.Item name="email" label={<span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">Email Address</span>} rules={[{ required: true, type: 'email', message: 'Valid email required' }]}>
                                            <Antd.Input className="h-14 bg-gray-50 border-none rounded-xl px-4 font-medium" placeholder="E.g. john@example.com" />
                                        </Antd.Form.Item>
                                    </div>
                                    <Antd.Form.Item name="subject" label={<span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">Subject</span>} rules={[{ required: true, message: 'Required' }]}>
                                        <Antd.Input className="h-14 bg-gray-50 border-none rounded-xl px-4 font-medium" placeholder="How can we help?" />
                                    </Antd.Form.Item>
                                    <Antd.Form.Item name="message" label={<span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest">Your Message</span>} rules={[{ required: true, message: 'Required' }]}>
                                        <Antd.Input.TextArea rows={5} className="bg-gray-50 border-none rounded-xl py-4 px-4 font-medium" placeholder="Type your message here..." />
                                    </Antd.Form.Item>

                                    {error && <div className="text-red-500 text-sm mb-6 flex items-center gap-2 font-bold px-2 py-1 bg-red-50 rounded-lg">{error}</div>}

                                    <Antd.Button 
                                        type="primary" 
                                        htmlType="submit" 
                                        loading={loading}
                                        className="w-full h-16 rounded-2xl bg-[#9D1B50] hover:bg-[#861B47] border-none text-white font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-[#9D1B50]/20 transition-all hover:scale-[1.01]"
                                    >
                                        <LucideIcons.Send size={20} className={ LucideIcons.Send ? 'visible' : 'hidden' } />
                                        <span>Submit Message</span>
                                    </Antd.Button>
                                </Antd.Form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Antd.ConfigProvider>
    );
};

export default Contact;
