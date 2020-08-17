// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, graphql } from "gatsby"
import Avatar from "./avatar.jpg"

import "./style.scss"

import Nav from "../../components/Nav"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <>
    <Nav style={{color:"white", backgroundColor:"rgba(0,0,0,0)"}}/>
    <div className="home">
      <div className="home__avatar">
        <img src={Avatar} alt="Hello" />
      </div>

      <div className="home__links">
        <div className="home__link">About Me</div>
        <div className="home__link">Blogs</div>
        <div className="home__link">Projects</div>
      </div>
    </div>
  </>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
