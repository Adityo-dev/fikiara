import Link from "next/link";

export default function CollaborationOpportunities() {
  return (
    <section className="bg-[#0F3A4F] py-20 text-center">
      <h2 className="text-3xl font-semibold text-[#FFA41F] mb-6">
        Collaboration Opportunities
      </h2>
      <p className="max-w-3xl mx-auto text-[#D4D4D4] mb-6">
        Joint projects, content creation, এবং events-এ আমাদের সাথে কাজ করুন।
      </p>
      <Link
        href="/support#contact"
        className="rounded-md bg-[#3CC9F5] text-[#101B24] px-6 py-3 inline-block font-medium"
      >
        Collaborate With Us
      </Link>
    </section>
  );
}
