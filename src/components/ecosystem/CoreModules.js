import Link from "next/link";

export default function CoreModules() {
  return (
    <section className="py-20 bg-[#0F3A4F]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold text-[#FFA41F] mb-10">
          Core Ecosystem Modules
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-[#D4D4D4] mb-8">
          <div className="bg-[#114C5F] p-6 rounded-lg">Books Library</div>
          <div className="bg-[#114C5F] p-6 rounded-lg">Courses</div>
          <div className="bg-[#114C5F] p-6 rounded-lg">Journals</div>
          <div className="bg-[#114C5F] p-6 rounded-lg">Group Learning</div>
        </div>
        <Link
          href="/features"
          className="rounded-md bg-[#3CC9F5] text-[#101B24] text-lg font-medium px-8 py-4 inline-block"
        >
          Browse Library
        </Link>
      </div>
    </section>
  );
}
