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

                {/* Main Content Area - Full Expansion */}
                <Content className="p-8 lg:p-10">
                    <div className="w-full max-w-[1920px] mx-auto animate-in fade-in duration-700 slide-in-from-bottom-4">
                        <Outlet />
                    </div>
                </Content>

                {/* Modern Footer */}
                <footer className="mt-auto px-10 py-6 text-center text-gray-400 text-[11px] font-medium uppercase tracking-widest border-t border-gray-100/50">
                    &copy; 2026 <span className="text-[#9D1B50]">BM Academy</span> &bull; Premium Dashboard
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