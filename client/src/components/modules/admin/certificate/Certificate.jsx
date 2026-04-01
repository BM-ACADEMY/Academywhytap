// File: admin/src/Components/Pages/Certificate.jsx

import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { 
    Table, 
    Tag, 
    Space, 
    Button, 
    Input, 
    Card, 
    Modal, 
    Typography, 
    Tooltip,
    Select,
    Form,
    DatePicker,
    Row,
    Col,
    message
} from 'antd';
import { 
    Award, 
    GraduationCap, 
    FileText, 
    Download, 
    X, 
    Signature, 
    Copy, 
    History, 
    Trash2,
    RefreshCw,
    Search,
    PlusCircle,
    CheckCircle2,
    Calendar,
    ExternalLink
} from 'lucide-react';
import dayjs from 'dayjs';
import CertificatePreview from "./Certificatepreview";
import adminApi from "../../../../api/adminApi";

const { Title, Text } = Typography;
const { Option } = Select;

// Use centralized API for session stability
const API = adminApi;

export default function Certificate() {
  const [certificates, setCertificates] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [searchText, setSearchText] = useState('');

  // Auto Issue State
  const [issueForm] = Form.useForm();
  const [manualForm] = Form.useForm();

  // Preview State
  const certificateRef = useRef(null);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewData, setPreviewData] = useState(null);
  const [downloading, setDownloading] = useState(false);

  // Modal State
  const [isIssueModalOpen, setIsIssueModalOpen] = useState(false);

  /* ---------------- FETCH DATA ---------------- */
  const fetchData = async () => {
    setFetchLoading(true);
    try {
      const [certRes, userRes] = await Promise.all([
        API.get("certificates/"),
        API.get("users/list-with-courses/")
      ]);
      setCertificates(certRes.data.data || certRes.data);
      setUsers(userRes.data.data || userRes.data);
    } catch (err) {
      message.error("Failed to sync certificate data");
    } finally {
      setFetchLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  /* ---------------- HANDLERS ---------------- */
  const handleAutoIssue = async (values) => {
    setLoading(true);
    try {
      const res = await API.post("certificates/", {
        user_id: values.user,
        course_id: values.course,
      });
      message.success("Certificate issued successfully!");
      
      const newCert = {
        ...res.data.data,
        user_name: res.data.data.name,
        course_name: res.data.data.course
      };
      setCertificates(prev => [newCert, ...prev]);
      issueForm.resetFields();
    } catch {
      message.error("Failed to issue certificate");
    } finally {
      setLoading(false);
    }
  };

  const handleManualIssue = async (values) => {
    setLoading(true);
    try {
      const payload = {
        name: values.name,
        course: values.course,
        issued_date: values.issued_date ? values.issued_date.format('YYYY-MM-DD') : dayjs().format('YYYY-MM-DD'),
        certificate_type: values.certificate_type || "Course"
      };

      const res = await API.post("certificates/manual/", payload);
      message.success(`Generated ID: ${res.data.certificate_id}`);

      setCertificates(prev => [
        {
          certificate_id: res.data.certificate_id,
          user_name: res.data.name,
          course_name: res.data.course,
          certificate_type: res.data.certificate_type,
          issue_date: res.data.issued_date,
        },
        ...prev,
      ]);
      manualForm.resetFields();
      setIsIssueModalOpen(false);
    } catch {
      message.error("Failed to create manual certificate");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    Modal.confirm({
      title: 'Delete Certificate',
      content: 'Are you sure you want to delete this certificate? This action cannot be undone.',
      okText: 'Delete',
      okType: 'default',
      okButtonProps: { 
        className: "border-gray-200 text-gray-600 hover:!border-red-500 hover:!bg-red-50 hover:!text-red-600 shadow-sm transition-all"
      },
      cancelText: 'Cancel',
      cancelButtonProps: { className: "hover:!border-[#9D1B50] hover:!text-[#9D1B50]" },
      centered: true,
      onOk: async () => {
        try {
          await API.delete(`certificates/${id}/`);
          setCertificates(prev => prev.filter(c => c.certificate_id !== id));
          message.success("Certificate removed from registry");
        } catch {
          message.error("Failed to delete certificate");
        }
      }
    });
  };

  const handleDownloadPdf = async () => {
    if (!certificateRef.current) return message.error("Preview engine not ready");
    setDownloading(true);
    try {
        await certificateRef.current.downloadPdf();
        message.success("Certificate download initiated");
    } catch (err) {
        message.error("PDF generation failed");
    } finally {
        setDownloading(false);
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    message.success({ content: "ID Copied", duration: 1 });
  };

  /* ---------------- TABLE CONFIG ---------------- */
  const columns = [
    {
      title: 'CERTIFICATE ID',
      dataIndex: 'certificate_id',
      key: 'certificate_id',
      render: (id) => (
        <Tooltip title="Click to copy ID">
          <div 
            onClick={(e) => { e.stopPropagation(); copyToClipboard(id); }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-gray-50 border border-gray-100 rounded-lg cursor-pointer hover:border-[#9D1B50] transition-all group"
          >
            <span className="font-mono text-[11px] font-bold text-gray-500 group-hover:text-[#9D1B50]">
              {id?.substring(0, 16)}...
            </span>
            <Copy size={12} className="text-gray-300 group-hover:text-[#9D1B50]" />
          </div>
        </Tooltip>
      )
    },
    {
      title: 'RECIPIENT',
      key: 'recipient',
      render: (_, record) => (
        <div className="flex flex-col">
          <Text strong className="text-gray-900">{record.user_name || record.manual_name}</Text>
          <div className="flex items-center gap-1">
             <Tag color={(record.certificate_type || "Course") === 'Internship' ? 'purple' : 'magenta'} className="text-[10px] uppercase font-bold border-none px-2 py-0 leading-none">
                {record.certificate_type || "Course"}
             </Tag>
          </div>
        </div>
      )
    },
    {
      title: 'COURSE / TITLE',
      dataIndex: 'course_name',
      key: 'course_name',
      render: (text, record) => (
        <Text className="text-gray-600 font-medium">{text || record.manual_course}</Text>
      )
    },
    {
      title: 'ISSUED ON',
      dataIndex: 'issue_date',
      key: 'issue_date',
      render: (date) => (
        <div className="flex items-center gap-2 text-gray-400">
          <Calendar size={14} />
          <span className="text-[12px] font-bold">{dayjs(date).format('MMM DD, YYYY')}</span>
        </div>
      ),
      sorter: (a, b) => new Date(a.issue_date) - new Date(b.issue_date),
    },
    {
      title: 'ACTIONS',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button 
            type="default"
            icon={<ExternalLink size={16} className="text-current" />}
            className="flex items-center justify-center gap-2 rounded-lg border-[#9D1B50]/30 text-[#9D1B50] hover:!border-[#9D1B50] hover:!bg-[#9D1B50] hover:!text-white transition-all font-medium h-9 px-4 shadow-sm"
            onClick={() => {
              setPreviewData({
                name: record.user_name || record.manual_name,
                course: record.course_name || record.manual_course,
                certificate_type: record.certificate_type || "Course",
                certificate_id: record.certificate_id,
                issued_date: dayjs(record.issue_date).format('MM/DD/YYYY'),
              });
              setPreviewOpen(true);
            }}
          >
            Preview
          </Button>
          <Button 
            type="default" 
            icon={<Trash2 size={16} className="text-current" />}
            className="flex items-center justify-center gap-2 rounded-lg border-gray-200 text-gray-600 hover:!border-red-500 hover:!bg-red-50 hover:!text-red-600 transition-all font-medium h-9 px-4 shadow-sm"
            onClick={(e) => { e.stopPropagation(); handleDelete(record.certificate_id); }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const filteredCerts = certificates.filter(c => 
    (c.user_name || c.manual_name || '').toLowerCase().includes(searchText.toLowerCase()) ||
    (c.course_name || c.manual_course || '').toLowerCase().includes(searchText.toLowerCase()) ||
    (c.certificate_id || '').toLowerCase().includes(searchText.toLowerCase())
  );

  const selectedUserId = Form.useWatch('user', issueForm);
  const enrolledCourses = selectedUserId
    ? (users.find(u => String(u.id) === String(selectedUserId))?.enrolled_courses || []).filter(c => c.status === "Completed")
    : [];

  return (
    <div className="space-y-8 animate-in fade-in duration-700 certificate-module-wrapper">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#fbe8f0] rounded-full mb-3">
            <Award size={14} className="text-[#9D1B50]" />
            <span className="text-[11px] font-black uppercase text-[#9D1B50] tracking-widest">Credentials</span>
          </div>
          <Title level={2} className="m-0 font-black tracking-tight text-gray-900">Certificate <span className="text-[#9D1B50]">Center</span></Title>
          <Text type="secondary" className="font-bold text-sm">Issue, Track, and Manage official academy certifications.</Text>
        </div>

        <div className="flex items-center gap-3">
          <Button 
            type="primary"
            icon={<PlusCircle size={16} />}
            onClick={() => setIsIssueModalOpen(true)}
            className="h-12 px-6 rounded-xl !bg-[#9D1B50] hover:!bg-[#821440] border-none shadow-lg shadow-[#9D1B50]/20 font-bold flex items-center gap-2"
          >
            Issue Certificate
          </Button>
          <Button 
            icon={<RefreshCw size={16} className={fetchLoading ? 'animate-spin' : ''} />} 
            onClick={fetchData}
            className="h-12 px-6 rounded-xl border-gray-100 hover:!border-[#9D1B50] hover:!text-[#9D1B50] font-bold transition-all shadow-sm flex items-center gap-2"
          >
            Refresh List
          </Button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[
          { label: 'Total Issued', value: certificates.length, color: 'from-[#9D1B50] to-[#821440]', icon: Award },
          { label: 'Newly Added', value: certificates.filter(c => dayjsByDate(c.issue_date).isSame(dayjs(), 'day')).length, color: 'from-blue-500 to-indigo-600', icon: CheckCircle2 },
          { label: 'Active Students', value: users.length, color: 'from-emerald-400 to-teal-600', icon: GraduationCap },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-[2rem] p-6 pr-8 border border-gray-100 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_-5px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-[0.04] rounded-bl-full -mr-8 -mt-8 transition-transform duration-500 group-hover:scale-110`} />
            <div className="flex items-center gap-5 relative z-10">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${stat.color} text-white shadow-md transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110`}>
                <stat.icon size={26} strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-1">{stat.label}</p>
                <p className="text-3xl font-medium text-gray-900 m-0 tracking-tight leading-none">{stat.value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Row gutter={[24, 24]}>
        {/* Auto Generator */}
        {/* <Col xs={24} xl={12}>
          <Card 
            title={<div className="flex items-center gap-2 font-black py-2"><PlusCircle size={20} className="text-[#9D1B50]" /> Auto Issue</div>}
            className="rounded-[2.5rem] border-gray-50 shadow-sm h-full"
          >
            <Form form={issueForm} layout="vertical" onFinish={handleAutoIssue} className="px-2">
              <Form.Item name="user" label="SELECT STUDENT" rules={[{ required: true, message: 'Select recipient' }]}>
                <Select size="large" showSearch placeholder="Search by name or email" className="w-full custom-antd-select">
                  {users.map(u => <Option key={u.id} value={u.id}>{u.name || u.email}</Option>)}
                </Select>
              </Form.Item>
              <Form.Item name="course" label="COMPLETED COURSE" rules={[{ required: true, message: 'Select course' }]}>
                <Select size="large" placeholder={enrolledCourses.length ? "Select a course" : "No completed courses found"} disabled={!selectedUserId} className="w-full custom-antd-select">
                   {enrolledCourses.map(c => <Option key={c.id} value={c.id}>{c.title}</Option>)}
                </Select>
              </Form.Item>
              <Button type="primary" htmlType="submit" size="large" block loading={loading} className="h-14 mt-4 bg-[#9D1B50] rounded-2xl font-bold shadow-lg shadow-[#9D1B50]/20 flex items-center justify-center gap-2">
                {!loading && <Award size={18} />} Issue Certificate
              </Button>
            </Form>
          </Card>
        </Col> */}

        {/* Manual Generator Moved to Modal */}
      </Row>

      {/* History Card */}
      <Card className="rounded-[2.5rem] border-gray-50 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <Title level={4} className="m-0 font-black tracking-tight text-gray-900">Issuance <span className="text-[#9D1B50]">Registry</span></Title>
            <Text type="secondary" className="text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400 mt-2 block">Complete historical audit of all credentials</Text>
          </div>
          <div className="w-full max-w-md">
            <Input 
              prefix={<Search className="text-gray-400 group-focus-within:text-[#9D1B50] transition-colors mr-2" size={18} />}
              placeholder="Search ID, student or course..." 
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              className="group h-12 px-5 bg-gray-50/80 border border-gray-100 hover:bg-gray-100/50 hover:border-[#9D1B50]/30 rounded-2xl text-sm font-medium w-full focus-within:!bg-white focus-within:!border-[#9D1B50]/50 focus-within:ring-4 focus-within:ring-[#9D1B50]/10 transition-all shadow-sm"
            />
          </div>
        </div>

        <Table 
          columns={columns} 
          dataSource={filteredCerts} 
          rowKey="certificate_id"
          loading={fetchLoading}
          pagination={{ 
            pageSize: 6,
            className: 'px-8 py-4'
          }}
          className="admin-contact-table"
        />
      </Card>

      {/* Issue Modal */}
      <Modal
        title={<div className="flex items-center gap-2 font-black text-xl"><Signature size={24} className="text-[#9D1B50]" /> Issue Manual Certificate</div>}
        open={isIssueModalOpen}
        onCancel={() => {
          setIsIssueModalOpen(false);
          manualForm.resetFields();
        }}
        footer={null}
        centered
        className="issue-certificate-modal"
      >
        <Form form={manualForm} layout="vertical" onFinish={handleManualIssue} className="px-2 mt-6" initialValues={{ certificate_type: 'Course' }}>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="name" label="RECIPIENT NAME" rules={[{ required: true }]}>
                <Input size="large" placeholder="John Doe" className="bg-gray-50 border-none rounded-xl h-12" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="certificate_type" label="TYPE">
                <Select size="large" className="custom-antd-select">
                  <Option value="Course">Course</Option>
                  <Option value="Internship">Internship</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="issued_date" label="ISSUE DATE">
                <DatePicker size="large" className="w-full bg-gray-50 border-none rounded-xl h-12" />
              </Form.Item>
            </Col>
            <Col span={24}>
               <Form.Item name="course" label="COURSE/TITLE" rules={[{ required: true }]}>
                <Input size="large" placeholder="Advanced Digital Marketing" className="bg-gray-50 border-none rounded-xl h-12" />
              </Form.Item>
            </Col>
          </Row>
          <Button type="primary" htmlType="submit" size="large" block loading={loading} className="h-14 mt-4 bg-gray-900 rounded-2xl font-bold flex items-center justify-center gap-2">
            {!loading && <Signature size={18} />} Generate Custom
          </Button>
        </Form>
      </Modal>

      {/* Preview Modal */}
      <Modal
        title={null}
        open={previewOpen}
        onCancel={() => setPreviewOpen(false)}
        footer={null}
        centered
        width={1000}
        closeIcon={false}
        className="certificate-preview-modal"
      >
        <div className="py-2">
            <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-50">
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-[#fbe8f0] flex items-center justify-center text-[#9D1B50] shadow-sm">
                        <Award size={30} />
                    </div>
                    <div>
                        <Title level={4} className="m-0 font-black tracking-tight">Certificate <span className="text-[#9D1B50]">Preview</span></Title>
                        <Text type="secondary" className="text-xs font-bold uppercase tracking-widest">{previewData?.certificate_id}</Text>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Button 
                        type="primary"
                        icon={<Download size={18} />}
                        loading={downloading}
                        onClick={handleDownloadPdf}
                        className="h-12 px-8 rounded-xl font-bold !bg-[#9D1B50] hover:!bg-[#821440] border-none shadow-lg shadow-[#9D1B50]/20 flex items-center gap-2"
                    >
                        Save PDF
                    </Button>
                    <Button 
                        type="text"
                        icon={<X size={18} />}
                        onClick={() => setPreviewOpen(false)}
                        className="h-12 w-12 rounded-xl flex items-center justify-center bg-gray-50 text-gray-400 hover:!bg-gray-200 hover:!text-gray-800"
                    />
                </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-4xl flex justify-center items-center overflow-auto max-h-[70vh]">
               <div className="shadow-2xl py-4">
                    {previewData && (
                        <CertificatePreview
                          ref={certificateRef}
                          name={previewData.name}
                          course={previewData.course}
                          issued_date={previewData.issued_date}
                          certificate_type={previewData.certificate_type}
                          certificate_id={previewData.certificate_id}
                        />
                    )}
               </div>
            </div>
        </div>
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
        .custom-antd-select .ant-select-selector {
          background-color: #f9fafb !important;
          border: none !important;
          border-radius: 0.75rem !important;
          height: 3rem !important;
          display: flex !important;
          align-items: center !important;
        }
        .certificate-preview-modal .ant-modal-content {
          border-radius: 3rem !important;
          padding: 40px !important;
        }
        .issue-certificate-modal .ant-modal-content {
          border-radius: 2rem !important;
          padding: 24px !important;
        }
        /* Override Ant Design default blue colors */
        .certificate-module-wrapper .ant-input:hover,
        .certificate-module-wrapper .ant-input-affix-wrapper:hover {
          border-color: #9D1B50 !important;
        }
        .certificate-module-wrapper .ant-input:focus,
        .certificate-module-wrapper .ant-input-focused,
        .certificate-module-wrapper .ant-input-affix-wrapper:focus,
        .certificate-module-wrapper .ant-input-affix-wrapper-focused {
          border-color: #9D1B50 !important;
          box-shadow: 0 0 0 2px rgba(157, 27, 80, 0.1) !important;
        }
        .certificate-module-wrapper .ant-pagination-item-active {
          border-color: #9D1B50 !important;
          background-color: #fbe8f0 !important;
        }
        .certificate-module-wrapper .ant-pagination-item-active a {
          color: #9D1B50 !important;
        }
        .certificate-module-wrapper .ant-pagination-item:hover,
        .certificate-module-wrapper .ant-pagination-prev:hover .ant-pagination-item-link,
        .certificate-module-wrapper .ant-pagination-next:hover .ant-pagination-item-link {
          border-color: #9D1B50 !important;
          color: #9D1B50 !important;
        }
      `}</style>
    </div>
  );
}

// Helper to avoid dayjs check errors
function dayjsByDate(date) {
    if(!date) return dayjs('1900-01-01');
    return dayjs(date);
}
