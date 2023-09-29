import React from "react";

export default function Sosmed() {
  return (
    <div className="bg-[#252534]">
      <div className="py-5 max-w-7xl px-4 pb-10 sm:px-6 lg:px-2 lg :pb-14 mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
          <div>
            <div>
              <svg
                className="h-16 w-16 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="text-2xl font-semibold text-white">Instagram</h3>
              <p className="mt-1 text-white text-1xl">
                Instagram, as the main business promotion medium for your
                platform
              </p>
            </div>
          </div>
          <div>
            <div>
              <svg
                className="h-16 w-16 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{" "}
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="text-2xl font-semibold text-white">YouTube</h3>
              <p className="mt-1 text-white text-1xl">
                YouTube, as the main business promotion medium for your platform
              </p>
            </div>
          </div>
          <div>
            <div>
              <svg
                className="h-16 w-16 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="text-2xl font-semibold text-white">Facebook</h3>
              <p className="mt-1 text-white text-1xl">
                Facebook, as the main business promotion medium for your
                platform
              </p>
            </div>
          </div>
          <div>
            <div>
              <svg
                className="h-16 w-16 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </div>
            <div className="mt-5">
              <h3 className="text-2xl font-semibold text-white">Twitter</h3>
              <p className="mt-1 text-white text-1xl">
                Twitter, as the main business promotion medium for your
                platform
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
