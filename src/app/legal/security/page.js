"use client";
import React from "react";
import LegalLayout from "@/components/LegalLayout";

export default function SecurityPolicyPage() {
  const sections = [
    {
      id: "data-protection",
      titleEn: "Data Protection",
      bodyEn: (
        <p>
          Fikiara ensures that your personal and payment data is securely stored using industry-standard encryption and security practices.
        </p>
      ),
      titleBn: "ডেটা সুরক্ষা",
      bodyBn: (
        <p>
          ফিকিয়ারা আপনার ব্যক্তিগত ও পেমেন্ট তথ্য শিল্প-মানক এনক্রিপশন ও নিরাপত্তা প্র্যাকটিস ব্যবহার করে নিরাপদে সংরক্ষণ করে।
        </p>
      ),
    },
    {
      id: "payment-security",
      titleEn: "Payment Security",
      bodyEn: (
        <p>
          All financial transactions are processed through trusted gateways such as Bkash, Nagad, and Stripe to ensure maximum security.
        </p>
      ),
      titleBn: "পেমেন্ট নিরাপত্তা",
      bodyBn: (
        <p>
          সমস্ত আর্থিক লেনদেন বিশ্বস্ত গেটওয়ের মাধ্যমে প্রক্রিয়াজাত করা হয়, যেমন Bkash, Nagad, এবং Stripe, যাতে সর্বাধিক নিরাপত্তা নিশ্চিত হয়।
        </p>
      ),
    },
    {
      id: "account-protection",
      titleEn: "Account Protection",
      bodyEn: (
        <ul className="list-disc list-inside space-y-1">
          <li>Strong password enforcement</li>
          <li>Two-factor authentication (2FA) in future updates</li>
          <li>Continuous monitoring for suspicious activity</li>
        </ul>
      ),
      titleBn: "অ্যাকাউন্ট সুরক্ষা",
      bodyBn: (
        <ul className="list-disc list-inside space-y-1">
          <li>মজবুত পাসওয়ার্ড প্রয়োজনীয়তা</li>
          <li>ভবিষ্যতের আপডেটে দুই-স্তর প্রমাণীকরণ (2FA)</li>
          <li>সন্দেহজনক কার্যকলাপের জন্য ক্রমাগত মনিটরিং</li>
        </ul>
      ),
    },
    {
      id: "user-responsibility",
      titleEn: "User Responsibility",
      bodyEn: (
        <p>
          Users are encouraged to safeguard their login credentials and report any suspicious activity immediately.
        </p>
      ),
      titleBn: "ব্যবহারকারীর দায়িত্ব",
      bodyBn: (
        <p>
          ব্যবহারকারীদের তাদের লগইন তথ্য সুরক্ষিত রাখতে এবং কোনো সন্দেহজনক কার্যকলাপ দেখা মাত্র রিপোর্ট করতে উৎসাহিত করা হয়।
        </p>
      ),
    },
    {
      id: "contact",
      titleEn: "Contact for Security Concerns",
      bodyEn: (
        <p>
          If you have questions or notice security issues, please contact: <a href="mailto:security@fikiara.com" className="underline text-blue-600">security@fikiara.com</a>
        </p>
      ),
      titleBn: "নিরাপত্তা সংক্রান্ত যোগাযোগ",
      bodyBn: (
        <p>
          যদি আপনার কোনো প্রশ্ন থাকে বা নিরাপত্তা সমস্যা লক্ষ্য করেন, অনুগ্রহ করে যোগাযোগ করুন: <a href="mailto:security@fikiara.com" className="underline text-blue-600">security@fikiara.com</a>
        </p>
      ),
    },
  ];

  return (
    <LegalLayout
      titleEn="Security Policy"
      titleBn="নিরাপত্তা নীতি"
      lastUpdated="August 18, 2025"
      sections={sections}
    />
  );
}
