import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#114C5F] py-20 text-center">
      <h1 className="text-[40px] font-semibold text-[#FFA41F] mb-4">
        Choose the Plan That Fits You
      </h1>
      <p className="text-[#D4D4D4] text-lg mb-8">
        কোনো লুকানো খরচ নেই। শুধু শেখো, গ্রো করো, ট্রান্সফর্ম করো।
      </p>
      <Link
        href="/support"
        className="rounded-md bg-[#3CC9F5] text-[#101B24] text-lg font-medium px-8 py-4 inline-block"
      >
        Get Started
      </Link>
    </section>
  );
}
