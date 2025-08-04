"use client";

import { useMemo, useState } from "react";

export default function DynamicCourseSection({
  title,
  items,
  type,
  renderItem,
}) {
  const [selectedCategory, setSelectedCategory] = useState(`All ${type}`);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const categoryMap = {};
    let totalLessons = 0;

    items.forEach((item) => {
      const lessons = item.lessons || 0;
      const category = item.category || "Uncategorized";

      totalLessons += lessons;

      if (!categoryMap[category]) {
        categoryMap[category] = 0;
      }
      categoryMap[category] += lessons;
    });

    return [
      { name: `All ${type}`, lessons: totalLessons },
      ...Object.entries(categoryMap).map(([name, lessons]) => ({
        name,
        lessons,
      })),
    ];
  }, [items, type]);

  const filteredItems = items.filter((item) => {
    const matchCategory =
      selectedCategory === `All ${type}` || item.category === selectedCategory;
    const matchSearch = item.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="bg-[#F5F1EA] text-black">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-[#121212] text-2xl font-medium mb-4">{title}</h1>

        {/* Category Tabs */}
        <div className="flex gap-4 mb-6 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setSelectedCategory(cat.name)}
              className={`flex flex-col text-start border px-4 py-1.5 rounded-lg transition cursor-pointer ${
                selectedCategory === cat.name
                  ? "bg-[#FFC9B5] border-[#FFC9B5]"
                  : "text-black border-[#101B2419]"
              }`}
            >
              <span className="text-lg text-[#121212] font-medium">
                {cat.name}
              </span>
              <span className="text-[#121212] text-sm">
                {cat.lessons} lessons
              </span>
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="mb-6 flex items-center justify-between">
          <input
            type="text"
            placeholder={`Search ${type.toLowerCase()}`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border px-4 py-2 w-full max-w-md rounded"
          />
        </div>

        {/* Grid Display */}
        <div className="grid md:grid-cols-4 gap-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) =>
              renderItem ? (
                renderItem(item, index)
              ) : (
                <div key={index}>{item.title}</div>
              )
            )
          ) : (
            <p>No {type.toLowerCase()} match your search.</p>
          )}
        </div>
      </div>
    </div>
  );
}
