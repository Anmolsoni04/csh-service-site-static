// src/components/ServicesCarousel.tsx
import React from "react";
import { useInView } from "@/hooks/useInView";
import { animated, useSpring } from "react-spring";

const logos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    alt: "Amazon",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    alt: "Microsoft",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    alt: "Netflix",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    alt: "IBM",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    alt: "Google",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Adobe_Corporate_logo.svg",
    alt: "Adobe",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg",
    alt: "Salesforce",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/84/Spotify_icon.svg",
    alt: "Spotify",
  },
];

const ServicesCarousel: React.FC = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const anim = useSpring({ opacity: inView ? 1 : 0, y: inView ? 0 : 20 });

  return (
    <section id="services" className="section bg-soft py-16">
      <div className="mx-auto max-w-7xl px-4 text-center" ref={ref}>
        <animated.div style={anim as any} className="mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            More than{" "}
            <span className="text-accent">12,500 Teams</span> use Agensia
            Digital Agency
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Trusted by the world’s leading companies for design, branding, and
            digital solutions.
          </p>
        </animated.div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 place-items-center">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="transition-all duration-300 hover:grayscale-0 hover:scale-105"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
