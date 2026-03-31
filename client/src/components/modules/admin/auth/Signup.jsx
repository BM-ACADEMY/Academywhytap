import React, { useState } from 'react';
import * as Antd from 'antd';
import * as LucideIcons from 'lucide-react';
import { 
    UserOutlined,
    MailOutlined, 
    LockOutlined, 
    PhoneOutlined,
    ArrowLeftOutlined 
} from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        setLoading(true);
        setError(null);
        try {
            // Use the general signup endpoint from the backend
            const response = await fetch(`${import.meta.env.VITE_BASE_URI}users/signup/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (response.ok) {
                Antd.message.success('Account created successfully! Please login.');
                navigate('/admin/login');
            } else {
                setError(data.error || 'Signup failed. Please check your details.');
            }
        } catch (err) {
            console.error('Signup Error:', err);
            setError('Connection failed. Please check your network.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Antd.ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#9D1B50',
                    borderRadius: 12,
                }
            }}
        >
            <div className="min-h-screen flex items-center justify-center bg-[#fafafa] relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
                {/* Modern Background Decor */}
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#9D1B50]/5 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#9D1B50]/5 rounded-full blur-3xl"></div>

                <div className="max-w-2xl w-full relative z-10">
                    <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
                        
                        <Link to="/admin/login" className="inline-flex items-center gap-2 text-gray-400 hover:text-[#9D1B50] font-bold text-sm mb-10 transition-colors group">
                            <ArrowLeftOutlined className="group-hover:-translate-x-1 transition-transform" />
                            <span>Back to Login</span>
                        </Link>

                        <div className="text-left mb-12">
                            <h2 className="text-4xl font-black text-gray-900 tracking-tight">Create Account</h2>
                            <p className="mt-4 text-gray-500 font-medium text-lg leading-relaxed">Join the BM Academy administrative team and start managing your workspace.</p>
                        </div>

                        <Antd.Form
                            layout="vertical"
                            onFinish={onFinish}
                            requiredMark={false}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                                <Antd.Form.Item
                                    name="name"
                                    label={<span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest px-1">Full Name</span>}
                                    rules={[{ required: true, message: 'Your name is required' }]}
                                >
                                    <Antd.Input 
                                        prefix={<UserOutlined className="text-gray-300 mr-2" />}
                                        className="h-14 bg-gray-50 border-none rounded-xl px-4 font-medium focus:bg-white transition-all shadow-sm"
                                        placeholder="John Wick"
                                    />
                                </Antd.Form.Item>

                                <Antd.Form.Item
                                    name="email"
                                    label={<span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest px-1">Email Address</span>}
                                    rules={[{ required: true, type: 'email', message: 'Enter a valid email' }]}
                                >
                                    <Antd.Input 
                                        prefix={<MailOutlined className="text-gray-300 mr-2" />}
                                        className="h-14 bg-gray-50 border-none rounded-xl px-4 font-medium focus:bg-white transition-all shadow-sm"
                                        placeholder="john@example.com"
                                    />
                                </Antd.Form.Item>

                                <Antd.Form.Item
                                    name="phone"
                                    label={<span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest px-1">Phone Number</span>}
                                    rules={[{ required: true, message: 'Phone is required' }]}
                                >
                                    <Antd.Input 
                                        prefix={<PhoneOutlined className="text-gray-300 mr-2" />}
                                        className="h-14 bg-gray-50 border-none rounded-xl px-4 font-medium focus:bg-white transition-all shadow-sm"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </Antd.Form.Item>

                                <Antd.Form.Item
                                    name="password"
                                    label={<span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest px-1">Password</span>}
                                    rules={[
                                        { required: true, message: 'Password is required' },
                                        { min: 6, message: 'Min 6 characters' }
                                    ]}
                                >
                                    <Antd.Input.Password 
                                        prefix={<LockOutlined className="text-gray-300 mr-2" />}
                                        className="h-14 bg-gray-50 border-none rounded-xl px-4 font-medium focus:bg-white transition-all shadow-sm"
                                        placeholder="••••••••"
                                    />
                                </Antd.Form.Item>
                            </div>

                            <Antd.Form.Item className="mt-4">
                                <Antd.Checkbox className="text-gray-500 font-semibold text-sm">
                                    I agree to the <a href="#" className="text-[#9D1B50] hover:underline">Terms of Service</a> and <a href="#" className="text-[#9D1B50] hover:underline">Privacy Policy</a>
                                </Antd.Checkbox>
                            </Antd.Form.Item>

                            {error && (
                                <div className="p-4 bg-red-50 rounded-xl flex items-center gap-3 text-red-500 text-sm font-bold">
                                    <LucideIcons.AlertCircle size={18} />
                                    {error}
                                </div>
                            )}

                            <div className="flex flex-col md:flex-row items-center gap-6 pt-4">
                                <Antd.Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={loading}
                                    className="w-full md:w-56 h-16 rounded-2xl bg-[#9D1B50] hover:bg-[#861B47] border-none text-white font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-[#9D1B50]/20 transition-all hover:scale-[1.01]"
                                >
                                    <span>Create Account</span>
                                    <LucideIcons.UserPlus size={20} />
                                </Antd.Button>
                                
                                <p className="text-gray-500 font-medium">
                                    Already have an account? 
                                    <Link to="/admin/login" className="ml-2 text-[#9D1B50] font-bold hover:underline">Sign In</Link>
                                </p>
                            </div>
                        </Antd.Form>
                    </div>

                    <p className="text-center mt-12 text-gray-400 text-xs font-semibold tracking-widest uppercase mb-12">
                        &copy; 2026 BM Academy. Premium Administrative System.
                    </p>
                </div>
            </div>
        </Antd.ConfigProvider>
    );
};

export default Signup;
