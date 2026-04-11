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
        {
            key: '/admin/enquiries',
            icon: <LucideIcons.GraduationCap size={20} />,
            label: 'Course Enquiries',
            onClick: () => navigate('/admin/enquiries')
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
            className="border-r border-gray-100 shadow-none scrollbar-hide"
            trigger={null}
        >
            <div className="flex flex-col h-full py-8">
                {/* Logo Section */}
                <div className={`mb-10 flex items-center ${collapsed ? 'justify-center px-0' : 'justify-between px-4'}`}>
                    {!collapsed && (
                        <div className="flex items-center gap-3 px-2">
                            <div className="w-9 h-9 bg-[#9D1B50] rounded-xl flex items-center justify-center text-white shadow-sm">
                                <LucideIcons.ShieldCheck size={20} />
                            </div>
                            <span className="text-[19px] font-bold text-gray-900 tracking-tight">BM Admin</span>
                        </div>
                    )}
                    <button 
                        onClick={() => setCollapsed(!collapsed)}
                        className={`p-2 hover:bg-gray-50 rounded-lg text-gray-400 transition-colors border-none bg-transparent cursor-pointer outline-none ${collapsed ? '' : ''}`}
                    >
                        {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                    </button>
                </div>

                {/* Navigation Menu */}
                <div className={`flex-1 ${collapsed ? 'px-2' : 'px-4'}`}>
                    <Menu
                        mode="inline"
                        selectedKeys={[location.pathname]}
                        items={menuItems}
                        className="border-none bg-transparent admin-sidebar-menu"
                        style={{ background: 'transparent' }}
                    />
                </div>

                {/* Footer / Profile Section */}
                <div className={`mt-auto ${collapsed ? 'px-0' : 'px-4'}`}>
                    <div className={`transition-all duration-300 flex flex-col items-center ${collapsed ? 'bg-transparent p-2' : 'bg-gray-50 p-4 rounded-[1.25rem]'}`}>
                        <div className={`flex items-center gap-3 overflow-hidden w-full ${collapsed ? 'justify-center' : ''}`}>
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${collapsed ? 'bg-transparent text-gray-400' : 'bg-[#fbe8f0] text-[#9D1B50] font-bold text-lg'}`}>
                                {collapsed ? <User size={20} /> : (adminUser.name ? adminUser.name.charAt(0).toUpperCase() : 'A')}
                            </div>
                            {!collapsed && (
                                <div className="flex-1 min-w-0">
                                    <p className="text-[15px] font-medium text-gray-900 truncate m-0 leading-tight">{adminUser.name || 'Admin User'}</p>
                                    <p className="text-[11px] uppercase font-bold text-gray-400 tracking-widest mt-1 m-0">Super Admin</p>
                                </div>
                            )}
                        </div>
                        
                        {!collapsed && (
                            <button 
                                onClick={handleLogout}
                                className="w-full mt-5 flex items-center justify-center gap-2 py-2.5 rounded-lg text-gray-500 font-medium text-[14px] hover:text-red-600 hover:bg-red-50 border-none bg-transparent cursor-pointer outline-none transition-colors duration-200"
                            >
                                <LogOut size={16} />
                                <span>Logout</span>
                            </button>
                        )}
                        
                        {collapsed && (
                            <button 
                                onClick={handleLogout}
                                className="w-full mt-4 flex items-center justify-center p-2 text-gray-400 hover:text-red-500 transition-colors border-none bg-transparent cursor-pointer outline-none"
                            >
                                <LogOut size={20} />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            <style>{`
                .admin-sidebar-menu .ant-menu-item {
                    height: 50px !important;
                    line-height: 50px !important;
                    border-radius: 10px !important;
                    margin-bottom: 6px !important;
                    font-weight: 500 !important;
                    font-size: 15px !important;
                    color: #64748b !important;
                    transition: all 0.2s ease !important;
                }
                .admin-sidebar-menu .ant-menu-item-selected {
                    background-color: #fbe8f0 !important;
                    color: #9D1B50 !important;
                    font-weight: 600 !important;
                }
                .admin-sidebar-menu .ant-menu-item-selected .ant-menu-title-content {
                    color: #9D1B50 !important;
                }
                .admin-sidebar-menu .ant-menu-item-active:not(.ant-menu-item-selected) {
                    background-color: #f8fafc !important;
                    color: #0f172a !important;
                }
                .admin-sidebar-menu.ant-menu-inline-collapsed .ant-menu-item {
                    padding: 0 !important;
                    display: flex !important;
                    align-items: center !important;
                    justify-content: center !important;
                }
                .admin-sidebar-menu.ant-menu-inline-collapsed .ant-menu-item .anticon {
                    margin: 0 !important;
                    font-size: 20px !important;
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
