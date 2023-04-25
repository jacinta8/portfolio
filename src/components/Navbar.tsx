import React from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { useState, useEffect } from "react"
import "./Navbar.css"
import Logo from "../assets/logo.png"
const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false)
  const [background, setBackground] = useState<boolean>(false)

  useEffect(() => {
    const changeBackground = (): void => {
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
    <div
      className={`header ${background ? "header-bg" : ""}`}
      onClick={() => setMenu(!menu)}
    >
      <a href="#">
        <img className="logo" src={Logo} alt="JC" />
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
