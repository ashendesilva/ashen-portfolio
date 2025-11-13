"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.25 });

  return (
    <motion.section
      id="contact"
      ref={sectionRef}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden py-15"
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
          <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 backdrop-blur-sm text-sm font-medium text-purple-300">
            Let’s Connect
          </span>
        </div>
        <h1 className="text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
          Contact Me
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Have a project in mind or just want to say hi? Let’s build something awesome together.
        </p>
      </motion.div>

      {/* 💌 Contact Info + Form */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 w-full max-w-6xl px-6 relative z-10">
        {/* 📞 Contact Info */}
        <div className="space-y-8">
          {[
            {
              icon: <Mail className="w-6 h-6 text-purple-400" />,
              title: "Email",
              text: "ashendev@example.com",
            },
            {
              icon: <Phone className="w-6 h-6 text-blue-400" />,
              title: "Phone",
              text: "+94 71 123 4567",
            },
            {
              icon: <MapPin className="w-6 h-6 text-cyan-400" />,
              title: "Location",
              text: "Colombo, Sri Lanka",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="flex items-start gap-4"
            >
              <div className="p-3 rounded-lg bg-gradient-to-br from-gray-800/60 to-gray-900/40 border border-gray-700">
                {item.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-gray-400">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🧾 Contact Form */}
        <motion.form
          initial={{ x: 40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-20"></div>

          <div className="relative z-10 space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 text-gray-200 placeholder-gray-500 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-gray-200 placeholder-gray-500 outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <textarea
                placeholder="Write your message..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 text-gray-200 placeholder-gray-500 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-2 flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-semibold text-white shadow-lg hover:shadow-purple-500/30 transition-all"
            >
              <Send size={18} />
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>

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
    </motion.section>
  );
};

export default Contact;
