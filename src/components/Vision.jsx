import React from "react";
import {
  Users,
  GraduationCap,
  Briefcase,
  Heart,
  HandHelping,
} from "lucide-react";

export default function Vision() {
  const visionPoints = [
    {
      icon: Users,
      title: "Inclusive Society",
      description:
        "Ensuring equal access to education, healthcare, and opportunities for all, empowering individuals to thrive.",
    },
    {
      icon: Heart,
      title: "Empowerment & Self-Sufficiency",
      description:
        "Supporting individuals to lead dignified lives through sustainable initiatives and community-driven efforts.",
    },
    {
      icon: GraduationCap,
      title: "Holistic Child Development",
      description:
        "Providing the best opportunities for children’s growth in all aspects of life, ensuring a bright future.",
    },
    {
      icon: Briefcase,
      title: "Employment & Self-Reliance",
      description:
        "Through the Rojgar initiative, we empower underprivileged youth with job opportunities and skill-building resources.",
    },
  ];

  return (
    <div
      id="vision"
      className="bg-gray-900 min-h-screen flex flex-col justify-center items-center py-24 px-6"
    >
      <div className="max-w-6xl px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Our Vision
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
          Building an inclusive and empowered society through education,
          employment, and community-driven impact.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {visionPoints.map((vision, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg p-10 text-center transition-transform transform hover:scale-105"
            >
              <vision.icon className="mx-auto h-14 w-14 text-rose-400" />
              <p className="mt-6 text-2xl font-bold text-white">
                {vision.title}
              </p>
              <p className="mt-4 text-lg text-gray-400">{vision.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
