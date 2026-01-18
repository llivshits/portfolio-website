import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import Resume from "../components/resume";
import Projects from "../components/projects";
import Header from "../components/header";
import Aboutme from "../components/aboutme";
import { useScroll } from "../hooks/scrollhook";

const Home: React.FC = () => {
  useScroll();
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-50 dark:bg-gray-950">
      <Header />
      <div
        id="header"
        className="flex-1 overflow-y-auto bg-linear-to-b from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-950"
      >
        <div className="max-w-4xl mx-auto px-8 py-12 space-y-16">
          <Aboutme />
          <div id="projects" className="pt-8">
            <Projects />
          </div>
          <div id="resume" className="pt-8 pb-12">
            <Resume />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
