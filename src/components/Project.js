import React from "react"
import SingleProject from "./SingleProject"
import "./Project.css"
import { ProjectData } from "./ProjectData"

import "./Projects.css"

const Project = () => {
  return (
    <section className="projects-section">
      <div className="projects">
        <p className="title">
          <span>PRO</span>JECTS
        </p>
        <ul className="projects-gallery">
          {ProjectData.map((project, index) => {
            return (
              <SingleProject
                key={index}
                title={project.title}
                img={project.img}
                description={project.description}
              />
            )
          })}
        </ul>
      </div>
    </section>
  )
}
export default Project
