import React, { useEffect } from "react"
import IntroImg from "../assets/background.jpg"
import Typical from "react-typical"
import { Link } from "react-router-dom"
import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img src={IntroImg} alt="hero" className="hero-img" />
      </div>
      <div className="content">
        <p className="person">Jacinta Chen</p>
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
          <Link to="/contact" className="btn">
            Contact
          </Link>
          <a href="Jacinta-Chen-CV.pdf" download="Jacinta-chen-CV.pdf">
            <button className="btn">Resume</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
