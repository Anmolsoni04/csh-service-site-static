import React, { useEffect, useRef, useState } from "react";

const images = [
  "https://picsum.photos/id/1015/1200/800",
  "https://picsum.photos/id/1016/1200/800",
  "https://picsum.photos/id/1018/1200/800",
  "https://picsum.photos/id/1020/1200/800",
  "https://picsum.photos/id/1024/1200/800",
];

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const isScrollingRef = useRef(false);

  // Detect portfolio visibility using IntersectionObserver for robustness
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsActive(entry.isIntersecting),
      { threshold: 0.5 } // adjust threshold for desired sensitivity
    );
    observer.observe(section);
    return () => observer.unobserve(section);
  }, []);

  // Lock body scroll when portfolio scroll is active
  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "auto";
  }, [isActive]);

  // Wheel event: only portfolio gallery scrolls, page frozen, except at edges
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isActive) return;

      e.preventDefault();
      if (isScrollingRef.current) return;

      // Edge case: allow normal scroll beyond gallery
      if (e.deltaY < 0 && activeIndex === 0) {
        document.body.style.overflow = "auto";
        return;
      }
      if (e.deltaY > 0 && activeIndex === images.length - 1) {
        document.body.style.overflow = "auto";
        return;
      }
      document.body.style.overflow = "hidden";

      if (e.deltaY > 0 && activeIndex < images.length - 1) {
        isScrollingRef.current = true;
        setActiveIndex((prev) => prev + 1);
      } else if (e.deltaY < 0 && activeIndex > 0) {
        isScrollingRef.current = true;
        setActiveIndex((prev) => prev - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeIndex, isActive]);

  // Animate image transitions
  useEffect(() => {
    if (!sectionRef.current) return;
    const scrollContainer = sectionRef.current.querySelector(
      ".portfolio-scroll"
    ) as HTMLDivElement;
    if (scrollContainer) {
      scrollContainer.style.transform = `translateY(-${activeIndex * 100}vh)`;
      scrollContainer.style.transition = "transform 0.8s cubic-bezier(0.77,0,0.175,1)";
      const timeout = setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
      return () => clearTimeout(timeout);
    }
  }, [activeIndex]);

  return (
    <div
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-gray-900"
      style={{ touchAction: "none" }}
    >
      {/* The scrollable gallery; height = total images * viewport height */}
      <div
        className="portfolio-scroll absolute top-0 left-0 w-full"
        style={{ height: `${images.length * 100}vh` }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="w-full h-screen flex items-center justify-center"
          >
            <img
              src={img}
              alt={`Portfolio ${idx + 1}`}
              className="max-w-4xl max-h-full object-contain rounded-lg shadow-xl"
            />
          </div>
        ))}
      </div>

      {/* Optional: Progress indicator */}
      <div className="absolute bottom-10 left-0 w-full flex justify-center">
        <div className="h-2 bg-gray-700 rounded-full w-1/2 overflow-hidden">
          <div
            style={{
              width: `${((activeIndex + 1) / images.length) * 100}%`,
            }}
            className="h-2 bg-blue-500 transition-all duration-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
