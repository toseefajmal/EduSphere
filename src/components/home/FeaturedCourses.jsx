
import React from "react";
import {
  FiStar,
  FiClock,
  FiUsers,
  FiArrowRight,
  FiHeart,
} from "react-icons/fi";

const courses = [
  {
    id: 1,
    title: "Complete React Developer Course",
    category: "Development",
    instructor: "Sarah Johnson",
    image: "/react-course.png",
    rating: 4.9,
    students: "12.5K",
    duration: "18h 30m",
    price: "$49",
    oldPrice: "$89",
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    category: "Design",
    instructor: "Michael Brown",
    image: "/uiux-course.png",
    rating: 4.8,
    students: "9.8K",
    duration: "14h 20m",
    price: "$39",
    oldPrice: "$79",
  },
  {
    id: 3,
    title: "Modern JavaScript From Zero",
    category: "Development",
    instructor: "David Wilson",
    image: "/javascript-course.png",
    rating: 4.9,
    students: "15.2K",
    duration: "21h 10m",
    price: "$45",
    oldPrice: "$85",
  },
  {
    id: 4,
    title: "Digital Marketing Complete Guide",
    category: "Marketing",
    instructor: "Emma Davis",
    image: "/marketing-course.png",
    rating: 4.7,
    students: "7.4K",
    duration: "11h 45m",
    price: "$35",
    oldPrice: "$69",
  },
];

const FeaturedCourses = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-3 inline-block rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
              Featured Courses
            </span>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Learn From the{" "}
              <span className="text-indigo-600">Best Courses</span>
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg">
              Explore our most popular courses and build the skills you need
              to grow your career.
            </p>
          </div>

          <button className="group flex w-fit items-center gap-2 font-semibold text-indigo-600 transition hover:text-indigo-800">
            View All Courses
            <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Courses Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Category */}
                <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-xs font-bold text-indigo-600 shadow-md">
                  {course.category}
                </span>

                {/* Wishlist */}
                <button
                  aria-label="Add to wishlist"
                  className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-600 shadow-md transition hover:bg-indigo-600 hover:text-white"
                >
                  <FiHeart size={16} />
                </button>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="line-clamp-2 min-h-[56px] text-lg font-bold leading-7 text-slate-900 transition-colors group-hover:text-indigo-600">
                  {course.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  By {course.instructor}
                </p>

                {/* Rating */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <FiStar className="fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-bold text-slate-800">
                      {course.rating}
                    </span>
                  </div>

                  <span className="text-sm text-slate-400">
                    ({course.students})
                  </span>
                </div>

                {/* Course Info */}
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <FiClock />
                    {course.duration}
                  </div>

                  <div className="flex items-center gap-1.5">
                    <FiUsers />
                    {course.students}
                  </div>
                </div>

                {/* Price */}
                <div className="mt-5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-slate-900">
                      {course.price}
                    </span>

                    <span className="text-sm text-slate-400 line-through">
                      {course.oldPrice}
                    </span>
                  </div>

                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 transition-all duration-300 hover:bg-indigo-600 hover:text-white">
                    <FiArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedCourses;

