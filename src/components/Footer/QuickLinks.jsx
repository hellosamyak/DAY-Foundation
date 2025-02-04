import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function QuickLinks() {
  const links = [
    { to: "/", text: "Home", label: "Go to Home" },
    { to: "/about", text: "About", label: "About Us" },
    { to: "/work", text: "Work", label: "Our Work" },
    { to: "/getinvolved", text: "Get Involved", label: "Get involved" },
  ];

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav role="navigation" aria-label="Quick Links">
      <h3 className="text-white font-semibold mb-4">Quick Links</h3>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              aria-label={link.label}
              className="text-sm hover:text-rose-200 transition duration-200"
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
