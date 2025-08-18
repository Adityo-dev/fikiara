import Link from "next/link";

export default function VisionCoreValues() {
  return (
    <section id="vision" className="bg-[#0F3A4F] py-20 text-center">
      <h2 className="text-3xl font-semibold text-[#FFA41F] mb-4">
        Transforming lives through knowledge & action
      </h2>
      <p className="text-[#D4D4D4] mb-6">
        Core Values: Authenticity • Growth • Community
      </p>
      <p className="text-[#D4D4D4] mb-8">Inspired by Qur’an → Learning + Reflection ভিত্তিক</p>
      <Link
        href="/ecosystem"
        className="rounded-md bg-[#3CC9F5] text-[#101B24] text-lg font-medium px-8 py-4 inline-block"
      >
        Explore Ecosystem
      </Link>
    </section>
  );
}
