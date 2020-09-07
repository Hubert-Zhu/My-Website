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
  const animation = useSpring({
    transform: "translate3d(0px, 0px, 0px)",
    opacity: 1,
    from: { transform: "translate3d(0px, 60px, 0px)" },
    config: { 
      tension: 100,
    },
    delay: 300,
  })
  
  return (
    <Layout>
      <SEO />
      <div className="home">
        <Navbar />
        <div className="home__wrap">

          <animated.div style={animation} className="home__avatar">
            <img src={Avatar} alt="Hello" />
          </animated.div>

          <animated.h1 style={animation} className="home__name">Hubert Zhu</animated.h1>
        </div>
      </div>
    </Layout>
  )
}

export default UsingTypescript

