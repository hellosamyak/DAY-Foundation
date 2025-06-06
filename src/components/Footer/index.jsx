import React from "react";
import ContactInfo from "./ContactInfo";
import QuickLinks from "./QuickLinks";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          <div>
            <img
              src="/Logo.jpeg"
              alt="Logo"
              className="h-10 w-10 sm:h-12 sm:w-12 backdrop-blur-sm rounded-full mb-3 sm:mb-4 ml-5"
            />
            <p className="text-xs sm:text-sm leading-relaxed ml-4 mr-4">
              Empowering underprivileged communities through education, aid,
              youth, and care.
            </p>
          </div>

          <div className="ml-4 mr-4">
            <ContactInfo />
          </div>
          <div className="ml-4 mr-4">
            <QuickLinks />
          </div>
          <div className="ml-4 mr-4">
            <SocialLinks />
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} DAY Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
