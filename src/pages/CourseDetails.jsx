
import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiArrowRight,
  FiBookOpen,
  FiCheckCircle,
  FiClock,
  FiGlobe,
  FiPlayCircle,
  FiStar,
  FiUsers,
  FiAward,
  FiDownload,
} from "react-icons/fi";

const courses = [
  {
    id: 1,
    title: "Complete React Development",
    category: "Development",
    instructor: "Sarah Johnson",
    instructorImage: "/sarah.png",
    image: "/react-course.png",
    rating: 4.9,
    reviews: 2450,
    students: "12.5K",
    duration: "18h 30m",
    lessons: 86,
    level: "Intermediate",
    price: "$49.99",
    oldPrice: "$89.99",
    description:
      "Master React from fundamentals to advanced concepts and build modern, production-ready web applications.",
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    category: "Design",
    instructor: "Michael Brown",
    instructorImage: "/michael.png",
    image: "/uiux-course.png",
    rating: 4.8,
    reviews: 1840,
    students: "9.8K",
    duration: "14h 20m",
    lessons: 64,
    level: "Beginner",
    price: "$39.99",
    oldPrice: "$79.99",
    description:
      "Learn professional UI/UX design principles and create beautiful digital experiences using modern design tools.",
  },
  {
    id: 3,
    title: "Modern JavaScript",
    category: "Development",
    instructor: "David Wilson",
    instructorImage: "/david.png",
    image: "/javascript-course.png",
    rating: 4.9,
    reviews: 3120,
    students: "15.2K",
    duration: "16h 10m",
    lessons: 72,
    level: "Intermediate",
    price: "$44.99",
    oldPrice: "$84.99",
    description:
      "Build a strong JavaScript foundation and learn modern ES6+ features used in today's web applications.",
  },
  {
    id: 4,
    title: "Digital Marketing Complete Guide",
    category: "Marketing",
    instructor: "Emma Davis",
    instructorImage: "/emma.png",
    image: "/marketing-course.png",
    rating: 4.7,
    reviews: 1260,
    students: "8.4K",
    duration: "12h 45m",
    lessons: 58,
    level: "Beginner",
    price: "$34.99",
    oldPrice: "$69.99",
    description:
      "Learn SEO, social media marketing, content strategy, analytics, and modern digital marketing techniques.",
  },
];

const curriculum = [
  {
    title: "Getting Started",
    lessons: [
      "Introduction to the Course",
      "Setting Up Your Development Environment",
      "Understanding the React Ecosystem",
    ],
  },
  {
    title: "React Fundamentals",
    lessons: [
      "Components and JSX",
      "Props and State",
      "Handling Events",
      "Conditional Rendering",
    ],
  },
  {
    title: "Advanced React",
    lessons: [
      "React Hooks",
      "Context API",
      "Performance Optimization",
      "Reusable Components",
    ],
  },
  {
    title: "Real World Project",
    lessons: [
      "Project Planning",
      "Building the Application",
      "API Integration",
      "Deployment",
    ],
  },
];

