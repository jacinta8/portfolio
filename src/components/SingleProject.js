import React from "react"
import { useState } from "react"
import "./SingleProject.css"
import { AiFillGithub } from "react-icons/ai"
import { BsLink } from "react-icons/bs"
const SingleProject = (props) => {
  const { title, img, description } = props
  // const [isFlipped, setIsFlipped] = useState(false)

  // const handleFlip = () => {
  //   setIsFlipped(!isFlipped)
  // }

  // const frontContent = (

  // )

  // const backContent = (

  // )

  return (
    <li className="project-card">
      <div className="card">
        <div className="front">
          {" "}
          <img src={img} alt={title} className="project-photo" />
        </div>

        <div className="back">
          <h4>{title}</h4>
          <p className="card-text">{description}</p>
          <div className="pro-btns">
            <a href="#">
              <BsLink />
            </a>
            <a href="#">
              <AiFillGithub />
            </a>
          </div>
        </div>
      </div>
    </li>
  )
}

export default SingleProject
