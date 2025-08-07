import Image from "next/image";
import Details from "./Details";

export default function BookDetails() {
  return (
    <div className="py-16 bg-[#FFFFFF]">
      <div className="container mx-auto px-4 w-full flex gap-10">
        {/* Book Cover */}
        <div className="w-[40%] bg-gray-100 p-6 rounded-lg flex items-center justify-center">
          <Image
            src="/product-3.jpg"
            alt="Book Cover"
            width={300}
            height={400}
            className="rounded-sm shadow w-auto h-[500px]"
          />
        </div>

        {/* Details */}
        <div className="w-[60%]">
          <Details />
        </div>
      </div>
    </div>
  );
}
