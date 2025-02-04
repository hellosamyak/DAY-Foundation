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
      className="bg-gray-900 h-screen flex flex-col justify-center items-center py-24"
    >
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Our Impact
        </h2>
        <p className="mt-4 text-xl text-gray-400">
          Our initiatives include educational drives, healthcare surveys for
          children, and transformative events for youth, making a tangible
          difference in countless lives
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-8 text-center">
              <stat.icon className="mx-auto h-12 w-12 text-rose-400" />
              <p className="mt-4 text-4xl font-bold text-white">
                {stat.number}
              </p>
              <p className="mt-2 text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
