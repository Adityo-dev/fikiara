import Link from "next/link";

export default function BottomCTA() {
  return (
    <section className="py-24 px-4 bg-[#114C5F] text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Ready to unlock all features?</h2>
      <Link
        href="/pricing"
        className="inline-block bg-[#3CC9F5] hover:bg-[#33b0e6] text-[#101B24] font-semibold px-8 py-4 rounded-md"
      >
        View Pricing Plans
      </Link>
    </section>
  );
}
