import React from "react"
import { Link } from "gatsby"

import Navbar from "../../components/Navbar"
import IconTitle from "../../components/IconTitle"
import Footer from "../../components/Footer"

import WorkIcon from "../../images/work-experience/WorkIcon.svg"
import WellnessWorldIcon from "../../images/work-experience/WellnessWorld.png"
import Searching from "../../images/work-experience/Searching.svg"
import "./style.scss"

const Projects = React.memo(() => {
  return (
    <div>
      <Navbar />
      <IconTitle title="Work Experience" Icon={WorkIcon} />

      <Link to="job1">
        <div className="job">
          <div className="job__company-icon">
            <img src={WellnessWorldIcon} alt="WellnessWorld" />
          </div>
          <div className="job__company-name">Wellness World</div>
          <div className="job__job-title">Full-time - Frontend Developer</div>
          <div className="job__job-time">2020.05 - 2020.08</div>
          <div className="job__job-description">
            Wellness World works on developing Mental Wellness Platform for
            North American college/university students. I am the only front-end
            develop in the team. My job is to develop a MVP for our Saas. The
            platform would be launched in 2020.09 in at least two North American
            Universities.{" "}
            <span className="job__detail"> For Detail {">>"}</span>
          </div>
        </div>
      </Link>

      <div className="job">
        <div className="job__company-icon">
          <img style={{ width: 80 }} src={Searching} alt="WellnessWorld" />
        </div>
        <div className="job__company-name">? ? ?</div>
        <div className="job__job-title">
          Full-time - Frontend/Fullstack Developer
        </div>
        <div className="job__job-time">2021.01 - 2020.04</div>
        <div className="job__job-description">
          I am looking for the next job.
        </div>
      </div>
      <Footer />
    </div>
  )
})

export default Projects
