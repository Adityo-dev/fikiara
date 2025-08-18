import Link from "next/link";
import { Headphones, Video, FileText } from "lucide-react";

export default function MultimediaIntegration() {
  const medias = [
    { title: "Audio", description: "Learn by listening to books", Icon: Headphones },
    { title: "Video Lessons", description: "Courses & Webinars", Icon: Video },
    { title: "Quiz & Self-Test", description: "Test yourself after learning", Icon: FileText },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-12">Multimedia Integration</h2>
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {medias.map(({ title, description, Icon }) => (
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
          See Courses
        </Link>
      </div>
    </section>
  );
}
