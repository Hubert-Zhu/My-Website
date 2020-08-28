// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, graphql } from "gatsby"
import { animated, useSpring } from "react-spring"

import Navbar from "../../../components/Navbar/index"
import demoImage from "../../../images/projects/go-chat/project3.jpg"

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
                <b>Online Chatting room.</b> 📚
              </div>
              <div>
              = Building
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
                    <li>React <span> --- Front-end</span></li>
                    <li>Express <span> --- Back-end</span></li>
                  </ul>
                </li>
                <li className="technology__list">
                  Tool:
                  <ul className="technology__sublist">
                    <li>
                      Sass <span>--- Manage style</span>
                    </li>
                    <li>
                      MongoDB <span>--- Database</span>
                    </li>
                    <li>
                      Mongoose{" "}
                      <span>--- Tool for MongoDB</span>
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
                      N/A
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="content__subtitle">SnapShot</h2>
            <div className="content__description">
              {/* <img
                className="content__snapshot"
                src={demopage}
                alt="demo-page"
              />
              <img
                className="content__snapshot"
                src={storypage}
                alt="story-page"
              /> */}
            </div>
          </div>

          <div>
            <h2 className="content__subtitle">Links</h2>
            <div className="content__description">
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
