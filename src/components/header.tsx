import React, { useEffect, useState } from "react";
import Button from "./button";
import { FaLinkedin, FaGithub, FaRegSun, FaRegMoon } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiReaddotcv } from "react-icons/si";
import { GrProjects } from "react-icons/gr";
import Toggle from "./toggle";

const Header: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      // Update favicon for dark mode
      const favicon = document.querySelector(
        "link[rel='icon']"
      ) as HTMLLinkElement;
      if (favicon) {
        favicon.href = "/favicon-dark.svg";
      }
    } else {
      document.documentElement.classList.remove("dark");
      // Update favicon for light mode
      const favicon = document.querySelector(
        "link[rel='icon']"
      ) as HTMLLinkElement;
      if (favicon) {
        favicon.href = "/favicon-light.svg";
      }
    }
  }, [theme]);

  return (
    <div className="w-full px-8 py-5 flex items-center justify-between bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-sm sticky top-0 z-50">
      <Button
        text="Len Livshits"
        to="/"
        uref="header"
        className="text-emerald-600 dark:text-emerald-400 text-3xl font-bold hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
      />
      <div className="flex justify-end items-center gap-2">
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
    </div>
  );
};

export default Header;
