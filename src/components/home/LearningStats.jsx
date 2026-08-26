import React from "react";
import { motion } from "framer-motion";
import {
  FiUsers,
  FiBookOpen,
  FiAward,
  FiGlobe,
  FiTrendingUp,
} from "react-icons/fi";

import {
  SlideLeft,
  SlideRight,
  SlideUp,
  SlideBottom,
} from "../../utility/animation.js";

const stats = [
  {
    id: 1,
    icon: FiUsers,
    value: "50K+",
    label: "Active Students",
    description: "Learners growing every day",
  },
  {
    id: 2,
    icon: FiBookOpen,
    value: "1,200+",
    label: "Online Courses",
    description: "Courses across multiple categories",
  },
  {
    id: 3,
    icon: FiAward,
    value: "850+",
    label: "Expert Instructors",
    description: "Industry professionals teaching",
  },
  {
    id: 4,
    icon: FiGlobe,
    value: "120+",
    label: "Countries Reached",
    description: "Learning without boundaries",
  },
];

const LearningStats = () => {
  return (
    <section className="relative overflow-hidden bg-indigo-600 px-4 py-20 sm:px-6 lg:px-8">

      {/* Background Decorations */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-purple-900/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADING ================= */}
        <motion.div
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <motion.span
            variants={SlideLeft(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-indigo-100"
          >
            <FiTrendingUp />
            Our Learning Impact
          </motion.span>

          {/* Heading */}
          <motion.h2
            variants={SlideRight(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            Learning That Makes a{" "}
            <span className="text-indigo-200">
              Difference
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={SlideBottom(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-indigo-100 sm:text-lg"
          >
            Thousands of learners are building new skills, advancing their
            careers and achieving their goals with EduSphere.
          </motion.p>
        </motion.div>

        {/* ================= STATS ================= */}
        <div className="mt-14 grid overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={stat.id}
                variants={
                  index % 2 === 0
                    ? SlideLeft(0.2 + index * 0.1)
                    : SlideRight(0.2 + index * 0.1)
                }
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                className={`group relative px-6 py-10 text-center transition duration-300 hover:bg-white/10 ${
                  index !== stats.length - 1
                    ? "border-b border-white/20 lg:border-b-0 lg:border-r"
                    : ""
                } ${
                  index === 1
                    ? "sm:border-r sm:border-white/20 lg:border-r"
                    : ""
                }`}
              >

                {/* Icon */}
                <motion.div
                  whileHover={{
                    scale: 1.12,
                    rotate: 5,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white transition duration-300 group-hover:bg-white group-hover:text-indigo-600"
                >
                  <Icon size={29} />
                </motion.div>

                {/* Number */}
                <h3 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
                  {stat.value}
                </h3>

                {/* Label */}
                <p className="mt-3 text-lg font-bold text-white">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="mx-auto mt-2 max-w-[190px] text-sm leading-6 text-indigo-100">
                  {stat.description}
                </p>

                {/* Bottom Accent */}
                <motion.div
                  initial={{ width: "2rem" }}
                  whileHover={{ width: "4rem" }}
                  transition={{ duration: 0.3 }}
                  className="mx-auto mt-6 h-1 rounded-full bg-white/40 group-hover:bg-white"
                />

              </motion.div>
            );
          })}

        </div>

        {/* ================= BOTTOM MESSAGE ================= */}
        <motion.div
          variants={SlideUp(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-12 flex flex-col items-center justify-center gap-3 text-center sm:flex-row"
        >

          {/* Avatar Group */}
          <div className="flex -space-x-3">

            <motion.div
              whileHover={{ y: -5 }}
              className="h-10 w-10 rounded-full border-2 border-indigo-600 bg-slate-200"
            />

            <motion.div
              whileHover={{ y: -5 }}
              className="h-10 w-10 rounded-full border-2 border-indigo-600 bg-slate-300"
            />

            <motion.div
              whileHover={{ y: -5 }}
              className="h-10 w-10 rounded-full border-2 border-indigo-600 bg-slate-400"
            />

            <motion.div
              whileHover={{ y: -5, scale: 1.05 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-600 bg-white text-xs font-bold text-indigo-600"
            >
              +K
            </motion.div>

          </div>

          {/* Message */}
          <p className="text-sm font-medium text-indigo-100">
            Join thousands of students already learning with EduSphere.
          </p>

        </motion.div>

      </div>
    </section>
  );
};

export default LearningStats;