import DynamicCTA from "@/components/DynamicCTA";
import BookDetailsSinglePage from "@/modules/bookStores/bookDetails/BookDetailsSinglePage";

function BooksSinglePage() {
  return (
    <>
      <DynamicCTA
        heading={"Our Book Store"}
        description={
          "Browse impactful, Qur’an-based courses for personal growth and purpose-driven living."
        }
      />

      {/* Books Details Single Page */}
      <BookDetailsSinglePage />
    </>
  );
}

export default BooksSinglePage;
