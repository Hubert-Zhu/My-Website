import React from 'react'
import { graphql, withPrefix, useStaticQuery } from 'gatsby'

import Gatsby from "../../images/Footer/gatsby.svg"

import "./style.scss"

const Footer = React.memo(() => {
  return (
    <footer className={"footer"}>
        <div className={"footer__content"}>Copyright © 2020 Hubert(Bolin Zhu) Built with <a className={"footer__link"} href="https://www.gatsbyjs.com/">Gatsby <img src={Gatsby}/></a></div> 
    </footer>
  )
})

export default Footer
