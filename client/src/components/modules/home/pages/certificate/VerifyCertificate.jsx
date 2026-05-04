import { useState, useRef } from "react";
import { 
    Card, 
    Input, 
    Button, 
    Typography, 
    Result, 
    Divider, 
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
    <div className="bg-[#f8fafc] flex flex-col items-center justify-center px-4 pt-20 pb-24 font-sans relative overflow-hidden min-h-screen">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#14937a]/5 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#05243b]/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3" />
      </div>

      <div className="w-full max-w-lg space-y-8 relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 mt-10">
        
        {/* Main Header Area */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#14937a]/10 border border-[#14937a]/20 rounded-full shadow-sm">
            <ShieldCheck size={14} className="text-[#14937a]" />
            <span className="text-[10px] font-black uppercase text-[#14937a] tracking-[0.2em]">Authentication Portal</span>
          </div>
          <Title className="m-0 font-black tracking-tight text-[#05243b]" style={{ fontSize: '36px', lineHeight: '1.2' }}>
            Verify <span className="text-[#14937a]">Credential</span>
          </Title>
          <Text className="text-slate-500 text-[15px] font-medium block max-w-sm mx-auto">Securely validate academic certifications issued by BM Academy.</Text>
        </div>

        {/* Verification Card */}
        <Card className="rounded-[2.5rem] border-slate-100 shadow-xl overflow-hidden bg-white/80 backdrop-blur-md">
          <div className="space-y-5 p-2">
            <div className="relative group">
              <Input
                size="large"
                prefix={<Search className="text-slate-400 group-focus-within:text-[#14937a] transition-colors mr-2" size={20} />}
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                onPressEnter={handleVerify}
                placeholder="Enter Certificate ID (e.g., BMMSD-2026)"
                className="h-14 px-4 bg-slate-50 border-slate-200 hover:border-slate-300 rounded-2xl text-[15px] font-bold text-[#05243b] placeholder:text-slate-400 placeholder:font-medium focus:border-[#14937a] focus:ring-4 focus:ring-[#14937a]/10 transition-all outline-none w-full"
                disabled={loading}
              />
            </div>

            <Button
              type="primary"
              size="large"
              block
              loading={loading}
              onClick={handleVerify}
              className="h-14 bg-[#05243b] hover:bg-[#14937a] rounded-[1.2rem] font-black uppercase tracking-widest text-sm shadow-xl shadow-[#05243b]/20 flex items-center justify-center gap-3 border-none transition-all duration-300 hover:-translate-y-0.5"
            >
              {!loading && <FileBadge size={18} />} Verify Authenticity
            </Button>
          </div>

          {/* Result Section */}
          {result && (
            <div className="mt-8 animate-in zoom-in-95 fade-in duration-500 px-2">
              <Divider className="border-slate-100 mb-6" />
              
              {result.valid ? (
                <div className="space-y-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-slate-50 p-5 rounded-3xl border border-slate-100 group hover:border-[#14937a]/20 transition-colors">
                    <div className="flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#14937a] shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-300">
                        <Award size={26} />
                      </div>
                      <div>
                        <Tag color="" className="text-[10px] font-black uppercase tracking-widest leading-none px-2.5 py-1 rounded-full mb-2 bg-[#14937a]/10 text-[#14937a] border-[#14937a]/20">Verified Credential</Tag>
                        <Title level={4} className="m-0 font-black text-[#05243b]">{result.name}</Title>
                        <Text strong className="text-slate-500 text-xs tracking-wide uppercase">{result.course}</Text>
                      </div>
                    </div>
                    <Tooltip title="Download original PDF">
                        <Button 
                            icon={<Download size={16} />} 
                            onClick={handleDownload}
                            className="h-12 px-6 rounded-2xl font-bold bg-white border-slate-200 text-[#05243b] hover:bg-[#14937a] hover:text-white hover:border-[#14937a] transition-all shadow-sm text-sm flex items-center gap-2"
                        >
                            Save Copy
                        </Button>
                    </Tooltip>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <Text type="secondary" className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Issuance ID</Text>
                      <Text strong className="font-mono text-[#05243b] text-sm">{result.certificateId}</Text>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                      <Text type="secondary" className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">Date of Award</Text>
                      <Text strong className="text-[#05243b] text-sm">{result.issuedDate}</Text>
                    </div>
                  </div>

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
                  title={<span className="font-black text-[#05243b] text-xl">Certificate Not Found</span>}
                  subTitle={<span className="font-bold text-slate-500 text-sm">The provided ID does not match any official academic records in our database. Please contact support.</span>}
                  icon={<div className="bg-red-50 p-6 rounded-full inline-flex items-center justify-center text-red-500 shadow-inner border border-red-100 mb-2"><AlertCircle size={40} /></div>}
                  className="py-6"
                />
              )}
            </div>
          )}
        </Card>

        {/* Footer */}
        <div className="text-center pt-8">
            <div className="inline-flex items-center gap-2 text-slate-400 font-bold text-[11px] uppercase tracking-widest group cursor-default">
                <ShieldCheck size={14} className="text-[#14937a] opacity-60 group-hover:opacity-100 transition-opacity" />
                Protected by BM Academy Secure Verification Ledger
            </div>
        </div>
      </div>

      <style>{`
        .ant-input:focus, .ant-input-focused {
          border-color: #14937a !important;
          box-shadow: 0 0 0 4px rgba(20, 147, 122, 0.1) !important;
        }
        .ant-input:hover {
          border-color: #cbd5e1 !important;
        }
        .ant-btn-primary {
          background-color: #05243b !important;
          border-color: #05243b !important;
        }
        .ant-btn-primary:hover {
          background-color: #14937a !important;
          border-color: #14937a !important;
          box-shadow: 0 10px 25px -5px rgba(20, 147, 122, 0.4) !important;
        }
      `}</style>
    </div>
  );
}
