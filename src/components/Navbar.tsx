// // src/components/Navbar.tsx
// import React, { useEffect, useState } from "react";
// import clsx from "clsx";
// import { motion, AnimatePresence, easeOut } from "framer-motion";

// const Navbar: React.FC = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     onScroll();
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const dropdownVariants = {
//     hidden: { opacity: 0, y: -10 },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       transition: { duration: 0.3, ease: easeOut } 
//     },
//     exit: { 
//       opacity: 0, 
//       y: -10, 
//       transition: { duration: 0.2, ease: easeOut } 
//     },
//   };

//   return (
//     <header
//       className={clsx(
//         "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
//         "backdrop-blur-sm",
//         scrolled ? "bg-white shadow" : "bg-transparent"
//       )}
//       style={{
//         WebkitBackdropFilter: "blur(8px)",
//         backdropFilter: "blur(8px)",
//       }}
//     >
//       <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
//         {/* Logo */}
//         <a
//           href="#home"
//           className={clsx(
//             "font-extrabold text-2xl tracking-wide transition-colors duration-300",
//             scrolled ? "text-blue-700" : "text-black"
//           )}
//           style={{ fontFamily: "Poppins, sans-serif" }}
//         >
//           Cybershields<span className="text-orange-500">.</span>
//         </a>

//         {/* Nav Links */}
//         <nav
//           className={clsx(
//             "hidden md:flex items-center gap-8 text-base font-semibold tracking-wide relative transition-colors duration-300",
//             scrolled ? "text-blue-700" : "text-black"
//           )}
//           style={{ fontFamily: "Poppins, sans-serif" }}
//         >
//           <a href="#home" className="hover:text-orange-500 transition">
//             Home
//           </a>
//           <a href="#about" className="hover:text-orange-500 transition">
//             About
//           </a>

//           {/* Services Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setActiveDropdown("services")}
//             onMouseLeave={() => setActiveDropdown(null)}
//           >
//             <button className="hover:text-orange-500 transition">
//               Services ▾
//             </button>
//             <AnimatePresence>
//               {activeDropdown === "services" && (
//                 <motion.div
//                   variants={dropdownVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   className="absolute top-full mt-2 w-52 text-white rounded-lg shadow-lg py-2 overflow-hidden"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, #ff7e5f 0%, #0072ff 100%)",
//                   }}
//                 >
//                   <a
//                     href="#services"
//                     className="block px-4 py-2 hover:bg-white/20 transition"
//                   >
//                     Web Development
//                   </a>
//                   <a
//                     href="#services"
//                     className="block px-4 py-2 hover:bg-white/20 transition"
//                   >
//                     Mobile Apps
//                   </a>
//                   <a
//                     href="#services"
//                     className="block px-4 py-2 hover:bg-white/20 transition"
//                   >
//                     Cloud Solutions
//                   </a>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* Work Dropdown */}
//           <div
//             className="relative"
//             onMouseEnter={() => setActiveDropdown("work")}
//             onMouseLeave={() => setActiveDropdown(null)}
//           >
//             <button className="hover:text-orange-500 transition">Work ▾</button>
//             <AnimatePresence>
//               {activeDropdown === "work" && (
//                 <motion.div
//                   variants={dropdownVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   className="absolute top-full mt-2 w-52 text-white rounded-lg shadow-lg py-2 overflow-hidden"
//                   style={{
//                     background:
//                       "linear-gradient(135deg, #ff7e5f 0%, #0072ff 100%)",
//                   }}
//                 >
//                   <a
//                     href="#portfolio"
//                     className="block px-4 py-2 hover:bg-white/20 transition"
//                   >
//                     Case Studies
//                   </a>
//                   <a
//                     href="#portfolio"
//                     className="block px-4 py-2 hover:bg-white/20 transition"
//                   >
//                     Client Projects
//                   </a>
//                   <a
//                     href="#portfolio"
//                     className="block px-4 py-2 hover:bg-white/20 transition"
//                   >
//                     Research
//                   </a>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           <a href="#pricing" className="hover:text-orange-500 transition">
//             Pricing
//           </a>
//           <a href="#clients" className="hover:text-orange-500 transition">
//             Clients
//           </a>
//           <a href="#contact" className="hover:text-orange-500 transition">
//             Contact
//           </a>
//         </nav>

//         {/* CTA & Mobile Menu */}
//         <div className="flex items-center gap-3">
//           <a
//             href="#contact"
//             className="rounded-full bg-blue-600 hover:opacity-90 transition text-white px-5 py-2 text-sm font-semibold"
//           >
//             Get Started
//           </a>
//           <button
//             className={clsx(
//               "md:hidden p-2 rounded-md border transition-colors",
//               scrolled ? "bg-blue-950 border-blue-700 text-br-700" : "border-black text-black"
//             )}
//           >
//             ☰
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Navbar;



// src/components/Navbar.tsx
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import clsx from "clsx";

const dropdownVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: easeOut },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2, ease: easeOut },
  },
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all backdrop-blur-sm",
        scrolled ? "bg-blue-950 shadow" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className={clsx(
            "font-extrabold text-2xl transition-colors",
            scrolled ? "text-white" : "text-black"
          )}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Cybershields<span className="text-blue-500">.</span>
        </a>

        {/* Nav Links */}
        <nav
          className={clsx(
            "hidden md:flex items-center gap-8 text-lg font-semibold transition-colors",
            scrolled ? "text-white" : "text-black"
          )}
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#about" className="hover:text-blue-400">About</a>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="hover:text-blue-400">Services ▾</button>
            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full mt-2 w-52 rounded-lg shadow-lg py-2 overflow-hidden bg-blue-950"
                >
                  <a
                    className="block px-4 py-2 hover:bg-blue-900 text-white transition-colors"
                    href="#"
                  >
                    Strategy
                  </a>
                  <a
                    className="block px-4 py-2 hover:bg-blue-900 text-white transition-colors"
                    href="#"
                  >
                    Web Development
                  </a>
                  <a
                    className="block px-4 py-2 hover:bg-blue-900 text-white transition-colors"
                    href="#"
                  >
                    Marketing
                  </a>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

          {/* Work Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("work")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="hover:text-blue-400">Work ▾</button>
            <AnimatePresence>
              {activeDropdown === "work" && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full mt-2 w-52 rounded-lg shadow-lg py-2 overflow-hidden bg-blue-950"
                  
                >
                  <a className="block px-4 py-2 hover:bg-blue-900 text-white transition-colors" href="#">
                    Projects
                  </a>
                  <a className="block px-4 py-2 hover:bg-blue-900 text-white transition-colors" href="#">
                    Case Studies
                  </a>
                  <a className="block px-4 py-2 hover:bg-blue-900 text-white transition-colors" href="#">
                    Portfolio
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="#pricing" className="hover:text-blue-400">Pricing</a>
          <a href="#clients" className="hover:text-blue-400">Clients</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="rounded-full bg-blue-600 text-white px-5 py-2 text-sm font-semibold hover:bg-blue-500 transition"
          >
            Get Started
          </a>
          <button className="md:hidden p-2 rounded-md border text-white">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
