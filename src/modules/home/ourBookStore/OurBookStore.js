import SectionColumnsHeaders from "@/components/sectionHeaders/SectionColumnsHeaders";
import { booksStore } from "@/data/bookStore";
import BookCard from "./BookCard";

function OurBookStore() {
  return (
    <section className="relative bg-[#F5F1EA] py-32 px-4 overflow-hidden">
      <SectionColumnsHeaders
        title={"Our book store"}
        description={`"From classics to bestsellers all "Books that stay with you forever.in one place."`}
      />

      {/* Book Store */}
      <div className="container mx-auto px-4 grid grid-cols-4 gap-4 mt-16">
        {booksStore.map((book) => (
          <BookCard key={book.id} items={book} />
        ))}
      </div>
    </section>
  );
}

export default OurBookStore;
