import React from "react";

const ClientsPage: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Our Clients</h1>
      <p className="text-lg text-gray-700 max-w-2xl text-center mb-8">
        We are proud to have worked with some of the most innovative companies
        worldwide. Here are a few of our valued clients:
      </p>
      <div className="grid md:grid-cols-4 gap-6">
        <div className="p-4 bg-white rounded-lg shadow text-center">🌐 Client A</div>
        <div className="p-4 bg-white rounded-lg shadow text-center">🚀 Client B</div>
        <div className="p-4 bg-white rounded-lg shadow text-center">💼 Client C</div>
        <div className="p-4 bg-white rounded-lg shadow text-center">📱 Client D</div>
      </div>
    </section>
  );
};

export default ClientsPage;
