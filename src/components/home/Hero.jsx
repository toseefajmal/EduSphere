import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowRight,
  FiPlay,
  FiCheckCircle,
} from "react-icons/fi";

import {
  SlideLeft,
  SlideRight,
  SlideUp,
  SlideBottom,
} from "../../utility/Animation.js";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50">

      {/* Background Decoration */}
      <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-indigo-100 opacity-60 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-blue-100 opacity-60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex min-h-[calc(100vh-80px)] items-center py-16 lg:py-20">

          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">

            {/* ================= LEFT CONTENT ================= */}
            <motion.div
              variants={SlideLeft(0.2)}
              initial="hidden"
              animate="visible"
              className="text-center lg:text-left"
            >

              {/* Small Badge */}
              <motion.div
                variants={SlideRight(0.3)}
                initial="hidden"
                animate="visible"
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2"
              >
                <span className="h-2 w-2 rounded-full bg-indigo-600" />

                <span className="text-sm font-semibold text-indigo-600">
                  Learn Without Limits
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h1
                variants={SlideLeft(0.4)}
                initial="hidden"
                animate="visible"
                className="text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl"
              >
                Learn Skills.
                <span className="block text-indigo-600">
                  Build Your Future.
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                variants={SlideUp(0.5)}
                initial="hidden"
                animate="visible"
                className="mt-6 max-w-xl text-lg leading-8 text-slate-600 lg:mx-0"
              >
                Discover high-quality courses taught by industry experts.
                Learn at your own pace, build practical skills, and take
                your career to the next level.
              </motion.p>

              {/* Buttons */}
              <motion.div
                variants={SlideBottom(0.6)}
                initial="hidden"
                animate="visible"
                className="mt-8 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
              >
                <Link
                  to="/courses"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-indigo-200 transition duration-200 hover:bg-indigo-700"
                >
                  Explore Courses
                  <FiArrowRight size={19} />
                </Link>

                <button
                  type="button"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-800 transition duration-200 hover:border-indigo-300 hover:text-indigo-600"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-50">
                    <FiPlay
                      size={16}
                      className="ml-0.5 text-indigo-600"
                    />
                  </span>

                  Watch Demo
                </button>
              </motion.div>

              {/* Benefits */}
              <motion.div
                variants={SlideUp(0.7)}
                initial="hidden"
                animate="visible"
                className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start"
              >
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
              </motion.div>
            </motion.div>

            {/* ================= RIGHT CONTENT ================= */}
            <motion.div
              variants={SlideRight(0.4)}
              initial="hidden"
              animate="visible"
              className="relative"
            >

              {/* Main Card */}
              <motion.div
                variants={SlideUp(0.5)}
                initial="hidden"
                animate="visible"
                className="relative mx-auto max-w-lg"
              >

                <div className="rounded-3xl border border-slate-100 bg-white p-4 shadow-2xl shadow-slate-200">

                  {/* Image */}
                  <div className="relative h-72 overflow-hidden rounded-2xl bg-indigo-100 sm:h-80 lg:h-96">

                    <img
                      src="/hero.png"
                      alt="Students learning together"
                      className="h-full w-full object-cover transition duration-700 hover:scale-105"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 right-5">
                      <p className="text-sm font-medium text-white">
                        Start learning today
                      </p>

                      <p className="mt-1 text-xs text-white/80">
                        Learn from experts around the world
                      </p>
                    </div>
                  </div>

                  {/* Course Info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-4">

                      <div>
                        <p className="text-xs font-semibold uppercase text-indigo-600">
                          Featured Course
                        </p>

                        <h3 className="mt-1 text-lg font-bold text-slate-900">
                          Complete Web Development
                        </h3>
                      </div>

                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50">
                        <span className="font-bold text-indigo-600">
                          4.9
                        </span>
                      </div>

                    </div>

                    <div className="mt-4 flex items-center justify-between text-sm text-slate-500">
                      <span>120+ Lessons</span>
                      <span>18K+ Students</span>
                    </div>
                  </div>

                </div>

                {/* ================= FLOATING STUDENT CARD ================= */}
                <motion.div
                  variants={SlideLeft(0.8)}
                  initial="hidden"
                  animate="visible"
                  className="absolute -bottom-5 -left-5 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-xl sm:-left-10"
                >
                  <div className="flex -space-x-2">

                    <img
                      src="https://i.pravatar.cc/100?img=12"
                      alt="Student"
                      className="h-9 w-9 rounded-full border-2 border-white"
                    />

                    <img
                      src="https://i.pravatar.cc/100?img=32"
                      alt="Student"
                      className="h-9 w-9 rounded-full border-2 border-white"
                    />

                    <img
                      src="https://i.pravatar.cc/100?img=47"
                      alt="Student"
                      className="h-9 w-9 rounded-full border-2 border-white"
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
                </motion.div>

                {/* ================= FLOATING RATING CARD ================= */}
                <motion.div
                  variants={SlideRight(0.9)}
                  initial="hidden"
                  animate="visible"
                  className="absolute -right-3 top-10 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-xl sm:-right-8"
                >
                  <div className="flex items-center gap-2">

                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-yellow-50">
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
                </motion.div>

              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;