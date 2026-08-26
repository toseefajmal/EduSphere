
import React from "react";
import {
  FiUsers,
  FiBookOpen,
  FiAward,
  FiGlobe,
  FiTrendingUp,
} from "react-icons/fi";

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

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-indigo-100">
            <FiTrendingUp />
            Our Learning Impact
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Learning That Makes a{" "}
            <span className="text-indigo-200">Difference</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-indigo-100 sm:text-lg">
            Thousands of learners are building new skills, advancing their
            careers and achieving their goals with EduSphere.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-14 grid overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.id}
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
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white transition duration-300 group-hover:scale-110 group-hover:bg-white group-hover:text-indigo-600">
                  <Icon size={29} />
                </div>

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
                <div className="mx-auto mt-6 h-1 w-8 rounded-full bg-white/40 transition-all duration-300 group-hover:w-16 group-hover:bg-white" />
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <div className="flex -space-x-3">
            <div className="h-10 w-10 rounded-full border-2 border-indigo-600 bg-slate-200" />
            <div className="h-10 w-10 rounded-full border-2 border-indigo-600 bg-slate-300" />
            <div className="h-10 w-10 rounded-full border-2 border-indigo-600 bg-slate-400" />
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-indigo-600 bg-white text-xs font-bold text-indigo-600">
              +K
            </div>
          </div>

          <p className="text-sm font-medium text-indigo-100">
            Join thousands of students already learning with EduSphere.
          </p>
        </div>

      </div>
    </section>
  );
};

export default LearningStats;

