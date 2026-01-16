import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/header";
import Resume from "./components/resume";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div className="min-h-screen w-screen shadow-md bg-gray-400 dark:bg-gray-800 p-8">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-green-200 text-2xl">Welcome!</h1>
          <p className="dark:text-white text-black p-6">
            {" "}
            My name is Leonard Livshits, but I go by Len. Right now, I am a
            first year student studying Computer Science + Philosophy at the
            University of Illinois at Champaign Urbana, with an expected
            graduation date of May 2027.{" "}
          </p>
          <p className="dark:text-white text-black p-6">
            {" "}
            I have experience programming in many languages, such as Java, C#,
            Python, C++, Rust, JavaScript, and TypeScript. I also have
            experience with many different tools and technologies, namely
            Pandas, React, TailwindCSS, Scikit-Learn, Matplotlib, Maven, Tauri,
            and Vite. I have also used code editors such as VSCode, Visual
            Studio, and other tools like Unity, Blender, and Git. In addition to
            this, I am experienced in both the Microsoft Office and G-Suite sets
            of productivity tools.{" "}
          </p>
          <Resume />
        </div>
      </div>
    </>
  );
}

export default App;
