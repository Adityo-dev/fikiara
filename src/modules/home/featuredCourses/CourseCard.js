import Image from "next/image";

export default function CourseCard({ course }) {
  return (
    <div className="bg-[#FFF] rounded-lg border border-[#FFFFFF33] p-3 text-white w-full">
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
              <g clip-path="url(#clip0_29685_907)">
                <path
                  d="M20.6601 6.40594L15.5843 1.33022C15.2745 1.02028 14.8625 0.849609 14.4242 0.849609H4.5C3.59536 0.849609 2.85938 1.58559 2.85938 2.49023V23.209C2.85938 24.1136 3.59536 24.8496 4.5 24.8496H19.5C20.4046 24.8496 21.1406 24.1136 21.1406 23.209V7.56605C21.1406 7.12791 20.97 6.71592 20.6601 6.40594ZM18.74 6.47461H15.75C15.6208 6.47461 15.5156 6.36947 15.5156 6.24023V3.25027L18.74 6.47461ZM19.5 23.4434H4.5C4.37077 23.4434 4.26562 23.3382 4.26562 23.209V2.49023C4.26562 2.361 4.37077 2.25586 4.5 2.25586H14.1094V6.24023C14.1094 7.14488 14.8454 7.88086 15.75 7.88086H19.7344V23.209C19.7344 23.3382 19.6292 23.4434 19.5 23.4434Z"
                  fill="#101B24"
                />
                <path
                  d="M12.7547 11.584H17.2346C17.6229 11.584 17.9377 11.2692 17.9377 10.8809C17.9377 10.4925 17.6229 10.1777 17.2346 10.1777H12.7547C12.3664 10.1777 12.0516 10.4925 12.0516 10.8809C12.0516 11.2692 12.3663 11.584 12.7547 11.584Z"
                  fill="#101B24"
                />
                <path
                  d="M12.7547 16.2715H17.2346C17.6229 16.2715 17.9377 15.9567 17.9377 15.5684C17.9377 15.18 17.6229 14.8652 17.2346 14.8652H12.7547C12.3664 14.8652 12.0516 15.18 12.0516 15.5684C12.0516 15.9567 12.3663 16.2715 12.7547 16.2715Z"
                  fill="#101B24"
                />
                <path
                  d="M17.2547 19.5527H12.7547C12.3664 19.5527 12.0516 19.8675 12.0516 20.2559C12.0516 20.6442 12.3664 20.959 12.7547 20.959H17.2547C17.643 20.959 17.9578 20.6442 17.9578 20.2559C17.9578 19.8675 17.643 19.5527 17.2547 19.5527Z"
                  fill="#101B24"
                />
                <path
                  d="M9.24637 8.96632L7.62487 10.5878L7.24251 10.2054C6.96796 9.93082 6.52274 9.93082 6.24815 10.2054C5.97356 10.48 5.97356 10.9252 6.24815 11.1998L7.12771 12.0793C7.26501 12.2166 7.44496 12.2853 7.62487 12.2853C7.80478 12.2853 7.98478 12.2167 8.12203 12.0793L10.2407 9.96068C10.5153 9.68609 10.5153 9.24092 10.2407 8.96632C9.96614 8.69173 9.52092 8.69173 9.24637 8.96632Z"
                  fill="#101B24"
                />
                <path
                  d="M9.24637 14.0119L7.62487 15.6334L7.24251 15.251C6.96796 14.9765 6.52274 14.9764 6.24815 15.251C5.97356 15.5256 5.97356 15.9708 6.24815 16.2454L7.12771 17.1249C7.26501 17.2622 7.44496 17.3308 7.62487 17.3308C7.80478 17.3308 7.98478 17.2622 8.12203 17.1248L10.2407 15.0062C10.5153 14.7316 10.5153 14.2864 10.2407 14.0118C9.96614 13.7373 9.52092 13.7373 9.24637 14.0119Z"
                  fill="#101B24"
                />
                <path
                  d="M9.24637 18.6994L7.62487 20.3209L7.24251 19.9385C6.96796 19.664 6.52274 19.6639 6.24815 19.9385C5.97356 20.2131 5.97356 20.6583 6.24815 20.9329L7.12771 21.8124C7.26501 21.9497 7.44496 22.0183 7.62487 22.0183C7.80478 22.0183 7.98478 21.9497 8.12203 21.8123L10.2407 19.6937C10.5153 19.4191 10.5153 18.9739 10.2407 18.6993C9.96614 18.4248 9.52092 18.4248 9.24637 18.6994Z"
                  fill="#101B24"
                />
              </g>
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
