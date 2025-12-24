"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Who We Are", href: "/about" },
    { name: "What We Do", href: "/services" },
    { name: "Driving Change", href: "/driving-change" },
    { name: "News", href: "/news" },
    { name: "Careers", href: "/careers" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      {/* Brand Line - Fixed on the far left according to high level design */}
      <div className="brand-line">
        <div className="brand-line-segment-top"></div>
        <div className="brand-line-segment-middle"></div>
        <div className="brand-line-segment-bottom"></div>
      </div>

      <div className="container px-8 ml-[40px] max-w-[calc(100%-40px)]">
        <nav
          className="flex items-center justify-between"
          aria-label="Primary Navigation"
        >
          {/* Logo Section */}
          <a href="/" className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <svg
                width="170"
                height="40"
                viewBox="0 0 170 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={isScrolled ? "text-brand-navy" : "text-white"}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.5 5C7.91015 5 5 7.91015 5 11.5V13.5C5 17.0899 7.91015 20 11.5 20H13.5C17.0899 20 20 17.0899 20 13.5V11.5C20 7.91015 17.0899 5 13.5 5H11.5ZM3.5 11.5C3.5 7.08172 7.08172 3.5 11.5 3.5H13.5C17.9183 3.5 21.5 7.08172 21.5 11.5V13.5C21.5 17.9183 17.9183 21.5 13.5 21.5H11.5C7.08172 21.5 3.5 17.9183 3.5 13.5V11.5Z"
                  fill="currentColor"
                />
                <path
                  d="M26.5 5C22.9101 5 20 7.91015 20 11.5V13.5C20 17.0899 22.9101 20 26.5 20H28.5C32.0899 20 35 17.0899 35 13.5V11.5C35 7.91015 32.0899 5 28.5 5H26.5Z"
                  fill="#E2E82E"
                />
                <path
                  d="M11.5 20C7.91015 20 5 22.9101 5 26.5V28.5C5 32.0899 7.91015 35 11.5 35H13.5C17.0899 35 20 32.0899 20 28.5V26.5C20 22.9101 17.0899 20 13.5 20H11.5Z"
                  fill="#1DB14B"
                />
                <text
                  x="42"
                  y="20"
                  fontFamily="Inter, sans-serif"
                  fontWeight="700"
                  fontSize="16"
                  fill={isScrolled ? "#003057" : "#FFFFFF"}
                >
                  LUMMUS
                </text>
                <text
                  x="42"
                  y="34"
                  fontFamily="Inter, sans-serif"
                  fontWeight="400"
                  fontSize="12"
                  letterSpacing="0.1em"
                  fill={isScrolled ? "#003057" : "#FFFFFF"}
                >
                  TECHNOLOGY
                </text>
              </svg>
            </div>
          </a>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-8 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`text-[15px] font-medium tracking-wide transition-colors duration-200 ${
                      isScrolled
                        ? "text-brand-navy hover:text-brand-green"
                        : "text-white hover:text-white/80"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Button */}
            <a
              href="/contact"
              className={`pill-button inline-flex items-center justify-center text-[16px] leading-none h-[44px] transition-all duration-300 ${
                isScrolled
                  ? "bg-brand-navy text-white hover:bg-brand-teal"
                  : "bg-white text-brand-navy hover:bg-white/90"
              }`}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle (Visual Placeholder) */}
          <button className="lg:hidden p-2">
            <div
              className={`w-8 h-[2px] mb-1.5 ${
                isScrolled ? "bg-brand-navy" : "bg-white"
              }`}
            ></div>
            <div
              className={`w-8 h-[2px] mb-1.5 ${
                isScrolled ? "bg-brand-navy" : "bg-white"
              }`}
            ></div>
            <div
              className={`w-8 h-[2px] ${
                isScrolled ? "bg-brand-navy" : "bg-white"
              }`}
            ></div>
          </button>
        </nav>
      </div>

      <style jsx global>{`
        .brand-line {
          position: fixed;
          left: 0;
          top: 0;
          bottom: 0;
          width: 10px;
          z-index: 110;
          display: flex;
          flex-direction: column;
        }
        .brand-line-segment-top {
          height: 33.33%;
          background-color: #003057;
        }
        .brand-line-segment-middle {
          height: 33.33%;
          background-color: #e2e82e;
        }
        .brand-line-segment-bottom {
          height: 33.33%;
          background-color: #1db14b;
        }
        .pill-button {
          border-radius: 30px;
          padding: 0 2rem;
          font-weight: 600;
        }
      `}</style>
    </header>
  );
};

export default Header;