// src/components/Navbar.tsx
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";
import clsx from "clsx";
import { Link } from "react-router-dom";
import {
  Code,
  Layout,
  Smartphone,
  Palette,
  Search,
  Cloud,
  ShoppingCart,
  LifeBuoy,
  BarChart3,
  Briefcase,
  FileText,
  Layers,
  Users,
  Award,
  Image,
  Compass,
  BookOpen,
} from "lucide-react";

import csh_logo from "@/components/svg/cybershields-footer-logo.svg";
import { ChevronDown } from "lucide-react";

const dropdownVariants = {
  hidden: {
    opacity: 0,
    scaleY: 0,
    transformOrigin: "top center",
  },
  visible: {
    opacity: 1,
    scaleY: 1,
    transformOrigin: "top center",
    transition: {
      duration: 0.1,
      ease: easeOut,
      when: "beforeChildren",
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    scaleY: 0,
    transformOrigin: "top center",
    transition: { duration: 0.3, ease: easeOut },
  },
};

const dropdownItemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMouseEnter = (menu: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  const services = [
    { name: "Strategy", icon: Compass, path: "/services/strategy-consulting" },
    { name: "Web Development", icon: Code, path: "/services/webdevelopment" },
    { name: "Marketing", icon: Smartphone, path: "/services/marketing" },
    { name: "TechBlogs", icon: Palette, path: "/services/techblogs" },
    { name: "AiBlogs", icon: Search, path: "/services/ai-blogs" },
    { name: "DigitalKnowledge", icon: Cloud, path: "/services/digital-knowledge" },
    { name: "SmartLearning", icon: ShoppingCart, path: "/services/smart-learning" },
    { name: "Others", icon: BarChart3, path: "/services/others" },
  ];


  // const work = [
  //   { name: "Projects", icon: Briefcase },
  //   { name: "Case Studies", icon: FileText },
  //   { name: "Portfolio", icon: Layout },
  //   { name: "Client Testimonials", icon: Users },
  //   { name: "Industries", icon: Layers },
  //   { name: "Research & Insights", icon: BookOpen },
  //   { name: "Awards", icon: Award },
  //   { name: "Gallery", icon: Image },
  //   { name: "Process", icon: Compass },
  // ];

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all backdrop-blur-sm",
        scrolled ? "bg-blue-950 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 ">
          <img src={csh_logo} className="h-10 mt-2 w-auto" alt="IDS Logo" />
        </Link>

        {/* Nav */}
        <nav
          className={clsx(
            "hidden md:flex items-center gap-8 text-lg font-semibold transition-colors",
            scrolled ? "text-white" : "text-white"
          )}
          style={{ fontFamily: "Space Grotesk, sans-serif" }}
        >
          <Link to="/" className="hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 hover:text-transparent hover:bg-clip-text">Home</Link>
          <Link to="/about" className="hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 hover:text-transparent hover:bg-clip-text">About</Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-1 transition">
              <span className="hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 hover:text-transparent hover:bg-clip-text">Services</span>
              <motion.span
                animate={{ rotate: activeDropdown === "services" ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="inline-block"
              >
                <ChevronDown className="w-4 h-4" />
              </motion.span>
            </button>
            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="fixed inset-x-0 top-[80px] mt-2 z-50 bg-white shadow-xl border-t border-gray-200"
                >
                  <div className="max-w-[1200px] mx-auto py-8 px-16 grid grid-cols-4 gap-8">
                    {services.map(({ name, icon: Icon, path }) => (
                      <motion.div
                        key={name}
                        variants={dropdownItemVariants}
                        className="flex items-center gap-3 px-2 py-2 hover:bg-blue-50 rounded-md transition-colors"
                      >
                        <Icon className="w-5 h-5 text-blue-600" />
                        <Link to={path} className="text-gray-800">
                          {name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/portfolio" className="hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 hover:text-transparent hover:bg-clip-text">Portfolio</Link>
          <Link to="/products" className="hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 hover:text-transparent hover:bg-clip-text">Products</Link>
          <Link to="/pricing" className="hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 hover:text-transparent hover:bg-clip-text">Pricing</Link>
          <Link to="/blogs" className="hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 hover:text-transparent hover:bg-clip-text">Blogs</Link>
          <Link to="/contact" className="hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 hover:text-transparent hover:bg-clip-text">Contact</Link>

          {/* Work Dropdown */}
          {/* <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("work")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-blue-400">Work ▾</button>
            <AnimatePresence>
              {activeDropdown === "work" && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="fixed inset-x-0 top-[80px] mt-2 z-50 bg-white shadow-xl border-t border-gray-200"
                >
                  <div className="max-w-[1200px] mx-auto py-8 px-16 grid grid-cols-3 gap-10">
                    {work.map(({ name, icon: Icon }) => (
                      <motion.div
                        key={name}
                        variants={dropdownItemVariants}
                        className="flex items-center gap-3 px-2 py-2 hover:bg-blue-50 rounded-md transition-colors"
                      >
                        <Icon className="w-5 h-5 text-blue-600" />
                        <Link
                          to={`/work/${name.toLowerCase().replace(/ & | /g, "-")}`}
                          className="text-gray-800"
                        >
                          {name}
                        </Link>
                      </motion.div>
                    ))}
                    </div>
                    </motion.div>
                    )}
            </AnimatePresence>
          </div> */}
          {/* <Link to="/clients" className="hover:text-blue-400">Clients</Link> */}
        </nav>
        {mobileOpen && (
          <div className="absolute top-[70px] left-0 w-full bg-white shadow-lg flex flex-col space-y-4 p-6 md:hidden">
            <Link to="/" className="text-gray-800 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-800 hover:text-blue-600">About</Link>

            {/* Mobile Services Dropdown */}
            <div>
              <button
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="w-full flex justify-between items-center text-gray-800 hover:text-blue-600"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transform transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="mt-2 pl-4 flex flex-col space-y-2">
                  {services.map(({ name, icon: Icon }) => (
                    <Link
                      key={name}
                      to={`/services/${name.toLowerCase().replace(/ & | /g, "-")}`}
                      className="flex items-center gap-2 text-gray-700 hover:text-blue-600"
                    >
                      <Icon className="w-4 h-4 text-blue-600" />
                      {name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/portfolio" className="text-gray-800 hover:text-blue-600">Portfolio</Link>
            <Link to="/products" className="text-gray-800 hover:text-blue-600">Products</Link>
            <Link to="/pricing" className="text-gray-800 hover:text-blue-600">Pricing</Link>
            <Link to="/blogs" className="text-gray-800 hover:text-blue-600">Blogs</Link>
            <Link to="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link>
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-blue-600 text-white px-5 py-2 text-sm font-semibold hover:opacity-90 transition"
          >
            Get Started
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden p-2 rounded-md border text-white">☰</button>
          {/* <button className="md:hidden p-2 rounded-md border text-white">☰</button> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
