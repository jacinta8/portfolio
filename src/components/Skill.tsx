import React from "react"
import "./Skill.css"
import { useMediaQuery } from "../hook/useMediaQuery"

const Skill = () => {
  const isVisible = useMediaQuery("#skill")
  const loops: string[][] = [
    [
      "Router",
      "Javascript",
      "HTML",
      "CSS",
      "React",
      "Redux",
      "Router",
      "Javascript",
      "HTML",
      "CSS",
      "React",
      "Redux",
    ],
    [
      "Typescript",
      "React Testing",
      "RESTful API",
      "Github",
      "Cypress",
      "GraphQL",
      "Typescript",
      "React Testing",
      "RESTful API",
      "Github",
      "Cypress",
      "GraphQL",
    ],
  ]

  const loopItems = loops.map((tags: string[], index: number) => {
    const direction: string = index === 1 ? "reverse" : "normal"
    const duration: number = Math.floor(Math.random() * (20000 - 15000)) + 15000
    return (
      <div
        key={index}
        className="loop"
        style={
          {
            "--direction": direction,
            "--duration": `${duration}ms`,
          } as React.CSSProperties
        }
      >
        {tags.map((tag, index) => (
          <div key={index} className="tag">
            <span>#</span>
            {tag}
          </div>
        ))}
      </div>
    )
  })
  return (
    <section id="skill">
      <div className={`skill-section ${isVisible ? "animate" : ""}`}>
        <div className="skill">
          <p className="title">
            ABOUT <span>ME</span>
          </p>
          <div className="introduction">
            <p>
              {" "}
              Hi there! I'm a passionate Front End Developer with a focus on
              delivering high-quality and user-friendly websites. I'm excited to
              share my portfolio with you, where you'll find some of my work
              that showcases my skills and expertise in this field.
            </p>
            <p>
              I'm always eager to learn and explore new technologies and trends,
              and I understand that every project is an opportunity to grow and
              improve. With a commitment to creating stunning and responsive
              designs that meet the needs of end-users, I'm dedicated to
              delivering results that exceed expectations.
            </p>
          </div>

          <div className="effect">
            <div className="loop-wrap">{loopItems}</div>
            <div className="fade"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
