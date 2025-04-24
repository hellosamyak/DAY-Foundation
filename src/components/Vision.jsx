import React from "react";
import { Users, GraduationCap, Briefcase, Heart } from "lucide-react";

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
      className="bg-gray-900 min-h-screen flex flex-col justify-center items-center py-12 sm:py-16 lg:py-24 px-2 sm:px-4 lg:px-6"
    >
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          Our Vision
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
          Building an inclusive and empowered society through education,
          employment, and community-driven impact.
        </p>

        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {visionPoints.map((vision, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 text-center transition-transform transform hover:scale-105"
            >
              <vision.icon className="mx-auto h-12 w-12 sm:h-14 sm:w-14 text-rose-400" />
              <p className="mt-4 sm:mt-6 text-xl sm:text-2xl font-bold text-white">
                {vision.title}
              </p>
              <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-400">
                {vision.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
