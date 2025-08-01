import Image from "next/image";
import Link from "next/link";

function CourseCard({ course }) {
  return (
    <Link href={`/courses/${course?.title}`} passHref>
      <div
        key={course.id}
        className="bg-[#FFF] rounded-lg overflow-hidden shadow-sm"
      >
        <Image
          src={course?.image}
          width={400}
          height={400}
          alt={course?.title}
          className="w-full h-[250px] object-fill"
        />
        <div className="p-4">
          {/* Rating stars */}
          <div className="flex items-center text-yellow-500 mb-2 text-sm">
            {"★".repeat(Math.round(course?.rating))}{" "}
            <span className="ml-2 text-gray-600">
              ({course?.rating.toFixed(1)})
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[#101B24] text-[20px] font-medium text-md mb-1 line-clamp-1">
            {course?.title}
          </h2>

          {/* Instructor */}
          <p className="text-sm text-[#101B2466] mb-3">
            by {course?.instructor}
          </p>

          {/* Price */}
          <p className="text-[#101B24] font-semibold text-[20px]">
            ${course.price.toFixed(2)}
          </p>
        </div>

        {/* Lessons and Mentor */}
        <div className="border-t border-[#ee9c7e99] text-sm text-[#2c373f] ">
          <p className="p-4 flex items-center justify-between">
            <span>📚 {course.lessons} Lessons </span>
            <span>👨‍🏫 • Md: {course.mentor}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard;
