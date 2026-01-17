import React from "react";
import resumePdf from "/Resume-Winter2026.pdf?url";
import Button from "./button";

const Resume = () => {
  return (
    <div className="w-full flex flex-col gap-8 text-black dark:text-white">
      <h1 className="text-green-200 text-2xl">Resume</h1>
      <div className="flex justify-center items-center">
        <Button
          text="Download a PDF of my resume!"
          onClick={() => {
            const a = document.createElement("a");
            a.href = "/resume.pdf";
            a.download = "resume.pdf";
            a.click();
          }}
          className="outline-green-500 outline-solid text-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
        />
      </div>
      <div className="flex gap-8">
        <div className="w-1/2">
          <h1 className="flex justify-center items-center">Education</h1>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              Bachelor of Science in Computer Science + Philosophy, University
              of Illinois at Urbana-Champaign, Started Fall 2025, Expected
              Graduation May 2027, GPA 3.67/4.00
              <ul className="mt-2 ml-4 space-y-1 list-[square] list-inside">
                <li>
                  Related Coursework: Data Structures, Computer Architecture,
                  Statistics and Probability, Linear Algebra
                </li>
              </ul>
            </li>
            <li>
              High School Diploma, Glenbrook North High Schoool, Started Fall
              2021, Graduated May 2025, GPA 4.30/4.00
            </li>
          </ul>
        </div>
        <div className="w-1/2">
          <h1 className="flex justify-center items-center">Work Experience</h1>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              Certified Trainer, Potbelly Sandwich Shop, February 2023-Present
              <ul className="mt-2 ml-4 space-y-1 list-[square] list-inside">
                <li>
                  Trained 15 new employees in front and back of house duties
                </li>
                <li>
                  Handling transactions and customer service, maintaining high
                  customer satisfaction
                </li>
                <li>Expediting and preparing orders during rush hours</li>
              </ul>
            </li>
            <li>
              Team Member, McDonald's, August 2021-February 2023
              <ul className="mt-2 ml-4 space-y-1 list-[square] list-inside">
                <li>
                  Mentored 4 employees new to the service industry, instilling a
                  drive for customer satisfaction
                </li>
                <li>
                  Processed transactions at 6 different Point of Sales during
                  peak hours, maintaing speed and efficiency
                </li>
                <li>Maintained food safety</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="w-1/2">
          <h1 className="flex justify-center items-center">Skills</h1>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              Programming Languages
              <ul className="mt-2 ml-4 space-y-1 list-[square] list-inside">
                <li>Java</li>
                <li>C#</li>
                <li>Python</li>
                <li>C++</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Rust</li>
              </ul>
            </li>
            <li>
              Tools
              <ul className="mt-2 ml-4 space-y-1 list-[square] list-inside">
                <li>Git</li>
                <li>Unity</li>
                <li>Blender</li>
                <li>Pandas</li>
                <li>React</li>
                <li>TailwindCSS</li>
                <li>Scikit-Learn</li>
                <li>Matplotlib</li>
                <li>Maven</li>
                <li>Tauri</li>
                <li>Vite</li>
                <li>Jupyter Notebooks</li>
                <li>SQL</li>
              </ul>
            </li>
            <li>
              Spoken Languages
              <ul className="mt-2 ml-4 space-y-1 list-[square] list-inside">
                <li>English (fluent)</li>
                <li>Russian (fluent)</li>
                <li>Spanish (proficient)</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="w-1/2">
          <h1 className="flex justify-center items-center">
            Leadership and Extracurriculars
          </h1>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              Member, UIUC SigAIDA, August 2025-Present
              <ul className="mt-2 ml-4 space-y-1 list-[square] list-inside">
                <li>
                  Participate in weekly Machine Learning and AI code puzzles in
                  Python
                </li>
                <li>
                  Work on semester-long group projects implementing AI and
                  Machine Learning in various real-world scenarios
                </li>
              </ul>
            </li>
            <li>
              Founder and President, GBN Slavic Cultures Club, August 2022-May
              2025
              <ul className="mt-2 ml-4 space-y-1 list-[square] list-inside">
                <li>Grew club attendance from 0 to 50 members</li>
                <li>
                  Built sence of Slavic community through field trips to
                  Ukranian Village in Chicago
                </li>
                <li>Fundraised funds for humanitarian aid in Ukraine</li>
              </ul>
            </li>
            <li>
              Vice President, GBN Coding Club, August 2024-May 2025
              <ul className="mt-2 ml-4 space-y-1 list-[square] list-inside">
                <li>Taught Python and HTML skills to 30 club members</li>
                <li>
                  Worked in a team to lay foundations for organization of a
                  multi-day hackathon for the local community
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resume;
