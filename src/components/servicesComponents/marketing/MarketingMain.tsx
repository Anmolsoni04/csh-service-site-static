import React from "react";
import { FiTarget, FiTrendingUp, FiGlobe, FiShare2, FiVideo, FiMessageCircle } from "react-icons/fi";

const services = [
  { title: "Social Media Campaigns", desc: "Grow your reach with impactful social media strategies.", icon: <FiShare2 size={36} /> },
  { title: "SEO Optimization", desc: "Rank higher on search engines and attract organic traffic.", icon: <FiTrendingUp size={36} /> },
  { title: "Global Branding", desc: "Expand your brand presence across multiple markets.", icon: <FiGlobe size={36} /> },
  { title: "Targeted Ads", desc: "Maximize ROI with data-driven advertising campaigns.", icon: <FiTarget size={36} /> },
  { title: "Video Marketing", desc: "Engage audiences with creative and powerful video ads.", icon: <FiVideo size={36} /> },
  { title: "Influencer Marketing", desc: "Leverage voices that your customers trust.", icon: <FiMessageCircle size={36} /> },
];

const MarketingMain: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Elevate Your Brand With Our Creative Marketing Services
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group border border-gray-200 p-8 transition-all duration-1000 hover:bg-indigo-600 hover:text-white cursor-pointer">
              <div className="text-indigo-600 mb-6 group-hover:text-white">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-100 mb-6 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketingMain;
