"use client";
import React from "react";
import LegalLayout from "@/components/LegalLayout";

export default function PrivacyPage() {
  const sections = [
    {
      id: "introduction",
      titleEn: "Introduction",
      bodyEn: (
        <p>
          Welcome to Fikiara. Your privacy is very important to us. This policy explains how we handle your data.
        </p>
      ),
      titleBn: "ভূমিকা",
      bodyBn: (
        <p>
          ফিকিয়ারা-তে স্বাগতম। আপনার গোপনীয়তা আমাদের জন্য অত্যন্ত গুরুত্বপূর্ণ। এই নীতিতে আমরা কিভাবে আপনার তথ্য পরিচালনা করি তা ব্যাখ্যা করা হয়েছে।
        </p>
      ),
    },
    {
      id: "data",
      titleEn: "Data Collection",
      bodyEn: <p>We only collect necessary data to improve your experience.</p>,
      titleBn: "ডাটা সংগ্রহ",
      bodyBn: <p>আমরা শুধুমাত্র প্রয়োজনীয় তথ্য সংগ্রহ করি যাতে আপনার অভিজ্ঞতা আরও ভালো হয়।</p>,
    },
    {
      id: "usage",
      titleEn: "Data Usage",
      bodyEn: <p>We use collected data to provide better features, personalized experience, and secure transactions.</p>,
      titleBn: "ডাটা ব্যবহার",
      bodyBn: <p>আমরা সংগৃহীত তথ্য ব্যবহার করি যাতে উন্নত ফিচার, ব্যক্তিগতকৃত অভিজ্ঞতা এবং নিরাপদ লেনদেন প্রদান করা যায়।</p>,
    },
    {
      id: "sharing",
      titleEn: "Data Sharing & Security",
      bodyEn: <p>We never sell your data. Only trusted service providers can access it when necessary.</p>,
      titleBn: "ডাটা শেয়ারিং ও সিকিউরিটি",
      bodyBn: <p>আমরা কখনও আপনার তথ্য বিক্রি করি না। প্রয়োজন হলে কেবল নির্ভরযোগ্য সার্ভিস প্রোভাইডাররা এটি ব্যবহার করতে পারে।</p>,
    },
    {
      id: "rights",
      titleEn: "Your Rights",
      bodyEn: <p>You can access, update, or delete your data anytime by contacting support.</p>,
      titleBn: "আপনার অধিকার",
      bodyBn: <p>আপনি যেকোনো সময় support@fikiara.com-এ যোগাযোগ করে আপনার তথ্য অ্যাক্সেস, আপডেট বা ডিলিট করতে পারেন।</p>,
    },
  ];

  return <LegalLayout titleEn="Privacy Policy" titleBn="গোপনীয়তা নীতি" lastUpdated="August 18, 2025" sections={sections} />;
}
