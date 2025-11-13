"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import profile from "../../public/assets/ashen.png";
import { Briefcase, Code, Heart, Sparkles } from "lucide-react";

const About = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

    const skills = [
        { name: "React & Next.js", level: 95, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 90, color: "from-cyan-500 to-teal-500" },
        { name: "UI/UX Design", level: 85, color: "from-purple-500 to-pink-500" },
        { name: "Node.js", level: 88, color: "from-green-500 to-emerald-500" },
    ];

    const stats = [
        { icon: <Briefcase className="w-6 h-6 text-blue-400" />, label: "Years Experience", value: "5+" },
        { icon: <Code className="w-6 h-6 text-cyan-400" />, label: "Projects Completed", value: "50+" },
        { icon: <Heart className="w-6 h-6 text-pink-400" />, label: "Happy Clients", value: "30+" },
        { icon: <Sparkles className="w-6 h-6 text-yellow-400" />, label: "Awards Won", value: "15+" },
    ];

    const experience = [
        {
            year: "2023 - Present",
            role: "Senior Developer",
            company: "Tech Corp",
            description:
                "Leading frontend development and mentoring junior developers to build scalable solutions.",
        },
        {
            year: "2021 - 2023",
            role: "Full Stack Developer",
            company: "Digital Agency",
            description:
                "Built performant web platforms with React, Next.js, and Node.js for global clients.",
        },
        {
            year: "2019 - 2021",
            role: "Frontend Developer",
            company: "Startup Inc",
            description:
                "Transformed design concepts into modern interfaces and reusable components.",
        },
    ];

    return (
        <motion.section
            ref={sectionRef}
            id="about"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.25 }}
            className="min-h-screen flex flex-col justify-center relative overflow-visible py-16 sm:py-20"
        >
            {/* 🌀 Background Gradient Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.03, 0.06, 0.03],
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-1/3 -right-1/4 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                        opacity: [0.03, 0.05, 0.03],
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-1/3 -left-1/4 w-[500px] h-[500px] sm:w-[700px] sm:h-[700px] bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 rounded-full blur-3xl"
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* 🧠 Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="flex flex-col xl:flex-row flex-wrap items-center justify-between gap-12 mb-20 sm:mb-24"
                >
                    {/* Left – Image */}
                    <motion.div
                        initial={{ x: -40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="relative w-full max-w-[280px] sm:max-w-[360px] xl:max-w-[420px] rounded-3xl overflow-hidden border border-gray-800 shadow-lg shadow-purple-500/10 flex-shrink-0"
                    >
                        <Image
                            src={profile}
                            alt="Profile"
                            width={420}
                            height={420}
                            className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent"></div>
                    </motion.div>

                    {/* Right – Text */}
                    <motion.div
                        initial={{ x: 40, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: false, amount: 0.3 }}
                        className="max-w-2xl text-center xl:text-left space-y-6"
                    >
                        <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-sm text-purple-300 backdrop-blur-sm">
                            Get to Know Me
                        </span>
                        <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-tight bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                            I’m Ashen Himasha
                        </h1>
                        <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                            A creative full-stack developer passionate about blending
                            technology and design to build experiences that matter. I believe
                            in clean code, smooth UX, and beautiful visuals.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 sm:pt-6">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    viewport={{ once: false }}
                                    className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-lg hover:shadow-purple-500/10 transition-all"
                                >
                                    {stat.icon}
                                    <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
                                        {stat.value}
                                    </h3>
                                    <p className="text-xs text-gray-400">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* 💻 Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 sm:p-10 mb-16 sm:mb-20"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-center">
                        Skills & Expertise
                    </h2>
                    <div className="space-y-6 max-w-2xl mx-auto">
                        {skills.map((skill, index) => (
                            <motion.div key={index}>
                                <div className="flex justify-between mb-2">
                                    <span className="font-medium text-gray-300">
                                        {skill.name}
                                    </span>
                                    <span className="text-gray-500">{skill.level}%</span>
                                </div>
                                <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{
                                            duration: 0.6,
                                            delay: index * 0.1,
                                            ease: "easeOut",
                                        }}
                                        viewport={{ once: false, amount: 0.5 }}
                                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* 🕓 Experience Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="max-w-4xl mx-auto mb-16 sm:mb-20"
                >
                    <h2 className="text-2xl sm:text-3xl xl:text-4xl font-bold text-center mb-10 sm:mb-12 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        Experience Timeline
                    </h2>

                    <div className="relative border-l border-gray-800 ml-4">
                        {experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: false, amount: 0.3 }}
                                className="mb-10 ml-6 relative"
                            >
                                <span className="absolute -left-3 top-2 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 shadow-md shadow-purple-500/50"></span>
                                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-5 sm:p-6 hover:border-purple-500/40 hover:shadow-lg hover:shadow-purple-500/10 transition-all">
                                    <p className="text-sm text-purple-400 mb-1">{exp.year}</p>
                                    <h3 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h3>
                                    <p className="text-sm text-gray-400 mb-2">{exp.company}</p>
                                    <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* 🚀 CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-center"
                >
                    <div className="relative inline-block group">
                        <div className="absolute -inset-2 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all"></div>
                        <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 sm:p-12">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Let’s Build Something Great
                            </h2>
                            <p className="text-gray-400 mb-8 max-w-md mx-auto">
                                Have an idea? Let’s collaborate and create something impactful together.
                            </p>
                            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50">
                                <span className="relative z-10 text-sm sm:text-base">Start a Project</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;
