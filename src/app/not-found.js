import ErrorIllustration from "@/modules/not-found/ErrorIllustration";
import Link from "next/link";

export default function Custom404() {
  return (
    <main className="min-h-[90vh] flex items-center justify-center bg-[#F5F1EA] from-gray-50 to-white p-8">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <section className="space-y-4">
          <h1 className="text-[100px] font-extrabold text-[#000000]">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-[#000000]">
            Page not found
          </h2>
          <p className="text-[#000000]">
            Looks like the page you&apos;re trying to reach doesn&apos;t exist
            (yet!).
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#FFA41F] text-white font-medium shadow hover:brightness-95 transition"
            >
              Go back home
            </Link>

            <Link
              href="/courses"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-gray-200 text-[#000000] hover:bg-gray-50 transition"
            >
              Browse courses
            </Link>
          </div>

          <p className="text-sm text-[#000000]">
            Tip: try checking the URL or go to the course list to continue
            learning.
          </p>
        </section>

        <aside className="flex items-center justify-center">
          <ErrorIllustration />
        </aside>
      </div>
    </main>
  );
}
