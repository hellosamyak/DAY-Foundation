import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donations from "./pages/Donations";
import GetInvolved from "./pages/GetInvolved";
import Work from "./pages/Work";
import Breaker from "./components/Breaker";
import Team from "./pages/Team";

export default function App() {
  return (
    <div className="bg-gray-900 flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/work" element={<Work />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donations" element={<Donations />} />
        </Routes>
      </main>
      <Breaker />
      <Footer />
    </div>
  );
}
