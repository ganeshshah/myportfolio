import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./views/About";
import Work from "./views/Work";
import Skills from "./views/Skills";
import Projects from "./views/Projects";
import Contact from "./views/Contact";
import Home from "./views/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Work" element={<Work />} />
        <Route path="Skills" element={<Skills />} />
        <Route path="Projects" element={<Projects />} />
        <Route path="Contact" element={<Contact />} />
      </Route>
      
    </Routes>
  </BrowserRouter>
);
