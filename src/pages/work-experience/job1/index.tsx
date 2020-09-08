// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, graphql } from "gatsby"
import { animated, useSpring } from "react-spring"

import Navbar from "../../../components/Navbar/index"
import demoImage from "../../../images/work-experience/job1/WellnessWorld.png"
import scrollTo from "../../../util/scrollTo"

import "./style.scss"
import { format } from "path"
const links = [
  {
    name: "Job Position",
    herf: "#job-position",
  },
  {
    name: "Tech Stack",
    herf: "#tech-stack",
  },
  {
    name: "Job Description",
    herf: "#job-description",
  },
]

const Job = () => {
  const sidebarAnimation = useSpring({
    transform: "translate3d(0px, 0px, 0px)",
    opacity: 1,
    from: { transform: "translate3d(100px, 0px, 0px)" },
    delay: 300,
  })

  return (
    <div>
      <Navbar />
      <div className="job-grid">
        <div className="job">
          <h1 className="job__title">Wellness World</h1>
          <div className="job__company-symbol--special-blue">
            <img src={demoImage} alt="Demo Page" />
          </div>

          <div id="job-position">
            <h2 className="job__subtitle">Job Position</h2>
            <div className="job__description">
              <ul>
                <li>Company: WellnesWorld</li>
                <li>Position: Front-end Developer</li>
                <li>Time: 2020.05 - 2020.08</li>
                <li>
                  Place: Ottawa, ON, Canada (Work remote due to COVIN-19 😷)
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h2 id="tech-stack" className="job__subtitle">
              Tech Stack
            </h2>

            <ul className="technology">
              <li className="technology__list">
                Framework:
                <ul className="technology__sublist">
                  <li>
                    React <span> --- Front-end</span>
                  </li>
                </ul>
              </li>
              <li className="technology__list">
                Tool:
                <ul className="technology__sublist">
                  <li>
                    Styled-compontents <span>--- Manage style</span>
                  </li>
                  <li>
                    Redux <span>--- State management pattern + library </span>
                  </li>
                  <li>
                    Material-UI/Ant-design{" "}
                    <span>--- UI Libraries for React</span>
                  </li>

                  <li>
                    Postman <span>--- API Test Tool</span>
                  </li>

                  <li>
                    Git/Github<span>--- Version Control</span>
                  </li>
                  <li>
                    RESTful API <span>--- HTTP requests</span>
                  </li>
                  <li>
                    Google Analytics/Hotjar{" "}
                    <span>--- Track and report web visitors’ activities</span>
                  </li>
                  <li>
                    Figma <span>--- Design Tool</span>
                  </li>
                </ul>
              </li>
              <li className="technology__list">
                Infrastructure:
                <ul className="technology__sublist">
                  <li>
                    Netlify <span> --- serverless services</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h2 id="job-description" className="job__subtitle">
              Job Description
            </h2>
            <div className="job__description">
              <ul>
                <li>
                  Developed, managed, and tested the frontend of mental health
                  platform for North American Universities’ Students.{" "}
                </li>
                <li>
                  <b>Took charge of all frontend tasks from the beginning</b>,
                  and experienced two Beta tests in Agile Team.{" "}
                </li>
                <li>
                  Created webpages and components using{" "}
                  <b> React, Redux, Styled-Components </b>, such as auto login
                  System, resources filters, personal profile system.
                </li>
                <li>
                  Implemented asynchronous server-side <b>RESTful API</b> calls
                  for interactivity with frontend by Axios and tested APIs by
                  Postman
                </li>
                <li>
                  Collaborated with part-time designer to design and{" "}
                  <b>
                    develop responsive, dynamic and cross-browser compatible web
                    pages
                  </b>{" "}
                  by
                  <b>Figma or Adobe XD </b>.
                </li>
                <li>
                  Deployed <b>SPA on Netlify</b> server and configured files to
                  adapt for server{" "}
                </li>
                <li>
                  Integrated <b>Google Analytics and Hotjar</b> with website to
                  track and report web visitors’ activities
                </li>
                <li>
                  Imported and restyled the components from{" "}
                  <b>Ant-Design and Material UI</b> libraries
                </li>
                <li>
                  Tested the functionality in multiple browsers to ensure
                  cross-browser compatibility
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="job-sidebar">
          <div className="job-sidebar--fixed">
            {links.map((item, index) => (
              <animated.li
                style={sidebarAnimation}
                className="job-sidebar__link-box"
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
    </div>
  )
}

export default Job
