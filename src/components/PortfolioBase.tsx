// src/components/PortfolioBase.tsx
import React, { useState } from "react";
import {Link} from "react-router-dom"

const items = [
  {
    src: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=800",
    title: "Digital Marketing",
    desc: "Multimedia Content // Content Strategy",
    category: "Branding",
    slug: "dm"
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800",
    title: "E-Commerce Solutions",
    desc: "Brand Guidelines // Logo Design",
    category: "Creative",
    slug: "ecom"
  },
  {
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800",
    title: "Product Design",
    desc: "Visual Design // Branding",
    category: "Design",
    slug: "product-design"
  },
  {
    src: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800",
    title: "Web Development",
    desc: "Web applications // Developer skills",
    category: "Branding",
    slug: "web-dev"
  },
  {
    src: "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=800",
    title: "Branding Design",
    desc: "Products selling // Online Design",
    category: "Creative",
    slug: "brand-design"
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800",
    title: "Content Creation",
    desc: "Organic Research // Keyword Suggestions",
    category: "Design",
    slug: "content-creation"
  },
];

const categories = ["All", "Branding", "Creative", "Design"];

const PortfolioBase: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? items
      : items.filter((item) => item.category === activeTab);

  return (
    <section className="section bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="mb-8 text-start">
          <h2 className="text-3xl md:text-4xl font-semibold leading-snug">
            Choose The Way To <br /> Showcase Your Portfolio
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex justify-start gap-6 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`text-sm font-medium transition ${
                activeTab === cat
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-500 hover:text-indigo-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8" id="portfolio">
          {filteredItems.map((item, i) => (
            <Link to = {`/portfolio/${item.slug}`} key={i}>
            <div className="group overflow-hidden cursor-pointer">
              {/* Image */}
              <div className="overflow-hidden">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              {/* Text */}
              <div className="mt-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioBase;