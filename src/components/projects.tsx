import React from "react";
import Button from "./button";

interface Project {
  title: string;
  href?: string;
  points: string[];
}

const projects: Project[] = [
  {
    title: "Encrypted Chat App",
    href: "https://github.com/rzheng1232/CS199-128-Final-Project-FA25-",
    points: [
      "Created a secure, end to end encrypted, server-based Chat App using Rust for backend message handling and server connection",
      "Used React, Typescript, HTML, CSS, and TailwindCSS for the frontend and connected frontend to backend using Tauri",
      "Used Git to manage contributions from a team of 3 people",
      "Implemented real-time communication, user authentication, and encrypted data storage with SQL",
    ],
  },
  {
    title: "Dronetrix",
    points: [
      "Created a VR game using Unity, Github, Visual Studio, C#, and Blender in a team of 3",
      "Created game objects and environments, scripted their behaviors, modelled and textured them in Blender",
      "Assisted in creation of a neural network based movement algorithm for game objects",
    ],
  },
  {
    title: "Fantasy Premier League Assistant",
    href: "https://github.com/RohitDatta06/FPLpredict",
    points: [
      "Created a website to assist Fantasy Premier League Players in choosing the optimal squad, using machine learning algorithms",
      "Used React, Typescript, HTML, CSS, and TailwindCSS for the frontend, FastAPI for the backend, and Python for the prediction and optimization algorithms",
      "Added LLM integration to explain choices the algorithm made",
      "Used Pandas and Scikit-Learn to import past player data from a .csv file and predict future performance using various algorithms such as XGBoost, Random Forest, Linear Regression, and Lasso",
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="mt-20 border-t border-neutral-200 pt-10 dark:border-neutral-800">
      <h2 className="text-xs font-medium tracking-[0.14em] text-neutral-500 uppercase dark:text-neutral-400">
        Projects
      </h2>

      <div className="mt-8 space-y-10">
        {projects.map((project) => (
          <article key={project.title}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-lg">{project.title}</h3>
              {project.href && (
                <Button
                  text="View on GitHub"
                  href={project.href}
                  className="text-sm text-neutral-500 underline decoration-neutral-300 underline-offset-4 hover:text-neutral-900 dark:text-neutral-400 dark:decoration-neutral-600 dark:hover:text-neutral-100"
                />
              )}
            </div>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 marker:text-neutral-300 dark:marker:text-neutral-600">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projects;
