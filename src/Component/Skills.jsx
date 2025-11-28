import React, { useEffect, useRef } from "react";
import flow from "../assets/gpt.webp";

const skills = [
  { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
  { name: "JavaScript", icon: "https://cdn.simpleicons.org/javascript" },
  { name: "ReactJS", icon: "https://cdn.simpleicons.org/react" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/darkgreen" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
  { name: "firebase", icon: "https://cdn.simpleicons.org/firebase" },
  { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript" },
  { name: "HTML", icon: "https://cdn.simpleicons.org/html5" },
  { name: "CSS", icon: "https://cdn.simpleicons.org/css" },
  { name: "NextJS", icon: "https://cdn.simpleicons.org/nextdotjs/white" },
  { name: "Bootstrap", icon: "https://cdn.simpleicons.org/bootstrap" },
  { name: "TailwindCSS", icon: "https://cdn.simpleicons.org/tailwindcss" },
  { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer" },
  { name: "Shadcn", icon: "https://cdn.simpleicons.org/shadcnui/white" },
  { name: "NodeJS", icon: "https://cdn.simpleicons.org/nodedotjs/darkgreen" },
  { name: "ExpressJS", icon: "https://cdn.simpleicons.org/express/white" },
  { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/skyblue" },
  { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/blue" },
  { name: "Redux", icon: "https://cdn.simpleicons.org/redux" },
  { name: "Git", icon: "https://cdn.simpleicons.org/git" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/white" },
  { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white" },
  { name: "Postman", icon: "https://cdn.simpleicons.org/postman" },
  { name: "Docker", icon: "https://cdn.simpleicons.org/docker" },
  { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/blue" },
  { name: "SpringBoot", icon: "https://cdn.simpleicons.org/Spring" },
  { name: "GSAP", icon: "https://cdn.simpleicons.org/gsap" },
  { name: "Ionic", icon: "https://cdn.simpleicons.org/ionic" }
];

export const Skills = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show-skill");
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach(card => observer.observe(card));
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white flex flex-col items-center py-20 px-4 font-rajdhani"
    >
      <div className="relative w-full max-w-4xl flex flex-col items-center justify-center">
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative mx-auto size-[300px] md:size-[380px] opacity-70 translate-y-24">
          <img src={flow} draggable="false" alt="" className="w-full h-full" />
        </div>

        <div className="relative flex flex-col items-center justify-center -mt-10">
          <span className="text-8xl md:text-[10rem] mt-[3rem] font-extrabold bg-gradient-to-r from-white/10 via-white/5 to-white/20 bg-clip-text text-transparent tracking-tighter">
            SKILLS
          </span>

          <h2 className="absolute text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Skills
          </h2>

          <div className="flex items-center gap-4 my-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500/50"></div>
            <div className="h-1.5 w-1.5 rounded-full bg-purple-500/70"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/50"></div>
          </div>

          <p className="text-base md:text-lg text-gray-300 uppercase tracking-wider text-center">
            I constantly try to improve
          </p>
        </div>
      </div>

      <div className="mx-auto mt-16 flex flex-wrap justify-center gap-3 max-w-4xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            ref={el => (cardsRef.current[index] = el)}
            className="skill-scroll group relative flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-neutral-900 px-4 py-2 text-sm lg:text-base text-white/80 hover:bg-neutral-800 transition-all duration-300"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-5 lg:w-6 transition-transform duration-300 group-hover:scale-125"
            />
            <span className="relative">
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.name}
              </span>
              <span className="transition-opacity duration-300">
                {skill.name}
              </span>
            </span>
          </div>
        ))}
      </div>

      <style>{`
        .skill-scroll {
          opacity: 0;
          transform: translateY(25px) scale(0.95);
          transition: all 0.6s ease-out;
        }
        .skill-scroll.show-skill {
          opacity: 1 !important;
          transform: translateY(0) scale(1) !important;
        }
      `}</style>
    </section>
  );
};

export default Skills;
