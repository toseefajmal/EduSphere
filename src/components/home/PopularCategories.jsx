import React from "react";
import { motion } from "framer-motion";
import {
  FiCode,
  FiPenTool,
  FiTrendingUp,
  FiBriefcase,
  FiCamera,
  FiMusic,
  FiActivity,
  FiDatabase,
  FiArrowRight,
} from "react-icons/fi";

import {
  SlideLeft,
  SlideRight,
  SlideUp,
  SlideBottom,
} from "../../utility/Animation.js";

const categories = [
  {
    id: 1,
    title: "Development",
    courses: "120+ Courses",
    image: "/1.png",
    icon: FiCode,
  },
  {
    id: 2,
    title: "UI/UX Design",
    courses: "85+ Courses",
    image: "/2.png",
    icon: FiPenTool,
  },
  {
    id: 3,
    title: "Digital Marketing",
    courses: "70+ Courses",
    image: "/3.png",
    icon: FiTrendingUp,
  },
  {
    id: 4,
    title: "Business",
    courses: "95+ Courses",
    image: "/4.png",
    icon: FiBriefcase,
  },
  {
    id: 5,
    title: "Photography",
    courses: "55+ Courses",
    image: "/5.png",
    icon: FiCamera,
  },
  {
    id: 6,
    title: "Music & Audio",
    courses: "45+ Courses",
    image: "/6.png",
    icon: FiMusic,
  },
  {
    id: 7,
    title: "Health & Fitness",
    courses: "60+ Courses",
    image: "/1.png",
    icon: FiActivity,
  },
  {
    id: 8,
    title: "Data Science",
    courses: "75+ Courses",
    image: "/2.png",
    icon: FiDatabase,
  },
];

const PopularCategories = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">

      {/* Background Decoration */}
      <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-indigo-50 blur-3xl" />
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <motion.div
            variants={SlideLeft(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-2xl"
          >
            {/* Badge */}
            <motion.span
              variants={SlideRight(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600"
            >
              Explore Categories
            </motion.span>

            {/* Heading */}
            <motion.h2
              variants={SlideUp(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              Learn by
              <span className="text-indigo-600"> Category.</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={SlideBottom(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="mt-4 text-base leading-7 text-slate-600 sm:text-lg"
            >
              Choose from our most popular learning categories and discover
              courses designed to help you build valuable skills.
            </motion.p>
          </motion.div>

          {/* View All Button */}
          <motion.button
            variants={SlideRight(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            type="button"
            className="group flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:text-indigo-600"
          >
            View All Categories

            <FiArrowRight
              size={17}
              className="transition group-hover:translate-x-1"
            />
          </motion.button>

        </div>

        {/* ================= CATEGORIES GRID ================= */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.id}
                variants={
                  index % 2 === 0
                    ? SlideLeft(0.2 + index * 0.08)
                    : SlideRight(0.2 + index * 0.08)
                }
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-200/70"
              >

                {/* Image */}
                <div className="relative h-48 overflow-hidden">

                  <img
                    src={category.image}
                    alt={category.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />

                  {/* Icon */}
                  <motion.div
                    whileHover={{
                      scale: 1.12,
                      rotate: 5,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-indigo-600 shadow-lg backdrop-blur"
                  >
                    <Icon size={20} />
                  </motion.div>

                  {/* Course Count */}
                  <div className="absolute bottom-4 left-4 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 backdrop-blur">
                    {category.courses}
                  </div>

                </div>

                {/* Content */}
                <div className="flex items-center justify-between p-5">

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 transition group-hover:text-indigo-600">
                      {category.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      Start learning today
                    </p>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    whileHover={{
                      x: 4,
                      scale: 1.1,
                    }}
                    transition={{ duration: 0.2 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 transition group-hover:bg-indigo-50"
                  >
                    <FiArrowRight
                      size={17}
                      className="text-slate-500 transition group-hover:text-indigo-600"
                    />
                  </motion.div>

                </div>

              </motion.div>
            );
          })}

        </div>

        {/* ================= BOTTOM STATS ================= */}
        <motion.div
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-14 grid grid-cols-2 gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:grid-cols-4 sm:p-8"
        >

          {/* Stat 1 */}
          <motion.div
            variants={SlideBottom(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              25+
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Learning Categories
            </p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            variants={SlideBottom(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              1,200+
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Online Courses
            </p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            variants={SlideBottom(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              150+
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Expert Instructors
            </p>
          </motion.div>

          {/* Stat 4 */}
          <motion.div
            variants={SlideBottom(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              50K+
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Happy Learners
            </p>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default PopularCategories;