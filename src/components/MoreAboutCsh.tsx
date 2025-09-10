// src/components/BusinessSolutions.tsx
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

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
        stats.forEach((stat,i) => {
            let start = 0
            const end = parseFloat(stat.value);
            const duration = 2000;
            const increament = end / (duration/16);

            const timer = setInterval(() => {
                start += increament;
                if(start >= end){
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
          <p className="text-gray-300 max-w-lg">
            Lorem ipsum dolor sit amet consectetur. Lectus ridiculus dui nisl
            ultrices. Id sapien nec mi quisque elementum tortor.
          </p>


          {/* Feature List */}
          <div className="space-y-6 mt-6">
            <div className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">✔</span>
              <div>
                <h4 className="font-semibold">
                  Competitive Pricing Strategies
                </h4>
                <p className="text-gray-400 text-sm">
                  Lorem ipsum dolor sit amet consectetur. Purus faucibus pretium
                  gravida nisl. Vel sit sodales nullam mauris dolor erat.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">✔</span>
              <div>
                <h4 className="font-semibold">Better Than Google Analytics</h4>
                <p className="text-gray-400 text-sm">
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
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* Video Section */}
      <div className="relative mt-20 flex justify-center">
        <div className="relative w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-xl">
          <video
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            controls
            autoPlay
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Overlay Resume/Play button */}
          <button className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-xl font-semibold hover:bg-black/60 transition">
            ▶ 
          </button>
        </div>
      </div>

      {/* Stats moving numbers section */}

      <div className="relative mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {stats.map((stat, i) => (
                <div key={i}>
                    <div className="text-4xl md:text-5xl font-extrabold">
                        {counts[i]}
                        <span className="text-blue-700">{stat.suffix}</span>
                        </div>
                        <div className="">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
  );
};

export default MoreAboutCsh;