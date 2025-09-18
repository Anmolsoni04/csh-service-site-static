import React from "react";
import { FiCode, FiServer, FiMonitor, FiSmartphone, FiCloud, FiLayout } from "react-icons/fi";

const services = [
  { title: "Custom Web Apps", desc: "Tailored web applications for your business needs.", icon: <FiCode size={36} /> },
  { title: "Backend Development", desc: "Powerful and scalable server-side solutions.", icon: <FiServer size={36} /> },
  { title: "UI/UX Design", desc: "Intuitive and stunning design experiences.", icon: <FiLayout size={36} /> },
  { title: "Responsive Design", desc: "Websites that look great on all devices.", icon: <FiSmartphone size={36} /> },
  { title: "Cloud Integration", desc: "Seamless deployment and hosting in the cloud.", icon: <FiCloud size={36} /> },
  { title: "Performance Optimization", desc: "Fast-loading and SEO-friendly websites.", icon: <FiMonitor size={36} /> },
];

const WebDevelopmentMain: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            Build High-Performance Websites With Our Web Development Services
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group border border-gray-200 p-8 transition-all duration-1000 hover:bg-indigo-600 hover:text-white cursor-pointer">
              <div className="text-indigo-600 mb-6 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600 group-hover:text-gray-100 mb-6 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevelopmentMain;
