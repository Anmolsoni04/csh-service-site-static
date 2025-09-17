import React from "react";
import aboutBg from "@/components/svg/bg-about.svg";

const AboutHero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-black via-blue-900 to-indigo-900 text-white">
      {/* Background overlay */}
      <img
        src={aboutBg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover opacity-10"
      />

      <div className="relative z-10 grid md:grid-cols-3 items-center gap-8 max-w-7xl mx-auto px-6">
        {/* Left floating images */}
        <div className="flex flex-col items-center space-y-6">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Team working"
            className="w-56 rounded-xl shadow-lg transform -rotate-2 hover:rotate-0 transition"
          />
          <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61"
            alt="Laptop discussion"
            className="w-56 rounded-xl shadow-lg transform rotate-2 hover:rotate-0 transition"
          />
        </div>

        {/* Center content */}
        <div className="text-center">
          <span className="px-4 py-1.5 border border-blue-400 rounded-full text-sm font-medium tracking-wide mb-6 inline-block">
            About Us
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Innovative Solutions <br /> For Digital Success
          </h1>
          <p className="text-lg text-gray-200 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet consectetur. Quis orci in tortor faucibus vitae
            justo arcu. Urna viverra sit ullamcorper nulla elit semper.
          </p>
        </div>

        {/* Right floating images */}
        <div className="flex flex-col items-center space-y-6">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Professional"
            className="w-56 rounded-xl shadow-lg transform rotate-2 hover:rotate-0 transition"
          />
          <img
            src="https://images.unsplash.com/photo-1551836022-4c4c79ecde51"
            alt="Workspace"
            className="w-56 rounded-xl shadow-lg transform -rotate-2 hover:rotate-0 transition"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHero;

