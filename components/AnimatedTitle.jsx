"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const titles = [
  "Creative Developer",
  "Software Engineer",
  "Full Stack Developer"
];

export default function AnimatedTitle() {
  const [index, setIndex] = useState(0);
  const words = titles[index].split(" ");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % titles.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col w-full">
      {/* Animated title */}
      <AnimatePresence mode="wait">
        <motion.div
          key={titles[index]}
          initial={{ opacity: 0, rotateX: -15 }}
          animate={{ opacity: 1, rotateX: 0 }}
          exit={{ opacity: 0, rotateX: 15 }}
          transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
          className="inline-block"
        >
          <h1 className="text-4xl sm:text-5xl xl:text-7xl font-black leading-tight">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  delay: i * 0.12,
                  duration: 0.5,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="inline-block mr-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400"
                style={{
                  backgroundSize: "200% 200%",
                  animation: `gradient-shift ${3 + i}s ease infinite`,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
        </motion.div>
      </AnimatePresence>

      {/* Animated underline accent */}
      {/* <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        className="mt-4 h-1 w-24 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mx-auto"
      /> */}

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
}
