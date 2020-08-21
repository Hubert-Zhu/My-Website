import React from "react"
import { PageProps, graphql } from "gatsby"
import "./style.scss"
import Avatar from "./avatar.jpg"

const Nav: React.FC = () => (
  <nav className="nav">
    <div className="nav__avatar">
      <img src={Avatar} alt="Touxiang" /> 
      <div className="nav__name">Hubert Zhu</div>
    </div>
    <div className="nav__options">
        <div className="nav__option">About Me</div>
        <div className="nav__option">Projects</div>
        <div className="nav__option">Blogs</div>
        <div className="nav__option">GitHub</div>
    </div>
  </nav>
)

export default Nav
