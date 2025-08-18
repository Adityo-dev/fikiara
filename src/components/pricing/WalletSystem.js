import Link from "next/link";

export default function WalletSystem() {
  return (
    <section className="bg-[#114C5F] py-20 text-center">
      <h2 className="text-3xl font-semibold text-[#FFA41F] mb-6">Wallet & Withdraw System</h2>
      <p className="text-[#D4D4D4] mb-8">
        Invite & Earn → টাকা ওয়ালেটে জমা | সরাসরি Withdraw (Bkash, Bank, PayPal etc.)
      </p>
      <Link
        href="/ecosystem"
        className="rounded-md bg-[#3CC9F5] text-[#101B24] text-lg font-medium px-8 py-4 inline-block"
      >
        Start Earning
      </Link>
    </section>
  );
}
