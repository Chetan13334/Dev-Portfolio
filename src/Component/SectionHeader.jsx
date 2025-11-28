import React from 'react';

const SectionHeader = ({ title, subtitle, bgText }) => {
  return (
    <div className="relative flex flex-col items-center justify-center py-16 bg-black text-white overflow-hidden">
      {/* Large, semi-transparent background text */}
      <h2 className="text-8xl md:text-[10rem] font-extrabold bg-gradient-to-r from-white/10 via-white/5 to-white/2 bg-clip-text text-transparent select-none tracking-tighter">
        {bgText || title.toUpperCase()} {/* Use bgText prop or uppercase title */}
      </h2>

      {/* Main visible title */}
      <h3 className="absolute text-4xl mb-12 md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-gray-300 capitalize ">
        {title}
      </h3>

      {/* Decorative line with a glowing dot */}
      {/* <div className="relative flex items-center justify-center w-32 mb-8 z-10">
        <div className="flex-grow h-0.5 bg-gray-700"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50 mx-2"></div>
        <div className="flex-grow h-0.5 bg-gray-700"></div>
      </div> */}

      {/* Subtitle/Call to action */}
      <p className="relative text-lg text-gray-400 uppercase tracking-widest z-10">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;