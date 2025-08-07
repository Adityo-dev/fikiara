import DynamicCTA from "@/components/DynamicCTA";
import BookVideoDetails from "@/modules/bookVideoList/bookVideoDetails/BookVideoDetails";

function CourseDetailsCompo() {
  return (
    <>
      <DynamicCTA
        heading={"book  play list details"}
        description={
          "Browse impactful, Qur’an-based courses for personal growth and purpose-driven living."
        }
      />

      {/* Book Video Details */}
      <BookVideoDetails />
    </>
  );
}

export default CourseDetailsCompo;
