import Image from "next/image";

export default function BookCard({ items }) {
  return (
    <div className="relative bg-[#FFFFFFF6] rounded-lg shadow-sm overflow-hidden p-4">
      <Image
        src={items?.image}
        width={400}
        height={400}
        alt={items?.title}
        className="h-60 w-full object-contain rounded"
      />
      {/* Book Info */}
      <h3 className="text-lg font-medium text-[#101B24] mt-6">
        {items?.title}
      </h3>
      <p className="text-sm text-gray-600 mb-2">by {items?.author}</p>
      <p className="text-sm italic text-gray-500">{items?.quote}</p>

      {/* Book Store Action Button */}
      <div className="mt-4 flex justify-between items-center">
        <button className="bg-[#FFA41F] text-[#101B24] text-lg font-medium px-6 py-2 cursor-pointer border border-[#FFA41F] rounded-md">
          Buy
        </button>
        <button className="text-[#7D7D7D] text-lg font-medium px-6 py-2 cursor-pointer border border-[#D4D4D4] rounded-md">
          Share & Earn
        </button>
      </div>
    </div>
  );
}
