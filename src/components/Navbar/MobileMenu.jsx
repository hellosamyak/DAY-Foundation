import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function MobileMenu({ isOpen, onClose }) {
  if (!isOpen) return null;

  const links = [
    { text: "Home", path: "/" },
    { text: "About Us", path: "/about" },
    { text: "Our Team", path: "/team" },
    { text: "Our Work", path: "/work" },
    { text: "Get Involved", path: "/getinvolved" },
    { text: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="md:hidden absolute top-20 left-0 right-0 bg-gray-900/95 backdrop-blur-sm z-50 w-full">
      <div className="px-4 pt-4 pb-6 space-y-2">
        {links.map((link) => (
          <NavLink
            key={link.text}
            to={link.path}
            onClick={onClose}
            className={({ isActive }) =>
              `block px-3 py-3 text-lg font-medium ${
                isActive ? "text-rose-400" : "text-white hover:text-rose-200"
              }`
            }
          >
            {link.text}
          </NavLink>
        ))}
        <div className="pt-2">
          <Link to="/donations" onClick={onClose}>
            <button className="w-full bg-rose-500 text-white px-4 py-3 rounded text-lg font-medium hover:bg-rose-600 transition-all duration-300 ease-in-out">
              Donate
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
