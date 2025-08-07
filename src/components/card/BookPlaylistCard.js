import Image from "next/image";
import Link from "next/link";

const buttons = [
  { text: "Earn money", variant: "primary" },
  { text: "Watch playlist", variant: "secondary" },
  { text: "Buy book", variant: "secondary" },
  { text: "Buy book", variant: "secondary" },
];

export default function BookPlaylistCard({ items }) {
  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
      <Link href={`/book-video-list/${items?.title}`} className="relative">
        <Image
          src={items?.image}
          width={400}
          height={400}
          alt="Card Image"
          className="rounded-t-lg w-full h-60 object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black to-transparent opacity-100 cursor-pointer transform">
          <Image
            src={"/icons/play.png"}
            width={200}
            height={200}
            alt=""
            className="w-12 h-12 object-contain"
          />
        </div>
      </Link>

      <div className="p-4">
        <div className="flex justify-between gap-4 mb-8">
          <p className="text-[#101B24] text-lg leading-7 line-clamp-2">
            {items?.title}
          </p>

          {/* Wishlist Message And share Icon */}
          <div className="flex gap-2 text-gray-500 shrink-0 overflow-hidden">
            <Image
              src={"/icons/heart.svg"}
              width={50}
              height={50}
              alt=""
              className="w-6 h-6 object-contain"
            />
            <Image
              src={"/icons/annotation.svg"}
              width={50}
              height={50}
              alt=""
              className="w-6 h-7 object-contain"
            />
            <Image
              src={"/icons/share.svg"}
              width={50}
              height={50}
              alt=""
              className="w-6 h-6 object-contain"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className={`text-[#101B24] text-base font-medium px-6 py-2 cursor-pointer border border-[#FFA41F] rounded-md capitalize ${
                btn?.variant === "primary"
                  ? "bg-[#FFA41F] text-white"
                  : "border border-gray-300 text-[#7D7D7D]"
              }`}
            >
              {btn?.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
