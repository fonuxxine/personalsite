import { Link, useMatch, useResolvedPath } from "react-router-dom";
import navIcon1 from './assets/Group 379.svg';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        samira
      </Link>
      <ul className="nav-link">
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/experience">Experience</CustomLink>
        <CustomLink to="/projects">Projects</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
