"use client";
import React from "react";

export default function LegalLayout({ titleEn, titleBn, lastUpdated, sections }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6F2FF] via-[#F9FBFF] to-white text-gray-900 py-12 px-4 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-[#114C5F]">{titleEn}</h1>
          {titleBn && <p className="text-lg text-[#0F3A4F] mt-2">{titleBn}</p>}
          {lastUpdated && (
            <p className="text-sm text-gray-600 mt-3">Last updated: {lastUpdated}</p>
          )}
        </header>

        {/* Sections */}
        <main className="space-y-10">
          {sections.map((s, idx) => (
            <section key={idx} id={s.id || `sec-${idx}`} className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* English column */}
                <div>
                  <h2 className="text-2xl font-semibold text-[#114C5F] mb-3">{s.titleEn}</h2>
                  <div className="prose max-w-none text-gray-700">{s.bodyEn}</div>
                </div>

                {/* Bangla column */}
                <div>
                  <h2 className="text-2xl font-semibold text-[#114C5F] mb-3">{s.titleBn}</h2>
                  <div className="prose max-w-none text-gray-700">{s.bodyBn}</div>
                </div>
              </div>
            </section>
          ))}

          {/* Contact / Footer CTA */}
          <section className="text-center">
            <p className="text-gray-700">
              If you need help or want to exercise your rights, please contact us:
            </p>
            <p className="mt-3 font-medium text-[#114C5F]">
              Email: <a href="mailto:support@fikiara.com" className="underline">support@fikiara.com</a>
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
