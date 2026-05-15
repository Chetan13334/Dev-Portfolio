import React, { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import MagneticButton from "./SubComponent/MagneticButton";
import TypingText from "./SubComponent/TypingText";
import ParallaxOrb from "./SubComponent/ParallaxOrb";
import ThreeDBackground from "./SubComponent/ThreeDBackground";

const titleContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 }
  }
};

const titleWordVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const letterVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 12
    }
  }
};

const Home = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const calculateDuration = (startDate, endDate = new Date()) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    return months + 1; // Inclusive of starting month
  };

  const scalarExp = calculateDuration("2025-10-01"); // Scalar Techhub (Oct 2025 - Present)
  const kiranExp = calculateDuration("2025-03-01", "2025-10-01"); // Kiran Academy (Feb - Oct 2025)

  return (
    <>
      <section
        className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden p-4 font-rajdhani pt-24 md:pt-0"
        id="home"
      >
        <ThreeDBackground />

        <ParallaxOrb
          className="absolute left-[-10%] md:left-[-5%] top-[15%] md:top-[20%] rotate-[12deg]"
          mouseX={mouseX}
          mouseY={mouseY}
          strength={0.015}
        >
          <div className="relative w-[300px] md:w-[500px] h-[60px] md:h-[100px] translate-y-[1px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r to-transparent from-indigo-500/20 backdrop-blur-[1px] border border-white/10 shadow-xl animate-pulse-slow"></div>
          </div>
        </ParallaxOrb>

        <ParallaxOrb
          className="absolute right-[5%] md:right-[10%] bottom-[5%] md:bottom-[10%] -rotate-[8deg]"
          mouseX={mouseX}
          mouseY={mouseY}
          strength={0.02}
        >
          <div className="relative w-[200px] md:w-[300px] h-[50px] md:h-[80px] translate-y-[9px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r to-transparent from-violet-500/20 backdrop-blur-[1px] border border-white/10 shadow-xl animate-pulse-slow"></div>
          </div>
        </ParallaxOrb>

        <div className="z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto">
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8 md:mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="bg-primary/80 px-1.5 rounded-full -ml-1.5 text-xs md:text-sm">new</span>
            <div className="shiny-text animate-shiny text-xs md:text-sm">Chatbot Available</div>
          </motion.div>

          <motion.h1
            variants={titleContainerVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 flex flex-wrap justify-center gap-x-3 md:gap-x-4"
          >
            <motion.span variants={titleWordVariants} className="flex">
              {"Coder".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  whileHover={{ scale: 1.25, rotate: 6, textShadow: "0 0 20px rgba(124, 58, 237, 0.8)" }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="inline-block cursor-pointer"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>

            <motion.span variants={titleWordVariants} className="flex">
              {"X".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  whileHover={{ scale: 1.3, rotate: 6, textShadow: "0 0 30px rgba(255, 0, 128, 0.8)" }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="inline-block cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-[#007BFF] to-[#FF0080]"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>

            <motion.span variants={titleWordVariants} className="flex">
              {"Dreamer".split("").map((letter, i) => (
                <motion.span
                  key={i}
                  variants={letterVariants}
                  whileHover={{ scale: 1.25, rotate: 6, textShadow: "0 0 20px rgba(124, 58, 237, 0.8)" }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="inline-block cursor-pointer"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-gray-300 mb-8 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <TypingText text="Hello, I'm Chetan Patil – a Software Developer" />
          </motion.p>

          <motion.div
            className="z-100 mt-4 flex flex-col items-center justify-center gap-6 md:mt-8 md:flex-row md:gap-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <MagneticButton href="#contact">
              Let's Connect
            </MagneticButton>

            <motion.button
              onClick={() => navigator.clipboard.writeText("chetanpatil0104@gmail.com")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 py-3 text-sm md:text-base font-light text-white/75 cursor-pointer hover:text-white/90 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>
              <span className="truncate max-w-[200px] md:max-w-none">chetanpatil0104@gmail.com</span>
            </motion.button>
          </motion.div>
        </div>

        {/* Compact Experience Summary Card */}
        <motion.div 
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8 px-8 py-3 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] group hover:border-violet-500/30 transition-all duration-500"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col items-center">
            <span className="text-[9px] text-gray-500 uppercase tracking-[0.2em] mb-0.5 font-medium group-hover:text-violet-400/70 transition-colors">Total Experience</span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold text-white tracking-tight">{scalarExp}</span>
              <span className="text-[10px] text-gray-400 font-medium">Months</span>
            </div>
          </div>
          
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          
          <div className="flex flex-col items-center">
            <span className="text-[9px] text-gray-500 uppercase tracking-[0.2em] mb-0.5 font-medium group-hover:text-violet-400/70 transition-colors">Relevant Experience</span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold text-white tracking-tight">{kiranExp}</span>
              <span className="text-[10px] text-gray-400 font-medium">Months</span>
            </div>
          </div>

          {/* Subtle Glow Effect */}
          <div className="absolute inset-0 rounded-2xl bg-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl -z-10" />
        </motion.div>
      </section>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        @keyframes shiny {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .animate-shiny {
          animation: shiny 3s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Home;
