import Link from "next/link";

export default function SecurityFeatures() {
  const features = ["Encrypted Notes", "Safe Payment System", "Account Protection (2FA future add)"];

  return (
    <section className="bg-[#0F3A4F] py-20 text-center">
      <h2 className="text-3xl font-semibold text-[#FFA41F] mb-6">
        Security Features
      </h2>
      <ul className="max-w-2xl mx-auto space-y-4 text-[#D4D4D4] text-lg">
        {features.map((item, i) => (
          <li key={i} className="bg-[#114C5F] p-4 rounded-md shadow-md">
            {item}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link
          href="/support"
          className="rounded-md bg-[#3CC9F5] text-[#101B24] px-6 py-3 inline-block font-medium"
        >
          Learn More
        </Link>
      </div>
    </section>
  );
}
