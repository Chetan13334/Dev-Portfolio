import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import avatar from "../assets/memoji-smile.webp";
import Resume from "../assets/ReactJs_ChetanPatil_Resume.pdf";

// Text Scramble Effect
const ScrambleText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);
  const [isScrambling, setIsScrambling] = useState(false);

  const chars = "!<>-_\\/[]{}—=+*^?#________";

  const scramble = () => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsScrambling(false);
      }

      iteration += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScrambling(true);
      scramble();
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return <span className={className}>{displayText}</span>;
};

// Ripple Button Component
const RippleButton = ({ children, href, download }) => {
  const [ripples, setRipples] = useState([]);

  const addRipple = (e) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: Date.now(),
    };

    setRipples([...ripples, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <a
      href={href}
      download={download}
      onClick={addRipple}
      className="relative inline-block px-8 py-3 bg-gradient-to-r from-violet-600 to-orange-500 hover:from-violet-700 hover:to-orange-600 text-white font-medium rounded-full shadow-lg hover:shadow-violet-500/30 transition-all duration-300 overflow-hidden"
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ripple"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
      {children}
    </a>
  );
};

const AboutMe = () => {
  const sectionRef = React.useRef(null);

  useEffect(() => {
    let timeouts = [];
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const elements = entry.target.querySelectorAll(".about-animate");
          if (entry.isIntersecting) {
            elements.forEach((el, i) => {
              const timeout = setTimeout(() => {
                el.classList.add("opacity-100", "translate-y-0");
              }, i * 180);
              timeouts.push(timeout);
            });
          } else {
            timeouts.forEach(t => clearTimeout(t));
            timeouts = [];
            elements.forEach(el => {
              el.classList.remove("opacity-100", "translate-y-0");
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      timeouts.forEach(t => clearTimeout(t));
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center py-16 bg-black text-white overflow-hidden">
        <h2 className="text-8xl md:text-[10rem] font-extrabold bg-gradient-to-r from-white/10 via-white/5 to-white/2 bg-clip-text text-transparent select-none tracking-tighter">
          ABOUT ME 
        </h2>
        <h3 className="absolute text-4xl mb-12 md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-gray-300 capitalize ">
          About Me
        </h3>
        <p className="relative text-lg text-gray-400 uppercase tracking-widest z-10">
          More About Me
        </p>
      </div>
      <section
        ref={sectionRef}
        id="about"
        className=" h-[150vh] relative min-h-screen bg-black text-white px-6 md:px-12 lg:px-16 pt-16 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 overflow-hidden"
      >
        <motion.div
          className="relative group about-animate opacity-0 translate-y-5 transition-all duration-700 flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Animated gradient border */}
          <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-violet-500/20 to-orange-500/20 blur-2xl -z-10 animate-pulse"></div>

          <div className="absolute -inset-1 rounded-full bg-gradient-conic from-violet-500 via-orange-500 to-violet-500 opacity-75 animate-spin-slow"></div>

          <div className="relative size-52 md:size-64 rounded-full overflow-hidden border-4 border-black shadow-2xl animate-floating mx-auto lg:mx-0">
            <img
              src={avatar}
              alt="Avatar"
              className="w-full h-full object-cover rounded-full transition-all duration-300 group-hover:scale-[1.05]"
            />
          </div>

          <motion.span
            className="absolute -top-4 -right-2 md:-top-6 md:-right-4 px-4 py-2 rounded-full shadow-lg bg-gradient-to-br from-violet-600 to-violet-800 text-white text-xs md:text-sm font-medium"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Developer
          </motion.span>

          <motion.span
            className="absolute -bottom-4 -left-4 md:-left-6 px-4 py-2 rounded-full shadow-lg bg-gradient-to-br from-orange-500 to-red-600 text-white text-xs md:text-sm font-medium"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            EEE Student
          </motion.span>
        </motion.div>

        <div className="max-w-2xl w-full text-center lg:text-left space-y-6 about-animate opacity-0 translate-y-5 transition-all duration-700">
          <h2 className="text-3xl md:text-5xl font-bold">
            Hey! I'm{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-violet-500 to-orange-500 bg-clip-text text-transparent">
                <ScrambleText text="CHETAN" className="bg-gradient-to-r from-violet-500 to-orange-500 bg-clip-text text-transparent" />
              </span>
              <span className="absolute left-0 -bottom-2 h-1 bg-gradient-to-r from-violet-500 to-orange-500 rounded-full w-0 animate-underline"></span>
            </span>
          </h2>

          <motion.p
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            I'm a Backend & Frontend Web developer and Electronics Engineering student specializing in clean, modern, responsive full-stack applications — using React, Next.js, PostgreSQL, Prisma and MongoDB.
          </motion.p>

          <motion.p
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            I'm leveling up in backend + DevOps and always open to full-time or freelance opportunities.
          </motion.p>

          <div>
            <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {["</> Backend Development", "💻 Frontend Development", "📚 API Testing"].map((skill, i) => (
                <motion.span
                  key={i}
                  className="skill-pill"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-1">Connect With Me</h3>
            <div className="flex items-center gap-5 mt-4 justify-center lg:justify-start">
              {[
                { href: "https://github.com/Chetan13334", label: "GitHub", path: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" },
                { href: "https://www.linkedin.com/in/chetan-patil-5ab846297", label: "LinkedIn", path: "M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4v12h-4V8zm6.5 0h3.8v1.6h.1c.5-1 1.8-2 3.7-2 3.9 0 4.6 2.6 4.6 6v7h-4v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V20H7V8z" },
                { href: "mailto:chetanpatil0104@gmail.com", label: "Gmail", path: "M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  className="social-icon"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" fill="currentColor" viewBox="0 0 496 512">
                    <path d={social.path} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <RippleButton href={Resume} download>
              Download Resume
            </RippleButton>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes floating {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        .animate-floating {
          animation: floating 4s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .bg-gradient-conic {
          background: conic-gradient(from 0deg, var(--tw-gradient-stops));
        }
        @keyframes underline {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-underline {
          animation: underline 1.4s ease-out forwards;
        }
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
        .animate-ripple {
          animation: ripple 0.6s ease-out;
        }
        .skill-pill {
          @apply flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-gray-200 hover:bg-white/10 transition-all duration-300;
        }
        .social-icon {
          @apply size-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-violet-500/30 hover:to-orange-500/30 transition-all duration-300;
        }
      `}</style>
    </>
  );
};

export default AboutMe;
