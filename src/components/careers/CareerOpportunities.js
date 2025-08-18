import Link from "next/link";

export default function CareerOpportunities() {
  const jobs = [
    "Full-time Jobs → Development, Marketing, Content, Design",
    "Part-time Jobs → Flexible roles",
    "Remote Opportunities",
  ];

  return (
    <section id="jobs" className="bg-[#114C5F] py-20 text-center">
      <h2 className="text-3xl font-semibold text-[#FFA41F] mb-6">
        Career Opportunities
      </h2>
      <ul className="max-w-2xl mx-auto space-y-4 text-[#D4D4D4] text-lg">
        {jobs.map((job, i) => (
          <li key={i} className="bg-[#0F3A4F] p-4 rounded-md shadow-md">
            {job}
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Link
          href="/careers#apply"
          className="rounded-md bg-[#3CC9F5] text-[#101B24] px-6 py-3 inline-block font-medium"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
}
