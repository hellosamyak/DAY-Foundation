import React from "react";

const FounderMessage = () => {
  return (
    <section className="relative flex flex-col justify-center items-center text-center px-4 sm:px-6 py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rose-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full">
        <h2 className="text-3xl sm:text-4xl font-extrabold md:text-5xl mb-6 sm:mb-8 text-white drop-shadow-lg">
          Message from the Founder
        </h2>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 max-w-7xl w-full mx-auto">
          <div className="w-full lg:w-2/5 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative bg-gray-800 rounded-2xl p-2">
              <img
                src="/images/team/central/omsen.webp"
                alt="Founder Om Sen"
                className="rounded-xl shadow-2xl object-cover w-full h-auto transform group-hover:scale-[1.02] transition duration-500"
              />
            </div>
          </div>

          <div className="w-full lg:w-3/5 relative">
            {/* Decorative quote mark */}
            <div className="absolute -top-4 -left-2 text-6xl sm:text-7xl text-rose-400/20 font-serif">
              "
            </div>

            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl relative z-10 p-6 sm:p-8 lg:p-10 text-left shadow-2xl">
              <p className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                At the{" "}
                <span className="font-semibold text-white">DAY Foundation</span>
                , our mission is to build an inclusive society where every
                individual has access to{" "}
                <span className="text-rose-400 font-medium">
                  Education, Aid, Youth, and Care
                </span>
                . Since our inception, we have been dedicated to empowering
                youth, supporting underprivileged communities, and providing
                sustainable solutions through initiatives like{" "}
                <span className="font-bold text-rose-400">Rojgar</span> and
                child development programs.
              </p>

              <p className="mt-4 sm:mt-6 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                Our goal is to create a future where everyone has the
                opportunity to grow, lead a dignified life, and become
                self-reliant. I am immensely proud of our team's commitment and
                hard work, which makes this journey possible.
              </p>

              <p className="mt-4 sm:mt-6 text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed">
                Thank you for your continued support as we make a meaningful
                difference, together.
              </p>
              <div className="mt-8 pt-6 border-t border-gray-600/30">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                  <div>
                    <p className="text-base md:text-lg lg:text-xl font-bold text-white mb-1">
                      ~ Om Sen
                    </p>
                    <p className="text-base md:text-lg lg:text-xl text-rose-400 font-medium">
                      Founder & Executive Director
                    </p>
                    <p className="text-base md:text-lg lg:text-xl text-gray-400">
                      DAY Foundation
                    </p>
                  </div>

                  <div className="hidden sm:block">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-blue-400 rounded-full flex items-center justify-center">
                      <img
                        src="/Logo.png"
                        alt="DAY Foundation Logo"
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative closing quote mark */}
            <div className="absolute -bottom-4 -right-2 text-6xl sm:text-7xl text-rose-400/20 font-serif rotate-180">
              "
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderMessage;
