import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import flow from "../assets/gpt.webp";
import { skills } from "./Mock/skillsData";

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
        delay: index * 0.05,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 70,
        damping: 15
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

        <div className="skill-card-face skill-card-back absolute inset-0 flex flex-col items-center justify-center gap-0.5 rounded-xl border border-purple-500/50 bg-gradient-to-br from-purple-900/90 to-violet-900/90 backdrop-blur-sm px-4 py-2">
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

const Skills = () => {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-black text-white  px-4 overflow-hidden"
    >
      <div className="relative flex flex-col items-center justify-center py-16 bg-black text-white overflow-hidden">
        <h2 className="text-8xl md:text-[10rem] font-extrabold bg-gradient-to-r from-white/10 via-white/5 to-white/2 bg-clip-text text-transparent select-none tracking-tighter">
          SKILLS
        </h2>
        <h3 className="absolute text-4xl mb-12 md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-gray-300 capitalize ">
          Skills
        </h3>
        <p className="relative text-lg text-gray-400 uppercase tracking-widest z-10">
          My Tech Stack
        </p>
      </div>

      <div className="mx-auto flex justify-center items-center gap-6 max-w-6xl mt-10 mb-10 px-4">
        <div className="relative z-10">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-2xl rounded-full" />
          <motion.div
            style={{ rotate }}
            className="relative flex justify-center items-center"
          >
            <img
              src={flow}
              alt="Tech Flow"
              className="w-full max-w-xs md:max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-16 flex flex-wrap justify-center gap-3 max-w-4xl">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} index={index} />
        ))}
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .skill-card-container {
          will-change: transform, opacity;
        }
        .skill-card {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
        }
        .skill-card-face {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .skill-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Skills;
