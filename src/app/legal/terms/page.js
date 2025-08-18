"use client";
import React from "react";
import LegalLayout from "@/components/LegalLayout";

export default function TermsPage() {
  const sections = [
    {
      id: "introduction",
      titleEn: "Introduction",
      bodyEn: (
        <p>
          Welcome to Fikiara. By accessing our platform, you agree to these Terms & Conditions. Please read carefully before using our services.
        </p>
      ),
      titleBn: "ভূমিকা",
      bodyBn: (
        <p>
          ফিকিয়ারা-তে স্বাগতম। আমাদের প্ল্যাটফর্ম ব্যবহার করে আপনি এই শর্তাবলীতে সম্মত হন। অনুগ্রহ করে পরিষেবা ব্যবহারের আগে মনোযোগ দিয়ে পড়ুন।
        </p>
      ),
    },
    {
      id: "use",
      titleEn: "Use of the Platform",
      bodyEn: (
        <p>
          You may use Fikiara for personal learning, growth, and collaboration. Unauthorized use or distribution of content is prohibited.
        </p>
      ),
      titleBn: "প্ল্যাটফর্ম ব্যবহার",
      bodyBn: (
        <p>
          আপনি ব্যক্তিগত শেখা, উন্নয়ন ও সহযোগিতার জন্য ফিকিয়ারা ব্যবহার করতে পারেন। অনুমোদন ছাড়া কনটেন্টের ব্যবহার বা বিতরণ নিষিদ্ধ।
        </p>
      ),
    },
    {
      id: "accounts",
      titleEn: "Accounts",
      bodyEn: (
        <p>
          Users are responsible for maintaining the confidentiality of their account information and passwords. Any activity under your account is your responsibility.
        </p>
      ),
      titleBn: "অ্যাকাউন্ট",
      bodyBn: (
        <p>
          ব্যবহারকারীরা তাদের অ্যাকাউন্ট তথ্য এবং পাসওয়ার্ডের গোপনীয়তা রক্ষা করার জন্য দায়ী। আপনার অ্যাকাউন্টের যেকোনো কার্যকলাপ আপনার দায়িত্ব।
        </p>
      ),
    },
    {
      id: "payments",
      titleEn: "Payments & Subscription",
      bodyEn: (
        <p>
          All subscription fees are billed in advance. Refunds are subject to our Refund Policy. Payment information is securely processed.
        </p>
      ),
      titleBn: "পেমেন্ট ও সাবস্ক্রিপশন",
      bodyBn: (
        <p>
          সমস্ত সাবস্ক্রিপশন ফি আগেই বিল করা হয়। রিফান্ড আমাদের রিফান্ড নীতির অধীনে। পেমেন্ট তথ্য নিরাপদভাবে প্রক্রিয়াজাত করা হয়।
        </p>
      ),
    },
    {
      id: "content",
      titleEn: "Content",
      bodyEn: (
        <p>
          All content on Fikiara is owned by us or licensed to us. Copying, sharing, or selling content without permission is strictly prohibited.
        </p>
      ),
      titleBn: "কনটেন্ট",
      bodyBn: (
        <p>
          ফিকিয়ারা-তে সব কনটেন্ট আমাদের মালিকানাধীন বা আমাদের কাছে লাইসেন্সপ্রাপ্ত। অনুমতি ছাড়া কনটেন্ট কপি, শেয়ার বা বিক্রি করা কঠোরভাবে নিষিদ্ধ।
        </p>
      ),
    },
    {
      id: "termination",
      titleEn: "Termination",
      bodyEn: (
        <p>
          We reserve the right to terminate accounts that violate these Terms & Conditions without prior notice.
        </p>
      ),
      titleBn: "টার্মিনেশন",
      bodyBn: (
        <p>
          আমরা এই শর্তাবলী লঙ্ঘন করা অ্যাকাউন্ট বন্ধ করার অধিকার রাখি পূর্ব-নোটিশ ছাড়া।
        </p>
      ),
    },
    {
      id: "changes",
      titleEn: "Changes to Terms",
      bodyEn: (
        <p>
          We may update these Terms & Conditions from time to time. Users are encouraged to review the terms periodically.
        </p>
      ),
      titleBn: "শর্তাবলীতে পরিবর্তন",
      bodyBn: (
        <p>
          আমরা সময়ে সময়ে এই শর্তাবলী আপডেট করতে পারি। ব্যবহারকারীদের নিয়মিত শর্তাবলী পর্যালোচনা করার জন্য উৎসাহিত করা হয়।
        </p>
      ),
    },
  ];

  return (
    <LegalLayout
      titleEn="Terms & Conditions"
      titleBn="শর্তাবলী ও নিয়মাবলী"
      lastUpdated="August 18, 2025"
      sections={sections}
    />
  );
}
