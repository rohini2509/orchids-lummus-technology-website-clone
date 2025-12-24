import React from 'react';
import Image from 'next/image';

/**
 * Footer component for Lummus Technology.
 * Includes a decorative colorful transition bar and a charcoal-colored footer
 * containing the company logo, social links, legal links, and a copyright notice.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col w-full">
      {/* Decorative Transition Bar */}
      <div className="w-full h-[60px] relative overflow-hidden">
        <img
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/2f707325-df69-455e-b6ec-0657fd619104-lummustechnology-com/assets/images/footer-bar-3456-10.png"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
      </div>

      {/* Main Footer Section */}
      <footer className="bg-[#002228] text-white py-[60px] md:py-[80px]">
        <div className="max-w-[1200px] mx-auto px-8 w-full">
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-8">
            
            {/* Logo Section */}
            <div className="flex-shrink-0">
              <a href="/" className="block" aria-label="Lummus Technology Home">
                <svg
                  width="180"
                  height="45"
                  viewBox="0 0 180 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-auto w-[150px] md:w-[180px]"
                >
                  <path
                    d="M17.8 8.2C14.1 4.5 9.1 2.5 4 2.5V8.5C7.5 8.5 10.9 9.8 13.5 12.4C16.1 15 17.5 18.5 17.5 22.1C17.5 25.7 16.1 29.2 13.5 31.8C10.9 34.4 7.5 35.7 4 35.7V41.7C9.1 41.7 14.1 39.7 17.8 35.9C21.5 32.2 23.5 27.2 23.5 22.1C23.5 16.9 21.5 11.9 17.8 8.2Z"
                    fill="white"
                  />
                  <path
                    d="M26.2 35.9C29.9 39.6 34.9 41.6 40 41.6V35.6C36.5 35.6 33.1 34.2 30.5 31.6C27.9 29 26.5 25.5 26.5 21.9C26.5 18.3 27.9 14.8 30.5 12.2C33.1 9.6 36.5 8.3 40 8.3V2.3C34.9 2.3 29.9 4.3 26.2 8.1C22.5 11.8 20.5 16.8 20.5 21.9C20.5 27.1 22.5 32.1 26.2 35.9Z"
                    fill="white"
                  />
                  <text
                    x="50"
                    y="25"
                    fill="white"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '22px',
                      fontWeight: '700',
                      letterSpacing: '0.05em',
                    }}
                  >
                    LUMMUS
                  </text>
                  <text
                    x="50"
                    y="40"
                    fill="white"
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '11px',
                      fontWeight: '400',
                      letterSpacing: '0.25em',
                      textTransform: 'uppercase',
                    }}
                  >
                    TECHNOLOGY
                  </text>
                </svg>
              </a>
            </div>

            {/* Navigation and Legal Links */}
            <div className="flex flex-col items-center md:items-end gap-4">
              <nav aria-label="Footer Navigation">
                <ul className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-2">
                  <li>
                    <a
                      href="https://www.linkedin.com/company/lummustechnology/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[14px] font-medium hover:text-[#1db14b] transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy-policy"
                      className="text-[14px] font-medium hover:text-[#1db14b] transition-colors"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#cookie-config"
                      className="text-[14px] font-medium hover:text-[#1db14b] transition-colors"
                    >
                      Cookies
                    </a>
                  </li>
                </ul>
              </nav>

              {/* Copyright */}
              <div className="text-[14px] text-white/60 font-normal">
                © {currentYear} Lummus Technology
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}