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
          <p className="introduction">
            I am an experienced Front End Developer with strong learning ability
            and have willingness to learn new skills. Like coding and passion
            for creativity.
          </p>
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
