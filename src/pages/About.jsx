import React from "react";
import Goals from "../components/Goals";
import Vision from "../components/Vision";
import FounderMessage from "../components/FounderMessage";

const About = () => {
  return (
    <div>
      <div className="bg-gray-900 text-white">
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 py-16 sm:py-24">
          <h2 className="text-3xl md:text-4xl font-extrabold lg:text-5xl mb-6 sm:mb-8 text-rose-400 drop-shadow-lg">
            About The DAY Foundation
          </h2>
          <div className="max-w-5xl w-full">
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl p-6 sm:p-10 md:p-14 transition-transform transform hover:scale-105">
              <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                <span className="font-semibold text-white">
                  The DAY Foundation (BHTDAY Welfare Foundation)
                </span>
                , founded on{" "}
                <span className="font-bold text-rose-400">12th April 2022</span>
                , is a Section 8, NITI Aayog-registered NGO dedicated to
                empowering underprivileged communities across India through{" "}
                <span className="text-rose-400 font-medium">
                  education, aid, youth engagement,
                </span>{" "}
                and <span className="text-rose-400 font-medium">care</span>.
                Active in cities like Delhi, Indore, and Jabalpur, our mission
                is guided by the motto{" "}
                <span className="text-rose-400 font-medium">
                  "शिक्षा से सशक्तिकरण, युवा से समर्थन"
                </span>
                .
              </p>

              <p className="mt-4 sm:mt-6 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                We are more than just an NGO—we are a{" "}
                <span className="text-rose-400 font-semibold">
                  movement for change
                </span>
                . Our goal is to build a society where every individual,
                regardless of background, has equal access to education,
                healthcare, and employment opportunities.
              </p>

              <p className="mt-4 sm:mt-6 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                Through sustainable social impact initiatives, we uplift
                underserved sections of society by providing education to slum
                children, organizing healthcare and welfare drives, engaging
                youth through internships and volunteer programs, and creating
                employment opportunities via innovative projects like{" "}
                <span className="font-bold text-rose-400">"Rojgar."</span>
              </p>

              <p className="mt-4 sm:mt-6 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                With our unwavering commitment to{" "}
                <span className="text-rose-400 font-semibold">
                  sustainable social impact
                </span>
                , we aim to build a brighter and more inclusive future for all.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Goals />
      <Vision />
      <FounderMessage />
    </div>
  );
};

export default About;
