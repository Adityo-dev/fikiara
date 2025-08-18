"use client";
import React from "react";

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6F2FF] via-[#F9FBFF] to-white text-gray-900 py-12 px-4 md:px-12 lg:px-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#114C5F]">Accessibility Help</h1>
        <p className="text-lg text-[#0F3A4F] mt-2 max-w-2xl mx-auto">
          Fikiara is committed to making learning accessible to everyone. Explore tools and features designed to enhance your experience.
        </p>
      </header>

      <main className="grid gap-10 max-w-4xl mx-auto">
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-[#114C5F] mb-3">Accessibility Goals</h2>
          <p className="text-gray-700">
            Our goal is to ensure that learners of all abilities can access content, navigate the platform, and engage with courses effectively.
          </p>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-[#114C5F] mb-3">Supported Accessibility Features</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Screen Reader Compatibility</li>
            <li>Keyboard Navigation Support</li>
            <li>Video Captions & Transcripts</li>
            <li>High Contrast & Dark Mode Options</li>
            <li>Resizable Text & Scalable UI</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-[#114C5F] mb-3">How to Enable Accessibility Features</h2>
          <p className="text-gray-700">
            Navigate to your profile → Settings → Accessibility. Here you can enable screen readers, captions, contrast modes, and more.
          </p>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-semibold text-[#114C5F] mb-3">Need Assistance?</h2>
          <p className="text-gray-700 mb-4">Contact our team for help with accessibility options and support.</p>
          <a
            href="mailto:accessibility@fikiara.com"
            className="inline-block bg-[#3CC9F5] text-[#101B24] px-6 py-3 rounded-md font-medium hover:bg-[#FFA41F] transition-colors duration-300"
          >
            Contact Accessibility Support
          </a>
        </section>
      </main>
    </div>
  );
}
