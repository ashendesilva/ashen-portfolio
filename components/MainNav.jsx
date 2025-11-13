"use client";

import React from "react";
import NavLinks from "./NavLinks";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const MainNav = () => {
  return (
    <nav
      className="
        relative flex h-18 w-full items-center justify-between
        px-4 sm:px-6 lg:px-8
        
        
        overflow-hidden
      "
      aria-label="Main navigation"
    >
      {/* 🔮 Subtle animated glow */}
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.15, 0.08],
          rotate: [0, 35, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-purple-700/20 via-blue-700/20 to-transparent blur-3xl"
      />

      {/* 💠 Brand (left) */}
      <a
        href="#home"
        className="relative group flex items-center gap-2 shrink-0"
        aria-label="Go to home"
      >
        <div className="flex items-center gap-2">
          <Sparkles className="text-accent w-6 h-6" />
          <h1 className="text-2xl font-bold text-white tracking-widest">
            ASHEN<span className="text-accent">DEV</span>
          </h1>
        </div>
      </a>

      {/* 🌈 Links (center) */}
      <div className="hidden md:flex items-center justify-center flex-1">
        <NavLinks
          orientation="horizontal"
          containerStyles="flex items-center gap-8"
          linkClassName="
            text-sm font-semibold tracking-wider uppercase relative
            text-gray-300 hover:text-white transition
            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0
            after:h-[2px] after:bg-gradient-to-r after:from-purple-400 after:to-blue-400
            hover:after:w-full after:transition-all after:duration-300
          "
        />
      </div>

      {/* 🎯 Actions (right) */}
      <div className="ml-auto flex items-center gap-2 sm:gap-3">
        <a
          href="#contact"
          className="
            inline-flex rounded-xl bg-gradient-to-r from-purple-500 to-blue-500
            text-white px-3 py-1.5 text-xs sm:text-sm font-semibold
            hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30
            transition-transform duration-300
          "
        >
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default MainNav;
