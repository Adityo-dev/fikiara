"use client";
import DynamicCourseSection from "@/components/DynamicCourseSection";

import { bookPlaylistVideo } from "@/data/bookPlaylistVideo";
import BookPlaylistCard from "../home/bookPlaylistVideo/BookPlaylistCard";

export default function BookVideoList() {
  return (
    <DynamicCourseSection
      title="Discover Knowledge Across Every Field"
      items={bookPlaylistVideo}
      type="Course"
      renderItem={(item, index) => (
        <BookPlaylistCard key={index} items={item} />
      )}
    />
  );
}
