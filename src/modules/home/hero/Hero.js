import Image from "next/image";
import Subject from "../subject/Subject";
import FikiaraHeroMindmap from "@/components/FikiaraHeroMindmap";
import Link from "next/link";

function Hero() {
  return (
    <section className="bg-[#114C5F] relative">
      <div className="relative container mx-auto  px-4 grid grid-cols-2 items-center gap-12 py-12 z-30">
        <div>
          <h1 className="text-[75px] font-semibold leading-25 text-[#F2F2F2] font-english">
            Change your life together, build your future together.
          </h1>
          <p className="text-[#D4D4D4] leading-7 text-lg mt-6 font-english">
            Every plan here is more than just courses or content – it’s a journey. You and your friends will learn, think, and act together. Paying here is not just buying a service, it’s investing in your dreams.
          </p>
            {/* CTA Buttons */}
          <div className="flex items-start gap-5 mt-10">
  {/* Button 1 - Primary */}
  <Link
    href="/bundles-plans"
    className="relative rounded-md bg-[#3CC9F5] text-[#114C5F] text-lg font-medium px-6 py-4 cursor-pointer flex flex-col items-start font-english"
  >
    <span>See Bundles & Plans</span>
    <span className="text-xs text-white/80 mt-1">
      No risk. Trusted by learners worldwide
    </span>
  </Link>

  {/* Button 2 - Secondary */}
  <Link
    href="/choose-plan"
    className="relative rounded-md border border-[#3CC9F5] text-[#3CC9F5] text-lg font-medium px-6 py-4 cursor-pointer flex flex-col items-start font-english"
  >
    <span>Start My Journey</span>
    <span className="text-xs text-[#3CC9F5]/70 mt-1">
      Safe & secure payment
    </span>
  </Link>
</div>

        </div>

       <FikiaraHeroMindmap />
      </div>

      {/* Subject Components */}
      <div className="pb-24">
        <Subject />
      </div>
    </section>
  );
}

export default Hero;
