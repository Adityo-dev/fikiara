 "use client";
import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function CheckoutPage() {
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [earnBalance, setEarnBalance] = useState(150); // উদাহরণস্বরূপ 150 টাকা earned আছে
  const [useEarn, setUseEarn] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-6">
          Checkout – Subscription Plan
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Complete your subscription to unlock all premium features of Fikiara.
        </p>

        {/* Selected Plan */}
        <div className="border rounded-xl p-5 mb-8">
          <h2 className="text-xl font-semibold mb-2">Selected Plan</h2>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-medium">Premium Plan</p>
              <p className="text-gray-500 text-sm">
                Full access to all courses, books, and tools
              </p>
            </div>
            <p className="text-xl font-bold text-green-600">$19.99 / month</p>
          </div>
        </div>

        {/* Billing Info */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Billing Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border rounded-lg px-4 py-2"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border rounded-lg px-4 py-2"
              required
            />
            <input
              type="text"
              placeholder="Address"
              className="w-full border rounded-lg px-4 py-2 md:col-span-2"
              required
            />
            <input
              type="text"
              placeholder="City"
              className="w-full border rounded-lg px-4 py-2"
              required
            />
            <input
              type="text"
              placeholder="Postal Code"
              className="w-full border rounded-lg px-4 py-2"
              required
            />
          </div>
        </div>

        {/* Payment Options */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Select Payment Method</h3>
          <div className="grid grid-cols-2 gap-4">
            {[
              { id: "card", label: "Debit / Credit Card" },
              { id: "bkash", label: "bKash" },
              { id: "nagad", label: "Nagad" },
              { id: "rocket", label: "Rocket" },
              { id: "earn", label: "Earn Balance" },
            ].map((method) => (
              <div
                key={method.id}
                onClick={() => setSelectedPayment(method.id)}
                className={`cursor-pointer border rounded-xl p-4 text-center font-medium transition ${
                  selectedPayment === method.id
                    ? "border-green-600 bg-green-50"
                    : "hover:border-gray-400"
                }`}
              >
                {method.label}
              </div>
            ))}
          </div>
        </div>

        {/* Payment Info Form (Conditional) */}
        {selectedPayment === "card" && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Card Details</h3>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Card Number"
                className="w-full border rounded-lg px-4 py-2"
                required
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full border rounded-lg px-4 py-2"
                  required
                />
                <input
                  type="text"
                  placeholder="CVC"
                  className="w-full border rounded-lg px-4 py-2"
                  required
                />
              </div>
            </div>
          </div>
        )}

        {selectedPayment === "bkash" && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Pay with bKash</h3>
            <input
              type="text"
              placeholder="bKash Number"
              className="w-full border rounded-lg px-4 py-2"
              required
            />
            <p className="text-sm text-gray-500 mt-2">
              You will receive a confirmation code to your bKash app.
            </p>
          </div>
        )}

        {selectedPayment === "nagad" && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Pay with Nagad</h3>
            <input
              type="text"
              placeholder="Nagad Number"
              className="w-full border rounded-lg px-4 py-2"
              required
            />
            <p className="text-sm text-gray-500 mt-2">
              A verification OTP will be sent to your phone.
            </p>
          </div>
        )}

        {selectedPayment === "rocket" && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Pay with Rocket</h3>
            <input
              type="text"
              placeholder="Rocket Number"
              className="w-full border rounded-lg px-4 py-2"
              required
            />
            <p className="text-sm text-gray-500 mt-2">
              Complete your payment using Rocket PIN.
            </p>
          </div>
        )}

        {selectedPayment === "earn" && (
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Use Earned Balance</h3>
            <p className="text-sm text-gray-600 mb-4">
              Available Balance:{" "}
              <span className="font-bold text-green-600">
                {earnBalance}৳
              </span>
            </p>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={useEarn}
                onChange={() => setUseEarn(!useEarn)}
              />
              <span>Apply Earn Balance to this payment</span>
            </label>
          </div>
        )}

        {/* Terms */}
        <div className="flex items-center gap-2 mb-6">
          <input type="checkbox" required />
          <p className="text-sm text-gray-600">
            I agree to the{" "}
            <Link href="/terms" className="text-blue-600 underline">
              Terms & Conditions
            </Link>
          </p>
        </div>

        {/* Pay Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Confirm & Pay
        </button>

        {/* Security Note */}
        <div className="flex items-center justify-center mt-6 text-gray-500 text-sm">
          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
          100% Secure Payment – Powered by SSL
        </div>
      </div>
    </div>
  );
}
