"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "home", path: "#home" },
  { name: "about", path: "#about" },
  { name: "services", path: "#services" },
  { name: "work", path: "#work" },
  { name: "contact", path: "#contact" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // 🧠 Scroll Lock when menu open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // 🧭 Intersection Observer to detect active section
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.reduce(
          (max, entry) =>
            entry.intersectionRatio > max.intersectionRatio ? entry : max,
          entries[0]
        );
        if (visible && visible.isIntersecting) {
          setActiveSection(visible.target.id);
        }
      },
      { threshold: [0.3, 0.6, 0.9], rootMargin: "-10% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // 🎯 Smooth scroll behavior
  const handleScroll = (e, path, name) => {
    e.preventDefault();
    const section = document.querySelector(path);
    if (!section) return;
    setActiveSection(name);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-950/70 backdrop-blur-md border-b border-gray-800 z-50 px-6 py-4 flex items-center justify-between 2xl:hidden">
      {/* 🌀 Logo */}
      <a
        href="#home"
        className="font-bold text-xl text-white tracking-wide"
        onClick={(e) => handleScroll(e, "#home", "home")}
      >
        ASHEN<span className="text-accent">DEV</span>
      </a>

      {/* 🍔 Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="text-white focus:outline-none z-50"
        aria-label="Toggle Menu"
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* 🧊 Overlay Background */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* 📱 Animated Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-full left-0 w-full bg-gray-900/90 backdrop-blur-xl border-t border-gray-800 shadow-lg z-50"
          >
            <ul className="flex flex-col items-center py-6 space-y-6">
              {links.map((link, index) => {
                const isActive = activeSection === link.name;
                return (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <a
                      href={link.path}
                      onClick={(e) => handleScroll(e, link.path, link.name)}
                      className={`uppercase text-lg font-medium tracking-wide relative transition-all duration-300 ${
                        isActive
                          ? "text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.name}
                      {isActive && (
                        <motion.span
                          layoutId="underline"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        />
                      )}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
