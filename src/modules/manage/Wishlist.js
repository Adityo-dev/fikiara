import CourseCard from "@/components/card/CourseCard";
import Empty from "./Empty";

const wishlistItems = [
  {
    id: 1,
    thumbnail: "/excelandDataAnalysis.jpg",
    title: "এক্সেল অ্যান্ড ডেটা অ্যানালাইসিস",
    category: "Data Analysis",
    rating: 4.7,
    price: 990,
    author: "Nadia",
    lessons: "8 Lessons",
    duration: "3Hour 45 Min",
    tags: ["Trending"],
  },
  {
    id: 2,
    thumbnail: "/VideoEditingProCourseonMobile.jpg",
    title: "মোবাইলে ভিডিও এডিটিং প্রো কোর্স",
    category: "Video Editing",
    rating: 4.5,
    price: 780,
    author: "Shanto",
    lessons: "9 Lessons",
    duration: "4Hour 20 Min",
    tags: ["Best Seller", "Trending"],
  },
  {
    id: 3,
    thumbnail: "/web.jpg",
    title: "HTML, CSS দিয়ে ওয়েব ডিজাইন",
    category: "Web Design",
    rating: 4.6,
    price: 1100,
    author: "Kawsar",
    lessons: "11 Lessons",
    duration: "6Hour 00 Min",
    tags: ["Polytechnic"],
  },
  {
    id: 4,
    thumbnail: "/freelancing.jpg",
    title: "ফ্রিল্যান্সিং ক্যারিয়ার গাইডলাইন",
    category: "Career",
    rating: 4.3,
    price: 620,
    author: "Tuli",
    lessons: "7 Lessons",
    duration: "2Hour 50 Min",
    tags: ["New", "Polytechnic"],
  },
];

function Wishlist() {
  return (
    <div>
      <h2 className="text-[#101B24] text-xl font-semibold mb-4">
        Your Wishlist ({wishlistItems.length})
      </h2>
      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {wishlistItems.map((item) => (
            <CourseCard items={item} key={item?.id} />
          ))}
        </div>
      ) : (
        <Empty title={"Your Wishlist is Empty!"} description={"Empty"} />
      )}
    </div>
  );
}

export default Wishlist;
