import BuyAndShare from "./BuyAndShare";
import VideoCard from "./VideoCard";

export default function SidePanel({ videos }) {
  return (
    <div className="w-1/3 space-y-6">
      {/* Buy And Share Component */}
      <BuyAndShare />

      {/* All Video Card */}
      <div className="bg-white p-4 rounded-lg shadow-sm max-h-[600px] overflow-y-auto">
        {videos.map((video, index) => (
          <VideoCard key={video?.id} video={video} index={index} />
        ))}
      </div>
    </div>
  );
}
