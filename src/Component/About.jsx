import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import avatar from "../assets/memoji-smile.webp";
import Resume from "../assets/ChetanPatil_Resume2026.pdf";
import { aboutSkills, socialLinks } from "./Mock/aboutData";

const ScrambleText = ({ text, className }) => {
  const [displayText, setDisplayText] = useState(text);

  const chars = "!<>-_\\/[]{}—=+*^?#________";

  const scramble = useCallback(() => {
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
      }

      iteration += 1 / 3;
    }, 30);
  }, [text, chars]);

  useEffect(() => {
    const timer = setTimeout(() => {
      scramble();
    }, 500);

    return () => clearTimeout(timer);
  }, [scramble]);

  return <span className={className}>{displayText}</span>;
};

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
            timeouts.length = 0;
            elements.forEach(el => {
              el.classList.remove("opacity-100", "translate-y-0");
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) observer.observe(currentSection);

    return () => {
      timeouts.forEach(t => clearTimeout(t));
      if (currentSection) observer.unobserve(currentSection);
    };
  }, []);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center py-1 bg-black text-white overflow-hidden">
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
        className=" h-[150vh] relative min-h-screen bg-black text-white px-6 md:px-12 lg:px-16 pt-12 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 overflow-hidden"
      >
        <motion.div
          className="relative group about-animate opacity-0 translate-y-5 transition-all duration-700 flex-shrink-0"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
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
              {aboutSkills.map((skill, i) => (
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
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target={social.href.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" fill="currentColor" viewBox={social.viewBox || "0 0 496 512"}>
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
