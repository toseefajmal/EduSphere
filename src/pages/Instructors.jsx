import React, { useMemo, useState } from "react";
import {
  FiSearch,
  FiStar,
  FiUsers,
  FiBookOpen,
  FiArrowRight,
  FiAward,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const instructors = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Senior React Developer",
    category: "Development",
    image: "/sarah.png",
    rating: 4.9,
    students: "12.5K",
    courses: 18,
    experience: "8+ Years",
    description:
      "Frontend expert specializing in React, JavaScript, and modern web application development.",
  },
  {
    id: 2,
    name: "Michael Brown",
    role: "UI/UX Design Expert",
    category: "Design",
    image: "/michael.png",
    rating: 4.8,
    students: "9.8K",
    courses: 14,
    experience: "7+ Years",
    description:
      "Creative designer helping students master UI/UX design, Figma, and product design.",
  },
  {
    id: 3,
    name: "David Wilson",
    role: "JavaScript Specialist",
    category: "Development",
    image: "/david.png",
    rating: 4.9,
    students: "15.2K",
    courses: 21,
    experience: "10+ Years",
    description:
      "JavaScript specialist focused on building strong programming and problem-solving skills.",
  },
  {
    id: 4,
    name: "Emma Davis",
    role: "Digital Marketing Strategist",
    category: "Marketing",
    image: "/emma.png",
    rating: 4.7,
    students: "8.4K",
    courses: 11,
    experience: "6+ Years",
    description:
      "Digital marketing professional teaching SEO, social media, branding, and online growth.",
  },
  {
    id: 5,
    name: "James Anderson",
    role: "Full Stack Developer",
    category: "Development",
    image: "/james.png",
    rating: 4.9,
    students: "11.7K",
    courses: 16,
    experience: "9+ Years",
    description:
      "Full-stack developer teaching modern frontend and backend technologies.",
  },
  {
    id: 6,
    name: "Sophia Martinez",
    role: "Product Design Lead",
    category: "Design",
    image: "/sophia.png",
    rating: 4.8,
    students: "7.6K",
    courses: 12,
    experience: "6+ Years",
    description:
      "Product design expert passionate about creating beautiful and user-friendly experiences.",
  },
];

const categories = ["All", "Development", "Design", "Marketing"];

const Instructors = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredInstructors = useMemo(() => {
    return instructors.filter((instructor) => {
      const matchesSearch =
        instructor.name.toLowerCase().includes(search.toLowerCase()) ||
        instructor.role.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        category === "All" || instructor.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 px-6 py-20 text-white md:py-28">
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-indigo-300">
              <FiAward />
              Learn from industry experts
            </div>

            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Learn from the{" "}
              <span className="text-indigo-400">best instructors</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Connect with experienced professionals and passionate educators
              who are ready to help you build real-world skills.
            </p>
          </div>

          {/* Search */}
          <div className="mt-10 max-w-2xl">
            <div className="relative">
              <FiSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-slate-400" />

              <input
                type="text"
                placeholder="Search instructors..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-white px-6 py-4 pl-14 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        {/* Header */}
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Our instructors
            </p>

            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Meet our expert instructors
            </h2>

            <p className="mt-3 max-w-2xl text-slate-500">
              Learn from professionals with years of experience in their
              fields.
            </p>
          </div>

          <div className="text-sm text-slate-500">
            {filteredInstructors.length} instructors found
          </div>
        </div>

        {/* Categories */}
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                category === item
                  ? "bg-slate-950 text-white shadow-lg"
                  : "bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Instructor Grid */}
        {filteredInstructors.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredInstructors.map((instructor) => (
              <div
                key={instructor.id}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative overflow-hidden bg-slate-100">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="h-72 w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow">
                    {instructor.category}
                  </div>

                  <div className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-slate-950/90 px-3 py-1.5 text-sm font-semibold text-white backdrop-blur">
                    <FiStar className="fill-yellow-400 text-yellow-400" />
                    {instructor.rating}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">
                    {instructor.name}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-indigo-600">
                    {instructor.role}
                  </p>

                  <p className="mt-4 line-clamp-2 text-sm leading-6 text-slate-500">
                    {instructor.description}
                  </p>

                  {/* Stats */}
                  <div className="mt-6 grid grid-cols-3 border-y border-slate-100 py-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-slate-900">
                        <FiUsers className="text-sm" />
                        <span className="font-bold">
                          {instructor.students}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-slate-400">Students</p>
                    </div>

                    <div className="border-x border-slate-100 text-center">
                      <div className="flex items-center justify-center gap-1 text-slate-900">
                        <FiBookOpen className="text-sm" />
                        <span className="font-bold">
                          {instructor.courses}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-slate-400">Courses</p>
                    </div>

                    <div className="text-center">
                      <span className="font-bold text-slate-900">
                        {instructor.experience}
                      </span>
                      <p className="mt-1 text-xs text-slate-400">Experience</p>
                    </div>
                  </div>

                  {/* Button */}
                  <Link
                    to={`/instructors/${instructor.id}`}
                    className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-indigo-600"
                  >
                    View Profile
                    <FiArrowRight className="transition group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100">
              <FiSearch className="text-2xl text-slate-400" />
            </div>

            <h3 className="mt-5 text-xl font-bold text-slate-900">
              No instructors found
            </h3>

            <p className="mt-2 text-slate-500">
              Try searching with a different name or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="mt-6 rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white transition hover:bg-indigo-600"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Instructors;