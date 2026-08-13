import React from "react";
import Button from "./button";
import Section from "./section";

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
    <h3 className="border-b border-neutral-200 pb-2 text-base lg:text-lg dark:border-neutral-800">
      {title}
    </h3>
    {children}
  </div>
);

const languages = [
  "Java",
  "Python",
  "Rust",
  "C#",
  "C",
  "C++",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "R",
  "SQL",
];

const tools = [
  "React",
  "Node.js",
  "Git",
  "Unity",
  "Blender",
  "Tauri",
  "Vite",
  "Jupyter Notebooks",
  "SQLite",
  "Docker",
  "Maven",
];

const libraries = [
  "Pandas",
  "NumPy",
  "PyTorch",
  "Matplotlib",
  "Scikit-Learn",
  "TailwindCSS",
  "FastAPI",
];

const spokenLanguages = [
  "English (Native)",
  "Russian (Native)",
  "Spanish (Proficient)",
];

const Resume = () => {
  return (
    <Section
      id="resume"
      label="Resume"
      className="mt-20 border-t border-neutral-200 pt-10 pb-8 lg:mt-24 lg:pt-12 dark:border-neutral-800"
      aside={
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
      }
    >
      <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:gap-x-16">
        {/*Education*/}
        <Subsection title="Education">
          <ul className="mt-4 space-y-5">
            <Entry
              title="Bachelor of Science in Computer Science + Statistics"
              org="University of Illinois Urbana-Champaign, Urbana/Champaign, IL"
              dates="Aug. 2025 – May 2028 (Expected)"
              meta={[
                "GPA: 3.67/4.00",
                "Relevant coursework: Data Structures (C++), Computer Architecture (C), Statistics (R), Linear Algebra (Python), Database Systems (SQL), Algorithms and Models of Computation",
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
              title="Research Assistant - MARTIANS Lab (Syed Bahauddin Alam, PhD)"
              org="University of Illinois Urbana-Champaign, Dept. of Nuclear, Plasma & Radiological Engineering, Urbana, IL"
              dates="May 2026 – Present"
              points={[
                "Build DeepONets and Fourier Neural Operators in PyTorch to predict reactor temperature fields from 75K samples",
                "Build an autoregressive inference pipeline forecasting 100 time steps from a single initial condition, achieving 3.9% relative L2 validation error with a 2.4M-parameter 2D Fourier Neural Operator",
                "Design 10-step sliding-window training scheme, cutting 100-step rollout error 83% vs. single-step training",
              ]}
            />
            <Entry
              title="Course Assistant - CS128 Honors (Rust)"
              org="University of Illinois Urbana-Champaign, Urbana/Champaign, IL"
              dates="Jan. 2026 – Present"
              points={[
                "Hold weekly office hours for 40+ students on Rust ownership, borrowing, and multithreading",
                "Maintain course website, featuring up-to-date information on course policies and instructional videos",
                "Mentor students in developing a Rust-based final project",
              ]}
            />
            <Entry
              title="Certified Trainer"
              org="Potbelly Sandwich Shop, Champaign, IL & Northbrook, IL"
              dates="Mar. 2023 – Jul. 2026"
              points={[
                "Trained 15+ new employees on food safety and store operations across two locations, covering both front and back of house duties",
                "Handled transactions and customer service, maintaining high satisfaction",
                "Expedited and prepared orders during rush hours",
              ]}
            />
            <Entry
              title="Team Member"
              org="McDonald's"
              dates="Aug. 2021 – Feb. 2023"
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
                Libraries
              </dt>
              <dd className="mt-1">{libraries.join(", ")}</dd>
            </div>
            <div>
              <dt className="text-neutral-500 dark:text-neutral-400">
                Languages
              </dt>
              <dd className="mt-1">{spokenLanguages.join(", ")}</dd>
            </div>
          </dl>
        </Subsection>

        {/*Extracurriculars and Leadership*/}
        <Subsection title="Extracurriculars and Leadership">
          <ul className="mt-4 space-y-5">
            <Entry
              title="Brother, Delta Kappa Epsilon Fraternity"
              dates="May 2026 – Present"
            />
            <Entry
              title="Full-Stack Software Engineer, Reflections | Projections"
              dates="Feb. 2026 – Present"
              points={[
                "Develop and maintain various software systems for the Midwest's largest student-run tech conference",
                "Engineered a new Magic-Links based login system to increase security and ease of use for conference attendees",
              ]}
            />
            <Entry
              title="Project Lead, ACM SigAIDA (Special Interest Group for AI and Data Analytics)"
              dates="Aug. 2025 – May 2026"
              points={[
                "Lead semester-long group projects implementing AI and ML",
                "Participate in weekly Machine Learning and AI code puzzles in Python",
              ]}
            />
          </ul>
        </Subsection>
      </div>
    </Section>
  );
};

export default Resume;
