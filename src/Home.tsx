import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/header";
import HomePage from "./components/homepage";
import { useScroll } from "./hooks/scrollhook";

const Home: React.FC = () => {
  useScroll();

  return <HomePage />;
};

export default Home;
