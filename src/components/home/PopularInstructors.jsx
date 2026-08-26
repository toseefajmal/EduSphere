
import React from "react";
import {
  FiStar,
  FiUsers,
  FiArrowRight,
  FiAward,
} from "react-icons/fi";

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

        {/* Header */}
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-600">
              <FiAward />
              Expert Instructors
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Learn From{" "}
              <span className="text-indigo-600">Top Instructors</span>
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              Meet our experienced instructors and learn from professionals
              who are passionate about helping students succeed.
            </p>
          </div>

          <button className="group flex w-fit items-center gap-2 font-semibold text-indigo-600 transition hover:text-indigo-800">
            View All Instructors
            <FiArrowRight
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        {/* Instructor Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor) => (
            <div
              key={instructor.id}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Instructor Image */}
              <div className="relative mx-auto mb-5 h-32 w-32">
                <div className="absolute inset-0 rounded-full bg-indigo-100 transition duration-300 group-hover:scale-110" />

                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="relative h-full w-full rounded-full object-cover ring-4 ring-white"
                />

                {/* Verified Badge */}
                <div className="absolute bottom-1 right-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white ring-4 ring-white">
                  <FiAward size={15} />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-indigo-600">
                {instructor.name}
              </h3>

              {/* Role */}
              <p className="mt-1 text-sm font-medium text-slate-500">
                {instructor.role}
              </p>

              {/* Rating */}
              <div className="mt-4 flex items-center justify-center gap-2">
                <div className="flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1">
                  <FiStar className="fill-yellow-400 text-yellow-400" size={15} />

                  <span className="text-sm font-bold text-slate-800">
                    {instructor.rating}
                  </span>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-5 grid grid-cols-2 divide-x divide-slate-200 border-y border-slate-100 py-4">
                <div>
                  <div className="flex items-center justify-center gap-1 text-lg font-bold text-slate-900">
                    <FiUsers className="text-indigo-600" size={17} />
                    {instructor.students}
                  </div>

                  <p className="mt-1 text-xs text-slate-400">
                    Students
                  </p>
                </div>

                <div>
                  <p className="text-lg font-bold text-slate-900">
                    {instructor.courses}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">
                    Courses
                  </p>
                </div>
              </div>

              {/* Button */}
              <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 py-3 text-sm font-semibold text-slate-700 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                View Profile
                <FiArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularInstructors;
