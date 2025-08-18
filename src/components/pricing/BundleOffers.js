import Link from "next/link";

export default function BundleOffers() {
  return (
    <section className="bg-[#0F3A4F] py-20 text-center">
      <h2 className="text-3xl font-semibold text-[#FFA41F] mb-6">Bundle Offers</h2>
      <p className="text-[#D4D4D4] mb-8">
        Book + Course Package | Family / Institute Plan | Visual comparison: Bundle vs Single
      </p>
      <Link
        href="/checkout"
        className="rounded-md bg-[#3CC9F5] text-[#101B24] text-lg font-medium px-8 py-4 inline-block"
      >
        Get Bundle Deal
      </Link>
    </section>
  );
}
