// src/components/SplitScrollWords.tsx
import React, { useEffect, useState } from "react";

const SplitScrollWords: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Gentle parallax effect
  const rightX = scrollY * 0.25; // slower, smoother
  const leftX = -scrollY * 0.25;

  return (
    <section className="relative overflow-hidden py-40 bg-white">
      <div className="mx-auto max-w-7xl px-4 space-y-24">
        {/* Row 1: We Design */}
        <div
          style={{
            transform: `translateX(${rightX}px)`,
            transition: "transform 0.1s ease-out",
          }}
          className="text-[8vw] md:text-[8vw] font-extrabold tracking-tight leading-none whitespace-nowrap"
        >
          We <span className="text-blue-700">Design</span>
        </div>

        {/* Row 2: Digital Brands */}
        <div
          style={{
            transform: `translateX(${leftX}px)`,
            transition: "transform 0.1s ease-out",
          }}
          className="text-[8vw] md:text-[8vw] font-extrabold tracking-tight leading-none whitespace-nowrap text-right"
        >
          <span className="text-yellow-500">Digital</span> Brands
        </div>
      </div>
    </section>
  );
};

export default SplitScrollWords;
