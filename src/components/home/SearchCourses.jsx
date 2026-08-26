import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiSearch,
  FiFilter,
  FiStar,
  FiClock,
  FiUsers,
  FiArrowRight,
  FiChevronDown,
  FiBookOpen,
} from "react-icons/fi";

import {
  SlideLeft,
  SlideRight,
  SlideUp,
  SlideBottom,
} from "../../utility/Animation.js";

const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "John Smith",
    category: "Development",
    level: "Beginner",
    rating: 4.9,
    students: "18K+",
    lessons: "120 Lessons",
    duration: "42 Hours",
    price: "$49",
    image: "/1.png",
    color: "indigo",
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    instructor: "Sarah Wilson",
    category: "Design",
    level: "Intermediate",
    rating: 4.8,
    students: "12K+",
    lessons: "86 Lessons",
    duration: "28 Hours",
    price: "$39",
    image: "/2.png",
    color: "purple",
  },
  {
    id: 3,
    title: "React JS From Zero to Advanced",
    instructor: "Alex Johnson",
    category: "Development",
    level: "Advanced",
    rating: 4.9,
    students: "15K+",
    lessons: "105 Lessons",
    duration: "36 Hours",
    price: "$59",
    image: "/3.png",
    color: "blue",
  },
  {
    id: 4,
    title: "Digital Marketing Complete Course",
    instructor: "Emily Davis",
    category: "Marketing",
    level: "Beginner",
    rating: 4.7,
    students: "9K+",
    lessons: "72 Lessons",
    duration: "24 Hours",
    price: "$35",
    image: "/4.png",
    color: "pink",
  },
  {
    id: 5,
    title: "Python Programming for Beginners",
    instructor: "Michael Brown",
    category: "Development",
    level: "Beginner",
    rating: 4.8,
    students: "21K+",
    lessons: "95 Lessons",
    duration: "31 Hours",
    price: "$45",
    image: "/5.png",
    color: "cyan",
  },
  {
    id: 6,
    title: "Business & Leadership Skills",
    instructor: "David Miller",
    category: "Business",
    level: "Intermediate",
    rating: 4.6,
    students: "7K+",
    lessons: "64 Lessons",
    duration: "19 Hours",
    price: "$32",
    image: "/6.png",
    color: "emerald",
  },
];

