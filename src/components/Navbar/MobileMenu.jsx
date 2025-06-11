import React from "react";
import { Link, NavLink } from "react-router-dom";
import { NavLinks } from "./NavLinks";

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="lg:hidden absolute top-20 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 w-full">
      <div className="px-4 sm:px-6 pt-4 pb-6 space-y-3">
        {NavLinks.map((link) => (
          <NavLink
            key={link.text}
            to={link.path}
            onClick={onClose}
            className={({ isActive }) =>
              `block px-3 py-2 text-base font-medium ${
                isActive ? "text-rose-400" : "text-white hover:text-rose-300"
              }`
            }
          >
            {link.text}
          </NavLink>
        ))}
        <Link to="/donations" onClick={onClose}>
          <button className="w-full bg-rose-500 text-white px-4 py-2 rounded text-base font-medium hover:bg-rose-600 transition duration-200">
            Donate
          </button>
        </Link>
      </div>
    </div>
  );
}
