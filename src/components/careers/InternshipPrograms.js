import Link from "next/link";

export default function InternshipPrograms() {
  return (
    <section className="bg-[#0F3A4F] py-20 text-center">
      <h2 className="text-3xl font-semibold text-[#FFA41F] mb-6">
        Internship Programs
      </h2>
      <p className="max-w-3xl mx-auto text-[#D4D4D4] mb-6">
        Duration: 1–6 months <br />
        Learning & Hands-on experience <br />
        Mentorship provided
      </p>
      <Link
        href="/careers#apply"
        className="rounded-md bg-[#3CC9F5] text-[#101B24] px-6 py-3 inline-block font-medium"
      >
        Join Internship
      </Link>
    </section>
  );
}
