import Image from "next/image";

export default function CourseCard({ course }) {
  return (
    <div className="fill-[#11277C] stroke-[rgba(255,255,255,0.1)] stroke-[1px] rounded-xl border border-white/10 p-3 text-white w-full  backdrop-blur-[2px]">
      <div className="relative">
        <Image
          width={400}
          height={400}
          src={course.thumbnail}
          alt={course.title}
          className="rounded-md w-full h-[200px] object-cover"
        />
        <p className="absolute -bottom-3 left-3 text-sm bg-[#1DAB55] px-4 py-1 rounded-sm inline-block">
          {course.category}
        </p>
      </div>

      <div className="mt-9">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <p className="flex items-center gap-1 text-yellow-400 text-2xl">
              {"★".repeat(5)}
            </p>
            <p className="text-sm bg-white text-black px-2 rounded">
              {course.rating}/5
            </p>
          </div>
          <p className="font-medium text-2xl">{course.price}৳</p>
        </div>

        <p className="text-xl font-medium leading-8 mt-4">{course.title}</p>
        <p className="text-sm text-[#D4D4D4] mt-2">
          Author: <span className="text-[#fff]">{course.author}</span>
        </p>

        <div className="mt-5 flex justify-between text-sm bg-[#fff] p-3 rounded-lg">
          <div className="flex items-center gap-2">
            📘
            <p className="flex flex-col">
              <span className="text-[#7D7D7D]">Lessons</span>
              <span className="text-[#101B24] font-medium">
                {course.lessons}
              </span>
            </p>
          </div>
          <span className="w-[1.5px] h-[40px] bg-[#4A4D4F]"></span>
          <div className="flex items-center gap-2">
            ⏱
            <p className="flex flex-col">
              <span className="text-[#7D7D7D]">Duration</span>
              <span className="text-[#101B24] font-medium">
                {course.duration}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
