import Link from "next/link";

export default function SubscriptionPlans() {
  return (
    <section className="bg-[#114C5F] py-20 text-center">
      <h2 className="text-3xl font-semibold text-[#FFA41F] mb-6">
        Subscription Plans
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
        <div className="bg-[#0F3A4F] p-6 rounded-lg text-[#D4D4D4]">
          Monthly Plan → Regular learners
        </div>
        <div className="bg-[#0F3A4F] p-6 rounded-lg text-[#D4D4D4]">
          Yearly Plan → Save more + extra features
        </div>
      </div>
      <Link
        href="/checkout"
        className="rounded-md bg-[#3CC9F5] text-[#101B24] text-lg font-medium px-8 py-4 inline-block"
      >
        Subscribe Now
      </Link>
    </section>
  );
}
