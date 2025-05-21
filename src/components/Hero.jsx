import React from "react";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Hero() {
  return (
    <div id="home" className="relative min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Link to="/">
          <img
            src="/Hero.jpeg"
            alt="Hero image"
            className="w-full h-full object-cover"
          />
        </Link>
        <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
      </div>

      {/* Hero Content */}
      <div className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white">
            Development
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-rose-500">
            and Youth
          </h1>

          {/* Taglines */}
          <div className="mt-4 sm:mt-6">
            <p className="text-lg sm:text-2xl text-gray-300">
              "शिक्षा से सशक्तिकरण, युवा से समर्थन"
            </p>
            <p className="text-base sm:text-xl text-gray-300">
              Empowerment through Education, Support through Youth.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex justify-center">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link to="/donations">
                <button className="bg-rose-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-base sm:text-lg font-medium hover:bg-rose-600 flex items-center justify-center gap-2">
                  Support a cause
                  <ArrowRightAltIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                </button>
              </Link>
              <Link to="/about">
                <button className="border-2 border-white text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md text-base sm:text-lg font-medium hover:bg-white/10">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
