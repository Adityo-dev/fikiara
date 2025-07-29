import DynamicCTA from "@/components/DynamicCTA";
import AllCourse from "@/modules/allCourse/AllCourse";

function page() {
  return (
    <>
      <DynamicCTA
        heading={"All course"}
        description={
          "Browse impactful, Qur’an-based courses for personal growth and purpose-driven living."
        }
      />
      <AllCourse />
    </>
  );
}

export default page;
