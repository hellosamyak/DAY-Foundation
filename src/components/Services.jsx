import React from "react";
import {
  Baby,
  Briefcase,
  Users,
  HeartPulse,
  Mic,
  Star,
  Activity,
  IndianRupee,
} from "lucide-react";

export default function Services() {
  const services = [
    { icon: Baby, title: "Child Development Programs" },
    { icon: Users, title: "Youth Development Programs" },
    { icon: Activity, title: "Community Engagement & Welfare" },
    { icon: HeartPulse, title: "Healthcare Initiatives" },
    { icon: IndianRupee, title: "Employment & Empowerment Initiatives" },
    { icon: Mic, title: "Online Webinars & Educational Sessions" },
    { icon: Star, title: "Cultural & Extracurricular Events" },
    { icon: Briefcase, title: "Internship Programs" },
  ];

  return (
    <div id="services" className="bg-gray-900 py-24 flex flex-col items-center">
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Our Services
        </h2>
        <p className="mt-4 text-xl text-gray-400">
          We offer diverse programs focused on education, healthcare,
          employment, and community welfare to create a lasting impact.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 text-center flex flex-col items-center"
            >
              <service.icon className="h-12 w-12 text-rose-400" />
              <p className="mt-4 text-xl font-semibold text-white">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
