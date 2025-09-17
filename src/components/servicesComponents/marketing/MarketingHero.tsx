import React from "react";

const MarketingHero: React.FC = () => {
  return (
    <section className="relative min-h-[40vh] flex flex-col items-center justify-center text-center bg-gradient-to-r from-[#0a0f29] via-[#0f163b] to-[#0a0f29] text-white px-6">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* <span className="px-4 py-1.5 border border-blue-400 rounded-full text-sm font-medium tracking-wide mb-6 inline-block">
          Strategy Services
        </span> */}

        <h1 className="text-44 md:text-5xl font-bold mb-4 leading-tight">
        Marketing <span className="text-blue-400">Services</span>
        </h1>

        {/* <p className="text-gray-300 max-w-xl mx-auto">
          At Cybershields Technology, we value your trust. This policy explains how we
          handle your personal information with transparency and responsibility.
        </p> */}
      </div>
    </section>
  );
};

export default MarketingHero;
