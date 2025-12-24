"use client";

import React, { useState, useEffect } from "react";

/**
 * CookieConsent Component
 * 
 * A pixel-perfect clone of the floating cookie consent bar.
 * Features:
 * - Positioned at the bottom right.
 * - Green background (#1db14b / brand-green).
 * - White text for explanation.
 * - "Okay" pill-shaped button.
 * - Persists dismissal via local storage.
 */
const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted
    const hasAccepted = localStorage.getItem("cookie-consent-accepted");
    if (!hasAccepted) {
      // Small delay for entrance animation logic or just showing it
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent-accepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-10 right-10 z-[100] max-w-[400px] w-full animate-in fade-in slide-in-from-bottom-5 duration-500"
      style={{
        backgroundColor: "#1db14b", // Brand Accent Green / Primary Gradient Start
        borderRadius: "15px",
        padding: "30px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
      }}
    >
      <div className="flex flex-col gap-4">
        <div className="text-white">
          <h4 
            className="font-sans font-semibold text-lg mb-2"
            style={{ fontSize: "18px", lineHeight: "1.2" }}
          >
            This website uses cookies.
          </h4>
          <p 
            className="font-sans text-sm opacity-95 leading-relaxed"
            style={{ fontSize: "14px", fontWeight: "400" }}
          >
            By using this website, you agree to our privacy policy and understand our terms of use. You can change your preferences through a link in the footer.
          </p>
        </div>
        
        <div className="flex justify-end mt-2">
          <button
            onClick={handleAccept}
            className="pill-button bg-white text-brand-green hover:bg-white/90 transition-colors"
            style={{
              color: "#1db14b",
              backgroundColor: "#ffffff",
              padding: "8px 32px",
              borderRadius: "30px",
              fontSize: "14px",
              fontWeight: "600",
              border: "none",
              cursor: "pointer",
            }}
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;