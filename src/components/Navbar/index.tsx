import React from "react"
import { PageProps, graphql, Link } from "gatsby"
import "./style.scss"
import { useSpring, animated } from "react-spring"
import Avatar from "./avatar.jpg"

const Nav: React.FC = () => {
  const props = useSpring({
    transform: "translate3d(0px, 0px, 0px)",
    opacity: 1,
    from: { transform: "translate3d(0px, -60px, 0px)" },
    config: {
      tension: 100,
    },
    delay: 300,
  })

  return (
    <nav className="nav">
      <animated.div style={props} className="nav__avatar">
        <img src={Avatar} alt="Touxiang" />
        <div className="nav__name">
          <Link to="/to">Hubert Zhu </Link>
        </div>
      </animated.div>
      <animated.div style={props} className="nav__options">
        <div className="nav__option">
          <Link to="/aboutme">About Me</Link>
        </div>
        <div className="nav__option">
          <Link to="/projects">Projects</Link>
        </div>
        <div className="nav__option">
          <Link to="/blogs">Blogs</Link>
        </div>
        <div className="nav__option">
          <a href="https://github.com/Hubert-Zhu">GitHub</a>
        </div>
      </animated.div>
    </nav>
  )
}

export default Nav
