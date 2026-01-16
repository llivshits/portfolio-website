import React, { useEffect, useState } from "react";
import Button from "./button";
import { FaLinkedin, FaGithub, FaRegSun, FaRegMoon } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SiReaddotcv } from "react-icons/si";
import { GrProjects } from "react-icons/gr";
import Toggle from "./toggle";

function Header() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="w-full px-6 py-4 flex items-center justify-between shadow-md bg-white dark:bg-black shadow-md">
      <h1 className="text-green-500 text-3xl">Len Livshits</h1>
      <div className="flex justify-end items-center">
        <Toggle
          value={theme === "light" ? "left" : "right"}
          onToggle={(val) => setTheme(val === "left" ? "light" : "dark")}
          buttonA={<Button icon={<FaRegSun />} />}
          buttonB={<Button icon={<FaRegMoon />} />}
        />
        <Button
          text="Github"
          href="https://github.com/llivshits"
          icon=<FaGithub />
          className="outline-green-500 outline-solid text-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
        />
        <Button
          text="LinkedIn"
          href="https://www.linkedin.com/in/leonard-livshits/"
          icon=<FaLinkedin />
          className="outline-green-500 outline-solid text-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
        />
        <Button
          text="Email"
          href="mailto:lenliv@gmail.com"
          icon=<MdEmail />
          className="outline-green-500 outline-solid text-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
        />
        <Button
          text="Resume"
          to=""
          icon=<SiReaddotcv />
          className="outline-green-500 outline-solid text-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
        />
        <Button
          text="Projects"
          to=""
          icon=<GrProjects />
          className="outline-green-500 outline-solid text-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
        />
      </div>
    </div>
  );
}

export default Header;
