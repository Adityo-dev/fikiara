import DynamicCTA from "@/components/DynamicCTA";
import SearchCompo from "@/modules/search/SearchCompo";

function Search() {
  return (
    <>
      <DynamicCTA
        heading={"What are you looking for?"}
        description={
          "Browse impactful, Qur’an-based courses for personal growth and purpose-driven living."
        }
      />

      {/* Search Component Section */}
      <SearchCompo />
    </>
  );
}

export default Search;
