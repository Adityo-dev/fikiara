import SubjectCard from "./SubjectCard";

const subjects = [
  {
    icon: "/📐.png",
    title: "Mathematics",
    courses: 12,
    workshops: 3,
  },
  {
    icon: "/icons/🔬.png",
    title: "Science",
    courses: 10,
    workshops: 4,
  },
  {
    icon: "/icons/📖.png",
    title: "English",
    courses: 15,
    workshops: 5,
  },
  {
    icon: "/icons/🧪.png",
    title: "Geography",
    courses: 9,
    workshops: 3,
  },
  {
    icon: "/icons/🏛️.png",
    title: "History",
    courses: 7,
    workshops: 2,
  },
  {
    icon: "/icons/laptop.png",
    title: "Computer Studies",
    courses: 11,
    workshops: 4,
  },
  {
    icon: "/icons/laptop.png",
    title: "Computer Studies",
    courses: 11,
    workshops: 4,
  },
  {
    icon: "/icons/laptop.png",
    title: "Computer Studies",
    courses: 11,
    workshops: 4,
  },
];

export default function Subject() {
  return (
    <section className="container mx-auto px-4 grid grid-cols-4 gap-6">
      {subjects.map((subject, idx) => (
        <SubjectCard key={idx} {...subject} />
      ))}
    </section>
  );
}
