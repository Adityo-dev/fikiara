import Link from "next/link";

export default function SinglePurchase() {
  return (
    <section className="bg-[#0F3A4F] py-20 text-center">
      <h2 className="text-3xl font-semibold text-[#FFA41F] mb-6">
        Single Purchase Option
      </h2>
      <p className="text-[#D4D4D4] mb-8">
        নির্দিষ্ট বই বা কোর্স একবার কিনে নেওয়ার সুবিধা – Buy once, own forever
      </p>
      <Link
        href="/ecosystem"
        className="rounded-md bg-[#3CC9F5] text-[#101B24] text-lg font-medium px-8 py-4 inline-block"
      >
        Browse Library
      </Link>
    </section>
  );
}
