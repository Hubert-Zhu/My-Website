import React from "react"
import { Link } from "gatsby"

import Navbar from "../../components/Navbar"
import IconTitle from "../../components/IconTitle"
import Footer from "../../components/Footer"

import WorkIcon from "../../images/work-experience/WorkIcon.svg"

import "./style.scss"


const Projects = React.memo(() => {
  return (
    <div>
      <Navbar />
      <IconTitle title="Work Experience" Icon={WorkIcon}/>
      <Footer />
    </div>
  )
})

export default Projects
