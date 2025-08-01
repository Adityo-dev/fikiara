"use client";
import { useState } from "react";

export default function DynamicTabs({ labels, contents }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Tab Button */}
      <div className="flex gap-4 mb-6">
        {labels.map((label, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`px-6 py-2 font-medium border rounded-md border-[#7D7D7D] cursor-pointer ${
              activeTab === index && "bg-[#FFA41F66] text-[#101B24]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Course Tab Contents */}
      <div>{contents[activeTab]}</div>
    </div>
  );
}
