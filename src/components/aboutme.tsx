import React from "react";
import Section from "./section";

function Aboutme() {
  return (
    <Section>
      <h1 className="text-3xl lg:text-4xl">Welcome!</h1>
      <div className="mt-6 max-w-[68ch] space-y-5 leading-7 lg:leading-8">
        <p>
          My name is Leonard Livshits, but I go by Len. Right now, I am a second
          year student studying Statistics and Computer Science at the
          University of Illinois at Champaign Urbana, with an expected
          graduation date of May 2028.
        </p>
        <p>
          I have experience programming in many languages, such as Java, C#, C,
          Python, C++, Rust, JavaScript, and TypeScript. I also have experience
          with many different tools and technologies, namely Pandas, Numpy,
          PyTorch, React, TailwindCSS, Scikit-Learn, Matplotlib, FastAPI, Tauri,
          Docker, and Vite. I have also used code editors such as VSCode, Visual
          Studio, and other tools like Unity, Blender, and Git. In addition to
          this, I am experienced in both the Microsoft Office and G-Suite sets
          of productivity tools.
        </p>
        <p>
          I have a strong interest in machine learning and software development,
          and I am looking to pursue an internship or co-op in the field of
          machine learning engineering, data science, or software development.
        </p>
      </div>
    </Section>
  );
}

export default Aboutme;
