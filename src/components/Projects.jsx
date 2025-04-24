import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGRyZW4lMjBzdHVkeWluZ3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Project Udaan",
      description: "A weekly educational drive.",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661488569775-2f16dbefca71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBvb3IlMjB3b21lbnxlbnwwfHwwfHx8MA%3D%3D",
      title: "Shakti Samvaad Campaign",
      description: "Dedicated to women's rights.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhhcHB5JTIwY2hpbGRyZW58ZW58MHx8MHx8fDA%3D",
      title: "Project Chetna",
      description: "Focused on the mental and physical well-being.",
    },
  ];

  return (
    <div
      id="projects"
      className="bg-gray-900 py-12 sm:py-16 lg:py-24 min-h-screen"
    >
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Our Projects
          </h2>
          <p className="mt-2 sm:mt-4 text-base sm:text-lg lg:text-xl text-gray-400">
            We run multiple projects and initiatives to drive meaningful change
          </p>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover"
              />
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-400">
                  {project.description}
                </p>
                <Link to="/work#projects">
                  <button className="mt-3 sm:mt-4 text-rose-300 hover:text-rose-400 text-sm sm:text-base">
                    View all projects →
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
