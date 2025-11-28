import React, { useState } from "react";

const navItems = [
  { name: "Home", id: "home" },
  { name: "Work", id: "work" },
  { name: "About", id: "about" },
  { name: "Blog", id: "blog" },
  { name: "More", id: "more" },
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
    <header className="h-16 fixed top-0 left-0 right-0 z-30 flex items-center justify-center">
      <nav className="fixed z-20 top-5 w-full flex items-center justify-center px-4">
        {/* DESKTOP MENU */}
        <ul
          className="
            border border-white/10 bg-white/5 
            px-1.5 py-1 rounded-full backdrop-blur-md 
            hidden md:flex items-center justify-center space-x-5
          "
        >
          {navItems.map((item) => (
            <li
              key={item.name}
              onClick={() => {
                setActiveItem(item.name);
                scrollToSection(item.id);
              }}
              className={`
                cursor-pointer inline-block px-4 py-1.5 text-base font-semibold
                relative rounded-full transition-[text-shadow,color] duration-200
                focus-visible:ring-4 focus-visible:outline-1 
                text-white/70 hover:text-white/85
                ${activeItem === item.name ? "text-white" : ""}
              `}
              style={{ opacity: 1 }}
            >
              <a>{item.name}</a>

              {/* ACTIVE GLOW BACKPLATE */}
              {activeItem === item.name && (
                <div
                  className="absolute inset-0 -z-10 w-full rounded-full"
                  style={{ opacity: 1, background: "rgba(124, 58, 237, 0.15)" }} // violet glow
                >
                  {/* TOP GLOW STRIP */}
                  <div
                    className="absolute -top-[9px] left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full"
                    style={{ background: "#7c3aed", opacity: 1 }}
                  >
                    {/* 3 Glow Layers */}
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
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden fixed right-4 top-5 z-30 p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-white/70 hover:text-white transition-colors"
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
        </button>

        {/* MOBILE MENU DROPDOWN */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 mx-4 p-4 rounded-2xl bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 md:hidden flex flex-col items-center space-y-4 shadow-2xl animate-fadeIn">
            {navItems.map((item) => (
              <a
                key={item.name}
                onClick={() => {
                  setActiveItem(item.name);
                  scrollToSection(item.id);
                }}
                className={`
                  text-lg font-medium cursor-pointer transition-colors duration-200
                  ${activeItem === item.name ? "text-violet-400" : "text-gray-300 hover:text-white"}
                `}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
