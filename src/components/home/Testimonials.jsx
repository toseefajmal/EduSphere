import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SlideLeft,
  SlideRight,
  SlideUp,
  SlideBottom,
} from "../../utility/Animation.js";

const testimonials = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Frontend Developer",
    image: "/david.png",
    rating: 5,
    text: "EduSphere completely changed the way I learn. The React courses are practical, easy to understand and helped me build real-world projects.",
  },
  {
    id: 2,
    name: "Sophia Williams",
    role: "UI/UX Designer",
    image: "/sarah.png",
    rating: 5,
    text: "The instructors explain everything so clearly. I started with almost no design experience and now I feel confident creating professional interfaces.",
  },
  {
    id: 3,
    name: "James Anderson",
    role: "JavaScript Developer",
    image: "/david.png",
    rating: 5,
    text: "I loved the learning experience on EduSphere. The courses are structured perfectly and the projects helped me improve my coding skills.",
  },
  {
    id: 4,
    name: "Olivia Taylor",
    role: "Digital Marketer",
    image: "/sarah.png",
    rating: 5,
    text: "The quality of the courses is amazing. I learned digital marketing strategies that I was able to apply directly to my work.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex(
      (current) => (current + 1) % testimonials.length
    );
  };

  const prevSlide = () => {
    setActiveIndex(
      (current) =>
        (current - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % testimonials.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[activeIndex];

  return (
    <section className="bg-white px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* ================= HEADER ================= */}
        <motion.div
          variants={SlideUp(0.2)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
            Student Testimonials
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            What Our{" "}
            <span className="text-indigo-600">
              Students Say
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-500 sm:text-lg">
            Thousands of students are learning new skills and
            achieving their goals with EduSphere.
          </p>
        </motion.div>

        {/* ================= TESTIMONIAL ================= */}
        <motion.div
          variants={SlideUp(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mt-14"
        >
          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-10 lg:p-14">

            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.id}
                initial={{
                  opacity: 0,
                  x: 50,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -50,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className="grid items-center gap-10 lg:grid-cols-[280px_1fr]"
              >

                {/* ================= PROFILE ================= */}
                <motion.div
                  variants={SlideLeft(0.2)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="text-center lg:border-r lg:border-slate-200 lg:pr-10"
                >
                  <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-slate-200 shadow-lg">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {testimonial.role}
                  </p>

                  {/* Stars */}
                  <div className="mt-4 flex justify-center gap-1">
                    {Array.from({
                      length: testimonial.rating,
                    }).map((_, index) => (
                      <motion.span
                        key={index}
                        initial={{
                          opacity: 0,
                          scale: 0,
                        }}
                        animate={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay: index * 0.08,
                          duration: 0.3,
                        }}
                        className="text-lg text-yellow-400"
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* ================= REVIEW ================= */}
                <motion.div
                  variants={SlideRight(0.3)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex min-h-[250px] flex-col justify-center"
                >
                  <div className="mb-5 text-5xl leading-none text-indigo-600">
                    “
                  </div>

                  <p className="max-w-3xl text-xl font-medium leading-9 text-slate-700 sm:text-2xl">
                    {testimonial.text}
                  </p>

                  <div className="mt-8 h-1 w-12 rounded-full bg-indigo-600" />
                </motion.div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* ================= NAVIGATION ================= */}
          <motion.div
            variants={SlideBottom(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 flex items-center justify-between"
          >

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Show testimonial ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? "w-8 bg-indigo-600"
                      : "w-2.5 bg-slate-300 hover:bg-indigo-300"
                  }`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">

              <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-slate-700 shadow-sm transition-all duration-300 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
              >
                ←
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-xl text-white shadow-md transition-all duration-300 hover:bg-indigo-700"
              >
                →
              </button>

            </div>
          </motion.div>
        </motion.div>

        {/* ================= STATS ================= */}
        <motion.div
          variants={SlideUp(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-14 grid gap-4 sm:grid-cols-3"
        >

          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="flex items-center justify-center gap-1">
              <h4 className="text-2xl font-bold text-slate-900">
                4.9
              </h4>

              <span className="text-xl text-yellow-400">
                ★
              </span>
            </div>

            <p className="mt-1 text-sm text-slate-500">
              Average Rating
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h4 className="text-2xl font-bold text-slate-900">
              25K+
            </h4>

            <p className="mt-1 text-sm text-slate-500">
              Student Reviews
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <h4 className="text-2xl font-bold text-slate-900">
              98%
            </h4>

            <p className="mt-1 text-sm text-slate-500">
              Would Recommend
            </p>
          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;