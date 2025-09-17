import React from "react";

const stats = [
  { label: "Projects Completed", numbers: "225", value: "K+" },
  { label: "Years Of Experience", numbers: "28", value: "+" },
  { label: "Happy Customers", numbers: "205", value: "M+" },
  { label: "Awards Achievements", numbers: "22", value: "+" },
];

const AboutStats: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left content */}
        <div>
          <h2 className="text-4xl md:text-3xl font-bold text-gray-900 leading-snug mb-6">
            We’re All About Creating <br />
            Stunning And Creative Work <br />
            That Leaves Impression
          </h2>
          <p className="text-gray-600 text-lg max-w-lg">
            Lorem ipsum dolor sit amet consectetur. Urna condimentum viverra arcu 
            condimentum eu tempus risus viverra odio.
          </p>
        </div>

        {/* Right stats */}
        <div className="space-y-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex justify-between items-center border-b last:border-b-0 pb-4"
            >
              <span className="text-gray-800 font-medium text-lg">{stat.label}</span>
              <span className="text-2xl font-bold">
              <span className="text-black">{stat.numbers}</span>
              <span className="text-blue-600">{stat.value}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
