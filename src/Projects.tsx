import React from "react";
import Header from "./components/header";
import Projectpage from "./components/projectpage";

function Projects() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <Projectpage />
    </div>
  );
}

export default Projects;
