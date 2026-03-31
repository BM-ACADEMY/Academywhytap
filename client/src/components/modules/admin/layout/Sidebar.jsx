import React from 'react';
import { Layout, Menu, message } from 'antd';
import * as LucideIcons from 'lucide-react';
import { 
    LayoutDashboard, 
    Award, 
    Mail, 
    ChevronLeft, 
    ChevronRight,
    LogOut,
    User
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = ({ collapsed, setCollapsed }) => {
    const navigate = useNavigate();
    const location = useLocation();

    // Get user from localStorage (set during login)
    const adminUser = JSON.parse(localStorage.getItem('adminUser') || '{}');

    const menuItems = [
        {
            key: '/admin/dashboard',
            icon: <LayoutDashboard size={20} />,
            label: 'Dashboard',
            onClick: () => navigate('/admin/dashboard')
        },
        {
            key: '/admin/certificates',
            icon: <Award size={20} />,
            label: 'Certificates',
            onClick: () => navigate('/admin/certificates')
        },
        {
            key: '/admin/messages',
            icon: <Mail size={20} />,
            label: 'Message Center',
            onClick: () => navigate('/admin/messages')
        },
    ];

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminUser');
        message.success('Logged out successfully');
        navigate('/admin/login');
    };

    return (
        <Sider 
            collapsible 
            collapsed={collapsed} 
            onCollapse={(value) => setCollapsed(value)}
            width={280}
            theme="light"
            style={{ height: '100vh', overflowY: 'auto' }}
            className="border-r border-gray-100 shadow-[20px_0_50px_rgba(0,0,0,0.02)] scrollbar-hide"
            trigger={null}
        >


            <div className="flex flex-col h-full py-8">
                {/* Logo Section */}
                <div className="px-4 mb-12 flex items-center justify-between">
                    {!collapsed && (
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-[#9D1B50] rounded-xl flex items-center justify-center text-white shadow-lg shadow-[#9D1B50]/20">
                                <LucideIcons.ShieldCheck size={24} />
                            </div>
                            <span className="text-xl font-black text-gray-900 tracking-tight">BM Admin</span>
                        </div>
                    )}
                    <button 
                        onClick={() => setCollapsed(!collapsed)}
                        className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 transition-all ml-auto"
                    >
                        {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                    </button>
                </div>

                {/* Navigation Menu */}
                <div className="flex-1 px-4">
                    <Menu
                        mode="inline"
                        selectedKeys={[location.pathname]}
                        items={menuItems}
                        className="border-none bg-transparent admin-sidebar-menu"
                        style={{ background: 'transparent' }}
                    />
                </div>

                {/* Footer / Profile Section */}
                <div className="px-4 mt-auto">
                    <div className={`p-4 rounded-2xl transition-all duration-300 ${collapsed ? 'bg-transparent' : 'bg-gray-50 border border-gray-100'}`}>
                        <div className="flex items-center gap-4 overflow-hidden">
                            <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-[#9D1B50] shadow-sm shrink-0">
                                <User size={20} />
                            </div>
                            {!collapsed && (
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-bold text-gray-900 truncate">{adminUser.name || 'Admin'}</p>
                                    <p className="text-[10px] uppercase font-black text-gray-400 tracking-wider">Super Admin</p>
                                </div>
                            )}
                        </div>
                        
                        {!collapsed && (
                            <button 
                                onClick={handleLogout}
                                className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-red-50 text-red-500 font-bold text-sm hover:bg-red-500 hover:text-white transition-all duration-300"
                            >
                                <LogOut size={16} />
                                <span>Logout</span>
                            </button>
                        )}
                        
                        {collapsed && (
                            <button 
                                onClick={handleLogout}
                                className="w-full mt-4 flex items-center justify-center p-2 text-gray-400 hover:text-red-500 transition-all"
                            >
                                <LogOut size={20} />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
                .admin-sidebar-menu .ant-menu-item {
                    height: 56px !important;
                    line-height: 56px !important;
                    border-radius: 14px !important;
                    margin-bottom: 8px !important;
                    font-weight: 600 !important;
                    color: #6b7280 !important;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
                }
                .admin-sidebar-menu .ant-menu-item-selected {
                    background-color: #fbe8f0 !important;
                    color: #9D1B50 !important;
                }
                .admin-sidebar-menu .ant-menu-item-selected .ant-menu-title-content {
                    color: #9D1B50 !important;
                }
                .admin-sidebar-menu .ant-menu-item-active {
                    background-color: #f9fafb !important;
                    color: #9D1B50 !important;
                }
                .admin-sidebar-menu.ant-menu-inline-collapsed .ant-menu-item {
                    padding: 0 calc((80px - 20px) / 2) !important;
                }
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }

            `}</style>
        </Sider>
    );
};

export default Sidebar;
