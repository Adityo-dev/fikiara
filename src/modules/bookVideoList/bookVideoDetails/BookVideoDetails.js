import MainContent from "./MainContent";
import SidePanel from "./SidePanel";

const videos = [
  {
    id: 1,
    title: "Graphic design course 1",
    author: "Md Anind",
    img: "/design1.png",
  },
  {
    id: 2,
    title: "Graphic design course 2",
    author: "Md Anind",
    img: "/video2.png",
  },
  {
    id: 3,
    title: "Graphic design course 3",
    author: "Md Anind",
    img: "/video3.png",
  },
  {
    id: 4,
    title: "Graphic design course 4",
    author: "Md Anind",
    img: "/video4.png",
  },
  {
    id: 5,
    title: "Graphic design course 5",
    author: "Md Anind",
    img: "/design4.png",
  },
  {
    id: 6,
    title: "Graphic design course 6",
    author: "Md Anind",
    img: "/design3.png",
  },
  {
    id: 7,
    title: "Graphic design course 7",
    author: "Md Anind",
    img: "/design2.png",
  },
  {
    id: 8,
    title: "Graphic design course 8",
    author: "Md Anind",
    img: "/design1.png",
  },
];

export default function BookVideoDetails() {
  return (
    <section className="bg-[#F5F1EA]">
      <div className="container mx-auto flex gap-6 px-4 py-16">
        <MainContent />
        <SidePanel videos={videos} />
      </div>
    </section>
  );
}
