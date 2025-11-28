import React from "react";

const AnimatedHeading = ({ text, gradientIndex = null }) => {
  return (
    <h1 className="mt-3 text-5xl md:text-[5.5rem] font-bold text-white flex flex-wrap justify-center">
      {text.split("").map((char, idx) => {
        const isGradient = gradientIndex === idx;

        return (
          <span
            key={idx}
            className="inline-block opacity-0 animate-fadeInUp"
            style={{
              animationDelay: `${idx * 0.1}s`,
              color: isGradient ? "transparent" : undefined,
              background: isGradient
                ? "linear-gradient(to right, #007BFF, #FF0080)"
                : undefined,
              backgroundClip: isGradient ? "text" : undefined,
              WebkitBackgroundClip: isGradient ? "text" : undefined,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </h1>
  );
};

export default AnimatedHeading;
