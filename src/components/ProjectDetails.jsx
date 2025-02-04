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
    image:
      "https://images.unsplash.com/photo-1522661067900-ab829854a57f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9vciUyMGNoaWxkcmVuJTIwbGVhcm5pbmd8ZW58MHx8MHx8fDA%3D",
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
    image:
      "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhlYWx0aCUyMGF3YXJlbmVzcyUyMHJ1cmFsfGVufDB8fDB8fHww",
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
    image:
      "https://images.unsplash.com/photo-1531301434368-e6cf6a04b3af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHdvbWVuJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8fDA%3D",
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
    image:
      "https://images.unsplash.com/photo-1622254936966-4a3c4def576f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2F2ZSUyMGVudmlyb25tZW50fGVufDB8fDB8fHww",
  },
];

const ProjectDetails = () => {
  return (
    <div
      id="projects"
      className="bg-gray-800 min-h-screen flex flex-col justify-center items-center py-24 px-6"
    >
      <div className="max-w-6xl px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Our Projects
        </h2>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
          Empowering communities through impactful initiatives that address
          education, health, gender equity, and sustainability.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl shadow-lg p-10 transition-transform transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="mx-auto h-40 w-full object-cover rounded-xl mb-6"
              />
              <p className="text-2xl font-bold text-white mb-4">
                {project.title}
              </p>
              <p className="text-lg font-semibold text-rose-400 mb-4">
                {project.objective}
              </p>
              <ul className="text-lg text-gray-400 list-disc list-inside space-y-2">
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
