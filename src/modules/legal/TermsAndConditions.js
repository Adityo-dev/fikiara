import React from 'react'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] text-[#1A202C]">
      <div className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms & Conditions</h1>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">১. ভূমিকা / Introduction</h2>
          <p className="leading-relaxed">
            এখানে আপনি আপনার ব্র্যান্ডের Terms & Conditions বাংলা ও English ভাষায় পেশ করেন ...
          </p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">২. সংজ্ঞা / Definitions</h2>
          <p className="leading-relaxed">
            Definitions বাংলা ও English ভাষায় লিখুন; যেমন: Service, Content ইত্যাদি …
          </p>
        </section>
        {/* আরও পয়েন্টগুলো ব্লক হিসেবে এখানে যুক্ত করুন */}
        <div className="mt-12">
          <a
            href="/contact"
            className="inline-block bg-[#4F46E5] hover:bg-[#6366F1] text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            যোগাযোগ করুন / Contact Us
          </a>
        </div>
      </div>
      <footer className="mt-16 bg-[#E5E7EB] py-6 text-center text-sm">
        © {new Date().getFullYear()} Fikiara. All rights reserved.
      </footer>
    </div>
  )
}
