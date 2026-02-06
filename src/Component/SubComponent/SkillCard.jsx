import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

const SkillCard = ({ skill, index }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const cardRef = useRef(null);

    return (
        <motion.div
            ref={cardRef}
            className="skill-card-container perspective-1000"
            initial={{ opacity: 0, y: 50, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                delay: index * 0.03,
                duration: 0.5,
                type: "spring",
                stiffness: 100
            }}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
        >
            <motion.div
                className="skill-card relative w-full h-full"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
                style={{ transformStyle: "preserve-3d" }}
            >
                <div className="skill-card-face skill-card-front group relative flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-neutral-900 px-4 py-2 text-sm lg:text-base text-white/80 hover:bg-neutral-800 transition-all duration-300">
                    <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                            background: "radial-gradient(circle at center, rgba(124, 58, 237, 0.2), transparent 70%)",
                        }}
                    />
                    <img
                        src={skill.icon}
                        alt={skill.name}
                        className="w-5 lg:w-6 transition-transform duration-300 group-hover:scale-125 relative z-10"
                    />
                    <span className="relative z-10">{skill.name}</span>
                </div>

                <div className="skill-card-face skill-card-back absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl border border-purple-500/50 bg-gradient-to-br from-purple-900/90 to-violet-900/90 backdrop-blur-sm px-4 py-2">
                    <span className="text-sm font-semibold text-white">{skill.name}</span>
                    <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-purple-500 to-violet-400 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: isFlipped ? `${skill.level}%` : 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        />
                    </div>
                    <span className="text-xs text-purple-200">{skill.level}%</span>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default SkillCard;
