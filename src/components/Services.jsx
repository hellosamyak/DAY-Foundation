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
    <div
      id="services"
      className="bg-gray-900 py-12 sm:py-16 lg:py-24 flex flex-col items-center"
    >
      <div className="w-full max-w-7xl px-2 sm:px-4 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          Our Services
        </h2>
        <p className="mt-2 sm:mt-4 text-base sm:text-lg lg:text-xl text-gray-400">
          We offer diverse programs focused on education, healthcare,
          employment, and community welfare to create a lasting impact.
        </p>

        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-4 sm:p-6 text-center flex flex-col items-center"
            >
              <service.icon className="h-10 w-10 sm:h-12 sm:w-12 text-rose-400" />
              <p className="mt-3 sm:mt-4 text-lg sm:text-xl font-semibold text-white">
                {service.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
