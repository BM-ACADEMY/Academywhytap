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
            <div className="py-24 bg-[#f8fafc] flex items-center justify-center min-h-[600px] font-sans relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#14937a]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#05243b]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

                <div className="bg-white p-12 rounded-[2.5rem] shadow-xl text-center max-w-lg mx-auto border border-slate-100 relative z-10">
                    <div className="bg-[#14937a]/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                        <CheckCircleFilled className="text-[#14937a] text-5xl" />
                    </div>
                    <h2 className="text-3xl font-black text-[#05243b] mb-4">Message Sent!</h2>
                    <p className="text-slate-500 mb-10 text-lg leading-relaxed font-medium">Thank you for reaching out to BM Academy. Our team will get back to you shortly.</p>
                    <Antd.Button 
                        type="primary" 
                        size="large" 
                        className="h-14 px-10 rounded-2xl bg-[#05243b] hover:bg-[#14937a] border-none font-bold text-white shadow-xl shadow-[#05243b]/20 transition-all"
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
                    colorPrimary: '#14937a',
                    borderRadius: 12,
                    fontFamily: 'inherit',
                }
            }}
        >
            <section id="contact" className="py-24 bg-[#f8fafc] relative overflow-hidden font-sans">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#14937a]/5 rounded-full blur-[120px] -translate-x-1/3 -translate-y-1/3" />
                    <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#05243b]/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />
                </div>

                <div className="container mx-auto px-4 max-w-7xl relative z-10 text-left">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#14937a]/10 rounded-full mb-6 border border-[#14937a]/20">
                            <MessageFilled className="text-[#14937a]" />
                            <span className="text-[11px] font-black text-[#14937a] uppercase tracking-[0.2em]">Contact Us</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-[#05243b] mb-6 tracking-tight leading-tight">
                            Let's Start a <br className="hidden md:block" />
                            <span className="text-[#14937a]">Conversation</span>
                        </h2>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Info Column */}
                        <div className="w-full lg:w-5/12 flex flex-col gap-8">
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 h-full relative overflow-hidden group">
                                {/* Decorative shape */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[#14937a]/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

                                <h3 className="text-2xl font-black text-[#05243b] mb-10 relative z-10">Contact Information</h3>
                                
                                <div className="space-y-10 relative z-10">
                                    <div className="flex items-start gap-6 group/item">
                                        <div className="bg-slate-50 p-4 rounded-2xl transition-all duration-300 group-hover/item:bg-[#14937a] border border-slate-100 group-hover/item:border-[#14937a]">
                                            <PhoneFilled className="text-[#14937a] text-xl group-hover/item:text-white" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Phone</p>
                                            <p className="text-xl font-black text-[#05243b] group-hover/item:text-[#14937a] transition-colors">994-494-0051</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group/item">
                                        <div className="bg-slate-50 p-4 rounded-2xl transition-all duration-300 group-hover/item:bg-[#14937a] border border-slate-100 group-hover/item:border-[#14937a]">
                                            <MailFilled className="text-[#14937a] text-xl group-hover/item:text-white" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email</p>
                                            <p className="text-lg font-black text-[#05243b] group-hover/item:text-[#14937a] transition-colors">admin@abmgroups.org</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 group/item">
                                        <div className="bg-slate-50 p-4 rounded-2xl transition-all duration-300 group-hover/item:bg-[#14937a] border border-slate-100 group-hover/item:border-[#14937a]">
                                            <EnvironmentFilled className="text-[#14937a] text-xl group-hover/item:text-white" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Location</p>
                                            <p className="text-slate-500 font-bold leading-relaxed text-sm">
                                                252, 2nd FLOOR, M G ROAD, KOTTAKUPPAM<br />
                                                VANUR TALUK, VILLUPURAM DISTRICT.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-16 flex gap-4 relative z-10">
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
                                            className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-[#14937a] hover:text-white transition-all duration-300 cursor-pointer text-xl shadow-sm border border-slate-100 hover:border-[#14937a] hover:-translate-y-1"
                                        >
                                            <item.Icon />
                                        </a>
                                    ))}
                                </div>

                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="w-full lg:w-7/12">
                            <div className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
                                <h3 className="text-2xl font-black text-[#05243b] mb-8">Send us a Message</h3>
                                <Antd.Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false} className="contact-form">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
                                        <Antd.Form.Item name="name" label={<span className="text-slate-500 font-black text-[11px] uppercase tracking-wider">Full Name *</span>} rules={[{ required: true, message: 'Required' }]}>
                                            <Antd.Input className="h-14 bg-slate-50 border-slate-200 rounded-2xl px-5 font-bold text-sm text-[#05243b] focus:border-[#14937a] focus:ring-4 focus:ring-[#14937a]/10 hover:border-slate-300 transition-all placeholder:text-slate-400 placeholder:font-medium" placeholder="e.g. John Doe" />
                                        </Antd.Form.Item>
                                        <Antd.Form.Item name="email" label={<span className="text-slate-500 font-black text-[11px] uppercase tracking-wider">Email Address *</span>} rules={[{ required: true, type: 'email', message: 'Valid email required' }]}>
                                            <Antd.Input className="h-14 bg-slate-50 border-slate-200 rounded-2xl px-5 font-bold text-sm text-[#05243b] focus:border-[#14937a] focus:ring-4 focus:ring-[#14937a]/10 hover:border-slate-300 transition-all placeholder:text-slate-400 placeholder:font-medium" placeholder="e.g. john@example.com" />
                                        </Antd.Form.Item>
                                    </div>
                                    <Antd.Form.Item name="subject" label={<span className="text-slate-500 font-black text-[11px] uppercase tracking-wider">Subject *</span>} rules={[{ required: true, message: 'Required' }]}>
                                        <Antd.Input className="h-14 bg-slate-50 border-slate-200 rounded-2xl px-5 font-bold text-sm text-[#05243b] focus:border-[#14937a] focus:ring-4 focus:ring-[#14937a]/10 hover:border-slate-300 transition-all placeholder:text-slate-400 placeholder:font-medium" placeholder="How can we help?" />
                                    </Antd.Form.Item>
                                    <Antd.Form.Item name="message" label={<span className="text-slate-500 font-black text-[11px] uppercase tracking-wider">Your Message *</span>} rules={[{ required: true, message: 'Required' }]}>
                                        <Antd.Input.TextArea rows={5} className="bg-slate-50 border-slate-200 rounded-2xl py-4 px-5 font-bold text-sm text-[#05243b] focus:border-[#14937a] focus:ring-4 focus:ring-[#14937a]/10 hover:border-slate-300 transition-all placeholder:text-slate-400 placeholder:font-medium resize-none" placeholder="Type your message here..." />
                                    </Antd.Form.Item>

                                    {error && <div className="text-red-500 text-sm mb-6 flex items-center gap-2 font-bold px-4 py-3 bg-red-50 rounded-xl border border-red-100">{error}</div>}

                                    <Antd.Button 
                                        type="primary" 
                                        htmlType="submit" 
                                        loading={loading}
                                        className="w-full h-16 rounded-[1.2rem] bg-[#14937a] hover:bg-[#05243b] border-none text-white font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-[#14937a]/20 transition-all duration-300 mt-2"
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
