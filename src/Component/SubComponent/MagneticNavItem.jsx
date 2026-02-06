import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MagneticNavItem = ({ item, isActive, onClick }) => {
    const ref = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 200 };
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        x.set(distanceX * 0.15);
        y.set(distanceY * 0.15);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.li
            ref={ref}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ x: springX, y: springY }}
            className={`
        cursor-pointer inline-block px-4 py-1.5 text-base font-semibold
        relative rounded-full transition-[text-shadow,color] duration-200
        focus-visible:ring-4 focus-visible:outline-1 
        text-white/70 hover:text-white/85
        ${isActive ? "text-white" : ""}
      `}
        >
            <a className="cursor-pointer">{item.name}</a>

            {isActive && (
                <motion.div
                    layoutId="activeIndicator"
                    className="absolute inset-0 -z-10 w-full rounded-full"
                    style={{ background: "rgba(124, 58, 237, 0.15)" }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                >
                    <motion.div
                        className="absolute -top-[9px] left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full"
                        style={{ background: "#7c3aed" }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div
                            className="absolute -top-2 -left-2 h-6 w-12 rounded-full blur-sm"
                            style={{ background: "rgba(124, 58, 237, 0.4)" }}
                        ></div>
                        <div
                            className="absolute -top-1 h-6 w-8 rounded-full blur-sm"
                            style={{ background: "rgba(124, 58, 237, 0.3)" }}
                        ></div>
                        <div
                            className="absolute top-0 left-2 h-4 w-4 rounded-full blur-sm"
                            style={{ background: "rgba(124, 58, 237, 0.25)" }}
                        ></div>
                    </motion.div>
                </motion.div>
            )}
        </motion.li>
    );
};

export default MagneticNavItem;
