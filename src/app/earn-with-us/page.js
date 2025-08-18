"use client";
import React from "react";
import { UserPlus, Gift, Award, Users, BarChart, Star } from "lucide-react";
import Link from "next/link";

export default function EarnWithUsPage() {
  // How It Works Steps
  const steps = [
    {
      title: "Join & Explore",
      description:
        "Sign up on Fikiara and explore learning resources, courses, and community activities. Unlock your first earning opportunities.",
      icon: <UserPlus className="h-6 w-6 text-[#FFA41F]" />,
    },
    {
      title: "Invite Friends & Grow Community",
      description:
        "Invite friends via referral links. Earn rewards when your friends subscribe. Track everything in your dashboard.",
      icon: <Users className="h-6 w-6 text-[#FFA41F]" />,
    },
    {
      title: "Contribute & Create",
      description:
        "Create notes, content summaries, or educational resources. Submit for review and earn points or recognition.",
      icon: <Gift className="h-6 w-6 text-[#FFA41F]" />,
    },
    {
      title: "Engage & Lead",
      description:
        "Participate in discussions, mentor juniors, or host webinars. Earn badges, certificates, and unlock premium access.",
      icon: <Star className="h-6 w-6 text-[#FFA41F]" />,
    },
    {
      title: "Redeem Rewards",
      description:
        "Convert earned points, badges, or credits into subscription discounts, gift cards, or exclusive content.",
      icon: <Award className="h-6 w-6 text-[#FFA41F]" />,
    },
  ];

  // Benefits
  const benefits = [
    {
      title: "Monetary & Non-monetary Rewards",
      description:
        "Convert your time, effort, and engagement into tangible rewards.",
      icon: <Gift className="h-6 w-6 text-[#FFA41F]" />,
    },
    {
      title: "Skill & Knowledge Growth",
      description:
        "Improve your knowledge, teaching, and leadership skills while earning.",
      icon: <BarChart className="h-6 w-6 text-[#FFA41F]" />,
    },
    {
      title: "Community Recognition",
      description:
        "Earn badges, leaderboards, and achievement certificates for your contributions.",
      icon: <Star className="h-6 w-6 text-[#FFA41F]" />,
    },
    {
      title: "Transparency & Control",
      description:
        "View all earnings, points, and referrals in your dashboard in real-time.",
      icon: <Users className="h-6 w-6 text-[#FFA41F]" />,
    },
  ];

  // FAQ
  const faqs = [
    {
      q: "How do I start earning?",
      a: "Sign up, complete your profile, and start inviting friends.",
    },
    {
      q: "What rewards can I get?",
      a: "Points, badges, subscription discounts, gift cards, exclusive content.",
    },
    {
      q: "Can I track my earnings?",
      a: "Yes, all earnings and activities are visible in your dashboard.",
    },
    {
      q: "Is there a limit to referrals?",
      a: "No, refer as many friends as you like. Each valid referral earns rewards.",
    },
    {
      q: "Do I need premium membership to earn?",
      a: "Some advanced activities may require courses, but basic referrals and engagement are free.",
    },
    {
      q: "How do I redeem my rewards?",
      a: "Go to the dashboard, select the reward, and follow the redemption instructions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E6F2FF] via-[#F9FBFF] to-white text-gray-900">
      {/* Hero Section */}
      <section className="bg-[#114C5F] py-20 text-center">
        <h1 className="text-[40px] font-semibold text-[#FFA41F] mb-4">
          Earn With Us
        </h1>
        <p className="text-[#D4D4D4] text-lg mb-8">
          Transform your learning and engagement into real rewards, recognition, and growth.
        </p>
        <Link
          href="#how-it-works"
          className="rounded-md bg-[#3CC9F5] text-[#101B24] text-lg font-medium px-8 py-4 inline-block"
        >
          Start Earning
        </Link>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 text-center">
        <h2 className="text-3xl font-semibold text-[#114C5F] mb-10">
          How It Works
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer text-left"
            >
              <div className="flex items-center gap-3 mb-3">{step.icon}<h3 className="text-xl font-semibold text-[#114C5F]">{step.title}</h3></div>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 text-center bg-[#0F3A4F]">
        <h2 className="text-3xl font-semibold text-[#FFA41F] mb-10">
          Benefits of Earning
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="bg-[#114C5F] p-6 rounded-xl shadow-md hover:shadow-xl transition flex items-start gap-3 text-left"
            >
              {b.icon}
              <div>
                <h3 className="text-xl font-semibold text-[#FFA41F]">{b.title}</h3>
                <p className="text-[#D4D4D4]">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold text-[#114C5F] mb-10">
          FAQ – Common Questions
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {faqs.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-left"
            >
              <h3 className="text-lg font-semibold text-[#114C5F] mb-2">{item.q}</h3>
              <p className="text-gray-700">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#114C5F] py-16 text-center">
        <h2 className="text-2xl font-semibold text-[#FFA41F] mb-4">
          Ready to Start Earning?
        </h2>
        <p className="text-[#D4D4D4] mb-6">
          Turn your learning, contributions, and community engagement into real rewards today.
        </p>
        <Link
          href="/auth/register"
          className="rounded-md bg-[#3CC9F5] text-[#101B24] px-8 py-4 inline-block font-medium"
        >
          Join & Start Earning
        </Link>
      </section>
    </div>
  );
}
