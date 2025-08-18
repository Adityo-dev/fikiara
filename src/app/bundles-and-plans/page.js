"use client";
import React from "react";
import Link from "next/link";
import { Book, Video, FileText, Users, Star } from "lucide-react";

export default function BundlesPlansPage() {
  const bundles = [
    {
      title: "Starter Bundle",
      description:
        "Ideal for beginners who want to explore Fikiara content. Includes 5 core courses, 10+ guided tutorials, and basic journal features.",
      features: [
        { icon: <Book className="h-5 w-5 text-[#FFA41F]" />, label: "5 Core Courses" },
        { icon: <Video className="h-5 w-5 text-[#FFA41F]" />, label: "10+ Tutorials" },
        { icon: <FileText className="h-5 w-5 text-[#FFA41F]" />, label: "Basic Journal & Notes" },
      ],
      buttonText: "Choose Starter",
      buttonLink: "/subscribe/starter",
      bg: "bg-[#114C5F]",
    },
    {
      title: "Standard Bundle",
      description:
        "Designed for consistent learners with 15 courses, full library access, journal & life tracker, and community forum participation.",
      features: [
        { icon: <Book className="h-5 w-5 text-[#FFA41F]" />, label: "15 Courses" },
        { icon: <Video className="h-5 w-5 text-[#FFA41F]" />, label: "Full Library Access" },
        { icon: <FileText className="h-5 w-5 text-[#FFA41F]" />, label: "Journal & Life Tracker" },
        { icon: <Users className="h-5 w-5 text-[#FFA41F]" />, label: "Community Forum Access" },
      ],
      buttonText: "Choose Standard",
      buttonLink: "/subscribe/standard",
      bg: "bg-[#0F3A4F]",
    },
    {
      title: "Premium Bundle",
      description:
        "All-access bundle for transformative learning: all courses & videos, advanced journal & tracker, exclusive webinars, and gamified rewards.",
      features: [
        { icon: <Book className="h-5 w-5 text-[#FFA41F]" />, label: "All Courses & Videos" },
        { icon: <FileText className="h-5 w-5 text-[#FFA41F]" />, label: "Advanced Journal & Life Tracker" },
        { icon: <Users className="h-5 w-5 text-[#FFA41F]" />, label: "Community & Mentorship" },
        { icon: <Star className="h-5 w-5 text-[#FFA41F]" />, label: "Gamified Rewards & Badges" },
      ],
      buttonText: "Choose Premium",
      buttonLink: "/subscribe/premium",
      bg: "bg-[#114C5F]",
    },
  ];

  const faqs = [
    {
      q: "Can I switch bundles later?",
      a: "Yes, you can upgrade or change your bundle anytime to fit your learning goals.",
    },
    {
      q: "Are there any hidden costs?",
      a: "No, all prices are transparent. Bundles include all features listed.",
    },
    {
      q: "What payment methods are accepted?",
      a: "Credit/Debit Cards, Mobile Payments, and Online Banking are supported.",
    },
    {
      q: "Is there a trial option?",
      a: "Yes, a 7-day free trial is available for selected bundles.",
    },
    {
      q: "Do bundles include offline access?",
      a: "Yes, you can download courses and resources for offline use.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes, you can cancel your subscription anytime without penalties.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6F2FF] via-[#F9FBFF] to-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-[#114C5F] py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#FFA41F] mb-4">Bundles & Plans</h1>
        <p className="text-[#D4D4D4] text-lg max-w-2xl mx-auto">
          Fikiara তে শিক্ষার অভিজ্ঞতাকে সহজ, মানসম্মত এবং কস্ট-এফেকটিভ করার জন্য আমরা বিভিন্ন Bundles ও Subscription Plans অফার করি। আপনার শিখার লক্ষ্য এবং সময় অনুসারে আপনার জন্য সবচেয়ে উপযুক্ত প্ল্যান নির্বাচন করুন।
        </p>
      </section>

      {/* Bundles Section */}
      <section className="py-20 max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        {bundles.map((bundle, idx) => (
          <div key={idx} className={`${bundle.bg} rounded-xl p-6 shadow-lg transition-transform hover:scale-105`}>
            <h2 className="text-xl font-semibold text-[#FFA41F] mb-3">{bundle.title}</h2>
            <p className="text-gray-200 mb-4">{bundle.description}</p>
            <ul className="mb-6 space-y-2">
              {bundle.features.map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-gray-200">
                  {f.icon} <span>{f.label}</span>
                </li>
              ))}
            </ul>
            <Link href={bundle.buttonLink} className="inline-block bg-[#3CC9F5] text-[#101B24] font-medium px-6 py-3 rounded-md hover:bg-[#1CA7E0] transition">
              {bundle.buttonText}
            </Link>
          </div>
        ))}
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-[#0F3A4F] text-center">
        <h2 className="text-3xl font-semibold text-[#FFA41F] mb-12">FAQ – Common Questions</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-[#114C5F] p-6 rounded-lg shadow-md text-left">
              <h3 className="text-lg font-semibold text-[#3CC9F5] mb-2">{faq.q}</h3>
              <p className="text-[#D4D4D4]">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#114C5F] text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#FFA41F] mb-6">Ready to Choose Your Bundle?</h2>
        <p className="text-[#D4D4D4] max-w-2xl mx-auto mb-6">
          Pick the plan that matches your learning journey and start transforming your life today.
        </p>
        <Link href="/subscribe" className="rounded-md bg-[#3CC9F5] text-[#101B24] px-8 py-4 inline-block font-medium hover:bg-[#1CA7E0] transition">
          View Bundles & Subscribe
        </Link>
      </section>
    </div>
  );
}
