import React from 'react';
import { motion as Motion } from 'framer-motion';

const Experience = () => {
    const calculateDuration = (startDate, endDate = new Date()) => {
        const start = new Date(startDate);
        const end = new Date(endDate);
        let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
        return months + 1;
    };

    const experiences = [
        {
            company: "Scalar Techhub",
            location: "Pune, Maharashtra, India",
            totalPeriod: `${calculateDuration("2025-10-01")} mos`,
            side: "left",
            roles: [
                {
                    title: "Software Developer",
                    type: "Full-time",
                    period: "APR 2026 — PRESENT",
                    description: [
                        "Currently working as a Software Developer, focusing on building high-performance web applications.",
                        "Designing and implementing scalable frontend architectures and reusable components.",
                        "Collaborating with cross-functional teams to deliver robust software solutions."
                    ],
                    skills: ["React.js", "Node.js", "Firebase", "Tailwind CSS", "JavaScript"],
                    isCurrent: true
                },
                {
                    title: "Software Developer Intern",
                    type: "Internship",
                    period: "OCT 2025 — MAR 2026",
                    description: [
                        "Working as a React Developer, contributing to front-end / backend development and UI enhancement for live projects.",
                        "Building reusable React components and integrating Firebase for authentication and real-time database management.",
                        "Optimizing application performance and ensuring cross-browser compatibility."
                    ],
                    skills: ["React.js", "HTML5", "CSS3", "Firebase", "Git"],
                    isCurrent: false
                }
            ]
        },
        {
            company: "The Kiran Academy",
            location: "Pune, India",
            totalPeriod: `${calculateDuration("2025-03-01", "2025-10-01")} mos`,
            side: "right",
            roles: [
                {
                    title: "Java Full Stack Developer Trainee",
                    type: "Internship",
                    period: "MAR 2025 — OCT 2025",
                    description: [
                        "Completed Full Stack Development training covering Java, J2EE, and ReactJS.",
                        "Built end-to-end web applications using Spring Boot and REST APIs.",
                        "Developed responsive frontend applications using React and modern UI practices.",
                        "Worked on real-time project implementations with database integration."
                    ],
                    skills: ["Java", "Spring Boot", "ReactJS", "MySQL", "Hibernate"],
                    isCurrent: false
                }
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 15
            }
        }
    };

    return (
        <section id="experience" className="bg-background-light dark:bg-black text-slate-900 dark:text-slate-100 min-h-screen py-20 px-6 overflow-x-hidden">
            <style>{`
        .timeline-gradient {
          background: linear-gradient(to bottom, #a855f7 0%, #4d3168 50%, #160d21 100%);
        }
        .glass-card {
          background: rgba(22, 13, 33, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(168, 85, 247, 0.2);
        }
        .glow-dot {
          box-shadow: 0 0 20px #a855f7, 0 0 10px #a855f7;
        }
        .role-connector {
          background: linear-gradient(to bottom, #a855f7, transparent);
        }
      `}</style>

            <div className="max-w-6xl mx-auto w-full">
                <div className="relative mb-24 flex flex-col items-center justify-center">
                    <Motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 0.05, y: 0 }}
                        viewport={{ once: true }}
                        className="absolute text-5xl md:text-9xl font-extrabold text-white uppercase tracking-widest select-none"
                    >
                        Experience
                    </Motion.h1>
                    <Motion.h2
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative text-3xl md:text-6xl font-bold text-white z-10"
                    >
                        Experience
                    </Motion.h2>
                    <Motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-500 text-xs md:text-sm mt-4 tracking-[0.5em] uppercase font-bold"
                    >
                        Professional Journey
                    </Motion.p>
                </div>

                <div className="relative">
                    {/* Central Vertical Rail */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 timeline-gradient opacity-30"></div>

                    <Motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-24 relative"
                    >
                        {experiences.map((exp, index) => (
                            <div key={index} className={`relative flex flex-col md:flex-row items-center justify-between ${exp.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                                {/* Desktop Card */}
                                <Motion.div
                                    variants={itemVariants}
                                    className="hidden md:block w-[45%]"
                                >
                                    <div className="glass-card p-8 rounded-3xl group hover:border-[#a855f7]/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(168,85,247,0.15)] relative overflow-hidden">
                                        {/* Background Glow */}
                                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#a855f7]/10 blur-[80px] rounded-full group-hover:bg-[#a855f7]/20 transition-all duration-500"></div>
                                        
                                        <div className="flex items-center gap-4 mb-8">
                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#a855f7] to-[#4d3168] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-[#a855f7]/20">
                                                {exp.company.charAt(0)}
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#a855f7] transition-colors">{exp.company}</h3>
                                                <div className="flex items-center gap-3 text-slate-400 text-xs mt-1">
                                                    <span className="flex items-center gap-1">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#a855f7]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        {exp.location}
                                                    </span>
                                                    <span className="w-1 h-1 rounded-full bg-slate-600"></span>
                                                    <span>{exp.totalPeriod}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-10 relative">
                                            {exp.roles.map((role, rIndex) => (
                                                <div key={rIndex} className="relative pl-8">
                                                    {/* Internal Connector Line */}
                                                    {rIndex < exp.roles.length - 1 && (
                                                        <div className="absolute left-[11px] top-6 bottom-[-40px] w-[2px] bg-gradient-to-b from-[#a855f7] to-transparent opacity-30"></div>
                                                    )}
                                                    
                                                    {/* Role Marker */}
                                                    <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${role.isCurrent ? 'bg-[#a855f7] border-[#a855f7] shadow-[0_0_15px_rgba(168,85,247,0.5)]' : 'border-[#a855f7]/50 bg-transparent'}`}>
                                                        {role.isCurrent && (
                                                            <Motion.div 
                                                                animate={{ scale: [1, 1.3, 1] }}
                                                                transition={{ duration: 2, repeat: Infinity }}
                                                                className="w-1.5 h-1.5 bg-white rounded-full" 
                                                            />
                                                        )}
                                                    </div>

                                                    <div>
                                                        <div className="flex justify-between items-start mb-2">
                                                            <h4 className={`text-lg font-bold transition-colors ${role.isCurrent ? 'text-white' : 'text-slate-300'}`}>
                                                                {role.title}
                                                            </h4>
                                                            <span className="text-[10px] font-mono bg-white/5 text-slate-400 px-2 py-1 rounded-md border border-white/10 uppercase tracking-tighter">
                                                                {role.period}
                                                            </span>
                                                        </div>
                                                        <p className="text-[#a855f7] text-xs font-semibold mb-3 uppercase tracking-widest">{role.type}</p>
                                                        
                                                        <ul className="space-y-2 text-slate-400 text-sm mb-4">
                                                            {role.description.map((item, i) => (
                                                                <li key={i} className="flex gap-2">
                                                                    <span className="text-[#a855f7]/50">•</span> {item}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                        
                                                        <div className="flex flex-wrap gap-2 mt-4">
                                                            {role.skills.map((skill, i) => (
                                                                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-medium hover:bg-[#a855f7]/10 hover:border-[#a855f7]/30 transition-all cursor-default">
                                                                    {skill}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </Motion.div>

                                {/* Central Node */}
                                <Motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-10"
                                >
                                    <div className="w-10 h-10 rounded-full bg-[#09050f] border-4 border-[#a855f7] glow-dot flex items-center justify-center">
                                        <Motion.div
                                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_#fff]"
                                        ></Motion.div>
                                    </div>
                                </Motion.div>

                                {/* Mobile View (Simplified) */}
                                <div className="md:hidden w-full pl-12 pr-4">
                                    <Motion.div variants={itemVariants} className="glass-card p-6 rounded-2xl mb-8">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#a855f7] to-[#4d3168] flex items-center justify-center text-white font-bold">
                                                {exp.company.charAt(0)}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                                                <p className="text-[10px] text-slate-500 uppercase tracking-widest">{exp.totalPeriod}</p>
                                            </div>
                                        </div>
                                        <div className="space-y-8">
                                            {exp.roles.map((role, rIndex) => (
                                                <div key={rIndex} className="relative pl-6">
                                                    {rIndex < exp.roles.length - 1 && (
                                                        <div className="absolute left-[7px] top-4 bottom-[-32px] w-[2px] bg-[#a855f7]/20"></div>
                                                    )}
                                                    <div className={`absolute left-0 top-1 w-4 h-4 rounded-full border-2 ${role.isCurrent ? 'bg-[#a855f7] border-[#a855f7]' : 'border-[#a855f7]/50'}`}></div>
                                                    <div>
                                                        <h4 className="text-white font-bold text-sm">{role.title}</h4>
                                                        <p className="text-[#a855f7] text-[10px] mb-2">{role.period}</p>
                                                        <ul className="space-y-1 text-slate-400 text-[11px] mb-3">
                                                            {role.description.map((item, i) => (
                                                                <li key={i}>• {item}</li>
                                                            ))}
                                                        </ul>
                                                        <div className="flex flex-wrap gap-1">
                                                            {role.skills.map((skill, i) => (
                                                                <span key={i} className="px-2 py-0.5 bg-white/5 rounded text-[9px] text-slate-300 border border-white/10">{skill}</span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </Motion.div>
                                </div>
                            </div>
                        ))}
                    </Motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
