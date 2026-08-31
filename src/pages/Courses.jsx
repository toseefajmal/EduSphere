
import React, { useMemo, useState } from "react";

import CourseCard from "../components/courses/CourseCard";
import CourseSearch from "../components/courses/CourseSearch";
import CourseFilter from "../components/courses/CourseFilter";
import CategoryFilter from "../components/courses/CategoryFilter";

const courses = [
  {
    id: 1,
    title: "Complete React Developer Course",
    instructor: "Sarah Johnson",
    category: "Development",
    rating: 4.9,
    students: "12.5K",
    price: "$49",
    oldPrice: "$89",
    image: "/react-course.png",
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    instructor: "Michael Brown",
    category: "Design",
    rating: 4.8,
    students: "8.2K",
    price: "$39",
    oldPrice: "$69",
    image: "/uiux-course.png",
  },
  {
    id: 3,
    title: "Modern JavaScript From Zero to Expert",
    instructor: "David Wilson",
    category: "Development",
    rating: 4.9,
    students: "15.7K",
    price: "$45",
    oldPrice: "$79",
    image: "/javascript-course.png",
  },
  {
    id: 4,
    title: "Digital Marketing Complete Guide",
    instructor: "Emma Davis",
    category: "Marketing",
    rating: 4.7,
    students: "6.8K",
    price: "$35",
    oldPrice: "$59",
    image: "/marketing-course.png",
  },
  {
    id: 5,
    title: "Business Strategy & Leadership",
    instructor: "James Anderson",
    category: "Business",
    rating: 4.8,
    students: "5.4K",
    price: "$42",
    oldPrice: "$75",
       image: "/javascript-course.png",
  },
  {
    id: 6,
    title: "Data Science & Machine Learning",
    instructor: "Olivia Taylor",
    category: "Data Science",
    rating: 4.9,
    students: "9.6K",
    price: "$59",
    oldPrice: "$99",
    image: "/javascript-course.png",
  },
];

const Courses = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All Categories");

  const [sortBy, setSortBy] = useState("popular");
  const [priceFilter, setPriceFilter] = useState("all");

  const filteredCourses = useMemo(() => {
    let result = [...courses];

    // Search
    if (search.trim()) {
      const searchText = search.toLowerCase();

      result = result.filter(
        (course) =>
          course.title.toLowerCase().includes(searchText) ||
          course.instructor.toLowerCase().includes(searchText) ||
          course.category.toLowerCase().includes(searchText)
      );
    }

    // Category
    if (selectedCategory !== "All Categories") {
      result = result.filter(
        (course) => course.category === selectedCategory
      );
    }

    // Price
    if (priceFilter === "free") {
      result = result.filter((course) => course.price === "$0");
    }

    if (priceFilter === "paid") {
      result = result.filter((course) => course.price !== "$0");
    }

    // Sorting
    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "price-low") {
      result.sort(
        (a, b) =>
          parseFloat(a.price.replace("$", "")) -
          parseFloat(b.price.replace("$", ""))
      );
    }

    if (sortBy === "price-high") {
      result.sort(
        (a, b) =>
          parseFloat(b.price.replace("$", "")) -
          parseFloat(a.price.replace("$", ""))
      );
    }

    if (sortBy === "popular") {
      result.sort(
        (a, b) =>
          parseFloat(b.students.replace("K", "")) -
          parseFloat(a.students.replace("K", ""))
      );
    }

    return result;
  }, [search, selectedCategory, sortBy, priceFilter]);

  return (
    <main className="min-h-screen bg-slate-50">

      {/* ================= HERO ================= */}
      <section className="bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">

          <span className="inline-flex rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-400">
            Explore EduSphere
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Find the Right Course
            <span className="block text-indigo-500">
              for Your Future
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            Learn from expert instructors and build practical skills
            with courses designed for your career and personal growth.
          </p>

          {/* Search */}
          <div className="mx-auto mt-10 max-w-2xl">
            <CourseSearch
              search={search}
              setSearch={setSearch}
            />
          </div>

        </div>
      </section>

      {/* ================= COURSES ================= */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Top Heading */}
          <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <p className="text-sm font-semibold text-indigo-600">
                LEARN SOMETHING NEW
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Explore Our Courses
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {filteredCourses.length} courses available
              </p>
            </div>

          </div>

          {/* Filters */}
          <div className="mb-10 grid gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-2 lg:grid-cols-3">

            <CategoryFilter
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            <CourseFilter
              sortBy={sortBy}
              setSortBy={setSortBy}
              priceFilter={priceFilter}
              setPriceFilter={setPriceFilter}
            />

          </div>

          {/* Course Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              {filteredCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  image={course.image}
                  title={course.title}
                  instructor={course.instructor}
                  category={course.category}
                  rating={course.rating}
                  students={course.students}
                  price={course.price}
                  oldPrice={course.oldPrice}
                />
              ))}

            </div>
          ) : (
            <div className="rounded-2xl border border-slate-200 bg-white px-6 py-20 text-center shadow-sm">

              <div className="text-5xl">
                🔍
              </div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900">
                No Courses Found
              </h3>

              <p className="mt-2 text-slate-500">
                Try changing your search or filter options.
              </p>

              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setSelectedCategory("All Categories");
                  setSortBy("popular");
                  setPriceFilter("all");
                }}
                className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700"
              >
                Clear Filters
              </button>

            </div>
          )}

        </div>
      </section>

    </main>
  );
};

export default Courses;

