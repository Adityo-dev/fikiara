import Image from "next/image";

function CourseInfo() {
  return (
    <div>
      <Image
        src={"/openAiCourse2.jpg"}
        width={800}
        height={800}
        alt=""
        className="w-full h-auto rounded-lg shadow-sm mb-7"
      />

      <h2 className="text-[48px] font-semibold leading-[62px]">
        The course structure, modules duration, you’ll learn
      </h2>
      <p className="text-lg text-[#7D7D7D] sm:leading-relaxed mt-[18px]">
        Explore expert-led courses designed to boost your skills and career—at
        your pace, on your schedule.
      </p>
    </div>
  );
}

export default CourseInfo;
