"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchCompo() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const data = [
    {
      id: 1,
      type: "course",
      title: "React for Beginners",
      price: 49,
      link: "/course/react",
      image: "/courses/react.jpg",
    },
    {
      id: 2,
      type: "video",
      title: "UI Design Tips",
      duration: "12 min",
      link: "/video/ui-tips",
      image: "/videos/ui.jpg",
    },
    {
      id: 3,
      type: "book",
      title: "Mastering Tailwind CSS",
      author: "John Doe",
      link: "/book/tailwind",
      image: "/books/tailwind.jpg",
    },
  ];

  const handleSearchChange = (value) => {
    setQuery(value);
    if (value.trim() === "") {
      setResults([]);
      return;
    }
    const found = data.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setResults(found);
  };

  return (
    <section className="bg-[#F5F1EA] text-black py-24">
      <div className="max-w-3xl mx-auto p-4">
        {/* Search bar */}
        <div className="flex border border-gray-300 rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search courses, videos, books..."
            value={query}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="flex-grow p-2 outline-none"
          />
        </div>

        {/* Results */}
        {query.trim() !== "" && (
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.length > 0 ? (
              results.map((item) => (
                <div
                  key={item.id}
                  onClick={() => router.push(item.link)}
                  className="bg-white rounded shadow hover:shadow-lg cursor-pointer overflow-hidden"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={200}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-3">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    {item.type === "course" && (
                      <p className="text-sm text-gray-500">${item.price}</p>
                    )}
                    {item.type === "video" && (
                      <p className="text-sm text-gray-500">{item.duration}</p>
                    )}
                    {item.type === "book" && (
                      <p className="text-sm text-gray-500">By {item.author}</p>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full">No results found</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
