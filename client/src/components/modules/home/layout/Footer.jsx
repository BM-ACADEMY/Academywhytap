import React from 'react';
import { 
    LinkedinFilled, 
    TwitterOutlined, 
    FacebookFilled, 
    YoutubeFilled 
} from '@ant-design/icons';

const Footer = () => {
    const socialLinks = [
        { Icon: LinkedinFilled, url: 'https://www.linkedin.com/company/bm-academypondy/about/?viewAsMember=true' },
        { Icon: TwitterOutlined, url: 'https://x.com/BMACADEMYPONDY' },
        { Icon: FacebookFilled, url: 'https://www.facebook.com/people/BM-Academy/61566753898165/' },
        { Icon: YoutubeFilled, url: 'https://www.youtube.com/@bmacademypondy' }
    ];

    return (
        <footer className="w-full bg-white py-12 border-t border-gray-50 flex flex-col items-center gap-8 font-sans">
            <div className="flex gap-4">
                {socialLinks.map((item, i) => (
                    <a 
                        key={i} 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-400 hover:bg-[#9D1B50] hover:text-white transition-all text-lg shadow-sm"
                    >
                        <item.Icon />
                    </a>
                ))}
            </div>
            <div className="text-gray-400 text-sm font-bold tracking-tight uppercase opacity-60">
                © {new Date().getFullYear()} BM <span className="text-[#9D1B50]">Academy</span>. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;

