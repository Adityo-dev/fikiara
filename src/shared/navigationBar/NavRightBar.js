import Image from "next/image";
import Link from "next/link";

function NavRightBar() {
  return (
    <div className="flex items-center justify-between gap-[22px]">
      <div className="flex items-center gap-6">
        <Image
          src={"/icons/search.svg"}
          width={50}
          height={50}
          alt=""
          className="w-6 h-6 object-contain"
        />
        <span className="w-[1px] h-7 bg-[#D4D4D4] opacity-60" />
        <Link href={"/my-cart"}>
          <Image
            src={"/icons/card.svg"}
            width={50}
            height={50}
            alt=""
            className="w-6 h-6 object-contain"
          />
        </Link>
      </div>
      <Link
        href={"/auth/register"}
        className="rounded-md bg-[#FFA41F] text-[#101B24] text-lg font-medium px-6 py-2 cursor-pointer"
      >
        Login
      </Link>
    </div>
  );
}

export default NavRightBar;
