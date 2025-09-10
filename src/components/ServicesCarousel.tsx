// // src/components/ServicesCarousel.tsx
// import React, { useState } from 'react'
// import { useInView } from '@/hooks/useInView'
// import { animated, useSpring } from 'react-spring'
// import clsx from 'clsx'

// const slides = [
//   {
//     title: 'Strategy & Research',
//     img: 'https://images.unsplash.com/photo-1508385082359-f4a1b7db3b4b?q=80&w=1200&auto=format&fit=crop'
//   },
//   {
//     title: 'Visual Identity',
//     img: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1200&auto=format&fit=crop'
//   },
//   {
//     title: 'Web & Product',
//     img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop'
//   },
//   {
//     title: 'CRO & Growth',
//     img: 'https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop'
//   }
// ]

// const ServicesCarousel: React.FC = () => {
//   const [index, setIndex] = useState(0)
//   const { ref, inView } = useInView<HTMLDivElement>()
//   const anim = useSpring({ opacity: inView ? 1 : 0, y: inView ? 0 : 12 })

//   const goNext = () => setIndex((i) => (i + 1) % slides.length)
//   const goPrev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)

//   return (
//     <section id="services" className="section bg-soft">
//       <div className="mx-auto max-w-7xl px-4" ref={ref}>
//         <animated.div style={anim as any} className="mb-8">
//           <h2 className="text-3xl md:text-4xl font-extrabold">Digital agencies offer a wide range of services</h2>
//           <p className="mt-3 text-gray-600 max-w-2xl">Click the arrows to explore representative work/images for each service.</p>
//         </animated.div>

//         <div className="grid md:grid-cols-2 gap-6 items-center">
//           {/* left side: carousel image */}
//           <div className="relative rounded-2xl overflow-hidden border bg-white shadow-soft h-80">
//             {slides.map((s, i) => {
//               const visible = i === index
//               return (
//                 <img
//                   key={i}
//                   src={s.img}
//                   alt={s.title}
//                   className={clsx(
//                     'absolute inset-0 w-full h-full object-cover transition-opacity duration-600',
//                     visible ? 'opacity-100' : 'opacity-0'
//                   )}
//                 />
//               )
//             })}

//             <div className="absolute inset-0 p-6 flex items-end">
//               <div className="bg-black/50 text-white rounded-md px-4 py-2">
//                 {slides[index].title}
//               </div>
//             </div>
//           </div>

//           {/* right side: controls + brief text */}
//           <div>
//             <div className="flex items-center gap-4">
//               <button onClick={goPrev} className="rounded-full h-12 w-12 border flex items-center justify-center">‹</button>
//               <button onClick={goNext} className="rounded-full h-12 w-12 border flex items-center justify-center">›</button>
//             </div>

//             <div className="mt-6 space-y-4">
//               <p className="text-gray-700">We help companies with end-to-end product development — from brand strategy to conversion-driven design. Use the arrows to preview visuals for each core service.</p>

//               <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
//                 {slides.map((s, i) => (
//                   <li key={s.title} className={clsx('p-3 rounded-md border', index === i ? 'ring-2 ring-accent' : '')}>
//                     <div className="font-semibold">{s.title}</div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default ServicesCarousel



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
              className="transition-all duration-300 grayscale hover:grayscale-0 hover:scale-105"
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
