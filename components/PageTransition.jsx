// "use client"

// import { AnimatePresence, motion } from 'framer-motion'
// import { usePathname } from 'next/navigation'

// const PageTransition = ({ children }) => {
//     const pathname = usePathname();
//     return (
//         <AnimatePresence>
//             <div key={pathname}>
//                 <motion.div initial={{opacity:1}} animate={{opacity:0, transition: {delay: 1 , duration: 0.4, ease:"easeInOut"},}}
//                 className='min-h-screen w-screen fixed top-0 pointer-events-none'
//                 />
//                 {children}
//             </div>
//         </AnimatePresence>

//     )
// }

// export default PageTransition


// "use client";
// import { AnimatePresence, motion } from 'framer-motion';
// import { usePathname } from 'next/navigation';

// const PageTransition = ({ children }) => {
//     const pathname = usePathname();
    
//     return (
//         <AnimatePresence mode="wait">
//             <div key={pathname}>
//                 {/* Curtain effect overlay */}
//                 <motion.div 
//                     initial={{ opacity: 1 }} 
//                     animate={{ 
//                         opacity: 0, 
//                         transition: { 
//                             delay: 1.2, 
//                             duration: 0.5, 
//                             ease: "easeInOut" 
//                         }
//                     }}
//                     className='min-h-screen w-screen fixed top-0 pointer-events-none z-40 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950'
//                 >
//                     {/* Radial gradient effect */}
//                     <motion.div
//                         initial={{ scale: 0, opacity: 0 }}
//                         animate={{ scale: 2, opacity: 0.3 }}
//                         transition={{ delay: 0.8, duration: 0.6 }}
//                         className="absolute inset-0 flex items-center justify-center"
//                     >
//                         <div className="w-[800px] h-[800px] bg-gradient-to-r from-purple-600/30 via-blue-600/30 to-cyan-600/30 rounded-full blur-3xl" />
//                     </motion.div>

//                     {/* Scanning line effect */}
//                     <motion.div
//                         initial={{ top: "0%" }}
//                         animate={{ top: "100%" }}
//                         transition={{ delay: 0.5, duration: 1, ease: "linear" }}
//                         className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_rgba(34,211,238,0.5)]"
//                     />
//                 </motion.div>

//                 {/* Content with stagger animation */}
//                 <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ 
//                         opacity: 1, 
//                         y: 0,
//                         transition: {
//                             delay: 1.4,
//                             duration: 0.5,
//                             ease: "easeOut"
//                         }
//                     }}
//                 >
//                     {children}
//                 </motion.div>
//             </div>
//         </AnimatePresence>
//     )
// }

// export default PageTransition;



"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{
          duration: 0.4,
          ease: [0.43, 0.13, 0.23, 0.96], // smooth cubic easing
        }}
        className="min-h-screen w-full"
      >
        {children}
      </motion.div>

      {/* Optional soft overlay flash */}
      <motion.div
        key={`${pathname}-overlay`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="fixed inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-transparent pointer-events-none"
      />
    </AnimatePresence>
  );
};

export default PageTransition;
