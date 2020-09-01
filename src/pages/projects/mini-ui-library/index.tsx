import React from "react"
import { PageProps, graphql } from "gatsby"
import { animated, useSpring } from "react-spring"

//Components
import Navbar from "../../../components/Navbar/index"
import Footer from "../../../components/Footer/index"

//Image
import demoImage from "../../../images/projects/mini-ui-library/project1.jpg"
import demopage from "../../../images/projects/mini-ui-library/demopage.png"
import storypage from "../../../images/projects/mini-ui-library/storypage.png"

//function
import scrollTo from "../../../util/scrollTo"

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
            <h2 id="summary" className="content__subtitle">
              Summary
            </h2>
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
            <h2 id="technology" className="content__subtitle">
              Tech Stack
            </h2>

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

          <div>
            <h2 id="snapshot" className="content__subtitle">
              SnapShot
            </h2>
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
            <h2 id="links" className="content__subtitle">
              Links
            </h2>
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
                  github.com/Hubert-Zhu/Mini-UI-Library
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
