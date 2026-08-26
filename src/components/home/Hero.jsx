import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPlay, FiCheckCircle } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Background Decoration */}
      <div className="absolute -top-24 -right-24 w-80 h-80 bg-indigo-100 rounded-full blur-3xl opacity-60" />
      <div className="absolute -bottom-32 -left-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="min-h-[calc(100vh-80px)] flex items-center py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

            {/* Left Content */}
            <div>
              {/* Small Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full mb-6">
                <span className="w-2 h-2 bg-indigo-600 rounded-full" />

                <span className="text-sm font-semibold text-indigo-600">
                  Learn Without Limits
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-slate-900">
                Learn Skills.
                <span className="block text-indigo-600">
                  Build Your Future.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 text-lg text-slate-600 leading-8 max-w-xl">
                Discover high-quality courses taught by industry experts.
                Learn at your own pace, build practical skills, and take
                your career to the next level.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition duration-200 shadow-lg shadow-indigo-200"
                >
                  Explore Courses
                  <FiArrowRight size={19} />
                </Link>

                <button
                  className="inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-white border border-slate-200 text-slate-800 rounded-xl font-semibold hover:border-indigo-300 hover:text-indigo-600 transition duration-200"
                >
                  <span className="w-9 h-9 rounded-full bg-indigo-50 flex items-center justify-center">
                    <FiPlay
                      size={16}
                      className="ml-0.5 text-indigo-600"
                    />
                  </span>

                  Watch Demo
                </button>
              </div>

              {/* Benefits */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8">
                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-indigo-600" />

                  <span className="text-sm text-slate-600">
                    Expert Instructors
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-indigo-600" />

                  <span className="text-sm text-slate-600">
                    Lifetime Access
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <FiCheckCircle className="text-indigo-600" />

                  <span className="text-sm text-slate-600">
                    Learn Anywhere
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="relative">
              {/* Main Card */}
              <div className="relative max-w-lg mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 p-4">

                  {/* Image */}
                  <div className="relative h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden bg-indigo-100">
                    <img
                      src="/hero.png"
                      alt="Students learning together"
                      className="w-full h-full object-cover"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-white text-sm font-medium">
                        Start learning today
                      </p>

                      <p className="text-white/80 text-xs mt-1">
                        Learn from experts around the world
                      </p>
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs text-indigo-600 font-semibold uppercase">
                          Featured Course
                        </p>

                        <h3 className="mt-1 text-lg font-bold text-slate-900">
                          Complete Web Development
                        </h3>
                      </div>

                      <div className="w-12 h-12 shrink-0 rounded-xl bg-indigo-50 flex items-center justify-center">
                        <span className="text-indigo-600 font-bold">
                          4.9
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4 text-sm text-slate-500">
                      <span>120+ Lessons</span>
                      <span>18K+ Students</span>
                    </div>
                  </div>
                </div>

                {/* Floating Student Card */}
                <div className="absolute -left-5 sm:-left-10 bottom-10 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <img
                      src="https://i.pravatar.cc/100?img=12"
                      alt="Student"
                      className="w-9 h-9 rounded-full border-2 border-white"
                    />

                    <img
                      src="https://i.pravatar.cc/100?img=32"
                      alt="Student"
                      className="w-9 h-9 rounded-full border-2 border-white"
                    />

                    <img
                      src="https://i.pravatar.cc/100?img=47"
                      alt="Student"
                      className="w-9 h-9 rounded-full border-2 border-white"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      50K+
                    </p>

                    <p className="text-xs text-slate-500">
                      Happy Learners
                    </p>
                  </div>
                </div>

                {/* Floating Rating Card */}
                <div className="absolute -right-3 sm:-right-8 top-10 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-yellow-50 flex items-center justify-center">
                      ⭐
                    </div>

                    <div>
                      <p className="text-sm font-bold text-slate-900">
                        4.9/5
                      </p>

                      <p className="text-xs text-slate-500">
                        Course Rating
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;