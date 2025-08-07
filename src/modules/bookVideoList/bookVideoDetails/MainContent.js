import DynamicTabs from "@/components/tab/DynamicTabs";
import Image from "next/image";
import Description from "./Description";

export default function MainContent() {
  return (
    <div className="w-2/3">
      <div className="bg-[#FFFFFF] rounded-lg shadow-sm overflow-hidden">
        <Image
          src="/design1.png"
          width={800}
          height={400}
          alt="Main Video"
          className="w-full h-[550px] object-fill"
        />

        {/* Video info */}
        <div className="flex items-center justify-between p-4">
          <p className="text-2xl text-[#101B24] font-medium">
            Master the Basics: Step-by-Step Learning Series
          </p>

          <div className="flex gap-3 shrink-0 overflow-hidden">
            <Image
              src={"/icons/heart.svg"}
              width={50}
              height={50}
              alt=""
              className="w-6 h-6 object-contain cursor-pointer"
            />
            <Image
              src={"/icons/solar_playlist-linear.svg"}
              width={50}
              height={50}
              alt=""
              className="w-6 h-6 object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Tab */}
      <div className="mt-16">
        <DynamicTabs
          labels={["Description", "Comment", "Video Request"]}
          contents={[
            <>
              <Description />
            </>,
            <>This is the Comment content.</>,
            <>This is the Video Request content.</>,
          ]}
        />
      </div>
    </div>
  );
}
