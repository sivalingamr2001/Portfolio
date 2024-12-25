import React, { useState } from "react";
import { Element } from "react-scroll";
import Header from "./components/Header";
import Landing from "./components/Landing";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";
import Activities from "./components/Activities";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <Header />
      <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Element name="home">
        <Landing />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="activities">
        <Activities />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Footer />
    </div>
  );
}

export default App;
