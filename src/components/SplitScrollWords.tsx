// src/components/SplitScrollWords.tsx
import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const SplitScrollWords: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Gentle parallax effect
  const rightX = scrollY * 0.20;
  const leftX = -scrollY * 0.20;

  return (
    <section className="relative overflow-hidden py-32 bg-gradient-to-br from-white via-white to-orange-50">
      <div className="mx-auto max-w-7xl px-4 space-y-24 text-center">
        {/* Row 1: We + Button + Design */}
        <div
          style={{
            transform: `translateX(${rightX}px)`,
            transition: "transform 0.1s ease-out",
          }}
          className="text-[clamp(3rem,10vw,8rem)] font-extrabold tracking-tight leading-none flex items-center justify-center gap-6"
        >
          <span className="text-black">We</span>

          <button className="w-14 h-14 flex items-center justify-center rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition">
            <ArrowUpRight className="w-6 h-6" />
          </button>

          <span className="text-black">Design</span>
        </div>

        <div
          style={{
            transform: `translateX(${leftX}px)`,
            transition: "transform 0.1s ease-out",
          }}
          className="text-[clamp(3rem,10vw,8rem)] font-extrabold tracking-tight leading-none flex items-center justify-center gap-6"
        >
          <span className="text-black flex items-center">
            Digit
            <span className="text-orange-500 mx-1 text-[0.8em]">✱</span>al
          </span>
          <span className="text-black">Brands</span>
        </div>
      </div>
    </section>
  );
};

export default SplitScrollWords;
