import BookPlaylistVideo from "@/modules/home/bookPlaylistVideo/BookPlaylistVideo";
import FeaturedCourses from "@/modules/home/featuredCourses/FeaturedCourses";
import Hero from "@/modules/home/hero/Hero";
import Instructors from "@/modules/home/instructors/Instructors";
import JoinCommunity from "@/modules/home/joinCommunity/JoinCommunity";
import OurBookStore from "@/modules/home/ourBookStore/OurBookStore";
import StudentExperiences from "@/modules/home/studentExperiences/StudentExperiences";

export default function Home() {
  return (
    <>
      {/* <ComingSoon /> */}
      <Hero />
      <FeaturedCourses />
      <OurBookStore />
      <BookPlaylistVideo />
      <Instructors />
      <StudentExperiences />
      <JoinCommunity />
    </>
  );
}
