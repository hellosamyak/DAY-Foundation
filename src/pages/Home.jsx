import React from "react";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import Goals from "../components/Goals";
import Projects from "../components/Projects";
import Accreditations from "../components/Accreditations";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <Hero />
      <Impact />
      <Goals />
      <Projects />
      <Accreditations />
    </div>
  );
}
