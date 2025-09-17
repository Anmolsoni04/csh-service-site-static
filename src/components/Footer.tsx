// src/components/Footer.tsx
import React from "react";
import { FaTwitter, FaLinkedin, FaDribbble, FaEnvelope, FaPhone } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0f29] text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-extrabold text-white">
            Cybershields<span className="text-blue-400">.</span>
          </h2>
          <p className="mt-4 text-gray-400">
            Building secure & innovative digital experiences for tomorrow.
          </p>
          <div className="mt-6 flex items-center space-x-3 text-gray-400">
            <FaEnvelope className="text-blue-400" />
            <span>hello@cybershields.com</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-400 mt-2">
            <FaPhone className="text-blue-400" />
            <span>+91 99999 99999</span>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition">About</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Careers</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-white">Services</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="hover:text-blue-400 transition">Web Development</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Cloud Security</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg text-white">Stay Updated</h3>
          <p className="mt-3 text-gray-400">
            Subscribe to get latest updates & tech insights.
          </p>
          <form className="mt-5 relative">
            <IoNotificationsOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-blue-400" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full pl-10 pr-28 py-3 rounded-lg bg-[#141a3a] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-blue-400"
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      {/* Bottom bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>© {new Date().getFullYear()} Cybershields. All rights reserved.</p>
            <a
              href="/privacy-policy"
              className="hover:text-blue-400 transition"
            >
              Privacy Policy
            </a>
          </div>

          <div className="flex space-x-4 mt-3 md:mt-0 text-lg">
            <a href="#"><FaTwitter className="hover:text-blue-400 transition" /></a>
            <a href="#"><FaLinkedin className="hover:text-blue-400 transition" /></a>
            <a href="#"><FaDribbble className="hover:text-blue-400 transition" /></a>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
