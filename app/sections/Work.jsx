"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

import project1 from "../../public/assets/Screenshot 2025-10-16 124950.png";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.25 });

  const filters = ["all", "web", "mobile", "design", "backend"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "web",
      description: "Modern online store with seamless checkout experience.",
      image: project1,
      technologies: ["Next.js", "Stripe", "Tailwind"],
      gradient: "from-purple-500 to-blue-500",
      link: "#",
    },
    {
      id: 2,
      title: "Fitness Mobile App",
      category: "mobile",
      description: "Track workouts and nutrition with AI recommendations.",
      image: project1,
      technologies: ["React Native", "Firebase", "TensorFlow"],
      gradient: "from-blue-500 to-cyan-500",
      link: "#",
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "design",
      description: "Complete branding package for a modern tech startup.",
      image: project1,
      technologies: ["Figma", "Illustrator", "Photoshop"],
      gradient: "from-cyan-500 to-teal-500",
      link: "#",
    },
    {
      id: 4,
      title: "Real Estate Dashboard",
      category: "web",
      description: "Property management system with real-time analytics.",
      image: project1,
      technologies: ["React", "Node.js", "MongoDB"],
      gradient: "from-teal-500 to-emerald-500",
      link: "#",
    },
    {
      id: 5,
      title: "Banking API System",
      category: "backend",
      description: "Secure microservices architecture for fintech.",
      image: project1,
      technologies: ["Node.js", "PostgreSQL", "Docker"],
      gradient: "from-emerald-500 to-green-500",
      link: "#",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="work"
      ref={sectionRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="min-h-screen py-15 relative overflow-hidden "
    >
      {/* 🌀 Background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1],
            rotate: [360, 180, 0],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 xl:px-8">
        {/* 🪶 Header */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm text-sm font-medium text-purple-300 mb-4">
            My Works
          </span>
          <h1 className="text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Recent Work
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore my recent projects built with modern technology and design.
          </p>
        </motion.div>

        {/* 🧭 Filters */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className={`px-6 py-2 rounded-full font-medium capitalize transition-all ${
                activeFilter === filter
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg shadow-purple-500/30"
                  : "bg-gray-800/50 text-gray-400 border border-gray-700 hover:text-white hover:border-gray-600"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* 🧊 Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                exit={{ opacity: 0, scale: 0.9 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="relative group cursor-pointer"
              >
                {/* Glow overlay */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-all duration-500`}
                ></div>

                {/* Card */}
                <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/40 transition-all">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-700"
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                      }}
                      className="absolute inset-0 bg-black/60 flex items-center justify-center"
                    >
                      <motion.div
                        animate={{
                          scale: hoveredProject === project.id ? 1 : 0.8,
                          opacity: hoveredProject === project.id ? 1 : 0,
                        }}
                        className={`w-16 h-16 rounded-full bg-gradient-to-r ${project.gradient} flex items-center justify-center`}
                      >
                        <span className="text-white text-2xl">→</span>
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 text-xs font-medium rounded-full bg-gray-800 text-gray-400 border border-gray-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ✨ CTA Section */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mt-20"
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Like What You See?
              </h2>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Let's collaborate and create something amazing together.
              </p>
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/40">
                Start a Project
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
