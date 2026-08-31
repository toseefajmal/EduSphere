import React from "react";
import { Routes, Route } from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Instructors from "./pages/Instructors";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        
        <Route index element={<Home />} />

        <Route path="courses" element={<Courses />} />

        <Route path="courses/:id" element={<CourseDetails />} />

        <Route path="instructors" element={<Instructors />} />

      </Route>
    </Routes>
  );
};

export default App;