// If you don't want to use TypeScript you can delete this file!
import React from "react"
import { PageProps, graphql } from "gatsby"
import "./style.scss"
import Avatar from "./Avatar.jpg"

type DataProps = {
  site: {
    buildTime: string
  }
}

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <div>
    <nav>
      <img src="#" alt="Touxiang" />
      <div>Hubert Zhu</div>'
      <ol>
        <li>Home</li>
        <li>About Me</li>
        <li>Projects</li>
        <li>Blogs</li>
        <li>GitHub</li>
      </ol>
    </nav>

    <div className="intor__div">
      <img src={Avatar} alt="touxiang" />
      <div>
        <h1>
          Hey! I am <span>Hubert Zhu!</span>
        </h1>
        <ul>
          <li>🎉🎉🎉Welcome to my website🎉🎉🎉</li>
          <li>💻 I’m a Web Frontend Developer </li>
          <li>
            🎓 I’m a Computer Engineering Undergraduate at the University of
            Waterloo
          </li>
          <li>
            😂 I’m currently learning Vue, TypeScript, etc... (a lot to learn)
          </li>
          <li>💬 Oh! I'm looking for Co-op job for Winter 2020.</li>
          <li>
            💬 Please contact me if you offer any Front-end or Full-Stack
            position{" "}
          </li>
        </ul>
      </div>
    </div>

    <div className="hr__div--gray"></div>

    <div className="toolbox__div">
      <h2>My Toolbox</h2>

      <div className="toolBoxUnit__div">
        <p className="topic__p--bold">Languages:</p>
        <p>JavaScript (ES6, NodeJS), TypeScript, HTML5/CSS3, SASS/LESS, C++</p>
      </div>

      <div className="toolBoxUnit__div">
        <p className="topic__p--bold"> Framework/Library:</p>
        <p>
          React, Gatsby, Vue, Bootstrap, jQuery, Express.js, Next.js, Lodash
        </p>
      </div>

      <div className="toolBoxUnit__div">
        <p className="topic__p--bold"> Design Tools</p>{" "}
        <p>Adobe XD, InVision, Figma</p>
      </div>
      <div className="toolBoxUnit__div">
        <p className="topic__p--bold"> Other Technologies: </p>
        <p>RESTful, GraphQL, Ajax, Axios, SSR, Data Visualization, HTTP/TCP</p>
      </div>
      <div className="toolBoxUnit__div">
        <p className="topic__p--bold">Other Tools</p>
        <p>
          Git/GitHub, Styled-Components, Redux, MobX, Vuex, Gulp, Grunt,
          Storybook, Postman, Webpack, Rollup, Parcel, Jest, Enzyme, Netlify,
          Apache Echarts, MySQL Workbench, Chrome Devtools, NPM/Yarn, Bootstrap,
          Google Firebase
        </p>
      </div>
    </div>
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
