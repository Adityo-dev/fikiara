import Image from "next/image";

export default function CourseCard({ course }) {
  return (
    <div className="bg-[#FFF] rounded-lg border border-[#FFFFFF33] p-3 text-white w-full shadow-sm">
      <div className="relative">
        <Image
          width={400}
          height={400}
          src={course?.thumbnail}
          alt={course?.title}
          className="rounded-md w-full h-[200px] object-cover"
        />
        <p className="absolute -bottom-3 left-3 text-sm bg-[#FFA41F] text-[#fff] px-4 py-1 rounded-sm inline-block">
          {course?.category}
        </p>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between">
          {/* Courses Rating */}
          <div className="flex items-center gap-2.5">
            <p className="flex items-center gap-1 text-yellow-400 text-2xl">
              {"★".repeat(5)}
            </p>
            <p className="bg-white text-[#101B24] px-2 rounded">
              {course?.rating}/5
            </p>
          </div>
          {/* Courses Price */}
          <p className="text-[#101B24] font-medium text-2xl">
            {course?.price}৳
          </p>
        </div>

        <p className="text-[#101B24] text-xl font-medium mt-5">
          {course?.title}
        </p>
        <p className="text-[#7D7D7D] mt-3">
          Author: <span className="text-[#101B24]">{course?.author}</span>
        </p>

        <div className="mt-5 flex justify-between text-sm border border-[#7D7D7D] p-3 rounded-lg">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <defs>
                <clipPath id="clip0_29685_907">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.849609)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p className="flex flex-col">
              <span className="text-[#7D7D7D]">Lessons</span>
              <span className="text-[#101B24] font-medium">
                {course?.lessons}
              </span>
            </p>
          </div>
          <span className="w-[1.5px] h-[40px] bg-[#4A4D4F] opacity-20"></span>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <g clip-path="url(#clip0_29685_920)">
                <path
                  d="M12 7.96072V12.8496L15.6667 16.5163M23 12.8496C23 18.9247 18.0751 23.8496 12 23.8496C5.92487 23.8496 1 18.9247 1 12.8496C1 6.77448 5.92487 1.84961 12 1.84961C18.0751 1.84961 23 6.77448 23 12.8496Z"
                  stroke="#101B24"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_29685_920">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 0.849609)"
                  />
                </clipPath>
              </defs>
            </svg>
            <p className="flex flex-col">
              <span className="text-[#7D7D7D]">Duration</span>
              <span className="text-[#101B24] font-medium">
                {course?.duration}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
