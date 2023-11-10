import React from "react";
import "./style.css";
import { useRef } from "react";

const scrollToSection = (elementRef) => {
  window.scrollTo({
    top: elementRef.current.offsetTop,
    behavior: "smooth",
  });
};

const Home = () => {
  const home = useRef(null);
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  return (
    <div className="portfolio-container">
      <nav className="hero">
        <ul>
          <li onClick={() => scrollToSection(home)} className="nav-link">Home</li>
          <li onClick={() => scrollToSection(about)} className="nav-link">About</li>
          <li onClick={() => scrollToSection(skills)} className="nav-link">Skills</li>
          <li onClick={() => scrollToSection(projects)} className="nav-link">Projects</li>
          <li onClick={() => scrollToSection(contact)} className="nav-link">Contact</li>
        </ul>
      </nav>

      <section ref={home} className="home">
        <h1 className="main-title">Welcome to My Portfolio</h1>
        <p className="sub-title">Hi, I'm Mansi, a passionate developer.</p>
      </section>

      <section ref={about} className="about">
        <h2>About Me</h2>
        <p>
          Highly motivated and detail-oriented B.Tech graduate seeking a
          challenging position in the software engineering field. Offering a
          strong foundation in coding, along with a passion for artificial
          intelligence and machine learning. Committed to continuous learning
          and professional growth, with a proven ability to adapt to new
          technologies and work collaboratively in team environments.
        </p>
      </section>

      <section ref={skills} className="skills">
        <h2>My Skills</h2>
        <ul>
          <li className="popup-info" onClick={() => alert("MS Office [Power Point, Excel, Word]")}>
            MS Office [Power Point, Excel, Word]
          </li>
          <li className="popup-info" onClick={() => alert("Programming languages: Java")}>
            Programming languages: Java
          </li>
          <li className="popup-info" onClick={() => alert("Web technologies: HTML, CSS, JavaScript, PHP")}>
            Web technologies: HTML, CSS, JavaScript, PHP
          </li>
          <li className="popup-info" onClick={() => alert("Artificial intelligence, machine learning, cloud computing")}>
            Artificial intelligence, machine learning, cloud computing
          </li>
          <li className="popup-info" onClick={() => alert("Database: Oracle")}>
            Database: Oracle
          </li>
          <li className="popup-info" onClick={() => alert("Strong mathematical and logical reasoning abilities")}>
            Strong mathematical and logical reasoning abilities
          </li>
        </ul>
      </section>

      <section ref={projects} className="projects">
        <h2>Projects</h2>
        <ul>
          <li className="popup-info" onClick={() => alert("Voice control car using Arduino Uno")}>
            Voice control car using Arduino Uno
          </li>
          <li className="popup-info" onClick={() => alert("Smart pill box using [Your Technology]")}>
            Smart pill box using [Your Technology]
          </li>
          <li className="popup-info" onClick={() => alert("Object detection using Arduino")}>
            Object detection using Arduino
          </li>
        </ul>
      </section>

      <section ref={contact} className="contact">
        <h2>Contact Details</h2>
        <p>Email me at mansi.110604@gmail.com</p>
        <p>Contact Number: 8610268606</p>
        <p>
          My GitHub link <a href="https://github.com/94-mansi">here</a>
        </p>
      </section>
    </div>
  );
};

export default Home;