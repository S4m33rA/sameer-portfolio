import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import AssessmentHome from "./components/Assessment/AssessmentHome";
import CoverLetterPage from "./components/Assessment/CoverLetterPage";
import LinkedInPage from "./components/Assessment/LinkedInPage";
import CVPage from "./components/Assessment/CVPage";
import VideoResponsePage from "./components/Assessment/VideoResponsePage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "./components/Assessment/assessment.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/assessment" element={<AssessmentHome />} />
          <Route path="/cover-letter" element={<CoverLetterPage />} />
          <Route path="/linkedin-brand" element={<LinkedInPage />} />
          <Route path="/cv" element={<CVPage />} />
          <Route path="/video-response" element={<VideoResponsePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/resume" element={<Navigate to="/cv" />} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
