import Image from "next/image";

export default function InstructorCard({ instructor }) {
  return (
    <div className="bg-[#FFF] rounded-lg shadow-sm p-4">
      {/* Image */}
      <div className="w-full h-52 relative mb-4">
        <Image
          src={instructor?.image}
          alt={instructor?.name}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      {/* Info */}
      <h3 className="text-xl font-semibold text-[#101B24]">
        {instructor?.name}
      </h3>
      <p className="text-sm text-[#000000] mb-2 mt-1">{instructor?.title}</p>
      <p className="text-sm font-semibold text-[#3f444b] mb-3">
        {instructor?.specialty}
      </p>

      {/* Bio */}
      <p className="text-sm text-[#7D7D7D] line-clamp-3 leading-relaxed">
        {instructor?.bio}
      </p>

      {/* Rating */}
      <div className="mt-4 flex items-center text-sm font-medium text-[#FFA41F]">
        ⭐ {instructor?.rating} / 5.0
      </div>
    </div>
  );
}
