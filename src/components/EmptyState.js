import Image from "next/image";

export default function EmptyState({ message = "No data found" }) {
  return (
    <div className="w-full h-full flex flex-col gap-8 items-center justify-center text-center">
      {/* Optional Icon */}
      <Image
        src={"/icons/empty.png"}
        width={200}
        height={200}
        alt=""
        className="w-44 h-44"
      />

      <div>
        <h2 className="text-2xl font-semibold text-[#101B24] mb-2">
          {message}
        </h2>
        <p className="text-[#7D7D7D] text-sm">
          Please try adjusting your search or filters.
        </p>
      </div>
    </div>
  );
}
