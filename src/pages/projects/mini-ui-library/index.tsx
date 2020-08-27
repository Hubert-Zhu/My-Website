// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, graphql } from "gatsby"
import { animated, useSpring } from "react-spring"

import Navbar from "../../../components/Navbar/index"

import demoImage from "../../../images/projects/mini-ui-library/project1.jpg"
import demopage from "../../../images/projects/mini-ui-library/demopage.png"
import storypage from "../../../images/projects/mini-ui-library/storypage.png"

import "./style.scss"

const links = [
  {
    name: "Summary",
    herf: "#",
  },
  {
    name: "Technology",
    herf: "#",
  },
  {
    name: "SnapShot",
    herf: "#",
  },
  {
    name: "Links",
    herf: "#",
  },
]

const project = () => {
  const sidebarAnimation = useSpring({
    transform: "translate3d(0px, 0px, 0px)",
    opacity: 1,
    from: { transform: "translate3d(100px, 0px, 0px)" },
    delay: 300,
  })

  return (
    <div>
      <Navbar />
      <div className="project-grid">
        <div className="content">
          <h1 className="content__title">Mini Chat Library</h1>
          <div className="content__demo-image">
            <img src={demoImage} alt="Demo Page" />
          </div>

          <div>
            <h2 className="content__subtitle">Summary</h2>
            <div className="content__description">
              <div>
                This project is a <b>UI Components Library for React.</b> 📚
              </div>
              <div>
                I used several UI libraries before, such as{" "}
                <a href="https://material-ui.com/">Materal-UI</a>,{" "}
                <a href="https://ant.design/">Ant-design</a>,{" "}
                <a href="https://element.eleme.io/#/en-US">Element-UI</a>, etc.
                They are super useful. The reason why I build this project is
                that I want to challenage myself to see what is the difficulties
                to build a UI Library. Therefore, I started working on this
                project. The design was from{" "}
                <a href="https://dribbble.com/pecherits4">Anton Pecheritsa</a>{" "}
                on Dribbble. He is a awesome web designor. Until September,
                there are more than 60 components in this Library. I also create
                5 demo pages by using these components.
                {/* but I have to confess that they still have some drawbacks.
                Sometime I cannot find the component that I want. Meanwhile, It
                is hard to change style of components in library when I import
                them into pages, as I need to consider the weight of CSS and
                other factors. Also, The APIs that they have are so limited,
                that some functionalities cannot be achieved. I believe those
                problem are hard to solve, because everyone has different
                demands for their project. */}
              </div>
            </div>
          </div>

          <div>
            <h2 className="content__subtitle">Technology</h2>
            <div className="content__description">
              <ul className="technology">
                <li className="technology__list">
                  Framework:
                  <ul className="technology__sublist">
                    <li>React + Hook</li>
                  </ul>
                </li>
                <li className="technology__list">
                  Tool:
                  <ul className="technology__sublist">
                    <li>
                      Styled-Components <span>--- Manage style</span>
                    </li>
                    <li>
                      Storybook <span>--- Component documentation </span>
                    </li>
                    <li>
                      React Spring{" "}
                      <span>--- spring-physics based animation library</span>
                    </li>
                    <li>
                      React Router{" "}
                      <span>--- collection of navigational components</span>
                    </li>
                  </ul>
                </li>
                <li className="technology__list">
                  Infrastructure:
                  <ul className="technology__sublist">
                    <li>
                      Google Cloud Firebase{" "}
                      <span>--- deploy and backend data</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="content__subtitle">SnapShot</h2>
            <div className="content__description">
              <img
                className="content__snapshot"
                src={demopage}
                alt="demo-page"
              />
              <img
                className="content__snapshot"
                src={storypage}
                alt="story-page"
              />
            </div>
          </div>

          <div>
            <h2 className="content__subtitle">Links</h2>
            <div className="content__description">
              <div>
                UI Library: <a href="#">N/A</a>{" "}
              </div>
              <div>
                Demo Pages: <a href="#">N/A</a>
              </div>
              <div>
                Source code:{" "}
                <a href="https://github.com/Hubert-Zhu/Mini-UI-Library">
                  https://github.com/Hubert-Zhu/Mini-UI-Library
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar">
          <div className="sidebar--fixed">
            {links.map((item, index) => (
              <animated.li
                style={sidebarAnimation}
                className="sidebar__link-box"
                key={index}
              >
                <a className="sidebar__link" href={item.herf}>
                  {item.name}
                </a>
              </animated.li>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default project
