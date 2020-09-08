import React from "react"
import { PageProps, graphql } from "gatsby"
import { useSpring, animated } from "react-spring"

//Components
import Navbar from "../components/Navbar"
import Layout from "../components/Layout"
import SEO from "../components/seo"

import Avatar from "../images/shared/avatar.jpg"
import "./style.scss"

const UsingTypescript: React.FC<PageProps> = ({ data, path }) => {
 
  
  return (
    <Layout>
      <SEO />
      <div className="home">
        <Navbar />
        <div className="home__wrap">
          <div  className="home__avatar">
            <img src={Avatar} alt="Hello" />
          </div>

          <h1  className="home__name">Hubert Zhu</h1>
        </div>
      </div>
    </Layout>
  )
}

export default UsingTypescript

