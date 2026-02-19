import React from 'react';
import { motion as Motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            title: "Trainee Software Developer",
            company: "Scalar techhub Pvt Ltd • Intern",
            period: "OCT 2025 — PRESENT",
            description: [

                " Working as a React Developer, contributing to front-end development and UI enhancement for live projects",
                "Collaborating in an agile environment using Git and Jira for version control and task tracking.",
                "Participating in code reviews and debugging sessions to ensure clean, maintainable, and scalable codebases."
            ],
            skills: ["React.js", "Ionic", "Node.js", "AWS", "Jira"],
            side: "left"
        },
        {
            title: "Java Full Stack Developer Trainee",
            company: "The Kiran Academy • Pune",
            period: "FEB-OCT 2025",
            description: [
                "Completed Full Stack Development training covering Java, J2EE, and ReactJS.",
                "Built end-to-end web applications using Spring Boot and REST APIs.",
                "Developed responsive frontend applications using React and modern UI practices.",
                "Worked on real-time project implementations with database integration."
            ],
            skills: ["Java", "J2EE", "Spring Boot", "ReactJS", "MySQL"],
            side: "right"

        },
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
        hidden: { opacity: 0, scale: 0.8, y: 50 },
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
        <section className="bg-background-light dark:bg-black text-slate-900 dark:text-slate-100 min-h-screen py-20 px-6 overflow-x-hidden">
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

                {/* Timeline Section */}
                <div className="relative">
                    {/* Central Vertical Rail */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 timeline-gradient opacity-30"></div>

                    <Motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-16 relative"
                    >
                        {experiences.map((exp, index) => (
                            <div key={index} className="relative flex flex-col md:flex-row items-center justify-between">
                                {/* Desktop Card (Left/Right conditional) */}
                                <Motion.div
                                    variants={itemVariants}
                                    className={`hidden md:block w-[45%] ${exp.side === 'right' ? 'order-last' : ''}`}
                                >
                                    <div className="glass-card p-8 rounded-2xl group hover:border-[#a855f7]/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#a855f7] transition-colors">{exp.title}</h3>
                                                <p className="text-[#a855f7] font-medium">{exp.company}</p>
                                            </div>
                                            <span className="text-xs font-mono bg-[#a855f7]/10 text-[#a855f7] px-3 py-1 rounded-full border border-[#a855f7]/20">
                                                {exp.period}
                                            </span>
                                        </div>
                                        <ul className="space-y-3 text-slate-400 text-sm mb-6 list-none">
                                            {exp.description.map((item, i) => (
                                                <li key={i} className="flex gap-2">
                                                    <span className="text-[#a855f7]">•</span> {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.map((skill, i) => (
                                                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs font-medium group-hover:bg-[#a855f7]/10 transition-colors">
                                                    {skill}
                                                </span>
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
                                    <div className={`w-8 h-8 rounded-full bg-[#09050f] border-4 border-[#a855f7] glow-dot flex items-center justify-center`}>
                                        <Motion.div
                                            animate={{ scale: [1, 1.5, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                            className="w-2 h-2 rounded-full bg-white"
                                        ></Motion.div>
                                    </div>
                                </Motion.div>

                                {/* Mobile Card / Right side spacing */}
                                <div className="md:w-[45%] ml-12 md:ml-0">
                                    <Motion.div
                                        variants={itemVariants}
                                        className="md:hidden glass-card p-6 rounded-2xl"
                                    >
                                        <span className="text-[10px] font-mono text-[#a855f7] uppercase tracking-widest block mb-2">{exp.period}</span>
                                        <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                                        <p className="text-sm text-[#a855f7] mb-4">{exp.company}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {exp.skills.slice(0, 2).map((skill, i) => (
                                                <span key={i} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[10px]">{skill}</span>
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
