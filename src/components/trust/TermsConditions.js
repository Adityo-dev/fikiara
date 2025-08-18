import Link from "next/link";

export default function TermsConditions() {
  return (
    <section id="terms" className="bg-[#114C5F] py-20 text-center">
      <h2 className="text-3xl font-semibold text-[#FFA41F] mb-6">
        Terms & Conditions
      </h2>
      <p className="max-w-3xl mx-auto text-[#D4D4D4] mb-8">
        পরিষ্কারভাবে Terms mention করা হয়েছে: usage rules, copyright,
        এবং fair use policy। আমরা চাই প্রতিটি ইউজার স্বচ্ছ নিয়মে প্ল্যাটফর্ম ব্যবহার করুক।
      </p>
      <Link
        href="/trust#terms"
        className="rounded-md bg-[#3CC9F5] text-[#101B24] px-6 py-3 inline-block font-medium"
      >
        Read Terms
      </Link>
    </section>
  );
}
