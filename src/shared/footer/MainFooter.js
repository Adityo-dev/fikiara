import Image from "next/image";

export default function MainFooter() {
  return (
    <footer className="bg-[#114C5F] text-white py-16">
      <div className="container mx-auto px-4 grid grid-cols-8 gap-12">
        {/* Logo & App Info */}
        <div className="col-span-3">
          <div className="mb-4">
            <Image
              src="/Fikiara-Logo.png"
              width={300}
              height={300}
              alt="fikiara Logo"
              className="w-[169px] h-[46px] object-contain"
            />
          </div>
          <p className="text-sm mb-4">
            Experience learning on the go! Download our mobile app to access
            courses anytime, anywhere fast,
          </p>
          <div className="flex space-x-2 mb-4">
            <Image
              src="/appstore.png"
              width={200}
              height={200}
              alt="App Store"
              className="w-[100px] h-[35px]"
            />
            <Image
              src="/googleplay.png"
              width={200}
              height={200}
              alt="Google Play"
              className="w-[100px] h-[35px]"
            />
          </div>
          <div className="flex space-x-4 text-xl">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-5 flex justify-between gap-8 flex-grow">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Become an instructor</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Student Support</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>Support</li>
              <li>
                Email:{" "}
                <a href="mailto:fikiara@gmail.com" className="underline">
                  fikiara@gmail.com
                </a>
              </li>
              <li>Phone: 0122323233</li>
              <li>Address: 12/ Rode Koustia</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
