import DynamicCTA from "@/components/DynamicCTA";
import BookVideoList from "@/modules/bookVideoList/BookVideoList";

function page() {
  return (
    <>
      <DynamicCTA
        heading={"All Book Video List"}
        description={
          "Browse impactful, Qur’an-based courses for personal growth and purpose-driven living."
        }
      />

      {/* All Course Components */}
      <BookVideoList />
    </>
  );
}

export default page;
