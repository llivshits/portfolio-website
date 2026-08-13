import React, { useEffect, useState } from "react";
import Button from "./button";
import { FaLinkedin, FaGithub, FaRegSun, FaRegMoon } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { HiMenu, HiX } from "react-icons/hi";
import Toggle from "./toggle";

const navLink =
  "text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100";

const iconLink = `p-2 ${navLink}`;

const mobileLink = `w-full rounded-md px-3 py-2.5 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-900 ${navLink}`;

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
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
      <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4 lg:max-w-5xl lg:px-8 2xl:max-w-6xl">
        <Button
          text="Len Livshits"
          to="/"
          uref="header"
          className="text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100"
        />

        {/* For desktop and large screens */}
        <nav className="hidden items-center gap-1 text-sm md:flex">
          <Button
            text="Projects"
            to="/"
            uref="projects"
            className={`px-3 py-2 ${navLink}`}
          />
          <Button
            text="Resume"
            to="/"
            uref="resume"
            className={`px-3 py-2 ${navLink}`}
          />

          <span
            aria-hidden="true"
            className="mx-2 h-4 w-px bg-neutral-200 dark:bg-neutral-800"
          />

          <Button
            href="https://github.com/llivshits"
            icon={<FaGithub />}
            aria-label="GitHub"
            className={iconLink}
          />
          <Button
            href="https://www.linkedin.com/in/leonard-livshits/"
            icon={<FaLinkedin />}
            aria-label="LinkedIn"
            className={iconLink}
          />
          <Button
            href="mailto:lenliv@gmail.com"
            icon={<MdEmail />}
            aria-label="Email"
            className={iconLink}
          />

          <Toggle
            className="ml-2"
            value={theme === "light" ? "left" : "right"}
            onToggle={(val) => setTheme(val === "left" ? "light" : "dark")}
            buttonA={<Button icon={<FaRegSun />} aria-label="Light mode" />}
            buttonB={<Button icon={<FaRegMoon />} aria-label="Dark mode" />}
          />
        </nav>

        {/* For mobile and small desktop screens */}
        <div className="flex items-center gap-2 md:hidden">
          <Toggle
            value={theme === "light" ? "left" : "right"}
            onToggle={(val) => setTheme(val === "left" ? "light" : "dark")}
            buttonA={<Button icon={<FaRegSun />} aria-label="Light mode" />}
            buttonB={<Button icon={<FaRegMoon />} aria-label="Dark mode" />}
          />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`rounded-md ${iconLink}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
          </button>
        </div>
      </div>

      {/* Menu for mobile and small screens */}
      {menuOpen && (
        <nav className="mx-auto max-w-3xl border-t border-neutral-200 px-6 py-3 md:hidden lg:max-w-5xl lg:px-8 dark:border-neutral-800">
          <div className="flex flex-col">
            <Button
              text="Projects"
              to="/"
              uref="projects"
              className={mobileLink}
              onClick={() => setMenuOpen(false)}
            />
            <Button
              text="Resume"
              to="/"
              uref="resume"
              className={mobileLink}
              onClick={() => setMenuOpen(false)}
            />
            <Button
              text="GitHub"
              href="https://github.com/llivshits"
              icon={<FaGithub />}
              className={mobileLink}
              onClick={() => setMenuOpen(false)}
            />
            <Button
              text="LinkedIn"
              href="https://www.linkedin.com/in/leonard-livshits/"
              icon={<FaLinkedin />}
              className={mobileLink}
              onClick={() => setMenuOpen(false)}
            />
            <Button
              text="Email"
              href="mailto:lenliv@gmail.com"
              icon={<MdEmail />}
              className={mobileLink}
              onClick={() => setMenuOpen(false)}
            />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
