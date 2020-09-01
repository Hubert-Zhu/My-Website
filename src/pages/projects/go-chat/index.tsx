import React from "react"
import { PageProps, graphql } from "gatsby"
import { animated, useSpring } from "react-spring"

//Components
import Navbar from "../../../components/Navbar/index"
import Footer from "../../../components/Footer/index"

//Image
import demoImage from "../../../images/projects/go-chat/project3.jpg"

//function
import scrollTo from "../../../util/scrollTo"

//style
import "../commonStyle/style.scss"

const anchor = [
  {
    name: "Summary",
    herf: "#summary",
  },
  {
    name: "Technology",
    herf: "#technology",
  },
  {
    name: "SnapShot",
    herf: "#snapshot",
  },
  {
    name: "Links",
    herf: "#links",
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
            <h2 id="summary" className="content__subtitle">Summary</h2>
            <div className="content__description">
              <div>
                <b>Online Chatting room.</b> 📚
              </div>
              <div>Building ... 😄😄😄</div>
            </div>
          </div>

          <div>
            <h2 id="techonolgy" className="content__subtitle">Tech Stack</h2>
            <ul className="technology">
              <li className="technology__list">
                Framework:
                <ul className="technology__sublist">
                  <li>
                    Vue <span> --- Front-end</span>
                  </li>
                  <li>
                    Express <span> --- Back-end</span>
                  </li>
                </ul>
              </li>
              <li className="technology__list">
                Tool:
                <ul className="technology__sublist">
                  <li>
                    Sass <span>--- Manage style</span>
                  </li>
                  <li>
                    Vuex <span>--- State management pattern + library </span>
                  </li>

                  <li>
                    MongoDB <span>--- Database</span>
                  </li>
                  <li>
                    Mongoose <span>--- Tool for MongoDB</span>
                  </li>
                </ul>
              </li>
              <li className="technology__list">
                Infrastructure:
                <ul className="technology__sublist">
                  <li>Heroku</li>
                </ul>
              </li>
            </ul>
          </div>

          <div>
            <h2 id="snapshot" className="content__subtitle">SnapShot</h2>
            <div className="content__description">
              {/* <img
                className="content__snapshot"
                src={demopage}
                alt="demo-page"
              /> */}
            </div>
          </div>

          <div>
            <h2 id="links" className="content__subtitle">Links</h2>
            <div className="content__description">
              {/* <div>
                Demo Pages: <a href="#">N/A</a>
              </div> */}
              <div>
                Source code:{" "}
                <a href="https://github.com/Hubert-Zhu/goChat">
                  github.com/Hubert-Zhu/goChat
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebar">
          <div className="sidebar--fixed">
            {anchor.map((item, index) => (
              <animated.li
                style={sidebarAnimation}
                className="sidebar__link-box"
                key={index}
                onClick={() => {
                  scrollTo(item.herf)
                }}
              >
                {item.name}
              </animated.li>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default project
