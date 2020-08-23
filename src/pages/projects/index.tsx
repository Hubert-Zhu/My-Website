import React from 'react'
import { graphql, withPrefix, useStaticQuery } from 'gatsby'
import Project from "./project.svg"
import "./style.scss"


const Footer = React.memo(() => {
  return (
    <footer className={"projects"}>
        <h1>Personal Projects</h1>
        
        <div>
            <div className="projects__line"></div>
            <div className="projects__icon">
                <img src={Project} alt="icons" />
            </div>
            <div className="projects__line"></div>
        </div>

        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>

    </footer>
  )
})

export default Footer
