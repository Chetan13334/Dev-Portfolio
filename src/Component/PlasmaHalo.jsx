import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const PlasmaHalo = () => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    const springConfig = { damping: 25, stiffness: 150 };
    const haloX = useSpring(mousePos.x, springConfig);
    const haloY = useSpring(mousePos.y, springConfig);

    return (
        <div className="fixed inset-0 z-50 pointer-events-none mix-blend-screen overflow-hidden">

            {/* Primary Plasma Glow */}
            <motion.div
                style={{ x: haloX, y: haloY, translateX: "-50%", translateY: "-50%" }}
                className="absolute w-[600px] h-[600px] rounded-full opacity-40 blur-[80px]"
                initial={false}
            >
                <div className="w-full h-full bg-gradient-radial from-indigo-500/40 via-cyan-500/10 to-transparent" />
            </motion.div>

            {/* Internal "Point" Light */}
            <motion.div
                style={{ x: haloX, y: haloY, translateX: "-50%", translateY: "-50%" }}
                className="absolute w-[4px] h-[4px] bg-white rounded-full blur-[2px] opacity-80"
            />

            {/* Reflected Halos (Subtle artifacts) */}
            <motion.div
                style={{
                    x: useSpring(mousePos.x * 0.9, springConfig),
                    y: useSpring(mousePos.y * 0.9, springConfig),
                    translateX: "-50%", translateY: "-50%"
                }}
                className="absolute w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[60px] opacity-20"
            />

            <style>{`
        .bg-gradient-radial {
          background: radial-gradient(circle at center, var(--tw-gradient-from) 0%, var(--tw-gradient-to) 100%);
        }
      `}</style>
        </div>
    );
};

export default PlasmaHalo;
