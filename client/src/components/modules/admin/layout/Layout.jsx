import React, { useState } from 'react';
import { Layout as AntLayout, Badge, Dropdown, message } from 'antd';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { 
    Bell, 
    Search, 
    User,
    Settings,
    HelpCircle
} from 'lucide-react';

const { Content, Header } = AntLayout;

const Layout = () => {
    // Lift state up to sync Sidebar and Layout
    const [collapsed, setCollapsed] = useState(false);
    
    // Get user from localStorage
    const adminUser = JSON.parse(localStorage.getItem('adminUser') || '{}');

    return (
        <AntLayout style={{ height: '100vh', overflow: 'hidden', background: '#fafafa' }}>
            {/* Custom Sidebar with Shared State */}
            <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

            <AntLayout 
                className="site-layout" 
                style={{ 
                    height: '100vh',
                    overflowY: 'auto',
                    background: '#fafafa',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                }}
            >

                {/* Modern Admin Header - True Flush Alignment */}
                <Header 
                    className="sticky top-0 z-40 px-8 py-0 h-20 flex items-center justify-between border-b border-gray-100 backdrop-blur-md"
                    style={{ 
                        background: 'rgba(255, 255, 255, 0.85)', 
                        borderBottom: '1px solid #f1f1f1',
                        width: '100%',
                        padding: '0 32px',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                    }}
                >

                    <div className="flex items-center gap-6">
                        <div className="relative group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#9D1B50] transition-colors" size={18} />
                            <input 
                                type="text" 
                                placeholder="Search everything..." 
                                className="h-11 pl-12 pr-6 bg-gray-50 border-none rounded-xl text-sm font-medium focus:bg-white focus:ring-2 focus:ring-[#9D1B50]/10 transition-all w-64 md:w-96 outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Badge count={5} size="small" offset={[-2, 2]} color="#9D1B50">
                            <button className="w-11 h-11 bg-gray-50 rounded-xl flex items-center justify-center text-gray-400 hover:text-[#9D1B50] hover:bg-[#fbe8f0]/50 transition-all border-none cursor-pointer">
                                <Bell size={20} />
                            </button>
                        </Badge>

                        <div className="w-px h-8 bg-gray-100 mx-3"></div>

                        <Dropdown 
                            menu={{ 
                                items: [
                                    { key: '1', label: 'My Profile', icon: <User size={16} /> },
                                    { key: '2', label: 'Settings', icon: <Settings size={16} /> },
                                    { key: '3', label: 'Help Center', icon: <HelpCircle size={16} /> },
                                ],
                                className: 'rounded-xl p-2 font-bold'
                            }} 
                            trigger={['click']}
                            placement="bottomRight"
                        >
                            {/* Added bg-transparent and leading-normal to reset AntD styles */}
                            <button className="flex items-center gap-3 p-1.5 rounded-2xl bg-transparent hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100 cursor-pointer leading-normal">
                                <div className="w-10 h-10 rounded-xl bg-[#fbe8f0] flex items-center justify-center text-[#9D1B50] font-bold shadow-sm">
                                    {adminUser.name ? adminUser.name.charAt(0).toUpperCase() : 'A'}
                                </div>
                                <div className="text-left hidden lg:block">
                                    <p className="text-xs font-black text-gray-900 leading-none mb-1 m-0">{adminUser.name || 'Admin User'}</p>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest m-0">SUPER ADMIN</p>
                                </div>
                            </button>
                        </Dropdown>
                    </div>
                </Header>

                {/* Main Content Area - Full Expansion */}
                <Content className="p-8 lg:p-10">
                    <div className="w-full max-w-[1920px] mx-auto animate-in fade-in duration-700 slide-in-from-bottom-4">
                        <Outlet />
                    </div>
                </Content>

                {/* Modern Footer */}
                <footer className="mt-auto px-10 py-8 text-center text-gray-400 text-[10px] font-black uppercase tracking-widest border-t border-gray-50">
                    &copy; 2026 <span className="text-[#9D1B50]">BM Academy</span> &bull; Premium Dashboard v1.0.0
                </footer>
            </AntLayout>

            <style>{`
                .site-layout {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                
                .ant-menu-item-selected {
                    background: #fbe8f0 !important;
                    color: #9D1B50 !important;
                }
                
                ::selection {
                    background: #9D1B50;
                    color: white;
                }

                .animate-in {
                    animation-fill-mode: forwards;
                }
            `}</style>
        </AntLayout>
    );
};

export default Layout;