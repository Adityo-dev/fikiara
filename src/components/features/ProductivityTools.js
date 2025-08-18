import { Bookmark, FileText, BarChart2 } from "lucide-react";

export default function ProductivityTools() {
  const tools = [
    { title: "Highlight, Notes, Bookmark", description: "Smart reading features", Icon: Bookmark },
    { title: "Progress Tracker", description: "Track how far you've come", Icon: BarChart2 },
    { title: "Visual Demo", description: "Screenshot-style preview", Icon: FileText },
  ];

  return (
    <section className="py-24 px-4 bg-[#F0F9FF] text-center">
      <h2 className="text-3xl font-bold mb-12">Productivity Tools</h2>
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {tools.map(({ title, description, Icon }) => (
          <div key={title} className="bg-white p-6 rounded-lg shadow-lg">
            <Icon className="text-[#3CC9F5] mx-auto mb-4" size={48} />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
