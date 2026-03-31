import React, { useState, useEffect } from 'react';
import { 
    Table, 
    Tag, 
    Space, 
    Button, 
    Input, 
    Card, 
    Modal, 
    Typography, 
    message,
    Tooltip
} from 'antd';
import { 
    Search, 
    Mail, 
    User, 
    Calendar, 
    Eye, 
    Trash2,
    RefreshCw,
    MessageSquare
} from 'lucide-react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);


const { Title, Text } = Typography;


const AdminContact = () => {
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [selectedMessage, setSelectedMessage] = useState(null);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

    const fetchMessages = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URI}contact/all/`);
            if (response.ok) {
                const data = await response.json();
                setMessages(data);
            } else {
                message.error('Failed to fetch messages');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            message.error('Connection error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    const viewMessageDetails = (record) => {
        setSelectedMessage(record);
        setIsDetailsModalOpen(true);
    };

    const handleDeleteMessage = (id, e) => {
        if (e) e.stopPropagation();
        
        Modal.confirm({
            title: 'Delete Message',
            content: 'Are you sure you want to delete this message? This action cannot be undone.',
            okText: 'Yes, Delete',
            okType: 'danger',
            cancelText: 'Cancel',
            centered: true,
            maskClosable: true,
            onOk: async () => {
                try {
                    const response = await fetch(`${import.meta.env.VITE_BASE_URI}contact/${id}/`, {
                        method: 'DELETE',
                    });
                    
                    if (response.ok) {
                        message.success('Message deleted successfully');
                        fetchMessages();
                        setIsDetailsModalOpen(false);
                    } else {
                        message.error('Failed to delete message');
                    }
                } catch (error) {
                    console.error('Delete error:', error);
                    message.error('Connection error');
                }
            },
        });
    };


    const columns = [
        {
            title: 'SENDER',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <div className="flex flex-col">
                    <Text strong className="text-gray-900">{text}</Text>
                    <Text type="secondary" className="text-[11px] uppercase font-bold tracking-tight">{record.email}</Text>
                </div>
            ),
            filterable: true,
        },
        {
            title: 'SUBJECT',
            dataIndex: 'subject',
            key: 'subject',
            render: (text) => (
                <Text className="text-gray-600 font-medium">{text || 'No Subject'}</Text>
            ),
        },
        {
            title: 'DATE',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (date) => (
                <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={14} />
                    <span className="text-[12px] font-bold">{dayjs(date).utc(true).local().format('MMM DD, YYYY')}</span>
                </div>
            ),
            sorter: (a, b) => new Date(a.created_at) - new Date(b.created_at),
        },
        {
            title: 'ACTIONS',
            key: 'actions',
            render: (_, record) => (
                <Space size="middle">
                    <Tooltip title="View Message">
                        <Button 
                            type="text" 
                            className="bg-gray-50 hover:bg-[#fbe8f0]/50 text-gray-400 hover:text-[#9D1B50] rounded-xl flex items-center justify-center p-0 w-10 h-10 transition-all border-none"
                            onClick={() => viewMessageDetails(record)}
                        >
                            <Eye size={18} />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button 
                            type="text" 
                            className="bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-xl flex items-center justify-center p-0 w-10 h-10 transition-all border-none"
                            onClick={(e) => handleDeleteMessage(record.id, e)}
                        >
                            <Trash2 size={18} />
                        </Button>
                    </Tooltip>

                </Space>
            ),
        },
    ];

    const filteredMessages = messages.filter(msg => 
        msg.name.toLowerCase().includes(searchText.toLowerCase()) ||
        msg.email.toLowerCase().includes(searchText.toLowerCase()) ||
        msg.subject?.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#fbe8f0] rounded-full mb-3">
                        <MessageSquare size={14} className="text-[#9D1B50]" />
                        <span className="text-[11px] font-black uppercase text-[#9D1B50] tracking-widest">Inbox</span>
                    </div>
                    <Title level={2} className="m-0 font-black tracking-tight text-gray-900">Message <span className="text-[#9D1B50]">Center</span></Title>
                    <Text type="secondary" className="font-bold text-sm">Review and manage contact inquiries from students and users.</Text>
                </div>

                <div className="flex items-center gap-3">
                    <Button 
                        icon={<RefreshCw size={16} className={loading ? 'animate-spin' : ''} />} 
                        onClick={fetchMessages}
                        className="h-12 px-6 rounded-xl border-gray-100 hover:border-[#9D1B50] hover:text-[#9D1B50] font-bold transition-all shadow-sm flex items-center gap-2"
                    >
                        Refresh List
                    </Button>
                </div>
            </div>

            {/* Stats Summary (Optional) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                    { label: 'Total Inquiries', value: messages.length, color: '#9D1B50', bg: '#fbe8f0' },
                    { label: 'New Today', value: messages.filter(m => dayjs(m.created_at).utc(true).local().isSame(dayjs(), 'day')).length, color: '#3b82f6', bg: '#eff6ff' },
                    { label: 'Avg Frequency', value: '2.5 / Day', color: '#10b981', bg: '#ecfdf5' },
                ].map((stat, i) => (
                    <Card key={i} className="rounded-3xl border-gray-50 shadow-sm overflow-hidden group hover:shadow-md transition-all">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: stat.bg, color: stat.color }}>
                                <Mail size={22} />
                            </div>
                            <div>
                                <p className="text-xs font-black text-gray-400 uppercase tracking-widest m-0">{stat.label}</p>
                                <p className="text-2xl font-black text-gray-900 m-0">{stat.value}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Main Table Content */}
            <Card className="rounded-[2.5rem] border-gray-50 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                    <div className="relative w-full max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <Input 
                            placeholder="Search by name, email or subject..." 
                            value={searchText}
                            onChange={e => setSearchText(e.target.value)}
                            className="h-12 pl-12 pr-6 bg-gray-50 border-none rounded-xl text-sm font-medium w-full focus:bg-white focus:ring-2 focus:ring-[#9D1B50]/10 transition-all outline-none"
                        />
                    </div>
                </div>

                <Table 
                    columns={columns} 
                    dataSource={filteredMessages} 
                    rowKey="id"
                    loading={loading}
                    pagination={{ 
                        pageSize: 8,
                        className: 'px-6 py-4'
                    }}
                    className="admin-contact-table"
                    onRow={(record) => ({
                        onClick: () => viewMessageDetails(record),
                        className: 'cursor-pointer hover:bg-gray-50/50 transition-all'
                    })}
                />
            </Card>

            {/* Message Details Modal */}
            <Modal
                title={null}
                open={isDetailsModalOpen}
                onCancel={() => setIsDetailsModalOpen(false)}
                footer={null}
                centered
                width={700}
                className="message-details-modal"
            >
                {selectedMessage && (
                    <div className="py-6">
                        <div className="flex items-center gap-4 mb-10 pb-8 border-b border-gray-50">
                            <div className="w-16 h-16 rounded-2xl bg-[#fbe8f0] flex items-center justify-center text-[#9D1B50] font-black text-2xl shadow-sm">
                                {selectedMessage.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <Title level={3} className="m-0 font-black tracking-tight text-gray-900">{selectedMessage.name}</Title>
                                <div className="flex items-center gap-3 mt-1">
                                    <Tag color="blue" className="rounded-full px-3 py-0.5 border-none font-bold text-[11px] uppercase tracking-wider">{selectedMessage.email}</Tag>
                                    <Text className="text-gray-400 font-bold text-[12px]">{dayjs(selectedMessage.created_at).utc(true).local().format('MMM DD, YYYY - HH:mm')}</Text>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <Text type="secondary" className="text-[10px] uppercase font-black tracking-[0.2em] block mb-3 opacity-60">Subject</Text>
                                <Text className="text-xl font-bold text-gray-900 leading-tight block">
                                    {selectedMessage.subject || 'No Subject Provided'}
                                </Text>
                            </div>

                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100/50">
                                <Text type="secondary" className="text-[10px] uppercase font-black tracking-[0.2em] block mb-4 opacity-60">Message Content</Text>
                                <div className="text-gray-700 font-medium text-lg leading-relaxed whitespace-pre-wrap">
                                    {selectedMessage.message}
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex justify-end gap-4">
                            <Button 
                                type="text"
                                className="h-14 px-8 rounded-2xl font-bold bg-gray-50 text-gray-500 hover:bg-gray-100 transition-all"
                                onClick={() => setIsDetailsModalOpen(false)}
                            >
                                Close View
                            </Button>
                            <Button 
                                type="text"
                                className="h-14 px-8 rounded-2xl font-bold bg-red-50 text-red-500 hover:bg-red-100 transition-all flex items-center gap-2"
                                onClick={() => handleDeleteMessage(selectedMessage.id)}
                            >
                                <Trash2 size={18} />
                                Delete
                            </Button>

                            <Button 
                                type="primary"
                                className="h-14 px-10 rounded-2xl font-bold bg-[#9D1B50] hover:bg-[#861B47] transition-all shadow-lg shadow-[#9D1B50]/20 flex items-center gap-3"
                                onClick={() => window.location.href = `mailto:${selectedMessage.email}`}
                            >
                                <Mail size={18} />
                                <span>Reply via Email</span>
                            </Button>
                        </div>
                    </div>
                )}
            </Modal>

            <style>{`
                .admin-contact-table .ant-table-thead > tr > th {
                    background: transparent !important;
                    color: #9ca3af !important;
                    font-weight: 800 !important;
                    font-size: 11px !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.1em !important;
                    padding: 24px !important;
                    border-bottom: 1px solid #f9fafb !important;
                }
                .admin-contact-table .ant-table-tbody > tr > td {
                    padding: 24px !important;
                    border-bottom: 1px solid #f9fafb !important;
                }
                .admin-contact-table .ant-table {
                    background: transparent !important;
                }
                .message-details-modal .ant-modal-content {
                    border-radius: 3rem !important;
                    padding: 40px !important;
                }
            `}</style>
        </div>
    );
};

export default AdminContact;
