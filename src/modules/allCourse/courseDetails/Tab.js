import DynamicTabs from "@/components/tab/DynamicTabs";
import CourseCurriculum from "./CourseCurriculum";
import CourseOverview from "./CourseOverview";
import InstructorCard from "./InstructorCard";

export default function Tab() {
  return (
    <DynamicTabs
      labels={["Course Overview", "Curriculum", "Introduction", "Reviews"]}
      contents={[
        <>
          <CourseOverview />
        </>,
        <>
          <CourseCurriculum />
        </>,
        <>
          <InstructorCard />
        </>,
        <>This is the Reviews content.</>,
      ]}
    />
  );
}
