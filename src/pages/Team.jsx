import { React, useState } from "react";
import TeamMemberCard from "../components/TeamMemberCard";

const indoreMembers = [
  {
    id: 1,
    name: "Priyanshi Dubey",
    role: "HR Head",
    city: "Indore Management",
    image: "/images/team/priyanshi.jpeg",
  },
  {
    id: 2,
    name: "Edwin Kujur",
    role: "Asst. HR",
    city: "Indore Management",
    image: "/images/team/edwin.jpeg",
  },
  {
    id: 3,
    name: "Khushi Kapoor",
    role: "Healthcare Manager",
    city: "Indore Management",
    image: "/images/team/khushi.jpeg",
  },
  {
    id: 4,
    name: "Dhruv Mukati",
    role: "Logistics Head",
    city: "Indore Management",
    image: "/images/team/dhruv.jpeg",
  },
  {
    id: 5,
    name: "Abhijeet Singh Sengar",
    role: "Asst. Logistics Head",
    city: "Indore Management",
    image: "/images/team/abhijeet.jpeg",
  },
  {
    id: 6,
    name: "Khushi Chanodiya",
    role: "Management Coordinator",
    city: "Indore Management",
    image: "/images/team/khushic.jpeg",
  },
  {
    id: 7,
    name: "Zainab Sheikh",
    role: "Creative Head",
    city: "Indore Management",
    image: "/images/team/zainab.jpeg",
  },
  {
    id: 8,
    name: "Meenakshi Kumari Mishra",
    role: "Education & Curriculum Manager",
    city: "Indore Management",
    image: "/images/team/meenakshi.jpeg",
  },
  {
    id: 9,
    name: "Saurabh Pandey",
    role: "Education & Curriculum Manager",
    city: "Indore Management",
    image: "/images/team/saurabh.jpeg",
  },
  {
    id: 10,
    name: "Neha Singh",
    role: "Legal Manager",
    city: "Indore Management",
    image: "/images/team/neha.jpeg",
  },
];
const jabalpurMembers = [];
const centralMembers = [
  {
    id: 1,
    name: "Khushali Tak",
    role: "Hiring Executive",
    city: "Central Management",
    image: "/images/team/khushali.jpeg",
  },
];

function Team() {
  const [selectedCity, setSelectedCity] = useState("Central Management");
  let displayedMembers = [];
  if (selectedCity === "Indore Management") displayedMembers = indoreMembers;
  else if (selectedCity === "Jabalpur Management")
    displayedMembers = jabalpurMembers;
  else if (selectedCity === "Central Management")
    displayedMembers = centralMembers;
  return (
    <div className="bg-gray-900 text-white">
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold lg:text-5xl mb-6 sm:mb-8 text-rose-400 drop-shadow-lg">
          🫂Our Team
        </h2>
        <div className="max-w-5xl w-full">
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-6 sm:p-10 md:p-14 transition-transform transform hover:scale-105">
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              At{" "}
              <span className="font-semibold text-white">DAY Foundation</span>,
              we believe that{" "}
              <span className="text-rose-400 font-semibold">
                lasting change begins with people
              </span>
              —individuals who are driven by purpose, compassion, and the
              courage to act. Our team is the heart of everything we do. Spread
              across cities like{" "}
              <span className="text-white font-medium">Jabalpur</span>,{" "}
              <span className="text-white font-medium">Indore</span>, and
              beyond, they are the ones who turn vision into reality.
            </p>

            <p className="mt-4 sm:mt-6 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              From field volunteers working on the ground to regional
              coordinators managing programs, and from youth leaders organizing
              awareness drives to core team members designing impactful
              strategies—each person plays a crucial role in moving our mission
              forward.
            </p>

            <p className="mt-4 sm:mt-6 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              What makes our team truly special is their{" "}
              <span className="text-rose-400 font-medium">
                deep connection with local communities
              </span>
              . They understand the challenges, speak the languages, and respond
              with culturally rooted solutions. This{" "}
              <span className="text-rose-400 font-medium">
                hyperlocal presence
              </span>{" "}
              allows us to remain responsive, empathetic, and effective across
              all the areas we serve.
            </p>

            <p className="mt-4 sm:mt-6 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Whether it's organizing health camps, leading educational
              workshops, distributing resources, or mentoring youth, our team
              members go the extra mile—
              <span className="text-rose-400 font-medium">
                not because they have to, but because they care
              </span>
              .
            </p>

            <p className="mt-4 sm:mt-6 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Together, we are building bridges of hope, resilience, and
              opportunity. Below, meet the passionate individuals who are
              shaping a brighter future—
              <span className="text-rose-400 font-semibold">
                one community at a time
              </span>
              .
            </p>
          </div>
        </div>
      </section>
      <section className="bg-gray-800 min-h-[40vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 py-16 sm:py-24">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
          Team Members
        </h3>

        <div className="flex gap-4 justify-center mb-10">
          {[
            "Central Management",
            "Jabalpur Management",
            "Indore Management",
          ].map((city) => (
            <button
              key={city}
              onClick={() => setSelectedCity(city)}
              className={`px-5 text-lg py-2 rounded font-semibold border-2 ${
                selectedCity === city
                  ? "bg-rose-500 border-rose-500 text-white"
                  : "border-gray-500 text-gray-300 hover:border-rose-400 hover:text-white"
              } transition-colors duration-200`}
            >
              {city}
            </button>
          ))}
        </div>

        <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {displayedMembers.map((member) => (
              <TeamMemberCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