const SearchCourses = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [level, setLevel] = useState("All Levels");
  const [showFilters, setShowFilters] = useState(false);

  const filteredCourses = courses.filter((course) => {
    const searchValue = search.toLowerCase().trim();

    const matchesSearch =
      course.title.toLowerCase().includes(searchValue) ||
      course.instructor.toLowerCase().includes(searchValue) ||
      course.category.toLowerCase().includes(searchValue);

    const matchesCategory =
      category === "All Categories" ||
      course.category === category;

    const matchesLevel =
      level === "All Levels" ||
      course.level === level;

    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">

      {/* ================= BACKGROUND DECORATION ================= */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-indigo-100/60 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-blue-100/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <motion.div
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >

          {/* Badge */}
          <motion.div
            variants={SlideRight(0.3)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white px-4 py-2 shadow-sm"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50">
              <FiBookOpen
                className="text-indigo-600"
                size={14}
              />
            </span>

            <span className="text-sm font-semibold text-indigo-600">
              Explore Our Courses
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={SlideLeft(0.4)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Learn Something

            <span className="block text-indigo-600">
              New Every Day.
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={SlideBottom(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg"
          >
            Discover carefully crafted courses taught by industry experts.
            Build real-world skills and take your career to the next level.
          </motion.p>

        </motion.div>

        {/* ================= SEARCH PANEL ================= */}
        <motion.div
          variants={SlideUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mx-auto mt-12 max-w-5xl"
        >
          <div className="rounded-3xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/60">

            <div className="flex flex-col gap-3 lg:flex-row">

              {/* Search */}
              <motion.div
                whileFocus={{ scale: 1.01 }}
                className="relative flex-1"
              >
                <FiSearch
                  size={21}
                  className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search courses, skills or instructors..."
                  className="h-14 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-13 pr-5 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50"
                />
              </motion.div>

              {/* Category */}
              <div className="relative">
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="h-14 w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50 px-5 pr-12 text-sm font-medium text-slate-700 outline-none transition focus:border-indigo-500 focus:bg-white lg:w-52"
                >
                  <option>All Categories</option>
                  <option>Development</option>
                  <option>Design</option>
                  <option>Marketing</option>
                  <option>Business</option>
                </select>

                <FiChevronDown
                  size={17}
                  className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
              </div>

              {/* Search Button */}
              <motion.button
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                type="button"
                className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-7 font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 hover:shadow-indigo-300"
              >
                <FiSearch size={18} />
                Search
              </motion.button>

            </div>
          </div>
        </motion.div>

        {/* ================= COURSE HEADER ================= */}
        <motion.div
          variants={SlideLeft(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-16 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
        >

          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Curated for you
            </p>

            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Popular Courses
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Showing {filteredCourses.length} of {courses.length} courses
            </p>
          </div>

          <div className="flex items-center gap-3">

            {/* Mobile Filter */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:text-indigo-600 sm:hidden"
            >
              <FiFilter size={17} />
              Filters
            </motion.button>

            {/* Level Filter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              className={`relative ${
                showFilters ? "block" : "hidden"
              } sm:block`}
            >
              <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                className="h-11 appearance-none rounded-xl border border-slate-200 bg-white px-4 pr-10 text-sm font-semibold text-slate-700 outline-none transition hover:border-indigo-200 focus:border-indigo-500"
              >
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>

              <FiChevronDown
                size={16}
                className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </motion.div>

          </div>
        </motion.div>

        {/* ================= COURSE GRID ================= */}
        <AnimatePresence mode="wait">

          {filteredCourses.length > 0 ? (

            <motion.div
              key="courses"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3"
            >

              {filteredCourses.map((course, index) => (

                <motion.div
                  key={course.id}
                  variants={
                    index % 2 === 0
                      ? SlideLeft(0.15 + index * 0.08)
                      : SlideRight(0.15 + index * 0.08)
                  }
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: false,
                    amount: 0.15,
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-indigo-200 hover:shadow-2xl hover:shadow-slate-200/70"
                >

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden bg-slate-100">

                    <motion.img
                      src={course.image}
                      alt={course.title}
                      whileHover={{
                        scale: 1.1,
                      }}
                      transition={{
                        duration: 0.7,
                      }}
                      className="h-full w-full object-cover"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-70" />

                    {/* Category Badge */}
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                      }}
                      className="absolute left-4 top-4 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-bold text-indigo-600 shadow-sm backdrop-blur"
                    >
                      {course.category}
                    </motion.div>

                    {/* Rating */}
                    <motion.div
                      whileHover={{
                        scale: 1.05,
                      }}
                      className="absolute right-4 top-4 flex items-center gap-1.5 rounded-lg bg-slate-950/70 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur"
                    >
                      <FiStar
                        size={13}
                        className="fill-yellow-400 text-yellow-400"
                      />

                      {course.rating}
                    </motion.div>

                  </div>

                  {/* Content */}
                  <div className="p-6">

                    {/* Level */}
                    <div className="flex items-center justify-between">

                      <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-600">
                        {course.level}
                      </span>

                      <span className="text-xs font-medium text-slate-400">
                        {course.lessons}
                      </span>

                    </div>

                    {/* Title */}
                    <h3 className="mt-4 min-h-[56px] text-lg font-bold leading-7 text-slate-900 transition group-hover:text-indigo-600">
                      {course.title}
                    </h3>

                    {/* Instructor */}
                    <p className="mt-2 text-sm text-slate-500">
                      Taught by{" "}
                      <span className="font-semibold text-slate-700">
                        {course.instructor}
                      </span>
                    </p>

                    {/* Stats */}
                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <FiClock
                          size={14}
                          className="text-indigo-500"
                        />

                        {course.duration}
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <FiUsers
                          size={14}
                          className="text-indigo-500"
                        />

                        {course.students}
                      </div>

                    </div>

                    {/* Bottom */}
                    <div className="mt-5 flex items-center justify-between">

                      <div>
                        <p className="text-xs text-slate-400">
                          Course Price
                        </p>

                        <span className="text-2xl font-bold text-slate-900">
                          {course.price}
                        </span>
                      </div>

                      <motion.button
                        whileHover={{
                          scale: 1.05,
                          x: 2,
                        }}
                        whileTap={{
                          scale: 0.96,
                        }}
                        type="button"
                        className="group/btn flex items-center gap-2 rounded-xl bg-indigo-50 px-4 py-2.5 text-sm font-semibold text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
                      >
                        View Course

                        <FiArrowRight
                          size={16}
                          className="transition group-hover/btn:translate-x-1"
                        />
                      </motion.button>

                    </div>
                  </div>

                </motion.div>

              ))}

            </motion.div>

          ) : (

            /* ================= EMPTY STATE ================= */
            <motion.div
              key="empty"
              variants={SlideUp(0.2)}
              initial="hidden"
              animate="visible"
              className="mt-10 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center"
            >

              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50"
              >
                <FiSearch
                  size={26}
                  className="text-indigo-600"
                />
              </motion.div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                No courses found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                We couldn't find any courses matching your search.
                Try another keyword or change your filters.
              </p>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() => {
                  setSearch("");
                  setCategory("All Categories");
                  setLevel("All Levels");
                }}
                className="mt-6 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Clear Filters
              </motion.button>

            </motion.div>

          )}

        </AnimatePresence>

        {/* ================= BOTTOM CTA ================= */}
        <motion.div
          variants={SlideBottom(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-14 flex justify-center"
        >
          <motion.button
            whileHover={{
              scale: 1.04,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            type="button"
            className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:text-indigo-600 hover:shadow-md"
          >
            View All Courses

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-50 transition group-hover:bg-indigo-100">
              <FiArrowRight
                size={15}
                className="text-indigo-600 transition group-hover:translate-x-0.5"
              />
            </span>
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
};

export default SearchCourses;