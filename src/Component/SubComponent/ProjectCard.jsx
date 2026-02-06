import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
        >
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <motion.div
                    className={`relative order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-2xl opacity-50`} />
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
                        <img
                            src={project.image}
                            alt={project.title}
                            className="relative w-full rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:rotate-1"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </motion.div>

                <div className={`space-y-6 order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.2 + 0.2 }}
                    >
                        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-${project.accentColor}-500/10 text-${project.accentColor}-300 border border-${project.accentColor}-500/30`}>
                            {project.type}
                        </span>
                    </motion.div>

                    <motion.h3
                        className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                    >
                        {project.title}
                    </motion.h3>

                    <motion.p
                        className="text-gray-300 text-lg leading-relaxed"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.2 + 0.4 }}
                    >
                        {project.description}
                    </motion.p>

                    <motion.ul
                        className="space-y-3"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: index * 0.2 + 0.5 }}
                    >
                        {project.bullets.map((bullet, i) => (
                            <motion.li
                                key={i}
                                className="flex items-start gap-3 text-gray-300"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                                transition={{ delay: index * 0.2 + 0.5 + i * 0.1 }}
                            >
                                <span className={`text-${project.accentColor}-400 text-xl mt-0.5`}>✓</span>
                                <span>{bullet}</span>
                            </motion.li>
                        ))}
                    </motion.ul>

                    <motion.div
                        className="flex flex-wrap gap-3 pt-4"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ delay: index * 0.2 + 0.8 }}
                    >
                        {project.tech.map((tech, i) => (
                            <motion.div
                                key={i}
                                className="group relative p-1 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                                transition={{ delay: index * 0.2 + 0.8 + i * 0.05 }}
                            >
                                <img
                                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                                    alt={tech}
                                    className="w-7 h-7"
                                    onError={(e) => {
                                        e.target.src = `https://cdn.simpleicons.org/${tech}`;
                                    }}
                                />
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    {tech}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
