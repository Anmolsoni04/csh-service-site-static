import React from "react";

const ContactButton: React.FC = () => {
  return (
    <button
      type="submit"
      className="w-full sm:w-auto px-10 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-900 transition"
    >
      Submit Now
    </button>
  );
};

export default ContactButton;
