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
      className="bg-gray-800 h-screen flex flex-col justify-center items-center py-24"
    >
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Our Goals</h2>
        <p className="mt-4 text-xl text-gray-400">
          We strive to make a lasting impact through education, aid, youth
          empowerment, and care, ensuring a better future for all.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {goals.map((goal, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-8 text-center">
              <goal.icon className="mx-auto h-12 w-12 text-rose-400" />
              <p className="mt-4 text-2xl font-bold text-white">{goal.title}</p>
              <p className="mt-2 text-gray-400">{goal.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
