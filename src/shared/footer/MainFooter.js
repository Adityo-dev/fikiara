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
            Fikiara is a world-class learning and life-transformation platform that, inspired by diverse books, combines knowledge, leadership, personal growth, and modern education to bring true change in life while also helping learners develop practical skills through courses.
          </p>

          <p className="text-[#D4D4D4] leading-7 mt-4 mb-6">
            Download our mobile app and access courses, books, videos, and tools anytime and anywhere.  
          </p>

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
              <Link href="https://www.facebook.com/fikiaraofficial" target="_blank">
                <Image
                  src="/icons/facebook.png"
                  width={50}
                  height={50}
                  alt="Fikiara Official Facebook Page"
                  className="w-6 h-6 object-contain"
                />
              </Link>

              <Link href="https://www.youtube.com/@fikiaraofficial" target="_blank">
                <Image
                  src="/icons/youtube.png"
                  width={50}
                  height={50}
                  alt="Fikiara Official YouTube Channel"
                  className="w-6 h-6 object-contain"
                />
              </Link>

              <Link href="https://www.instagram.com/fikiaraofficial/" target="_blank">
                <Image
                  src="/icons/instagram.png"
                  width={50}
                  height={50}
                  alt="Fikiara Official Instagram Profile"
                  className="w-6 h-6 object-contain"
                />
              </Link>

              <Link href="https://www.tiktok.com/@fikiaraofficial" target="_blank">
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

        {/* Footer Info Links */}
        <div className="col-span-5 flex justify-between gap-8 flex-grow">
<div>
  <h3 className="text-[#E4E4E4] text-lg font-semibold mb-6">Quick Navigation</h3>
  <ul className="space-y-4 text-[14px] text-[#E4E4E4]">
    <li><Link href="/benefits">Benefits & Value</Link></li>
    <li><Link href="/features">Features</Link></li>
    <li><Link href="/ecosystem">Ecosystem & Community</Link></li>
    <li><Link href="/pricing">Pricing & Plans</Link></li>
    <li><Link href="/about">About Us</Link></li>
    <li><Link href="/support">Support & Help</Link></li>
    <li><Link href="/trust">Security & Trust</Link></li>
    <li><Link href="/careers">Careers & Partnership</Link></li>
  </ul>
</div>

      {/* Legal & Policies */}
<div>
  <h3 className="text-[#E4E4E4] text-lg font-semibold mb-6">Legal & Policies</h3>
  <ul className="space-y-4 text-[14px] text-[#E4E4E4]">
    <li><Link href="/legal/privacy">Privacy Policy</Link></li>
    <li><Link href="/legal/terms">Terms & Conditions</Link></li>
    <li><Link href="/legal/refund">Refund & Guarantee Policy</Link></li>
    <li><Link href="/legal/transparency">Transparency Statement</Link></li>
    <li><Link href="/legal/cookie">Cookie Policy</Link></li>
    <li><Link href="/legal/intellectual-property">Intellectual Property Policy</Link></li>
    <li><Link href="/legal/disclaimer">Disclaimer & Limitation of Liability</Link></li>
    <li><Link href="/legal/community">Community Guidelines</Link></li>
    <li><Link href="/legal/accessibility">Accessibility Statement</Link></li>
    <li><Link href="/legal/security">Security Policy</Link></li>
  </ul>
</div>

        {/* Help & Guidance */}
<div>
  <h3 className="text-[#E4E4E4] text-lg font-semibold mb-6">Help & Guidance</h3>
  <ul className="space-y-4 text-[14px] text-[#E4E4E4]">
    <li><Link href="/support#faq">FAQ (Common Questions)</Link></li>
    <li><Link href="/support#getting-started">Getting Started Guide</Link></li>
    <li><Link href="/support#tutorials">Tutorial Videos</Link></li>
    <li><Link href="/support#contact">Contact Form</Link></li>
    <li><Link href="/support#live-chat">Live Chat Support</Link></li>
    <li><Link href="/support#community">Community Forum</Link></li>
    <li><Link href="/support#syllabus">Course Syllabus / Outline</Link></li>
    <li><Link href="/support#technical">Technical Requirements / Troubleshooting</Link></li>
    <li><Link href="/support#feedback">Feedback & Suggestions</Link></li>
    <li><Link href="/support#accessibility">Accessibility Help</Link></li>
  </ul>
</div>
        </div>
      </div>

      <div className="text-center text-[#D4D4D4] mt-12">
        <p className="text-sm">&copy; {new Date().getFullYear()} Fikiara. All rights reserved.</p>
      </div>
    </footer>
  );
}
