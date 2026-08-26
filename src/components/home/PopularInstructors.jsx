import React from "react";
import { motion } from "framer-motion";
import {
  FiStar,
  FiUsers,
  FiArrowRight,
  FiAward,
} from "react-icons/fi";

import {
  SlideLeft,
  SlideRight,
  SlideUp,
  SlideBottom,
} from "../../utility/animation.js";

const instructors = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior React Developer",
    image: "/sarah.png",
    rating: "4.9",
    students: "18.5K",
    courses: 12,
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "UI/UX Design Expert",
    image: "/michael.png",
    rating: "4.8",
    students: "14.2K",
    courses: 9,
  },
  {
    id: 3,
    name: "David Wilson",
    role: "JavaScript Instructor",
    image: "/david.png",
    rating: "4.9",
    students: "21.3K",
    courses: 15,
  },
  {
    id: 4,
    name: "Emma Davis",
    role: "Digital Marketing Expert",
    image: "/emma.png",
    rating: "4.8",
    students: "11.7K",
    courses: 8,
  },
];

const PopularInstructors = () => {
  return (
    <section className="bg-slate-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

          {/* Header Content */}
          <motion.div
            variants={SlideLeft(0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            {/* Badge */}
            <motion.span
              variants={SlideRight(0.3)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600"
            >
              <FiAward />
              Expert Instructors
            </motion.span>

            {/* Heading */}
            <motion.h2
              variants={SlideUp(0.4)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              Learn From{" "}
              <span className="text-indigo-600">
                Top Instructors
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={SlideBottom(0.5)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="mt-4 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg"
            >
              Meet our experienced instructors and learn from professionals
              who are passionate about helping students succeed.
            </motion.p>
          </motion.div>

          {/* View All Button */}
          <motion.button
            variants={SlideRight(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            type="button"
            className="group flex w-fit items-center gap-2 font-semibold text-indigo-600 transition hover:text-indigo-800"
          >
            View All Instructors

            <FiArrowRight
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.button>

        </div>

        {/* ================= INSTRUCTOR GRID ================= */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

          {instructors.map((instructor, index) => (
            <motion.div
              key={instructor.id}
              variants={
                index % 2 === 0
                  ? SlideLeft(0.2 + index * 0.1)
                  : SlideRight(0.2 + index * 0.1)
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
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-xl"
            >

              {/* ================= INSTRUCTOR IMAGE ================= */}
              <motion.div
                variants={SlideUp(0.3 + index * 0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                className="relative mx-auto mb-5 h-32 w-32"
              >
                {/* Image Background */}
                <motion.div
                  whileHover={{
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 rounded-full bg-indigo-100"
                />

                {/* Instructor Image */}
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="relative h-full w-full rounded-full object-cover ring-4 ring-white"
                />

                {/* Verified Badge */}
                <motion.div
                  whileHover={{
                    scale: 1.15,
                    rotate: 10,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white ring-4 ring-white"
                >
                  <FiAward size={15} />
                </motion.div>
              </motion.div>

              {/* ================= NAME ================= */}
              <motion.h3
                variants={SlideUp(0.4 + index * 0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                className="text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600"
              >
                {instructor.name}
              </motion.h3>

              {/* Role */}
              <p className="mt-1 text-sm font-medium text-slate-500">
                {instructor.role}
              </p>

              {/* ================= RATING ================= */}
              <motion.div
                variants={SlideUp(0.5 + index * 0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                className="mt-4 flex items-center justify-center gap-2"
              >
                <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1">
                  <FiStar
                    className="fill-yellow-400 text-yellow-400"
                    size={15}
                  />

                  <span className="text-sm font-bold text-slate-800">
                    {instructor.rating}
                  </span>
                </div>
              </motion.div>

              {/* ================= STATS ================= */}
              <motion.div
                variants={SlideBottom(0.5 + index * 0.08)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.15 }}
                className="mt-5 grid grid-cols-2 divide-x divide-slate-200 border-y border-slate-100 py-4"
              >

                {/* Students */}
                <div>
                  <div className="flex items-center justify-center gap-1 text-lg font-bold text-slate-900">
                    <FiUsers
                      className="text-indigo-600"
                      size={17}
                    />

                    {instructor.students}
                  </div>

                  <p className="mt-1 text-xs text-slate-400">
                    Students
                  </p>
                </div>

                {/* Courses */}
                <div>
                  <p className="text-lg font-bold text-slate-900">
                    {instructor.courses}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Courses
                  </p>
                </div>

              </motion.div>

              {/* ================= PROFILE BUTTON ================= */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                type="button"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white"
              >
                View Profile

                <FiArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </motion.button>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default PopularInstructors;