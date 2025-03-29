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
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="bg-gray-900 flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {" "}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/DAY-Foundation" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donations" element={<Donations />} />
          <Route path="/getinvolved" element={<GetInvolved />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </main>
      <Breaker />
      <Footer />
    </div>
  );
}
