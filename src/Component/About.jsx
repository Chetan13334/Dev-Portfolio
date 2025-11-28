import React, { useEffect } from "react";
import SectionHeader from "./SectionHeader";
import avatar from "../assets/memoji-smile.webp";
import Resume from "../assets/ReactJs_ChetanPatil_Resume.pdf";

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
      <SectionHeader title="About Me" subtitle="More About Me" bgText="ABOUT ME" />

      <section
        ref={sectionRef}
        id="about"
        className=" h-[150vh] relative min-h-screen bg-black text-white px-6 md:px-12 lg:px-16 pt-16 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-24 overflow-hidden"
      >
        <div className="relative group about-animate opacity-0 translate-y-5 transition-all duration-700 flex-shrink-0">
          <div className="absolute -inset-6 rounded-full bg-gradient-to-r from-violet-500/20 to-orange-500/20 blur-2xl -z-10 animate-pulse"></div>

          <div className="relative size-52 md:size-64 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl animate-floating mx-auto lg:mx-0">
            <img
              src={avatar}
              alt="Avatar"
              className="w-full h-full object-cover rounded-full transition-all duration-300 group-hover:scale-[1.05]"
            />
          </div>

          <span className="absolute -top-4 -right-2 md:-top-6 md:-right-4 px-4 py-2 rounded-full shadow-lg bg-gradient-to-br from-violet-600 to-violet-800 text-white text-xs md:text-sm font-medium animate-tagFloat">
            Developer
          </span>

          <span className="absolute -bottom-4 -left-4 md:-left-6 px-4 py-2 rounded-full shadow-lg bg-gradient-to-br from-orange-500 to-red-600 text-white text-xs md:text-sm font-medium animate-tagFloat2">
            EEE Student
          </span>
        </div>

        <div className="max-w-2xl w-full text-center lg:text-left space-y-6 about-animate opacity-0 translate-y-5 transition-all duration-700">
          <h2 className="text-3xl md:text-5xl font-bold">
            Hey! I'm{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-violet-500 to-orange-500 bg-clip-text text-transparent">
                CHETAN
              </span>
              <span className="absolute left-0 -bottom-2 h-1 bg-gradient-to-r from-violet-500 to-orange-500 rounded-full w-0 animate-underline"></span>
            </span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a Backend & Frontend Web developer and Electronics Engineering student specializing in clean, modern, responsive full-stack applications — using React, Next.js, PostgreSQL, Prisma and MongoDB.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed">
            I'm leveling up in backend + DevOps and always open to full-time or freelance opportunities.
          </p>

          <div>
            <h3 className="text-2xl font-semibold mb-4">What I Do</h3>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <span className="skill-pill">&lt;/&gt; Backend Development</span>
              <span className="skill-pill">💻 Frontend Development</span>
              <span className="skill-pill">📚 API Testing</span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-1">Connect With Me</h3>
            <div className="flex items-center gap-5 mt-4 justify-center lg:justify-start">
              <a
                href="https://github.com/Chetan13334"
                className="social-icon"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" fill="currentColor" viewBox="0 0 496 512">
                  <path d="M165.9 397.4c0 2...z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/chetan-patil-5ab846297"
                className="social-icon"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98...z" />
                </svg>
              </a>

              <a
                href="mailto:chetanpatil0104@gmail.com"
                className="social-icon"
                aria-label="Gmail"
              >
                <svg viewBox="0 0 512 512" width="26" height="26" fill="currentColor">
                  <path d="M502.3 190.8c3.9...z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <a
              href={Resume}
              download
              className="inline-block px-8 py-3 bg-gradient-to-r from-violet-600 to-orange-500 hover:from-violet-700 hover:to-orange-600 text-white font-medium rounded-full shadow-lg hover:shadow-violet-500/30 transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
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
        @keyframes tagFloat {
          0%, 100% { transform: translateY(0px) rotate(-3deg); }
          50% { transform: translateY(-6px) rotate(3deg); }
        }
        .animate-tagFloat {
          animation: tagFloat 3s ease-in-out infinite;
        }
        .animate-tagFloat2 {
          animation: tagFloat 3.5s ease-in-out infinite reverse;
        }
        @keyframes underline {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-underline {
          animation: underline 1.4s ease-out forwards;
        }
        .skill-pill {
          @apply flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10 text-gray-200 hover:bg-white/10 transition-all duration-300;
        }
        .social-icon {
          @apply size-12 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-gradient-to-br hover:from-violet-500/30 hover:to-orange-500/30 hover:scale-110 transition-all duration-300;
        }
      `}</style>
    </>
  );
};

export default AboutMe;
