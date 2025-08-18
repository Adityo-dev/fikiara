import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#0F3A4F] py-20 text-center">
      <h1 className="text-[40px] font-semibold text-[#FFA41F] mb-4">
        Grow With Fikiara – Careers & Partnerships
      </h1>
      <p className="text-[#D4D4D4] text-lg mb-8">
        চাকরি, ইন্টার্নশিপ বা পার্টনারশিপ – আপনার সুযোগ এখানে।
      </p>
      <Link
        href="/careers#jobs"
        className="rounded-md bg-[#3CC9F5] text-[#101B24] text-lg font-medium px-8 py-4 inline-block"
      >
        See Open Positions
      </Link>
    </section>
  );
}
