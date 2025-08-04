"use client";
import DynamicCourseSection from "@/components/DynamicCourseSection";

import { booksStore } from "@/data/bookStore";
import BookCard from "../home/ourBookStore/BookCard";

export default function BookStores() {
  return (
    <DynamicCourseSection
      title="Discover Knowledge Across Every Field"
      items={booksStore}
      type="Course"
      renderItem={(item, index) => <BookCard key={index} items={item} />}
    />
  );
}
