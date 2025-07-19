import Image from "next/image";
import Subject from "../subject/Subject";

function Hero() {
  return (
    <section className="bg-[#000247]">
      <div className="relative container mx-auto flex items-center justify-between gap-12 py-36 px-4 z-40">
        <div>
          <h1 className="text-[80px] font-semibold leading-24">
            Learn Anytime Grow, Every day.
          </h1>
          <p className=" text-[#D4D4D4] leading-7 text-lg mt-6">
            Explore expert-led courses designed to boost your skills and
            career—at your pace, on your schedule.
          </p>
          <button className="mt-9 rounded-md bg-[#1DAB55] text-white px-6 py-2.5 text-lg font-semibold cursor-pointer">
            Start Learning
          </button>
        </div>
        <Image src={"/hero.png"} width={648} height={448} alt="" />
      </div>
      {/* Subject Components */}
      <div className="pb-24">
        <Subject />
      </div>
    </section>
  );
}

export default Hero;
