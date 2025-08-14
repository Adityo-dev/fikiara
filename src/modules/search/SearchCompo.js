"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SearchCompo() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const products = [
    { id: 1, name: "Black Abaya", link: "/product/black-abaya" },
    { id: 2, name: "Red Dress", link: "/product/red-dress" },
    { id: 3, name: "Leather Bag", link: "/product/leather-bag" },
  ];

  const handleSearchChange = (value) => {
    setQuery(value);
    if (value.trim() === "") {
      setResults([]);
      return;
    }

    const found = products.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
    setResults(found);
  };

  const handleGo = (link) => {
    router.push(link);
  };

  return (
    <section className="bg-[#F5F1EA] text-black py-16">
      <div className=" max-w-lg mx-auto p-4">
        {/* Search field */}
        <div className="flex border border-gray-300 rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search products..."
            value={query}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="flex-grow p-2 outline-none"
          />
          <button
            onClick={() => {
              if (results.length > 0) {
                handleGo(results[0].link);
              }
            }}
            className="bg-[#FFA41F] text-white px-4 hover:bg-[#e8941c]"
          >
            Search
          </button>
        </div>

        {/* Live Search Results */}
        {query.trim() !== "" && (
          <div className="mt-2 border border-gray-200 rounded shadow-sm bg-white">
            {results.length > 0 ? (
              results.map((item) => (
                <div
                  key={item.id}
                  className="p-2 border-b cursor-pointer hover:bg-gray-100"
                  onClick={() => handleGo(item.link)}
                >
                  {item.name}
                </div>
              ))
            ) : (
              <p className="text-gray-500 p-2">No results found</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
