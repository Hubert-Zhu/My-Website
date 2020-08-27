// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, graphql } from "gatsby"
import { animated, useSpring } from "react-spring"

import Navbar from "../../../components/Navbar/index"

import demoImage from "../../../images/projects/my-blog/project2.png"

// import "./style.scss"

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
          <h1 className="content__title">Personal Website</h1>
          <div className="content__demo-image">
            <img src={demoImage} alt="Demo Page" />
          </div>

          <div>
            <h2 className="content__subtitle">Summary</h2>
            <div className="content__description">
              <div>
                This project is a{" "}
                <b>Personal Website based on GatsbyJS and GraphQL.</b>
              </div>
              <div>
                I have used React and RESTful for one year. During last year, I
                have heard <a href="https://www.gatsbyjs.com/">GatsbyJS</a>,{" "}
                <a href="https://nextjs.org/">NextJS</a>,{" "}
                <a href="https://graphql.org/">GraphQL</a> so many times, but
                have not got any chance to learn and create a demo with them
                until I built this Project. For building this new site, I did
                countless research. Finally, I chose "Gatsby + Typescript + Sass
                + Netlify + Netlify CMS" to develop this site. Here are some
                reasons why I chose them. First, the Gatsby Plugins Ecosystem is
                mature, as there are at least 2000 plugins right now. Therefore,
                I can quickly add new features to my website by embedding these
                plugins. It saves my time from making new wheel and setting
                complex configuration. Moreover, I like their data management
                strategy. I do not need to waste my time on building back-end or
                setting up database. As I just need to store the blog content, I
                can use "markdown files + markdown transferring plugin + Netlify
                CMS" to achieve this feature without database. To show the
                blogs, "GraphQL + Template + Gatsby API" is perfect combo. I
                will write a blog called “why Gatsby“ in my blog section.
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
                    <li>
                      GatsbyJS{" "}
                      <span>--- React-based open source framework</span>
                    </li>
                  </ul>
                </li>
                <li className="technology__list">
                  Tool:
                  <ul className="technology__sublist">
                    <li>
                      SASS <span>--- Manage style</span>
                    </li>
                    <li>
                      GraphQL <span>--- Queries with existing data</span>
                    </li>
                    <li>
                      Netlify CMS <span>--- Content Management System</span>
                    </li>
                    <li>
                      React Spring{" "}
                      <span>--- Spring-physics based animation library</span>
                    </li>
                    <li>
                      Gatsby Plugins{" "}
                      <span>
                        --- Improve performance, scalability, and security
                      </span>
                    </li>
                  </ul>
                </li>
                <li className="technology__list">
                  Infrastructure:
                  <ul className="technology__sublist">
                    <li>
                      Netlify <span>--- cloud service</span>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="content__subtitle">SnapShot</h2>
            <div className="content__description">
              You are visiting this project right now, so I think I do not need to place a snapshot here?  😂  😂  😂 
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
                <a href="https://github.com/Hubert-Zhu/My-Blog">
                  https://github.com/Hubert-Zhu/My-Blog
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
