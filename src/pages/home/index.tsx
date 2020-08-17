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
    <div className="home">
      <Nav />

      <div className="home__wrap">
        <div className="home__avatar">
          <img src={Avatar} alt="Hello" />
        </div>

        <h1 className="home__name">Hubert Zhu</h1>
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
