"use client";
import { courses } from "@/data/course";
import { useMemo, useState } from "react";
import CourseCard from "./CourseCard";

export default function AllCourse() {
  const [selectedCategory, setSelectedCategory] = useState("All Course");
  const [searchQuery, setSearchQuery] = useState("");

  // Dynamically generate categories with lesson count
  const categories = useMemo(() => {
    const categoryMap = {};
    let totalLessons = 0;

    courses.forEach((course) => {
      totalLessons += course.lessons;

      if (!categoryMap[course.category]) {
        categoryMap[course.category] = 0;
      }
      categoryMap[course.category] += course.lessons;
    });

    // Convert to array of objects
    const dynamicCategories = Object.entries(categoryMap).map(
      ([name, lessons]) => ({
        name,
        lessons,
      })
    );

    // Add 'All Course' with total lessons
    return [
      { name: "All Course", lessons: totalLessons },
      ...dynamicCategories,
    ];
  }, []);

  const filteredCourses = courses.filter((course) => {
    const matchCategory =
      selectedCategory === "All Course" || course.category === selectedCategory;
    const matchSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-[#F5F1EA] text-black">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-[#121212] text-2xl font-medium mb-4">
          Discover Knowledge Across Every Field
        </h1>

        {/* Category Tabs */}
        <div className="flex gap-4 mb-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex flex-col text-start border px-4 py-1.5 rounded-lg transition cursor-pointer ${
                selectedCategory === cat.name
                  ? "bg-[#FFC9B5] border-[#FFC9B5]"
                  : "text-black border-[#101B2419]"
              }`}
            >
              <span className="text-lg text-[#121212] font-medium">
                {cat.name}
              </span>
              <span className="text-[#121212] text-sm">
                {cat.lessons !== null && `${cat.lessons} lessons`}
              </span>
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="mb-6 flex items-center justify-between">
          <input
            type="text"
            placeholder="Search course"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border px-4 py-2 w-full max-w-md rounded"
          />
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-4 gap-4">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          ) : (
            <p>No courses match your search.</p>
          )}
        </div>
      </div>
    </div>
  );
}
