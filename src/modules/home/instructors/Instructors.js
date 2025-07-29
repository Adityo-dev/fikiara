import SectionRowHeaders from "@/components/sectionHeaders/SectionRowHeaders";
import { instructors } from "@/data/instructors";
import InstructorCard from "./InstructorCard";

function Instructors() {
  return (
    <section className="relative bg-[#F5F1EA] py-32 overflow-hidden">
      <SectionRowHeaders
        title={"Your success starts with our top instructors."}
        description={
          "Our expert instructors bring real-world experience, industry knowledge, and a passion for teaching to every lesson"
        }
      />

      <div className="container mx-auto px-4 grid grid-cols-4 gap-4 mt-16">
        {instructors.map((instructor) => (
          <InstructorCard key={instructor.id} instructor={instructor} />
        ))}
      </div>
    </section>
  );
}

export default Instructors;
