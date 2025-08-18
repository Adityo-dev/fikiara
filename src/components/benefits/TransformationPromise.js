import Link from "next/link";
import { BookOpen, ClipboardCheck, BarChart } from "lucide-react";

export default function TransformationPromise() {
  const steps = [
    { title: "Learn", description: "Books, Courses", Icon: BookOpen },
    { title: "Apply", description: "Journals, Quizzes, Gamification", Icon: ClipboardCheck },
    { title: "Transform", description: "Track progress, Inspire others", Icon: BarChart },
  ];

  return (
    <section className="py-24 px-4 bg-[#F0F9FF] text-center">
      <h2 className="text-3xl font-bold mb-12">From Stuck → To Growth</h2>
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {steps.map(({ title, description, Icon }) => (
          <div key={title} className="bg-white p-6 rounded-lg shadow-lg">
            <Icon className="text-[#3CC9F5] mx-auto mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12">
        <Link
          href="/ecosystem"
          className="inline-block bg-[#3CC9F5] hover:bg-[#33b0e6] text-[#101B24] font-semibold px-8 py-4 rounded-md"
        >
          See How It Works
        </Link>
      </div>
    </section>
  );
}
