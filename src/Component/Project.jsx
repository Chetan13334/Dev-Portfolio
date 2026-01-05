import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import attend from "../assets/AttendMate.png";
import managely from "../assets/Managely.png";


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
    gradient: "from-indigo-500/20 to-blue-500/20",
    accentColor: "indigo",
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
    gradient: "from-green-500/20 to-emerald-500/20",
    accentColor: "green",
  },
];

// Project Card Component with 3D Tilt
const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Image Side */}
        <motion.div
          className={`relative order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} rounded-2xl blur-2xl opacity-50`} />
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
            <img
              src={project.image}
              alt={project.title}
              className="relative w-full rounded-2xl border border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:rotate-1"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </motion.div>

        {/* Content Side */}
        <div className={`space-y-6 order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
          {/* Project Type Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.2 + 0.2 }}
          >
            <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium bg-${project.accentColor}-500/10 text-${project.accentColor}-300 border border-${project.accentColor}-500/30`}>
              {project.type}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h3
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.2 + 0.3 }}
          >
            {project.title}
          </motion.h3>

          {/* Description */}
          <motion.p
            className="text-gray-300 text-lg leading-relaxed"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.2 + 0.4 }}
          >
            {project.description}
          </motion.p>

          {/* Bullets */}
          <motion.ul
            className="space-y-3"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: index * 0.2 + 0.5 }}
          >
            {project.bullets.map((bullet, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-gray-300"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.2 + 0.5 + i * 0.1 }}
              >
                <span className={`text-${project.accentColor}-400 text-xl mt-0.5`}>✓</span>
                <span>{bullet}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tech Stack */}
          <motion.div
            className="flex flex-wrap gap-3 pt-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: index * 0.2 + 0.8 }}
          >
            {project.tech.map((tech, i) => (
              <motion.div
                key={i}
                className="group relative p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{ scale: 1.1, rotate: 5 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ delay: index * 0.2 + 0.8 + i * 0.05 }}
              >
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                  alt={tech}
                  className="w-7 h-7"
                  onError={(e) => {
                    e.target.src = `https://cdn.simpleicons.org/${tech}`;
                  }}
                />
                {/* Tooltip */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black/90 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                  {tech}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="work"
      className="relative min-h-screen bg-black text-white font-rajdhani py-20 px-4 md:px-8 overflow-hidden"
      aria-label="Projects"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative flex flex-col items-center justify-center py-16 bg-black text-white overflow-hidden">
        <h2 className="text-8xl md:text-[10rem] font-extrabold bg-gradient-to-r from-white/10 via-white/5 to-white/2 bg-clip-text text-transparent select-none tracking-tighter">
          PROJECTS 
        </h2>
        <h3 className="absolute text-4xl mb-12 md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-gray-300 capitalize ">
          Projects
        </h3>
        <p className="relative text-lg text-gray-400 uppercase tracking-widest z-10">
          Featured Case Studies
        </p>
      </div>

      <div className="max-w-7xl mx-auto mt-20 space-y-32 md:space-y-40">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default ProjectsSection;
