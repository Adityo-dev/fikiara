import Link from "next/link";

export default function FreeVsPaid() {
  return (
    <section className="bg-[#0F3A4F] py-20 text-center">
      <h2 className="text-3xl font-semibold text-[#FFA41F] mb-6">Free vs Paid Comparison</h2>
      <p className="text-[#D4D4D4] mb-8">
        Free Plan → Limited access | Paid Plan → Full library + community + tracking
      </p>
      <Link
        href="/checkout"
        className="rounded-md bg-[#3CC9F5] text-[#101B24] text-lg font-medium px-8 py-4 inline-block"
      >
        Upgrade Now
      </Link>
    </section>
  );
}
