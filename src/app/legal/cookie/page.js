"use client";
import React from "react";
import LegalLayout from "@/components/LegalLayout";

export default function CookiePolicyPage() {
  const sections = [
    {
      id: "introduction",
      titleEn: "Introduction",
      bodyEn: (
        <p>
          At Fikiara, we use cookies to enhance your experience, improve performance, and analyze usage. This Cookie Policy explains what cookies are and how we use them.
        </p>
      ),
      titleBn: "ভূমিকা",
      bodyBn: (
        <p>
          ফিকিয়ারাতে, আমরা আপনার অভিজ্ঞতা উন্নত করতে, পারফরম্যান্স বাড়াতে এবং ব্যবহার বিশ্লেষণ করতে কুকিজ ব্যবহার করি। এই কুকি নীতি কুকিজ কী এবং আমরা কীভাবে ব্যবহার করি তা ব্যাখ্যা করে।
        </p>
      ),
    },
    {
      id: "types-of-cookies",
      titleEn: "Types of Cookies",
      bodyEn: (
        <ul className="list-disc list-inside space-y-1">
          <li>Essential Cookies – Required for basic platform functionality.</li>
          <li>Performance Cookies – To analyze usage and improve features.</li>
          <li>Functional Cookies – To remember preferences and settings.</li>
          <li>Marketing Cookies – To provide personalized offers and updates.</li>
        </ul>
      ),
      titleBn: "কুকির ধরন",
      bodyBn: (
        <ul className="list-disc list-inside space-y-1">
          <li>প্রয়োজনীয় কুকি – প্ল্যাটফর্মের মূল কার্যকারিতার জন্য প্রয়োজন।</li>
          <li>পারফরম্যান্স কুকি – ব্যবহার বিশ্লেষণ এবং ফিচার উন্নয়নের জন্য।</li>
          <li>ফাংশনাল কুকি – পছন্দসই সেটিংস মনে রাখার জন্য।</li>
          <li>মার্কেটিং কুকি – ব্যক্তিগতকৃত অফার এবং আপডেট দেওয়ার জন্য।</li>
        </ul>
      ),
    },
    {
      id: "management",
      titleEn: "Managing Cookies",
      bodyEn: (
        <p>
          You can manage or disable cookies in your browser settings. Note that some features may not work properly if cookies are disabled.
        </p>
      ),
      titleBn: "কুকি ব্যবস্থাপনা",
      bodyBn: (
        <p>
          আপনি ব্রাউজারের সেটিংসে কুকি ম্যানেজ বা নিষ্ক্রিয় করতে পারেন। কুকি নিষ্ক্রিয় করলে কিছু ফিচার সঠিকভাবে কাজ নাও করতে পারে।
        </p>
      ),
    },
    {
      id: "consent",
      titleEn: "Consent",
      bodyEn: (
        <p>
          By using Fikiara, you consent to the use of cookies as described in this policy. You can withdraw consent by managing your browser settings.
        </p>
      ),
      titleBn: "সম্মতি",
      bodyBn: (
        <p>
          ফিকিয়ারা ব্যবহার করে, আপনি এই নীতিতে বর্ণিত কুকির ব্যবহারে সম্মতি দেন। আপনি ব্রাউজার সেটিংস ম্যানেজ করে সম্মতি প্রত্যাহার করতে পারেন।
        </p>
      ),
    },
  ];

  return (
    <LegalLayout
      titleEn="Cookie Policy"
      titleBn="কুকি নীতি"
      lastUpdated="August 18, 2025"
      sections={sections}
    />
  );
}
