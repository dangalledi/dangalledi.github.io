import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home/home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                title="Daniela Galleguillos"
                subtitle="Web Developer - Front End"
                description="Passionate about creating beautiful and functional web applications."
                buttonText="View Portfolio"
                buttonLink="/portfolio"
              />
            }
          />
          {/* <Route path="/vista2" element={Vista2} /> */}
          {/* Otras rutas */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
