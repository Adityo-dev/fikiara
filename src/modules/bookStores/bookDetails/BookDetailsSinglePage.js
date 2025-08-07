import DynamicTabs from "@/components/tab/DynamicTabs";
import BookDetails from "./BookDetails";
import Descriptions from "./Descriptions";

function BookDetailsSinglePage() {
  return (
    <div className="bg-[#F5F1EA] py-16">
      <BookDetails />

      <div className="container mx-auto px-4 py-16">
        <DynamicTabs
          labels={["Descriptions", "Reviews"]}
          contents={[
            <>
              <Descriptions />
            </>,
            <>
              <p className="text-[#101B24CC]">This is the Reviews content.</p>,
            </>,
          ]}
        />
      </div>
    </div>
  );
}

export default BookDetailsSinglePage;
