import Link from "next/link";

export default function PartnershipPrograms() {
  return (
    <section className="bg-[#114C5F] py-20 text-center">
      <h2 className="text-3xl font-semibold text-[#FFA41F] mb-6">
        Partnership Programs
      </h2>
      <p className="max-w-3xl mx-auto text-[#D4D4D4] mb-6">
        Institute / Mosque / NGO Collaboration → Group Learning <br />
        Affiliate / Influencer Collaboration → Earn & Promote
      </p>
      <Link
        href="/careers#partner"
        className="rounded-md bg-[#3CC9F5] text-[#101B24] px-6 py-3 inline-block font-medium"
      >
        Become a Partner
      </Link>
    </section>
  );
}
