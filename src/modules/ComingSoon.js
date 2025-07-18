"use client";
import { useEffect, useState } from "react";

export default function ComingSoon() {
  const calculateTimeLeft = () => {
    const launchDate = new Date("2025-09-01T00:00:00").getTime();
    const now = new Date().getTime();
    const difference = launchDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-tr from-black via-gray-900 to-gray-800 text-white p-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4">🚧 Coming Soon</h1>
        <p className="mb-6 text-gray-300">
          Were working hard to bring something amazing!
        </p>

        <div className="flex justify-center space-x-4 text-xl font-mono">
          <div className="text-center">
            <p className="text-3xl font-bold">{timeLeft.days}</p>
            <span className="text-sm">Days</span>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">{timeLeft.hours}</p>
            <span className="text-sm">Hours</span>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">{timeLeft.minutes}</p>
            <span className="text-sm">Minutes</span>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">{timeLeft.seconds}</p>
            <span className="text-sm">Seconds</span>
          </div>
        </div>

        <form className="mt-8">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg bg-white text-black w-2/3 focus:outline-none"
          />
          <button className="px-4 py-2 bg-blue-600 rounded-r-lg hover:bg-blue-700 transition cursor-pointer">
            Notify Me
          </button>
        </form>

        <p className="mt-6 text-sm text-gray-400">
          Follow us on social media for updates.
        </p>
      </div>
    </main>
  );
}
