import React from "react";

const BlogsHero: React.FC = () => {
  return (
    <section className="relative min-h-[50vh] flex flex-col items-center justify-center text-center bg-gradient-to-r from-[#0a0f29] via-[#0f163b] to-[#0a0f29] text-white px-6">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Our <span className="text-blue-400">Blogs</span>
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          Insights, news, and updates from our team. Explore the latest trends, strategies, and
          stories in digital marketing, branding, and more.
        </p>
      </div>
    </section>
  );
};

export default BlogsHero;
