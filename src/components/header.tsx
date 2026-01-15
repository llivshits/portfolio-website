import React from "react";
import Button from "./button";

function Header() {
  return (
    <div className="w-full px-6 py-4 flex items-center justify-between shadow-md bg-white dark:bg-black shadow-md">
      <h1 className="text-green-500 text-3xl">Len Livshits</h1>
      <div className="flex justify-end items-center">
        <Button
          text="Github"
          href="https://github.com/llivshits"
          className="outline-green-500 outline-solid text-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
        />
        <Button
          text="LinkedIn"
          href="https://www.linkedin.com/in/leonard-livshits/"
          className="outline-green-500 outline-solid text-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
        />
        <Button
          text="Email"
          href="mailto:lenliv@gmail.com"
          className="outline-green-500 outline-solid text-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
        />
        <Button
          text="Resume"
          to=""
          className="outline-green-500 outline-solid text-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
        />
        <Button
          text="Projects"
          to=""
          className="outline-green-500 outline-solid text-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black"
        />
      </div>
    </div>
  );
}

export default Header;
