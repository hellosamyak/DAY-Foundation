import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { NavLinks } from "./NavLinks";

export default function Navigation() {
  const location = useLocation();

  return (
    <div className="flex items-center gap-x-5">
      {NavLinks.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <NavLink
            key={link.text}
            to={link.path}
            className={`relative group px-2 py-1 text-xl font-semibold ${
              isActive ? "text-rose-400" : "text-white"
            }`}
          >
            {link.text}
            <span
              className={`absolute bottom-0 left-0 w-full h-0.5 bg-rose-300 transform transition-transform duration-200 ${
                isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
              }`}
            />
          </NavLink>
        );
      })}
      <Link to="/donations">
        <button className="ml-2 px-4 py-2 text-base bg-rose-500 text-white font-medium rounded hover:bg-rose-600 transition duration-200">
          Donate
        </button>
      </Link>
    </div>
  );
}
