"use client";
import React from "react";
import LegalLayout from "@/components/LegalLayout";

export default function DisclaimerPage() {
  const sections = [
    {
      id: "general-disclaimer",
      titleEn: "General Disclaimer",
      bodyEn: (
        <p>
          All content, courses, and materials on Fikiara are for educational purposes only. Fikiara does not guarantee specific results or outcomes from using the platform.
        </p>
      ),
      titleBn: "সাধারণ অস্বীকার",
      bodyBn: (
        <p>
          ফিকিয়ারার সমস্ত কন্টেন্ট, কোর্স এবং উপকরণ শুধুমাত্র শিক্ষামূলক উদ্দেশ্যে। ফিকিয়ারা প্ল্যাটফর্ম ব্যবহার করার মাধ্যমে নির্দিষ্ট ফলাফল বা ফলাফলের নিশ্চয়তা প্রদান করে না।
        </p>
      ),
    },
    {
      id: "limitation-liability",
      titleEn: "Limitation of Liability",
      bodyEn: (
        <p>
          Fikiara shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of the platform. Users access and use Fikiara at their own risk.
        </p>
      ),
      titleBn: "দায়ের সীমাবদ্ধতা",
      bodyBn: (
        <p>
          ফিকিয়ারা প্ল্যাটফর্ম ব্যবহারের ফলে উদ্ভূত কোনো সরাসরি, পরোক্ষ, আকস্মিক বা পরিণামস্বরূপ ক্ষতির জন্য দায়ী হবে না। ব্যবহারকারীরা নিজ নিজ ঝুঁকিতে ফিকিয়ারাকে ব্যবহার করবেন।
        </p>
      ),
    },
    {
      id: "external-links",
      titleEn: "External Links",
      bodyEn: (
        <p>
          Fikiara may contain links to third-party websites. We are not responsible for the content or practices of these external sites.
        </p>
      ),
      titleBn: "বহিরাগত লিঙ্কসমূহ",
      bodyBn: (
        <p>
          ফিকিয়ারাতে তৃতীয় পক্ষের ওয়েবসাইটের লিঙ্ক থাকতে পারে। আমরা এই বহিরাগত সাইটগুলির কন্টেন্ট বা প্র্যাকটিসের জন্য দায়ী নই।
        </p>
      ),
    },
    {
      id: "user-responsibility",
      titleEn: "User Responsibility",
      bodyEn: (
        <p>
          Users are responsible for how they apply the knowledge gained from Fikiara. Always exercise judgment and caution in real-world application.
        </p>
      ),
      titleBn: "ব্যবহারকারীর দায়িত্ব",
      bodyBn: (
        <p>
          ব্যবহারকারীরা ফিকিয়ারার মাধ্যমে প্রাপ্ত জ্ঞান কীভাবে ব্যবহার করবেন তার জন্য দায়ী। বাস্তব জীবনে প্রয়োগ করার সময় সর্বদা বিচারবুদ্ধি এবং সতর্কতা অবলম্বন করুন।
        </p>
      ),
    },
  ];

  return (
    <LegalLayout
      titleEn="Disclaimer & Limitation of Liability"
      titleBn="অস্বীকার ও দায়ের সীমাবদ্ধতা"
      lastUpdated="August 18, 2025"
      sections={sections}
    />
  );
}
