import React, { useState } from "react";

export default function PricingHero() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Starter Plan",
      monthly: 29,
      yearly: 290,
      oldMonthly: 39,
      oldYearly: 390,
      features: [
        "Project Management",
        "Task Tracking",
        "Basic Reporting",
        "Up to 10 Team Members",
        "Calendar Integration",
      ],
    },
    {
      name: "Standard Plan",
      monthly: 49,
      yearly: 490,
      oldMonthly: 59,
      oldYearly: 590,
      features: [
        "Project Management",
        "Task Tracking",
        "Basic Reporting",
        "Up to 10 Team Members",
        "Calendar Integration",
        "Multi-user Access",
      ],
    },
    {
      name: "Premium Plan",
      monthly: 99,
      yearly: 990,
      oldMonthly: 129,
      oldYearly: 1290,
      features: [
        "Project Management",
        "Task Tracking",
        "Basic Reporting",
        "Up to 10 Team Members",
        "Calendar Integration",
        "Multi-user Access",
        "Customer Success Manager",
      ],
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-[#0a0f29] via-[#0f163b] to-[#0a0f29] text-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        {/* Title */}
        <span className="px-4 py-1.5 border border-blue-400 rounded-full text-sm font-medium tracking-wide mb-6 inline-block">
          Pricing Plan
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Flexible Pricing Plan <br />
          <span className="text-blue-400">For Your Digital Agency</span>
        </h1>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Lorem ipsum dolor sit amet consectetur Quis orci in tortor faucibus vitae justo arcu Urna viverra sit ullamcorper nulla elit Semper.
        </p>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 bg-black/40 p-1 rounded-full">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 rounded-full transition ${
                billing === "monthly" ? "bg-blue-500 text-white" : "text-gray-300"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-2 rounded-full transition ${
                billing === "yearly" ? "bg-blue-500 text-white" : "text-gray-300"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-white text-gray-900 rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-lg font-semibold text-indigo-600 mb-4">
                {plan.name}
              </h3>
              <div className="flex items-baseline space-x-2 mb-6">
                <span className="text-4xl font-bold">
                  ${billing === "monthly" ? plan.monthly : plan.yearly}
                </span>
                <span className="line-through text-gray-400">
                  ${billing === "monthly" ? plan.oldMonthly : plan.oldYearly}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                Per User / {billing === "monthly" ? "Month" : "Year"}
              </p>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <span className="text-blue-500">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
