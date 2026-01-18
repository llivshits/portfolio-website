import React from "react";
import Button from "./button";

function Projects() {
  return (
    <div className="w-full flex flex-col gap-12 text-gray-900 dark:text-gray-50 animate-fadeIn">
      <h1 className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">Projects</h1>
      
      {/* Projects Grid */}
      <div className="space-y-8">
        {/* Project 1 */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 hover:border-emerald-300 dark:hover:border-emerald-600 transition-colors">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Encrypted Chat App</h2>
            <Button
              text="View on Github"
              href="https://github.com/rzheng1232/CS199-128-Final-Project-FA25-"
              className="px-4 py-2 bg-emerald-600 dark:bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors"
            />
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                <span>Created a secure, end to end encrypted, server-based Chat App using Rust for backend message handling and server connection</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                <span>Used React, Typescript, HTML, CSS, and TailwindCSS for the frontend and connected frontend to backend using Tauri</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                <span>Used Git to manage contributions from a team of 3 people</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                <span>Implemented real-time communication, user authentication, and encrypted data storage with SQL</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 hover:border-emerald-300 dark:hover:border-emerald-600 transition-colors">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Dronetrix</h2>
            <Button
              text="Repository Private - Proprietary Code"
              className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-lg cursor-default"
            />
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                <span>Created a VR game using Unity, Github, Visual Studio, C#, and Blender in a team of 3</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                <span>Created game objects and environments, scripted their behaviors, modelled and textured them in Blender</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                <span>Assisted in creation of a neural network based movement algorithm for game objects</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Project 3 */}
        <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-8 border border-gray-200 dark:border-gray-800 hover:border-emerald-300 dark:hover:border-emerald-600 transition-colors">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Fantasy Premier League Assistant</h2>
            <Button
              text="View on Github"
              href="https://github.com/RohitDatta06/FPLpredict"
              className="px-4 py-2 bg-emerald-600 dark:bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors"
            />
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                <span>Created a website to assist Fantasy Premier League Players in choosing the optimal squad, using machine learning algorithms</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                <span>Used React, Typescript, HTML, CSS, and TailwindCSS for the frontend, FastAPI for the backend, and Python for the prediction and optimization algorithms</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                <span>Added LLM integration to explain choices the algorithm made</span>
              </li>
              <li className="flex gap-3">
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">•</span>
                <span>Used Pandas and Scikit-Learn to import past player data from a .csv file and predict future performance using various algorithms such as XGBoost, Random Forest, Linear Regression, and Lasso</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
