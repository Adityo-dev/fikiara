"use client";
import React from "react";
import LegalLayout from "@/components/LegalLayout";

export default function TransparencyPage() {
  const sections = [
    {
      id: "introduction",
      titleEn: "Introduction",
      bodyEn: (
        <p>
          At Fikiara, we believe in complete transparency. This statement outlines how we operate, share updates, and maintain clarity in all our processes.
        </p>
      ),
      titleBn: "ভূমিকা",
      bodyBn: (
        <p>
          ফিকিয়ারাতে, আমরা সম্পূর্ণ স্বচ্ছতায় বিশ্বাস করি। এই স্টেটমেন্ট আমাদের কার্যপ্রণালী, আপডেট শেয়ার করা, এবং সব প্রক্রিয়ায় পরিষ্কারতা কিভাবে রক্ষা করা হয় তা ব্যাখ্যা করে।
        </p>
      ),
    },
    {
      id: "updates",
      titleEn: "Regular Updates",
      bodyEn: (
        <p>
          We regularly update our platform, including new courses, features, and improvements. All updates are communicated clearly via email, blog posts, and in-app notifications.
        </p>
      ),
      titleBn: "নিয়মিত আপডেট",
      bodyBn: (
        <p>
          আমরা নিয়মিত আমাদের প্ল্যাটফর্ম আপডেট করি, নতুন কোর্স, ফিচার এবং উন্নয়ন সহ। সমস্ত আপডেট স্পষ্টভাবে ইমেইল, ব্লগ পোস্ট এবং অ্যাপ নোটিফিকেশনের মাধ্যমে জানানো হয়।
        </p>
      ),
    },
    {
      id: "pricing-transparency",
      titleEn: "Pricing Transparency",
      bodyEn: (
        <p>
          All subscription plans, bundles, and single purchase options are presented with clear pricing. There are no hidden fees, and any additional costs are explicitly mentioned.
        </p>
      ),
      titleBn: "মূল্য স্বচ্ছতা",
      bodyBn: (
        <p>
          সমস্ত সাবস্ক্রিপশন প্ল্যান, বান্ডল এবং একক ক্রয়ের বিকল্প স্পষ্ট মূল্যের সঙ্গে উপস্থাপিত হয়। কোনো লুকানো খরচ নেই, এবং অতিরিক্ত খরচ স্পষ্টভাবে উল্লেখ করা হয়।
        </p>
      ),
    },
    {
      id: "user-data",
      titleEn: "User Data Transparency",
      bodyEn: (
        <p>
          Fikiara never sells or shares personal data without consent. Users are informed how their data is used, and privacy policies are accessible for review at any time.
        </p>
      ),
      titleBn: "ব্যবহারকারীর ডেটা স্বচ্ছতা",
      bodyBn: (
        <p>
          ফিকিয়ারা কোনো ব্যবহারকারীর ব্যক্তিগত ডেটা অনুমতি ছাড়া বিক্রি বা শেয়ার করে না। ব্যবহারকারীরা জানেন কিভাবে তাদের ডেটা ব্যবহার হয় এবং প্রাইভেসি পলিসি যে কোনো সময় পর্যালোচনার জন্য অ্যাক্সেসযোগ্য।
        </p>
      ),
    },
    {
      id: "roadmap",
      titleEn: "Future Roadmap",
      bodyEn: (
        <p>
          Our roadmap, including upcoming features and improvements, is shared publicly. We encourage feedback from the community to ensure a collaborative and transparent growth process.
        </p>
      ),
      titleBn: "ভবিষ্যৎ রোডম্যাপ",
      bodyBn: (
        <p>
          আমাদের রোডম্যাপ, আসন্ন ফিচার এবং উন্নয়নের বিষয়সমূহ প্রকাশ্যে শেয়ার করা হয়। আমরা কমিউনিটির প্রতিক্রিয়া উত্সাহিত করি যাতে সহযোগিতামূলক এবং স্বচ্ছ বৃদ্ধি নিশ্চিত হয়।
        </p>
      ),
    },
  ];

  return (
    <LegalLayout
      titleEn="Transparency Statement"
      titleBn="স্বচ্ছতা বিবৃতি"
      lastUpdated="August 18, 2025"
      sections={sections}
    />
  );
}
