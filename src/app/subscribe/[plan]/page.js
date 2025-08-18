"use client";
import { useParams } from "next/navigation";
import { CheckCircle } from "lucide-react";

const plans = {
  starter: {
    title: "Starter Plan",
    price: "$9/month",
    description:
      "Perfect for individuals just beginning their journey. Get access to essential tools and resources to start learning and growing.",
    features: [
      "Access to basic courses",
      "Community forum support",
      "Weekly learning tips",
    ],
  },
  standard: {
    title: "Standard Plan",
    price: "$29/month",
    description:
      "Ideal for active learners who want more depth, guidance, and tools to accelerate their transformation.",
    features: [
      "Everything in Starter",
      "Access to premium courses",
      "Monthly Q&A sessions",
      "Downloadable resources",
    ],
  },
  premium: {
    title: "Premium Plan",
    price: "$59/month",
    description:
      "For dedicated learners who want full access to everything. Get advanced tools, coaching, and exclusive experiences.",
    features: [
      "Everything in Standard",
      "1-on-1 coaching sessions",
      "Exclusive webinars",
      "Early access to new features",
    ],
  },
};

export default function SubscribePage() {
  const { plan } = useParams(); // dynamic route param
  const planData = plans[plan];

  if (!planData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-red-500">
          ❌ Invalid Plan Selected
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-gradient-to-br from-indigo-50 to-white">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        <h1 className="text-4xl font-bold text-indigo-600 mb-4">
          {planData.title}
        </h1>
        <p className="text-gray-600 mb-6">{planData.description}</p>
        <p className="text-3xl font-semibold text-indigo-700 mb-6">
          {planData.price}
        </p>

        <ul className="space-y-3 text-left mb-8">
          {planData.features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl shadow-md transition-all">
          Subscribe Now
        </button>
      </div>
    </div>
  );
}
