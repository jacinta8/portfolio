import "./App.css"
import "./index.css"
import { Route, Routes } from "react-router-dom"
import About from "./routers/About"
import Contact from "./routers/Contact"
import Project from "./routers/Project"
import Home from "./routers/Home"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
