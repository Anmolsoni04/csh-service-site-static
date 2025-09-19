// src/components/Services.tsx
import React, { useState } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react"; // arrow icon

const services = [
  {
    title: "Strategy & Consulting",
    slug: "strategy-consulting",
    desc: "Expert strategy services to help your brand grow in the digital age.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80",
  },
  {
    title: "Website Design And Development",
    slug: "webdevelopment",
    desc: "Beautiful, responsive websites tailored for your business.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Branding Solutions & Marketing",
    slug: "marketing",
    desc: "Creative campaigns and branding that resonate with your audience.",
    img: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Tech Blogs",
    slug: "techblogs",
    desc: "Useful Blogs for the updating technology to make the youth aligned",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "AI Blogs",
    slug: "ai-blogs",
    desc: "Harness AI-powered tools and workflows to boost efficiency.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Digital Knowledge",
    slug: "digital-knowledge",
    desc: "Unlock insights with digital knowledge via powerful data visualization and analysis.",
    img: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Smart Learning",
    slug: "smart-learning",
    desc: "Introducing the Tutor platform where smart & professionals will provide the best lessons.",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Other Services",
    slug: "others",
    desc: "Click here to view more services",
    img: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
  },
];

const ServicesBase: React.FC = () => {
  const [active, setActive] = useState<number | null>(null);
  const [prev, setPrev] = useState(0);

  const handleHover = (i: number) => {
    if (i !== active) {
      setPrev(active ?? 0);
      setActive(i);
    }
  };

  return (
    <section
      id="services"
      className="relative bg-gradient-to-r from-orange-100 to-white py-20"
    >
      <h1 className="text-5xl flex justify-center items-center font-semibold">Our Services</h1>
      <div className="mx-auto max-w-7xl px-4 grid grid-cols-3 gap-12 items-center">
        {/* Left Services */}
        <div className="space-y-6">
          {services.slice(0, 4).map((s, i) => (
            <Link to={`/services/${s.slug}`} key={i}>
              <div
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
                <span
                  className={clsx(
                    "h-10 w-10 flex items-center justify-center rounded-full border font-bold transition",
                    active === i
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "border-gray-300 text-gray-500 hover:bg-gray-100"
                  )}
                >
                  <ArrowRight className="h-8 w-8"/>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Center Rotating Image */}
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

        {/* Right Services */}
        <div className="space-y-6">
          {services.slice(4, 8).map((s, i) => (
            <Link to={`/services/${s.slug}`} key={i + 4}>
              <div
                onMouseEnter={() => handleHover(i + 4)}
                className={clsx(
                  "flex items-center justify-between gap-4 p-6 border-b cursor-pointer transition",
                  active === i + 4
                    ? "bg-gray-50 border-indigo-500"
                    : "border-gray-200"
                )}
              >
                <div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="text-gray-600 mt-1 text-sm">{s.desc}</p>
                </div>
                <span
                  className={clsx(
                    "h-10 w-10 flex items-center justify-center rounded-full border font-bold transition",
                    active === i + 4
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "border-gray-300 text-gray-500 hover:bg-gray-100"
                  )}
                >
                  <ArrowRight className="h-8 w-8"/>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesBase;
