"use client";
import React from "react";

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6F2FF] via-[#F9FBFF] to-white text-gray-900 py-12 px-4 md:px-12 lg:px-20">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#114C5F]">Feedback & Suggestions</h1>
        <p className="text-lg text-[#0F3A4F] mt-2 max-w-2xl mx-auto">
          Your feedback helps us make Fikiara better for everyone. Share your thoughts, report bugs, or suggest new features.
        </p>
      </header>

      <main className="max-w-3xl mx-auto space-y-10">
        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-[#114C5F] mb-3">Why Feedback Matters</h2>
          <p className="text-gray-700">
            Every suggestion and report helps us improve course quality, platform usability, and user experience. Your voice matters!
          </p>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-[#114C5F] mb-3">Types of Feedback</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Feature Request: Suggest new tools or enhancements.</li>
            <li>Bug Report: Report technical or content issues.</li>
            <li>General Suggestions: Share ideas to improve learning experience.</li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-[#114C5F] mb-3">How Feedback is Handled</h2>
          <p className="text-gray-700">
            Our team reviews all submissions weekly. Bugs are prioritized, suggestions are evaluated for feasibility, and features are planned in roadmap updates.
          </p>
        </section>

        <section className="bg-white p-6 rounded-xl shadow-md text-center">
          <h2 className="text-2xl font-semibold text-[#114C5F] mb-3">Share Your Feedback</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-md bg-[#0F3A4F] text-[#D4D4D4]" />
            <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-md bg-[#0F3A4F] text-[#D4D4D4]" />
            <textarea placeholder="Your Feedback" rows={5} className="w-full px-4 py-3 rounded-md bg-[#0F3A4F] text-[#D4D4D4]"></textarea>
            <button type="submit" className="w-full bg-[#3CC9F5] text-[#101B24] py-3 rounded-md font-medium hover:bg-[#FFA41F] transition-colors duration-300">
              Submit Feedback
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}
