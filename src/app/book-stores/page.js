import DynamicCTA from "@/components/DynamicCTA";
import BookStores from "@/modules/bookStores/BookStores";

function page() {
  return (
    <>
      <DynamicCTA
        heading={"All Book"}
        description={
          "Browse impactful, Qur’an-based courses for personal growth and purpose-driven living."
        }
      />

      {/* All Course Components */}
      <BookStores />
    </>
  );
}

export default page;
