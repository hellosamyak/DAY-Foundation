import React from "react";

const projects = [
  {
    title: "Project Udaan – Bridging Educational Gaps",
    objective:
      "🎯 Objective: To improve access to education for slum children.",
    details: [
      "📌 Weekly educational drives encourage school attendance, prevent dropouts, and aid re-enrollment.",
      "📌 Learning materials, stationery, and mentorship are provided for holistic growth.",
      "📌 Focus on interactive and engaging sessions to enhance learning experiences.",
    ],
    image: "/images/projects/udaan.jpeg",
  },
  {
    title: "Project Chetna – Prioritizing Health & Well-being",
    objective:
      "🎯 Objective: To promote physical and mental health awareness in underserved communities.",
    details: [
      "📌 Medical health camps in slum areas, offering free check-ups and treatment.",
      "📌 Mental health awareness through workshops, counseling sessions, and WHO Day events.",
      "📌 Yoga and wellness programs to promote holistic well-being.",
    ],
    image: "/images/projects/chetna.jpeg",
  },
  {
    title: "Shakti Samvaad Campaign – Empowering Women",
    objective:
      "🎯 Objective: To promote gender equality and women’s empowerment.",
    details: [
      "📌 Menstrual health awareness campaigns, distribution of sanitary pads, and breaking societal taboos.",
      "📌 Workshops on self-defense, gender rights, and economic independence for women.",
      "📌 Community-led initiatives to engage men and women in discussions on equality.",
    ],
    image: "/images/projects/shakti.jpeg",
  },
  {
    title: "Prakriti Raksha Pahal – A Greener Tomorrow",
    objective:
      "🎯 Objective: To encourage environmental conservation and sustainability.",
    details: [
      "📌 Afforestation drives, planting trees to combat pollution.",
      "📌 Cleanliness campaigns to promote hygiene and waste management in slum areas.",
      "📌 Awareness programs for children to instill environmental responsibility at a young age.",
    ],
    image: "/images/projects/praksha.jpeg",
  },
];

const ProjectDetails = () => {
  return (
    <div
      id="projects"
      className="bg-gray-800 min-h-screen flex flex-col justify-center items-center py-12 sm:py-16 lg:py-24 px-2 sm:px-4 lg:px-6"
    >
      <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-12 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
          Our Projects
        </h2>
        <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed">
          Empowering communities through impactful initiatives that address
          education, health, gender equity, and sustainability.
        </p>

        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 transition-transform transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mx-auto h-32 sm:h-36 lg:h-40 w-full object-cover rounded-xl mb-4 sm:mb-6"
              />
              <p className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                {project.title}
              </p>
              <p className="text-base sm:text-lg font-semibold text-rose-400 mb-3 sm:mb-4">
                {project.objective}
              </p>
              <ul className="text-sm sm:text-base lg:text-lg text-gray-400 list-disc list-inside space-y-1 sm:space-y-2">
                {project.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
