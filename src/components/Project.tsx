import React from "react"
import SingleProject from "./SingleProject"
import "./Project.css"
import { ProjectData } from "./ProjectData"
import { useMediaQuery } from "../hook/useMediaQuery"

const Project = () => {
  const isVisible = useMediaQuery("#project")

  return (
    <section id="project">
      <div className={`project-section ${isVisible ? "animate" : ""}`}>
        <p className="title">
          <span>PRO</span>JECTS
        </p>
        <ul className="project-gallery">
          {ProjectData.map((project, index) => {
            return (
              <SingleProject
                key={index}
                title={project.title}
                img={project.img}
                description={project.description}
                github={project.github}
                web={project.website}
              />
            )
          })}
        </ul>
      </div>
    </section>
  )
}
export default Project
