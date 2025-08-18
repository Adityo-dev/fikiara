import Link from "next/link";
import Image from "next/image";

export default function SocialLinks() {
  return (
    <section className="bg-[#114C5F] py-20 text-center">
      <h2 className="text-3xl font-semibold text-[#FFA41F] mb-6">Follow Us</h2>
      <div className="flex justify-center gap-6 mb-8">
        <Link href="https://www.facebook.com/fikiaraofficial" target="_blank">
          <Image src="/icons/facebook.png" width={40} height={40} alt="Facebook"/>
        </Link>
        <Link href="https://www.instagram.com/fikiaraofficial" target="_blank">
          <Image src="/icons/instagram.png" width={40} height={40} alt="Instagram"/>
        </Link>
        <Link href="https://www.youtube.com/@fikiaraofficial" target="_blank">
          <Image src="/icons/youtube.png" width={40} height={40} alt="YouTube"/>
        </Link>
        <Link href="https://www.linkedin.com/company/fikiaraofficial" target="_blank">
          <Image src="/icons/linkedin.png" width={40} height={40} alt="LinkedIn"/>
        </Link>
      </div>
      <Link
        href="/ecosystem"
        className="rounded-md bg-[#3CC9F5] text-[#101B24] text-lg font-medium px-8 py-4 inline-block"
      >
        Join the Community
      </Link>
    </section>
  );
}
