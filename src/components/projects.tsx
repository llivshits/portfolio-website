import React from "react";
import Button from "./button";
import Section from "./section";

interface Project {
  title: string;
  href?: string;
  stack: string;
  dates: string;
  points: string[];
}

const projects: Project[] = [
  {
    title: "IlliniChat",
    href: "https://github.com/rzheng1232/CS199-128-Final-Project-FA25-",
    stack: "Rust, TypeScript, React, SQLite, Tauri",
    dates: "Oct. 2025 – Dec. 2025",
    points: [
      "Built a secure, RSA-encrypted, server-based chat app using Rust for backend message handling and server connection, with data storage in SQLite",
      "Bridged a React, TypeScript, HTML, CSS, and TailwindCSS frontend to the Rust core via Tauri; shipped macOS, Windows, and Linux builds",
      "Implemented real-time communication, user authentication, and encrypted data storage",
      "Co-led a 3-person team using Git feature branches and PR review",
    ],
  },
  {
    title: "Fantasy Premier League Assistant",
    href: "https://github.com/RohitDatta06/FPLpredict",
    stack: "Python, Jupyter Notebooks, Pandas, Scikit-Learn",
    dates: "Sep. 2025 – Dec. 2025",
    points: [
      "Built a squad optimizer selecting the highest-projected lineup under FPL's budget, position, and club constraints",
      "Served predictions through a FastAPI backend to a React, TypeScript, and TailwindCSS frontend",
      "Benchmarked XGBoost, Random Forest, Lasso, and linear regression on historical player data imported from .csv with Pandas and Scikit-Learn",
      "Added LLM integration to explain choices the algorithm made",
    ],
  },
  {
    title: "Dronetrix",
    stack: "C#, Unity, Blender, Git",
    dates: "Jan. 2025 – Sep. 2025",
    points: [
      "Created a VR game using Unity, GitHub, Visual Studio, C#, and Blender in a team of 3",
      "Created game objects and environments, scripted their behaviors, modeled and textured them in Blender",
      "Co-developed a neural-network-based movement algorithm for game objects",
    ],
  },
];

function Projects() {
  return (
    <Section
      id="projects"
      label="Projects"
      className="mt-20 border-t border-neutral-200 pt-10 lg:mt-24 lg:pt-12 dark:border-neutral-800"
    >
      <div className="max-w-[72ch] space-y-10">
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
            <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
              {project.stack}
              <span aria-hidden="true"> · </span>
              {project.dates}
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 marker:text-neutral-300 dark:marker:text-neutral-600">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Projects;
