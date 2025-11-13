// "use client";
// import { motion } from "framer-motion";


// const rectangleVeriants = {
//     initial: {
//         y: "-100%",
//         height: "100%",
//     },
//     animate: {
//         y: "0%",
//         height: "0%",
//     },
//     exit: {
//         y: ["0%", "-100%"],
//         height: ["0%", "100%"],
//     }
// }

// const Rectangle = () => {
//     return (
//         <>
//             <motion.div
//                 variants={rectangleVeriants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition={{
//                     delay: 0, duration: 0.6, ease: [0.63, 0, 0.17, 1]
//                 }}
//                 className="fixed top-full w-screen h-screen z-30 bg-[#1b162b]"
//             />

//             <motion.div
//                 variants={rectangleVeriants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition={{
//                     delay: 0.25, duration: 0.8, ease: [0.63, 0, 0.17, 1]
//                 }}
//                 className="fixed top-full w-screen h-screen z-30 bg-[#241e36]"
//             />

//             <motion.div
//                 variants={rectangleVeriants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition={{
//                     delay: 0.35, duration: 1, ease: [0.63, 0, 0.17, 1]
//                 }}
//                 className="fixed top-full w-screen h-screen z-30 bg-[#241e36]"
//             />

//             <motion.div
//                 variants={rectangleVeriants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition={{
//                     delay: 0.45, duration: 1, ease: [0.63, 0, 0.17, 1]
//                 }}
//                 className="fixed top-full w-screen h-screen z-30 bg-[#2e2743]"
//             />

//         </>
//     )
// }

// export default Rectangle;


// ============================================
// 1. Rectangle.jsx - Modern Sliding Panels
// ============================================
"use client";
import { motion } from "framer-motion";

const rectangleVariants = {
    initial: {
        y: "-100%",
        height: "100%",
    },
    animate: {
        y: "0%",
        height: "0%",
    },
    exit: {
        y: ["0%", "-100%"],
        height: ["0%", "100%"],
    }
}

const Rectangle = () => {
    return (
        <>
            {/* Panel 1 - Purple gradient */}
            <motion.div
                variants={rectangleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0, duration: 0.6, ease: [0.63, 0, 0.17, 1]
                }}
                className="fixed top-full w-screen h-screen z-30 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700"
            >
                {/* Animated dots pattern */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-white rounded-full animate-pulse delay-100"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-white rounded-full animate-pulse delay-200"></div>
                </div>
            </motion.div>

            {/* Panel 2 - Blue gradient */}
            <motion.div
                variants={rectangleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0.15, duration: 0.7, ease: [0.63, 0, 0.17, 1]
                }}
                className="fixed top-full w-screen h-screen z-30 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700"
            >
                {/* Grid pattern overlay */}
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />
            </motion.div>

            {/* Panel 3 - Cyan gradient with glow */}
            <motion.div
                variants={rectangleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0.3, duration: 0.8, ease: [0.63, 0, 0.17, 1]
                }}
                className="fixed top-full w-screen h-screen z-30 bg-gradient-to-br from-cyan-900 via-cyan-800 to-cyan-700 overflow-hidden"
            >
                {/* Glowing orb */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1.5, opacity: 0.3 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full blur-3xl"
                />
            </motion.div>

            {/* Panel 4 - Final dark panel with logo/text */}
            <motion.div
                variants={rectangleVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                    delay: 0.45, duration: 0.9, ease: [0.63, 0, 0.17, 1]
                }}
                className="fixed top-full w-screen h-screen z-30 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center overflow-hidden"
            >
                {/* Animated background lines */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    {[...Array(5)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                            className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
                            style={{ top: `${20 + i * 15}%` }}
                        />
                    ))}
                </motion.div>

                {/* Center loading indicator */}
                <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.4 }}
                    className="relative"
                >
                    {/* Spinning ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="w-24 h-24 rounded-full border-4 border-transparent border-t-purple-500 border-r-blue-500"
                    />
                    
                    {/* Inner pulse */}
                    <motion.div
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
                    />
                </motion.div>
            </motion.div>
        </>
    )
}

export default Rectangle;