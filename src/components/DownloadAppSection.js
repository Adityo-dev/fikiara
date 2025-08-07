import Image from "next/image";

export default function DownloadAppSection() {
  return (
    <section className="bg-[#FFFFFF] py-16">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left Side: Image & Text */}
        <div className="flex items-center gap-6">
          {/* Phone Image */}
          <Image
            src="/images/downloadAppSection.png"
            alt="Phone Mockup"
            width={300}
            height={600}
            className="w-[220px] h-auto"
          />

          {/* Heading & Subheading */}
          <div>
            <h2 className="text-5xl font-semibold text-[#101B24] ">Download</h2>
            <p className="text-2xl text-[#101B24] mt-2">Our Upcoming App</p>
            <p className="text-sm text-[#7D7D7D] leading-relaxed mt-2 max-w-md">
              Here’s a short paragraph for your “Download Our App” caption: Stay
              productive on the go! Download our app to access tools, tips, and
              more.
            </p>

            {/* App Store Buttons */}
            <div className="flex gap-4 mt-6">
              <Image
                src="/icons/appstore.png"
                alt="Download on App Store"
                width={150}
                height={45}
                className="w-[150px] h-[48px] object-contain cursor-pointer"
              />
              <Image
                src="/icons/googleplay.png"
                alt="Get it on Google Play"
                width={150}
                height={45}
                className="w-[150px] h-[48px] object-contain cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Right Side Text */}
        <h3 className="text-5xl font-semibold text-[#101B24] leading-snug">
          Right in Your Pocket. <br /> Download Now
        </h3>
      </div>
    </section>
  );
}
