import React, { useMemo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const QuantumSpace = () => {
    const { scrollY } = useScroll();

    // Parallax layers based on scroll
    const nearY = useTransform(scrollY, [0, 5000], [0, -1000]);
    const midY = useTransform(scrollY, [0, 5000], [0, -500]);
    const farRotate = useTransform(scrollY, [0, 5000], [0, 15]);

    // Generate stars once to prevent re-renders
    const generateStars = (count, sizeRange) => {
        return Array.from({ length: count }).map((_, i) => ({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            size: Math.random() * sizeRange[1] + sizeRange[0],
            opacity: Math.random() * 0.7 + 0.3,
            duration: Math.random() * 3 + 2,
        }));
    };

    const farStars = useMemo(() => generateStars(150, [0.5, 1.5]), []);
    const midStars = useMemo(() => generateStars(80, [1, 2.5]), []);
    const nearStars = useMemo(() => generateStars(40, [2, 4]), []);

    return (
        <div className="fixed inset-0 z-[-10] bg-[#030014] overflow-hidden pointer-events-none">

            {/* Background Deep Glows */}
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-900/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[100px]" />

            {/* Far Layer: Galaxy Rotation */}
            <motion.div
                style={{ rotate: farRotate }}
                className="absolute inset-[-50%] opacity-30"
            >
                {farStars.map((star, i) => (
                    <div
                        key={`far-${i}`}
                        className="absolute bg-white rounded-full"
                        style={{
                            left: star.left,
                            top: star.top,
                            width: star.size,
                            height: star.size,
                            opacity: star.opacity,
                            boxShadow: `0 0 ${star.size * 2}px white`,
                        }}
                    />
                ))}
            </motion.div>

            {/* Mid Layer: Drifting Blur */}
            <motion.div
                style={{ y: midY }}
                className="absolute inset-0 opacity-50"
            >
                {midStars.map((star, i) => (
                    <motion.div
                        key={`mid-${i}`}
                        animate={{ opacity: [star.opacity, star.opacity * 0.4, star.opacity] }}
                        transition={{ duration: star.duration, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bg-indigo-300 rounded-full blur-[1px]"
                        style={{
                            left: star.left,
                            top: star.top,
                            width: star.size,
                            height: star.size,
                        }}
                    />
                ))}
            </motion.div>

            {/* Near Layer: Fast Parallax */}
            <motion.div
                style={{ y: nearY }}
                className="absolute inset-0"
            >
                {nearStars.map((star, i) => (
                    <div
                        key={`near-${i}`}
                        className="absolute bg-cyan-200 rounded-full"
                        style={{
                            left: star.left,
                            top: star.top,
                            width: star.size,
                            height: star.size,
                            boxShadow: `0 0 ${star.size * 3}px rgba(0, 240, 255, 0.4)`,
                        }}
                    />
                ))}
            </motion.div>

            {/* Nebula/Aurora Streaks */}
            <div className="absolute inset-0 opacity-20 filter blur-[80px]">
                <div className="absolute top-[20%] left-[-10%] w-[80%] h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent rotate-[15deg] animate-pulse" />
                <div className="absolute bottom-[30%] right-[-10%] w-[70%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent rotate-[-10deg] animate-pulse" />
            </div>

        </div>
    );
};

export default QuantumSpace;
