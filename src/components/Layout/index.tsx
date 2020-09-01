import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet";

//components
import Navbar from "../Navbar/index"
import Footer from "../Footer/index"

const Layout = ({ title, description, children }) => {
  
  const data = useStaticQuery(graphql`
    query HeadingQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  const { siteMetadata } = data.site

  return (
    <div>
      <Helmet>
        <title>{title || siteMetadata.title}</title>
        <meta
          name="description"
          content={description || siteMetadata.description}
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=0"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#fff" />
      </Helmet>
      <div>{children}</div>

    </div>
  )
}

export default Layout
