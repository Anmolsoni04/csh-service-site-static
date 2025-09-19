// src/components/BusinessSolutions.tsx
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import video from "../components/assets/1350205-hd_1920_1080_30fps.mp4";

const stats = [
  { value: "224", suffix: "k+", label: "Projects Completed" },
  { value: "28", suffix: "k+", label: "Years of experience" },
  { value: "25", suffix: "m", label: "Happy Customers" },
  { value: "350", suffix: "+", label: "Awards Achievements" },
];

const MoreAboutCsh: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, i) => {
        let start = 0;
        const end = parseFloat(stat.value);
        const duration = 2000;
        const increament = end / (duration / 16);

        const timer = setInterval(() => {
          start += increament;
          if (start >= end) {
            start = end;
            clearInterval(timer);
          }
          setCounts((prev) => {
            const updated = [...prev];
            updated[i] = Math.floor(start);
            return updated;
          });
        }, 16);
      });
    }
  }, [inView]);

  return (
    <section
      className="relative py-24 bg-[#0a0f2c] text-white"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(10,15,44,0.95), rgba(10,15,44,0.95)), url('https://www.transparenttextures.com/patterns/dark-mosaic.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay for dark effect */}
      <div className="absolute inset-0 bg-black/40" />

      <div
        ref={ref}
        className="relative mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            The Power Of Business <br /> Management Solutions.
          </h2>
          <p className="text-gray-300 max-w-lg text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur. Lectus ridiculus dui nisl
            ultrices. Id sapien nec mi quisque elementum tortor.
          </p>

          {/* Feature List */}
          <div className="space-y-6 mt-6">
            <div className="flex items-start gap-3">
              <span className="text-blue-400 text-lg md:text-xl">✔</span>
              <div>
                <h4 className="font-semibold">
                  Competitive Pricing Strategies
                </h4>
                <p className="text-gray-400 text-sm md:text-base">
                  Lorem ipsum dolor sit amet consectetur. Purus faucibus pretium
                  gravida nisl. Vel sit sodales nullam mauris dolor erat.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-400 text-lg md:text-xl">✔</span>
              <div>
                <h4 className="font-semibold">Better Than Google Analytics</h4>
                <p className="text-gray-400 text-sm md:text-base">
                  Lorem ipsum dolor sit amet consectetur. Purus faucibus pretium
                  gravida nisl. Vel sit sodales nullam mauris dolor erat.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
            alt="Technology Solutions"
            className="rounded-2xl shadow-lg w-full"
          />
        </motion.div>
      </div>

      {/* Centered Heading */}
      <div className="text-center mt-20 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-snug">
          Unlocking Digital Potential <br className="hidden sm:block" /> & Every
          Click Counts
        </h1>
      </div>

      {/* Video Section */}
      <div className="relative mt-12 flex justify-center px-4">
        <div className="relative w-full max-w-5xl aspect-video overflow-hidden shadow-xl">
          {/* Video */}
          <video
            src={video}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            controls
            playsInline
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Play Button */}
          <button className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition">
              <span className="text-white text-2xl md:text-3xl">▶</span>
            </div>
          </button>

          {/* Bottom-left caption */}
          <div className="absolute bottom-0 left-0 bg-indigo-600 text-white px-4 md:px-6 py-3 md:py-4 h-24 md:h-32 w-56 md:w-72 flex items-center gap-3 shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19V6h13M9 6l-6 6m0 0l6 6m-6-6h18"
              />
            </svg>
            <div>
              <h4 className="font-semibold text-sm md:text-base">
                Provide best Services
              </h4>
              <p className="text-xs md:text-sm text-indigo-100">
                for your Agency
              </p>
            </div>
          </div>

          {/* Bottom-right description */}
          <div className="absolute bottom-4 right-4 max-w-[200px] md:max-w-xs text-right text-white">
            <p className="text-xs md:text-sm leading-relaxed">
              Lorem Ipsum Dolor Sit Amet Consectet Amet Et Pretium Eget Aliquet
              Pretium Sit Pulvinar. Sit Tincidunt Quis.
            </p>
          </div>
        </div>
      </div>

      {/* Stats moving numbers section */}
      <div className="relative mt-20 px-4">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
                {counts[i]}
                <span className="text-blue-700">{stat.suffix}</span>
              </div>
              <div className="text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreAboutCsh;
