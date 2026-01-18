import React, { useEffect, useState } from "react";
import Button from "./button";
import { FaLinkedin, FaGithub, FaRegSun, FaRegMoon } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiReaddotcv } from "react-icons/si";
import { GrProjects } from "react-icons/gr";
import { HiMenu, HiX } from "react-icons/hi";
import Toggle from "./toggle";

const Header: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      // Update favicon for dark mode
      const favicon = document.querySelector(
        "link[rel='icon']",
      ) as HTMLLinkElement;
      if (favicon) {
        favicon.href = "/favicon-dark.svg";
      }
    } else {
      document.documentElement.classList.remove("dark");
      // Update favicon for light mode
      const favicon = document.querySelector(
        "link[rel='icon']",
      ) as HTMLLinkElement;
      if (favicon) {
        favicon.href = "/favicon-light.svg";
      }
    }
  }, [theme]);

  return (
    <div className="w-full px-8 py-5 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <Button
          text="Len Livshits"
          to="/"
          uref="header"
          className="text-emerald-600 dark:text-emerald-400 text-3xl font-bold hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
        />

        {/* For desktop and large screens */}
        <div className="hidden md:flex justify-end items-center gap-2">
          <Toggle
            value={theme === "light" ? "left" : "right"}
            onToggle={(val) => setTheme(val === "left" ? "light" : "dark")}
            buttonA={<Button icon={<FaRegSun />} />}
            buttonB={<Button icon={<FaRegMoon />} />}
          />
          <Button
            text="Github"
            href="https://github.com/llivshits"
            icon={<FaGithub />}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          />
          <Button
            text="LinkedIn"
            href="https://www.linkedin.com/in/leonard-livshits/"
            icon={<FaLinkedin />}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          />
          <Button
            text="Email"
            href="mailto:lenliv@gmail.com"
            icon={<MdEmail />}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          />
          <Button
            text="Projects"
            to="/"
            uref="projects"
            icon={<GrProjects />}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          />
          <Button
            text="Resume"
            to="/"
            uref="resume"
            icon={<SiReaddotcv />}
            className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
          />
        </div>

        {/* For mobile and small desktop screens */}
        <div className="md:hidden flex items-center gap-2">
          <Toggle
            value={theme === "light" ? "left" : "right"}
            onToggle={(val) => setTheme(val === "left" ? "light" : "dark")}
            buttonA={<Button icon={<FaRegSun />} />}
            buttonB={<Button icon={<FaRegMoon />} />}
          />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Menu for mobile and small screens */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-2 pb-4 border-t border-gray-200 dark:border-gray-800 pt-4">
          <Button
            text="Github"
            href="https://github.com/llivshits"
            icon={<FaGithub />}
            className="w-full px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-left"
            onClick={() => setMenuOpen(false)}
          />
          <Button
            text="LinkedIn"
            href="https://www.linkedin.com/in/leonard-livshits/"
            icon={<FaLinkedin />}
            className="w-full px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-left"
            onClick={() => setMenuOpen(false)}
          />
          <Button
            text="Email"
            href="mailto:lenliv@gmail.com"
            icon={<MdEmail />}
            className="w-full px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-left"
            onClick={() => setMenuOpen(false)}
          />
          <Button
            text="Projects"
            to="/"
            uref="projects"
            icon={<GrProjects />}
            className="w-full px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-left"
            onClick={() => setMenuOpen(false)}
          />
          <Button
            text="Resume"
            to="/"
            uref="resume"
            icon={<SiReaddotcv />}
            className="w-full px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors text-left"
            onClick={() => setMenuOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Header;
