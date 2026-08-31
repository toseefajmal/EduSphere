import React from "react";

const CourseSearch = ({ search, setSearch }) => {
  const handleClear = () => {
    setSearch("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative mx-auto w-full max-w-3xl"
    >
      {/* Outer Glow */}
      <div className="absolute -inset-1 rounded-[1.6rem] bg-indigo-500/20 opacity-0 blur-xl transition duration-500 group-focus-within:opacity-100" />

      <div className="group relative">

        {/* Main Search Box */}
        <div className="relative flex min-h-[72px] items-center overflow-hidden rounded-[1.4rem] border border-white/20 bg-white p-2 shadow-2xl shadow-slate-950/20 transition-all duration-300 hover:border-indigo-300 focus-within:border-indigo-400 focus-within:shadow-indigo-500/20">

          {/* Search Icon */}
          <div className="ml-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-all duration-300 group-focus-within:bg-indigo-600 group-focus-within:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </div>

          {/* Input */}
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses, topics, instructors..."
            className="h-14 min-w-0 flex-1 bg-transparent px-4 text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400 sm:text-base"
          />

          {/* Clear Button */}
          {search && (
            <button
              type="button"
              onClick={handleClear}
              className="mr-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              aria-label="Clear search"
            >
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
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          )}


          {/* Search Button */}
          <button
            type="submit"
            className="flex h-12 shrink-0 items-center gap-2 rounded-xl bg-indigo-600 px-5 text-sm font-bold text-white shadow-lg shadow-indigo-600/20 transition-all duration-300 hover:bg-indigo-700 hover:shadow-indigo-600/40 active:scale-95 sm:px-6"
          >
            <span className="hidden sm:inline">
              Search
            </span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
          </button>

        </div>

        {/* Bottom Information */}
        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-slate-400">

          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            500+ courses available
          </span>

          <span className="hidden h-3 w-px bg-slate-600 sm:block" />

          <span>
            Search by course, skill or instructor
          </span>

        </div>

      </div>
    </form>
  );
};

export default CourseSearch;