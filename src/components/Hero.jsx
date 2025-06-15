import React from "react";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Hero() {
  return (
    <div id="home" className="relative min-h-screen">
      <div className="absolute inset-0">
        <Link to="/">
          <img
            src="/Hero.jpeg"
            alt="Hero image"
            className="w-full h-full object-cover max-w-full"
          />
        </Link>
        <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
      </div>
      <div className="relative flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white">
            Development
          </h1>
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-rose-500">
            and Youth
          </h1>
          <div className="mt-4 sm:mt-6">
            <p className="text-lg sm:text-2xl text-gray-300">
              "शिक्षा से सशक्तिकरण, युवा से समर्थन"
            </p>
            <p className="text-base sm:text-xl text-gray-300">
              Empowerment through Education, Support through Youth.
            </p>
          </div>
          <div className="mt-6 flex justify-center">
            {/* Desktop buttons */}
            <div className="hidden sm:flex flex-row gap-4">
              <Link to="/donations">
                <button className="bg-rose-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-rose-600 flex items-center justify-center gap-2">
                  Support a cause
                  <ArrowRightAltIcon className="h-5 w-5" />
                </button>
              </Link>
              <Link to="/about">
                <button className="border-2 border-white text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-white/10">
                  Learn More
                </button>
              </Link>
            </div>

            {/* Mobile buttons */}
            <div className="flex sm:hidden flex-col gap-2 w-full max-w-xs">
              <Link to="/donations">
                <button className="w-full bg-rose-500 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-rose-600 flex items-center justify-center gap-1">
                  Support a cause
                  <ArrowRightAltIcon className="h-3 w-3" />
                </button>
              </Link>
              <Link to="/get-involved">
                <button className="w-full bg-rose-500 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-rose-600 flex items-center justify-center gap-1">
                  Get Involved
                  <ArrowRightAltIcon className="h-3 w-3" />
                </button>
              </Link>
              <Link to="/about">
                <button className="w-full border-2 border-white text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-white/10">
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
