import React from "react";

function Aboutme() {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
          Welcome!
        </h1>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          My name is Leonard Livshits, but I go by Len. Right now, I am a first
          year student studying Computer Science + Philosophy at the University
          of Illinois at Champaign Urbana, with an expected graduation date of
          May 2027.
        </p>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          I have experience programming in many languages, such as Java, C#,
          Python, C++, Rust, JavaScript, and TypeScript. I also have experience
          with many different tools and technologies, namely Pandas, React,
          TailwindCSS, Scikit-Learn, Matplotlib, Maven, Tauri, and Vite. I have
          also used code editors such as VSCode, Visual Studio, and other tools
          like Unity, Blender, and Git. In addition to this, I am experienced in
          both the Microsoft Office and G-Suite sets of productivity tools.
        </p>
      </div>
    </div>
  );
}

export default Aboutme;
