import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function GlitchText({ text, className }: { text: string, className?: string }) {
  const [glitchText, setGlitchText] = useState(text);

  useEffect(() => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let interval: NodeJS.Timeout;

    const scramble = () => {
      let iteration = 0;
      clearInterval(interval);
      
      interval = setInterval(() => {
        setGlitchText(
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
    };

    // Glitch occasionally
    const randomGlitch = setInterval(() => {
      if (Math.random() > 0.9) scramble();
    }, 5000);

    return () => {
      clearInterval(interval);
      clearInterval(randomGlitch);
    };
  }, [text]);

  return (
    <span className={className} data-text={text}>
      {glitchText}
    </span>
  );
}