const CourseDetails = () => {
  const { id } = useParams();

  const course =
    courses.find((item) => item.id === Number(id)) || courses[0];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-slate-950 px-6 py-12 text-white md:py-16">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/courses"
            className="mb-8 inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
          >
            <FiArrowLeft />
            Back to Courses
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1fr_420px] lg:items-center">
            {/* Left */}
            <div>
              <span className="inline-flex rounded-full bg-indigo-500/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-indigo-300">
                {course.category}
              </span>

              <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
                {course.title}
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg">
                {course.description}
              </p>

              {/* Rating */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1">
                  <FiStar className="fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-yellow-400">
                    {course.rating}
                  </span>
                  <span className="text-slate-400">
                    ({course.reviews.toLocaleString()} reviews)
                  </span>
                </div>

                <div className="h-4 w-px bg-slate-700" />

                <div className="flex items-center gap-2 text-slate-300">
                  <FiUsers />
                  {course.students} students
                </div>
              </div>

              {/* Instructor */}
              <div className="mt-7 flex items-center gap-3">
                <img
                  src={course.instructorImage}
                  alt={course.instructor}
                  className="h-11 w-11 rounded-full object-cover"
                />

                <div>
                  <p className="text-xs text-slate-400">Created by</p>
                  <p className="font-semibold">{course.instructor}</p>
                </div>
              </div>
            </div>

            {/* Preview Card */}
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl">
              <div className="group relative h-64 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-slate-950/40" />

                <button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-950 shadow-xl transition hover:scale-110">
                  <FiPlayCircle className="text-3xl" />
                </button>

                <div className="absolute bottom-4 left-4 rounded-lg bg-slate-950/80 px-3 py-2 text-xs font-semibold text-white">
                  Preview this course
                </div>
              </div>

              <div className="p-6 text-slate-900">
                <div className="flex items-end gap-3">
                  <span className="text-3xl font-bold">{course.price}</span>
                  <span className="pb-1 text-sm text-slate-400 line-through">
                    {course.oldPrice}
                  </span>
                </div>

                <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 font-semibold text-white transition hover:bg-indigo-700">
                  Enroll Now
                  <FiArrowRight />
                </button>

                <p className="mt-4 text-center text-xs text-slate-400">
                  30-Day Money-Back Guarantee
                </p>

                <div className="mt-6 space-y-3 border-t border-slate-100 pt-5 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-500">
                      <FiClock />
                      Duration
                    </span>
                    <span className="font-semibold">{course.duration}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-500">
                      <FiBookOpen />
                      Lessons
                    </span>
                    <span className="font-semibold">{course.lessons}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-500">
                      <FiAward />
                      Level
                    </span>
                    <span className="font-semibold">{course.level}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-500">
                      <FiGlobe />
                      Language
                    </span>
                    <span className="font-semibold">English</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
          {/* Main Content */}
          <div>
            {/* What You'll Learn */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                What you'll learn
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Build modern and responsive web applications",
                  "Understand React fundamentals and advanced concepts",
                  "Create reusable and scalable components",
                  "Work with APIs and external data",
                  "Manage application state effectively",
                  "Build real-world projects from scratch",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex gap-3 text-sm leading-6 text-slate-600"
                  >
                    <FiCheckCircle className="mt-1 shrink-0 text-indigo-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Curriculum */}
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    Course Curriculum
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    {curriculum.length} sections • {course.lessons} lessons
                  </p>
                </div>

                <button className="flex items-center gap-2 text-sm font-semibold text-indigo-600">
                  <FiDownload />
                  Download Syllabus
                </button>
              </div>

              <div className="mt-7 space-y-4">
                {curriculum.map((section, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-2xl border border-slate-200"
                  >
                    <div className="flex items-center justify-between bg-slate-50 px-5 py-4">
                      <div className="flex items-center gap-3">
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-100 text-sm font-bold text-indigo-600">
                          {index + 1}
                        </span>

                        <h3 className="font-semibold text-slate-900">
                          {section.title}
                        </h3>
                      </div>

                      <span className="text-xs text-slate-400">
                        {section.lessons.length} lessons
                      </span>
                    </div>

                    <div className="divide-y divide-slate-100">
                      {section.lessons.map((lesson, lessonIndex) => (
                        <div
                          key={lessonIndex}
                          className="flex items-center gap-3 px-5 py-3.5 text-sm text-slate-600"
                        >
                          <FiPlayCircle className="text-slate-400" />
                          {lesson}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor */}
            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">
                Your Instructor
              </h2>

              <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
                <img
                  src={course.instructorImage}
                  alt={course.instructor}
                  className="h-24 w-24 rounded-2xl object-cover"
                />

                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {course.instructor}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-indigo-600">
                    {course.category} Expert
                  </p>

                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">
                    <span className="flex items-center gap-1">
                      <FiStar className="text-yellow-500" />
                      {course.rating} Rating
                    </span>

                    <span className="flex items-center gap-1">
                      <FiUsers />
                      {course.students} Students
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-24">
            <h3 className="text-lg font-bold text-slate-900">
              This course includes
            </h3>

            <div className="mt-5 space-y-4">
              {[
                [FiPlayCircle, `${course.duration} on-demand video`],
                [FiBookOpen, `${course.lessons} lessons`],
                [FiDownload, "Downloadable resources"],
                [FiGlobe, "Full lifetime access"],
                [FiAward, "Certificate of completion"],
              ].map(([Icon, text], index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-sm text-slate-600"
                >
                  <Icon className="shrink-0 text-indigo-600" />
                  {text}
                </div>
              ))}
            </div>

            <div className="my-6 h-px bg-slate-100" />

            <p className="text-sm leading-6 text-slate-500">
              Get lifetime access to all course materials and learn at your
              own pace.
            </p>

            <Link
              to="/courses"
              className="mt-6 flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 font-semibold text-slate-700 transition hover:border-indigo-600 hover:text-indigo-600"
            >
              Explore More Courses
              <FiArrowRight />
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;

