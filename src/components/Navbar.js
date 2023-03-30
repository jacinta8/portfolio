import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          {" "}
          <Link to="/about">About</Link>
        </li>
        <li>
          {" "}
          <Link to="/project">Project</Link>
        </li>
        <li>
          {" "}
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <button className="btn">click</button>
    </div>
  )
}

export default Navbar
