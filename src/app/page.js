import BookPlaylistVideo from "@/modules/home/bookPlaylistVideo/BookPlaylistVideo";
import FeaturedCourses from "@/modules/home/featuredCourses/FeaturedCourses";
import Hero from "@/modules/home/hero/Hero";
import OurBookStore from "@/modules/home/ourBookStore/OurBookStore";
import StudentExperiences from "@/modules/home/studentExperiences/StudentExperiences";

export default function Home() {
  return (
    <>
      {/* <ComingSoon /> */}
      <Hero />
      <FeaturedCourses />
      <BookPlaylistVideo />
      <OurBookStore />
      <StudentExperiences />
    </>
  );
}
