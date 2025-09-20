// src/components/TestimonialBase.tsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import earth from "./assets/earth.jpg"

type Testimonial = {
    id: number;
    name: string;
    role?: string;
    image: string;
    quote: string;
};

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Aspen Franci",
        role: "Designer",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        quote:
            "It was a pleasure working on a design project together. I must say that the experience exceeded all my expectations.",
    },
    {
        id: 2,
        name: "Sophia Lee",
        role: "Marketing Manager",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        quote:
            "The collaboration was seamless and communication was outstanding. I felt supported every step of the way.",
    },
    {
        id: 3,
        name: "David Miller",
        role: "Entrepreneur",
        image: "https://randomuser.me/api/portraits/men/15.jpg",
        quote:
            "The project outcome was fantastic, delivered on time and with great quality. Truly impressed.",
    },
];

export default function TestimonialBase() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState<"left" | "right">("right");

    const next = () => {
        setDirection("right");
        setIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setDirection("left");
        setIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1
        );
    };

    const variants = {
        enter: (dir: "left" | "right") => ({
            x: dir === "right" ? 200 : -200,
            opacity: 0,
        }),
        center: { x: 0, opacity: 1 },
        exit: (dir: "left" | "right") => ({
            x: dir === "right" ? -200 : 200,
            opacity: 0,
        }),
    };

    return (
        <section className="relative w-full bg-gradient-to-r from-[#0a0f29] via-[#0f163b] to-[#0a0f29] text-white py-20 md:py-32 lg:py-48 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden">
            {/* Background world map */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <img
                    src={earth}
                    alt="world map background"
                    className="w-full h-full object-cover opacity-25"
                />
            </div>

            <div className="relative max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
                {/* Left: Heading and description */}
                <div className="w-full md:w-1/2 space-y-6 md:space-y-8 text-center md:text-left">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start md:items-center gap-5">
                        <img
                            src={testimonials[index].image}
                            alt={testimonials[index].name}
                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-blue-400 shadow-lg"
                        />
                        <div>
                            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-snug">
                                Trusted By{" "}
                                <span className="text-blue-400">25,000+</span>
                            </h3>
                            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-2 text-gray-200">
                                Happy Customers Are Using Cybershields.
                            </p>
                        </div>
                    </div>

                    <div className="border-t border-gray-700"></div>

                    <div>
                        <h4 className="text-lg sm:text-xl font-semibold text-blue-600">
                            {testimonials[index].name}
                        </h4>
                        {testimonials[index].role && (
                            <p className="text-sm sm:text-base text-gray-400">
                                {testimonials[index].role}
                            </p>
                        )}
                    </div>

                    <p className="text-base sm:text-lg md:text-xl max-w-lg leading-relaxed mx-auto md:mx-0">
                        The wonderful services you offer locally are great for our
                        community. People are tired of having to travel out of town for
                        things.
                    </p>
                </div>

                {/* Right: Testimonial Quote and navigation */}
                <div className="w-full md:w-1/2 relative">
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={testimonials[index].id}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4 }}
                            className="space-y-6 sm:space-y-8"
                        >
                            <p className="text-lg sm:text-xl md:text-2xl text-gray-100 relative sm:static sm:text-center md:text-left md:relative md:bottom-12 md:left-48">
                                {testimonials[index].quote}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Arrow Buttons */}
                    <div className="absolute -bottom-12 md:bottom-auto md:top-28 right-1/2 translate-x-1/2 md:translate-x-0 md:right-0 flex gap-4 sm:gap-6">
                        <button
                            onClick={prev}
                            className="p-3 sm:p-4 rounded-full border border-gray-500 hover:border-blue-400 hover:bg-blue-500/20 transition"
                        >
                            <ChevronLeft size={24} className="sm:w-7 sm:h-7" />
                        </button>
                        <button
                            onClick={next}
                            className="p-3 sm:p-4 rounded-full border border-gray-500 hover:border-blue-400 hover:bg-blue-500/20 transition"
                        >
                            <ChevronRight size={24} className="sm:w-7 sm:h-7" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}


{/* EXTRA IMAGE FOR USER */ }
{/* <div className="flex items-center gap-5">
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="w-20 h-20 rounded-full border-2 border-blue-400 shadow-md"
                />
                <div>
                  <h4 className="text-xl font-semibold">
                    {testimonials[index].name}
                  </h4>
                  {testimonials[index].role && (
                    <p className="text-blue-300 text-sm">
                      {testimonials[index].role}
                    </p>
                  )}
            </div>
</div> */}