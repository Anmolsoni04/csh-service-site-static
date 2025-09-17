import React from "react";

const TechBlogsMain: React.FC = () => {
  return (
    <section className="py-20 flex flex-col items-center justify-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-40 h-40 mb-6 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <h2 className="text-3xl font-bold text-gray-800">Coming Soon!</h2>
      <p className="text-gray-600 mt-2 text-center max-w-xl">
        Our TechBlogs service page is under development. Stay tuned for exciting updates!
      </p>
    </section>
  );
};

export default TechBlogsMain;
