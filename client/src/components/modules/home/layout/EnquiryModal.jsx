import React, { useState } from 'react';
import { Modal, Form, Input, Select, Button, ConfigProvider, App } from 'antd';
import { X, User, Phone, Mail, GraduationCap, Calendar, BookOpen, Send } from 'lucide-react';
import axios from 'axios';

const { Option } = Select;

const EnquiryModalContent = ({ isOpen, onClose }) => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const { message } = App.useApp();

  // Get the base URI from environment variables
  const API_BASE_URL = import.meta.env.VITE_BASE_URI.endsWith('/') 
    ? import.meta.env.VITE_BASE_URI 
    : `${import.meta.env.VITE_BASE_URI}/`;

  const courses = [
    "Data Analytics",
    "Full Stack Development",
    "Digital Marketing",
    "Data Science",
    "Video Editing",
    "Other"
  ];

  const qualifications = [
    "Master's Degree",
    "Bachelor's Degree",
    "Diploma",
    "12th",
    "10th",
    "Other"
  ];

  const passingYears = [
    "2026", "2025", "2024", "2023", "2022", "2021", "2020", "Before 2020"
  ];

  const onFinish = async (values) => {
    setLoading(true);
    try {
      // Fix: Use correct endpoint path (VITE_BASE_URI already contains /api/)
      const response = await axios.post(`${API_BASE_URL}enquiry/list/`.replace('list/', 'create/'), values);
      
      if (response.status === 201) {
        message.success('Thank you! Your enquiry has been submitted successfully.');
        form.resetFields();
        setTimeout(() => {
          onClose();
        }, 1500);
      }
    } catch (error) {
      console.error('Enquiry Submission Error:', error);
      message.error(error.response?.data?.message || 'Failed to submit enquiry. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal
      title={null}
      open={isOpen}
      onCancel={onClose}
      footer={null}
      width={480}
      closeIcon={null}
      centered
      styles={{ 
        content: { overflow: 'hidden', padding: 0 },
        mask: { backdropFilter: 'blur(8px)', backgroundColor: 'rgba(5, 36, 59, 0.4)' }
      }}
    >
      <div className="relative bg-white font-sans">
        
        {/* Branded Header Section */}
        <div className="bg-[#05243b] p-8 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#2a9b87]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#2a9b87]/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
          
          <h2 className="text-2xl font-black text-white relative z-10 tracking-tight">
            Start Your Journey
          </h2>
          <p className="text-[#2a9b87] text-sm font-bold uppercase tracking-widest mt-1 relative z-10">
            BM Academy Enquiry Form
          </p>

          <button 
            onClick={onClose}
            type="button"
            className="absolute top-4 right-4 p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-all z-20 group"
          >
            <X size={20} className="group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        <div className="p-8 md:p-10">
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            requiredMark={false}
            className="flex flex-col"
          >
            <Form.Item
              label={<span className="font-bold text-slate-600">Full Name</span>}
              name="name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input 
                prefix={<User size={18} className="text-slate-400 mr-2" />} 
                placeholder="e.g. John Doe" 
                className="rounded-xl border-slate-200"
              />
            </Form.Item>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span className="font-bold text-slate-600">Phone Number</span>}
                name="phone"
                rules={[{ required: true, message: 'Please enter your phone number' }]}
              >
                <Input 
                  prefix={<Phone size={18} className="text-slate-400 mr-2" />} 
                  placeholder="+91 00000 00000" 
                  className="rounded-xl border-slate-200"
                />
              </Form.Item>

              <Form.Item
                label={<span className="font-bold text-slate-600">Email Address</span>}
                name="email"
                rules={[
                  { required: true, message: 'Please enter your email' },
                  { type: 'email', message: 'Please enter a valid email' }
                ]}
              >
                <Input 
                  prefix={<Mail size={18} className="text-slate-400 mr-2" />} 
                  placeholder="john@example.com" 
                  className="rounded-xl border-slate-200"
                />
              </Form.Item>
            </div>

            <Form.Item
              label={<span className="font-bold text-slate-600">Interested Course</span>}
              name="course"
              rules={[{ required: true, message: 'Please select a course' }]}
            >
              <Select 
                placeholder="Choose your path" 
                className="rounded-xl"
                suffixIcon={<BookOpen size={18} className="text-slate-400" />}
              >
                {courses.map(course => <Option key={course} value={course}>{course}</Option>)}
              </Select>
            </Form.Item>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item
                label={<span className="font-bold text-slate-600">Qualification</span>}
                name="qualification"
                rules={[{ required: true, message: 'Please select qualification' }]}
              >
                <Select 
                  placeholder="Your education" 
                  className="rounded-xl"
                  suffixIcon={<GraduationCap size={18} className="text-slate-400" />}
                >
                  {qualifications.map(q => <Option key={q} value={q}>{q}</Option>)}
                </Select>
              </Form.Item>

              <Form.Item
                label={<span className="font-bold text-slate-600">Year of Passing</span>}
                name="passing_year"
                rules={[{ required: true, message: 'Please select year' }]}
              >
                <Select 
                  placeholder="Year" 
                  className="rounded-xl"
                  suffixIcon={<Calendar size={18} className="text-slate-400" />}
                >
                  {passingYears.map(year => <Option key={year} value={year}>{year}</Option>)}
                </Select>
              </Form.Item>
            </div>

            <Form.Item className="mb-0 mt-6">
              <Button 
                type="primary" 
                htmlType="submit" 
                block 
                loading={loading}
                className="h-14 font-black text-base rounded-2xl shadow-xl shadow-[#2a9b87]/20 border-none flex items-center justify-center gap-3 group"
              >
                {loading ? 'Submitting...' : 'Submit Enquiry'}
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </Form.Item>

            <p className="text-center text-slate-400 text-xs mt-6 font-medium">
              By submitting this form, you agree to our Terms and Privacy Policy.
            </p>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

const EnquiryModal = (props) => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#2a9b87',
        borderRadius: 12,
        fontFamily: 'Inter, sans-serif',
        colorTextBase: '#05243b',
      },
      components: {
        Modal: {
          contentPadding: 0,
          borderRadiusLG: 24,
        },
        Input: {
          controlHeight: 48,
          paddingInline: 16,
          colorBorder: '#e2e8f0',
          hoverBorderColor: '#2a9b87',
        },
        Select: {
          controlHeight: 48,
          colorBorder: '#e2e8f0',
        },
        Form: {
          itemMarginBottom: 20,
          verticalLabelPadding: '0 0 6px',
          labelFontSize: 13,
        }
      }
    }}
  >
    <App>
      <EnquiryModalContent {...props} />
    </App>
  </ConfigProvider>
);

export default EnquiryModal;