import React from "react";
import Button from "./button";

const Resume = () => {
  return (
    <div className="w-full flex flex-col gap-12 text-gray-900 dark:text-gray-50 animate-fadeIn">
      <h1 className="text-4xl font-bold text-emerald-600 dark:text-emerald-400">
        Resume
      </h1>

      <div className="flex justify-center">
        <Button
          text="Download PDF"
          onClick={() => {
            const a = document.createElement("a");
            a.href = "/Resume-Spring2026.pdf";
            a.download = "/Resume-Spring2026.pdf";
            a.click();
          }}
          className="px-6 py-3 bg-emerald-600 dark:bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-700 dark:hover:bg-emerald-600 transition-colors shadow-md"
        />
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/*Education*/}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-2 border-emerald-600 dark:border-emerald-400 pb-3">
            Education
          </h2>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="space-y-2">
              <p className="font-semibold text-gray-900 dark:text-white">
                Bachelor of Science in Computer Science + Philosophy
              </p>
              <p className="text-sm">
                University of Illinois at Urbana-Champaign
              </p>
              <p className="text-sm">
                Started Fall 2025, Expected Graduation May 2027
              </p>
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                GPA: 3.67/4.00
              </p>
              <p className="text-xs italic mt-2">
                Related Coursework: Data Structures, Computer Architecture,
                Statistics and Probability, Linear Algebra
              </p>
            </li>
            <li className="space-y-2 pt-2">
              <p className="font-semibold text-gray-900 dark:text-white">
                High School Diploma
              </p>
              <p className="text-sm">Glenbrook North High School</p>
              <p className="text-sm">Graduated May 2025</p>
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                GPA: 4.30/4.00
              </p>
            </li>
          </ul>
        </div>

        {/*Work Experience*/}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-2 border-emerald-600 dark:border-emerald-400 pb-3">
            Work Experience
          </h2>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="space-y-2">
              <p className="font-semibold text-gray-900 dark:text-white">
                Course Assistant - CS128H (Rust)
              </p>
              <p className="text-sm">
                University of Illinois, Champaign-Urbana
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                January 2026 - Present
              </p>
              <ul className="text-xs space-y-1 mt-2 ml-4 text-gray-600 dark:text-gray-400">
                <li>
                  • Held weekly office hours to assist 40+ students in learning
                  Rust, focusing on concepts such as borrowing, ownership, and
                  multithreading
                </li>
                <li>
                  • Maintained course website, featuring up to date information
                  on course policies and instructional videos
                </li>
                <li>
                  • Mentored students in developing a Rust-based final project
                </li>
              </ul>
            </li>
            <li className="space-y-2">
              <p className="font-semibold text-gray-900 dark:text-white">
                Certified Trainer
              </p>
              <p className="text-sm">Potbelly Sandwich Shop</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                February 2023 - Present
              </p>
              <ul className="text-xs space-y-1 mt-2 ml-4 text-gray-600 dark:text-gray-400">
                <li>
                  • Trained 15 new employees in front and back of house duties
                </li>
                <li>
                  • Handling transactions and customer service, maintaining high
                  satisfaction
                </li>
                <li>• Expediting and preparing orders during rush hours</li>
              </ul>
            </li>
            <li className="space-y-2 pt-2">
              <p className="font-semibold text-gray-900 dark:text-white">
                Team Member
              </p>
              <p className="text-sm">McDonald's</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                August 2021 - February 2023
              </p>
              <ul className="text-xs space-y-1 mt-2 ml-4 text-gray-600 dark:text-gray-400">
                <li>• Mentored 4 employees new to the service industry</li>
                <li>
                  • Processed transactions at 6 different Point of Sales during
                  peak hours
                </li>
                <li>• Maintained food safety standards</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8">
        {/*Skills*/}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-2 border-emerald-600 dark:border-emerald-400 pb-3">
            Skills
          </h2>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Java",
                  "C#",
                  "Python",
                  "C++",
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "TypeScript",
                  "Rust",
                ].map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full text-sm font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Git",
                  "Unity",
                  "Blender",
                  "Pandas",
                  "React",
                  "TailwindCSS",
                  "Scikit-Learn",
                  "Matplotlib",
                  "Maven",
                  "Tauri",
                  "Vite",
                  "Jupyter",
                  "SQL",
                ].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "English (Fluent)",
                  "Russian (Fluent)",
                  "Spanish (Proficient)",
                ].map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/*Leadership*/}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white border-b-2 border-emerald-600 dark:border-emerald-400 pb-3">
            Leadership
          </h2>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300 text-sm">
            <li className="space-y-2">
              <p className="font-semibold text-gray-900 dark:text-white">
                Member, UIUC SigAIDA
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                August 2025 - Present
              </p>
              <ul className="text-xs space-y-1 mt-2 ml-4 text-gray-600 dark:text-gray-400">
                <li>
                  • Participate in weekly Machine Learning and AI code puzzles
                  in Python
                </li>
                <li>
                  • Work on semester-long group projects implementing AI and ML
                </li>
              </ul>
            </li>
            <li className="space-y-2 pt-2">
              <p className="font-semibold text-gray-900 dark:text-white">
                Founder and President, GBN Slavic Cultures Club
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                August 2022 - May 2025
              </p>
              <ul className="text-xs space-y-1 mt-2 ml-4 text-gray-600 dark:text-gray-400">
                <li>• Grew club attendance from 0 to 50 members</li>
                <li>• Fundraised funds for humanitarian aid in Ukraine</li>
              </ul>
            </li>
            <li className="space-y-2 pt-2">
              <p className="font-semibold text-gray-900 dark:text-white">
                Vice President, GBN Coding Club
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                August 2024 - May 2025
              </p>
              <ul className="text-xs space-y-1 mt-2 ml-4 text-gray-600 dark:text-gray-400">
                <li>• Taught Python and HTML skills to 30 club members</li>
                <li>• Organized foundations for a multi-day hackathon</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
