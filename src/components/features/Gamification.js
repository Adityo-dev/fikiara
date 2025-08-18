import Link from "next/link";
import { Award, Star, Activity } from "lucide-react";

export default function Gamification() {
  const features = [
    { title: "Badges", Icon: Award },
    { title: "XP System", Icon: Star },
    { title: "Leaderboard", Icon: Activity },
  ];

  return (
    <section className="py-24 px-4 bg-[#F0F9FF] text-center">
      <h2 className="text-3xl font-bold mb-12">Gamification</h2>
      <div className="container mx-auto flex justify-center gap-12 mb-12">
        {features.map(({ title, Icon }) => (
          <div key={title} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <Icon className="text-[#3CC9F5] mb-4" size={48} />
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
        ))}
      </div>
      <div>
        <Link
          href="/ecosystem"
          className="inline-block bg-[#3CC9F5] hover:bg-[#33b0e6] text-[#101B24] font-semibold px-8 py-4 rounded-md"
        >
          Join Community
        </Link>
      </div>
    </section>
  );
}
