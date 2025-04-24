import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProjectDetails from "../components/ProjectDetails";
import Services from "../components/Services";

const Work = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 0);
    }
  }, [location]);

  return (
    <div className="bg-gray-900 text-white">
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 py-16 sm:py-24">
        <h2 className="text-3xl md:text-4xl font-extrabold lg:text-5xl mb-6 sm:mb-8 text-rose-400 drop-shadow-lg">
          Our Work
        </h2>
        <div className="max-w-5xl w-full px-2 sm:px-0">
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-6 sm:p-10 md:p-14 transition-transform transform hover:scale-105">
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              At the{" "}
              <span className="font-semibold text-white">DAY Foundation</span>,
              we believe in the power of community-driven initiatives to create
              lasting change. Our mission is to uplift marginalized sections of
              society through holistic development programs, ensuring access to
              essential services and opportunities for all.
            </p>
            <p className="mt-4 sm:mt-6 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
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
      <section className="bg-gray-800 min-h-[40vh] sm:min-h-[50vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-5xl w-full px-2 sm:px-0">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-6 sm:p-10 md:p-14 transition-transform transform hover:scale-105">
            <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
              Through grassroots engagement, skill development workshops, and
              sustainable livelihood programs, we are bridging the gap between
              ambition and opportunity. Our initiatives provide underprivileged
              children with quality education, facilitate healthcare services in
              remote areas, and create employment avenues through vocational
              training.
            </p>
            <p className="mt-4 sm:mt-6 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
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
