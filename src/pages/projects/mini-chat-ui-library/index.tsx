// If you don't want to use TypeScript you can delete this file!
import React from "react"
import Navbar from "../../../components/Navbar/index"
import { PageProps, graphql } from "gatsby"

const project = () => (
  <>
    <div>
      <Navbar />
      <div>Mini-Chat-UI-library</div>
      <div>This is the desciprtion and background of this project</div>
      <div>
          <h1>Summary Sheet</h1>
          <div>Framework: React</div>
          <div>Technology: Styled-Component, Storybook, React-Spring</div>
      </div>
    </div>
  </>
)

export default project


