import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Projects,
  Coursework,
} from "./components/Screens";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Coursework" element={<Coursework />} />
      </Routes>
    </Router>
  );
}

export default App;
