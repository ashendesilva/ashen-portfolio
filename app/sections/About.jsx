
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Briefcase, Code, Heart, Sparkles } from "lucide-react";
import profile from "../../public/assets/ashen.png";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const stats = [
    { icon: <Briefcase className="w-6 h-6 text-blue-400" />, label: "Years Experience", value: "5+" },
    { icon: <Code className="w-6 h-6 text-cyan-400" />, label: "Projects Completed", value: "50+" },
    { icon: <Heart className="w-6 h-6 text-pink-400" />, label: "Happy Clients", value: "30+" },
    { icon: <Sparkles className="w-6 h-6 text-yellow-400" />, label: "Awards Won", value: "15+" },
  ];

  // 🧠 Skill levels (visual + textual)
  const skills = [
    { name: "Node.js", icon: "/icons/nodejs1.png" },
    { name: "React.js", icon: "/icons/react.png" },
    { name: "HTML", icon: "/icons/html.png" },
    { name: "CSS", icon: "/icons/css.png" },
    { name: "Java Script", icon: "/icons/js.png" },
    { name: "Tailwind CSS", icon: "/icons/tailwind.png" },
    { name: "Boostrap", icon: "/icons/boostrap.png" },
    { name: "Next Js", icon: "/icons/nextjs.png" },
    { name: "React Native", icon: "/icons/react.png" },
    { name: "Spring Boot", icon: "/icons/springboot.png" },
    { name: "MySQL", icon: "/icons/mysql.png" },
    { name: "JAVA", icon: "/icons/java.png" },
    // { name: "Express", icon: "/icons/express.png" },


  ];




  return (
    <section
      id="about"
      ref={sectionRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="relative flex flex-col justify-center min-h-screen border-b border-white/5 overflow-hidden "
    >
      {/* 🌀 Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0], opacity: [0.03, 0.05, 0.03] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* ✨ Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-sm font-medium text-purple-300 mb-5">
            Get to Know Me
          </span>
          <h1 className="text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            I’m Ashen Himasha
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A creative full-stack developer blending technology and design to craft engaging experiences.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Image */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="relative w-full max-w-sm rounded-3xl overflow-hidden border border-gray-800 shadow-lg shadow-purple-500/10"
          >
            <Image src={profile} alt="Profile" className="object-cover w-full h-auto" />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent" />
          </motion.div>

          {/* Text + Stats */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex-1 max-w-2xl space-y-8 text-center lg:text-left"
          >
            <p className="text-gray-400 text-lg leading-relaxed">
              I’m a full-stack developer who loves turning ideas into real, functional products.
              Whether I’m crafting smooth, intuitive user interfaces or architecting efficient
              and secure backend systems, I enjoy every part of the development process. I work
              with modern tools and technologies to build applications that are optimized, responsive,
              and scalable, ensuring a seamless experience from end to end.

              <br /><br />
              Coding isn’t just my profession it’s something I genuinely enjoy.
              I’m constantly exploring new technologies, improving my skills, and
              pushing myself to create better, smarter solutions. Every project is
              an opportunity to learn, innovate, and build something meaningful that makes a real impact.
            </p>

          </motion.div>
        </div>

        {/* Skills */}
        {/* Skills Modern Design */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-20 relative"
        >
          {/* Gradient background blur */}
          <div className="absolute inset-0 bg-gradient-to-br rounded-3xl blur-3xl" />

          <div className="relative border-white/10 rounded-3xl p-10 backdrop-blur-xl">
            <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Technologies And Frameworks
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {skills.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group relative p-5 bg-white/5 border border-white/10 rounded-2xl 
               transition-all duration-300 overflow-hidden cursor-default"
                >
                  {/* Hover background → white */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white transition-all duration-300" />

                  <div className="relative z-10 flex flex-col items-center gap-3">
                    {/* Icon (no invert/brightness now) */}
                    <div className="w-12 h-12 flex items-center justify-center">
                      <Image
                        src={s.icon}
                        alt={s.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 object-contain transition-all duration-300"
                      />
                    </div>

                    {/* Skill name → black on hover */}
                    <h3
                      className="
          text-sm font-medium text-white text-center 
          group-hover:text-black transition-all duration-300
        "
                    >
                      {s.name}
                    </h3>
                  </div>
                </motion.div>
              ))}

            </div>
          </div>
        </motion.div>



        {/* CTA Divider */}
        {/* <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mt-20"
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative bg-gray-900/50 border border-gray-800 rounded-3xl p-12 backdrop-blur-sm">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Like What You See?
              </h2>
              <p className="text-gray-400 mb-8 max-w-md mx-auto">
                Let’s collaborate and create something amazing together.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-semibold text-white hover:scale-105 transition-all">
                Start a Project
              </button>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};

export default About;
