import React from "react"
import { PageProps, graphql } from "gatsby"
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
          <div className="nav__name">Hubert Zhu</div>
        </animated.div>
        <animated.div  style={props} className="nav__options">
          <div className="nav__option">About Me</div>
          <div className="nav__option">Projects</div>
          <div className="nav__option">Blogs</div>
          <div className="nav__option">GitHub</div>
        </animated.div>
      </nav>
    
  )
}

export default Nav
