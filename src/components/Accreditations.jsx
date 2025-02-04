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
    <div id="accreditations" className="bg-gray-800 py-24 h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Empanelment & Accreditations
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Recognized for our commitment to excellence and transparency
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {accreditations.map((item, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-8 text-center">
              <item.icon className="mx-auto h-12 w-auto text-rose-300" />
              <h3 className="mt-4 text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-900 rounded-lg p-8">
          <h3 className="text-2xl font-semibold text-white text-center">
            Our Partnerships
          </h3>
          <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className="h-20 bg-gray-800/50 rounded-lg flex items-center justify-center"
              >
                <span className="text-gray-400">Partner Logo</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
