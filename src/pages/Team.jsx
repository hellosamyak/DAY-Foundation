import React from "react";
import MembersCarousel from "../components/MembersCarousel";
import { CentralMembers } from "../components/data/TeamMembers";

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-gray-800 min-h-screen flex items-center justify-center">
          <h1 className="text-white text-xl">
            Something went wrong with the carousel.
          </h1>
        </div>
      );
    }
    return this.props.children;
  }
}

function Team() {
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
              From field volunteers to regional coordinators and youth leaders
              to core team members, everyone plays a vital role in advancing our
              mission.
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

      <ErrorBoundary>
        <MembersCarousel
          slides={CentralMembers}
          autoSlide={true}
          autoSlideInterval={4000}
        />
      </ErrorBoundary>
    </div>
  );
}

export default Team;
