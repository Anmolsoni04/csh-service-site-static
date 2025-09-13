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
    { name: "Strategy & Consulting", icon: Compass },
    { name: "Web Development", icon: Code },
    { name: "Mobile Apps", icon: Smartphone },
    { name: "UI/UX Design", icon: Palette },
    { name: "SEO & Marketing", icon: Search },
    { name: "Cloud Solutions", icon: Cloud },
    { name: "E-commerce", icon: ShoppingCart },
    { name: "Support & Maintenance", icon: LifeBuoy },
    { name: "Analytics & Reporting", icon: BarChart3 },
  ];

  const work = [
    { name: "Projects", icon: Briefcase },
    { name: "Case Studies", icon: FileText },
    { name: "Portfolio", icon: Layout },
    { name: "Client Testimonials", icon: Users },
    { name: "Industries", icon: Layers },
    { name: "Research & Insights", icon: BookOpen },
    { name: "Awards", icon: Award },
    { name: "Gallery", icon: Image },
    { name: "Process", icon: Compass },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all backdrop-blur-sm",
        scrolled ? "bg-blue-950 shadow-lg" : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className={clsx(
            "font-extrabold text-2xl transition-colors",
            scrolled ? "text-white" : "text-black"
          )}
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Cybershields<span className="text-blue-500">.</span>
        </Link>

        {/* Nav */}
        <nav
          className={clsx(
            "hidden md:flex items-center gap-8 text-lg font-semibold transition-colors",
            scrolled ? "text-white" : "text-black"
          )}
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-blue-400">Services ▾</button>
            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="fixed inset-x-0 top-[80px] mt-2 z-50 bg-white shadow-xl border-t border-gray-200"
                >
                  <div className="max-w-[1200px] mx-auto py-8 px-16 grid grid-cols-3 gap-10">
                    {services.map(({ name, icon: Icon }) => (
                      <motion.div
                        key={name}
                        variants={dropdownItemVariants}
                        className="flex items-center gap-3 px-2 py-2 hover:bg-blue-50 rounded-md transition-colors"
                      >
                        <Icon className="w-5 h-5 text-blue-600" />
                        <Link
                          to={`/services/${name.toLowerCase().replace(/ & | /g, "-")}`}
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
          </div>

          {/* Work Dropdown */}
          <div
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
          </div>



          <Link to="/pricing" className="hover:text-blue-400">Pricing</Link>
          <Link to="/clients" className="hover:text-blue-400">Clients</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="rounded-full bg-gradient-to-r from-orange-500 to-blue-600 text-white px-5 py-2 text-sm font-semibold hover:opacity-90 transition"
          >
            Get Started
          </Link>
          <button className="md:hidden p-2 rounded-md border">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
