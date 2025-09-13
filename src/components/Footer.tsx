// src/components/Footer.tsx
import React from "react";
import { FaTwitter, FaLinkedin, FaDribbble, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-extrabold">
            Cybershields<span className="text-blue-400">.</span>
          </h2>
          <p className="mt-4 text-white/70">
            Building secure & innovative digital experiences for tomorrow.
          </p>
          <div className="mt-6 flex items-center space-x-4 text-white/70">
            <FaEnvelope /> <span>hello@cybershields.com</span>
          </div>
          <div className="flex items-center space-x-4 text-white/70 mt-2">
            <FaPhone /> <span>+91 99999 99999</span>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="mt-3 space-y-2 text-white/70">
              <li><a href="#">About</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <div className="mt-3 flex space-x-4 text-xl">
              <a href="#"><FaTwitter className="hover:text-blue-400" /></a>
              <a href="#"><FaLinkedin className="hover:text-blue-400" /></a>
              <a href="#"><FaDribbble className="hover:text-blue-400" /></a>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg">Stay Updated</h3>
          <p className="mt-2 text-white/70">
            Subscribe to get latest updates & tech insights.
          </p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-l-lg px-4 py-2 text-black focus:outline-none"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-500 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-white/60 text-sm">
        © {new Date().getFullYear()} Cybershields. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
