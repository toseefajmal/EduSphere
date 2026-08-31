import React from "react";

const categories = [
  "All Categories",
  "Development",
  "Design",
  "Business",
  "Marketing",
  "Photography",
  "Data Science",
];

const categoryIcons = {
  "All Categories": "✦",
  Development: "⌘",
  Design: "◈",
  Business: "▣",
  Marketing: "↗",
  Photography: "◉",
  "Data Science": "⌬",
};

const CategoryFilter = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <div className="w-full">
      {/* Label */}
      <div className="mb-3 flex items-center justify-between">
        <label className="text-sm font-bold text-slate-800">
          Course Category
        </label>

        <span className="text-xs font-medium text-slate-400">
          {selectedCategory}
        </span>
      </div>

      {/* Select Wrapper */}
      <div className="group relative">

        {/* Left Icon */}
        <div className="pointer-events-none absolute left-4 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg bg-indigo-50 text-sm font-bold text-indigo-600 transition duration-300 group-focus-within:bg-indigo-600 group-focus-within:text-white">
          {categoryIcons[selectedCategory] || "✦"}
        </div>

        {/* Select */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="h-14 w-full cursor-pointer appearance-none rounded-2xl border border-slate-200 bg-white pl-16 pr-12 text-sm font-semibold text-slate-700 shadow-sm outline-none transition-all duration-300 hover:border-indigo-300 hover:shadow-md focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100"
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        {/* Custom Arrow */}
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

      {/* Bottom Hint */}
      <div className="mt-2 flex items-center gap-2 px-1">
        <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />

        <p className="text-xs text-slate-400">
          Choose a category to explore relevant courses
        </p>
      </div>
    </div>
  );
};

export default CategoryFilter;