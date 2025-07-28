import BookPlaylistVideo from "@/modules/home/bookPlaylistVideo/BookPlaylistVideo";
import FeaturedCourses from "@/modules/home/featuredCourses/FeaturedCourses";
import Hero from "@/modules/home/hero/Hero";

export default function Home() {
  return (
    <>
      {/* <ComingSoon /> */}
      <Hero />
      <FeaturedCourses />
      <BookPlaylistVideo />
    </>
  );
}
