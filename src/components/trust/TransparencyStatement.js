import Link from "next/link";

export default function TransparencyStatement() {
  return (
    <section className="bg-[#114C5F] py-20 text-center">
      <h2 className="text-3xl font-semibold text-[#FFA41F] mb-6">
        Transparency Statement
      </h2>
      <p className="max-w-3xl mx-auto text-[#D4D4D4] mb-8">
        আমাদের Commitment: কোনো hidden charge নেই।  
        ভবিষ্যতের roadmap আমরা publicly শেয়ার করি যাতে আপনারা জানেন আমরা কোথায় যাচ্ছি।
      </p>
      <Link
        href="/about"
        className="rounded-md bg-[#3CC9F5] text-[#101B24] px-6 py-3 inline-block font-medium"
      >
        See Roadmap
      </Link>
    </section>
  );
}
