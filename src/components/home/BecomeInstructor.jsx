import React from "react";
import { motion } from "framer-motion";
import {
  SlideLeft,
  SlideRight,
  SlideUp,
  SlideBottom,
} from "../../utility/animation.js";

const BecomeInstructor = () => {
  return (
    <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-600 via-indigo-700 to-purple-700 px-6 py-12 shadow-2xl sm:px-10 lg:px-16 lg:py-16">

          {/* Decorative Shapes */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-purple-400/20 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-2">

            {/* Left Content */}
            <motion.div
              variants={SlideLeft(0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="text-center lg:text-left"
            >

              {/* Badge */}
              <motion.span
                variants={SlideRight(0.3)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm"
              >
                Become an Instructor
              </motion.span>

              {/* Heading */}
              <h2 className="mt-6 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                Share Your Knowledge.
                <span className="block text-indigo-200">
                  Inspire Thousands.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-6 max-w-xl text-base leading-7 text-indigo-100 sm:text-lg">
                Turn your expertise into an online course and help students
                around the world learn new skills, grow their careers, and
                achieve their goals.
              </p>

              {/* Benefits */}
              <motion.div
                variants={SlideUp(0.4)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="mt-8 grid gap-4 sm:grid-cols-2"
              >

                {/* Benefit 1 */}
                <div className="flex items-center gap-3 text-left">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lg text-white">
                    ✓
                  </div>

                  <span className="text-sm font-medium text-white">
                    Reach thousands of students
                  </span>
                </div>

                {/* Benefit 2 */}
                <div className="flex items-center gap-3 text-left">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lg text-white">
                    ✓
                  </div>

                  <span className="text-sm font-medium text-white">
                    Earn while you teach
                  </span>
                </div>

                {/* Benefit 3 */}
                <div className="flex items-center gap-3 text-left">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lg text-white">
                    ✓
                  </div>

                  <span className="text-sm font-medium text-white">
                    Create courses your way
                  </span>
                </div>

                {/* Benefit 4 */}
                <div className="flex items-center gap-3 text-left">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-lg text-white">
                    ✓
                  </div>

                  <span className="text-sm font-medium text-white">
                    Get instructor support
                  </span>
                </div>

              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                variants={SlideBottom(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="mt-9 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
              >

                <button
                  type="button"
                  className="rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-indigo-700 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-indigo-50"
                >
                  Start Teaching →
                </button>

                <button
                  type="button"
                  className="rounded-xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition duration-300 hover:bg-white/20"
                >
                  Learn More
                </button>

              </motion.div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              variants={SlideRight(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="relative mx-auto w-full max-w-md"
            >

              {/* Image Container */}
              <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">

                <div className="overflow-hidden rounded-[1.5rem] bg-white">
                  <img
                    src="/instructor.jpg"
                    alt="Become an Instructor"
                    className="h-[320px] w-full object-cover sm:h-[380px]"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

              </div>

              {/* Floating Instructor Card */}
              <motion.div
                variants={SlideUp(0.6)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="absolute -bottom-5 -left-5 rounded-2xl bg-white p-4 shadow-xl sm:-left-8"
              >
                <div className="flex items-center gap-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-100 text-xl">
                    🎓
                  </div>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      10K+
                    </p>

                    <p className="text-xs text-slate-500">
                      Active Instructors
                    </p>
                  </div>

                </div>
              </motion.div>

              {/* Floating Rating Card */}
              <motion.div
                variants={SlideRight(0.7)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className="absolute -right-4 top-8 rounded-2xl bg-white px-4 py-3 shadow-xl sm:-right-7"
              >
                <div className="flex items-center gap-2">

                  <span className="text-lg text-yellow-400">
                    ★
                  </span>

                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      4.9/5
                    </p>

                    <p className="text-xs text-slate-500">
                      Instructor Rating
                    </p>
                  </div>

                </div>
              </motion.div>

            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default BecomeInstructor;