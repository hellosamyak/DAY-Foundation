import React from "react";
import { Award, Shield, CheckCircle, Medal } from "lucide-react";

export default function Accreditations() {
  const accreditations = [
    {
      icon: Award,
      title: "Under Companies Act 2013",
      description: "Established as a Section 8 Company for charitable purposes",
    },
    {
      icon: Medal,
      title: "Honored",
      description:
        "Recognized and honored for impactful contributions at multiple events",
    },
    {
      icon: Shield,
      title: "NGO Darpan Verified",
      description: "Registered with NITI Aayog, Government of India",
    },
  ];

  return (
    <div
      id="accreditations"
      className="bg-gray-800 min-h-screen flex items-center py-12 sm:py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white md:text-4xl">
            Empanelment & Accreditations
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-400">
            Recognized for our commitment to excellence and transparency
          </p>
        </div>

        <div className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 md:grid-cols-3">
          {accreditations.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 sm:p-8 text-center transition-transform hover:scale-105"
            >
              <item.icon className="mx-auto h-8 sm:h-10 md:h-12 w-auto text-rose-300" />
              <h3 className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-400">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
