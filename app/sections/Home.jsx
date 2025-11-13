"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Blob from "../../components/Blob";
import AnimatedTitle from "../../components/AnimatedTitle";
import Image from "next/image";
import avataImg from "../../public/assets/ashen.png";

const Home = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.25 });

  return (
    <motion.section
      id="home"
      ref={sectionRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.25 }}
      className=" flex  relative overflow-hidden py-15"
    >
      {/* 🌀 Background Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.03, 0.05, 0.03],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl"
        />
      </div>

      <div className=" mx-auto px-4 xl:px-8">
        <div className="flex flex-col xl:flex-row items-center justify-between w-full gap-8 xl:gap-12">
          {/* 🧠 Text Section */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full xl:w-[550px] space-y-6 text-center xl:text-left"
          >
            {/* 👋 Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-sm font-medium text-purple-300">
                Available for work
              </span>
            </motion.div>

            {/* 🏷 Heading */}
            {/* 🏷 Heading */}
            <div className="">
              <AnimatedTitle />
            </div>






            {/* 🧾 Description */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
              className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-md mx-auto xl:mx-0"
            >
              Crafting exceptional digital experiences with modern technologies
              and innovative solutions.
            </motion.p>

            {/* 🎯 Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4 justify-center xl:justify-start"
            >
              <button
                onClick={() => {
                  document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 text-sm sm:text-base"
              >
                <span className="relative z-10">View Projects</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </button>


              {/* <button
                onClick={() => {
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group px-6 sm:px-8 py-3 sm:py-4 border border-purple-500/30 rounded-full font-semibold hover:border-purple-500/60 transition-all hover:bg-purple-500/5 backdrop-blur-sm text-sm sm:text-base"
              >
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-blue-300 transition-all">
                  Get in Touch
                </span>
              </button> */}
              <a
                href="/cv.pdf"
                download="Ashen-De-Silva-CV.pdf"
                className="
                  group inline-block
                  px-6 sm:px-8 py-3 sm:py-4
                  rounded-full
                  border border-purple-500/30
                  backdrop-blur-sm
                  font-semibold
                  text-sm sm:text-base
                  transition-all
                  hover:border-purple-500/60
                  hover:bg-purple-500/5
                "
              >
                <span
                  className="
                    bg-gradient-to-r from-purple-400 to-blue-400
                    bg-clip-text text-transparent
                    transition-all
                    group-hover:from-purple-300 group-hover:to-blue-300
                  "
                >
                  Download CV
                </span>
              </a>
            </motion.div>

            {/* 📊 Stats */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: false, amount: 0.3 }}
              className="hidden sm:flex gap-4 sm:gap-8 pt-8 border-t border-gray-800 justify-center xl:justify-start"
            >
              {[
                { label: "Years Experience", value: "3+", gradient: "from-purple-400 to-blue-400" },
                { label: "Projects Completed", value: "50+", gradient: "from-blue-400 to-cyan-400" },
                { label: "Happy Clients", value: "10+", gradient: "from-cyan-400 to-emerald-400" },
              ].map((stat, index) => (
                <div key={index}>
                  <div
                    className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>


          {/* 🧍 Avatar + Blob */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full xl:flex-1 relative z-20 flex justify-center items-center mt-10 sm:mt-16 xl:mt-0"
          >
            <div className="relative w-full max-w-[300px] sm:max-w-[380px] md:max-w-[420px] xl:max-w-[560px]">
              {/* 🌈 Blob Background */}
              <div className="absolute inset-0 flex justify-center items-center">
                <Blob
                  containerStyles="
                    w-[220px] h-[220px]
                    sm:w-[300px] sm:h-[300px]
                    md:w-[360px] md:h-[360px]
                    xl:w-[520px] xl:h-[520px]
                    transition-all duration-500
                  "
                />
              </div>

              {/* 👤 Avatar Image */}
              <motion.div
                // animate={{ y: [0, -15, 0] }}
                // transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" , delay:0.6 }}
                className="relative flex justify-center items-center"
              >
                <Image
                  src={avataImg}
                  alt="Profile"
                  width={440}
                  height={600}
                  quality={100}
                  priority
                  className="relative z-20 w-[180px] sm:w-[240px] md:w-[300px] lg:w-[360px] xl:w-[440px] h-auto drop-shadow-2xl object-contain transition-all duration-500"
                />
              </motion.div>
              {/* ✨ Bottom Gradient Shadow */}
              <div className="absolute -bottom-4 left-0 right-0 h-[120px] sm:h-[160px] xl:h-[200px] bg-gradient-to-t from-primary via-primary/95 to-transparent"></div>
              <div className="absolute -bottom-5 left-[15%] right-[15%] xl:left-[100px] xl:right-[100px] h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* ✨ Floating Borders */}
      {/* <motion.div
        animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-32 h-32 border border-purple-500/20 rounded-3xl rotate-12 hidden xl:block"
      />
      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-20 right-20 w-24 h-24 border border-blue-500/20 rounded-full hidden xl:block"
      /> */}
    </motion.section>
  );
};

export default Home;
