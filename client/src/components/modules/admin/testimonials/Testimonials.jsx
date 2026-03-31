import React, { useState, useEffect } from 'react';
import { 
    Table, 
    Tag, 
    Space, 
    Button, 
    Typography, 
    Card, 
    Input, 
    Rate, 
    Avatar,
    message,
    Tooltip,
    Modal,
    Row,
    Col
} from 'antd';
import { 
    Search, 
    Plus, 
    CheckCircle, 
    XCircle, 
    Edit3, 
    Trash2,
    MessageSquare
} from 'lucide-react';
import dayjs from 'dayjs';

const { Title, Text } = Typography;

const AdminTestimonials = () => {
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    
    // Mock data for initial state
    const [testimonials, setTestimonials] = useState([
        {
            id: '1',
            name: "Rahul Sharma",
            course: "Master Web Development",
            rating: 5,
            message: "The web development course at BM Academy completely changed my career path.",
            status: 'approved',
            date: '2026-03-31'
        },
        {
            id: '2',
            name: "Priya Patel",
            course: "Advanced Data Science",
            rating: 5,
            message: "I was skeptical about online learning, but the experience here was incredibly interactive.",
            status: 'pending',
            date: '2026-03-30'
        },
        {
            id: '3',
            name: "Arjun Kumar",
            course: "UI/UX Mastery",
            rating: 4,
            message: "BM Academy's focus on practical design thinking was refreshing.",
            status: 'rejected',
            date: '2026-03-29'
        }
    ]);

    const handleApprove = (id) => {
        setTestimonials(prev => prev.map(t => t.id === id ? { ...t, status: 'approved' } : t));
        message.success('Testimonial approved successfully');
    };

    const handleReject = (id) => {
        setTestimonials(prev => prev.map(t => t.id === id ? { ...t, status: 'rejected' } : t));
        message.warning('Testimonial rejected');
    };

    const handleDelete = (id) => {
        Modal.confirm({
            title: 'Delete Testimonial?',
            content: 'Are you sure you want to remove this testimonial? This action cannot be undone.',
            okText: 'Yes, Delete',
            okType: 'danger',
            cancelText: 'Cancel',
            centered: true,
            onOk: () => {
                setTestimonials(prev => prev.filter(t => t.id !== id));
                message.error('Testimonial deleted');
            }
        });
    };

    const columns = [
        {
            title: 'STUDENT',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <div className="flex items-center gap-3">
                    <Avatar 
                        className="bg-[#fbe8f0] text-[#9D1B50] font-bold border-none"
                    >
                        {text.charAt(0)}
                    </Avatar>
                    <div className="text-left leading-normal">
                        <Text strong className="text-gray-900 block leading-none mb-1">{text}</Text>
                        <Text className="text-[10px] text-gray-400 font-black uppercase tracking-widest leading-none">{record.course}</Text>
                    </div>
                </div>
            )
        },
        {
            title: 'RATING',
            dataIndex: 'rating',
            key: 'rating',
            render: (rating) => <Rate disabled defaultValue={rating} className="text-sm scale-75 origin-left" />
        },
        {
            title: 'MESSAGE',
            dataIndex: 'message',
            key: 'message',
            width: '30%',
            render: (text) => <Text className="text-gray-500 font-medium italic whitespace-normal text-left block">"{text.length > 60 ? text.substring(0, 60) + '...' : text}"</Text>
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
            key: 'status',
            render: (status) => {
                const colors = {
                    approved: { bg: '#ecfdf5', text: '#10b981', border: '#10b981' },
                    pending: { bg: '#fffbeb', text: '#f59e0b', border: '#f59e0b' },
                    rejected: { bg: '#fef2f2', text: '#ef4444', border: '#ef4444' }
                };
                const config = colors[status] || colors.pending;
                return (
                    <Tag 
                        className="rounded-full border-none px-4 py-0.5 font-black text-[10px] uppercase tracking-widest"
                        style={{ backgroundColor: config.bg, color: config.text }}
                    >
                        {status}
                    </Tag>
                );
            }
        },
        {
            title: 'ACTIONS',
            key: 'actions',
            align: 'right',
            render: (_, record) => (
                <div className="flex items-center justify-end gap-2">
                    {record.status !== 'approved' && (
                        <Tooltip title="Approve">
                            <Button 
                                type="text" 
                                className="text-green-500 hover:bg-green-50 rounded-xl"
                                onClick={() => handleApprove(record.id)}
                                icon={<CheckCircle size={18} />}
                            />
                        </Tooltip>
                    )}
                    {record.status === 'pending' && (
                        <Tooltip title="Reject">
                            <Button 
                                type="text" 
                                className="text-red-400 hover:bg-red-50 rounded-xl"
                                onClick={() => handleReject(record.id)}
                                icon={<XCircle size={18} />}
                            />
                        </Tooltip>
                    )}
                    <Tooltip title="Edit">
                        <Button 
                            type="text" 
                            className="text-blue-500 hover:bg-blue-50 rounded-xl"
                            icon={<Edit3 size={18} />}
                        />
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button 
                            type="text" 
                            className="text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-xl"
                            onClick={() => handleDelete(record.id)}
                            icon={<Trash2 size={18} />}
                        />
                    </Tooltip>
                </div>
            )
        }
    ];

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#fbe8f0] rounded-full mb-3">
                        <MessageSquare size={14} className="text-[#9D1B50]" />
                        <span className="text-[11px] font-black uppercase text-[#9D1B50] tracking-widest text-left">Community Voice</span>
                    </div>
                    <Title level={2} className="m-0 font-black tracking-tight text-gray-900 text-left">
                        Testimonials <span className="text-[#9D1B50]">Manager</span>
                    </Title>
                    <Text type="secondary" className="font-bold text-sm block mt-1 text-left">
                        Curate and approve student success stories for the main website.
                    </Text>
                </div>

                <div className="flex items-center gap-3">
                    <div className="relative group">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#9D1B50] transition-colors" size={16} />
                        <Input 
                            placeholder="Search student or course..." 
                            className="h-12 pl-11 pr-6 bg-white border-gray-100 rounded-xl text-sm font-medium w-64 md:w-80 shadow-sm focus:border-[#9D1B50]/20 transition-all"
                            onChange={e => setSearchText(e.target.value)}
                        />
                    </div>
                    <Button 
                        type="primary"
                        className="h-12 px-6 rounded-xl bg-[#9D1B50] hover:bg-[#861B47] border-none font-bold flex items-center gap-2 shadow-lg shadow-[#9D1B50]/20"
                    >
                        <Plus size={18} />
                        Add Manual
                    </Button>
                </div>
            </div>

            {/* Stats Summary */}
            <Row gutter={[24, 24]}>
                {[
                    { label: 'Total Stories', value: testimonials.length, color: '#9D1B50', bg: '#fbe8f0' },
                    { label: 'Pending Approval', value: testimonials.filter(t => t.status === 'pending').length, color: '#f59e0b', bg: '#fffbeb' },
                    { label: 'Live on Site', value: testimonials.filter(t => t.status === 'approved').length, color: '#10b981', bg: '#ecfdf5' },
                ].map((stat, i) => (
                    <Col xs={24} md={8} key={i}>
                        <Card className="rounded-[2.5rem] border-gray-50 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: stat.bg, color: stat.color }}>
                                    <MessageSquare size={20} />
                                </div>
                                <div className="text-left leading-normal">
                                    <Text className="text-[10px] font-black uppercase tracking-widest text-gray-400 block leading-none mb-1">{stat.label}</Text>
                                    <span className="text-2xl font-black text-gray-900 leading-none">{stat.value}</span>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>

            {/* Testimonials Table */}
            <Card className="rounded-[2.5rem] border-gray-50 shadow-sm overflow-hidden p-2">
                <Table 
                    dataSource={testimonials.filter(t => 
                        t.name.toLowerCase().includes(searchText.toLowerCase()) || 
                        t.course.toLowerCase().includes(searchText.toLowerCase())
                    )}
                    columns={columns}
                    rowKey="id"
                    loading={loading}
                    pagination={{
                        pageSize: 10,
                        className: 'px-8 font-bold'
                    }}
                    className="admin-testimonials-table"
                />
            </Card>

            <style>{`
                .admin-testimonials-table .ant-table-thead > tr > th {
                    background: transparent !important;
                    color: #9ca3af !important;
                    font-weight: 800 !important;
                    font-size: 10px !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.1em !important;
                    padding: 24px !important;
                    border-bottom: 2px solid #f9fafb !important;
                }
                .admin-testimonials-table .ant-table-tbody > tr > td {
                    padding: 24px !important;
                    border-bottom: 1px solid #f9fafb !important;
                }
                .admin-testimonials-table .ant-table-tbody > tr:hover > td {
                    background: #fafafa !important;
                }
            `}</style>
        </div>
    );
};

export default AdminTestimonials;
