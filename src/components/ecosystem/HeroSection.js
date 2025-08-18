import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#114C5F] py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-[40px] font-semibold text-[#FFA41F] mb-4">
          Grow, Learn & Inspire Together
        </h1>
        <p className="text-[#D4D4D4] text-lg mb-8">
          Books, Courses, Journals, Community – সব এক জায়গায়।
        </p>
        <Link
          href="/pricing"
          className="rounded-md bg-[#3CC9F5] text-[#101B24] text-lg font-medium px-8 py-4 inline-block"
        >
          Explore Plans
        </Link>
      </div>
    </section>
  );
}
