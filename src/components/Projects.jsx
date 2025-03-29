import React from "react";
import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      image:
        "https://images.unsplash.com/photo-1610500796385-3ffc1ae2f046?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGRyZW4lMjBzdHVkeWluZ3xlbnwwfHwwfHx8MA%3D%3D",
      title: "Project Udaan",
      description: "A weekly educational drive. ",
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
    <div id="projects" className="bg-gray-900 py-24 h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Our Projects
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            We run multiple projects and initiatives to drive meaningful change
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-400">{project.description}</p>
                <Link to="/work#projects">
                  <button className="mt-4 text-rose-300 hover:text-rose-400">
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
