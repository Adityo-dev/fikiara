"use client";
import React from "react";
import LegalLayout from "@/components/LegalLayout";

export default function CommunityGuidelinesPage() {
  const sections = [
    {
      id: "respectful-behavior",
      titleEn: "Respectful Behavior",
      bodyEn: (
        <p>
          All users are expected to interact respectfully. Harassment, hate speech, or abusive behavior is strictly prohibited within the Fikiara community.
        </p>
      ),
      titleBn: "সন্মানজনক আচরণ",
      bodyBn: (
        <p>
          সমস্ত ব্যবহারকারীকে সন্মানজনকভাবে আচরণ করার আশা করা হয়। ফিকিয়ারা কমিউনিটিতে হয়রানি, ঘৃণা প্রকাশ বা আপত্তিকর আচরণ কঠোরভাবে নিষিদ্ধ।
        </p>
      ),
    },
    {
      id: "appropriate-content",
      titleEn: "Appropriate Content",
      bodyEn: (
        <p>
          Only share content that is relevant, educational, and constructive. Avoid posting offensive, misleading, or spam content.
        </p>
      ),
      titleBn: "উপযুক্ত কনটেন্ট",
      bodyBn: (
        <p>
          শুধুমাত্র প্রাসঙ্গিক, শিক্ষামূলক এবং গঠনমূলক কনটেন্ট শেয়ার করুন। আপত্তিকর, বিভ্রান্তিকর বা স্প্যাম কনটেন্ট পোস্ট করা এড়িয়ে চলুন।
        </p>
      ),
    },
    {
      id: "privacy-respect",
      titleEn: "Privacy Respect",
      bodyEn: (
        <p>
          Do not share personal information of others without consent. Respect the privacy of all community members.
        </p>
      ),
      titleBn: "গোপনীয়তার সন্মান",
      bodyBn: (
        <p>
          অনুমতি ছাড়া অন্যদের ব্যক্তিগত তথ্য শেয়ার করবেন না। সমস্ত কমিউনিটি সদস্যের গোপনীয়তার সন্মান করুন।
        </p>
      ),
    },
    {
      id: "reporting-issues",
      titleEn: "Reporting Issues",
      bodyEn: (
        <p>
          If you encounter any violation of guidelines, please report it to the moderators immediately.
        </p>
      ),
      titleBn: "সমস্যা রিপোর্ট করা",
      bodyBn: (
        <p>
          যদি কোনো নির্দেশিকা লঙ্ঘন দেখতে পান, অনুগ্রহ করে তা তাত্ক্ষণিকভাবে মডারেটরদের রিপোর্ট করুন।
        </p>
      ),
    },
    {
      id: "community-growth",
      titleEn: "Community Growth",
      bodyEn: (
        <p>
          Engage positively, share knowledge, help peers, and contribute to a safe and inspiring environment for everyone.
        </p>
      ),
      titleBn: "কমিউনিটি বৃদ্ধির নীতি",
      bodyBn: (
        <p>
          ইতিবাচকভাবে অংশগ্রহণ করুন, জ্ঞান শেয়ার করুন, সহকর্মীদের সাহায্য করুন, এবং সবার জন্য নিরাপদ ও অনুপ্রেরণামূলক পরিবেশে অবদান রাখুন।
        </p>
      ),
    },
  ];

  return (
    <LegalLayout
      titleEn="Community Guidelines"
      titleBn="কমিউনিটি নির্দেশিকা"
      lastUpdated="August 18, 2025"
      sections={sections}
    />
  );
}
