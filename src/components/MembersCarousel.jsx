import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  CentralMembers,
  JabalpurMembers,
  IndoreMembers,
} from "../components/data/TeamMembers";

export default function MembersCarousel({
  autoSlide = false,
  autoSlideInterval = 3000,
}) {
  const [curr, setCurr] = useState(0);
  const [selectedCity, setSelectedCity] = useState("Central");

  const getMembers = () => {
    switch (selectedCity) {
      case "Jabalpur":
        return JabalpurMembers;
      case "Indore":
        return IndoreMembers;
      case "Central":
      default:
        return CentralMembers;
    }
  };

  const slides = getMembers();

  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 768 ? 1 : 3; // 1 card on mobile, 3 on larger screens
    }
    return 3; // Default to 3 for SSR
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView);

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const prev = () =>
    setCurr((curr) =>
      curr === 0
        ? Math.max(0, slides.length - cardsPerView)
        : Math.max(0, curr - cardsPerView)
    );
  const next = () =>
    setCurr((curr) =>
      curr >= slides.length - cardsPerView ? 0 : curr + cardsPerView
    );

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, slides, cardsPerView]);

  useEffect(() => {
    // Reset the carousel position when the city changes
    setCurr(0);
  }, [selectedCity]);

  if (!slides || slides.length === 0) {
    return (
      <div className="bg-gray-800 min-h-screen flex flex-col justify-center items-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-white text-center text-lg sm:text-xl">
          No team members to display
        </div>
      </div>
    );
  }

  return (
    <div
      id="members"
      className="bg-gray-800 min-h-screen flex flex-col justify-center items-center py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full max-w-7xl mx-auto text-center">
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">
            Team Members
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
            Meet the dedicated individuals driving positive change in our
            communities.
          </p>
        </div>

        <div className="flex justify-center flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12 px-4">
          <button
            onClick={() => setSelectedCity("Central")}
            className={`px-8 py-3 rounded-full text-base font-medium transition-all duration-300 ${
              selectedCity === "Central"
                ? "bg-rose-500 text-white shadow-lg transform scale-105"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105"
            }`}
          >
            Central
          </button>
          <button
            onClick={() => setSelectedCity("Jabalpur")}
            className={`px-8 py-3 rounded-full text-base font-medium transition-all duration-300 ${
              selectedCity === "Jabalpur"
                ? "bg-rose-500 text-white shadow-lg transform scale-105"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105"
            }`}
          >
            Jabalpur
          </button>
          <button
            onClick={() => setSelectedCity("Indore")}
            className={`px-8 py-3 rounded-full text-base font-medium transition-all duration-300 ${
              selectedCity === "Indore"
                ? "bg-rose-500 text-white shadow-lg transform scale-105"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-105"
            }`}
          >
            Indore
          </button>
        </div>

        <div className="relative px-4 sm:px-8 lg:px-12">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform ease-out duration-500"
              style={{
                transform: `translateX(-${curr * (100 / cardsPerView)}%)`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 ${
                    cardsPerView === 1
                      ? "w-full px-4"
                      : "w-1/3 px-3 sm:px-4 lg:px-6"
                  }`}
                >
                  <div className="bg-gray-900 rounded-2xl shadow-xl p-6 sm:p-8 lg:p-10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl h-full border border-gray-700">
                    <div className="mb-6 sm:mb-8">
                      <img
                        src={slide.image}
                        alt={slide.name}
                        onError={(e) => {
                          e.target.src = slide.fallbackImage;
                          e.target.onerror = null;
                        }}
                        className="mx-auto h-48 sm:h-64 lg:h-72 w-full object-cover rounded-xl shadow-lg"
                      />
                    </div>
                    <div className="space-y-3 sm:space-y-4">
                      <div className="text-lg sm:text-xl font-bold text-white">
                        {slide.name}
                      </div>
                      <div className="text-sm sm:text-base text-rose-400 font-semibold">
                        {slide.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute top-1/2 left-0 right-0 flex items-center justify-between px-2 sm:px-4 lg:px-6 -translate-y-1/2 pointer-events-none">
            <button
              onClick={prev}
              className="p-4 sm:p-5 rounded-full bg-gray-900/90 backdrop-blur-sm text-rose-400 hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-xl border border-gray-600 hover:border-rose-400 transform hover:scale-110 pointer-events-auto"
            >
              <ChevronLeft className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>
            <button
              onClick={next}
              className="p-4 sm:p-5 rounded-full bg-gray-900/90 backdrop-blur-sm text-rose-400 hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-xl border border-gray-600 hover:border-rose-400 transform hover:scale-110 pointer-events-auto"
            >
              <ChevronRight className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>
          </div>

          <div className="flex items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10 lg:mt-12">
            {Array.from({
              length: Math.ceil(slides.length / cardsPerView),
            }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurr(i * cardsPerView)}
                className={`
                    transition-all duration-300 rounded-full border-2 transform hover:scale-125
                    ${
                      Math.floor(curr / cardsPerView) === i
                        ? "w-4 h-4 sm:w-5 sm:h-5 bg-rose-400 border-rose-400 shadow-lg"
                        : "w-3 h-3 sm:w-4 sm:h-4 bg-gray-600 border-gray-600 hover:bg-rose-400 hover:border-rose-400"
                    }
                  `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
