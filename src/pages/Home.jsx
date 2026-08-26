import React from "react";
import Hero from "../components/home/Hero";
import SearchCourses from "../components/home/SearchCourses";
import PopularCategories from "../components/home/PopularCategories";
import FeaturedCourses from "../components/home/FeaturedCourses";
import PopularInstructors from "../components/home/PopularInstructors";

const Home = () => {
  return (
    <>
      <Hero />
      <SearchCourses />
      <PopularCategories/>
      <FeaturedCourses/>
      <PopularInstructors/>
    </>
  );
};

export default Home;