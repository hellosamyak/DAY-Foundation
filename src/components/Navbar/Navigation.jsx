import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navigation() {
  const links = [
    { text: "Home", path: "/" },
    { text: "About Us", path: "/about" },
    { text: "Our team", path: "/team" },
    { text: "Our Work", path: "/work" },
    { text: "Get Involved", path: "/getinvolved" },
    { text: "Contact Us", path: "/contact" },
  ];

  return (
    <div className="ml-10 flex items-baseline space-x-6">
      {links.map((link) => (
        <NavLink
          key={link.text}
          to={link.path}
          className={({ isActive }) =>
            `relative group px-3 py-2 text-xl font-medium ${
              isActive ? "text-rose-400" : "text-white"
            }`
          }
        >
          {link.text}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-300 transform scale-x-0 transition-transform duration-200 group-hover:scale-x-100" />
        </NavLink>
      ))}
      <Link to="/donations">
        <button className="px-4 py-2 text-lg bg-rose-500 border border-rose-500 text-white font-medium rounded hover:bg-rose-600 transition-all duration-300 ease-in-out">
          Donate
        </button>
      </Link>
    </div>
  );
}
