import React from 'react';
import { Modal, Form, Input, Select, Button, ConfigProvider } from 'antd';
import { X } from 'lucide-react';

const { Option } = Select;

const EnquiryModal = ({ isOpen, onClose }) => {
  const [form] = Form.useForm();

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

  const onFinish = (values) => {
    console.log('Form Values:', values);
    onClose();
    form.resetFields();
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#9D1B50', // The exact maroon/magenta color from the reference
          borderRadius: 6,
          fontFamily: 'inherit',
        },
        components: {
          Modal: {
            contentPadding: 0,
            borderRadiusLG: 12,
          },
          Input: {
            controlHeight: 42, // Slimmer height to prevent screen stretching
            paddingInline: 12,
            colorBorder: '#d9d9d9', // Ensure borders are visible
          },
          Select: {
            controlHeight: 42,
            colorBorder: '#d9d9d9',
          },
          Form: {
            itemMarginBottom: 16, // Tighter vertical gap between fields
            verticalLabelPadding: '0 0 4px',
          }
        }
      }}
    >
      <Modal
        title={null}
        open={isOpen}
        onCancel={onClose}
        footer={null}
        width={420} // Slimmer modal width matching the reference
        closeIcon={null} // We will use a custom close icon layout
        centered
        styles={{ 
          content: { overflow: 'hidden', padding: 0 },
          mask: { backdropFilter: 'blur(2px)' }
        }}
      >
        {/* Scrollable wrapper prevents vertical stretching on small screens */}
        <div className="bg-white relative max-h-[90vh] overflow-y-auto overflow-x-hidden p-6 md:p-8 custom-scrollbar">
          
          {/* Custom Close Icon */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors z-10"
          >
            <X size={20} strokeWidth={2} />
          </button>

          <div className="pb-5 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Enquiry Now</h2>
          </div>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            requiredMark={true} // Enables AntD's native red asterisks
            className="flex flex-col"
          >
            <Form.Item
              label={<span className="text-[13px] font-medium text-gray-700">Name</span>}
              name="name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input placeholder="Name" className="font-medium hover:border-[#9D1B50] focus:border-[#9D1B50]" />
            </Form.Item>

            <Form.Item
              label={<span className="text-[13px] font-medium text-gray-700">Phone</span>}
              name="phone"
              rules={[{ required: true, message: 'Please enter your phone number' }]}
            >
              <Input 
                prefix={<span className="text-gray-800 font-medium border-r pr-2 mr-1 text-[13px]">+91</span>} 
                placeholder="Phone" 
                className="font-medium hover:border-[#9D1B50] focus:border-[#9D1B50]" 
              />
            </Form.Item>

            <Form.Item
              label={<span className="text-[13px] font-medium text-gray-700">E-mail</span>}
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' }
              ]}
            >
              <Input placeholder="E-mail" className="font-medium hover:border-[#9D1B50] focus:border-[#9D1B50]" />
            </Form.Item>

            <Form.Item
              label={<span className="text-[13px] font-medium text-gray-700">Select a Course</span>}
              name="course"
              rules={[{ required: true, message: 'Please select a course' }]}
            >
              <Select placeholder="Select a Course" className="font-medium">
                {courses.map(course => <Option key={course} value={course}>{course}</Option>)}
              </Select>
            </Form.Item>

            <Form.Item
              label={<span className="text-[13px] font-medium text-gray-700">Select Your Qualification</span>}
              name="qualification"
              rules={[{ required: true, message: 'Please select your qualification' }]}
            >
              <Select placeholder="Select Your Qualification" className="font-medium">
                {qualifications.map(q => <Option key={q} value={q}>{q}</Option>)}
              </Select>
            </Form.Item>

            <Form.Item
              label={<span className="text-[13px] font-medium text-gray-700">Select Year of Passing</span>}
              name="passingYear"
              rules={[{ required: true, message: 'Please select your passing year' }]}
            >
              <Select placeholder="Select Year of Passing" className="font-medium">
                {passingYears.map(year => <Option key={year} value={year}>{year}</Option>)}
              </Select>
            </Form.Item>

            <Form.Item className="mb-0 mt-2">
              <Button 
                type="primary" 
                htmlType="submit" 
                block 
                className="h-11 font-semibold text-[15px] rounded-md shadow-none hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#9D1B50' }}
              >
                Submit
              </Button>
            </Form.Item>

            {/* Footer Section matching the reference layout */}
            <div className="flex items-center justify-between mt-5 pt-4 border-t border-gray-100">
                <a href="#" className="text-[11px] font-medium text-gray-400 hover:text-gray-600 hover:underline">
                  Report abuse
                </a>

                <div className="flex items-center gap-2 p-2 bg-[#f9fafd] rounded border border-[#e5e7eb]">
                    <div className="flex flex-col items-end leading-none">
                      <span className="text-[9px] text-gray-600 mb-[2px]">
                        protected by <strong className="text-gray-800">reCAPTCHA</strong>
                      </span>
                      <span className="text-[8px] text-gray-500">
                        <a href="#" className="hover:underline">Privacy</a> - <a href="#" className="hover:underline">Terms</a>
                      </span>
                    </div>
                    <img 
                      src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                      alt="reCAPTCHA" 
                      className="w-7 h-7 object-contain bg-white rounded-sm p-0.5 shadow-sm border border-gray-100" 
                    />
                </div>
            </div>
          </Form>
        </div>
      </Modal>

      {/* Optional: Add this CSS to your global index.css to hide the scrollbar cleanly if it appears on small screens */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e5e7eb;
          border-radius: 4px;
        }
      `}</style>
    </ConfigProvider>
  );
};

export default EnquiryModal;