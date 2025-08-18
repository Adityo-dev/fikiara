import Link from "next/link";

export default function GrowthEarning() {
  return (
    <section className="py-20 bg-[#114C5F]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-[#FFA41F] mb-10">
          Growth & Earning Opportunities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-[#D4D4D4] mb-8">
          <div className="bg-[#0F3A4F] p-6 rounded-lg">Subscription Plans</div>
          <div className="bg-[#0F3A4F] p-6 rounded-lg">Invite & Earn</div>
          <div className="bg-[#0F3A4F] p-6 rounded-lg">Affiliate & Influencer Program</div>
          <div className="bg-[#0F3A4F] p-6 rounded-lg">Transformation Tracker</div>
        </div>
        <Link
          href="/pricing"
          className="rounded-md bg-[#3CC9F5] text-[#101B24] text-lg font-medium px-8 py-4 inline-block"
        >
          Start Earning
        </Link>
      </div>
    </section>
  );
}
