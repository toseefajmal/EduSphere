import React from "react";
import Hero from "../components/home/Hero";
import SearchCourses from "../components/home/SearchCourses";
import PopularCategories from "../components/home/PopularCategories";
import FeaturedCourses from "../components/home/FeaturedCourses";
import PopularInstructors from "../components/home/PopularInstructors";
import WhyChooseUs from "../components/home/WhyChooseUs";
import LearningStats from "../components/home/LearningStats";
import Testimonials from "../components/home/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <SearchCourses />
      <PopularCategories/>
      <FeaturedCourses/>
      <PopularInstructors/>
      <WhyChooseUs/>
      <LearningStats/>
      <Testimonials/>
      
    </>
  );
};

export default Home;