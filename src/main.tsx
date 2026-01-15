import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Home from "./Home";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import React from "react";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  </React.StrictMode>
);
