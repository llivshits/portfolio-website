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
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div
        id="header"
        className="flex-1 overflow-y-auto shadow-md bg-gray-400 dark:bg-gray-800 p-8"
      >
        <div className="max-w-4xl mx-auto space-y-8">
          <Aboutme />
          <div id="projects">
            <Projects />
          </div>{" "}
          <div id="resume">
            <Resume />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
