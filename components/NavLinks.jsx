"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "home", path: "#home" },
  { name: "about", path: "#about" },
  { name: "services", path: "#services" },
  { name: "work", path: "#work" },
  { name: "contact", path: "#contact" },
];

const NavLinks = ({ containerStyles }) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const timeout = setTimeout(() => {
      const sections = document.querySelectorAll("section");
      if (!sections.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          // find the most visible section
          let mostVisible = entries.reduce(
            (max, entry) =>
              entry.intersectionRatio > max.intersectionRatio ? entry : max,
            entries[0]
          );
          if (mostVisible && mostVisible.isIntersecting) {
            setActiveSection(mostVisible.target.id);
          }
        },
        {
          root: null,
          threshold: [0.3, 0.5, 0.7],
          rootMargin: "-10% 0px -50% 0px",
        }
      );

      sections.forEach((section) => observer.observe(section));

      return () => {
        sections.forEach((section) => observer.unobserve(section));
        observer.disconnect();
      };
    }, 800); // wait for Framer Motion load

    return () => clearTimeout(timeout);
  }, []);

  // ✅ Smooth scroll + instant highlight
  const handleScroll = (e, path, name) => {
    e.preventDefault();
    const section = document.querySelector(path);
    if (!section) return;

    setActiveSection(name);
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <ul className={containerStyles}>
      {links.map((link, index) => {
        const isActive = activeSection === link.name;

        return (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <a
              href={link.path}
              onClick={(e) => handleScroll(e, link.path, link.name)}
              className="group relative block cursor-pointer"
            >
              <span
                className={`relative text-base font-medium uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text"
                    : "text-gray-400 group-hover:text-white"
                }`}
              >
                {link.name}
              </span>

              {/* underline animation */}
              <motion.span
                className={`absolute -bottom-1 left-0 h-[2px] rounded-full ${
                  isActive
                    ? "bg-gradient-to-r from-purple-500 to-blue-500"
                    : "bg-gray-600"
                }`}
                initial={{ width: 0 }}
                animate={{ width: isActive ? "100%" : 0 }}
                whileHover={{
                  width: "100%",
                  background:
                    "linear-gradient(to right, rgb(168,85,247), rgb(59,130,246))",
                }}
                transition={{ duration: 0.3 }}
              />

              {isActive && (
                <motion.span
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 to-blue-500 blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              )}
            </a>
          </motion.li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
