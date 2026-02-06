import React from "react";
import { motion } from "framer-motion";

const EducationCard = ({ entry, index }) => {
    return (
        <motion.div
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
    );
};

export default EducationCard;
