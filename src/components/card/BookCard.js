import Image from "next/image";

export default function BookCard({ items }) {
  return (
    <div className="relative bg-[#F9F7F2] rounded-md shadow-sm overflow-hidden p-4">
      {/* Image */}
      <div className="bg-[#F0ECE5] rounded-lg overflow-hidden">
        <Image
          src={items?.image}
          width={400}
          height={400}
          alt={items?.title}
          className="h-[300px] w-full object-contain py-4"
        />
      </div>

      {/* Title */}
      <h3 className="text-[#101B24] text-[20px] text-base font-medium leading-6 mt-4 line-clamp-1">
        {items?.title}
      </h3>

      {/* Buttons */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button className="text-[#101B24] text-base font-medium px-6 py-2 cursor-pointer border border-[#FFA41F] rounded-md capitalize">
          Share & Earn
        </button>
        <button className="text-[#101B24] text-base font-medium px-6 py-2 cursor-pointer border border-[#FFA41F] rounded-md capitalize">
          Video playlist
        </button>
        <button className="text-[#101B24] text-base font-medium px-6 py-2 cursor-pointer border border-[#FFA41F] rounded-md capitalize col-span-2">
          Buy Now
        </button>
      </div>
    </div>
  );
}
