import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function InstructorCard() {
  return (
    <div className="w-full mx-auto bg-[#FFF] rounded-md shadow-sm overflow-hidden p-6">
      <h2 className="text-3xl font-medium mb-7">Instructor</h2>
      <div className="flex space-x-6">
        {/* Image */}
        <Image
          src="/Instructor.png"
          alt="Shojib Ahmed"
          width={400}
          height={400}
          className="rounded-md object-cover w-[250px] h-[260px]"
        />
        {/* Info */}
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-semibold text-[#101B24]">
              Shojib ahmed
            </h3>
            <p className="text-lg text-[#101B24] my-2 capitalize">
              ux ui designer
            </p>
            <div className="flex items-center mb-2">
              <span className="text-[#FFB017] text-2xl mr-1">★</span>
              <span className="text-[#7D7D7D]">5.0 Rating</span>
            </div>
            <p className="text-[#7D7D7D] text-lg leading-relaxed mb-6">
              Meet our team of expert instructors experienced, passionate, and
              dedicated to your success
            </p>
          </div>

          {/* Instructor Social Links */}
          <div className="flex space-x-4 text-gray-500">
            <a href="#">
              <Facebook />
            </a>
            <a href="#">
              <Instagram />
            </a>
            <a href="#">
              <Twitter />
            </a>
            <a href="#">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
