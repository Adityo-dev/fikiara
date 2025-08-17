import Image from "next/image";
import Link from "next/link";

export default function MainFooter() {
  return (
    <footer className="bg-[#114C5F] py-16">
      <div className="container mx-auto px-4 grid grid-cols-8 gap-12">
        {/* Logo & Store Info */}
        <div className="col-span-3">
          <Link href={"/"}>
            <Image
              src="/Fikiara-Logo.png"
              width={300}
              height={300}
              alt="fikiara Logo"
              className="w-[169px] h-[46px] object-contain"
            />
          </Link>
          <p className="text-[#D4D4D4] leading-7 mt-4 mb-6">
            Experience learning on the go! Download our mobile app to access
            courses anytime, anywhere fast,
          </p>

          {/* Google Store And App Store Image */}
          <div className="flex space-x-2 mb-4">
            <Image
              src="/icons/googlePlay.png"
              width={200}
              height={200}
              alt="Google Play"
              className="w-[100px] h-[35px]"
            />
            <Image
              src="/icons/appStore.png"
              width={200}
              height={200}
              alt="App Store"
              className="w-[100px] h-[35px]"
            />
          </div>

          {/* Social media Info */}
          <div>
            <p className="text-[#FFF] text-lg leading-7">Follow Us</p>
            <div className="flex space-x-4 mt-2">
              <Link
                href="https://www.facebook.com/fikiaraofficial"
                target="_blank"
              >
                <Image
                  src="/icons/facebook.png"
                  width={50}
                  height={50}
                  alt="Fikiara Official Facebook Page"
                  className="w-6 h-6 object-contain"
                />
              </Link>

              <Link
                href="https://www.youtube.com/@fikiaraofficial"
                target="_blank"
              >
                <Image
                  src="/icons/youtube.png"
                  width={50}
                  height={50}
                  alt="Fikiara Official YouTube Channel"
                  className="w-6 h-6 object-contain"
                />
              </Link>

              <Link
                href="https://www.instagram.com/fikiaraofficial/"
                target="_blank"
              >
                <Image
                  src="/icons/instagram.png"
                  width={50}
                  height={50}
                  alt="Fikiara Official Instagram Profile"
                  className="w-6 h-6 object-contain"
                />
              </Link>

              <Link
                href="https://www.tiktok.com/@fikiaraofficial"
                target="_blank"
              >
                <Image
                  src="/icons/tiktok.png"
                  width={50}
                  height={50}
                  alt="Fikiara Official TikTok Account"
                  className="w-6 h-6 object-contain"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Info Link */}
        <div className="col-span-5 flex justify-between gap-8 flex-grow">
          {/* Quick Links */}
          <div>
            <h3 className="text-[#E4E4E4] text-lg font-semibold mb-6">
              Quick Links
            </h3>
            <ul className="space-y-4 text-[14px] text-[#E4E4E4]">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#">About us</Link>
              </li>
              <li>
                <Link href="#">Courses</Link>
              </li>
              <li>
                <Link href="#">Become an instructor</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-[#E4E4E4] text-lg font-semibold mb-6">
              Resources
            </h3>
            <ul className="space-y-4 text-[14px] text-[#E4E4E4]">
              <li>
                <Link href="#">FAQs</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Help Center</Link>
              </li>
              <li>
                <Link href="#">Student Support</Link>
              </li>
              <li>
                <Link href="#">Terms & Conditions</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#E4E4E4] text-lg font-semibold mb-6">
              Contact Information
            </h3>
            <ul className="space-y-4 text-[14px] text-[#E4E4E4]">
              <li>Support</li>
              <li>
                Email:{" "}
                <Link href="mailto:fikiara@gmail.com" className="underline">
                  fikiara.info@gmail.com
                </Link>
              </li>
              <li>Phone: +8801234567890</li>
              <li>Address: MM Rd, Kushtia Bangladesh</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
