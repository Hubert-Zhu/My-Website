// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, graphql } from "gatsby"
import Avatar from "../../images/shared/avatar.jpg"
import { useSpring, animated } from "react-spring"

import "./style.scss"

import Nav from "../../components/Navbar"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => {
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
    <>
      <div className="home">
        <Nav />
        <div className="home__wrap">

          <animated.div style={animation} className="home__avatar">
            <img src={Avatar} alt="Hello" />
          </animated.div>

          <animated.h1 style={animation} className="home__name">Hubert Zhu</animated.h1>
        </div>
      </div>
    </>
  )
}

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
