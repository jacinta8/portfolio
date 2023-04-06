import React from "react"
import "./SingleProject.css"
import { AiFillGithub } from "react-icons/ai"
import { BsLink } from "react-icons/bs"

const SingleProject = (props) => {
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
