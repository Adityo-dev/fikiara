import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#114C5F] text-white py-24 px-4 text-center md:text-left">
      <div className="container mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Features That Empower Your Growth
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Read, write, learn, share – all in one platform.
        </p>
        <Link
          href="/pricing"
          className="inline-block bg-[#3CC9F5] hover:bg-[#33b0e6] text-[#101B24] font-semibold px-8 py-4 rounded-md"
        >
          Try Fikiara Now
        </Link>
      </div>
    </section>
  );
}
