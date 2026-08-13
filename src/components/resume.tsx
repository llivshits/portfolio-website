import React from "react";
import Button from "./button";

interface EntryProps {
  title: string;
  org?: string;
  dates?: string;
  meta?: string[];
  points?: string[];
}

const Entry: React.FC<EntryProps> = ({ title, org, dates, meta, points }) => (
  <li>
    <p className="font-medium text-neutral-900 dark:text-neutral-100">{title}</p>
    {org && <p className="mt-0.5 text-sm">{org}</p>}
    {dates && (
      <p className="mt-0.5 text-sm text-neutral-500 dark:text-neutral-400">
        {dates}
      </p>
    )}
    {meta?.map((line) => (
      <p key={line} className="mt-0.5 text-sm text-neutral-500 dark:text-neutral-400">
        {line}
      </p>
    ))}
    {points && (
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-6 marker:text-neutral-300 dark:marker:text-neutral-600">
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
    )}
  </li>
);

const Subsection: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <div>
    <h3 className="border-b border-neutral-200 pb-2 text-base dark:border-neutral-800">
      {title}
    </h3>
    {children}
  </div>
);

const languages = [
  "Java",
  "Rust",
  "C#",
  "Python",
  "C++",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "R",
  "SQL",
];

const tools = [
  "Git",
  "Unity",
  "Blender",
  "Pandas",
  "Numpy",
  "Node.js",
  "React",
  "TailwindCSS",
  "Scikit-Learn",
  "Matplotlib",
  "Maven",
  "Tauri",
  "Vite",
  "Jupyter Notebooks",
  "SQLite",
];

const spokenLanguages = [
  "English (Fluent)",
  "Russian (Fluent)",
  "Spanish (Proficient)",
];

const Resume = () => {
  return (
    <section
      id="resume"
      className="mt-20 border-t border-neutral-200 pt-10 pb-8 dark:border-neutral-800"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-xs font-medium tracking-[0.14em] text-neutral-500 uppercase dark:text-neutral-400">
          Resume
        </h2>
        <Button
          text="Download PDF"
          onClick={() => {
            const a = document.createElement("a");
            a.href = "/Resume.pdf";
            a.download = "/Resume.pdf";
            a.click();
          }}
          className="rounded-md border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700 transition-colors hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:text-neutral-100"
        />
      </div>

      <div className="mt-8 grid gap-x-12 gap-y-10 sm:grid-cols-2">
        {/*Education*/}
        <Subsection title="Education">
          <ul className="mt-4 space-y-5">
            <Entry
              title="Bachelor of Science in Computer Science + Statistics"
              org="University of Illinois at Urbana-Champaign"
              dates="Started Fall 2025, Expected Graduation May 2027"
              meta={[
                "GPA: 3.67/4.00",
                "Related Coursework: Data Structures, Computer Architecture, Statistics and Probability, Linear Algebra",
              ]}
            />
            <Entry
              title="High School Diploma"
              org="Glenbrook North High School"
              dates="Graduated May 2025"
              meta={["GPA: 4.30/4.00"]}
            />
          </ul>
        </Subsection>

        {/*Work Experience*/}
        <Subsection title="Work Experience">
          <ul className="mt-4 space-y-5">
            <Entry
              title="Course Assistant - CS128H (Rust)"
              org="University of Illinois, Champaign-Urbana"
              dates="January 2026 - Present"
              points={[
                "Held weekly office hours to assist 40+ students in learning Rust, focusing on concepts such as borrowing, ownership, and multithreading",
                "Maintained course website, featuring up to date information on course policies and instructional videos",
                "Mentored students in developing a Rust-based final project",
              ]}
            />
            <Entry
              title="Certified Trainer"
              org="Potbelly Sandwich Shop"
              dates="February 2023 - Present"
              points={[
                "Trained 15 new employees in front and back of house duties",
                "Handling transactions and customer service, maintaining high satisfaction",
                "Expediting and preparing orders during rush hours",
              ]}
            />
            <Entry
              title="Team Member"
              org="McDonald's"
              dates="August 2021 - February 2023"
              points={[
                "Mentored 4 employees new to the service industry",
                "Processed transactions at 6 different Point of Sales during peak hours",
                "Maintained food safety standards",
              ]}
            />
          </ul>
        </Subsection>

        {/*Skills*/}
        <Subsection title="Skills">
          <dl className="mt-4 space-y-4 text-sm leading-6">
            <div>
              <dt className="text-neutral-500 dark:text-neutral-400">
                Programming Languages
              </dt>
              <dd className="mt-1">{languages.join(", ")}</dd>
            </div>
            <div>
              <dt className="text-neutral-500 dark:text-neutral-400">Tools</dt>
              <dd className="mt-1">{tools.join(", ")}</dd>
            </div>
            <div>
              <dt className="text-neutral-500 dark:text-neutral-400">
                Languages
              </dt>
              <dd className="mt-1">{spokenLanguages.join(", ")}</dd>
            </div>
          </dl>
        </Subsection>

        {/*Leadership*/}
        <Subsection title="Leadership">
          <ul className="mt-4 space-y-5">
            <Entry
              title="Member, UIUC SigAIDA"
              dates="August 2025 - Present"
              points={[
                "Participate in weekly Machine Learning and AI code puzzles in Python",
                "Work on semester-long group projects implementing AI and ML",
              ]}
            />
            <Entry
              title="Founder and President, GBN Slavic Cultures Club"
              dates="August 2022 - May 2025"
              points={[
                "Grew club attendance from 0 to 50 members",
                "Fundraised funds for humanitarian aid in Ukraine",
              ]}
            />
            <Entry
              title="Vice President, GBN Coding Club"
              dates="August 2024 - May 2025"
              points={[
                "Taught Python and HTML skills to 30 club members",
                "Organized foundations for a multi-day hackathon",
              ]}
            />
          </ul>
        </Subsection>
      </div>
    </section>
  );
};

export default Resume;
