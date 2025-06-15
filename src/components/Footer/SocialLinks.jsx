import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function SocialLinks() {
  const [email, setEmail] = useState("");

  const socials = [
    {
      icon: FacebookIcon,
      href: "https://www.facebook.com",
      label: "Visit our Facebook Page",
    },
    {
      icon: InstagramIcon,
      href: "https://www.instagram.com/dayfoundation_ngo/",
      label: "Visit our Instagram Profile",
    },
    {
      icon: XIcon,
      href: "https://x.com/DAYfoundat008",
      label: "Visit our Twitter Page",
    },
    {
      icon: LinkedInIcon,
      href: "https://www.linkedin.com/company/day-foundation/",
      label: "Visit our LinkedIn Page",
    },
    {
      icon: YouTubeIcon,
      href: "https://youtube.com/@dayfoundation_ngo?feature=shared",
      label: "Visit our YouTube Channel",
    },
  ];

  const handleSubscribe = () => {
    if (!email.trim()) {
      alert("Please enter a valid email address!");
      return;
    }

    alert(`Subscribed successfully with ${email}`);
  };

  return (
    <div>
      <h3 className="text-white font-semibold text-sm sm:text-base mb-3 sm:mb-4">
        Follow Us
      </h3>

      <div className="flex space-x-3 sm:space-x-4 mb-4 sm:mb-6">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
          >
            <social.icon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-400 hover:text-rose-200 transition-all duration-300 ease-in-out" />
          </a>
        ))}
      </div>

      <div>
        <p className="text-xs sm:text-sm font-semibold leading-relaxed text-gray-300 mb-3 sm:mb-4">
          Subscribe to our newsletter for updates.
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 min-w-0 px-3 py-2 text-xs sm:text-sm rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none"
            aria-label="Email address"
          />
          <button
            onClick={handleSubscribe}
            className="px-4 py-2 text-xs sm:text-sm bg-rose-500 border border-rose-500 text-white font-medium rounded-md hover:bg-rose-600 transition-all duration-300 ease-in-out w-full sm:w-auto"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
