"use client";
import React from "react";
import LegalLayout from "@/components/LegalLayout";

export default function AccessibilityStatementPage() {
  const sections = [
    {
      id: "commitment",
      titleEn: "Our Commitment",
      bodyEn: (
        <p>
          Fikiara is committed to ensuring digital accessibility for all users, including those with disabilities. We strive to provide a seamless experience for everyone.
        </p>
      ),
      titleBn: "আমাদের প্রতিশ্রুতি",
      bodyBn: (
        <p>
          ফিকিয়ারা সকল ব্যবহারকারীর জন্য ডিজিটাল অ্যাক্সেসিবিলিটি নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ, যার মধ্যে প্রতিবন্ধী ব্যবহারকারীরাও অন্তর্ভুক্ত। আমরা সবার জন্য সুষম অভিজ্ঞতা প্রদানের চেষ্টা করি।
        </p>
      ),
    },
    {
      id: "accessibility-features",
      titleEn: "Accessibility Features",
      bodyEn: (
        <ul className="list-disc list-inside space-y-1">
          <li>Keyboard navigation throughout the platform</li>
          <li>Screen reader compatibility</li>
          <li>Adjustable font size and themes</li>
          <li>Clear and descriptive headings and labels</li>
        </ul>
      ),
      titleBn: "অ্যাক্সেসিবিলিটি ফিচারসমূহ",
      bodyBn: (
        <ul className="list-disc list-inside space-y-1">
          <li>প্ল্যাটফর্মে কীবোর্ড নেভিগেশন সুবিধা</li>
          <li>স্ক্রিন রিডার সামঞ্জস্যপূর্ণ</li>
          <li>ফন্ট সাইজ এবং থিম পরিবর্তনের সুযোগ</li>
          <li>স্পষ্ট এবং বর্ণনামূলক হেডিং এবং লেবেল</li>
        </ul>
      ),
    },
    {
      id: "feedback",
      titleEn: "Feedback",
      bodyEn: (
        <p>
          We welcome feedback to improve accessibility. Please contact us if you encounter barriers or have suggestions.
        </p>
      ),
      titleBn: "মতামত প্রদান",
      bodyBn: (
        <p>
          অ্যাক্সেসিবিলিটি উন্নত করার জন্য আমরা মতামত স্বাগত জানাই। যদি কোনো প্রতিবন্ধকতার সম্মুখীন হন বা পরামর্শ থাকে, অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন।
        </p>
      ),
    },
    {
      id: "contact",
      titleEn: "Contact Information",
      bodyEn: (
        <p>
          Email: <a href="mailto:accessibility@fikiara.com" className="underline text-blue-600">accessibility@fikiara.com</a>
        </p>
      ),
      titleBn: "যোগাযোগের তথ্য",
      bodyBn: (
        <p>
          ইমেইল: <a href="mailto:accessibility@fikiara.com" className="underline text-blue-600">accessibility@fikiara.com</a>
        </p>
      ),
    },
  ];

  return (
    <LegalLayout
      titleEn="Accessibility Statement"
      titleBn="অ্যাক্সেসিবিলিটি বিবৃতি"
      lastUpdated="August 18, 2025"
      sections={sections}
    />
  );
}
