import React, { useState } from "react";
import clsx from "clsx";

const services = [
  { title: "Full-Stack Solutions", desc: "End-to-end development from frontend to backend.", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop" },
  { title: "API Development", desc: "Robust APIs for integration with other services.", img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop" },
  { title: "CMS Development", desc: "Flexible CMS platforms like WordPress, Strapi, and more.", img: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop" },
  { title: "E-Commerce Platforms", desc: "Custom-built solutions for online stores.", img: "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1200&auto=format&fit=crop" },
];

const WebDevelopmentMainOptional: React.FC = () => {
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(0);

  const handleHover = (i: number) => {
    if (i !== active) {
      setPrev(active);
      setActive(i);
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-orange-100 to-white py-20">
      <div className="mx-auto max-w-7xl px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="relative flex justify-center">
          <div className="relative w-[320px] h-[320px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 animate-spin-slow flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" />
                </defs>
                <text fill="black" fontSize="6">
                  <textPath href="#circlePath"> Web Development • Web Development • </textPath>
                </text>
              </svg>
            </div>
            {services.map((s, i) => (
              <img
                key={i}
                src={s.img}
                alt={s.title}
                className={clsx("absolute w-72 h-72 object-cover rounded-lg shadow-lg transition-all duration-700",
                  i === active ? "opacity-100 rotate-[8deg] z-20" :
                  i === prev ? "opacity-0 -rotate-[8deg] z-10" : "opacity-0")}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold">Web Development That Powers Your Business Growth</h2>
          <div className="mt-8 space-y-6">
            {services.map((s, i) => (
              <div key={i} onMouseEnter={() => handleHover(i)}
                className={clsx("flex items-center justify-between gap-4 p-6 border-b cursor-pointer transition",
                  active === i ? "bg-gray-50 border-indigo-500" : "border-gray-200")}>
                <div>
                  <h3 className="text-lg font-semibold">{s.title}</h3>
                  <p className="text-gray-600 mt-1 text-sm">{s.desc}</p>
                </div>
                <span className={clsx("h-10 w-10 rounded-full border flex items-center justify-center font-bold transition",
                  active === i ? "bg-indigo-600 text-white border-indigo-600" : "border-gray-300 text-gray-500 hover:bg-gray-100")}>
                  {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentMainOptional;
