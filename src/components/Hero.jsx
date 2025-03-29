import React from "react";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Hero() {
  return (
    <div id="home" className="relative min-h-screen">
      <div className="absolute inset-0">
        <Link to="/">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
            alt="Children learning"
            className="w-full h-full object-cover"
          />
        </Link>
        <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
      </div>

      <div className="relative h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-center text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Development
          </h1>
          <h1 className="text-center text-4xl font-extrabold tracking-tight text-rose-500 sm:text-5xl lg:text-6xl">
            and Youth
          </h1>
          <p className="text-center mt-6 max-w-2xl text-2xl text-gray-300">
            "शिक्षा से सशक्तिकरण, युवा से समर्थन"
          </p>
          <p className="text-center mt-4 max-w-2xl text-xl text-gray-300">
            Empowerment through Education, Support through Youth.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link to="/donations">
              <button className="bg-rose-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-rose-600 flex items-center gap-2">
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
        </div>
      </div>
    </div>
  );
}

export default Hero;
