import Image from "next/image";
import Link from "next/link";

export default function InstructorCard({ instructor }) {
  const socialIcons = [
    { key: "share", bg: "#FF9F1C", icon: "/icons/facebook.png" },
    { key: "facebook", bg: "#3B5998", icon: "/icons/linkedin.png" },
    { key: "linkedin", bg: "#0077B5", icon: "/icons/youtube.png" },
  ];

  return (
    <div className="bg-[#FFFFFF] rounded-md shadow-sm p-3 w-full h-full relative">
      {/* Profile Image */}
      <div className="w-full h-[360px] relative">
        <Image
          src={instructor?.image}
          alt={instructor?.name}
          fill
          className="rounded-md object-cover"
        />
      </div>

      {/* Social Icons */}
      <div className="absolute top-10 right-4 flex flex-col gap-3">
        {socialIcons.map(({ key, bg, icon }) => (
          <Link key={key} href={instructor?.socials?.[key]} target="_blank">
            <div
              className="w-9 h-9 flex items-center justify-center rounded-full cursor-pointer"
              style={{ backgroundColor: bg }}
            >
              <Image
                src={icon}
                width={24}
                height={24}
                alt={key}
                className="object-contain"
              />
            </div>
          </Link>
        ))}
      </div>

      {/* Name & Specialty Box */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-sm px-4 py-2.5 w-[85%]">
        <h3 className="text-xl font-semibold text-[#101B24]">
          {instructor?.name}
        </h3>
        <p className="text-sm text-[#7D7D7D]">{instructor?.specialty}</p>
      </div>
    </div>
  );
}
