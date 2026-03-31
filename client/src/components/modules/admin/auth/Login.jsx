import React, { useState } from 'react';
import * as Antd from 'antd';
import * as LucideIcons from 'lucide-react';
import { 
    MailFilled, 
    LockFilled, 
    ArrowRightOutlined, 
    GoogleOutlined 
} from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const onFinish = async (values) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URI}users/admin/login/`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(values),
            });

            const data = await response.json();

            if (response.ok) {
                // Store the access token (it returns "access" in AdminLoginAPIView)
                localStorage.setItem('adminToken', data.access);
                localStorage.setItem('adminUser', JSON.stringify(data.admin));
                
                Antd.message.success('Welcome back, Admin!');
                navigate('/admin/dashboard');
            } else {
                setError(data.detail || data.error || 'Invalid email or password');
            }
        } catch (err) {
            console.error('Login Error:', err);
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

                <div className="max-w-md w-full relative z-10">
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-100">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#fbe8f0] rounded-2xl mb-6">
                                <LucideIcons.ShieldCheck size={32} className="text-[#9D1B50]" />
                            </div>
                            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Admin Portal</h2>
                            <p className="mt-2 text-gray-500 font-medium">Please sign in to your dashboard</p>
                        </div>

                        <Antd.Form
                            layout="vertical"
                            onFinish={onFinish}
                            requiredMark={false}
                            className="mt-8 space-y-6"
                        >
                            <Antd.Form.Item
                                name="email"
                                label={<span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest px-1">Email Address</span>}
                                rules={[{ required: true, type: 'email', message: 'Enter a valid email' }]}
                            >
                                <Antd.Input 
                                    prefix={<MailFilled className="text-gray-300 mr-2" />}
                                    className="h-14 bg-gray-50 border-none rounded-xl px-4 font-medium focus:bg-white transition-all shadow-sm"
                                    placeholder="admin@example.com"
                                />
                            </Antd.Form.Item>

                            <Antd.Form.Item
                                name="password"
                                label={<span className="text-gray-400 font-bold text-[10px] uppercase tracking-widest px-1">Password</span>}
                                rules={[{ required: true, message: 'Password is required' }]}
                            >
                                <Antd.Input.Password 
                                    prefix={<LockFilled className="text-gray-300 mr-2" />}
                                    className="h-14 bg-gray-50 border-none rounded-xl px-4 font-medium focus:bg-white transition-all shadow-sm"
                                    placeholder="••••••••"
                                />
                            </Antd.Form.Item>




                            {error && (
                                <div className="p-4 bg-red-50 rounded-xl flex items-center gap-3 text-red-500 text-sm font-bold animate-pulse">
                                    <LucideIcons.AlertCircle size={18} />
                                    {error}
                                </div>
                            )}

                            <Antd.Button
                                type="primary"
                                htmlType="submit"
                                loading={loading}
                                className="w-full h-16 rounded-2xl bg-[#9D1B50] hover:bg-[#861B47] border-none text-white font-bold text-lg flex items-center justify-center gap-3 shadow-lg shadow-[#9D1B50]/20 transition-all hover:scale-[1.01]"
                            >
                                <span>Sign In</span>
                                <ArrowRightOutlined />
                            </Antd.Button>

                        </Antd.Form>
                    </div>

                    
                    <p className="text-center mt-12 text-gray-400 text-xs font-semibold tracking-widest uppercase">
                        &copy; 2026 BM Academy. Secure Admin Access.
                    </p>
                </div>
            </div>
        </Antd.ConfigProvider>
    );
};

export default Login;
