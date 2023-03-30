import React, { useEffect } from "react"
import IntroImg from "../assets/background.jpg"
import Typical from "react-typical"
import { Link } from "react-router-dom"
import Myself from "../assets/myself.png"

const Hero = () => {
  return (
    <div className="hero">
      <img src={IntroImg} alt="hero" className="hero-img" />

      <div className="content">
        <h2>Welcome to my Portfolio</h2>
        <p className="person">Hi I'm Jacinta</p>
        <p className="title">
          <Typical
            loop={Infinity}
            steps={[
              "Frontend Developer",
              1000,
              "Enthusiastic React Developer",
              1000,
            ]}
          />
        </p>
        {/* <p className="introduction">
          My expertise in utilizing a variety of frontend development tools and
          frameworks, including React, HTML, CSS and JavaScript, combined with
          my passion for coding and problem-solving, enables me to deliver
          quality and efficient projects.
        </p> */}
        <div className="btn-container">
          <Link to="/contact" className="btn">
            Contact
          </Link>
          <a href="Jacinta-Chen-CV.pdf" download="Jacinta-chen-CV.pdf">
            <button className="btn">Resume</button>
          </a>
        </div>
      </div>
      {/* <img src={Myself} alt="Jacinta Chen" className="myself" /> */}
    </div>
  )
}

export default Hero
