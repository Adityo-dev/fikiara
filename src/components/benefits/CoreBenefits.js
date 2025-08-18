import { Star, Book, Users } from "lucide-react";

export default function CoreBenefits() {
  const benefits = [
    {
      title: "Personal Growth",
      description: "Self-discipline, Knowledge, Productivity",
      Icon: Star,
    },
    {
      title: "Spiritual Toolkit",
      description: "Qur’an-inspired lessons, Journals, Reflection tools",
      Icon: Book,
    },
    {
      title: "Earn & Inspire",
      description: "Invite & Earn, Affiliate, Content Creation",
      Icon: Users,
    },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {benefits.map(({ title, description, Icon }) => (
          <div key={title} className="bg-white p-6 rounded-lg shadow-lg text-center">
            <Icon className="mx-auto mb-4 text-[#3CC9F5]" size={48} />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
