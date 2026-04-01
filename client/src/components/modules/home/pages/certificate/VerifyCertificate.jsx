import { useState, useRef } from "react";
import { 
    Card, 
    Input, 
    Button, 
    Typography, 
    Result, 
    Divider, 
    Space, 
    Tag, 
    message,
    Tooltip
} from 'antd';
import { 
    ShieldCheck, 
    Search, 
    FileBadge, 
    Download, 
    AlertCircle, 
    ExternalLink,
    Award
} from 'lucide-react';
import API from "../../api";
import CertificatePreview from "./CertificatePreview";
import "./certificate-preview.css";

const { Title, Text } = Typography;

export default function VerifyCertificate() {
  const [certificateId, setCertificateId] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const previewRef = useRef();

  const handleVerify = async () => {
    if (!certificateId.trim()) {
      message.warning("Please enter a certificate ID");
      return;
    }

    setLoading(true);
    setResult(null);

    try {
      const res = await API.get(`/certificates/verify/${certificateId}`);
      setResult({ ...res.data, certificateId });
      
      if (res.data.valid) {
        message.success("Certificate Authenticity Verified");
      } else {
        message.error("Invalid certificate ID");
      }
    } catch (err) {
      message.error("Failed to verify certificate");
      setResult({ valid: false });
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (previewRef?.current?.downloadPdf) {
      previewRef.current.downloadPdf();
    } else {
      message.error("Unable to generate PDF Preview");
    }
  };

  return (
    <div className=" bg-gray-50 flex flex-col items-center justify-center px-4 pt-10 pb-16 font-sans selection:bg-[#9D1B50]/10">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-80 bg-linear-to-b from-[#9D1B50]/5 to-transparent -z-10" />

      <div className="w-full max-w-lg space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        
        {/* Main Header Area */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#fbe8f0] rounded-full">
            <ShieldCheck size={13} className="text-[#9D1B50]" />
            <span className="text-[10px] font-black uppercase text-[#9D1B50] tracking-widest">Authentication Portal</span>
          </div>
          <Title className="m-0 font-black tracking-tight text-gray-900" style={{ fontSize: '32px' }}>
            Verify <span className="text-[#9D1B50]">Credential</span>
          </Title>
          <Text className="text-gray-500 text-sm block">Securely validate academic certifications issued by BM Academy.</Text>
        </div>

        {/* Verification Card */}
        <Card className="rounded-3xl border-gray-100 shadow-lg overflow-hidden">
          <div className="space-y-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#9D1B50] transition-colors" size={18} />
              <Input
                size="large"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                onPressEnter={handleVerify}
                placeholder="Enter Certificate ID (e.g., BMMSD-2026)"
                className="h-12 pl-11 pr-4 bg-gray-50 border-gray-100 rounded-xl text-sm font-medium placeholder-gray-400 transition-all outline-none"
                disabled={loading}
              />
            </div>

            <Button
              type="primary"
              size="large"
              block
              loading={loading}
              onClick={handleVerify}
              className="h-11 bg-[#9D1B50] hover:bg-[#831643] rounded-xl font-bold uppercase tracking-widest text-xs shadow-md shadow-[#9D1B50]/20 flex items-center justify-center gap-2 border-none"
            >
              {!loading && <FileBadge size={16} />} Verify Authenticity
            </Button>
          </div>

          {/* Result Section */}
          {result && (
            <div className="mt-6 animate-in zoom-in-95 fade-in duration-500">
              <Divider className="border-gray-100 mb-4" />
              
              {result.valid ? (
                <div className="space-y-8">
                  <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-green-50/50 p-4 rounded-2xl border border-green-100">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-green-500 shadow-sm">
                        <Award size={24} />
                      </div>
                      <div>
                        <Tag color="success" className="text-[10px] font-black uppercase leading-none px-2 rounded-full mb-2">Verified Credential</Tag>
                        <Title level={3} className="m-0 font-black text-gray-900">{result.name}</Title>
                        <Text strong className="text-gray-500 text-sm tracking-wide uppercase">{result.course}</Text>
                      </div>
                    </div>
                    <Tooltip title="Download original PDF">
                        <Button 
                            icon={<Download size={16} />} 
                            onClick={handleDownload}
                            className="h-9 px-4 rounded-xl font-bold bg-white border-green-200 text-green-600 hover:bg-green-600 hover:text-white transition-all shadow-sm text-sm"
                        >
                            Save Copy
                        </Button>
                    </Tooltip>
                  </div>

                  <Card className="bg-gray-50 border-none rounded-xl" bodyStyle={{ padding: '12px 16px' }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col">
                        <Text type="secondary" className="text-[11px] font-black uppercase tracking-widest">Issuance ID</Text>
                        <Text strong className="font-mono text-[#9D1B50]">{result.certificateId}</Text>
                      </div>
                      <div className="flex flex-col">
                        <Text type="secondary" className="text-[11px] font-black uppercase tracking-widest">Date of Award</Text>
                        <Text strong className="text-gray-700">{result.issuedDate}</Text>
                      </div>
                    </div>
                  </Card>

                  {/* Hidden Preview */}
                  <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
                    <CertificatePreview
                      ref={previewRef}
                      name={result.name}
                      course={result.course}
                      issued_date={result.issued_date || result.issuedDate || result.issue_date}
                      certificate_type="Course"
                      certificate_id={result.certificate_id || result.certificateId || certificateId}
                    />
                  </div>
                </div>
              ) : (
                <Result
                  status="error"
                  title={<span className="font-black text-gray-900">Certificate Not Found</span>}
                  subTitle={<span className="font-bold text-gray-500">The provided ID does not match any official academic records in our database. Please contact helpdesk@bm-academy.com for assistance.</span>}
                  icon={<div className="bg-red-50 p-6 rounded-full inline-block text-red-500 shadow-sm border border-red-100"><AlertCircle size={48} /></div>}
                />
              )}
            </div>
          )}
        </Card>

        {/* Footer */}
        <div className="text-center pt-8">
            <div className="inline-flex items-center gap-3 text-gray-400 font-bold text-xs uppercase tracking-widest group cursor-default">
                <ShieldCheck size={16} className="text-[#9D1B50] opacity-50 group-hover:opacity-100 transition-opacity" />
                Protected by BM Academy Secure Verification Ledger
            </div>
        </div>
      </div>

      <style>{`
        .ant-input:focus, .ant-input-focused {
          box-shadow: 0 0 0 4px #9D1B5010 !important;
        }
        .ant-btn-primary {
          background-color: #9D1B50 !important;
          border-color: #9D1B50 !important;
        }
        .ant-btn-primary:hover {
          background-color: #831643 !important;
          border-color: #831643 !important;
        }
      `}</style>
    </div>
  );
}
