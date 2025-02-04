import React from "react";
import ProjectDetails from "../components/ProjectDetails";
import Services from "../components/Services";

const Work = () => {
  return (
    <div className="bg-gray-900 text-white">
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24">
        <h2 className="text-4xl font-extrabold sm:text-5xl mb-8 text-rose-400 drop-shadow-lg">
          Our Work
        </h2>
        <div className="max-w-5xl w-full">
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl shadow-2xl p-10 sm:p-14 transition-transform transform hover:scale-105">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              At the{" "}
              <span className="font-semibold text-white">DAY Foundation</span>,
              we believe in the power of community-driven initiatives to create
              lasting change. Our mission is to uplift marginalized sections of
              society through holistic development programs, ensuring access to
              essential services and opportunities for all.
            </p>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Our efforts span across multiple domains, including{" "}
              <span className="text-rose-400 font-medium">
                education, healthcare, women empowerment, and environmental
                sustainability
              </span>
              . By addressing critical social issues with innovative and
              sustainable solutions, we empower individuals to break the cycle
              of poverty and lead dignified lives.
            </p>
          </div>
        </div>
      </section>
      <ProjectDetails />
      <Services />
      <section className="bg-gray-800 min-h-[50vh] flex flex-col justify-center items-center text-center px-6 py-24">
        <div className="max-w-5xl w-full">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-10 sm:p-14 transition-transform transform hover:scale-105">
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Through grassroots engagement, skill development workshops, and
              sustainable livelihood programs, we are bridging the gap between
              ambition and opportunity. Our initiatives provide underprivileged
              children with quality education, facilitate healthcare services in
              remote areas, and create employment avenues through vocational
              training.
            </p>
            <p className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed">
              Together, we can{" "}
              <span className="text-rose-400 font-semibold">
                break barriers, foster inclusion, and build a future where
                opportunities are accessible to all
              </span>
              . Join us in making a tangible impact, one step at a time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
