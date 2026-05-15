import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const PlasmaHalo = () => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const reflectedMouseX = useMotionValue(0);
    const reflectedMouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            reflectedMouseX.set(e.clientX * 0.9);
            reflectedMouseY.set(e.clientY * 0.9);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY, reflectedMouseX, reflectedMouseY]);

    const springConfig = { damping: 25, stiffness: 150 };
    const haloX = useSpring(mouseX, springConfig);
    const haloY = useSpring(mouseY, springConfig);
    const reflectedX = useSpring(reflectedMouseX, springConfig);
    const reflectedY = useSpring(reflectedMouseY, springConfig);

    return (
        <div className="fixed inset-0 z-50 pointer-events-none mix-blend-screen overflow-hidden">

            {/* Primary Plasma Glow */}
            <motion.div
                style={{ x: haloX, y: haloY, translateX: "-30%", translateY: "-50%" }}
                className="absolute w-[600px] h-[600px] rounded-full opacity-40 blur-[80px] will-change-transform"
                initial={false}
            >
                <div className="w-full h-full bg-gradient-radial from-indigo-500/40 via-cyan-500/10 to-transparent" />
            </motion.div>

            {/* Internal "Point" Light */}
            <motion.div
                style={{ x: haloX, y: haloY, translateX: "-50%", translateY: "-50%" }}
                className="absolute w-[4px] h-[4px] bg-white rounded-full blur-[2px] opacity-80 will-change-transform"
            />

            {/* Reflected Halos (Subtle artifacts) */}
            <motion.div
                style={{ x: reflectedX, y: reflectedY, translateX: "-50%", translateY: "-50%" }}
                className="absolute w-[300px] h-[300px] rounded-full bg-purple-500/5 blur-[60px] opacity-20 will-change-transform"
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
