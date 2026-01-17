import React from "react";
import Button from "./button";

function Projects() {
  return (
    <div className="w-full flex flex-col gap-8 text-black dark:text-white">
      <h1 className="text-green-200 text-2xl">Projects</h1>
      <div className="flex gap-8">
        <div className="w-1/2">
          <div className="flex flex-col justify-center items-center">
            <div>
              <h1>Encrypted Chat App</h1>
            </div>
            <div>
              <Button
                text="Github Link"
                href="https://github.com/rzheng1232/CS199-128-Final-Project-FA25-"
                className="outline-green-500 outline-solid text-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
              />
            </div>
          </div>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              Created a secure, end to end encrypted, server-based Chat App
              using Rust for backend message handling and server connection
            </li>
            <li>
              Used React, Typescript, HTML, CSS, and TailwindCSS for the
              frontend and connected frontend to backend using Tauri
            </li>
            <li>Used Git to manage contributions from a team of 3 people</li>
            <li>
              Implemented real-time communication, user authentication, and
              encrypted data storage with SQL
            </li>
          </ul>
        </div>
        <div className="w-1/2">
          <div className="flex flex-col justify-center items-center">
            <div>
              <h1>Dronetrix</h1>
            </div>
            <div>
              <Button
                text="This Github is private to protect proprietary code"
                className="text-center outline-green-500 outline-solid text-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
              />
            </div>
          </div>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              Created a VR game using Unity, Github, Visual Studio, C#, and
              Blender in a tea of 3
            </li>
            <li>
              Created game objects and environments, scripted their behaviors,
              modelled and textured them in Blender
            </li>
            <li>
              Assisted in creation of a neural network based movement algorithm
              for game objects
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="w-1/2">
          <div className="flex flex-col justify-center items-center">
            <div>
              <h1>Fantasy Premier League Assistant</h1>
            </div>
            <div>
              <Button
                text="Github Link"
                href="https://github.com/RohitDatta06/FPLpredict"
                className="outline-green-500 outline-solid text-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
              />
            </div>
          </div>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              Created a website to assist Fantasy Premier League Players in
              choosing the optimal squad, using machine learning algorithms
            </li>
            <li>
              Used React, Typescript, HTML, CSS, and TailwindCSS for the
              frontend, FastAPI for the backend, and Python for the prediction
              and optimization algorithms
            </li>
            <li>Added LLM integration to explain choices the algorithm made</li>
            <li>
              Used Pandas and Scikit-Learn to import data from a csv file and
              predict it using various algorithms such as XGBoost, Random
              Forest, Linear Regression, and Lasso.
            </li>
          </ul>
        </div>
        <div className="w-1/2">
          <div className="flex flex-col justify-center items-center">
            <div>
              <h1>Coming Soon</h1>
            </div>
            <div>
              <Button
                text="Coming Soon"
                className="text-center outline-green-500 outline-solid text-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
              />
            </div>
          </div>
          <ul className="space-y-2 list-disc list-inside"></ul>
        </div>
      </div>
    </div>
  );
}

export default Projects;
