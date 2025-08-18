import Link from "next/link";

export default function DataPrivacy() {
  return (
    <section id="privacy" className="bg-[#114C5F] py-20 text-center">
      <h2 className="text-3xl font-semibold text-[#FFA41F] mb-6">
        Data Privacy Policy
      </h2>
      <p className="max-w-3xl mx-auto text-[#D4D4D4] mb-8">
        আমরা আপনার ব্যক্তিগত ডাটা সম্পূর্ণ সুরক্ষিত রাখি। কোনো third-party misuse নেই।
        সবকিছু encryption এবং নিরাপদ সার্ভারে সংরক্ষণ করা হয়।
      </p>
      <Link
        href="/trust#privacy"
        className="rounded-md bg-[#3CC9F5] text-[#101B24] px-6 py-3 inline-block font-medium"
      >
        View Full Policy
      </Link>
    </section>
  );
}
