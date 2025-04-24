import React from "react";
import { BookOpen, HeartHandshake, Users, HelpingHand } from "lucide-react";

export default function Goal() {
  const goals = [
    {
      icon: BookOpen,
      title: "Education",
      description:
        "Providing quality education and learning resources to underprivileged children.",
    },
    {
      icon: HeartHandshake,
      title: "Aid",
      description:
        "Supporting marginalized communities with healthcare, welfare programs, and basic necessities.",
    },
    {
      icon: Users,
      title: "Youth",
      description:
        "Creating job opportunities, internships, and leadership development programs.",
    },
    {
      icon: HelpingHand,
      title: "Care",
      description:
        "Promoting social equality and fostering a culture of empathy and inclusivity.",
    },
  ];

  return (
    <div
      id="goal"
      className="bg-gray-800 min-h-screen flex flex-col justify-center items-center py-12 sm:py-16 lg:py-24"
    >
      <div className="w-full max-w-7xl px-2 sm:px-4 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          Our Goals
        </h2>
        <p className="mt-2 sm:mt-4 text-lg sm:text-xl text-gray-400">
          We strive to make a lasting impact through education, aid, youth
          empowerment, and care, ensuring a better future for all.
        </p>

        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 sm:p-8 text-center"
            >
              <goal.icon className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-rose-400" />
              <p className="mt-3 sm:mt-4 text-xl sm:text-2xl font-bold text-white">
                {goal.title}
              </p>
              <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-400">
                {goal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
