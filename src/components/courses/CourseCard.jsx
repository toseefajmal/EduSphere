
import React from "react";
import {
  FiStar,
  FiClock,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";

const CourseCard = ({ course }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-indigo-600 shadow">
          {course.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="mb-2 line-clamp-2 text-lg font-bold text-slate-900">
          {course.title}
        </h3>

        <p className="mb-4 text-sm text-slate-500">
          By {course.instructor}
        </p>

        <div className="mb-4 flex items-center gap-4 text-sm text-slate-500">
          <span className="flex items-center gap-1">
            <FiStar className="text-yellow-500" />
            {course.rating}
          </span>

          <span className="flex items-center gap-1">
            <FiClock />
            {course.duration}
          </span>

          <span className="flex items-center gap-1">
            <FiUsers />
            {course.students}
          </span>
        </div>

        <div className="flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-xl font-bold text-indigo-600">
            ${course.price}
          </span>

          <button className="flex items-center gap-2 font-semibold text-slate-700 transition hover:text-indigo-600">
            View Course
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

