import DynamicCTA from "@/components/DynamicCTA";
import CourseDetails from "@/modules/allCourse/courseDetails/CourseDetails";

function CourseDetailsCompo() {
  return (
    <>
      <DynamicCTA
        heading={"Course Details"}
        description={
          "Browse impactful, Qur’an-based courses for personal growth and purpose-driven living."
        }
      />

      {/* Course Details Components */}
      <CourseDetails />
    </>
  );
}

export default CourseDetailsCompo;
