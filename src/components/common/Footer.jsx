import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

import {
  SlideLeft,
  SlideRight,
  SlideUp,
  SlideBottom,
} from "../../utility/Animation.js";



const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <motion.div
            variants={SlideRight(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link
              to="/"
              className="mb-5 flex items-center gap-2"
            >
              

              <span className="text-2xl font-bold">
                Edu<span className="text-indigo-400">Sphere</span>
              </span>
            </Link>

            <p className="max-w-sm leading-7 text-gray-400">
              Learn new skills, grow your career, and achieve your goals
              with high-quality online courses from expert instructors.
            </p>

            {/* Social Icons */}
            <motion.div
              variants={SlideRight(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-6 flex items-center gap-3"
            >
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition hover:bg-indigo-600"
              >
                <FiFacebook size={18} />
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition hover:bg-indigo-600"
              >
                <FiTwitter size={18} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition hover:bg-indigo-600"
              >
                <FiInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition hover:bg-indigo-600"
              >
                <FiLinkedin size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 transition hover:text-white"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/courses"
                  className="text-gray-400 transition hover:text-white"
                >
                  Courses
                </Link>
              </li>

              <li>
                <Link
                  to="/instructors"
                  className="text-gray-400 transition hover:text-white"
                >
                  Instructors
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-400 transition hover:text-white"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 transition hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            variants={SlideRight(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="mb-5 text-lg font-semibold">
              Categories
            </h3>

            <ul className="space-y-3">
              <li>
                <Link
                  to="/courses?category=development"
                  className="text-gray-400 transition hover:text-white"
                >
                  Development
                </Link>
              </li>

              <li>
                <Link
                  to="/courses?category=design"
                  className="text-gray-400 transition hover:text-white"
                >
                  Design
                </Link>
              </li>

              <li>
                <Link
                  to="/courses?category=business"
                  className="text-gray-400 transition hover:text-white"
                >
                  Business
                </Link>
              </li>

              <li>
                <Link
                  to="/courses?category=marketing"
                  className="text-gray-400 transition hover:text-white"
                >
                  Marketing
                </Link>
              </li>

              <li>
                <Link
                  to="/courses?category=photography"
                  className="text-gray-400 transition hover:text-white"
                >
                  Photography
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            variants={SlideRight(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h3 className="mb-5 text-lg font-semibold">
              Contact Us
            </h3>

            <div className="space-y-4">

              {/* Address */}
              <div className="flex items-start gap-3">
                <FiMapPin
                  className="mt-1 shrink-0 text-indigo-400"
                  size={18}
                />

                <p className="text-gray-400">
                  123 Learning Street,
                  <br />
                  Education City
                </p>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <FiMail
                  className="shrink-0 text-indigo-400"
                  size={18}
                />

                <a
                  href="mailto:hello@edusphere.com"
                  className="text-gray-400 transition hover:text-white"
                >
                  hello@edusphere.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <FiPhone
                  className="shrink-0 text-indigo-400"
                  size={18}
                />

                <a
                  href="tel:+1234567890"
                  className="text-gray-400 transition hover:text-white"
                >
                  +1 234 567 890
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom Footer */}
      <motion.div
        variants={SlideRight(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="border-t border-white/10"
      >
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">

            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © 2026 EduSphere. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-500 transition hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                to="/terms"
                className="text-gray-500 transition hover:text-white"
              >
                Terms & Conditions
              </Link>
            </div>

          </div>
        </div>
      </motion.div>

    </footer>
  );
};

export default Footer;