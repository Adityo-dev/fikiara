import Subject from "../subject/Subject";
import Carousel3D from "./Carousel3D";

function Hero() {
  return (
    <section className="bg-[#114C5F] relative">
      <div className="relative container mx-auto  px-4 grid grid-cols-2 gap-8 py-32 z-30">
        <div className="col-span-1">
          <h1 className="text-[80px] font-semibold leading-24">
            Learn Anytime, <br /> Grow Every day.
          </h1>
          <p className="text-[#D4D4D4] leading-7 text-lg mt-6">
            Explore expert-led courses designed to boost your skills and
            career—at your pace, on your schedule.
          </p>
          <div className=" flex items-center gap-5 mt-10">
            <button className="rounded-md bg-[#FFA41F] text-[#101B24] text-lg font-medium px-6 py-2 cursor-pointer">
              Start Learning
            </button>
            <button className="rounded-md border border-[#FFA41F] text-[#FFA41F] text-lg font-medium px-6 py-2 cursor-pointer">
              Start Learning
            </button>
          </div>
        </div>

        <div className="col-span-1">
          <Carousel3D />
        </div>
      </div>
      {/* Subject Components */}
      <div className="pb-24">
        <Subject />
      </div>
    </section>
  );
}

export default Hero;
