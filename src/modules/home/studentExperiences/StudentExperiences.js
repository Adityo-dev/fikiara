import SectionColumnsHeaders from "@/components/sectionHeaders/SectionColumnsHeaders";
import FaqCompo from "./FaqCompo";
const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
];
function StudentExperiences() {
  return (
    <section className="relative bg-[#eaf1ec] py-32 overflow-hidden">
      <SectionColumnsHeaders
        title={"Student Experiences That Inspire"}
        description={
          "Our students are at the heart of everything we do. Hear how our LMS has helped thousands build skills, and succeed in their academic and professional journeys."
        }
      />

      {/* Faq Components */}
      <FaqCompo faqData={data} />
    </section>
  );
}

export default StudentExperiences;
