import React from "react"
import { graphql, withPrefix, useStaticQuery } from "gatsby"
import Project from "./project.svg"
import project1 from "./project1.jpg"
import project2 from "./project2.png"
import project3 from "./project3.jpg"
import "./style.scss"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"

const projects = [
  {
    link: project1,
    title: "Mini UI Library",
    type: "Frontent Project",
    description: "UI Component library for React",
    tags: ["React", "Styled-components", "React-Spring", "Storybook", "Google Firebase"],
  },
  {
    link: project2,
    title: "Personal Blog",
    type: "Frontend Project",
    description: "Personal website based on Gatsby and GraphQL",
    tags: ["Gatsby", "GraphQL", "Netlify CMS", "Sass", "Typescipt", "Responsive Design"],
  },
  {
    link: project3,
    title: "goChat",
    type: "Fullstack Project",
    description: "Chatting application created with Vue, Express",
    tags:["Vue","Express", "NodeJS", "MongoDB", "Mongoose", "socket"]
  },
]

const Projects = React.memo(() => {
  return (
    <div>
      <Navbar />
      <div className={"projects"}>
        <h1 className={"projects__title"}>Personal Projects</h1>
        <div className={"projects__icon-container"}>
          <div className="projects__line"></div>
          <div>
            <img className="projects__icon" src={Project} alt="icons" />
          </div>
          <div className="projects__line"></div>
        </div>

        <div className="project">
          {projects.map((item, index) => (
            <div className="project__item" key={index}>
              <h2 className="project__title">{item.title}</h2>
              <img src={item.link} className="project__image" />

              <h3 className="project__type">{item.type}</h3>
              <p className="project__description">{item.description}</p>
              <div className="project__tags">
                {
                  item.tags.map((item, index)=>(
                    <div key={index} className="project__tag">#{item}</div>
                  ))
                }
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
})

export default Projects
