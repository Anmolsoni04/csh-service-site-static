// src/components/Footer.tsx
import React from "react";
import { FaTwitter, FaLinkedin, FaDribbble, FaEnvelope, FaPhone } from "react-icons/fa";
import { IoNotificationsOutline } from "react-icons/io5";
import { Link } from "react-router-dom"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-12">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-extrabold text-blue-800">
          <Link to="/" className="hover:bg-gradient-to-r hover:from-blue-700 hover:to-blue-800 hover:text-transparent hover:bg-clip-text">Cybershields <span className="text-blue-400">.</span></Link>
          </h2>
          <p className="mt-4">
            Building secure & innovative digital experiences for tomorrow.
          </p>
          <div className="mt-6 flex items-center space-x-3">
            <FaEnvelope className="text-blue-900" />
            <span className="text-blue-700">hello@cybershields.com</span>
          </div>
          <div className="flex items-center space-x-3 mt-2">
            <FaPhone className="text-blue-900" />
            <span>+91 99999 99999</span>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-blue-700 hover:text-blue-900 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services/strategy-consulting" className="text-blue-700 hover:text-blue-900 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-blue-700 hover:text-blue-900 transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-blue-700 hover:text-blue-900 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/services/webdevelopment" className="text-blue-700 hover:text-blue-900 transition">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/services/marketing" className="text-blue-700 hover:text-blue-900 transition">
                  Marketing
                </Link>
              </li>
              <li>
                <Link to="/services/techblogs" className="text-blue-700 hover:text-blue-900 transition">
                  Tech Blogs
                </Link>
              </li>
              <li>
                <Link to="/services/others" className="text-blue-700 hover:text-blue-900 transition">
                  Others
                </Link>
              </li>
            </ul>
          </div>
        </div>


        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg">Stay Updated</h3>
          <p className="mt-3">
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
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 text-sm">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <p>© {new Date().getFullYear()} Cybershields. All rights reserved.</p>
            <a
              href="/privacy-policy"
              className="hover:text-blue-800 transition"
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
