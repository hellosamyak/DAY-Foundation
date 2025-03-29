import React from "react";
import ContactInfo from "./ContactInfo";
import QuickLinks from "./QuickLinks";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img
              src="/Logo.jpeg"
              alt="Logo"
              className="h-12 w-12 backdrop-blur-sm rounded-full mb-4"
            />
            <p className="text-sm leading-relaxed">
              Empowering underprivileged communities through education, aid,
              youth, and care.
            </p>
          </div>

          <ContactInfo />
          <QuickLinks />
          <SocialLinks />
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} DAY Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
