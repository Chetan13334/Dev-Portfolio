import React from "react";
import { motion } from "framer-motion";

const educationEntries = [
  {
    id: 1,
    degree: "Bachelor in Electronics Engineering",
    institution: "Shri Shivaji Vidya Prasarak Sanstha's Bapusaheb Shivajirao Deore College of Engineering, Dhule",
    years: "2021 — 2025",
    details: ["CGPA: 7.1 out of 10"],
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Jai Hind Junior College , Dhule",
    years: "2020 — 2021",
    details: ["Percentage: 78%"],
  },
  {
    id: 3,
    degree: "Secondary School Certificate (SSC)",
    institution: "Jai Hind High School , Dhule",
    years: "2019",
    details: ["Percentage: 68%"],
  },
];

const Education = () => {
  return (
    <section className="relative py-16 md:py-24 text-white bg-black overflow-hidden">

    
      <h1 className="absolute top-16 left-1/2 -translate-x-1/2 text-[100px] md:text-[230px] font-bold text-white/5 select-none tracking-wider">
        EDUCATION
      </h1>

 
      <div className="relative z-10 text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Education
        </motion.h2>

       
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="h-[2px] w-10 bg-purple-600"></div>
          <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
          <div className="h-[2px] w-10 bg-purple-600"></div>
        </div>

        <p className="mt-6 text-gray-400 tracking-wide">
          ACADEMIC JOURNEY
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto mt-20 px-6">

     
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-purple-600/40"></div>

        {educationEntries.map((entry, index) => (
          <motion.div
            key={entry.id}
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative text-center flex flex-col items-center mb-20 md:mb-24"
          >
          
            <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-black border-2 border-purple-600 z-10"></div>

            
            <div className="mt-3 px-4 py-1 rounded-full text-purple-300 text-xs md:text-sm bg-purple-900/40 border border-purple-700/40 backdrop-blur-md">
              {entry.years}
            </div>

           
            <h3 className="mt-5 text-lg md:text-2xl font-bold tracking-wide">
              🎓 {entry.degree}
            </h3>

           
            <p className="mt-2 text-gray-400 text-sm md:text-base px-3">
              {entry.institution}
            </p>

            
            <div className="w-28 md:w-40 h-[2px] bg-purple-600/30 mt-4"></div>

           
            {entry.details.length > 0 && (
              <div className="mt-3 px-4 py-1 rounded-full text-purple-300 text-xs md:text-sm bg-purple-900/40 border border-purple-700/40">
                {entry.details[0]}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
