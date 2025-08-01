import SectionColumnsHeaders from "@/components/sectionHeaders/SectionColumnsHeaders";
import { bookPlaylistVideo } from "@/data/bookPlaylistVideo";
import BookPlaylistCard from "./BookPlaylistCard";

function BookPlaylistVideo() {
  return (
    <section className="relative bg-[#eaf1ec] text-white py-32 px-4 overflow-hidden">
      {/* Section Headers title and description */}
      <SectionColumnsHeaders
        title={"Book Playlist Video"}
        description={
          "Dive into our curated book playlist a video journey through timeless classics"
        }
      />

      {/* Book Playlist Video Card */}
      <div className="container mx-auto px-4 grid grid-cols-4 gap-4 mt-16">
        {bookPlaylistVideo.map((card) => (
          <BookPlaylistCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
}

export default BookPlaylistVideo;
