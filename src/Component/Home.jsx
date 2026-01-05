import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";


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

// Magnetic Button Component
const MagneticButton = ({ children, href }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    // Magnetic effect - pull towards cursor
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/10 py-[3px] pl-2 pr-[3px] text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pl-3 md:pr-1"
    >
      <a href={href} className="z-10 px-2 text-white transition-colors duration-300 group-hover:text-black">
        {children}
      </a>

      <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-white opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"></span>

      <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-white p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-black transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="absolute -translate-x-5 text-black opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </span>
    </motion.div>
  );
};

// Typing Effect Component
const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[2px] h-5 bg-gray-300 ml-1"
      />
    </span>
  );
};

// Parallax Orb Component
const ParallaxOrb = ({ className, style, mouseX, mouseY, strength = 0.02 }) => {
  const x = useTransform(mouseX, [0, window.innerWidth], [-20 * strength * 100, 20 * strength * 100]);
  const y = useTransform(mouseY, [0, window.innerHeight], [-20 * strength * 100, 20 * strength * 100]);

  return (
    <motion.div
      className={className}
      style={{ ...style, x, y }}
    />
  );
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

  return (
    <>
      <section
        className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden p-4 font-rajdhani pt-24 md:pt-0"
        id="home"
      >


        <ParallaxOrb
          className="absolute left-[-10%] md:left-[-5%] top-[15%] md:top-[20%] rotate-[12deg]"
          mouseX={mouseX}
          mouseY={mouseY}
          strength={0.015}
        >
          <div className="relative w-[300px] md:w-[500px] h-[60px] md:h-[100px] translate-y-[1px]">
            <div
              className="
                absolute inset-0 rounded-full bg-gradient-to-r 
                to-transparent from-indigo-500/20 backdrop-blur-[1px] 
                border border-white/10 shadow-xl animate-pulse-slow
              "
            ></div>
          </div>
        </ParallaxOrb>

        <ParallaxOrb
          className="absolute right-[5%] md:right-[10%] bottom-[5%] md:bottom-[10%] -rotate-[8deg]"
          mouseX={mouseX}
          mouseY={mouseY}
          strength={0.02}
        >
          <div className="relative w-[200px] md:w-[300px] h-[50px] md:h-[80px] translate-y-[9px]">
            <div
              className="
                absolute inset-0 rounded-full bg-gradient-to-r
                to-transparent from-violet-500/20 backdrop-blur-[1px] 
                border border-white/10 shadow-xl animate-pulse-slow
              "
            ></div>
          </div>
        </ParallaxOrb>

        <div className="z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto">


          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
            bg-white/5 border border-white/10 mb-8 md:mb-12"
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
                  className="inline-block cursor-pointer bg-clip-text text-transparent 
                    bg-gradient-to-r from-[#007BFF] to-[#FF0080]"
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
              className="flex items-center gap-2 py-3 text-sm md:text-base 
                font-light text-white/75 cursor-pointer hover:text-white/90 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="lucide lucide-copy"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>

              <span className="truncate max-w-[200px] md:max-w-none">chetanpatil0104@gmail.com</span>
            </motion.button>

          </motion.div>
        </div>
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
