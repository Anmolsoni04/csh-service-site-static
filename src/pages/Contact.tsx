import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-white">
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Contact Us</h1>
      <form className="w-full max-w-lg bg-gray-50 p-8 rounded-xl shadow">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-3 border rounded-lg"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-3 border rounded-lg"
        />
        <textarea
          placeholder="Your Message"
          className="w-full mb-4 p-3 border rounded-lg"
          rows={5}
        />
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Contact;
