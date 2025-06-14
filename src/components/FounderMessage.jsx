import React from "react";

const FounderMessage = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center px-4 sm:px-6 py-16 sm:py-20 md:py-24 bg-gray-800 text-white">
      <h2 className="text-3xl sm:text-4xl font-extrabold md:text-5xl mb-6 sm:mb-8 text-white drop-shadow-lg">
        Message from the Founder
      </h2>

      {/* Updated div with overlay background */}
      <div className="relative max-w-4xl w-full rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden transition-transform transform hover:scale-105">
        {/* Background image and overlay */}
        <div className="absolute inset-0 bg-[url('/images/team/central/omsen.png')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/60" />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 p-6 sm:p-10 md:p-14">
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
            At the{" "}
            <span className="font-semibold text-white">DAY Foundation</span>,
            our mission is to build an inclusive society where every individual
            has access to{" "}
            <span className="text-rose-400 font-medium">
              Education, Aid, Youth, and Care
            </span>
            . Since our inception, we have been dedicated to empowering youth,
            supporting underprivileged communities, and providing sustainable
            solutions through initiatives like{" "}
            <span className="font-bold text-rose-400">Rojgar</span> and child
            development programs.
          </p>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
            Our goal is to create a future where everyone has the opportunity to
            grow, lead a dignified life, and become self-reliant. I am immensely
            proud of our team's commitment and hard work, which makes this
            journey possible.
          </p>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
            Thank you for your continued support as we make a meaningful
            difference, together.
          </p>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-bold text-white">
            ~ Om Sen
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-400">
            Founder & Executive Director, DAY Foundation
          </p>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
