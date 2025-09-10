// src/components/Services.tsx
import React, { useState } from "react";
import clsx from "clsx";

const services = [
  {
    title: "Digital Strategy And Consulting",
    desc: "Lorem ipsum dolor sit amet consectetur. Mattis aliquam nulla placerat at. Eget tincidunt amet.",
    img: "https://images.unsplash.com/photo-1506765515384-028b60a970df?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Website Design And Development",
    desc: "Lorem ipsum dolor sit amet consectetur. Mattis aliquam nulla placerat at. Eget tincidunt amet.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Branding Solutions & Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur. Mattis aliquam nulla placerat at. Eget tincidunt amet.",
    img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Best E-Commerce Solutions",
    desc: "Lorem ipsum dolor sit amet consectetur. Mattis aliquam nulla placerat at. Eget tincidunt amet.",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
  },
];

const Services: React.FC = () => {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(0);

  const handleHover = (i: number) => {
    if (i !== active) {
      setPrev(active);
      setActive(i);
    }
  };

  return (
    <section id="services" className="relative bg-gradient-to-r from-orange-100 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center">
        {/* Left side: Rotated image with circular text */}
        <div className="relative flex justify-center">
          <div className="relative w-[320px] h-[320px] flex items-center justify-center overflow-hidden">
            {/* Circular text */}
            <div className="absolute inset-0 animate-spin-slow flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  />
                </defs>
                <text fill="black" fontSize="6">
                  <textPath href="#circlePath" startOffset="0%">
                    Digital World • Digital World • Digital World •
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Image Transitions */}
            {services.map((s, i) => (
              <img
               key={i}
               src={s.img}
               alt={s.title} 
               className={clsx(
                "absolute w-72 h-72 object-cover rounded-lg shadow-lg transition-all duration-700",
                i === active 
                ? "opacity-100 rotate-[8deg] z-20" 
                : i === prev
                ? "opacity-0 -rotate-[8deg] z-10" 
                : "opacity-0"
              )}
            />
          ))}
        </div>
      </div>


        {/* Right side: Services list */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Digital Agencies Offer A Wide Range Of Services
          </h2>
          <div className="mt-8 space-y-6">
            {services.map((s, i) => (
              <div
                key={i}
                onMouseEnter={() => handleHover(i)}
                className={clsx(
                  "flex items-center justify-between gap-4 p-6 border-b cursor-pointer transition",
                  active === i ? "bg-gray-50 border-indigo-500" : "border-gray-200"
                )}
              >
                <div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="text-gray-600 mt-1 text-sm">{s.desc}</p>
                </div>
                <button
                  className={clsx(
                    "h-10 w-10 rounded-full border flex items-center justify-center transition",
                    active === i
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "border-gray-300 text-gray-500 hover:bg-gray-100"
                  )}
                >
                  →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
