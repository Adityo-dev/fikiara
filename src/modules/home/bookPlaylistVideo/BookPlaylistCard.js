import Image from "next/image";

export default function BookPlaylistCard({ image, title, buttons, social }) {
  return (
    <div className="relative bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
      <div className="relative">
        <Image
          src={image}
          width={400}
          height={400}
          alt="Card Image"
          className="rounded-t-lg w-full h-60 object-cover"
        />

        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t hover:from-black to-transparent hover:opacity-100 cursor-pointer transform">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 100 100"
            fill="none"
          >
            <g clip-path="url(#clip0_29685_1163)">
              <path
                d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z"
                fill="white"
                fill-opacity="0.5"
              />
              <path
                d="M49.9986 81.611C67.4559 81.611 81.6078 67.4591 81.6078 50.0018C81.6078 32.5445 67.4559 18.3926 49.9986 18.3926C32.5413 18.3926 18.3894 32.5445 18.3894 50.0018C18.3894 67.4591 32.5413 81.611 49.9986 81.611Z"
                fill="white"
              />
              <path
                d="M63.0823 49.4279C63.5232 49.6825 63.5232 50.319 63.0823 50.5736L43.9497 61.6198C43.5088 61.8744 42.9574 61.5562 42.9574 61.0468V38.9545C42.9574 38.4453 43.5088 38.127 43.9497 38.3816L63.0823 49.4279Z"
                fill="#EC1F27"
              />
            </g>
            <defs>
              <clipPath id="clip0_29685_1163">
                <rect width="100" height="100" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div className="p-4">
        <div className="flex justify-between gap-4 mb-8">
          <p className="text-[#101B24] text-lg leading-7">{title}</p>
          {/* Social Icon AND link */}
          <div className="flex gap-2 text-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 28 29"
              fill="none"
            >
              <path
                d="M5.03769 8.2208C2.98744 10.271 2.98744 13.5952 5.03769 15.6454L14.0001 24.6078L22.9623 15.6454C25.0126 13.5952 25.0126 10.271 22.9623 8.22079C20.9121 6.17054 17.5879 6.17054 15.5377 8.2208L14.0001 9.75855L12.4623 8.2208C10.4121 6.17054 7.08794 6.17054 5.03769 8.2208Z"
                stroke="#7D7D7D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 27 24"
              fill="none"
            >
              <path
                d="M7.80078 1.14453H19.2852C22.7973 1.14453 25.7764 4.47792 25.7764 8.73047V11.2168C25.7761 15.4692 22.7982 18.8018 19.2871 18.8018H7.83691L7.72559 18.8613L1.31152 22.3076V8.73047C1.31152 4.61075 4.10584 1.35388 7.47266 1.1543L7.80078 1.14453ZM7.30078 1.97266C4.20849 2.26512 1.86914 5.24624 1.86914 8.73047V21.1562L2.60645 20.7598L7.74512 17.998H19.2871C22.6235 17.998 25.2176 14.8852 25.2178 11.2158V8.72949C25.2178 5.05972 22.6224 1.94629 19.2852 1.94629H7.30078V1.97266ZM8.31445 9.09277C8.79079 9.09301 9.2959 9.5661 9.2959 10.3076C9.29573 11.0489 8.79071 11.5213 8.31445 11.5215C7.83809 11.5215 7.3322 11.0491 7.33203 10.3076C7.33203 9.56592 7.83801 9.09277 8.31445 9.09277ZM13.543 9.09277C14.0193 9.09309 14.5244 9.56617 14.5244 10.3076C14.5242 11.0488 14.0192 11.5212 13.543 11.5215C13.0666 11.5215 12.5607 11.0491 12.5605 10.3076C12.5605 9.56592 13.0665 9.09277 13.543 9.09277ZM18.7725 9.09277C19.2489 9.09277 19.7539 9.56592 19.7539 10.3076C19.7537 11.0491 19.2488 11.5215 18.7725 11.5215C18.2961 11.5214 17.7912 11.0491 17.791 10.3076C17.791 9.56596 18.296 9.09283 18.7725 9.09277Z"
                fill="#7D7D7D"
                stroke="#7D7D7D"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 25 25"
              fill="none"
            >
              <path
                d="M9.04698 14.1915C9.25685 13.7878 9.37496 13.332 9.37496 12.8496C9.37496 12.3672 9.25685 11.9115 9.04698 11.5077M9.04698 14.1915C8.53597 15.1747 7.48099 15.8496 6.26246 15.8496C4.54348 15.8496 3.14996 14.5065 3.14996 12.8496C3.14996 11.1928 4.54348 9.84961 6.26246 9.84961C7.48099 9.84961 8.53597 10.5245 9.04698 11.5077M9.04698 14.1915L15.928 17.5077M9.04698 11.5077L15.928 8.19154M15.928 8.19154C16.439 9.17469 17.4939 9.84961 18.7125 9.84961C20.4315 9.84961 21.825 8.50646 21.825 6.84961C21.825 5.19276 20.4315 3.84961 18.7125 3.84961C16.9935 3.84961 15.6 5.19276 15.6 6.84961C15.6 7.33198 15.7181 7.78776 15.928 8.19154ZM15.928 17.5077C15.7181 17.9115 15.6 18.3672 15.6 18.8496C15.6 20.5065 16.9935 21.8496 18.7125 21.8496C20.4315 21.8496 21.825 20.5065 21.825 18.8496C21.825 17.1928 20.4315 15.8496 18.7125 15.8496C17.4939 15.8496 16.439 16.5245 15.928 17.5077Z"
                stroke="#7D7D7D"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className={`text-[#101B24] text-base font-medium px-6 py-2 cursor-pointer border border-[#FFA41F] rounded-md ${
                btn?.variant === "primary"
                  ? "bg-[#FFA41F] text-white"
                  : "border border-gray-300 text-[#7D7D7D]"
              }`}
            >
              {btn?.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
