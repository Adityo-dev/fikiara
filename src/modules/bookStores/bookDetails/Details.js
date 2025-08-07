import { Minus, Plus, Star } from "lucide-react";
import Image from "next/image";
function Details() {
  return (
    <>
      <div className="flex items-center gap-1 text-yellow-500 pb-1">
        {Array(5)
          .fill()
          .map((_, i) => (
            <Star key={i} size={18} fill="#facc15" stroke="none" />
          ))}
        <span className="text-sm text-[#000] ml-2">(89) Positive Reviews</span>
      </div>

      <h2 className="text-5xl font-medium text-[#000] my-4">
        Walk in My Combat Boots
      </h2>
      <p className="text-[#7D7D7D]">Author : Rhat Khan</p>

      <p className="text-[40px] font-semibold text-[#000] mt-3">$ 34.00</p>

      <p className="text-[#101B24] leading-relaxed mt-6">
        The Art of Focus guides readers on how to minimize distractions and
        master deep work. With practical strategies, real-life examples, and
        actionable tips, this book helps you reclaim control over your time and
        mind in the modern age.
      </p>

      <div className="text-[#7D7D7D] space-y-3.5 mt-6">
        <p>
          <span className="font-semibold text-[#000]">Categories:</span> Self /
          Productivity
        </p>
        <p>
          <span className="font-semibold text-[#000]">Published :</span> Maind
          Workspaces
        </p>
        <p>
          <span className="font-semibold text-[#000]">Published Date :</span> 22
          . 07 . 2025
        </p>
        <p>
          <span className="font-semibold text-[#000]">Isbn :</span>{" "}
          2233A467898900
        </p>
      </div>

      {/* Add to Cart */}
      <div className="flex items-center gap-4 mt-8">
        <div className="flex items-center border border-gray-300 rounded text-[#000]">
          <button className="px-3 py-4 hover:bg-gray-100 cursor-pointer">
            <Minus size={16} />
          </button>
          <span className="px-6">1</span>
          <button className="px-3 py-4 hover:bg-gray-100 cursor-pointer">
            <Plus size={16} />
          </button>
        </div>

        <button className="bg-[#FFA41F] text-[#000] px-7 py-3 rounded-sm font-medium">
          Add To Cart
        </button>
      </div>

      {/* Wishlist & Share */}
      <div className="flex gap-6 mt-6 text-sm">
        <button className="flex items-center gap-2 text-[#7D7D7D] cursor-pointer">
          <Image
            src={"/icons/heart.svg"}
            width={50}
            height={50}
            alt=""
            className="w-6 h-6 object-contain"
          />{" "}
          Add to Wishlist
        </button>
        <button className="flex items-center gap-2 text-[#7D7D7D] cursor-pointer">
          <Image
            src={"/icons/share.svg"}
            width={50}
            height={50}
            alt=""
            className="w-6 h-6 object-contain"
          />{" "}
          Share
        </button>
      </div>
    </>
  );
}

export default Details;
