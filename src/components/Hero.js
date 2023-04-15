import Typical from "react-typical"
import Brush from "../assets/brush.png"

import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero">
      <div className="content">
        <p className="person">
          Jacinta
          <span>
            Chen
            <img src={Brush} alt="Brush" />
          </span>
        </p>

        <p className="job-title">
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
          <a href="#contact" className="btn">
            <span>Contact</span>
            <i></i>
          </a>
          <a href="Jacinta-Chen-CV.pdf" download className="btn">
            <span>Resume</span>
            <i></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
