import React, { useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const navItems = [
  { name: "Home", id: "home" },
  { name: "Work", id: "work" },
  { name: "About", id: "about" },
  { name: "Blog", id: "blog" },
  { name: "More", id: "more" },
];

// Magnetic Nav Item Component
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

    // Magnetic effect - subtle pull
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
      <a>{item.name}</a>

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

const Header = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className="h-16 fixed top-0 left-0 right-0 z-30 flex items-center justify-center"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <nav className="fixed z-20 top-5 w-full flex items-center justify-center px-4">

        <motion.ul
          className={`
            border border-white/10 bg-white/5 
            px-1.5 py-1 rounded-full backdrop-blur-md 
            hidden md:flex items-center justify-center space-x-5
            transition-all duration-300
          `}
          style={{
            backdropFilter: scrolled ? 'blur(20px)' : 'blur(12px)',
            background: scrolled ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.05)',
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {navItems.map((item) => (
            <MagneticNavItem
              key={item.name}
              item={item}
              isActive={activeItem === item.name}
              onClick={() => {
                setActiveItem(item.name);
                scrollToSection(item.id);
              }}
            />
          ))}
        </motion.ul>


        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden fixed right-4 top-5 z-30 p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 hover:text-white transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              viewBox="0 0 448 512"
            >
              <path d="M16 132h416c8.8 0 16-7.2 16-16V76c0-8.8-7.2-16-16-16H16C7.2 60 0 
              67.2 0 76v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 
              16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 
              16v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 
              16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 
              0-16 7.2-16 16v40c0 8.8 7.2 16 16 16z"/>
            </svg>
          )}
        </motion.button>


        {isMobileMenuOpen && (
          <motion.div
            className="absolute top-16 left-0 right-0 mx-4 p-4 rounded-2xl bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 md:hidden flex flex-col items-center space-y-4 shadow-2xl"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                onClick={() => {
                  setActiveItem(item.name);
                  scrollToSection(item.id);
                }}
                className={`
                  text-lg font-medium cursor-pointer transition-colors duration-200
                  ${activeItem === item.name ? "text-violet-400" : "text-gray-300 hover:text-white"}
                `}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 5 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
