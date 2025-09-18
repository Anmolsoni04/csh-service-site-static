import React from "react";
import { FiCpu, FiCloud, FiCode, FiSmartphone, FiShield, FiDatabase } from "react-icons/fi";

const services = [
  {
    title: "AI & Machine Learning",
    desc: "Latest advancements in AI, ML, and deep learning reshaping industries.",
    icon: <FiCpu size={36} />,
  },
  {
    title: "Cloud Computing",
    desc: "Trends, updates, and tools in AWS, Azure, and cloud-native applications.",
    icon: <FiCloud size={36} />,
  },
  {
    title: "Web Development",
    desc: "Modern frameworks, performance optimization, and developer best practices.",
    icon: <FiCode size={36} />,
  },
  {
    title: "Mobile Development",
    desc: "Insights into Android, iOS, and cross-platform app ecosystems.",
    icon: <FiSmartphone size={36} />,
  },
  {
    title: "Cybersecurity",
    desc: "Protecting digital assets with cutting-edge security practices.",
    icon: <FiShield size={36} />,
  },
  {
    title: "Big Data & Analytics",
    desc: "Harnessing the power of data for actionable insights.",
    icon: <FiDatabase size={36} />,
  },
];

const TechBlogsMain: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Discover Insights From Our <br /> Tech Blogs
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group border border-gray-200 p-8 transition-all duration-1000 hover:bg-indigo-600 hover:text-white cursor-pointer"
            >
              {/* Icon */}
              <div className="text-indigo-600 mb-6 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>

              {/* Description */}
              <p className="text-gray-600 group-hover:text-gray-100 mb-6 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechBlogsMain;
