import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

const SlideRight = (delay = 0) => ({
  hidden: {
    x: 60,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  },
});

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="w-full border-b border-gray-100 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <motion.div
            variants={SlideRight(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600">
                <span className="text-lg font-bold text-white">
                  E
                </span>
              </div>

              <span className="text-2xl font-bold text-gray-900">
                Edu<span className="text-indigo-600">Sphere</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden items-center gap-8 lg:flex"
          >
            <Link
              to="/"
              className="font-medium text-gray-700 transition hover:text-indigo-600"
            >
              Home
            </Link>

            <Link
              to="/courses"
              className="font-medium text-gray-700 transition hover:text-indigo-600"
            >
              Courses
            </Link>

            <Link
              to="/instructors"
              className="font-medium text-gray-700 transition hover:text-indigo-600"
            >
              Instructors
            </Link>

            <Link
              to="/about"
              className="font-medium text-gray-700 transition hover:text-indigo-600"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="font-medium text-gray-700 transition hover:text-indigo-600"
            >
              Contact
            </Link>
          </motion.div>

          {/* Right Side */}
          <motion.div
            variants={SlideRight(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden items-center gap-4 lg:flex"
          >
            {/* Search */}
            <button
              type="button"
              aria-label="Search"
              className="rounded-lg p-2.5 transition hover:bg-gray-100"
            >
              <FiSearch
                size={20}
                className="text-gray-700"
              />
            </button>

            {/* Login */}
            <Link
              to="/login"
              className="px-5 py-2.5 font-semibold text-gray-700 transition hover:text-indigo-600"
            >
              Login
            </Link>

            {/* Get Started */}
            <Link
              to="/register"
              className="rounded-lg bg-indigo-600 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-700"
            >
              Get Started
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-700 lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <FiX size={25} />
            ) : (
              <FiMenu size={25} />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                duration: 0.3,
              }}
              className="overflow-hidden border-t border-gray-100 lg:hidden"
            >
              <motion.div
                variants={SlideRight(0.2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="flex flex-col gap-4 py-5"
              >

                {/* Home */}
                <Link
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className="font-medium text-gray-700 transition hover:text-indigo-600"
                >
                  Home
                </Link>

                {/* Courses */}
                <Link
                  to="/courses"
                  onClick={() => setMenuOpen(false)}
                  className="font-medium text-gray-700 transition hover:text-indigo-600"
                >
                  Courses
                </Link>

                {/* Instructors */}
                <Link
                  to="/instructors"
                  onClick={() => setMenuOpen(false)}
                  className="font-medium text-gray-700 transition hover:text-indigo-600"
                >
                  Instructors
                </Link>

                {/* About */}
                <Link
                  to="/about"
                  onClick={() => setMenuOpen(false)}
                  className="font-medium text-gray-700 transition hover:text-indigo-600"
                >
                  About
                </Link>

                {/* Contact */}
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="font-medium text-gray-700 transition hover:text-indigo-600"
                >
                  Contact
                </Link>

                {/* Mobile Buttons */}
                <div className="flex gap-3 border-t border-gray-100 pt-3">

                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="flex-1 rounded-lg border border-gray-200 px-4 py-2.5 text-center font-semibold text-gray-700 transition hover:border-indigo-300 hover:text-indigo-600"
                  >
                    Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={() => setMenuOpen(false)}
                    className="flex-1 rounded-lg bg-indigo-600 px-4 py-2.5 text-center font-semibold text-white transition hover:bg-indigo-700"
                  >
                    Get Started
                  </Link>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.nav>
  );
};

export default Navbar;