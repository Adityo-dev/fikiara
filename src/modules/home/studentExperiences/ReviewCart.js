import Image from "next/image";

function ReviewCart() {
  return (
    <div className="bg-[#FFF] w-[400px] h-[250px] rounded-lg p-4 flex flex-col justify-between shadow-sm cursor-pointer">
      <p className="text-[#101B24] text-lg leading-7">
        This LMS transformed how I study. The video lessons are clear, and the
        quizzes really help reinforce learning. I passed my exam with
        confidence!
      </p>

      {/* Student Image and info */}
      <div className="mt-6 flex items-center gap-3">
        <Image
          src={"/student.png"}
          width={200}
          height={200}
          alt=""
          className="w-14 h-14 rounded-full"
        />
        <div>
          <h4 className="text-[#101B24] text-lg font-medium leading-7">
            Fatima Rahman
          </h4>
          <p className="text-[#7D7D7D] leading-4 mt-1">Graphice student</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCart;
