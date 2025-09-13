import React from "react";

const Pricing: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-white">
      <h1 className="text-4xl font-bold text-blue-900 mb-8">Pricing Plans</h1>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl">
        <div className="p-6 rounded-xl shadow-lg border text-center">
          <h2 className="text-2xl font-semibold mb-4">Basic</h2>
          <p className="text-lg mb-4">$19 / month</p>
          <ul className="text-gray-700 space-y-2">
            <li>✔ 5 Projects</li>
            <li>✔ Email Support</li>
            <li>✔ Basic Features</li>
          </ul>
        </div>
        <div className="p-6 rounded-xl shadow-lg border text-center bg-blue-50">
          <h2 className="text-2xl font-semibold mb-4">Pro</h2>
          <p className="text-lg mb-4">$49 / month</p>
          <ul className="text-gray-700 space-y-2">
            <li>✔ 20 Projects</li>
            <li>✔ Priority Support</li>
            <li>✔ Advanced Features</li>
          </ul>
        </div>
        <div className="p-6 rounded-xl shadow-lg border text-center">
          <h2 className="text-2xl font-semibold mb-4">Enterprise</h2>
          <p className="text-lg mb-4">$99 / month</p>
          <ul className="text-gray-700 space-y-2">
            <li>✔ Unlimited Projects</li>
            <li>✔ 24/7 Support</li>
            <li>✔ All Features</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
