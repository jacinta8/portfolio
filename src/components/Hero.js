import React, { useEffect } from "react"
import IntroImg from "../assets/background.jpeg"
import Typical from "react-typical"
import Brush from "../assets/brush.png"

import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero">
      {/* <div className="mask">
        <img src={IntroImg} alt="hero" className="hero-img" />
      </div> */}
      <div className="content">
        <p className="person">
          Jacinta
          <span>
            Chen
            <img src={Brush} alt="Brush" />
          </span>
        </p>

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

        <div className="btn-container">
          <a to="/contact" className="btn">
            <span>Contact</span>
            <i></i>
          </a>
          <a
            href="Jacinta-Chen-CV.pdf"
            download="Jacinta-chen-CV.pdf"
            className="btn"
          >
            <span>Resume</span>
            <i></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
