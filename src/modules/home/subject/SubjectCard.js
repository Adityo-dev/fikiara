import Image from "next/image";

export default function SubjectCard({ icon, title, courses, workshops }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg border border-[#FFFFFF1A] bg-[#FFFFFF1A] backdrop-blur-[2px] cursor-pointer">
      {/* Subject Image */}
      <div className="bg-[#FFFFFF1A] p-4 rounded-lg">
        <Image
          width={400}
          height={400}
          src={icon}
          alt={title}
          className="w-12 h-12 object-contain"
        />
      </div>
      {/* Subject Name And Info */}
      <div className="flex-1 space-y-1.5">
        <h3 className="text-white text-lg font-semibold leading-8">{title}</h3>
        <p className="text-sm text-[#FFA41F]">
          • Courses: {courses} <span>• Workshops: {workshops}</span>
        </p>
      </div>
      {/* Arrow Svg */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
      >
        <path
          d="M5.8142 12.9448C5.72056 12.8511 5.66797 12.724 5.66797 12.5915C5.66797 12.459 5.72056 12.3319 5.8142 12.2381L9.62753 8.42481L5.8142 4.61148C5.72592 4.51663 5.67785 4.39127 5.68009 4.26172C5.68233 4.13218 5.7347 4.00854 5.8262 3.91681C5.91793 3.82531 6.04156 3.77294 6.17111 3.7707C6.30065 3.76847 6.42602 3.81654 6.52086 3.90481L10.6875 8.07148C10.7812 8.16523 10.8338 8.29231 10.8338 8.42481C10.8338 8.55731 10.7812 8.68439 10.6875 8.77814L6.52086 12.9448C6.42711 13.0384 6.30003 13.091 6.16753 13.091C6.03503 13.091 5.90795 13.0384 5.8142 12.9448Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
