import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import attend from "../assets/AttendMate.png";
import managely from "../assets/Managely.png";
import SectionHeader from "./SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: "attend",
    title: "AttendMate",
    type: "Team project",
    summary: "Attendance automation system with facial recognition & geo-fencing.",
    description:
      "Attendance automation system with facial recognition, geo-fencing and role-based dashboards.",
    bullets: [
      "Role-based dashboards",
      "Secure geo-fenced attendance",
      "Real-time tracking & analytics",
      "Facial recognition attendance automation",
    ],
    tech: ["react", "javascript", "tailwindcss", "firebase", "typescript", "github", "ionic"],
    image: attend,
    shadow: "shadow-[0_0_35px_rgba(59,130,246,0.45)]",
    colorTheme: {
      bg: "bg-indigo-500/10",
      text: "text-indigo-300",
      border: "border-indigo-500/30",
    },
  },
  {
    id: "managely",
    title: "Managely",
    type: "Solo project",
    summary:
      "Full-stack employee management system with secure login, CRUD operations, and MySQL integration.",
    description:
      "Manager-admin system with secure auth, CRUD employee operations and clean dashboards.",
    bullets: [
      "Secure manager login",
      "Employee CRUD operations",
      "REST APIs with Spring Boot",
      "Responsive React frontend",
    ],
    tech: ["java", "react", "spring", "mysql", "bootstrap", "github"],
    image: managely,
    shadow: "shadow-[0_0_35px_rgba(16,185,129,0.45)]",
    colorTheme: {
      bg: "bg-green-500/10",
      text: "text-green-300",
      border: "border-green-500/30",
    },
  },
];

const ScrollCard = ({ project }) => (
  <div className="w-full lg:h-[95vh] h-auto py-6 lg:py-0 flex items-center justify-center">
    <div className="bg-[#111827] p-6 rounded-2xl border border-gray-700 shadow-xl max-w-[900px] w-full">
      <h3 className="text-lg mb-4 text-gray-300">{project.summary}</h3>

      <div className="w-full flex justify-center">
        <img
          src={project.image}
          alt={project.title}
          className={`
            w-full max-w-[85%] translate-y-5 -rotate-3 rounded-xl border border-white/20
            transition-all duration-700 will-change-transform
            hover:scale-105 hover:-rotate-2
            ${project.shadow}
          `}
        />
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef(null);
  const leftRef = useRef(null);

  useEffect(() => {
    const total = projects.length;
    const container = containerRef.current;
    const left = leftRef.current;

    if (!container || !left) return;

    ScrollTrigger.killAll();
    gsap.killTweensOf(left);

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top top",
          end: `+=${(total - 1) * window.innerHeight}`,
          scrub: 1.2,
          pin: true,
          anticipatePin: 1,
          onUpdate: (self) => {
            let idx = Math.round(self.progress * (total - 1));
            if (idx < 0) idx = 0;
            if (idx > total - 1) idx = total - 1;
            setActiveIndex(idx);
          },
        },
      });

      timeline.to(left, {
        y: -(total - 1) * window.innerHeight,
        ease: "none",
      });
    });

    mm.add("(max-width: 1023px)", () => {
      setActiveIndex(0);
    });

    return () => {
      mm.revert();
      ScrollTrigger.killAll();
    };
  }, []);

  const P = projects[activeIndex];

  return (
    <section
      id="work"
      className="relative bg-black text-white font-rajdhani overflow-hidden h-[240vh]"
      aria-label="Projects"
    >
      <SectionHeader title="Projects" subtitle="Featured Case Studies" bgText="PROJECTS" />

      <div ref={containerRef} className="relative max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10">

          <div ref={leftRef} className="w-full lg:w-[55%] relative h-auto lg:h-[400vh]">
            <div className="lg:absolute top-0 left-0 right-0 flex flex-col gap-10 lg:gap-0">
              {projects.map((p) => (
                <div key={p.id} className="lg:h-screen flex flex-col gap-2 lg:block mb-12 lg:mb-0">
                  <ScrollCard project={p} />

                  <div className="lg:hidden block space-y-4 px-2">
                    <h2 className="text-3xl font-bold">{p.title}</h2>
                    <p className="text-gray-400">{p.type}</p>
                    <p className="text-gray-300 leading-relaxed">{p.description}</p>

                    <div className="flex flex-wrap gap-2 mt-3">
                      {p.tech.map((t, i) => (
                        <span
                          key={i}
                          className={`text-sm ${p.colorTheme.bg} ${p.colorTheme.text} px-3 py-1.5 rounded-lg border ${p.colorTheme.border} font-medium`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            className="hidden lg:flex w-[45%] items-center h-screen"
            initial={{ opacity: 0, y: 50, scale: 0.98, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-6 w-full">

              <div className="about-animate opacity-0 translate-y-5 transition-all duration-700" style={{ animationDelay: "0s", animationFillMode: "forwards" }}>
                <h2 className="text-3xl font-bold">{P.title}</h2>
                <p className="text-gray-400 mt-1">{P.type}</p>
              </div>

              <div className="about-animate opacity-0 translate-y-5 transition-all duration-700" style={{ animationDelay: "0.08s", animationFillMode: "forwards" }}>
                <p className="text-gray-300 leading-relaxed">{P.description}</p>
              </div>

              <ul className="space-y-3">
                {P.bullets.map((d, i) => (
                  <li
                    key={i}
                    className="flex gap-3 items-start text-gray-300 about-animate"
                    style={{ animationDelay: `${0.12 + i * 0.06}s`, animationFillMode: "forwards" }}
                  >
                    <span className="text-purple-400 text-xl">+</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>

              <div
                className="flex gap-4 mt-4 about-animate"
                style={{ animationDelay: `${0.12 + P.bullets.length * 0.06}s`, animationFillMode: "forwards" }}
              >
                {P.tech.map((t, i) => (
                  <div key={i} className="text-sm p-3 bg-white/5 rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${t}/${t}-original.svg`}
                      alt={t}
                      className="w-6 h-6"
                    />
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @keyframes slideUpAnimate {
          to { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .about-animate {
          opacity: 0;
          transform: translateY(12px);
          filter: blur(6px);
          will-change: transform, opacity, filter;
        }
        .about-animate {
          animation-name: slideUpAnimate;
          animation-duration: 0.8s;
          animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
          animation-fill-mode: forwards;
        }
        .project-img {
          transition: transform .5s ease, box-shadow .5s ease;
        }
        .project-img:hover {
          transform: scale(1.03) rotate(-1deg);
        }
      `}</style>

    </section>
  );
};

export default ProjectsSection;
