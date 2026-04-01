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
        const token = localStorage.getItem('adminToken');
        if (!token) return;

        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URI}contact/all/`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            if (response.ok) {
                const data = await response.json();
                setMessages(data);
            } else if (response.status !== 401) {
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
            okType: 'default',
            okButtonProps: { 
                className: "border-gray-200 text-gray-600 hover:!border-red-500 hover:!bg-red-50 hover:!text-red-600 shadow-sm transition-all"
            },
            cancelText: 'Cancel',
            cancelButtonProps: { className: "hover:!border-[#9D1B50] hover:!text-[#9D1B50]" },
            centered: true,
            maskClosable: true,
            onOk: async () => {
                try {
                    const token = localStorage.getItem('adminToken');
                    const response = await fetch(`${import.meta.env.VITE_BASE_URI}contact/${id}/`, {
                        method: 'DELETE',
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
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
                <div className="flex items-center gap-3">
                    <Button 
                        type="default" 
                        icon={<Eye size={16} className="text-current" />}
                        className="flex items-center justify-center gap-2 rounded-lg border-[#9D1B50]/30 text-[#9D1B50] hover:!border-[#9D1B50] hover:!bg-[#9D1B50] hover:!text-white transition-all font-medium h-9 px-4 shadow-sm"
                        onClick={() => viewMessageDetails(record)}
                    >
                        View
                    </Button>
                    <Button 
                        type="default" 
                        icon={<Trash2 size={16} className="text-current" />}
                        className="flex items-center justify-center gap-2 rounded-lg border-gray-200 text-gray-600 hover:!border-red-500 hover:!bg-red-50 hover:!text-red-600 transition-all font-medium h-9 px-4 shadow-sm"
                        onClick={(e) => handleDeleteMessage(record.id, e)}
                    >
                        Delete
                    </Button>
                </div>
            ),
        },
    ];

    const filteredMessages = messages.filter(msg => 
        msg.name.toLowerCase().includes(searchText.toLowerCase()) ||
        msg.email.toLowerCase().includes(searchText.toLowerCase()) ||
        msg.subject?.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="space-y-8 animate-in fade-in duration-700 admin-contact-wrapper">
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
                        className="h-12 px-6 rounded-xl border-gray-100 hover:!border-[#9D1B50] hover:!text-[#9D1B50] font-bold transition-all shadow-sm flex items-center gap-2"
                    >
                        Refresh List
                    </Button>
                </div>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                    { label: 'Total Inquiries', value: messages.length, color: 'from-[#9D1B50] to-[#821440]', icon: Mail },
                    { label: 'New Today', value: messages.filter(m => dayjs(m.created_at).utc(true).local().isSame(dayjs(), 'day')).length, color: 'from-blue-500 to-indigo-600', icon: Mail },
                    { label: 'Avg Frequency', value: '2.5', labelSuffix: '/ Day', color: 'from-emerald-400 to-teal-600', icon: Mail },
                ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-[2rem] p-6 pr-8 border border-gray-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-5px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-[0.04] rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110`} />
                        <div className="flex items-center gap-5 relative z-10">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${stat.color} text-white shadow-md transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}>
                                <stat.icon size={26} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                                <div className="flex items-baseline gap-2">
                                  <p className="text-3xl font-medium text-gray-900 m-0 tracking-tight leading-none">{stat.value}</p>
                                  {stat.labelSuffix && <span className="text-xs font-bold text-gray-400">{stat.labelSuffix}</span>}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Table Content */}
            <Card className="rounded-[2.5rem] border-gray-50 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                    <div className="relative w-full max-w-md cursor-pointer">
                        <Input 
                            prefix={<Search className="text-gray-400 mr-2" size={18} />}
                            placeholder="Search by name, email or subject..." 
                            value={searchText}
                            onChange={e => setSearchText(e.target.value)}
                            className="h-12 px-6 bg-gray-50 border-none rounded-[2rem] text-sm font-medium w-full focus-within:!bg-white focus-within:!ring-2 focus-within:!ring-[#9D1B50]/20 transition-all outline-none group hover:bg-white"
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
                    <div className="py-2">
                        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-50">
                            <div className="w-16 h-16 rounded-2xl bg-[#fbe8f0] flex items-center justify-center text-[#9D1B50] font-black text-2xl">
                                {selectedMessage.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <h3 className="text-2xl m-0 font-medium text-gray-900">{selectedMessage.name}</h3>
                                <div className="flex items-center gap-3 mt-1">
                                    <Tag color="blue" className="px-2 py-0.5 border-none font-bold text-[11px] uppercase tracking-wider bg-blue-50 text-blue-600 m-0">{selectedMessage.email}</Tag>
                                    <span className="text-gray-900 font-bold text-[13px]">{dayjs(selectedMessage.created_at).utc(true).local().format('MMM DD, YYYY - HH:mm')}</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <span className="text-[12px] uppercase font-bold tracking-widest text-gray-400 block mb-2">Subject</span>
                                <span className="text-[15px] text-gray-900 block">
                                    {selectedMessage.subject || 'No Subject Provided'}
                                </span>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-[1.25rem]">
                                <span className="text-[12px] uppercase font-bold tracking-widest text-gray-400 block mb-3">Message Content</span>
                                <div className="text-[#334155] text-[15px] leading-relaxed whitespace-pre-wrap">
                                    {selectedMessage.message}
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end items-center gap-6">
                            <button 
                                className="text-gray-600 font-medium text-[14px] hover:text-gray-900 transition-colors bg-transparent border-none cursor-pointer outline-none"
                                onClick={() => setIsDetailsModalOpen(false)}
                            >
                                Close View
                            </button>
                            <button 
                                className="text-gray-600 font-medium text-[14px] hover:text-gray-900 transition-colors flex items-center gap-2 bg-transparent border-none cursor-pointer outline-none"
                                onClick={() => handleDeleteMessage(selectedMessage.id)}
                            >
                                <Trash2 size={16} />
                                Delete
                            </button>

                            <Button 
                                type="primary"
                                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${selectedMessage.email?.trim()}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ 
                                    backgroundColor: '#9D1B50', 
                                    color: 'white', 
                                    border: 'none', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: '8px', 
                                    height: '40px', 
                                    padding: '0 24px', 
                                    borderRadius: '8px',
                                    fontWeight: 500,
                                    cursor: 'pointer'
                                }}
                            >
                                <Mail size={16} />
                                <span>Reply via Email</span>
                            </Button>
                        </div>
                    </div>
                )}
            </Modal>

            <style>{`
                .admin-contact-table .ant-table-thead > tr > th {
                    background: #fcfcfc !important;
                    color: #6b7280 !important;
                    font-weight: 700 !important;
                    font-size: 12px !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.05em !important;
                    padding: 18px 24px !important;
                    border-bottom: 2px solid #f3f4f6 !important;
                }
                .admin-contact-table .ant-table-thead > tr > th::before {
                    display: none !important;
                }
                .admin-contact-table .ant-table-tbody > tr > td {
                    padding: 24px !important;
                    border-bottom: 1px solid #f9fafb !important;
                }
                .admin-contact-table .ant-table {
                    background: transparent !important;
                }
                
                /* Pagination Theming */
                .admin-contact-wrapper .ant-pagination-item-active {
                    border-color: #9D1B50 !important;
                    background-color: #fbe8f0 !important;
                }
                .admin-contact-wrapper .ant-pagination-item-active a {
                    color: #9D1B50 !important;
                }
                .admin-contact-wrapper .ant-pagination-item:hover {
                    border-color: #9D1B50 !important;
                }
                .admin-contact-wrapper .ant-pagination-item:hover a {
                    color: #9D1B50 !important;
                }
                .admin-contact-wrapper .ant-pagination-prev:hover .ant-pagination-item-link,
                .admin-contact-wrapper .ant-pagination-next:hover .ant-pagination-item-link {
                    color: #9D1B50 !important;
                    border-color: #9D1B50 !important;
                }

                /* Input Overrides */
                .admin-contact-wrapper .ant-input:hover,
                .admin-contact-wrapper .ant-input-affix-wrapper:hover {
                    border-color: #9D1B50 !important;
                }
                .admin-contact-wrapper .ant-input:focus,
                .admin-contact-wrapper .ant-input-focused,
                .admin-contact-wrapper .ant-input-affix-wrapper:focus,
                .admin-contact-wrapper .ant-input-affix-wrapper-focused {
                    border-color: #9D1B50 !important;
                    box-shadow: 0 0 0 2px rgba(157, 27, 80, 0.1) !important;
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
