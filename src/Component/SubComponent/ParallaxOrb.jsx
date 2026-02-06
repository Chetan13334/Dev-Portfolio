import React from "react";
import { motion, useTransform } from "framer-motion";

const ParallaxOrb = ({ className, style, mouseX, mouseY, strength = 0.02 }) => {
    const x = useTransform(mouseX, [0, typeof window !== "undefined" ? window.innerWidth : 1920], [-20 * strength * 100, 20 * strength * 100]);
    const y = useTransform(mouseY, [0, typeof window !== "undefined" ? window.innerHeight : 1080], [-20 * strength * 100, 20 * strength * 100]);

    return (
        <motion.div
            className={className}
            style={{ ...style, x, y }}
        />
    );
};

export default ParallaxOrb;
