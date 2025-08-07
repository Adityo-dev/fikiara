import Image from "next/image";

export default function SubjectCard({ icon, title, courses, workshops }) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg border border-[#FFFFFF1A] bg-[#295E6F] backdrop-blur-[2px] shadow-sm cursor-pointer">
      {/* Subject Image */}
      <div className="bg-[#3E6E7D] p-4 rounded-lg">
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
      <Image
        src={"/icons/rightArrow.svg"}
        width={50}
        height={50}
        alt=""
        className="w-6 h-6 object-contain"
      />
    </div>
  );
}
