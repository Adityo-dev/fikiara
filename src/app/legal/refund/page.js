"use client";
import React from "react";
import LegalLayout from "@/components/LegalLayout";

export default function RefundPolicyPage() {
  const sections = [
    {
      id: "introduction",
      titleEn: "Introduction",
      bodyEn: (
        <p>
          At Fikiara, your satisfaction is our priority. This Refund Policy outlines how refunds are handled for subscription plans, bundles, and single purchases.
        </p>
      ),
      titleBn: "ভূমিকা",
      bodyBn: (
        <p>
          ফিকিয়ারাতে, আপনার সন্তুষ্টিই আমাদের অগ্রাধিকার। এই রিফান্ড পলিসি সাবস্ক্রিপশন প্ল্যান, বান্ডল এবং একক ক্রয়ের ক্ষেত্রে রিফান্ড কিভাবে হবে তা ব্যাখ্যা করে।
        </p>
      ),
    },
    {
      id: "eligibility",
      titleEn: "Eligibility for Refund",
      bodyEn: (
        <p>
          Refunds are available under the following circumstances:
          <ul className="list-disc list-inside mt-2">
            <li>Subscription canceled within 7 days of payment</li>
            <li>Technical issues preventing access to purchased content</li>
            <li>Duplicate or accidental purchase</li>
          </ul>
        </p>
      ),
      titleBn: "রিফান্ডের যোগ্যতা",
      bodyBn: (
        <p>
          নিম্নলিখিত ক্ষেত্রে রিফান্ড পাওয়া যায়:
          <ul className="list-disc list-inside mt-2">
            <li>পেমেন্টের ৭ দিনের মধ্যে সাবস্ক্রিপশন বাতিল করা হলে</li>
            <li>ক্রয়কৃত কনটেন্ট অ্যাক্সেসে প্রযুক্তিগত সমস্যা হলে</li>
            <li>ডুপ্লিকেট বা ভুলবশত ক্রয় হলে</li>
          </ul>
        </p>
      ),
    },
    {
      id: "process",
      titleEn: "Refund Process",
      bodyEn: (
        <p>
          To request a refund:
          <ol className="list-decimal list-inside mt-2">
            <li>Contact support at <strong>support@fikiara.com</strong></li>
            <li>Provide purchase details and reason for refund</li>
            <li>Our team will review and process the refund within 5–7 business days</li>
          </ol>
        </p>
      ),
      titleBn: "রিফান্ড প্রক্রিয়া",
      bodyBn: (
        <p>
          রিফান্ডের জন্য:
          <ol className="list-decimal list-inside mt-2">
            <li>সাপোর্টে যোগাযোগ করুন: <strong>support@fikiara.com</strong></li>
            <li>ক্রয় বিবরণ এবং রিফান্ডের কারণ প্রদান করুন</li>
            <li>আমাদের টিম ৫–৭ কার্যদিবসের মধ্যে রিফান্ড যাচাই এবং প্রক্রিয়া করবে</li>
          </ol>
        </p>
      ),
    },
    {
      id: "exceptions",
      titleEn: "Exceptions",
      bodyEn: (
        <p>
          Refunds are <strong>not available</strong> for:
          <ul className="list-disc list-inside mt-2">
            <li>Completed courses or consumed digital content</li>
            <li>Promotional or discounted purchases unless explicitly stated</li>
          </ul>
        </p>
      ),
      titleBn: "ব্যতিক্রম",
      bodyBn: (
        <p>
          নিম্নলিখিত ক্ষেত্রে রিফান্ড <strong>প্রযোজ্য নয়</strong>:
          <ul className="list-disc list-inside mt-2">
            <li>সম্পূর্ণ কোর্স বা ব্যবহৃত ডিজিটাল কনটেন্ট</li>
            <li>প্রচারমূলক বা ডিসকাউন্টকৃত ক্রয় যদি স্পষ্টভাবে উল্লেখ না করা হয়</li>
          </ul>
        </p>
      ),
    },
    {
      id: "changes",
      titleEn: "Changes to Refund Policy",
      bodyEn: (
        <p>
          Fikiara reserves the right to update this Refund Policy at any time. Any changes will be posted on this page with the updated effective date.
        </p>
      ),
      titleBn: "রিফান্ড নীতিতে পরিবর্তন",
      bodyBn: (
        <p>
          ফিকিয়ারা এই রিফান্ড পলিসি যে কোনো সময় আপডেট করার অধিকার রাখে। যে কোনো পরিবর্তন এই পৃষ্ঠায় আপডেট করা তারিখের সাথে প্রকাশিত হবে।
        </p>
      ),
    },
  ];

  return (
    <LegalLayout
      titleEn="Refund Policy"
      titleBn="রিফান্ড পলিসি"
      lastUpdated="August 18, 2025"
      sections={sections}
    />
  );
}
