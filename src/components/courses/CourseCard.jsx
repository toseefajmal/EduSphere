import React from "react";

const CourseCard = ({
  image,
  title,
  instructor,
  rating = 4.8,
  students = "2.5K",
  price = "$49",
  oldPrice = "$79",
  category,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-indigo-100 hover:shadow-2xl">

      {/* ================= IMAGE ================= */}
      <div className="relative h-56 overflow-hidden bg-slate-100">

        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent opacity-60" />

        {/* Category */}
        {category && (
          <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/90 px-3.5 py-1.5 text-xs font-bold text-indigo-600 shadow-lg backdrop-blur-md">
            {category}
          </span>
        )}

        {/* Rating Badge */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-slate-950/80 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
          <span className="text-yellow-400">★</span>
          {rating}
        </div>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="p-5">

        {/* Title */}
        <h3 className="line-clamp-2 min-h-[56px] text-lg font-bold leading-7 text-slate-900 transition-colors duration-300 group-hover:text-indigo-600">
          {title}
        </h3>

        {/* Instructor */}
        <div className="mt-4 flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-100 text-xs font-bold text-indigo-600">
            {instructor?.charAt(0)}
          </div>

          <div>
            <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
              Instructor
            </p>

            <p className="text-sm font-semibold text-slate-700">
              {instructor}
            </p>
          </div>
        </div>

        {/* Rating / Students */}
        <div className="mt-5 flex items-center justify-between border-y border-slate-100 py-3">

          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900">
              {rating}
            </span>

            <div className="flex text-sm tracking-tight text-yellow-400">
              ★★★★★
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>

            {students} students
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="mt-5 flex items-center justify-between gap-4">

          {/* Price */}
          <div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-tight text-slate-900">
                {price}
              </span>

              {oldPrice && (
                <span className="text-sm font-medium text-slate-400 line-through">
                  {oldPrice}
                </span>
              )}
            </div>

            <p className="mt-0.5 text-[11px] font-medium text-emerald-600">
              Limited time offer
            </p>
          </div>

          {/* Button */}
          <button
            type="button"
            className="group/btn flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-3 text-sm font-bold text-white shadow-md shadow-indigo-200 transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200"
          >
            View Course

            <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
              →
            </span>
          </button>

        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-indigo-600 transition-all duration-500 group-hover:w-full" />

    </div>
  );
};

export default CourseCard;