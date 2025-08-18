import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-[#114C5F] text-white py-24 px-4">
      <div className="container mx-auto text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Your Growth, Your Transformation – With Fikiara
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6">
          Are you gaining knowledge but struggling to apply it? Fikiara gives you 
          <span className="font-semibold"> Knowledge + Action = Transformation</span>.
        </p>
        <Link
          href="/features"
          className="inline-block bg-[#3CC9F5] hover:bg-[#33b0e6] text-[#101B24] font-semibold px-8 py-4 rounded-md"
        >
          Start Your Journey
        </Link>
      </div>
    </section>




  );
}
