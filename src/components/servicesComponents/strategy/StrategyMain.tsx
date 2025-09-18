import React from "react";
import { FiUsers, FiMonitor, FiShoppingCart, FiMic, FiPenTool, FiActivity } from "react-icons/fi";

const services = [
  {
    title: "Customer Retention Strategies",
    desc: "Lorem ipsum dolor sit amet consectetur Quis tortor faucibus vitae justo arcu Urna viverra ullamcorper nulla elit Semper.",
    icon: <FiUsers size={36} />,
  },
  {
    title: "Programmatic Advertising",
    desc: "Lorem ipsum dolor sit amet consectetur Quis tortor faucibus vitae justo arcu Urna viverra ullamcorper nulla elit Semper.",
    icon: <FiMonitor size={36} />,
  },
  {
    title: "Best E-Commerce Solutions",
    desc: "Lorem ipsum dolor sit amet consectetur Quis tortor faucibus vitae justo arcu Urna viverra ullamcorper nulla elit Semper.",
    icon: <FiShoppingCart size={36} />,
  },
  {
    title: "Branding Solutions & Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur Quis tortor faucibus vitae justo arcu Urna viverra ullamcorper nulla elit Semper.",
    icon: <FiMic size={36} />,
  },
  {
    title: "Website Design And Development",
    desc: "Lorem ipsum dolor sit amet consectetur Quis tortor faucibus vitae justo arcu Urna viverra ullamcorper nulla elit Semper.",
    icon: <FiPenTool size={36} />,
  },
  {
    title: "Digital Strategy And Consulting",
    desc: "Lorem ipsum dolor sit amet consectetur Quis tortor faucibus vitae justo arcu Urna viverra ullamcorper nulla elit Semper.",
    icon: <FiActivity size={36} />,
  },
];

const StrategyMain: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Drive Your Digital Success With <br />
            Our Comprehensive Services
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

export default StrategyMain;
