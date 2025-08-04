"use client";
import SectionColumnsHeaders from "@/components/sectionHeaders/SectionColumnsHeaders";
import { featuredCourses } from "@/data/featuredCourses";
import Image from "next/image";
import { useState } from "react";
import CourseCard from "../../../components/card/CourseCard";

const filters = [
  "all courses",
  ...Array.from(new Set(featuredCourses.flatMap((course) => course.tags))),
];

export default function FeaturedCourses() {
  const [activeFilter, setActiveFilter] = useState("all courses");

  const filteredCourses =
    activeFilter === "all courses"
      ? featuredCourses
      : featuredCourses.filter((course) =>
          course?.tags?.includes(activeFilter)
        );

  return (
    <section className="relative bg-[#F5F1EA] text-white py-32 px-4 overflow-hidden">
      <div className="relative z-10">
        <SectionColumnsHeaders
          title={"Featured Courses"}
          description={
            "Top-rated courses chosen for you — learn faster, smarter, better."
          }
        />

        {/* Filters */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`text-[#101B24] text-lg font-medium px-6 py-2 cursor-pointer border border-[#FFA41F] rounded-md ${
                activeFilter === filter && "bg-[#FFA41F]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Course Cards */}
      <div className="relative container mx-auto px-4 grid grid-cols-4 gap-4 mt-16 z-20">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} items={course} />
        ))}
      </div>

      {/* Party Paper Background Image */}
      <div className="absolute -top-1.5 inset-0">
        <Image
          src={"/party-paper.png"}
          width={1600}
          height={600}
          alt=""
          className="w-full h-fit"
        />
      </div>
    </section>
  );
}
