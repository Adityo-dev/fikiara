"use client";
import { featuredCourses } from "@/data/featuredCourses";
import { useState } from "react";
import CourseCard from "./CourseCard";

const filters = [
  "all courses",
  ...Array.from(new Set(featuredCourses.flatMap((course) => course.tags))),
];

export default function FeaturedCourses() {
  const [activeFilter, setActiveFilter] = useState("all courses");

  const filteredCourses =
    activeFilter === "all courses"
      ? featuredCourses
      : featuredCourses.filter((course) => course.tags.includes(activeFilter));

  return (
    <section className="bg-[#11277C]  text-white py-20 px-4">
      <div className="text-center mb-14">
        <h2 className="text-5xl font-semibold leading-16">Featured Courses</h2>
        <p className="text-lg text-[#D4D4D4] leading-8 mt-3">
          Top-rated courses chosen for you — learn faster, smarter, better.
        </p>

        {/* Filters */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-[#fff] text-lg font-medium px-6 py-2.5 rounded-md border border-[#d4d4d44D] cursor-pointer ${
                activeFilter === filter && "bg-[#1DAB55]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Course Cards */}
      <div className="container mx-auto px-4 grid grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}
