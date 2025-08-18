import Link from "next/link";

export default function FinalCTA() {
  return (
    <section className="bg-[#114C5F] py-16 text-center">
      <h2 className="text-2xl font-semibold text-[#FFA41F] mb-4">
        Be part of the Fikiara growth journey.
      </h2>
      <Link
        href="/pricing"
        className="rounded-md bg-[#3CC9F5] text-[#101B24] px-8 py-4 inline-block font-medium"
      >
        Start Your Journey
      </Link>
    </section>
  );
}
