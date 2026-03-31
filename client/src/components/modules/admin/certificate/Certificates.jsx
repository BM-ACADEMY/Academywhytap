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
    Tooltip,
    Form,
    DatePicker,
    Select
} from 'antd';
import { 
    Search, 
    Award, 
    User, 
    Calendar, 
    Eye, 
    Trash2,
    RefreshCw,
    Plus,
    Download,
    CheckCircle
} from 'lucide-react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);


const { Title, Text } = Typography;
const { Option } = Select;

const AdminCertificates = () => {
    const [certificates, setCertificates] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [isIssueModalOpen, setIsIssueModalOpen] = useState(false);
    const [form] = Form.useForm();

    const fetchCertificates = async (range = '') => {
        setLoading(true);
        try {
            const url = range 
                ? `${import.meta.env.VITE_BASE_URI}certificates/?range=${range}`
                : `${import.meta.env.VITE_BASE_URI}certificates/`;
                
            const response = await fetch(url, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                }
            });
            
            if (response.ok) {
                const result = await response.json();
                setCertificates(result.data || []);
            } else {
                message.error('Failed to fetch certificates');
            }
        } catch (error) {
            console.error('Fetch error:', error);
            message.error('Connection error');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCertificates();
    }, []);

    const handleIssueManual = async (values) => {
        setLoading(true);
        try {
            const payload = {
                name: values.name,
                course: values.course,
                issued_date: values.issued_date.format('YYYY-MM-DD'),
                certificate_type: values.type || 'Course'
            };

            const response = await fetch(`${import.meta.env.VITE_BASE_URI}certificates/manual/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                message.success('Certificate generated successfully!');
                setIsIssueModalOpen(false);
                form.resetFields();
                fetchCertificates();
            } else {
                const err = await response.json();
                message.error(err.error || 'Failed to generate certificate');
            }
        } catch (error) {
            message.error('Connection error while generating certificate');
        } finally {
            setLoading(false);
        }
    };

    const deleteCertificate = (id) => {
        Modal.confirm({
            title: 'Delete Certificate',
            content: 'Are you sure you want to delete this certificate record? This action cannot be undone.',
            okText: 'Yes, Delete',
            okType: 'danger',
            cancelText: 'Cancel',
            centered: true,
            maskClosable: true,
            onOk: async () => {
                try {
                    const response = await fetch(`${import.meta.env.VITE_BASE_URI}certificates/${id}/`, {
                        method: 'DELETE',
                        headers: {
                            'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
                        }
                    });

                    if (response.ok) {
                        message.success('Certificate record deleted successfully');
                        fetchCertificates();
                    } else {
                        message.error('Failed to delete certificate');
                    }
                } catch (error) {
                    console.error('Delete error:', error);
                    message.error('Connection error while deleting');
                }
            },
        });
    };


    const columns = [
        {
            title: 'CERTIFICATE ID',
            dataIndex: 'certificate_id',
            key: 'certificate_id',
            render: (text) => (
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-[#fbe8f0] flex items-center justify-center text-[#9D1B50]">
                        <Award size={14} />
                    </div>
                    <Text strong className="text-gray-900 font-mono text-[13px] tracking-tight">{text}</Text>
                </div>
            ),
        },
        {
            title: 'STUDENT',
            dataIndex: 'user_name',
            key: 'user_name',
            render: (text) => (
                <div className="flex items-center gap-2">
                    <User size={14} className="text-gray-400" />
                    <Text strong className="text-gray-700">{text}</Text>
                </div>
            ),
        },
        {
            title: 'COURSE',
            dataIndex: 'course_name',
            key: 'course_name',
            render: (text) => (
                <Tag className="rounded-full px-4 py-1 border-gray-100 bg-gray-50 text-gray-600 font-bold text-[11px] uppercase tracking-wider">
                    {text}
                </Tag>
            ),
        },
        {
            title: 'ISSUE DATE',
            dataIndex: 'issue_date',
            key: 'issue_date',
            render: (date) => (
                <div className="flex items-center gap-2 text-gray-400 font-bold">
                    <Calendar size={14} />
                    <span className="text-[12px]">{dayjs(date).utc(true).local().format('MMM DD, YYYY')}</span>
                </div>
            ),
        },
        {
            title: 'ACTIONS',
            key: 'actions',
            render: (_, record) => (
                <Space size="middle">
                    <Tooltip title="View Original">
                        <Button 
                            type="text" 
                            className="bg-gray-50 hover:bg-[#fbe8f0]/50 text-gray-400 hover:text-[#9D1B50] rounded-xl flex items-center justify-center p-0 w-10 h-10 transition-all border-none"
                            onClick={() => window.open(`${import.meta.env.VITE_BASE_URI}certificates/view/${record.certificate_id}/`, '_blank')}
                        >
                            <Eye size={18} />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Delete Record">
                        <Button 
                            type="text" 
                            danger
                            className="hover:bg-red-50 text-gray-400 hover:text-red-500 rounded-xl flex items-center justify-center p-0 w-10 h-10 transition-all border-none"
                            onClick={() => deleteCertificate(record.certificate_id)}
                        >
                            <Trash2 size={18} />
                        </Button>
                    </Tooltip>
                </Space>
            ),
        },
    ];

    const filteredCerts = certificates.filter(cert => 
        cert.user_name.toLowerCase().includes(searchText.toLowerCase()) ||
        cert.certificate_id.toLowerCase().includes(searchText.toLowerCase()) ||
        cert.course_name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="space-y-8 animate-in fade-in duration-700">
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#fbe8f0] rounded-full mb-3">
                        <Award size={14} className="text-[#9D1B50]" />
                        <span className="text-[11px] font-black uppercase text-[#9D1B50] tracking-widest">Academics</span>
                    </div>
                    <Title level={2} className="m-0 font-black tracking-tight text-gray-900">Certificate <span className="text-[#9D1B50]">Manager</span></Title>
                    <Text type="secondary" className="font-bold text-sm">Issue digital credentials and manage student certifications.</Text>
                </div>

                <div className="flex items-center gap-3">
                    <Button 
                        icon={<RefreshCw size={16} className={loading ? 'animate-spin' : ''} />} 
                        onClick={() => fetchCertificates()}
                        className="h-12 px-6 rounded-xl border-gray-100 hover:border-[#9D1B50] hover:text-[#9D1B50] font-bold transition-all shadow-sm flex items-center gap-2"
                    >
                        Refresh
                    </Button>
                    <Button 
                        type="primary"
                        icon={<Plus size={18} />}
                        onClick={() => setIsIssueModalOpen(true)}
                        className="h-12 px-8 rounded-xl bg-[#9D1B50] hover:bg-[#861B47] border-none font-bold shadow-lg shadow-[#9D1B50]/20 flex items-center gap-2"
                    >
                        Issue Manual
                    </Button>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: 'Total Issued', value: certificates.length, icon: Award, color: '#9D1B50', bg: '#fbe8f0' },
                    { label: 'Issued Today', value: certificates.filter(c => dayjs(c.issue_date).utc(true).local().isSame(dayjs(), 'day')).length, icon: CheckCircle, color: '#10b981', bg: '#ecfdf5' },
                    { label: 'Last 7 Days', value: certificates.filter(c => dayjs(c.issue_date).utc(true).local().isAfter(dayjs().subtract(7, 'day'))).length, icon: Calendar, color: '#3b82f6', bg: '#eff6ff' },
                    { label: 'Manual Prints', value: certificates.filter(c => c.certificate_id.startsWith('BM')).length, icon: User, color: '#f59e0b', bg: '#fffbeb' },
                ].map((stat, i) => (
                    <Card key={i} className="rounded-3xl border-gray-50 shadow-sm group hover:shadow-md transition-all overflow-hidden">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: stat.bg, color: stat.color }}>
                                <stat.icon size={22} />
                            </div>
                            <div>
                                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest m-0">{stat.label}</p>
                                <p className="text-2xl font-black text-gray-900 m-0">{stat.value}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Table Library */}
            <Card className="rounded-[2.5rem] border-gray-50 shadow-md overflow-hidden">
                <div className="p-8 border-b border-gray-50 flex flex-wrap items-center justify-between gap-4">
                    <div className="relative w-full max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <Input 
                            placeholder="Search by student, ID or course..." 
                            value={searchText}
                            onChange={e => setSearchText(e.target.value)}
                            className="h-14 pl-12 pr-6 bg-gray-50 border-none rounded-2xl text-sm font-medium w-full focus:bg-white focus:ring-4 focus:ring-[#9D1B50]/5 transition-all outline-none"
                        />
                    </div>
                    <div className="flex gap-2">
                        <Button className="rounded-xl border-gray-100 font-bold px-5 h-10 hover:border-[#9D1B50] hover:text-[#9D1B50]" onClick={() => fetchCertificates('today')}>Today</Button>
                        <Button className="rounded-xl border-gray-100 font-bold px-5 h-10 hover:border-[#9D1B50] hover:text-[#9D1B50]" onClick={() => fetchCertificates('7')}>Last 7 Days</Button>
                        <Button className="rounded-xl border-[#9D1B50] text-[#9D1B50] font-bold px-5 h-10" onClick={() => fetchCertificates()}>Show All</Button>
                    </div>
                </div>

                <Table 
                    columns={columns} 
                    dataSource={filteredCerts} 
                    rowKey="certificate_id"
                    loading={loading}
                    pagination={{ 
                        pageSize: 8,
                        className: 'px-8 py-6'
                    }}
                    className="admin-cert-table"
                />
            </Card>

            {/* Issue Manual Certificate Modal */}
            <Modal
                title={null}
                open={isIssueModalOpen}
                onCancel={() => setIsIssueModalOpen(false)}
                footer={null}
                centered
                width={800}
                className="issue-modal"
                bodyStyle={{ padding: 0 }}
            >
                <div className="p-8">
                    {/* Mockup Header */}
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center text-white shadow-lg">
                            <Plus size={24} strokeWidth={3} />
                        </div>
                        <Title level={3} className="m-0 font-black tracking-tight text-gray-900" style={{ fontSize: '24px' }}>Manual Generator</Title>
                    </div>

                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={handleIssueManual}
                        initialValues={{ issued_date: dayjs(), type: 'Course' }}
                        className="manual-generator-form"
                    >
                        <div className="flex flex-col gap-8">
                            {/* Row 1: Recipient Name */}
                            <Form.Item 
                                label={<span className="text-[12px] font-black text-gray-400 uppercase tracking-widest mb-2 block">RECIPIENT NAME</span>} 
                                name="name" 
                                rules={[{ required: true, message: 'Recipient name required' }]}
                            >
                                <Input 
                                    className="h-16 rounded-2xl bg-white border-[1.5px] border-gray-100 font-bold px-6 text-lg text-gray-800 placeholder:text-gray-300 focus:border-black/10 transition-all shadow-sm" 
                                    placeholder="e.g. John Doe" 
                                />
                            </Form.Item>

                            {/* Row 2: Type & Issue Date */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <Form.Item 
                                    label={<span className="text-[12px] font-black text-gray-400 uppercase tracking-widest mb-2 block">TYPE</span>} 
                                    name="type"
                                >
                                    <Select 
                                        className="h-16 rounded-2xl custom-select-premium shadow-sm"
                                        placeholder="-- Select (Default: Course) --"
                                    >
                                        <Option value="Course">Course</Option>
                                        <Option value="Internship">Internship</Option>
                                        <Option value="Workshop">Workshop</Option>
                                    </Select>
                                </Form.Item>
                                
                                <Form.Item 
                                    label={<span className="text-[12px] font-black text-gray-400 uppercase tracking-widest mb-2 block">ISSUE DATE</span>} 
                                    name="issued_date" 
                                    rules={[{ required: true }]}
                                >
                                    <DatePicker 
                                        className="h-16 rounded-2xl bg-white border-[1.5px] border-gray-100 font-bold w-full px-6 text-lg shadow-sm" 
                                        format="DD-MM-YYYY"
                                        placeholder="DD-MM-YYYY"
                                    />
                                </Form.Item>
                            </div>

                            {/* Row 3: Course Title */}
                            <Form.Item 
                                label={<span className="text-[12px] font-black text-gray-400 uppercase tracking-widest mb-2 block">COURSE TITLE</span>} 
                                name="course" 
                                rules={[{ required: true, message: 'Course title required' }]}
                            >
                                <Input 
                                    className="h-16 rounded-2xl bg-white border-[1.5px] border-gray-100 font-bold px-6 text-lg text-gray-800 placeholder:text-gray-300 focus:border-black/10 transition-all shadow-sm" 
                                    placeholder="e.g. Advanced React Development" 
                                />
                            </Form.Item>
                        </div>

                        {/* Generate Button */}
                        <div className="mt-12">
                            <Button 
                                type="primary"
                                htmlType="submit"
                                loading={loading}
                                className="w-full h-16 rounded-2xl bg-black hover:bg-zinc-800 border-none font-black text-lg shadow-xl flex items-center justify-center gap-3 uppercase tracking-widest transition-all hover:scale-[1.01] active:scale-[0.98]"
                            >
                                <Award size={22} strokeWidth={2.5} />
                                Generate
                            </Button>
                        </div>
                    </Form>
                </div>
            </Modal>

            <style>{`
                .admin-cert-table .ant-table-thead > tr > th {
                    background: transparent !important;
                    color: #9ca3af !important;
                    font-weight: 800 !important;
                    font-size: 11px !important;
                    text-transform: uppercase !important;
                    letter-spacing: 0.12em !important;
                    padding: 24px 32px !important;
                    border-bottom: 1px solid #f9fafb !important;
                }
                .admin-cert-table .ant-table-tbody > tr > td {
                    padding: 20px 32px !important;
                    border-bottom: 1px solid #f9fafb !important;
                }
                .issue-modal .ant-modal-content {
                    border-radius: 2rem !important;
                    overflow: hidden !important;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15) !important;
                }
                .custom-select-premium .ant-select-selector {
                    height: 64px !important;
                    background-color: #fff !important;
                    border: 1.5px solid #f3f4f6 !important;
                    border-radius: 1rem !important;
                    display: flex !important;
                    align-items: center !important;
                    padding: 0 24px !important;
                    font-weight: 700 !important;
                    font-size: 18px !important;
                    transition: all 0.3s ease !important;
                }
                .custom-select-premium:hover .ant-select-selector {
                    border-color: rgba(0,0,0,0.1) !important;
                }
                .manual-generator-form .ant-form-item-label {
                    padding-bottom: 4px !important;
                }
                .manual-generator-form .ant-input:focus, .manual-generator-form .ant-input-focused {
                    border-color: rgba(0,0,0,0.1) !important;
                    box-shadow: 0 0 0 4px rgba(0,0,0,0.02) !important;
                }
            `}</style>
        </div>
    );
};

export default AdminCertificates;
