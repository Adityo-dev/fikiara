export default function Error404Card() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm ring-1 ring-gray-100 w-full ">
      <div className="w-full flex flex-col items-center">
        {/* SVG Illustration */}
        <svg
          width="220"
          height="160"
          viewBox="0 0 220 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <defs>
            <linearGradient id="g1" x1="0" x2="1">
              <stop offset="0%" stopColor="#FFD9A8" />
              <stop offset="100%" stopColor="#FFA41F" />
            </linearGradient>
          </defs>
          <rect
            x="10"
            y="20"
            width="200"
            height="120"
            rx="12"
            fill="#F8FAFC"
            stroke="#E6E9EE"
          />
          <circle cx="70" cy="70" r="28" fill="url(#g1)" opacity="0.95" />
          <rect x="115" y="45" width="70" height="12" rx="6" fill="#E6EEF8" />
          <rect x="115" y="67" width="70" height="12" rx="6" fill="#E6EEF8" />
          <path
            d="M30 120 L50 95 L70 120"
            stroke="#A0AEC0"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <div className="mt-4 text-center">
          <p className="text-base font-medium text-gray-800">
            Lost in the docs?
          </p>
          <p className="text-sm text-gray-500">
            You found a blank — time to build something cool.
          </p>
        </div>
      </div>

      <p className="mt-4 text-sm text-[#000000] text-center">
        This is a friendly learning 404 — perfect for experimentation. Try
        customizing the illustration color to match your brand.
      </p>
    </div>
  );
}
