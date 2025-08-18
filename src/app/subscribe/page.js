"use client";
import React from "react";
import { Book, Video, Clipboard, Users, Gift } from "lucide-react";
import Link from "next/link";

export default function SubscribePage() {
  const plans = [
    {
      title: "Starter Plan",
      price: "$9.99 / month",
      description: "Perfect for beginners to start learning.",
      features: [
        { icon: <Book className="w-5 h-5 text-[#FFA41F]" />, label: "5 Core Courses" },
        { icon: <Video className="w-5 h-5 text-[#FFA41F]" />, label: "10 Tutorial Videos" },
        { icon: <Clipboard className="w-5 h-5 text-[#FFA41F]" />, label: "Basic Journal & Notes" },
      ],
      link: "/subscribe/starter",
    },
    {
      title: "Standard Plan",
      price: "$24.99 / month",
      description: "Access full library and community features.",
      features: [
        { icon: <Book className="w-5 h-5 text-[#FFA41F]" />, label: "15 Courses" },
        { icon: <Video className="w-5 h-5 text-[#FFA41F]" />, label: "Full Tutorial Library" },
        { icon: <Clipboard className="w-5 h-5 text-[#FFA41F]" />, label: "Journal & Life Tracker" },
        { icon: <Users className="w-5 h-5 text-[#FFA41F]" />, label: "Community Access" },
      ],
      link: "/subscribe/standard",
    },
    {
      title: "Premium Plan",
      price: "$49.99 / month",
      description: "All-access plan with mentorship and rewards.",
      features: [
        { icon: <Book className="w-5 h-5 text-[#FFA41F]" />, label: "All Courses" },
        { icon: <Video className="w-5 h-5 text-[#FFA41F]" />, label: "All Tutorials" },
        { icon: <Clipboard className="w-5 h-5 text-[#FFA41F]" />, label: "Advanced Journal & Tracker" },
        { icon: <Users className="w-5 h-5 text-[#FFA41F]" />, label: "Webinars & Mentorship" },
        { icon: <Gift className="w-5 h-5 text-[#FFA41F]" />, label: "Gamified Rewards" },
      ],
      link: "/subscribe/premium",
    },
  ];

  const faqs = [
    { q: "Can I change my plan anytime?", a: "Yes, you can upgrade or downgrade your plan anytime from your account settings." },
    { q: "Are there any hidden costs?", a: "No, all prices are transparent. You will only be charged as per your selected plan." },
    { q: "What payment methods are accepted?", a: "We accept Credit/Debit cards, PayPal, and other major payment gateways." },
    { q: "Is there a free trial available?", a: "Yes, you can try the Starter Plan free for 7 days before subscribing." },
    { q: "Do plans include offline access?", a: "Yes, most courses and tutorials can be downloaded for offline learning." },
    { q: "Can I cancel anytime without penalty?", a: "Absolutely, you can cancel your subscription anytime without extra charges." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6F2FF] via-[#F9FBFF] to-white text-gray-900">
      
      {/* Hero Section */}
      <section className="bg-[#114C5F] py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#FFA41F] mb-4">Subscribe & Transform Your Life</h1>
        <p className="text-[#D4D4D4] text-lg md:text-xl max-w-2xl mx-auto mb-8">
          আপনার শিক্ষার যাত্রা শুরু করুন Fikiara এর মাধ্যমে – সাবস্ক্রাইব করুন আপনার প্রিয় প্ল্যানের জন্য। আমাদের প্ল্যানগুলো ডিজাইন করা হয়েছে যেন আপনার শেখার অভিজ্ঞতা seamless, complete, এবং rewarding হয়।
        </p>
        <Link href="#plans" className="rounded-md bg-[#3CC9F5] text-[#101B24] text-lg font-medium px-8 py-4 inline-block hover:bg-[#1FA6E1] transition">
          See Plans
        </Link>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 text-center max-w-6xl mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#114C5F] mb-12">Our Subscription Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:scale-105 transform transition cursor-pointer">
              <h3 className="text-2xl font-bold text-[#114C5F] mb-2">{plan.title}</h3>
              <p className="text-lg font-medium text-[#3CC9F5] mb-4">{plan.price}</p>
              <p className="text-gray-700 mb-4">{plan.description}</p>
              <ul className="text-left space-y-2 mb-6">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    {f.icon} <span>{f.label}</span>
                  </li>
                ))}
              </ul>
              <Link href={plan.link} className="inline-block w-full bg-[#FFA41F] text-[#101B24] font-medium py-3 rounded-md hover:bg-[#E69900] transition">
                Subscribe Now
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-[#0F3A4F] py-20 text-center">
        <h2 className="text-3xl font-semibold text-[#FFA41F] mb-10">FAQ – Common Questions</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((item, i) => (
            <div key={i} className="bg-[#114C5F] p-6 rounded-lg shadow-md text-left text-[#D4D4D4] hover:shadow-lg transition">
              <h3 className="font-semibold text-[#3CC9F5] mb-2">{item.q}</h3>
              <p className="text-gray-300">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center bg-[#114C5F]">
        <h2 className="text-3xl font-semibold text-[#FFA41F] mb-6">Ready to Start Your Journey?</h2>
        <p className="text-[#D4D4D4] max-w-2xl mx-auto mb-8">
          Choose the plan that fits your learning goals and unlock a life-transforming experience.
        </p>
        <Link href="#plans" className="rounded-md bg-[#3CC9F5] text-[#101B24] px-8 py-4 inline-block font-medium hover:bg-[#1FA6E1] transition">
          Subscribe Now
        </Link>
      </section>

    </div>
  );
}
