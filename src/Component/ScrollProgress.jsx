import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="scroll-progress"
            style={{ scaleX }}
        >
            <style>{`
        .scroll-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #7C3AED, #00F0FF, #7C3AED);
          transform-origin: 0%;
          z-index: 9998;
          box-shadow: 0 0 10px rgba(124, 58, 237, 0.5);
        }
      `}</style>
        </motion.div>
    );
};

export default ScrollProgress;
