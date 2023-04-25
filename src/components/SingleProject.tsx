import React from "react"
import "./SingleProject.css"
import { AiFillGithub } from "react-icons/ai"
import { BsLink } from "react-icons/bs"

type ProjectProps = {
  title: string
  img: string
  description: string
  github: string
  web: string
}

const SingleProject = (props: ProjectProps) => {
  const { title, img, description, github, web } = props

  return (
    <li className="project-card">
      <div className="dropdown">
        <h4>{title}</h4>
        <p className="card-text">{description}</p>
        <div className="pro-btns">
          <a href={web}>
            <BsLink />
          </a>
          <a href={github}>
            <AiFillGithub />
          </a>
        </div>
      </div>
      <div className="front">
        <img src={img} alt={title} className={title} />
      </div>
    </li>
  )
}

export default SingleProject
