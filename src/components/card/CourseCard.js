import Image from "next/image";
import Link from "next/link";

export default function CourseCard({ items }) {
  return (
    <div className="bg-[#FFF] rounded-lg border border-[#FFFFFF33] p-3 text-white w-full shadow-sm">
      <Link href={`/courses/${items?.title}`} className="relative">
        <Image
          width={400}
          height={400}
          src={items?.thumbnail}
          alt={items?.title}
          className="rounded-md w-full h-[200px] object-cover"
        />
        <p className="absolute -bottom-3 left-3 text-sm bg-[#FFA41F] text-[#fff] px-4 py-1 rounded-sm inline-block">
          {items?.category}
        </p>
      </Link>

      <div className="mt-8">
        <div className="flex items-center justify-between">
          {/* itemss Rating */}
          <div className="flex items-center gap-2.5">
            <p className="flex items-center gap-1 text-yellow-400 text-2xl">
              {"★".repeat(5)}
            </p>
            <p className="bg-white text-[#101B24] px-2 rounded">
              {items?.rating}/5
            </p>
          </div>
          {/* course Price */}
          <p className="text-[#101B24] font-medium text-2xl">{items?.price}৳</p>
        </div>

        <p className="text-[#101B24] text-xl font-medium mt-5 line-clamp-1">
          {items?.title}
        </p>
        <p className="text-[#7D7D7D] mt-3">
          Author: <span className="text-[#101B24]">{items?.author}</span>
        </p>

        <div className="mt-5 flex justify-between text-sm border border-[#7D7D7D] p-3 rounded-lg">
          <div className="flex items-center gap-2">
            <Image
              src={"/icons/lessons.svg"}
              width={200}
              height={200}
              alt=""
              className="w-7 h-7 object-contain"
            />
            <p className="flex flex-col">
              <span className="text-[#7D7D7D]">Lessons</span>
              <span className="text-[#101B24] font-medium">
                {items?.lessons}
              </span>
            </p>
          </div>
          <span className="w-[1.5px] h-[40px] bg-[#4A4D4F] opacity-20"></span>
          <div className="flex items-center gap-2">
            <Image
              src={"/icons/clock.svg"}
              width={200}
              height={200}
              alt=""
              className="w-6 h-6 object-contain"
            />

            <p className="flex flex-col">
              <span className="text-[#7D7D7D]">Duration</span>
              <span className="text-[#101B24] font-medium">
                {items?.duration}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
