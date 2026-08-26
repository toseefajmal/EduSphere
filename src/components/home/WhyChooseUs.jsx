
import React from "react";
import {
  FiBookOpen,
  FiAward,
  FiUsers,
  FiHeadphones,
  FiArrowRight,
} from "react-icons/fi";

const features = [
  {
    id: 1,
    icon: FiBookOpen,
    title: "Learn From Experts",
    description:
      "Learn practical skills from experienced instructors and industry professionals.",
  },
  {
    id: 2,
    icon: FiAward,
    title: "Earn Certificates",
    description:
      "Complete your courses and earn professional certificates to showcase your skills.",
  },
  {
    id: 3,
    icon: FiUsers,
    title: "Large Learning Community",
    description:
      "Connect with thousands of learners, share knowledge and grow together.",
  },
  {
    id: 4,
    icon: FiHeadphones,
    title: "24/7 Learning Support",
    description:
      "Get the help you need whenever you need it with our dedicated learning support.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 px-4 py-20 sm:px-6 lg:px-8">
      {/* Background Decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-indigo-600/20 blur-3xl" />
      <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-indigo-400/20 bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-400">
            Why Choose EduSphere?
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Everything You Need to{" "}
            <span className="text-indigo-400">Learn & Grow</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
            We make online learning simple, flexible and engaging so you can
            build valuable skills and achieve your goals.
          </p>
        </div>

        {/* Features */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-indigo-950/40"
              >
                {/* Icon */}
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                  <Icon size={27} />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-bold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {feature.description}
                </p>

                {/* Learn More */}
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-indigo-400">
                  Learn More
                  <FiArrowRight
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    size={16}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] sm:grid-cols-3">
          <div className="border-b border-white/10 px-6 py-8 text-center sm:border-b-0 sm:border-r">
            <h3 className="text-3xl font-bold text-white">50K+</h3>
            <p className="mt-1 text-sm text-slate-400">
              Active Students
            </p>
          </div>

          <div className="border-b border-white/10 px-6 py-8 text-center sm:border-b-0 sm:border-r">
            <h3 className="text-3xl font-bold text-white">1,200+</h3>
            <p className="mt-1 text-sm text-slate-400">
              Expert Courses
            </p>
          </div>

          <div className="px-6 py-8 text-center">
            <h3 className="text-3xl font-bold text-white">98%</h3>
            <p className="mt-1 text-sm text-slate-400">
              Student Satisfaction
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;

