import React, { useState } from 'react';
import { Cpu, Wrench, Layout, Code, Database, BarChart, Video, Globe } from 'lucide-react';

const SkillsAndTools = () => {
    const [activeTab, setActiveTab] = useState('Full Stack');

    const categories = [
        { id: 'Full Stack', label: 'Full Stack Development', icon: <Code size={20} /> },
        { id: 'Data Science', label: 'Data Analytics & AI', icon: <BarChart size={20} /> },
        { id: 'Marketing', label: 'AI Digital Marketing', icon: <Globe size={20} /> },
        { id: 'Design', label: 'UI/UX & Video Editing', icon: <Layout size={20} /> }
    ];

    const skills = {
        'Full Stack': [
            { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
            { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
        ],
        'Data Science': [
            { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'Pandas', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
            { name: 'Tableau', logo: 'https://cdn.worldvectorlogo.com/logos/tableau-software.svg' },
            { name: 'Power BI', logo: 'https://cdn.worldvectorlogo.com/logos/power-bi.svg' }
        ],
        'Marketing': [
            { name: 'Google Ads', logo: 'https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg' },
            { name: 'Meta Ads', logo: 'https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg' },
            { name: 'SEMRush', logo: 'https://www.vectorlogo.zone/logos/semrush/semrush-icon.svg' },
            { name: 'HubSpot', logo: 'https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg' }
        ],
        'Design': [
            { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
            { name: 'Photoshop', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg' },
            { name: 'Premiere', logo: 'https://www.vectorlogo.zone/logos/adobe_premiere_pro/adobe_premiere_pro-icon.svg' },
            { name: 'After Effects', logo: 'https://www.vectorlogo.zone/logos/adobe_after_effects/adobe_after_effects-icon.svg' }
        ]
    };

    const allTools = [
        { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Tailwind', logo: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
        { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'Figma', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'ChatGPT', logo: 'https://www.vectorlogo.zone/logos/openai/openai-icon.svg' },
        { name: 'Canva', logo: 'https://www.vectorlogo.zone/logos/canva/canva-icon.svg' }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                
                {/* Skills Covered Section */}
                <div className="mb-24">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-10 h-10 bg-[#14937a]/10 rounded-xl flex items-center justify-center text-[#14937a]">
                            <Cpu size={24} />
                        </div>
                        <h2 className="text-3xl font-black text-[#05243b]">Skills Covered</h2>
                    </div>

                    <div className="bg-[#f8fafc] rounded-[3rem] p-8 md:p-12 shadow-sm border border-slate-100">
                        {/* Tabs */}
                        <div className="flex flex-wrap gap-4 md:gap-8 mb-12 border-b border-slate-200 pb-6">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveTab(cat.id)}
                                    className={`flex items-center gap-2 px-4 py-2 font-black text-sm transition-all relative ${
                                        activeTab === cat.id ? 'text-[#14937a]' : 'text-slate-400 hover:text-slate-600'
                                    }`}
                                >
                                    {cat.label}
                                    {activeTab === cat.id && (
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-[#14937a] rounded-full translate-y-[25px]" />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Skill Cards */}
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                            {skills[activeTab].map((skill, i) => (
                                <div key={i} className="bg-white p-6 rounded-[2rem] shadow-sm border border-slate-100 flex flex-col items-center gap-4 group hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="w-20 h-20 flex items-center justify-center p-4">
                                        <img src={skill.logo} alt={skill.name} className="w-full h-full object-contain group-hover:scale-110 transition-transform" />
                                    </div>
                                    <span className="font-black text-[#05243b] text-sm uppercase tracking-wider">{skill.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Tools Covered Section */}
                <div>
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-10 h-10 bg-[#14937a]/10 rounded-xl flex items-center justify-center text-[#14937a]">
                            <Wrench size={24} />
                        </div>
                        <h2 className="text-3xl font-black text-[#05243b]">Tools Covered</h2>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {allTools.map((tool, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-[#14937a]/30 transition-all cursor-default group">
                                <img src={tool.logo} alt={tool.name} className="w-6 h-6 object-contain group-hover:scale-110 transition-transform" />
                                <span className="font-black text-[#05243b] text-sm uppercase tracking-wider">{tool.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SkillsAndTools;
