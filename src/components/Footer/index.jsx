import React from "react";
import ContactInfo from "./ContactInfo";
import QuickLinks from "./QuickLinks";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <img
              src="/Logo.png"
              alt="Logo"
              className="h-12 w-12 rounded-full mb-4"
            />
            <p className="text-sm leading-relaxed">
              Empowering underprivileged communities through education, aid,
              youth, and care.
            </p>
          </div>
          <div>
            <ContactInfo />
          </div>
          <div>
            <QuickLinks />
          </div>
          <div>
            <SocialLinks />
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-400 sm:text-sm">
          <p className="text-sm text-gray-400 text-center">
            Designed & Developed by{" "}
            <a
              href="https://www.linkedin.com/in/aman-raj-tiwari-231a30253/"
              className="text-gray-300 hover:text-rose-400"
            >
              Aman
            </a>
            ,{" "}
            <a
              href="https://www.linkedin.com/in/priyanshi-kapse-2b4011326/"
              className="text-gray-300 hover:text-rose-400"
            >
              Priyanshi
            </a>{" "}
            &{" "}
            <a
              href="https://www.linkedin.com/in/samyak-jain-sj1208/"
              className="text-gray-300 hover:text-rose-400"
            >
              Samyak
            </a>
            .
          </p>
        </div>
        <div className="border-t border-gray-800 pt-6 text-center text-xs sm:text-sm">
          © {new Date().getFullYear()} DAY Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
