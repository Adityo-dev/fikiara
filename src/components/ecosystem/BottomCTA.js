import Link from "next/link";

export default function BottomCTA() {
  return (
    <section className="py-20 bg-[#114C5F] text-center">
      <h2 className="text-3xl font-semibold text-[#FFA41F] mb-6">
        Be a part of the Fikiara Movement.
      </h2>
      <Link
        href="/pricing"
        className="rounded-md bg-[#3CC9F5] text-[#101B24] text-lg font-medium px-8 py-4 inline-block"
      >
        Get Started Today
      </Link>
    </section>
  );
}
