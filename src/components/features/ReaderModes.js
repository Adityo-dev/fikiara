import Link from "next/link";
import { BookOpen, Repeat, Moon, Sun } from "lucide-react";

export default function ReaderModes() {
  const modes = [
    { title: "Scroll Mode", Icon: Repeat },
    { title: "Flipbook Mode", Icon: BookOpen },
    { title: "Dark/Light Theme", Icon: Moon },
    { title: "Adjustable Font Size", Icon: Sun },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12">Reader Modes</h2>
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {modes.map(({ title, Icon }) => (
          <div key={title} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <Icon className="text-[#3CC9F5] mb-4" size={48} />
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href="/ecosystem"
          className="inline-block bg-[#3CC9F5] hover:bg-[#33b0e6] text-[#101B24] font-semibold px-8 py-4 rounded-md"
        >
          Explore Library
        </Link>
      </div>
    </section>
  );
}


