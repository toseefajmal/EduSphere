import React from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>

            <span className="text-2xl font-bold text-gray-900">
              Edu<span className="text-indigo-600">Sphere</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">

            <Link
              to="/"
              className="text-gray-700 hover:text-indigo-600 font-medium transition"
            >
              Home
            </Link>

            <Link
              to="/courses"
              className="text-gray-700 hover:text-indigo-600 font-medium transition"
            >
              Courses
            </Link>

            <Link
              to="/instructors"
              className="text-gray-700 hover:text-indigo-600 font-medium transition"
            >
              Instructors
            </Link>

            <Link
              to="/about"
              className="text-gray-700 hover:text-indigo-600 font-medium transition"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-gray-700 hover:text-indigo-600 font-medium transition"
            >
              Contact
            </Link>
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4">

            {/* Search */}
            <button className="p-2.5 rounded-lg hover:bg-gray-100 transition">
              <FiSearch size={20} className="text-gray-700" />
            </button>

            {/* Login */}
            <Link
              to="/login"
              className="px-5 py-2.5 text-gray-700 font-semibold hover:text-indigo-600 transition"
            >
              Login
            </Link>

            {/* Get Started */}
            <Link
              to="/register"
              className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 text-gray-700"
          >
            {menuOpen ? <FiX size={25} /> : <FiMenu size={25} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden py-5 border-t border-gray-100">

            <div className="flex flex-col gap-4">

              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium hover:text-indigo-600"
              >
                Home
              </Link>

              <Link
                to="/courses"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium hover:text-indigo-600"
              >
                Courses
              </Link>

              <Link
                to="/instructors"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium hover:text-indigo-600"
              >
                Instructors
              </Link>

              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium hover:text-indigo-600"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 font-medium hover:text-indigo-600"
              >
                Contact
              </Link>

              <div className="flex gap-3 pt-3 border-t border-gray-100">

                <Link
                  to="/login"
                  className="flex-1 text-center px-4 py-2.5 border border-gray-200 rounded-lg font-semibold"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="flex-1 text-center px-4 py-2.5 bg-indigo-600 text-white rounded-lg font-semibold"
                >
                  Get Started
                </Link>

              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;