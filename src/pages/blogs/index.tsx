import React from "react"
import { graphql, withPrefix, useStaticQuery } from "gatsby"
import blogIcon from "./blog.svg"
import "./style.scss"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"

const Blogs = React.memo(() => {
  return (
    <div>
      <Navbar />
      <div className={"blogs"}>
        <h1 className={"blogs__title"}>Personal Blogs</h1>
        <div className={"blogs__icon-container"}>
          <div className="blogs__line"></div>
          <div>
            <img className="blogs__icon" src={blogIcon} alt="icons" />
          </div>
          <div className="blogs__line"></div>
        </div>
      </div>
      <Footer />
    </div>
  )
})

export default Blogs
