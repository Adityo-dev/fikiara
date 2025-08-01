import BuyThisCourse from "./BuyThisCourse";
import CourseInfo from "./CourseInfo";
import CourseTag from "./CourseTag";
import Tabs from "./Tab";

function CourseDetails() {
  return (
    <section className="bg-[#F5F1EA] text-black">
      <div className="container mx-auto px-4 py-16 grid grid-cols-6 gap-8">
        <div className="col-span-4 space-y-16">
          <CourseInfo />
          <Tabs />
        </div>
        <div className="col-span-2 space-y-10">
          <BuyThisCourse />
          <CourseTag />
        </div>
      </div>
    </section>
  );
}

export default CourseDetails;
