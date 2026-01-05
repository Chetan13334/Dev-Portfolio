import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import flow from "../assets/gpt.webp";

const skills = [
  { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg", level: 85 },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript", level: 90 },
  { name: "ReactJS", icon: "https://cdn.simpleicons.org/react", level: 92 },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/darkgreen", level: 80 },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql", level: 85 },
  { name: "firebase", icon: "https://cdn.simpleicons.org/firebase", level: 75 },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript", level: 88 },
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5", level: 95 },
  { name: "CSS", icon: "https://cdn.simpleicons.org/css", level: 93 },
  { name: "NextJS", icon: "https://cdn.simpleicons.org/nextdotjs/white", level: 87 },
  { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap", level: 90 },
  { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss", level: 95 },
  { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer", level: 85 },
  { name: "Shadcn", icon: "https://cdn.simpleicons.org/shadcnui/white", level: 80 },
  { name: "NodeJS", icon: "https://cdn.simpleicons.org/nodedotjs/darkgreen", level: 88 },
  { name: "ExpressJS", icon: "https://cdn.simpleicons.org/express/white", level: 90 },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/skyblue", level: 82 },
  { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/blue", level: 85 },
  { name: "Redux", icon: "https://cdn.simpleicons.org/redux", level: 83 },
  { name: "Git", icon: "https://cdn.simpleicons.org/git", level: 90 },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white", level: 92 },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white", level: 88 },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman", level: 90 },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker", level: 75 },
  { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/blue", level: 70 },
  { name: "SpringBoot", icon: "https://cdn.simpleicons.org/Spring", level: 80 },
  { name: "GSAP", icon: "https://cdn.simpleicons.org/gsap", level: 85 },
  { name: "Ionic", icon: "https://cdn.simpleicons.org/ionic", level: 78 }
];

// Skill Card with Flip Animation
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
        {/* Front */}
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

        {/* Back */}
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

export const Skills = () => {
  const cardsRef = useRef([]);

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white flex flex-col items-center py-20 px-4 font-rajdhani"
    >
      <div className="relative w-full max-w-4xl flex flex-col items-center justify-center">
        <div className="absolute inset-0 -z-10 opacity-10">
          <motion.div
            className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px]"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.1, 0.15]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          />
        </div>

        <motion.div
          className="relative mx-auto size-[300px] md:size-[380px] opacity-70 translate-y-24"
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <img src={flow} draggable="false" alt="" className="w-full h-full" />
        </motion.div>

        <div className="relative flex flex-col items-center justify-center -mt-10">
          <motion.span
            className="text-8xl md:text-[10rem] mt-[3rem] font-extrabold bg-gradient-to-r from-white/10 via-white/5 to-white/20 bg-clip-text text-transparent tracking-tighter"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            SKILLS
          </motion.span>

          <motion.h2
            className="absolute text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Skills
          </motion.h2>

          <div className="flex items-center gap-4 my-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50"></div>
            <motion.div
              className="h-1.5 w-1.5 rounded-full bg-purple-500/70"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/50"></div>
          </div>

          <motion.p
            className="text-base md:text-lg text-gray-300 uppercase tracking-wider text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I constantly try to improve
          </motion.p>
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
