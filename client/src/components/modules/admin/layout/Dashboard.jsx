import React, { useState, useEffect } from 'react';
import { 
    Card, 
    Typography, 
    Row, 
    Col, 
    Statistic, 
    Button, 
    Table, 
    Tag, 
    message 
} from 'antd';
import { 
    LayoutDashboard, 
    Award, 
    Mail, 
    Users, 
    ArrowUpRight, 
    MessageSquare,
    ClipboardList,
    TrendingUp,
    MousePointer2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

const { Title, Text } = Typography;

const Dashboard = () => {
    const navigate = useNavigate();
    const [stats, setStats] = useState({
        totalMessages: 0,
        newMessagesToday: 0,
        totalCertificates: 0,
        recentMessages: []
    });
    const [loading, setLoading] = useState(true);

    // Get admin user from localStorage
    const adminUser = JSON.parse(localStorage.getItem('adminUser') || '{}');

    const fetchDashboardData = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('adminToken');
            const headers = token ? { 'Authorization': `Bearer ${token}` } : {};

            // Fetch Messages
            const msgResponse = await fetch(`${import.meta.env.VITE_BASE_URI}contact/all/`, { headers });
            let messages = [];
            if (msgResponse.ok) {
                messages = await msgResponse.json();
            }

            // Fetch Certificates
            const certResponse = await fetch(`${import.meta.env.VITE_BASE_URI}certificates/`, { headers });
            let certificates = [];
            if (certResponse.ok) {
                const certData = await certResponse.json();
                certificates = certData.data || [];
            }


            // Calculate Today's Messages
            const today = dayjs().format('YYYY-MM-DD');
            const todayMessages = messages.filter(m => dayjs(m.created_at).format('YYYY-MM-DD') === today);

            setStats({
                totalMessages: messages.length,
                newMessagesToday: todayMessages.length,
                totalCertificates: certificates.length,
                recentMessages: messages.slice(0, 5) // Last 5 messages
            });
        } catch (error) {
            console.error('Dashboard data error:', error);
            message.error('Failed to update live dashboard stats');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDashboardData();
    }, []);

    const kpiCards = [
        {
            title: 'Total Enquiries',
            value: stats.totalMessages,
            icon: <Mail size={24} />,
            color: '#9D1B50',
            bg: '#fbe8f0',
            trend: '+12% from last month'
        },
        {
            title: 'Issued Certificates',
            value: stats.totalCertificates,
            icon: <Award size={24} />,
            color: '#3b82f6',
            bg: '#eff6ff',
            trend: 'Direct Issue active'
        },
        {
            title: 'New Messages',
            value: stats.newMessagesToday,
            icon: <MessageSquare size={24} />,
            color: '#10b981',
            bg: '#ecfdf5',
            description: 'Received in last 24h'
        },
        {
            title: 'Platform Hits',
            value: '4.2k',
            icon: <MousePointer2 size={24} />,
            color: '#f59e0b',
            bg: '#fffbeb',
            trend: 'Live Tracking'
        },
    ];

    return (
        <div className="space-y-10">
            {/* Welcome Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#fbe8f0] rounded-full mb-3">
                        <TrendingUp size={14} className="text-[#9D1B50]" />
                        <span className="text-[11px] font-black uppercase text-[#9D1B50] tracking-widest text-left">Live Analytics</span>
                    </div>
                    <Title level={2} className="m-0 font-black tracking-tight text-gray-900 text-left">
                        Welcome Back, <span className="text-[#9D1B50]">{adminUser.name || 'Admin'}</span>
                    </Title>
                    <Text type="secondary" className="font-bold text-sm block mt-1 text-left">
                        Here's what's happening at BM Academy today.
                    </Text>
                </div>

                <div className="flex items-center gap-3">
                    <Button 
                        type="primary"
                        onClick={() => navigate('/admin/certificates')}
                        className="h-12 px-6 rounded-xl bg-gray-900 hover:bg-black border-none font-bold flex items-center gap-2 shadow-lg shadow-black/10"
                    >
                        <Award size={18} />
                        Issue Certificate
                    </Button>
                </div>
            </div>

            {/* KPI Grid */}
            <Row gutter={[24, 24]}>
                {kpiCards.map((card, i) => (
                    <Col xs={24} sm={12} lg={6} key={i}>
                        <Card 
                            className="rounded-3xl border-gray-50 shadow-sm hover:shadow-md transition-all group overflow-hidden relative"
                            bodyStyle={{ padding: '24px' }}
                        >
                            <div className="flex flex-col gap-4">
                                <div 
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                                    style={{ backgroundColor: card.bg, color: card.color }}
                                >
                                    {card.icon}
                                </div>
                                
                                <div>
                                    <Text className="text-[11px] font-black text-gray-400 uppercase tracking-widest block mb-1">
                                        {card.title}
                                    </Text>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-black text-gray-900">{card.value}</span>
                                        {card.trend && <Text className="text-[10px] font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-full">{card.trend}</Text>}
                                    </div>
                                    {card.description && <Text className="text-[11px] font-medium text-gray-400 block mt-1">{card.description}</Text>}
                                </div>
                            </div>
                            
                            {/* Decorative Pattern */}
                            <div className="absolute -right-4 -bottom-4 opacity-[0.03] text-gray-900 group-hover:opacity-[0.05] transition-opacity">
                                {card.icon}
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row gutter={[24, 24]}>
                {/* RecentActivity / Latest Messages */}
                <Col xs={24} lg={16}>
                    <Card 
                        title={
                            <div className="flex items-center justify-between w-full py-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-gray-900 flex items-center justify-center text-white shadow-lg">
                                        <ClipboardList size={20} />
                                    </div>
                                    <span className="font-black text-gray-900 tracking-tight">Recent Inquiries</span>
                                </div>
                                <Button 
                                    type="text" 
                                    className="text-[#9D1B50] font-black text-xs uppercase tracking-widest hover:bg-[#fbe8f0]"
                                    onClick={() => navigate('/admin/messages')}
                                >
                                    View All
                                </Button>
                            </div>
                        }
                        className="rounded-[2.5rem] border-gray-50 shadow-sm overflow-hidden"
                    >
                        <Table 
                            dataSource={stats.recentMessages}
                            rowKey="id"
                            pagination={false}
                            loading={loading}
                            columns={[
                                {
                                    title: 'SENDER',
                                    dataIndex: 'name',
                                    key: 'name',
                                    render: (text) => <Text strong className="text-gray-900">{text}</Text>
                                },
                                {
                                    title: 'SUBJECT',
                                    dataIndex: 'subject',
                                    key: 'subject',
                                    render: (text) => <Text className="text-gray-500 font-medium">{text || 'General Inquiry'}</Text>
                                },
                                {
                                    title: 'DATE',
                                    dataIndex: 'created_at',
                                    key: 'created_at',
                                    render: (date) => <Text className="text-gray-400 font-bold text-xs">{dayjs(date).format('MMM DD')}</Text>
                                },
                                {
                                    title: 'STATUS',
                                    key: 'status',
                                    render: () => <Tag color="processing" className="rounded-full border-none px-3 font-bold text-[10px] uppercase">New</Tag>
                                }
                            ]}
                        />
                    </Card>
                </Col>

                {/* Quick Shortcuts */}
                <Col xs={24} lg={8}>
                    <Card 
                        title={
                            <div className="flex items-center gap-3 py-2 text-left">
                                <div className="w-10 h-10 rounded-xl bg-[#fbe8f0] flex items-center justify-center text-[#9D1B50] shadow-sm">
                                    <ArrowUpRight size={20} />
                                </div>
                                <span className="font-black text-gray-900 tracking-tight">Quick Actions</span>
                            </div>
                        }
                        className="rounded-[2.5rem] border-gray-50 shadow-sm h-full"
                    >
                        <div className="flex flex-col gap-4">
                            {[
                                { label: 'Issue Membership Certificate', icon: <Award size={18} />, color: '#9D1B50', path: '/admin/certificates' },
                                { label: 'Manage Contact Enquiries', icon: <Mail size={18} />, color: '#3b82f6', path: '/admin/messages' },
                                { label: 'Update Academy Policy', icon: <ClipboardList size={18} />, color: '#10b981', path: '#' },
                                { label: 'User Management', icon: <Users size={18} />, color: '#f59e0b', path: '#' },
                            ].map((item, i) => (
                                <Button 
                                    key={i}
                                    onClick={() => navigate(item.path)}
                                    className="h-16 rounded-2xl border-gray-50 bg-gray-50 hover:bg-white hover:border-[#9D1B50]/20 hover:shadow-md transition-all flex items-center justify-between px-6 group"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="text-gray-400 group-hover:text-[#9D1B50] transition-colors">
                                            {item.icon}
                                        </div>
                                        <span className="font-bold text-gray-700 text-sm group-hover:text-gray-900 transition-colors text-left">{item.label}</span>
                                    </div>
                                    <ArrowUpRight size={16} className="text-gray-300 group-hover:text-[#9D1B50] transition-colors" />
                                </Button>
                            ))}
                        </div>
                    </Card>
                </Col>
            </Row>

            <style>{`
                .ant-card-head {
                    border-bottom: 1px solid #f9fafb !important;
                    padding: 0 32px !important;
                    min-height: 80px !important;
                }
                .ant-table-thead > tr > th {
                    background: transparent !important;
                    color: #9ca3af !important;
                    font-weight: 800 !important;
                    font-size: 10px !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.1em !important;
                    padding: 24px !important;
                }
                .ant-table-tbody > tr > td {
                    padding: 24px !important;
                    border-bottom: 1px solid #f9fafb !important;
                }
            `}</style>
        </div>
    );
};

export default Dashboard;
