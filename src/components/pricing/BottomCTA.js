import Link from "next/link";

export default function BottomCTA() {
  return (
    <section className="bg-[#114C5F] py-20 text-center">
      <h2 className="text-3xl font-semibold text-[#FFA41F] mb-6">
        Invest in Yourself – Start Today.
      </h2>
      <Link
        href="/checkout"
        className="rounded-md bg-[#3CC9F5] text-[#101B24] text-lg font-medium px-8 py-4 inline-block"
      >
        Choose Your Plan
      </Link>
    </section>
  );
}
