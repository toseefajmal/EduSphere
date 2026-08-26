import React from "react";
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

        {/* Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
              Explore Categories
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Learn by
              <span className="text-indigo-600"> Category.</span>
            </h2>

            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Choose from our most popular learning categories and discover
              courses designed to help you build valuable skills.
            </p>
          </div>

          <button
            type="button"
            className="group flex w-fit items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-200 hover:text-indigo-600"
          >
            View All Categories

            <FiArrowRight
              size={17}
              className="transition group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Categories Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-slate-200/70"
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
                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-indigo-600 shadow-lg backdrop-blur">
                    <Icon size={20} />
                  </div>

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

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-50 transition group-hover:bg-indigo-50">
                    <FiArrowRight
                      size={17}
                      className="text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-indigo-600"
                    />
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-14 grid grid-cols-2 gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:grid-cols-4 sm:p-8">

          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              25+
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Learning Categories
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              1,200+
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Online Courses
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              150+
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Expert Instructors
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              50K+
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              Happy Learners
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PopularCategories;