import React from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { useState, useEffect } from "react"
import "./Navbar.css"
const Navbar = () => {
  const [menu, setMenu] = useState(false)
  const [background, setBackground] = useState(false)

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 1) {
        setBackground(true)
      } else {
        setBackground(false)
      }
    }

    window.addEventListener("scroll", changeBackground)
    return () => window.removeEventListener("scroll", changeBackground)
  }, [])

  return (
    <div className={`header ${background ? "header-bg" : ""}`}>
      <a href="#">
        <h1>JC</h1>
      </a>

      <ul className={`navbar ${menu ? "active" : ""}`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#skill">Skill</a>
        </li>
        <li>
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="hamburger">
        {menu ? (
          <FaTimes
            size={20}
            style={{ color: "#fff" }}
            onClick={() => setMenu(!menu)}
          />
        ) : (
          <FaBars
            size={20}
            style={{ color: "#fff" }}
            onClick={() => setMenu(!menu)}
          />
        )}
      </div>
    </div>
  )
}

export default Navbar
