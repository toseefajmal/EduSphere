import React from "react";

const InstructorCard = ({
  image,
  name,
  role,
  students = "5.2K",
  courses = 12,
  rating = 4.9,
  bio,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-indigo-100 hover:shadow-[0_25px_60px_-15px_rgba(79,70,229,0.18)]">

      {/* ================= TOP GRADIENT ================= */}
      <div className="absolute inset-x-0 top-0 h-32 overflow-hidden">
        <div className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-indigo-100/70 blur-2xl transition duration-700 group-hover:bg-indigo-200/80" />

        <div className="absolute -left-10 top-10 h-28 w-28 rounded-full bg-purple-100/60 blur-2xl" />
      </div>

      {/* ================= PROFILE ================= */}
      <div className="relative text-center">

        {/* Avatar */}
        <div className="relative mx-auto h-32 w-32">

          {/* Animated Ring */}
          <div className="absolute -inset-2 rounded-full border border-indigo-100 transition-all duration-500 group-hover:border-indigo-300 group-hover:scale-105" />

          <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-indigo-600 via-purple-500 to-indigo-300 opacity-0 blur-sm transition duration-500 group-hover:opacity-70" />

          <div className="relative h-full w-full overflow-hidden rounded-full border-[5px] border-white bg-slate-100 shadow-xl">
            <img
              src={image}
              alt={name}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
          </div>

          {/* Verified Badge */}
          <div className="absolute bottom-1 right-0 flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-white bg-indigo-600 text-sm font-bold text-white shadow-lg">
            ✓
          </div>
        </div>

        {/* Name */}
        <h3 className="mt-7 text-xl font-extrabold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-indigo-600">
          {name}
        </h3>

        {/* Role */}
        <p className="mt-1 text-sm font-semibold text-indigo-600">
          {role}
        </p>

        {/* Bio */}
        <p className="mx-auto mt-3 min-h-[48px] max-w-xs text-sm leading-6 text-slate-500">
          {bio ||
            "Expert instructor helping students build practical skills and achieve their career goals."}
        </p>
      </div>

      {/* ================= RATING ================= */}
      <div className="mt-6 flex items-center justify-center">

        <div className="flex items-center gap-2 rounded-full border border-slate-100 bg-slate-50 px-4 py-2">

          <div className="flex gap-0.5 text-sm text-yellow-400">
            ★★★★★
          </div>

          <span className="text-sm font-bold text-slate-900">
            {rating}
          </span>

          <span className="text-xs text-slate-400">
            Rating
          </span>
        </div>

      </div>

      {/* ================= STATS ================= */}
      <div className="mt-6 grid grid-cols-3 rounded-2xl border border-slate-100 bg-slate-50/80 py-4">

        {/* Courses */}
        <div className="text-center">
          <p className="text-lg font-extrabold text-slate-900">
            {courses}
          </p>

          <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Courses
          </p>
        </div>

        <div className="border-x border-slate-200 text-center">
          <p className="text-lg font-extrabold text-slate-900">
            {students}
          </p>

          <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Students
          </p>
        </div>

        {/* Rating */}
        <div className="text-center">
          <p className="text-lg font-extrabold text-slate-900">
            {rating}
          </p>

          <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
            Rating
          </p>
        </div>

      </div>

      {/* ================= BUTTON ================= */}
      <button
        type="button"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition-all duration-300 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white hover:shadow-lg hover:shadow-indigo-200"
      >
        View Instructor Profile

        <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>

      {/* ================= BOTTOM ACCENT ================= */}
      <div className="absolute bottom-0 left-1/2 h-1 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 group-hover:w-2/3" />

    </div>
  );
};

export default InstructorCard;