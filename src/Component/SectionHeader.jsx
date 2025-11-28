import React from 'react';

const SectionHeader = ({ title, subtitle, bgText }) => {
  return (
    <div className="relative flex flex-col items-center justify-center py-16 bg-black text-white overflow-hidden">
   
      <h2 className="text-8xl md:text-[10rem] font-extrabold bg-gradient-to-r from-white/10 via-white/5 to-white/2 bg-clip-text text-transparent select-none tracking-tighter">
        {bgText || title.toUpperCase()} 
      </h2>

     
      <h3 className="absolute text-4xl mb-12 md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-gray-300 capitalize ">
        {title}
      </h3>

    
      <p className="relative text-lg text-gray-400 uppercase tracking-widest z-10">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionHeader;