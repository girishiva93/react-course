import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Pages or component
import Home from "./Home";
import About from "./About";
import Error from "./Error";
import Person from "./Person";
import People from "./People";

// Navbar
import Navbar from "./Navbar";

const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/people" element={<People />}></Route>
        <Route path="/person/:id" element={<Person />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
};

export default ReactRouterSetup;
