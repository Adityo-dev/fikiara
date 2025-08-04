"use client";

import CourseCard from "@/components/card/CourseCard";
import DynamicCourseSection from "@/components/DynamicCourseSection";
import { courses } from "@/data/course";

export default function AllCourse() {
  return (
    <DynamicCourseSection
      title="Discover Knowledge Across Every Field"
      items={courses}
      type="Course"
      renderItem={(item, index) => <CourseCard key={index} items={item} />}
    />
  );
}
