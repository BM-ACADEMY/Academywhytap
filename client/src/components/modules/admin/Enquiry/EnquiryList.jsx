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
    GraduationCap,
    BookOpen,
    Phone
} from 'lucide-react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const { Title, Text } = Typography;

const EnquiryList = () => {
    const [enquiries, setEnquiries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [selectedEnquiry, setSelectedEnquiry] = useState(null);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

    const fetchEnquiries = async () => {
        const token = localStorage.getItem('adminToken');
        // Even if no token, we can try to fetch if permission is AllowAny
        setLoading(true);
        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URI}enquiry/list/`);
            if (response.ok) {
                const data = await response.json();
                setEnquiries(data);
            } else {
                message.error('Failed to fetch enquiries');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            message.error('Connection error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchEnquiries();
    }, []);

    const viewDetails = (record) => {
        setSelectedEnquiry(record);
        setIsDetailsModalOpen(true);
    };

    const handleDelete = (id, e) => {
        if (e) e.stopPropagation();
        
        Modal.confirm({
            title: 'Delete Enquiry',
            content: 'Are you sure you want to delete this enquiry? This action cannot be undone.',
            okText: 'Yes, Delete',
            okType: 'danger',
            centered: true,
            onOk: async () => {
                try {
                    const response = await fetch(`${import.meta.env.VITE_BASE_URI}enquiry/${id}/`, {
                        method: 'DELETE',
                    });
                    
                    if (response.ok) {
                        message.success('Enquiry deleted successfully');
                        fetchEnquiries();
                        setIsDetailsModalOpen(false);
                    } else {
                        message.error('Failed to delete enquiry');
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
            title: 'STUDENT',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <div className="flex flex-col">
                    <Text strong className="text-gray-900">{text}</Text>
                    <div className="flex items-center gap-1.5 mt-0.5">
                        <Mail size={12} className="text-gray-400" />
                        <Text type="secondary" className="text-[11px] font-bold uppercase tracking-tight">{record.email}</Text>
                    </div>
                </div>
            ),
        },
        {
            title: 'CONTACT',
            dataIndex: 'phone',
            key: 'phone',
            render: (text) => (
                <div className="flex items-center gap-2 text-gray-600">
                    <Phone size={14} className="text-slate-400" />
                    <span className="font-semibold text-xs">{text}</span>
                </div>
            ),
        },
        {
            title: 'COURSE',
            dataIndex: 'course',
            key: 'course',
            render: (text) => (
                <Tag color="cyan" className="px-3 py-1 border-none font-black text-[10px] uppercase tracking-wider bg-cyan-50 text-cyan-600 rounded-lg">
                    {text}
                </Tag>
            ),
        },
        {
            title: 'DATE',
            dataIndex: 'created_at',
            key: 'created_at',
            render: (date) => (
                <div className="flex items-center gap-2 text-gray-400">
                    <Calendar size={14} />
                    <span className="text-[12px] font-bold">{dayjs(date).format('MMM DD, YYYY')}</span>
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
                        icon={<Eye size={16} />}
                        className="flex items-center justify-center gap-2 rounded-lg border-teal-100 text-[#2a9b87] hover:!border-[#2a9b87] hover:!bg-[#2a9b87] hover:!text-white transition-all font-medium h-9 px-4 shadow-sm"
                        onClick={() => viewDetails(record)}
                    >
                        View
                    </Button>
                    <Button 
                        type="default" 
                        icon={<Trash2 size={16} />}
                        className="flex items-center justify-center gap-2 rounded-lg border-gray-100 text-gray-400 hover:!border-red-500 hover:!bg-red-50 hover:!text-red-600 transition-all font-medium h-9 px-4 shadow-sm"
                        onClick={(e) => handleDelete(record.id, e)}
                    >
                        Delete
                    </Button>
                </div>
            ),
        },
    ];

    const filteredData = enquiries.filter(item => 
        item.name.toLowerCase().includes(searchText.toLowerCase()) ||
        item.email.toLowerCase().includes(searchText.toLowerCase()) ||
        item.course.toLowerCase().includes(searchText.toLowerCase()) ||
        item.phone.includes(searchText)
    );

    return (
        <div className="space-y-8 animate-in fade-in duration-700 admin-enquiry-wrapper">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan-50 rounded-full mb-3">
                        <GraduationCap size={14} className="text-cyan-600" />
                        <span className="text-[11px] font-black uppercase text-cyan-600 tracking-widest">New Leads</span>
                    </div>
                    <Title level={2} className="m-0 font-black tracking-tight text-gray-900">Course <span className="text-[#2a9b87]">Enquiries</span></Title>
                    <Text type="secondary" className="font-bold text-sm text-slate-400">Manage and track student registrations from your "Apply Now" form.</Text>
                </div>

                <div className="flex items-center gap-3">
                    <Button 
                        icon={<RefreshCw size={16} className={loading ? 'animate-spin' : ''} />} 
                        onClick={fetchEnquiries}
                        className="h-12 px-6 rounded-xl border-slate-100 hover:!border-[#2a9b87] hover:!text-[#2a9b87] font-bold transition-all shadow-sm flex items-center gap-2"
                    >
                        Refresh
                    </Button>
                </div>
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                    { label: 'Total Enquiries', value: enquiries.length, color: 'from-cyan-500 to-blue-600', icon: GraduationCap },
                    { label: 'Today\'s Leads', value: enquiries.filter(m => dayjs(m.created_at).isSame(dayjs(), 'day')).length, color: 'from-[#2a9b87] to-[#14937a]', icon: Calendar },
                    { label: 'Courses Active', value: [...new Set(enquiries.map(e => e.course))].length, color: 'from-orange-400 to-amber-600', icon: BookOpen },
                ].map((stat, i) => (
                    <div key={i} className="bg-white rounded-[2rem] p-6 pr-8 border border-slate-50 shadow-sm hover:shadow-md transition-all duration-300 group relative overflow-hidden">
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-[0.05] rounded-bl-full -mr-8 -mt-8`} />
                        <div className="flex items-center gap-5 relative z-10">
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${stat.color} text-white shadow-md`}>
                                <stat.icon size={26} strokeWidth={2.5} />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
                                <p className="text-3xl font-medium text-gray-900 m-0 tracking-tight">{stat.value}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main Table Content */}
            <Card className="rounded-[2.5rem] border-slate-50 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-50">
                    <div className="relative w-full max-w-md">
                        <Input 
                            prefix={<Search className="text-slate-400 mr-2" size={18} />}
                            placeholder="Search student, email, or course..." 
                            value={searchText}
                            onChange={e => setSearchText(e.target.value)}
                            className="h-12 px-6 bg-slate-50 border-none rounded-[2rem] text-sm font-medium w-full focus-within:!bg-white focus-within:!ring-2 focus-within:!ring-teal-500/20 transition-all outline-none"
                        />
                    </div>
                </div>

                <Table 
                    columns={columns} 
                    dataSource={filteredData} 
                    rowKey="id"
                    loading={loading}
                    pagination={{ pageSize: 8, className: 'px-6 py-4' }}
                    className="admin-enquiry-table"
                    onRow={(record) => ({
                        onClick: () => viewDetails(record),
                        className: 'cursor-pointer'
                    })}
                />
            </Card>

            {/* Details Modal */}
            <Modal
                title={null}
                open={isDetailsModalOpen}
                onCancel={() => setIsDetailsModalOpen(false)}
                footer={null}
                centered
                width={650}
                className="enquiry-details-modal"
            >
                {selectedEnquiry && (
                    <div className="py-2">
                        <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-50">
                            <div className="w-16 h-16 rounded-2xl bg-teal-50 flex items-center justify-center text-[#2a9b87] font-black text-2xl">
                                {selectedEnquiry.name.charAt(0).toUpperCase()}
                            </div>
                            <div>
                                <h3 className="text-2xl m-0 font-medium text-gray-900">{selectedEnquiry.name}</h3>
                                <div className="flex items-center gap-3 mt-1">
                                    <Tag color="cyan" className="px-2 py-0.5 border-none font-bold text-[11px] uppercase tracking-wider bg-cyan-50 text-cyan-600 m-0">{selectedEnquiry.email}</Tag>
                                    <span className="text-slate-400 font-bold text-[13px]">{dayjs(selectedEnquiry.created_at).format('MMM DD, YYYY - HH:mm')}</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8 mb-8">
                            <div>
                                <span className="text-[11px] uppercase font-black tracking-[0.2em] text-slate-400 block mb-2">Interested Course</span>
                                <div className="flex items-center gap-2 text-gray-900 font-medium">
                                    <BookOpen size={16} className="text-[#2a9b87]" />
                                    <span>{selectedEnquiry.course}</span>
                                </div>
                            </div>
                            <div>
                                <span className="text-[11px] uppercase font-black tracking-[0.2em] text-slate-400 block mb-2">Phone Number</span>
                                <div className="flex items-center gap-2 text-gray-900 font-medium">
                                    <Phone size={16} className="text-[#2a9b87]" />
                                    <span>{selectedEnquiry.phone}</span>
                                </div>
                            </div>
                            <div>
                                <span className="text-[11px] uppercase font-black tracking-[0.2em] text-slate-400 block mb-2">Qualification</span>
                                <div className="flex items-center gap-2 text-gray-900 font-medium">
                                    <GraduationCap size={16} className="text-[#2a9b87]" />
                                    <span>{selectedEnquiry.qualification}</span>
                                </div>
                            </div>
                            <div>
                                <span className="text-[11px] uppercase font-black tracking-[0.2em] text-slate-400 block mb-2">Passing Year</span>
                                <div className="flex items-center gap-2 text-gray-900 font-medium">
                                    <Calendar size={16} className="text-[#2a9b87]" />
                                    <span>{selectedEnquiry.passing_year}</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end gap-4">
                            <Button 
                                className="h-10 px-6 rounded-xl border-slate-100 font-bold text-slate-500"
                                onClick={() => setIsDetailsModalOpen(false)}
                            >
                                Close
                            </Button>
                            <Button 
                                type="primary"
                                danger
                                icon={<Trash2 size={16} />}
                                className="h-10 px-6 rounded-xl font-bold flex items-center gap-2"
                                onClick={() => handleDelete(selectedEnquiry.id)}
                            >
                                Delete Enquiry
                            </Button>
                        </div>
                    </div>
                )}
            </Modal>

            <style>{`
                .admin-enquiry-table .ant-table-thead > tr > th {
                    background: #fcfcfc !important;
                    color: #94a3b8 !important;
                    font-weight: 800 !important;
                    font-size: 11px !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.1em !important;
                    padding: 20px 24px !important;
                    border-bottom: 2px solid #f8fafc !important;
                }
                .admin-enquiry-table .ant-table-tbody > tr > td {
                    padding: 20px 24px !important;
                    border-bottom: 1px solid #f8fafc !important;
                }
                .enquiry-details-modal .ant-modal-content {
                    border-radius: 2.5rem !important;
                    padding: 40px !important;
                }
            `}</style>
        </div>
    );
};

export default EnquiryList;
