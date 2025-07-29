"use client";
import Marquee from "react-fast-marquee";
import ReviewCart from "./ReviewCart";

export default function FaqCompo({ faqData }) {
  return (
    <div className="space-y-6 mt-16 overflow-hidden">
      {/* Marquee Left Side */}
      <Marquee className="br-6" direction="left" pauseOnHover={true}>
        {faqData.map((item, index) => (
          <div key={index} className="mr-6">
            <ReviewCart item={item} />
          </div>
        ))}
      </Marquee>

      {/* Marquee Right Side */}
      <Marquee direction="right" pauseOnHover={true}>
        {faqData.map((item, index) => (
          <div key={index} className="mr-6">
            <ReviewCart item={item} />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
