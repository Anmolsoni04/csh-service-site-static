import React from "react";
import { motion } from "framer-motion";

const MarketingHero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#0a0f29] via-[#0f163b] to-[#0a0f29] text-white min-h-[75vh] flex items-center">
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 gap-10 items-center w-full">
        <div className="space-y-6">
          <span className="inline-block px-4 py-1 border border-blue-400 rounded-full text-blue-400 text-sm font-medium">
            Marketing
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Creative <span className="text-blue-400">Marketing</span> Solutions That Drive Results
          </h1>
          <p className="text-gray-300 max-w-lg">
            From branding to campaigns, we craft strategies that connect and engage your audience.
          </p>
        </div>
        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="relative">
          <img
            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop"
            alt="Marketing"
            className="shadow-lg object-cover w-full max-w-md md:max-w-lg relative md:-mr-32"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default MarketingHero;
