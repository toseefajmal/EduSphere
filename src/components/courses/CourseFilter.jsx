import React from "react";

const CourseFilter = ({
  sortBy,
  setSortBy,
  priceFilter,
  setPriceFilter,
}) => {
  return (
    <div className="grid w-full gap-4 sm:grid-cols-2">

      {/* ================= SORT BY ================= */}
      <div className="group">
        <div className="mb-3 flex items-center justify-between">
          <label className="text-sm font-bold text-slate-800">
            Sort Courses
          </label>

          <span className="text-xs font-medium text-slate-400">
            Order
          </span>
        </div>

        <div className="relative">

          {/* Icon */}
          <div className="pointer-events-none absolute left-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 transition duration-300 group-focus-within:bg-indigo-600 group-focus-within:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 6h18" />
              <path d="M6 12h12" />
              <path d="M10 18h4" />
            </svg>
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="h-14 w-full cursor-pointer appearance-none rounded-2xl border border-slate-200 bg-white pl-16 pr-12 text-sm font-semibold text-slate-700 shadow-sm outline-none transition-all duration-300 hover:border-indigo-300 hover:shadow-md focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          >
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>

          {/* Arrow */}
          <div className="pointer-events-none absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition duration-300 group-focus-within:bg-indigo-50 group-focus-within:text-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>

        </div>

        <div className="mt-2 flex items-center gap-2 px-1">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          <p className="text-xs text-slate-400">
            Choose how courses are displayed
          </p>
        </div>
      </div>

      {/* ================= PRICE ================= */}
      <div className="group">
        <div className="mb-3 flex items-center justify-between">
          <label className="text-sm font-bold text-slate-800">
            Course Price
          </label>

          <span className="text-xs font-medium text-slate-400">
            Pricing
          </span>
        </div>

        <div className="relative">

          {/* Icon */}
          <div className="pointer-events-none absolute left-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 transition duration-300 group-focus-within:bg-indigo-600 group-focus-within:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8" />
              <path d="M12 18V6" />
            </svg>
          </div>

          <select
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            className="h-14 w-full cursor-pointer appearance-none rounded-2xl border border-slate-200 bg-white pl-16 pr-12 text-sm font-semibold text-slate-700 shadow-sm outline-none transition-all duration-300 hover:border-indigo-300 hover:shadow-md focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
          >
            <option value="all">All Prices</option>
            <option value="free">Free Courses</option>
            <option value="paid">Paid Courses</option>
          </select>

          {/* Arrow */}
          <div className="pointer-events-none absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg bg-slate-50 text-slate-500 transition duration-300 group-focus-within:bg-indigo-50 group-focus-within:text-indigo-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>

        </div>

        <div className="mt-2 flex items-center gap-2 px-1">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
          <p className="text-xs text-slate-400">
            Filter courses by pricing
          </p>
        </div>
      </div>

    </div>
  );
};

export default CourseFilter;