"use client";
import React from "react";
import LegalLayout from "@/components/LegalLayout";

export default function IntellectualPropertyPage() {
  const sections = [
    {
      id: "ownership",
      titleEn: "Ownership of Content",
      bodyEn: (
        <p>
          All content, materials, courses, and media on Fikiara are owned by Fikiara or its licensors. Users may not copy, distribute, or use the content without explicit permission.
        </p>
      ),
      titleBn: "কন্টেন্টের মালিকানা",
      bodyBn: (
        <p>
          ফিকিয়ারার সমস্ত কন্টেন্ট, উপকরণ, কোর্স এবং মিডিয়া ফিকিয়ারা বা তার লাইসেন্সদাতাদের অন্তর্ভুক্ত। ব্যবহারকারীরা স্পষ্ট অনুমতি ছাড়া কন্টেন্ট কপি, বিতরণ বা ব্যবহার করতে পারবেন না।
        </p>
      ),
    },
    {
      id: "user-generated",
      titleEn: "User-Generated Content",
      bodyEn: (
        <p>
          Users retain ownership of their own content submitted to Fikiara. By submitting content, you grant Fikiara a license to display and distribute it within the platform.
        </p>
      ),
      titleBn: "ব্যবহারকারীর তৈরি কন্টেন্ট",
      bodyBn: (
        <p>
          ব্যবহারকারীরা ফিকিয়ারাতে জমা দেওয়া তাদের নিজস্ব কন্টেন্টের মালিকানা রাখেন। কন্টেন্ট জমা দিয়ে, আপনি ফিকিয়ারাকে প্ল্যাটফর্মে প্রদর্শন ও বিতরণের জন্য লাইসেন্স প্রদান করেন।
        </p>
      ),
    },
    {
      id: "trademark",
      titleEn: "Trademarks and Branding",
      bodyEn: (
        <p>
          The Fikiara name, logo, and branding elements are protected trademarks. Unauthorized use of Fikiara trademarks is prohibited.
        </p>
      ),
      titleBn: "ট্রেডমার্ক এবং ব্র্যান্ডিং",
      bodyBn: (
        <p>
          ফিকিয়ারা নাম, লোগো এবং ব্র্যান্ড উপাদানগুলি সুরক্ষিত ট্রেডমার্ক। অনুমতি ছাড়া ফিকিয়ারা ট্রেডমার্ক ব্যবহার করা নিষিদ্ধ।
        </p>
      ),
    },
    {
      id: "infringement",
      titleEn: "Reporting Infringement",
      bodyEn: (
        <p>
          If you believe your intellectual property rights have been violated, please contact us immediately at <a href="mailto:support@fikiara.com" className="underline text-blue-600">support@fikiara.com</a>.
        </p>
      ),
      titleBn: "অধিকার লঙ্ঘনের রিপোর্ট",
      bodyBn: (
        <p>
          যদি আপনি মনে করেন আপনার মেধাস্বত্ব লঙ্ঘিত হয়েছে, তাহলে দয়া করে আমাদের সাথে <a href="mailto:support@fikiara.com" className="underline text-blue-600">support@fikiara.com</a> এ যোগাযোগ করুন।
        </p>
      ),
    },
  ];

  return (
    <LegalLayout
      titleEn="Intellectual Property Policy"
      titleBn="মেধাস্বত্ব নীতি"
      lastUpdated="August 18, 2025"
      sections={sections}
    />
  );
}
