import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Helmet } from "react-helmet";
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
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
        {/* <script>
          if (window.netlifyIdentity) {
             window.netlifyIdentity.on("init", user => {
              if (!user) {
            window.netlifyIdentity.on("login", () => {
              document.location.href = "/admin/";
              });
         }
         } );
           }
        </script> */}
      </Helmet>

      <div>{children}</div>

      <Footer />
    </div>
  )
}

export default Layout
