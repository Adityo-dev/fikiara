"use client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const curriculumData = [
  {
    id: 1,
    title: "Introduction & Basics",
    subtitle:
      "Understand the foundations of UX/UI design and design thinking principles.",
  },
  {
    id: 2,
    title: "Hands-On Projects",
    subtitle:
      "Work on real-world examples to apply your skills and build your portfolio.",
  },
  {
    id: 3,
    title: "Step-by-Step Modules",
    subtitle:
      "Learn design tools and techniques in a structured, progressive format.",
  },
  {
    id: 4,
    title: "Quizzes & Assessments",
    subtitle:
      "Test your knowledge regularly with interactive quizzes and tasks.",
  },
  {
    id: 5,
    title: "Advanced Techniques",
    subtitle:
      "Master prototyping, animation, responsive design, and user testing.",
  },
  {
    id: 6,
    title: "Master Industry Advance",
    subtitle:
      "Get career-ready with expert advice, resume reviews, and interview prep.",
  },
];

export default function CourseCurriculum() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(index === openIndex ? 0 : index);
  };

  return (
    <div className="bg-[#FFF] p-6 rounded-lg shadow-sm">
      <h2 className="text-3xl font-medium text-[#101B24] mb-1">
        Course Curriculum
      </h2>
      <p className="text-[#7D7D7D] leading-relaxed mb-6">
        This course is structured to guide you step-by-step through key concepts
        and practical skills
      </p>

      {/*  */}
      {curriculumData.map((item, index) => (
        <div key={index} className="border-t border-gray-200 py-4">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleIndex(index)}
          >
            <h3 className="text-[#101B24] text-lg font-medium">
              {item?.title}
            </h3>
            {openIndex === index ? (
              <Minus className="text-[#7D7D7D] text-sm" />
            ) : (
              <Plus className="text-[#7D7D7D] text-sm" />
            )}
          </div>
          {openIndex === index && (
            <div className="mt-2 text-sm text-[#7D7D7D] lending-relaxed">
              <p>{item?.subtitle}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
