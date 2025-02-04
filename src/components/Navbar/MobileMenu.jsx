import React from "react";

export default function MobileMenu({ isOpen }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a
          href="#home"
          className="text-white hover:text-rose-200 block px-3 py-2 text-base font-medium"
        >
          Home
        </a>
        <a
          href="#mission"
          className="text-white hover:text-rose-200 block px-3 py-2 text-base font-medium"
        >
          Mission
        </a>
        <a
          href="#stories"
          className="text-white hover:text-rose-200 block px-3 py-2 text-base font-medium"
        >
          Stories
        </a>
        <a
          href="#campaigns"
          className="text-white hover:text-rose-200 block px-3 py-2 text-base font-medium"
        >
          Campaigns
        </a>
        <a
          href="#about"
          className="text-white hover:text-rose-200 block px-3 py-2 text-base font-medium"
        >
          About
        </a>
        <button className="w-full bg-rose-100 text-gray-900 px-4 py-2 rounded-md text-sm font-medium hover:bg-rose-200 mt-4">
          Donate
        </button>
      </div>
    </div>
  );
}
