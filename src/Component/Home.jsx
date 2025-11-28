import React from "react";
import { motion } from "framer-motion";


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
  return (
    <>
      <section
        className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden p-4 font-rajdhani pt-24 md:pt-0"
        id="home"
      >

      
        <div className="absolute left-[-10%] md:left-[-5%] top-[15%] md:top-[20%] rotate-[12deg]">
          <div className="relative w-[300px] md:w-[500px] h-[60px] md:h-[100px] translate-y-[1px]">
            <div
              className="
                absolute inset-0 rounded-full bg-gradient-to-r 
                to-transparent from-indigo-500/20 backdrop-blur-[1px] 
                border border-white/10 shadow-xl
              "
            ></div>
          </div>
        </div>

        <div className="absolute right-[5%] md:right-[10%] bottom-[5%] md:bottom-[10%] -rotate-[8deg]">
          <div className="relative w-[200px] md:w-[300px] h-[50px] md:h-[80px] translate-y-[9px]">
            <div
              className="
                absolute inset-0 rounded-full bg-gradient-to-r
                to-transparent from-violet-500/20 backdrop-blur-[1px] 
                border border-white/10 shadow-xl
              "
            ></div>
          </div>
        </div>

        <div className="z-10 flex flex-col items-center text-center w-full max-w-4xl mx-auto">

          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full 
            bg-white/5 border border-white/10 mb-8 md:mb-12 animate-fadeInUp">
            <span className="bg-primary/80 px-1.5 rounded-full -ml-1.5 text-xs md:text-sm">new</span>
            <div className="shiny-text animate-shiny text-xs md:text-sm">Chatbot Available</div>
          </div>

          
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
                  whileHover={{ scale: 1.25, rotate: 6 }}
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
                  whileHover={{ scale: 1.3, rotate: 6 }}
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
                  whileHover={{ scale: 1.25, rotate: 6 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  className="inline-block cursor-pointer"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>

          </motion.h1>

         
          <p className="text-lg md:text-2xl text-gray-300 mb-8 px-4">
            Hello, I'm Chetan Patil – a Software Developer
          </p>


          <div className="animate-fadeInUp z-100 mt-4 flex flex-col items-center justify-center gap-6 md:mt-8 md:flex-row md:gap-10">

         
            <div className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-white/10 bg-white/10 py-[3px] pl-2 pr-[3px] text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pl-3 md:pr-1">
              <a href="#contact" className="z-10 px-2 text-white transition-colors duration-300 group-hover:text-black">
                Let's Connect
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
            </div>

            
            <motion.button
              onClick={() => navigator.clipboard.writeText("chetanpatil0104@gmail.com")}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 py-3 text-sm md:text-base 
                font-light text-white/75 cursor-pointer hover:text-white/90"
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

          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
