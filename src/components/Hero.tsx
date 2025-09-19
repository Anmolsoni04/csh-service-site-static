// src/components/Hero.tsx
import React from "react";
import { animated, useSpring, useTrail } from "@react-spring/web";
import aboutBg from "@/components/svg/bg-about.svg";
import Brands from "./Brands";

const defaultWords = ["Design", "Branding", "Strategy", "Web"];

const Hero: React.FC = () => {
  const heading = useSpring({
    from: { opacity: 0, transform: "translateY(24px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 220, friction: 22 },
    delay: 120,
  });

  const chips = useTrail(defaultWords.length, {
    from: { opacity: 0, transform: "translateY(8px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 480,
  });

  const bg = useSpring({
    from: { opacity: 0 },
    to: { opacity: 0.2 },
    config: { duration: 800 },
    delay: 200,
  });

  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-gradient-to-r from-black via-blue-900 to-indigo-900 text-white">
      {/* Background Texture */}
      <img
        src={aboutBg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />
      <div className="absolute inset-0 bg-black/40" />

      {/* Main Hero Content */}
      <div className="mx-auto max-w-7xl px-4 flex flex-col md:flex-row items-center gap-12 relative z-10 py-20">
        {/* LEFT CONTENT */}
        <div className="md:w-6/12 text-center md:text-left">
          <animated.h1
            style={heading}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-white"
          >
            Elevate your brand with{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              bold creative
            </span>{" "}
            that converts.
          </animated.h1>

          <p className="mt-6 max-w-xl mx-auto md:mx-0 text-lg text-white">
            We craft thoughtful experiences for ambitious teams—branding,
            websites and campaigns fueled by strategy.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-6/12 relative">
          <div className="aspect-[4/3] rounded-3xl overflow-hidden border">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop"
              alt="Creative workspace"
              className="w-full h-full object-cover"
            />
            <animated.div
              style={bg}
              className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"
            />
          </div>

          {/* PARTNER INFO */}
          <div className="mt-6 flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-md w-fit">
            <img
              src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=200&auto=format&fit=crop"
              alt="client"
              className="h-10 w-10 rounded-full object-cover ring-2 ring-yellow-400"
            />
            <div className="text-sm">
              <div className="font-semibold text-gray-900">Partnered with</div>
              <div className="text-gray-600">SaaS · E-commerce · Startups</div>
            </div>
          </div>
        </div>
      </div>

      {/* Brands Section Inside Gradient */}
      <div className="relative z-10 mt-12">
        <Brands />
      </div>
    </section>
  );
};

export default Hero;
