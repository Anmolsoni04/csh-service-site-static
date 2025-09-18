import React from "react";
import { motion } from "framer-motion";

const TechBlogsHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#0a0f29] via-[#0f163b] to-[#0a0f29] text-white min-h-[75vh] flex items-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-10 items-center w-full">
        {/* Left content */}
        <div className="space-y-6">
          <span className="inline-block px-4 py-1 border border-blue-400 rounded-full text-blue-400 text-sm font-medium">
            Tech Blogs
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Stay Updated With The Latest <span className="text-blue-400">Technology</span> Trends
          </h1>
          <p className="text-gray-300 max-w-lg">
            Explore insightful blogs covering software development, cloud, AI, and 
            emerging technologies to keep you ahead in the digital era.
          </p>
        </div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop"
            alt="Tech Blogs"
            className="shadow-lg object-cover w-full max-w-md md:max-w-lg relative md:-mr-32"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default TechBlogsHero;
