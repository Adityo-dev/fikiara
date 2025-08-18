import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#114C5F] py-20 text-center">
      <h1 className="text-[40px] font-semibold text-[#FFA41F] mb-4">
        Knowledge + Action = Transformation
      </h1>
      <p className="text-[#D4D4D4] text-lg mb-8">
        আমাদের উদ্দেশ্য হলো জ্ঞানকে কাজে রূপান্তর করে জীবন পরিবর্তন করা।
      </p>
      <Link
        href="#vision"
        className="rounded-md bg-[#3CC9F5] text-[#101B24] text-lg font-medium px-8 py-4 inline-block"
      >
        See Our Vision
      </Link>
    </section>
  );
}
