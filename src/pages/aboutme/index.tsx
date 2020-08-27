// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, graphql } from "gatsby"

import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

import Avatar from "../../images/shared/avatar.jpg"
import "./style.scss"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <div>
    <Navbar />

    <div className="intro">
      <img className="intro__avatar" src={Avatar} alt="touxiang" />
      <div>
        <h1 className="intro__name">
          Hello! I am <span>Hubert Zhu!</span>
        </h1>
        <ul>
          <li className="intro__self-intro">🎉 Welcome to my website</li>
          <li className="intro__self-intro">
            💻 I’m a Web Frontend Developer{" "}
          </li>
          <li className="intro__self-intro">
            🎓 I’m a Computer Engineering Undergraduate at the University of
            Waterloo
          </li>
          <li className="intro__self-intro">
            😂 I’m currently learning Vue, TypeScript, etc... (a lot to learn)
          </li>
          <li className="intro__self-intro">
            💬 Oh! I'm looking for Co-op job for Winter 2020.
          </li>
          <li className="intro__self-intro">
            💼 Please contact me if you offer any Front-end or Full-Stack
            position{" "}
          </li>
        </ul>
      </div>
    </div>

    <div className="hr--gray"></div>

    <div className="tool-box">
      <h2 className="tool-box__title">My Toolbox</h2>

      <div className="tool-box__unit">
        <p className="tool-box__unit-topic">Languages:</p>
        <p className="tool-box__items">
          JavaScript (ES6, NodeJS), TypeScript, HTML5, CSS3, SASS/LESS, C++
        </p>
      </div>

      <div className="tool-box__unit">
        <p className="tool-box__unit-topic">Framework/Library:</p>
        <p className="tool-box__items">
          React, Gatsby, Next, Vue, Bootstrap, jQuery, Express
        </p>
      </div>

      <div className="tool-box__unit">
        <p className="tool-box__unit-topic">Technologies: </p>
        <p className="tool-box__items">
          RESTful API, GraphQL API, Ajax, Axios, SSR, Data Visualization
        </p>
      </div>

      <div className="tool-box__unit">
        <p className="tool-box__unit-topic">Database: </p>
        <p className="tool-box__items">MongoDB, MySQL(MySQL Workbench)</p>
      </div>

      <div className="tool-box__unit">
        <p className="tool-box__unit-topic">Design Tools:</p>
        <p className="tool-box__items">Adobe XD, InVision, Figma</p>
      </div>

      <div className="tool-box__unit">
        <p className="tool-box__unit-topic">Other Tools:</p>
        <p className="tool-box__items">
          Git/GitHub, Styled-Component, React-Router, React-Spring, Redux, Vuex, Gulp, Grunt, Storybook,
          Postman, Webpack, Rollup, Parcel, Jest, Enzyme, Netlify, Apache
          Echarts, Google Firebase
        </p>
      </div>
    </div>

    <div className="hr--gray"></div>


    <div className="contact">
      <h2 className="contact__title" >Contact Me </h2>
      
      <div className="contact__item" >Linkdin: <a href="https://www.linkedin.com/in/hubert-zhu-23002b19b/"> https://www.linkedin.com/in/hubert-zhu-23002b19b </a></div>

      <div className="contact__item" >Email: <a href="mailto: zhubolin010118@gmail.com">  zhubolin010118@gmail.com </a></div>
      
      <div className="contact__item" >Github: <a href="https://github.com/Hubert-Zhu">  https://github.com/Hubert-Zhu</a></div>
    </div>
    

    <Footer />
  </div>
)

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
