"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Accessibility, BookOpen, ChartArea, Cpu, MessageCircle, Users } from "lucide-react";

export default function SupportPage() {
  // FAQ Data (6 questions)
  const faqs = [
    {
      q: "কীভাবে সাবস্ক্রিপশন করব?",
      a: "প্রাইসিং পেজে গিয়ে আপনার প্রয়োজন অনুযায়ী প্ল্যান নির্বাচন করুন। প্রতিটি প্ল্যানের সুবিধা এবং মেয়াদ বিস্তারিতভাবে দেখানো আছে। একবার সিলেক্ট করার পর, 'Subscribe' বাটনে ক্লিক করে পেমেন্ট সম্পন্ন করুন।"
    },
    {
      q: "কীভাবে কোর্স শুরু করব?",
      a: "লাইব্রেরি থেকে কোর্স সিলেক্ট করুন। কোর্সের বিস্তারিত দেখার পর 'Start Course' বাটনে ক্লিক করুন। আপনার progress স্বয়ংক্রিয়ভাবে ট্র্যাক হবে।"
    },
    {
      q: "Invite & Earn কীভাবে কাজ করে?",
      a: "বন্ধুদের আমন্ত্রণ করুন এবং তাদের সাবস্ক্রিপশন নিশ্চিত হলে আপনি points বা reward পাবেন। এই reward ব্যবহার করে future courses বা special features unlock করতে পারবেন।"
    },
    {
      q: "আমার সাবস্ক্রিপশন কিভাবে বাতিল করব?",
      a: "আপনার অ্যাকাউন্ট settings থেকে Subscription Management এ যান। Cancel Subscription বাটনে ক্লিক করলে সাবস্ক্রিপশন বাতিল হয়ে যাবে এবং মেয়াদ শেষ পর্যন্ত active থাকবে।"
    },
    {
      q: "পেমেন্ট সমস্যার সমাধান কিভাবে করব?",
      a: "যদি পেমেন্ট সম্পন্ন না হয় বা failed হয়, আপনার ব্যাংক বা payment gateway এর সাথে যোগাযোগ করুন। তারপরও সমস্যা হলে Support টিমকে Contact Form বা Messenger এ জানাতে পারেন।"
    },
    {
      q: "কোর্স বা ফিচার সম্পর্কে আরও তথ্য কোথায় পাবো?",
      a: "প্রতিটি কোর্স পেজে syllabus, outline, এবং tutorial video দেওয়া আছে। এছাড়া, Community Forum ও FAQ সেকশন থেকে বিস্তারিত তথ্য পাওয়া যায়।"
    },
  ];

  // Getting Started Steps
  const steps = [
    "1️⃣ Account Create – আপনার নাম, ইমেল এবং পাসওয়ার্ড ব্যবহার করে Fikiara তে অ্যাকাউন্ট তৈরি করুন।",
    "2️⃣ Library / Course Browse – আপনার আগ্রহ অনুযায়ী বই এবং কোর্স ব্রাউজ করুন। প্রতিটি কোর্সের সিলেবাস বিস্তারিত দেখুন।",
    "3️⃣ Journal / Notes ব্যবহার – কোর্স চলাকালীন নোট এবং Journal ফিচার ব্যবহার করে গুরুত্বপূর্ণ তথ্য সংরক্ষণ করুন।",
    "4️⃣ Progress Track – আপনার লার্নিং ট্র্যাক করতে Daily Amaal System এবং Life Tracker ব্যবহার করুন।",
  ];

  // Tutorial Videos
  const videos = [
    { title: "How to use Journals", thumbnail: "/thumbnails/journals.png" },
    { title: "How to Join Community", thumbnail: "/thumbnails/community.png" },
    { title: "Track Your Progress", thumbnail: "/thumbnails/progress.png" },
    { title: "Unlock Rewards & Achievements", thumbnail: "/thumbnails/rewards.png" },
  ];

 const cards = [
    {
      title: "Community Forum",
      description: "Engage with fellow learners, ask questions, and share experiences in the Fikiara community forum.",
      buttonText: "Visit Forum",
      buttonLink: "/community",
      icon: <Users className="h-6 w-6 text-[#FFA41F]" />,
    },
    {
      title: "Course Syllabus / Outline",
      description: "View the detailed course outlines to plan your learning journey effectively.",
      buttonText: "View Courses",
      buttonLink: "/courses",
      icon: <BookOpen className="h-6 w-6 text-[#FFA41F]" />,
    },
    {
      title: "Technical Requirements / Troubleshooting",
      description: "Check minimum device requirements and troubleshooting guides to ensure smooth learning experience.",
      buttonText: "Get Help",
      buttonLink: "/technical-help",
      icon: <Cpu className="h-6 w-6 text-[#FFA41F]" />,
    },
    {
      title: "Feedback & Suggestions",
      description: "Share your feedback to help us improve Fikiara for all learners.",
      buttonText: "Send Feedback",
      buttonLink: "/feedback",
      icon: <MessageCircle className="h-6 w-6 text-[#FFA41F]" />,
    },
    {
      title: "Accessibility Help",
      description: "Learn about accessibility features and tools available to make Fikiara inclusive for everyone.",
      buttonText: "Learn More",
      buttonLink: "/accessibility",
      icon: <Accessibility className="h-6 w-6 text-[#FFA41F]" />,
    },
    {
      title: "Live Chat & Support",
      description: "Connect instantly with our support team for any questions or technical assistance.",
      buttonText: "Chat Now",
      buttonLink: "https://m.me/fikiara",
      icon: <ChartArea className="h-6 w-6 text-[#FFA41F]" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6F2FF] via-[#F9FBFF] to-white text-gray-900">

      {/* Hero Section */}
      <section id="hero" className="bg-[#114C5F] py-20 text-center">
        <h1 className="text-[40px] font-semibold text-[#FFA41F] mb-4">Need Help? We’re Just One Click Away</h1>
        <p className="text-[#D4D4D4] text-lg mb-8">
          যে কোনো প্রশ্ন, সমস্যা বা গাইডেন্স – আমাদের সাপোর্ট টিম ২৪/৭ পাশে আছে। আপনি সহজেই শুরু করতে পারেন এবং আপনার learning journey smooth করতে পারেন।
        </p>
        <Link href="#getting-started" className="rounded-md bg-[#3CC9F5] text-[#101B24] text-lg font-medium px-8 py-4 inline-block">
          Start Guide
        </Link>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-[#0F3A4F] py-20 text-center">
        <h2 className="text-3xl font-semibold text-[#FFA41F] mb-8">FAQ – Common Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {faqs.map((item, i) => (
            <div key={i} className="bg-[#114C5F] p-6 rounded-lg shadow-md text-left">
              <h3 className="text-lg font-semibold text-[#3CC9F5] mb-2">{item.q}</h3>
              <p className="text-[#D4D4D4] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Getting Started Guide */}
      <section id="getting-started" className="bg-[#114C5F] py-20 text-center">
        <h2 className="text-3xl font-semibold text-[#FFA41F] mb-6">Getting Started Guide</h2>
        <div className="max-w-3xl mx-auto text-left space-y-4">
          {steps.map((step, i) => (
            <div key={i} className="bg-[#0F3A4F] p-6 rounded-lg shadow-md text-[#D4D4D4]">
              {step}
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/features" className="rounded-md bg-[#3CC9F5] text-[#101B24] px-6 py-3 inline-block font-medium">Explore Features</Link>
        </div>
      </section>

      {/* Tutorial Videos */}
      <section id="tutorial-videos" className="bg-[#0F3A4F] py-20 text-center">
        <h2 className="text-3xl font-semibold text-[#FFA41F] mb-6">Tutorial Videos</h2>
        <p className="text-[#D4D4D4] max-w-3xl mx-auto mb-6">
          Step by step video tutorials to help you master the Fikiara platform features and get the most out of your learning experience.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          {videos.map((video, i) => (
            <div key={i} className="w-64 bg-[#114C5F] p-4 rounded-lg shadow-md">
              <Image width={200} height={200} src={video.thumbnail} alt={video.title} className="rounded-md mb-3" />
              <p className="text-[#D4D4D4] font-medium">{video.title}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="https://www.youtube.com/playlist?list=fikiara" target="_blank" className="rounded-md bg-[#3CC9F5] text-[#101B24] px-6 py-3 inline-block font-medium">View All Course Videos</Link>
        </div>
      </section>

      {/* Contact & Live Support */}
      <section id="contact" className="bg-[#114C5F] py-20 text-center">
        <h2 className="text-3xl font-semibold text-[#FFA41F] mb-6">Contact & Live Support</h2>
        <p className="text-[#D4D4D4] max-w-3xl mx-auto mb-6">
          Our dedicated support team is available 24/7 to answer your queries. Fill out the form or chat with us instantly.
        </p>
        <form className="max-w-xl mx-auto space-y-4 text-left">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-md bg-[#0F3A4F] text-[#D4D4D4]" />
          <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md bg-[#0F3A4F] text-[#D4D4D4]" />
          <textarea placeholder="Your Question / Issue" rows={4} className="w-full px-4 py-3 rounded-md bg-[#0F3A4F] text-[#D4D4D4]"></textarea>
          <button type="submit" className="w-full rounded-md bg-[#3CC9F5] text-[#101B24] py-3 font-medium">Send Message</button>
        </form>
        <div className="mt-8">
          <Link href="https://m.me/fikiara" target="_blank" className="rounded-md bg-[#FFA41F] text-[#101B24] px-6 py-3 inline-block font-medium">Chat Now</Link>
        </div>
      </section>

        <section id="support-cards" className="bg-[#0F3A4F] py-20 text-center">
      <h2 className="text-3xl font-semibold text-[#FFA41F] mb-10">Explore Support Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-[#114C5F] p-6 rounded-lg shadow-lg flex flex-col justify-between h-full transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-center mb-4 space-x-3">
              {card.icon}
              <h3 className="text-xl font-semibold text-[#3CC9F5]">{card.title}</h3>
            </div>
            <p className="text-[#D4D4D4] mb-6">{card.description}</p>
            <Link
              href={card.buttonLink}
              target={card.buttonLink.startsWith("http") ? "_blank" : "_self"}
              className="mt-auto rounded-md bg-[#3CC9F5] text-[#101B24] px-6 py-3 font-medium inline-block text-center transition-colors duration-300 hover:bg-[#FFA41F]"
            >
              {card.buttonText}
            </Link>
          </div>
        ))}
      </div>
    </section>

      {/* Final CTA */}
      <section className="bg-[#0F3A4F] py-16 text-center">
        <h2 className="text-2xl font-semibold text-[#FFA41F] mb-4">
          Still have questions? We’re just a message away.
        </h2>
        <Link href="#contact" className="rounded-md bg-[#3CC9F5] text-[#101B24] px-8 py-4 inline-block font-medium">
          Contact Support
        </Link>
      </section>

    </div>
  );
}

