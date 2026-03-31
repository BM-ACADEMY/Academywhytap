import React, { useState } from 'react';
import { 
    Search, 
    Award, 
    CheckCircle, 
    Download, 
    ChevronRight, 
    AlertCircle,
    User,
    Calendar,
    BookOpen
} from 'lucide-react';

const VerifyCertificate = () => {
    const [certificateId, setCertificateId] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [certificateData, setCertificateData] = useState(null);

    const handleVerify = async (e) => {
        if (e) e.preventDefault();
        if (!certificateId.trim()) return;

        setLoading(true);
        setError(null);
        setCertificateData(null);

        try {
            const response = await fetch(`${import.meta.env.VITE_BASE_URI}certificates/verify/${certificateId.trim()}/`);
            if (response.ok) {
                const data = await response.json();
                if (data.valid) {
                    setCertificateData(data);
                } else {
                    setError('We couldn\'t find a certificate with that ID. Please check and try again.');
                }
            } else {
                setError('Invalid Certificate ID. Please double-check your credentials.');
            }
        } catch (err) {
            setError('Connection error. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const handleDownload = () => {
        window.open(`${import.meta.env.VITE_BASE_URI}certificates/download/${certificateId.trim()}/`, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-24 pb-20 px-4">
            {/* Header / Intro */}
            <div className="max-w-2xl w-full text-center mb-10 animate-in fade-in slide-in-from-top-4 duration-700">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#fbe8f0] rounded-full mb-6">
                    <Award size={16} className="text-[#9D1B50]" />
                    <span className="text-[10px] font-black uppercase text-[#9D1B50] tracking-widest">Verification Portal</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-5 tracking-tight leading-tight">
                    Verify Your <span className="text-[#9D1B50]">Achievements</span>
                </h1>
                <p className="text-base text-gray-400 font-medium leading-relaxed max-w-lg mx-auto">
                    Enter your unique Certificate ID to validate your credentials and download your official certification from BM Academy.
                </p>
            </div>

            {/* Search Box */}
            <div className="max-w-xl w-full mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                <form 
                    onSubmit={handleVerify}
                    className="relative group focus-within:scale-[1.01] transition-transform duration-300"
                >
                    <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#9D1B50] transition-colors" size={20} />
                    <input 
                        type="text" 
                        value={certificateId}
                        onChange={(e) => setCertificateId(e.target.value.toUpperCase())}
                        placeholder="e.g. BMFC2026001"
                        className="w-full h-14 pl-14 pr-40 bg-white border border-gray-100 rounded-2xl text-lg font-bold text-gray-900 placeholder:text-gray-300 focus:border-black/5 focus:ring-4 focus:ring-black/5 outline-none transition-all shadow-lg shadow-gray-200/40"
                    />
                    <button 
                        type="submit"
                        disabled={loading}
                        className="absolute right-2 top-2 bottom-2 px-6 bg-black text-white font-black rounded-xl hover:bg-zinc-800 transition-all flex items-center gap-2 active:scale-95 disabled:bg-gray-300 text-sm tracking-widest uppercase"
                    >
                        {loading ? 'Verifying...' : 'Verify Now'}
                        {!loading && <ChevronRight size={16} />}
                    </button>
                </form>
            </div>

            {/* Result Area */}
            <div className="max-w-2xl w-full">
                {error && (
                    <div className="bg-red-50 border border-red-100 p-6 rounded-3xl flex items-start gap-4 animate-in zoom-in duration-300">
                        <AlertCircle className="text-red-500 shrink-0" size={24} />
                        <div>
                            <p className="font-black text-red-900 mb-1">Verification Failed</p>
                            <p className="text-red-700 font-medium">{error}</p>
                        </div>
                    </div>
                )}

                {certificateData && (
                    <div className="bg-white p-6 md:p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200/40 border border-gray-50 flex flex-col gap-8 animate-in zoom-in slide-in-from-bottom-10 duration-500">
                        <div className="flex items-center gap-4 pb-6 border-b border-gray-50/50">
                            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-500">
                                <CheckCircle size={28} />
                            </div>
                            <div>
                                <h3 className="text-xl font-black text-gray-900 m-0">Successfully Verified</h3>
                                <p className="text-gray-400 font-bold uppercase tracking-widest text-[9px] mt-1">Authentic Credentials Confirmed</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                                    <User size={18} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest m-0">Student Name</p>
                                    <p className="text-[17px] font-black text-gray-900">{certificateData.name}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                                    <BookOpen size={18} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest m-0">Course Completed</p>
                                    <p className="text-[16px] font-bold text-gray-800 leading-tight">{certificateData.course}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-400">
                                    <Calendar size={18} />
                                </div>
                                <div>
                                    <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest m-0">Issue Date</p>
                                    <p className="text-[16px] font-bold text-gray-800">{certificateData.issuedDate}</p>
                                </div>
                            </div>
                        </div>

                        <button 
                            onClick={handleDownload}
                            className="mt-2 w-full h-14 bg-black text-white rounded-2xl font-black text-md flex items-center justify-center gap-3 hover:bg-zinc-800 transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-gray-200/50 uppercase tracking-widest text-sm"
                        >
                            <Download size={20} strokeWidth={2.5} />
                            Download Official Certificate
                        </button>
                    </div>
                )}
            </div>

            {/* Footer Note */}
            <p className="mt-12 text-gray-400 font-bold text-sm tracking-tight text-center max-w-md">
                All certificates issued by BM Academy are globally verifiable. If you have issues downloading, please contact support.
            </p>
        </div>
    );
};

export default VerifyCertificate;
