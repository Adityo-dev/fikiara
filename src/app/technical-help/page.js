"use client";
import React from "react";

export default function TechnicalHelp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6F2FF] via-[#F9FBFF] to-white text-gray-900 py-12 px-4 md:px-12 lg:px-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#114C5F]">Technical Requirements & Troubleshooting</h1>
        <p className="text-lg text-[#0F3A4F] mt-2 max-w-2xl mx-auto">
          Learn how to set up your devices and troubleshoot common issues to ensure smooth learning on Fikiara.
        </p>
      </header>

      <main className="grid gap-10 max-w-4xl mx-auto">
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-[#114C5F] mb-3">Minimum Device Requirements</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>PC / Laptop: Windows 10+ / macOS 10.15+</li>
            <li>Tablet: iPad OS 13+ / Android 9+</li>
            <li>Mobile: iOS 14+ / Android 9+</li>
            <li>RAM: Minimum 4GB, Recommended 8GB+</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-[#114C5F] mb-3">Recommended Browsers & Software</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Google Chrome latest version</li>
            <li>Mozilla Firefox latest version</li>
            <li>Safari latest version (macOS/iOS)</li>
            <li>Edge latest version (Windows)</li>
            <li>Enable JavaScript & Cookies</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-[#114C5F] mb-3">Internet Connection</h2>
          <p className="text-gray-700">
            A stable internet connection of at least 5 Mbps is recommended for smooth video playback and interactive features. For best results, use Wi-Fi or Ethernet.
          </p>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-[#114C5F] mb-3">Troubleshooting Common Issues</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Videos not loading → Clear browser cache & refresh page.</li>
            <li>Login issues → Reset password or check email verification.</li>
            <li>Interactive features not working → Update browser and enable JavaScript.</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-semibold text-[#114C5F] mb-3">Need More Help?</h2>
          <p className="text-gray-700 mb-4">Contact our support team for personalized assistance.</p>
          <a
            href="mailto:support@fikiara.com"
            className="inline-block bg-[#3CC9F5] text-[#101B24] px-6 py-3 rounded-md font-medium hover:bg-[#FFA41F] transition-colors duration-300"
          >
            Contact Support
          </a>
        </section>
      </main>
    </div>
  );
}
