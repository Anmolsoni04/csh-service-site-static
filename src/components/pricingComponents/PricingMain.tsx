import React from "react";

export default function PricingMain() {
  const features = [
    { name: "Unlimited e-mail notification", starter: false, standard: true, premium: true },
    { name: "Display personalized message", starter: true, standard: true, premium: true },
    { name: "Send text message instant", starter: true, standard: true, premium: true },
    { name: "Send live message notification", starter: false, standard: false, premium: true },
    { name: "Organize contacts into system", starter: true, standard: true, premium: true },
    { name: "Create smart segment field policy", starter: true, standard: true, premium: true },
    { name: "Inbuilt malware scanner instant", starter: false, standard: false, premium: true },
    { name: "24x7 online outstanding support", starter: false, standard: false, premium: true },
  ];

  return (
    <section className="py-20 bg-white text-gray-900 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Choose The Best Plan <br /> For Your Business
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b">
                <th className="py-4 px-6 text-lg font-medium text-gray-700">Features</th>
                <th className="py-4 px-6 text-indigo-600">Starter Plan</th>
                <th className="py-4 px-6 text-indigo-600">Standard Plan</th>
                <th className="py-4 px-6 text-indigo-600">Premium Plan</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6">{feature.name}</td>
                  <td className="py-4 px-6 text-center">
                    {feature.starter ? "✔" : "---"}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {feature.standard ? "✔" : "---"}
                  </td>
                  <td className="py-4 px-6 text-center">
                    {feature.premium ? "✔" : "---"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
