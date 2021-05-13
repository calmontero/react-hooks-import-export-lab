import React from "react";
import Home  from "../components/Home.js";
import NavBar from "../components/NavBar.js";
import About from "./About";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
