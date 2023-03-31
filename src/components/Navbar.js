import React from "react"
import { Link } from "react-router-dom"
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
      <Link to="/">
        <h1>JC</h1>
      </Link>

      <ul className={`navbar ${menu ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <div className="hamburger">
        {menu ? (
          <FaTimes
            size={20}
            style={{ color: "hsl(163, 90%, 27%)" }}
            onClick={() => setMenu(!menu)}
          />
        ) : (
          <FaBars
            size={20}
            style={{ color: "hsl(163, 90%, 27%)" }}
            onClick={() => setMenu(!menu)}
          />
        )}
      </div>
    </div>
  )
}

export default Navbar
