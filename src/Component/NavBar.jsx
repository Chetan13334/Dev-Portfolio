import React, { useState } from "react";
import { motion } from "framer-motion";
import MagneticNavItem from "./SubComponent/MagneticNavItem";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Work", id: "work" },
  { name: "Skills", id: "skills" },
  { name: "Contact", id: "contact" },
];

const Header = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[999] flex items-center justify-center p-4 pointer-events-none"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <nav className="w-full flex items-center justify-center pointer-events-auto relative">
        <motion.ul
          className="border border-white/10 bg-white/5 px-1.5 py-1 rounded-full backdrop-blur-md hidden md:flex items-center justify-center space-x-5 transition-all duration-300"
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
          className="md:hidden absolute right-4 top-1 z-50 p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 hover:text-white transition-colors pointer-events-auto"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 448 512">
              <path d="M16 132h416c8.8 0 16-7.2 16-16V76c0-8.8-7.2-16-16-16H16C7.2 60 0 67.2 0 76v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16z" />
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
                className={`text-lg font-medium cursor-pointer transition-colors duration-200 ${activeItem === item.name ? "text-violet-400" : "text-gray-300 hover:text-white"}`}
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
