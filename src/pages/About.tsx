import React from "react";

const About: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-50">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">About Us</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center">
        Welcome to our company! 🚀  
        We are passionate about delivering innovative digital solutions that
        help businesses grow and succeed in the modern world.  
        Our team specializes in <span className="font-semibold">strategy, web
        development, and marketing</span>.
      </p>
    </section>
  );
};

export default About;
