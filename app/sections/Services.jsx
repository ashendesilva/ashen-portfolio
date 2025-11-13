"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code,
  Brush,
  Globe,
  Smartphone,
  Rocket,
  Database,
} from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Building fast, responsive, and SEO-friendly websites using Next.js, React, and Tailwind CSS.",
    icon: <Globe className="w-10 h-10 text-blue-400" />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating visually appealing and user-centered designs that deliver seamless digital experiences.",
    icon: <Brush className="w-10 h-10 text-purple-400" />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Mobile App Development",
    description:
      "Developing smooth, performant mobile apps using React Native and modern native frameworks.",
    icon: <Smartphone className="w-10 h-10 text-emerald-400" />,
    color: "from-emerald-500 to-green-400",
  },
  {
    title: "Backend Solutions",
    description:
      "Crafting scalable server-side solutions with Node.js, Java, and robust database architecture.",
    icon: <Database className="w-10 h-10 text-cyan-400" />,
    color: "from-cyan-500 to-blue-400",
  },
  {
    title: "Performance Optimization",
    description:
      "Improving load speeds, accessibility, and smoothness to create pixel-perfect performance.",
    icon: <Rocket className="w-10 h-10 text-orange-400" />,
    color: "from-orange-500 to-yellow-400",
  },
  {
    title: "Custom Integrations",
    description:
      "Integrating APIs, third-party tools, and automation workflows to make your systems smarter.",
    icon: <Code className="w-10 h-10 text-pink-400" />,
    color: "from-pink-500 to-purple-400",
  },
];

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section
      id="services"
      ref={sectionRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="min-h-screen flex flex-col justify-center relative overflow-hidden py-15"
    >
      {/* 🌀 Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/3 -left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/3 -right-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* 🪶 Header */}
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mb-16 relative z-10"
      >
        <div className="inline-block mb-4">
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm text-sm font-medium text-purple-300 mb-3">
            What I Offer
          </span>
        </div>

        <h1 className="text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
          My Services
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Providing end-to-end digital solutions with creativity, performance,
          and precision.
        </p>
      </motion.div>

      {/* 💼 Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 xl:px-8 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="relative group bg-gray-900/50 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-500/40 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
          >
            <div
              className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
            ></div>

            <div className="relative z-10 flex flex-col items-start gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/60 border border-gray-700">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>

              <button className="mt-4 text-sm font-semibold text-accent hover:text-white transition-all">
                Learn More →
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🚀 CTA Section */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="text-center mt-20 relative z-10"
      >
        <div className="relative inline-block group">
          <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
          <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-10">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let’s Build Something Amazing
            </h2>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              Whether it’s a modern website, mobile app, or full-stack platform
              — I can help bring your idea to life.
            </p>
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
              <span className="relative z-10">Get a Quote</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Floating Decorations */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-20 w-32 h-32 border border-purple-500/20 rounded-3xl rotate-12 hidden xl:block"
      />
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -10, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-24 h-24 border border-blue-500/20 rounded-full hidden xl:block"
      />
    </section>
  );
};

export default Services;
