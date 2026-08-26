import React from "react";
import { Link } from "react-router-dom";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">
                  E
                </span>
              </div>

              <span className="text-2xl font-bold">
                Edu<span className="text-indigo-400">Sphere</span>
              </span>
            </Link>

            <p className="text-gray-400 leading-7 max-w-sm">
              Learn new skills, grow your career, and achieve your goals
              with high-quality online courses from expert instructors.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-indigo-600 transition"
              >
                <FiFacebook size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-indigo-600 transition"
              >
                <FiTwitter size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-indigo-600 transition"
              >
                <FiInstagram size={18} />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-indigo-600 transition"
              >
                <FiLinkedin size={18} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/courses"
                  className="text-gray-400 hover:text-white transition"
                >
                  Courses
                </Link>
              </li>

              <li>
                <Link
                  to="/instructors"
                  className="text-gray-400 hover:text-white transition"
                >
                  Instructors
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Categories
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/courses?category=development"
                  className="text-gray-400 hover:text-white transition"
                >
                  Development
                </Link>
              </li>

              <li>
                <Link
                  to="/courses?category=design"
                  className="text-gray-400 hover:text-white transition"
                >
                  Design
                </Link>
              </li>

              <li>
                <Link
                  to="/courses?category=business"
                  className="text-gray-400 hover:text-white transition"
                >
                  Business
                </Link>
              </li>

              <li>
                <Link
                  to="/courses?category=marketing"
                  className="text-gray-400 hover:text-white transition"
                >
                  Marketing
                </Link>
              </li>

              <li>
                <Link
                  to="/courses?category=photography"
                  className="text-gray-400 hover:text-white transition"
                >
                  Photography
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4">

              <div className="flex items-start gap-3">
                <FiMapPin className="text-indigo-400 mt-1" size={18} />

                <p className="text-gray-400">
                  123 Learning Street,
                  <br />
                  Education City
                </p>
              </div>

              <div className="flex items-center gap-3">
                <FiMail className="text-indigo-400" size={18} />

                <a
                  href="mailto:hello@edusphere.com"
                  className="text-gray-400 hover:text-white transition"
                >
                  hello@edusphere.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="text-indigo-400" size={18} />

                <a
                  href="tel:+1234567890"
                  className="text-gray-400 hover:text-white transition"
                >
                  +1 234 567 890
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">

          <div className="flex flex-col md:flex-row items-center justify-between gap-3">

            <p className="text-sm text-gray-500">
              © 2026 EduSphere. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm">

              <Link
                to="/privacy"
                className="text-gray-500 hover:text-white transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-gray-500 hover:text-white transition"
              >
                Terms & Conditions
              </Link>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;