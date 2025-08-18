import Link from "next/link";

export default function MediaUpdates() {
  return (
    <section className="bg-[#0F3A4F] py-20 text-center">
      <h2 className="text-3xl font-semibold text-[#FFA41F] mb-6">Media & Updates</h2>
      <p className="text-[#D4D4D4] mb-6">
        Press Mentions, App Updates / Release Notes, Upcoming Features Roadmap
      </p>
      <Link
        href="/support"
        className="rounded-md bg-[#3CC9F5] text-[#101B24] text-lg font-medium px-8 py-4 inline-block"
      >
        See What’s Coming
      </Link>
    </section>
  );
}
