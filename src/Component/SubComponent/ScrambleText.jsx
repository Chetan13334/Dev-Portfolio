import React, { useState, useEffect, useCallback } from "react";

const ScrambleText = ({ text, className }) => {
    const [displayText, setDisplayText] = useState(text);

    const chars = "!<>-_\\/[]{}—=+*^?#________";

    const scramble = useCallback(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplayText(
                text
                    .split("")
                    .map((char, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return chars[Math.floor(Math.random() * chars.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);
    }, [text, chars]);

    useEffect(() => {
        const timer = setTimeout(() => {
            scramble();
        }, 500);

        return () => {
            clearTimeout(timer);
        };
    }, [scramble]);

    return <span className={className}>{displayText}</span>;
};

export default ScrambleText;
