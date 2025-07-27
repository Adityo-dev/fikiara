import Image from "next/image";
import Link from "next/link";

function NavLogo() {
  return (
    <Link href="/">
      <Image
        src={"/Fikiara-Logo.png"}
        width={250}
        height={250}
        alt=""
        className="w-[169px] h-[46px] object-contain"
      />
    </Link>
  );
}

export default NavLogo;
