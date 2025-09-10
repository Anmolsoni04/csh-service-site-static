// src/components/Portfolio.tsx
import React from "react";
import { useInView } from "@/hooks/useInView";
import { animated, useTrail } from "react-spring";

const portfolioItems = [
  { title: "Project One", image: "https://via.placeholder.com/600x400" },
  { title: "Project Two", image: "https://via.placeholder.com/600x400" },
  { title: "Project Three", image: "https://via.placeholder.com/600x400" },
  { title: "Project Four", image: "https://via.placeholder.com/600x400" },
  { title: "Project Five", image: "https://via.placeholder.com/600x400" },
];

const Portfolio: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const trail = useTrail(portfolioItems.length, {
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 50,
    from: { opacity: 0, y: 50 },
    config: { tension: 220, friction: 24 },
  });

  return (
    <section ref={ref} className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row gap-12">
        {/* Sticky Left Title */}
        <div className="md:w-1/3">
          <div className="sticky top-24">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Our Portfolio
            </h2>
            <p className="mt-4 text-gray-600">
              A collection of our creative work that highlights design,
              strategy, and innovation.
            </p>
          </div>
        </div>

        {/* Right Scrolling Portfolio */}
        <div className="md:w-2/3 space-y-12">
          {trail.map((style, i) => (
            <animated.div
              key={i}
              style={style as any}
              className="rounded-2xl overflow-hidden shadow-lg group relative"
            >
              <img
                src={portfolioItems[i].image}
                alt={portfolioItems[i].title}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <h3 className="text-white text-2xl font-bold">
                  {portfolioItems[i].title}
                </h3>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
