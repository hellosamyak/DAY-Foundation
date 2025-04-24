import React from "react";
import { Users, Heart, IndianRupee, Handshake } from "lucide-react";

export default function Impact() {
  const stats = [
    { icon: Handshake, number: "500+", label: "Engagements" },
    { icon: IndianRupee, number: "50+", label: "Donors" },
    { icon: Users, number: "320+", label: "Members" },
    { icon: Heart, number: "2+", label: "Years of Service" },
  ];

  return (
    <div
      id="impact"
      className="bg-gray-900 min-h-screen flex flex-col justify-center items-center py-12 sm:py-16 lg:py-24"
    >
      <div className="w-full max-w-7xl px-2 sm:px-4 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          Our Impact
        </h2>
        <p className="mt-2 sm:mt-4 text-base sm:text-lg lg:text-xl text-gray-400">
          Our initiatives include educational drives, healthcare surveys for
          children, and transformative events for youth, making a tangible
          difference in countless lives
        </p>

        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 sm:p-8 text-center"
            >
              <stat.icon className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-rose-400" />
              <p className="mt-3 sm:mt-4 text-2xl sm:text-4xl font-bold text-white">
                {stat.number}
              </p>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
