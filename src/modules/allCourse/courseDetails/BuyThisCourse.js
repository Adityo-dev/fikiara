import { Facebook, InspectIcon, LinkedinIcon, Twitter } from "lucide-react";

const features = [
  { icon: "📅", title: "Published", date: "2 days ago" },
  { icon: "❓", title: "Quizzes", date: "2 days ago" },
  { icon: "🎓", title: "Skills", date: "2 days ago" },
  { icon: "📘", title: "Video lessons", date: "2 days ago" },
  { icon: "📄", title: "Certificate", date: "2 days ago" },
  { icon: "🛡️", title: "Lifetime access", date: "2 days ago" },
];

export default function BuyThisCourse() {
  return (
    <div className="bg-[#fff] rounded-xl shadow-sm w-full py-6">
      {/* Price & Discount */}
      <div className="flex items-start justify-between px-6">
        <h2 className="text-3xl font-semibold text-[#101B24]">$ 40.00</h2>
        <span className="text-[14px] bg-[#FFA41F] text-[#fff] font-medium px-3 py-1 rounded">
          20 % discount
        </span>
      </div>

      {/* Features */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold text-[#101B24] mb-6 px-6">
          This course includes
        </h3>
        <ul className="space-y-4">
          {features.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center justify-between px-6 py-3 bg-[#FFC9B51A]"
            >
              <div className="flex items-center gap-2">
                <span className="text-xl">{item.icon}</span>
                <span className="text-[#101B24]">{item.title}</span>
              </div>
              <span className="text-[#7D7D7D]">{item.date}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Social Share */}
      <div className="my-10 px-6">
        <h3 className="text-lg font-medium mb-3 text-[#101B24]">
          Share this course
        </h3>
        <div className="flex gap-4">
          <button className="p-2 rounded-sm border border-gray-200 cursor-pointer">
            <InspectIcon className="text-gray-600" />
          </button>
          <button className="p-2 rounded-sm border border-gray-200 cursor-pointer">
            <Facebook className="text-gray-600" />
          </button>
          <button className="p-2 rounded-sm border border-gray-200 cursor-pointer">
            <Twitter className="text-gray-600" />
          </button>
          <button className="p-2 rounded-sm border border-gray-200 cursor-pointer">
            <LinkedinIcon className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-3 px-6">
        <button className="w-full rounded-md bg-[#FFA41F] text-[#101B24] text-lg font-medium px-6 py-2 cursor-pointer">
          Buy this course
        </button>
        <button className="w-full rounded-md border border-[#FFA41F] text-[#FFA41F] text-lg font-medium px-6 py-2 cursor-pointer">
          Add to cart
        </button>
      </div>
    </div>
  );
}
