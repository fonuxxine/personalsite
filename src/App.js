import Navbar from "./Navbar"
import Experience from "./pages/Experience"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
