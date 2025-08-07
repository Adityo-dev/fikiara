import { Lock } from "lucide-react";
import Image from "next/image";

export default function VideoCard({ video, index }) {
  return (
    <div className="relative flex gap-3 items-center mb-3 rounded hover:bg-gray-100 cursor-pointer">
      <div className="p-2 bg-gray-100 rounded-md ">
        <div className="relative w-[150px] h-[90px] rounded overflow-hidden">
          <Image
            src={video?.img}
            alt={video?.title}
            width={200}
            height={150}
            className="w-full h-full object-cover"
          />
          {index !== 0 && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <Lock size={18} color="white" />
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="font-medium text-[#101B24] line-clamp-1">
          {video?.title}
        </p>
        <p className="text-[14px] text-[#7D7D7D]">Author: {video?.author}</p>
      </div>
    </div>
  );
}
